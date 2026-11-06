// Verify the `X-Sempera-Signature` header on a webhook delivery (Node: uses node:crypto).
//
// The header is `t=<unix seconds>,v1=<lowercase hex HMAC-SHA256>`, the HMAC keyed with your endpoint secret
// over `"<t>." + raw_body`. Verify against the exact bytes received, before parsing the JSON.
import { createHmac, timingSafeEqual } from "node:crypto";

export const SIGNATURE_HEADER = "X-Sempera-Signature";
export const DEFAULT_TOLERANCE_SECONDS = 300;

export class WebhookSignatureError extends Error {}

export interface VerifyOptions {
  toleranceSeconds?: number;
  /** Unix seconds; defaults to the current time. */
  now?: number;
}

/** Throws `WebhookSignatureError` unless the signature is valid and within the tolerance window. */
export function verifySignature(secret: string, body: string | Uint8Array, header: string | null | undefined, options: VerifyOptions = {}): void {
  if (!header) throw new WebhookSignatureError(`missing ${SIGNATURE_HEADER} header`);
  const parts: Record<string, string> = {};
  for (const piece of header.split(",")) {
    const i = piece.indexOf("=");
    if (i > 0) parts[piece.slice(0, i).trim()] ??= piece.slice(i + 1).trim();
  }
  const stamp = Number(parts.t);
  if (!parts.t || !Number.isInteger(stamp) || !parts.v1) throw new WebhookSignatureError(`malformed ${SIGNATURE_HEADER} header`);
  const now = options.now ?? Date.now() / 1000;
  if (Math.abs(now - stamp) > (options.toleranceSeconds ?? DEFAULT_TOLERANCE_SECONDS)) throw new WebhookSignatureError("timestamp outside the tolerance window");
  const raw = typeof body === "string" ? Buffer.from(body, "utf8") : Buffer.from(body);
  const expected = createHmac("sha256", secret).update(`${stamp}.`).update(raw).digest("hex");
  const a = Buffer.from(expected);
  const b = Buffer.from(parts.v1);
  if (a.length !== b.length || !timingSafeEqual(a, b)) throw new WebhookSignatureError("signature mismatch");
}

/** Verify, then parse. Drop an event whose `id` (also `X-Sempera-Event-Id`) you have already processed. */
export function constructEvent(secret: string, body: string | Uint8Array, header: string | null | undefined, options: VerifyOptions = {}): Record<string, unknown> {
  verifySignature(secret, body, header, options);
  return JSON.parse(typeof body === "string" ? body : Buffer.from(body).toString("utf8"));
}
