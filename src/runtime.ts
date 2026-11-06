// The hand-written core of the Sempera TypeScript SDK: authentication, errors, retries, idempotency, paging.
// No dependencies; it needs a global `fetch` (Node 18+, browsers, edge runtimes). The per-operation methods
// are generated in ./generated/operations.ts.

export const SDK_VERSION = "0.1.0";
const FALLBACK_BASE_URL = "https://api.sempera.org";

export interface OperationSpec {
  readonly method: string;
  readonly path: string;
  readonly pathParams: readonly string[];
  readonly query: readonly string[];
  readonly idempotent: boolean;
  readonly body: "json" | "multipart" | "form" | null;
  readonly response: "json" | "text" | "none";
}

export interface ClientOptions {
  /** Your `sempera_sk_...` key. Defaults to the SEMPERA_API_KEY environment variable. Keep it on your server. */
  apiKey?: string;
  baseUrl?: string;
  /** Retries after the first attempt. Default 2. */
  maxRetries?: number;
  timeoutMs?: number;
  headers?: Record<string, string>;
  fetch?: typeof fetch;
  /** Replace the backoff wait, for tests. */
  sleep?: (ms: number) => Promise<void>;
}

export interface RequestOptions {
  /** One key per logical request. Generated for you on operations that accept one, and reused by every retry. */
  idempotencyKey?: string;
  headers?: Record<string, string>;
  signal?: AbortSignal;
  timeoutMs?: number;
  maxRetries?: number;
}

export class SemperaError extends Error {
  readonly status: number;
  readonly code: string;
  readonly requestId?: string;
  readonly reason?: string;
  readonly field?: string;
  readonly headers: Record<string, string>;
  readonly body: unknown;
  constructor(status: number, code: string, message: string, extra: { requestId?: string; reason?: string; field?: string; headers?: Record<string, string>; body?: unknown } = {}) {
    super(`${status} ${code}: ${message}`);
    this.name = new.target.name;
    this.status = status;
    this.code = code;
    this.requestId = extra.requestId;
    this.reason = extra.reason;
    this.field = extra.field;
    this.headers = extra.headers ?? {};
    this.body = extra.body;
  }
}
export class ValidationError extends SemperaError {}
export class AuthenticationError extends SemperaError {}
export class PermissionDeniedError extends SemperaError {}
export class NotFoundError extends SemperaError {}
export class ConflictError extends SemperaError {}
export class IdempotencyKeyReusedError extends ConflictError {}
export class RateLimitError extends SemperaError {
  retryAfterSeconds?: number;
}
export class ServerError extends SemperaError {}
export class ConnectionFailure extends SemperaError {}

function retryAfter(headers: Record<string, string>): number | undefined {
  const n = Number(headers["retry-after"]);
  return Number.isFinite(n) && headers["retry-after"] !== undefined && headers["retry-after"] !== "" ? Math.max(0, n) : undefined;
}

export function errorFor(status: number, headers: Record<string, string>, payload: unknown): SemperaError {
  const top = (payload && typeof payload === "object" ? payload : {}) as Record<string, unknown>;
  const env = (top.error && typeof top.error === "object" ? top.error : {}) as Record<string, unknown>;
  const code = String(env.code ?? top.code ?? `http_${status}`);
  const message = String(env.message ?? top.message ?? `HTTP ${status}`);
  const extra = {
    requestId: (env.request_id as string | undefined) ?? headers["x-request-id"],
    reason: env.reason as string | undefined,
    field: env.field as string | undefined,
    headers,
    body: payload,
  };
  if (code === "idempotency_key_reused") return new IdempotencyKeyReusedError(status, code, message, extra);
  if (status === 429) {
    const err = new RateLimitError(status, code, message, extra);
    err.retryAfterSeconds = retryAfter(headers);
    return err;
  }
  const byStatus: Record<number, typeof SemperaError> = { 400: ValidationError, 401: AuthenticationError, 403: PermissionDeniedError, 404: NotFoundError, 409: ConflictError };
  const Cls = byStatus[status] ?? (status >= 500 ? ServerError : SemperaError);
  return new Cls(status, code, message, extra);
}

function newKey(): string {
  return globalThis.crypto.randomUUID().replaceAll("-", "");
}

export class SemperaCore {
  readonly baseUrl: string;
  private readonly apiKey?: string;
  private readonly maxRetries: number;
  private readonly timeoutMs: number;
  private readonly extraHeaders: Record<string, string>;
  private readonly fetchImpl: typeof fetch;
  private readonly sleep: (ms: number) => Promise<void>;

  constructor(options: ClientOptions = {}) {
    const env = typeof process !== "undefined" ? process.env : {};
    this.apiKey = options.apiKey ?? env.SEMPERA_API_KEY;
    this.baseUrl = (options.baseUrl ?? env.SEMPERA_BASE_URL ?? FALLBACK_BASE_URL).replace(/\/+$/, "");
    this.maxRetries = options.maxRetries ?? 2;
    this.timeoutMs = options.timeoutMs ?? 60_000;
    this.extraHeaders = options.headers ?? {};
    this.fetchImpl = options.fetch ?? globalThis.fetch.bind(globalThis);
    this.sleep = options.sleep ?? ((ms) => new Promise((resolve) => setTimeout(resolve, ms)));
  }

  protected url(op: OperationSpec, params: Record<string, unknown> | undefined): string {
    let path = op.path;
    for (const name of op.pathParams) {
      const value = params?.[name];
      if (value === undefined || value === null) throw new TypeError(`missing path parameter ${name}`);
      path = path.replace(`{${name}}`, encodeURIComponent(String(value)));
    }
    const query = new URLSearchParams();
    for (const name of op.query) {
      const value = params?.[name];
      if (value !== undefined && value !== null) query.set(name, String(value));
    }
    const qs = query.toString();
    return this.baseUrl + path + (qs ? `?${qs}` : "");
  }

  protected async call(op: OperationSpec, params: Record<string, unknown> | undefined, body: unknown, options: RequestOptions = {}): Promise<unknown> {
    const headers: Record<string, string> = { Accept: "application/json", "User-Agent": `sempera-typescript/${SDK_VERSION}`, ...this.extraHeaders, ...options.headers };
    if (this.apiKey) headers.Authorization = `Bearer ${this.apiKey}`;
    let payload: BodyInit | undefined;
    if (body !== undefined) {
      if (op.body === "multipart") payload = body as FormData;
      else if (op.body === "form") {
        payload = new URLSearchParams(Object.entries(body as Record<string, unknown>)
          .filter(([, value]) => value !== undefined && value !== null)
          .map(([key, value]) => [key, String(value)])).toString();
        headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      else {
        payload = JSON.stringify(body);
        headers["Content-Type"] = "application/json";
      }
    }
    // One key per logical request, reused by every retry, so a retry can never act twice.
    if (op.idempotent) headers["Idempotency-Key"] = options.idempotencyKey ?? newKey();
    const url = this.url(op, params);
    const retries = options.maxRetries ?? this.maxRetries;
    const safe = op.method === "GET" || "Idempotency-Key" in headers;
    for (let attempt = 0; ; attempt++) {
      let response: Response;
      try {
        const timeout = AbortSignal.timeout(options.timeoutMs ?? this.timeoutMs);
        const signal = options.signal ? AbortSignal.any([options.signal, timeout]) : timeout;
        response = await this.fetchImpl(url, { method: op.method, headers, body: payload, signal });
      } catch (cause) {
        if (options.signal?.aborted) throw cause;
        if (attempt < retries && safe) {
          await this.sleep(this.delay(attempt));
          continue;
        }
        throw new ConnectionFailure(0, "connection_failed", cause instanceof Error ? cause.message : String(cause));
      }
      const rheaders: Record<string, string> = {};
      response.headers.forEach((v, k) => (rheaders[k.toLowerCase()] = v));
      if (response.ok) return this.decode(op, response);
      const text = await response.text();
      let parsed: unknown = null;
      try {
        parsed = JSON.parse(text);
      } catch {
        parsed = null;
      }
      const error = errorFor(response.status, rheaders, parsed);
      const retryable = [429, 502, 504].includes(response.status) || (response.status === 503 && error.code === "service_unavailable");
      if (retryable && attempt < retries && (response.status === 429 || safe)) {
        await this.sleep(this.delay(attempt, retryAfter(rheaders)));
        continue;
      }
      throw error;
    }
  }

  private delay(attempt: number, retryAfterSeconds?: number): number {
    if (retryAfterSeconds !== undefined) return Math.min(retryAfterSeconds, 60) * 1000;
    return Math.min(8000, 500 * 2 ** attempt) * (0.5 + Math.random() / 2);
  }

  private async decode(op: OperationSpec, response: Response): Promise<unknown> {
    if (op.response === "none" || response.status === 204) return undefined;
    if (op.response === "text") return response.text();
    const text = await response.text();
    return text ? JSON.parse(text) : undefined;
  }
}

export interface Page<T> {
  data: T[];
  has_more?: boolean;
  next_cursor?: string | null;
}

/**
 * Yield every item of a cursor-paged list, following `next_cursor` until `has_more` is false.
 *
 *   for await (const agent of paginate((cursor) => client.listAgents({ limit: 100, cursor }))) { ... }
 *
 * It follows the native `{ object: "list", data, has_more, next_cursor }` envelope only; compatibility
 * routes keep their own envelopes, and any other shape throws.
 */
export async function* paginate<T>(fetchPage: (cursor?: string) => Promise<Page<T>>): AsyncGenerator<T> {
  let cursor: string | undefined;
  for (;;) {
    const page = await fetchPage(cursor);
    if (!page || !Array.isArray(page.data)) throw new TypeError("paginate() needs a native list response with a `data` array");
    yield* page.data;
    if (!page.has_more || !page.next_cursor) return;
    cursor = page.next_cursor;
  }
}
