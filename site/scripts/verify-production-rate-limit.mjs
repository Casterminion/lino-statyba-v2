#!/usr/bin/env node
/**
 * Verify contact API rate limiting on the live site.
 *
 * Sends 4 POST requests to /api/contact and checks:
 *   - requests 1–3 return 200
 *   - request 4 returns 429 with a Retry-After header
 *
 * Uses the honeypot "website" field so no emails are sent.
 * Uses a unique X-Forwarded-For value so your real IP quota is not consumed
 * (works when the app reads the first forwarded IP, as on Vercel).
 *
 * Usage:
 *   node scripts/verify-production-rate-limit.mjs
 *   BASE_URL=https://linostatyba.lt node scripts/verify-production-rate-limit.mjs
 */

const PRODUCTION_URL = "https://linostatyba.lt";
const MINUTE_LIMIT = 3;
const ENDPOINT = "/api/contact";

const baseUrl = (process.env.BASE_URL ?? PRODUCTION_URL).replace(/\/$/, "");
const testIp = process.env.TEST_IP ?? `rate-limit-verify-${Date.now()}`;

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL: ${message}`);
    process.exit(1);
  }
}

function buildPayload() {
  return {
    vardas: "Rate Limit Verify",
    telefonas: "+37060000000",
    website: "bot-trap",
  };
}

async function postContact(attempt) {
  const response = await fetch(`${baseUrl}${ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Forwarded-For": testIp,
    },
    body: JSON.stringify(buildPayload()),
  });

  const retryAfter = response.headers.get("retry-after");
  let body = null;
  try {
    body = await response.json();
  } catch {
    body = null;
  }

  return { attempt, status: response.status, retryAfter, body };
}

async function main() {
  console.log(`Target: ${baseUrl}${ENDPOINT}`);
  console.log(`Test IP (X-Forwarded-For): ${testIp}`);
  console.log(`Expected: ${MINUTE_LIMIT}× 200, then 429 with Retry-After\n`);

  const results = [];

  for (let attempt = 1; attempt <= MINUTE_LIMIT + 1; attempt += 1) {
    const result = await postContact(attempt);
    results.push(result);

    console.log(
      `  request ${result.attempt}: status=${result.status}` +
        ` retry-after=${result.retryAfter ?? "n/a"}` +
        (result.body?.error ? ` error="${result.body.error}"` : ""),
    );
  }

  console.log("");

  for (let i = 0; i < MINUTE_LIMIT; i += 1) {
    assert(
      results[i].status === 200,
      `request ${i + 1} should return 200, got ${results[i].status}`,
    );
  }

  const blocked = results[MINUTE_LIMIT];
  assert(
    blocked.status === 429,
    `request ${MINUTE_LIMIT + 1} should return 429, got ${blocked.status}`,
  );
  assert(
    blocked.retryAfter !== null && blocked.retryAfter !== "",
    `request ${MINUTE_LIMIT + 1} should include Retry-After header`,
  );
  assert(
    Number.isFinite(Number(blocked.retryAfter)) && Number(blocked.retryAfter) > 0,
    `Retry-After should be a positive number, got "${blocked.retryAfter}"`,
  );

  console.log("PASS: rate limiting works as expected.");
  console.log(`  - first ${MINUTE_LIMIT} requests returned 200`);
  console.log(`  - 4th request returned 429`);
  console.log(`  - Retry-After: ${blocked.retryAfter}s`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
