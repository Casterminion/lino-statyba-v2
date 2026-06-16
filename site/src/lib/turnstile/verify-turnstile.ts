import { getTurnstileSecretKey } from "./config";

const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

type TurnstileVerifyResponse = {
  success: boolean;
  "error-codes"?: string[];
};

export type TurnstileVerificationResult =
  | { ok: true }
  | { ok: false; reason: "missing_secret" | "invalid_token" | "verification_failed" };

export async function verifyTurnstileToken(
  token: string,
  remoteIp: string,
): Promise<TurnstileVerificationResult> {
  const secret = getTurnstileSecretKey();
  if (!secret) {
    return { ok: false, reason: "missing_secret" };
  }

  const trimmedToken = token.trim();
  if (!trimmedToken) {
    return { ok: false, reason: "invalid_token" };
  }

  const body = new URLSearchParams({
    secret,
    response: trimmedToken,
    remoteip: remoteIp,
  });

  let response: Response;
  try {
    response = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    });
  } catch {
    return { ok: false, reason: "verification_failed" };
  }

  if (!response.ok) {
    return { ok: false, reason: "verification_failed" };
  }

  let data: TurnstileVerifyResponse;
  try {
    data = (await response.json()) as TurnstileVerifyResponse;
  } catch {
    return { ok: false, reason: "verification_failed" };
  }

  if (data.success === true) {
    return { ok: true };
  }

  return { ok: false, reason: "verification_failed" };
}
