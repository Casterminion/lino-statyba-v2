#!/usr/bin/env node
/**
 * Verifies contact API rejects submissions without a valid Turnstile token.
 *
 * Usage:
 *   node scripts/test-contact-turnstile.mjs --api
 *
 * Requires a running dev server at BASE_URL (default http://localhost:3000).
 */

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL: ${message}`);
    process.exit(1);
  }
}

async function testApiEndpoint() {
  const baseUrl = process.env.BASE_URL ?? "http://localhost:3000";
  const payload = {
    vardas: "Turnstile Test",
    telefonas: "+37060000000",
    website: "",
  };

  console.log(`\n--- API integration (${baseUrl}/api/contact) ---`);

  const withoutToken = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const withoutTokenBody = await withoutToken.json().catch(() => null);
  console.log(`  no token: status=${withoutToken.status} body=${JSON.stringify(withoutTokenBody)}`);
  assert(
    withoutToken.status === 400,
    `expected 400 without turnstileToken, got ${withoutToken.status}`,
  );
  console.log("  PASS: blocks direct API call without turnstileToken");

  const withFakeToken = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...payload,
      turnstileToken: "bot-forged-token",
    }),
  });

  const fakeTokenBody = await withFakeToken.json().catch(() => null);
  console.log(
    `  fake token: status=${withFakeToken.status} body=${JSON.stringify(fakeTokenBody)}`,
  );
  assert(
    withFakeToken.status === 403,
    `expected 403 with invalid turnstileToken, got ${withFakeToken.status}`,
  );
  console.log("  PASS: blocks direct API call with forged turnstileToken");
}

async function main() {
  const runApiTest = process.argv.includes("--api");

  if (!runApiTest) {
    console.error("Pass --api to run integration checks against /api/contact.");
    process.exit(1);
  }

  await testApiEndpoint();
  console.log("\nAll Turnstile checks passed.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
