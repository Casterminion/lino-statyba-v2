#!/usr/bin/env node
/**
 * Verifies contact API rate limits (3/min, 10/hour per IP) via Upstash Redis.
 *
 * Usage:
 *   UPSTASH_REDIS_REST_URL=... UPSTASH_REDIS_REST_TOKEN=... node scripts/test-contact-rate-limit.mjs
 *
 * Optional API integration test (dev server must be running):
 *   BASE_URL=http://localhost:3000 node scripts/test-contact-rate-limit.mjs --api
 */

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const MINUTE_LIMIT = 3;
const HOUR_LIMIT = 10;
const MINUTE_PREFIX = "rl:contact:min";
const HOUR_PREFIX = "rl:contact:hour";

function requireEnv(name) {
  const value = process.env[name];
  if (!value) {
    console.error(`Missing required environment variable: ${name}`);
    process.exit(1);
  }
  return value;
}

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL: ${message}`);
    process.exit(1);
  }
}

function createLimiters(redis) {
  return {
    minute: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(MINUTE_LIMIT, "1 m"),
      prefix: MINUTE_PREFIX,
    }),
    hour: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(HOUR_LIMIT, "1 h"),
      prefix: HOUR_PREFIX,
    }),
  };
}

async function testMinuteLimit(limiters, testIp) {
  console.log("\n--- Minute limit (3 per IP) ---");

  for (let attempt = 1; attempt <= MINUTE_LIMIT + 1; attempt += 1) {
    const result = await limiters.minute.limit(`contact:${testIp}`);
    const expectedAllowed = attempt <= MINUTE_LIMIT;

    console.log(
      `  attempt ${attempt}: success=${result.success} remaining=${result.remaining}`,
    );

    assert(
      result.success === expectedAllowed,
      `minute limit attempt ${attempt}: expected success=${expectedAllowed}, got ${result.success}`,
    );
  }

  console.log("  PASS: minute limit enforced after 3 requests");
}

async function testHourLimit(limiters, testIp) {
  console.log("\n--- Hour limit (10 per IP) ---");

  for (let attempt = 1; attempt <= HOUR_LIMIT + 1; attempt += 1) {
    const result = await limiters.hour.limit(`contact:${testIp}`);
    const expectedAllowed = attempt <= HOUR_LIMIT;

    console.log(
      `  attempt ${attempt}: success=${result.success} remaining=${result.remaining}`,
    );

    assert(
      result.success === expectedAllowed,
      `hour limit attempt ${attempt}: expected success=${expectedAllowed}, got ${result.success}`,
    );
  }

  console.log("  PASS: hour limit enforced after 10 requests");
}

async function testApiEndpoint(testIp) {
  const baseUrl = process.env.BASE_URL ?? "http://localhost:3000";
  const apiTestIp = `${testIp}-api`;

  console.log(`\n--- API integration (${baseUrl}/api/contact) ---`);

  const payload = {
    vardas: "Rate Limit Test",
    telefonas: "+37060000000",
    website: "",
  };

  const statuses = [];

  for (let attempt = 1; attempt <= MINUTE_LIMIT + 1; attempt += 1) {
    const response = await fetch(`${baseUrl}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": apiTestIp,
      },
      body: JSON.stringify(payload),
    });

    const retryAfter = response.headers.get("retry-after");
    statuses.push(response.status);

    console.log(
      `  attempt ${attempt}: status=${response.status} retry-after=${retryAfter ?? "n/a"}`,
    );
  }

  const allowedStatuses = new Set([200, 500]);
  for (let i = 0; i < MINUTE_LIMIT; i += 1) {
    assert(
      allowedStatuses.has(statuses[i]),
      `API attempt ${i + 1} should pass rate limit (200 or 500), got ${statuses[i]}`,
    );
  }

  assert(
    statuses[MINUTE_LIMIT] === 429,
    `API attempt ${MINUTE_LIMIT + 1} should return 429, got ${statuses[MINUTE_LIMIT]}`,
  );

  console.log("  PASS: API returns 429 on 4th request within a minute");
}

async function main() {
  const runApiTest = process.argv.includes("--api");

  requireEnv("UPSTASH_REDIS_REST_URL");
  requireEnv("UPSTASH_REDIS_REST_TOKEN");

  const redis = Redis.fromEnv();
  const limiters = createLimiters(redis);
  const testIp = `rate-limit-test-${Date.now()}`;

  console.log(`Using test IP identifier: ${testIp}`);

  await testMinuteLimit(limiters, `${testIp}-minute`);
  await testHourLimit(limiters, `${testIp}-hour`);

  if (runApiTest) {
    await testApiEndpoint(testIp);
  } else {
    console.log(
      "\nSkipping API test (pass --api with BASE_URL and a running dev server to include it).",
    );
  }

  console.log("\nAll rate limit checks passed.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
