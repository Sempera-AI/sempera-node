# @sempera/sdk

[Documentation](https://docs.sempera.org) | [SDKs](https://docs.sempera.org/sdks) | [OpenAPI document](https://api.sempera.org/openapi.json) | [MIT licence](LICENSE)

The official TypeScript client for the [Sempera](https://sempera.org) API at `https://api.sempera.org`.

* One typed method for every operation in the public OpenAPI document (`https://api.sempera.org/openapi.json`), generated from it, so the client follows the API.
* A small hand-written core: bearer-key authentication, typed errors, retries with exponential backoff, automatic idempotency keys, cursor paging and webhook signature verification.
* No runtime dependencies. It needs a global `fetch` (Node 22.18 or newer, or any edge runtime).

## Install

```bash
npm install @sempera/sdk
```

## Quick start

Create an API key in the Sempera App and keep it on your server. Pass it to the constructor, or set `SEMPERA_API_KEY` and omit it.

```ts
import { Sempera } from "@sempera/sdk";

const client = new Sempera({ apiKey: process.env.SEMPERA_API_KEY });

const me = await client.getMe();
console.log(me);
```

Methods are named after the operation id in the contract (`listAgents`, `createCall`, `sendSms`). Path and query parameters are named exactly as in the contract and passed in one object. A request body is a plain object.

### Agents

```ts
import { paginate } from "@sempera/sdk";

const page = await client.listAgents({ limit: 20 });
for (const agent of page.data) console.log(agent.id);

// Or follow every page:
for await (const agent of paginate((cursor) => client.listAgents({ limit: 100, cursor }))) {
  console.log(agent.id);
}

const one = await client.getAgent({ agent_id: "agt_example" });
```

### Calls

```ts
const call = await client.createCall(
  {
    agent_id: "agt_example",
    mode: "prompt",
    phone_number: "+14155550123",
    task: "Confirm Friday at 3pm. Ask whether that time still suits.",
    consent_basis: "This person asked us to call them about Friday.",
  },
  { idempotencyKey: "friday-3pm-ada" },
);

const same = await client.getCall({ call_id: String(call.id) });
const recent = await client.listCalls({ agent_id: "agt_example", limit: 10 });
```

### Phone numbers and text messages

```ts
const numbers = await client.listPhoneNumbers({ agent_id: "agt_example" });

await client.sendSms({
  agent_id: "agt_example",
  agent_number: "+14155550100",
  user_number: "+14155550123",
  agent_message: "Your table is confirmed for Friday at 3pm.",
  consent_basis: "This person asked us to text them a confirmation.",
});
```

### Conversations

```ts
const threads = await client.messagingConversations({ agent_id: "agt_example", channel: "sms" });
const thread = await client.messagingConversation({
  agent_id: "agt_example",
  channel: "sms",
  conversation_id: "conv_example",
});
```

### Knowledge sources

```ts
const sources = await client.listKnowledgeSources({ agent_id: "agt_example" });
await client.createTextKnowledgeSource({ agent_id: "agt_example", name: "Opening hours", content: "Open 9 to 5, Monday to Friday." });
```

### Webhooks

Verify every delivery against the raw request body before you parse it. The helper checks the `X-Sempera-Signature` header (`t=<unix seconds>,v1=<hex HMAC-SHA256 over "<t>." + body>`) in constant time and rejects a timestamp more than 300 seconds from your clock. Answer `400` and process nothing when it throws.

```ts
import { constructEvent, WebhookSignatureError } from "@sempera/sdk";

export function handle(rawBody: string, signatureHeader: string): number {
  try {
    const event = constructEvent("whsec_example", rawBody, signatureHeader);
    console.log(event.type, event.id);
    return 200;
  } catch (err) {
    if (err instanceof WebhookSignatureError) return 400;
    throw err;
  }
}
```

## Errors

Every refusal becomes a typed error carrying the HTTP `status`, the stable `code`, an optional `reason` and `field`, and the `requestId` to quote to support. Branch on `code` or `reason`, never on the message.

```ts
import { NotFoundError, RateLimitError, SemperaError } from "@sempera/sdk";

try {
  await client.getAgent({ agent_id: "agt_missing" });
} catch (err) {
  if (err instanceof NotFoundError) console.log(err.code, err.requestId);
  else if (err instanceof RateLimitError) console.log("slow down");
  else if (err instanceof SemperaError) console.log(err.status, err.code, err.reason);
  else throw err;
}
```

Classes: `ValidationError` (400), `AuthenticationError` (401), `PermissionDeniedError` (403), `NotFoundError` (404), `ConflictError` (409), `IdempotencyKeyReusedError` (409), `RateLimitError` (429), `ServerError` (5xx) and `ConnectionFailure` (no answer).

## Retries and idempotency

The client retries a `429`, a `502`, a `504`, a `503` with code `service_unavailable` and a dropped connection, two times by default, with exponential backoff and jitter, waiting the `Retry-After` it is sent. Change the count with `maxRetries` on the client or on one call. A write is retried only when it carries an idempotency key (generated for you, and reused by every retry) or after a `429`. Pass your own `idempotencyKey` to make a retry safe across process restarts.

## Develop

```bash
npm install
npm run typecheck
npm test
```

The tests replace `fetch` with a scripted fake, so they need no network and no key.

## Licence

MIT. Copyright Sempera Labs, Inc.
