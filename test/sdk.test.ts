import assert from "node:assert/strict";
import { test } from "node:test";
import {
  Sempera, paginate, verifySignature, constructEvent, WebhookSignatureError, OPERATIONS, ERROR_CODES,
  AuthenticationError, RateLimitError, IdempotencyKeyReusedError, NotFoundError, ServerError, ConnectionFailure, ValidationError,
} from "../src/index.ts";

type Call = { url: string; init: RequestInit };
function scripted(...answers: Array<Response | Error>) {
  const calls: Call[] = [];
  const fetchImpl = (async (url: string, init: RequestInit) => {
    calls.push({ url: String(url), init });
    const next = answers.shift();
    if (!next) throw new Error("no scripted answer left");
    if (next instanceof Error) throw next;
    return next;
  }) as typeof fetch;
  return { calls, fetchImpl };
}
const json = (status: number, body: unknown, headers: Record<string, string> = {}) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json", ...headers } });
const client = (fetchImpl: typeof fetch, extra = {}) => new Sempera({ apiKey: "sempera_sk_test", fetch: fetchImpl, sleep: async () => {}, ...extra });
const header = (c: Call, name: string) => (c.init.headers as Record<string, string>)[name];

test("sends the bearer key, builds the path and query, and returns parsed JSON", async () => {
  const { calls, fetchImpl } = scripted(json(200, { object: "session", id: "ses_1" }));
  const out = await client(fetchImpl).getSession({ session_id: "a b/c", agent_id: "agt_1" });
  assert.deepEqual(out, { object: "session", id: "ses_1" });
  assert.equal(calls[0].url, "https://api.sempera.org/v1/sessions/a%20b%2Fc?agent_id=agt_1");
  assert.equal(header(calls[0], "Authorization"), "Bearer sempera_sk_test");
});

test("a missing path parameter is refused before any request", async () => {
  const { calls, fetchImpl } = scripted();
  await assert.rejects(() => client(fetchImpl).getSession({} as never), TypeError);
  assert.equal(calls.length, 0);
});

test("error envelopes become typed errors that carry code, reason and request id", async () => {
  const body = (code: string, extra = {}) => ({ error: { code, message: "no", request_id: "req_1", ...extra } });
  const cases: Array<[number, string, Function]> = [
    [401, "invalid_credential", AuthenticationError], [404, "not_found", NotFoundError],
    [400, "validation_failed", ValidationError], [409, "idempotency_key_reused", IdempotencyKeyReusedError], [500, "internal_error", ServerError],
  ];
  for (const [status, code, Cls] of cases) {
    const { fetchImpl } = scripted(json(status, body(code, { reason: "why", field: "name" })));
    await assert.rejects(() => client(fetchImpl, { maxRetries: 0 }).getSession({ session_id: "x" }), (e: any) => {
      assert.ok(e instanceof Cls, `${status} ${code} -> ${e.constructor.name}`);
      assert.equal(e.code, code);
      assert.equal(e.requestId, "req_1");
      assert.equal(e.reason, "why");
      assert.equal(e.field, "name");
      return true;
    });
  }
});

test("every documented error code is known to the SDK", () => {
  for (const code of ["insufficient_scope", "rate_limited", "idempotency_key_reused", "validation_failed", "not_found"]) assert.ok((ERROR_CODES as readonly string[]).includes(code), code);
});

test("429 waits Retry-After and retries, even a POST; the idempotency key is generated once and reused", async () => {
  const waits: number[] = [];
  const { calls, fetchImpl } = scripted(json(429, { error: { code: "rate_limited", message: "slow" } }, { "retry-after": "3" }), json(201, { object: "session", id: "ses_2" }));
  const c = client(fetchImpl, { sleep: async (ms: number) => void waits.push(ms) });
  await c.createSession({ agent_id: "agt_1" } as never);
  assert.deepEqual(waits, [3000]);
  assert.equal(calls.length, 2);
  const key = header(calls[0], "Idempotency-Key");
  assert.match(key, /^[0-9a-f]{32}$/);
  assert.equal(header(calls[1], "Idempotency-Key"), key);
});

test("a caller-supplied idempotency key is sent as given, and 5xx on a keyed POST retries with it", async () => {
  const { calls, fetchImpl } = scripted(json(503, { error: { code: "service_unavailable", message: "x" } }), json(201, { id: "ses_3" }));
  await client(fetchImpl).createSession({ agent_id: "agt_1" } as never, { idempotencyKey: "order-42" });
  assert.deepEqual(calls.map((c) => header(c, "Idempotency-Key")), ["order-42", "order-42"]);
});

test("a POST without an idempotency key is never retried after a 5xx or a dropped connection", async () => {
  assert.equal(OPERATIONS.generateSigningKey.idempotent, false);
  const { calls, fetchImpl } = scripted(json(502, { error: { code: "provider_failed", message: "x" } }), json(200, {}));
  await assert.rejects(() => client(fetchImpl).generateSigningKey(undefined as never), ServerError);
  assert.equal(calls.length, 1);
});

test("owner_setup_required (503) is not retried, and retries stop at maxRetries", async () => {
  let { calls, fetchImpl } = scripted(json(503, { error: { code: "owner_setup_required", message: "x" } }), json(200, {}));
  await assert.rejects(() => client(fetchImpl).getSession({ session_id: "x" }), ServerError);
  assert.equal(calls.length, 1);
  ({ calls, fetchImpl } = scripted(json(429, { error: { code: "rate_limited", message: "x" } }), json(429, { error: { code: "rate_limited", message: "x" } }), json(429, { error: { code: "rate_limited", message: "x" } })));
  await assert.rejects(() => client(fetchImpl, { maxRetries: 2 }).getSession({ session_id: "x" }), RateLimitError);
  assert.equal(calls.length, 3);
});

test("a network failure on a GET retries, then surfaces as ConnectionFailure", async () => {
  const { calls, fetchImpl } = scripted(new TypeError("fetch failed"), new TypeError("fetch failed"), new TypeError("fetch failed"));
  await assert.rejects(() => client(fetchImpl).getSession({ session_id: "x" }), ConnectionFailure);
  assert.equal(calls.length, 3);
});

test("paginate follows next_cursor until has_more is false", async () => {
  const pages = [{ data: [1, 2], has_more: true, next_cursor: "c1" }, { data: [3], has_more: false, next_cursor: null }];
  const seen: Array<string | undefined> = [];
  const items: number[] = [];
  for await (const n of paginate<number>(async (cursor) => { seen.push(cursor); return pages.shift()!; })) items.push(n);
  assert.deepEqual(items, [1, 2, 3]);
  assert.deepEqual(seen, [undefined, "c1"]);
  await assert.rejects(async () => { for await (const _ of paginate(async () => ({ tools: [] }) as never)); }, TypeError);
});

// The known answer published in the webhooks guide: any implementation must agree with it.
const SECRET = "whsec_vector_0123456789";
const T = 1790000000;
const BODY = '{"created_at":"2026-09-28T12:00:00+00:00","data":{"actor":"vector","endpoint_id":"22222222-2222-4222-8222-222222222222"},"id":"evt_00000000000000000000000000000001","object":"event","type":"webhook.test","workspace_id":"11111111-1111-4111-8111-111111111111"}';
const SIG = `t=${T},v1=1f4226699ca9fa61b71fbb57dbd2f57efa6788488437ee2e411ea4e3002be3c1`;

test("webhook signature: the published known answer verifies", () => {
  verifySignature(SECRET, BODY, SIG, { now: T + 10 });
  verifySignature(SECRET, Buffer.from(BODY), SIG, { now: T - 10 });
  assert.equal((constructEvent(SECRET, BODY, SIG, { now: T }) as any).type, "webhook.test");
});

test("webhook signature: tampering, a wrong secret, a stale timestamp and bad headers are refused", () => {
  const refuse = (...args: Parameters<typeof verifySignature>) => assert.throws(() => verifySignature(...args), WebhookSignatureError);
  refuse(SECRET, BODY + " ", SIG, { now: T });
  refuse("whsec_other", BODY, SIG, { now: T });
  refuse(SECRET, BODY, SIG, { now: T + 301 });
  refuse(SECRET, BODY, SIG, { now: T - 301 });
  refuse(SECRET, BODY, SIG.replace("v1=1f", "v1=2f"), { now: T });
  refuse(SECRET, BODY, SIG.replace(/v1=.*/, "v1=short"), { now: T });
  refuse(SECRET, BODY, "", { now: T });
  refuse(SECRET, BODY, undefined, { now: T });
  refuse(SECRET, BODY, "garbage", { now: T });
  refuse(SECRET, BODY, `t=abc,v1=${SIG.split("v1=")[1]}`, { now: T });
});
