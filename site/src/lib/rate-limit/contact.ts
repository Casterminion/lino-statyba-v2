import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export const CONTACT_RATE_LIMIT_ERROR =
  "Per daug užklausų. Bandykite dar kartą vėliau.";

export type ContactRateLimitResult =
  | { allowed: true }
  | { allowed: false; retryAfterSeconds: number };

const MINUTE_LIMIT = 3;
const MINUTE_WINDOW = "1 m" as const;
const HOUR_LIMIT = 10;
const HOUR_WINDOW = "1 h" as const;

const MINUTE_PREFIX = "rl:contact:min";
const HOUR_PREFIX = "rl:contact:hour";

type ContactRateLimiters = {
  minute: Ratelimit;
  hour: Ratelimit;
};

let limiters: ContactRateLimiters | null | undefined;

function createRedisClient(): Redis | null {
  const url =
    process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;

  if (!url || !token) {
    return null;
  }

  return new Redis({ url, token });
}

function getContactRateLimiters(): ContactRateLimiters | null {
  if (limiters !== undefined) {
    return limiters;
  }

  const redis = createRedisClient();
  if (!redis) {
    limiters = null;
    return null;
  }

  limiters = {
    minute: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(MINUTE_LIMIT, MINUTE_WINDOW),
      prefix: MINUTE_PREFIX,
    }),
    hour: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(HOUR_LIMIT, HOUR_WINDOW),
      prefix: HOUR_PREFIX,
    }),
  };

  return limiters;
}

function retryAfterSeconds(resetTimestampMs: number): number {
  return Math.max(1, Math.ceil((resetTimestampMs - Date.now()) / 1000));
}

export async function enforceContactRateLimit(
  ip: string,
): Promise<ContactRateLimitResult> {
  const activeLimiters = getContactRateLimiters();
  if (!activeLimiters) {
    return { allowed: true };
  }

  const identifier = `contact:${ip}`;

  try {
    const minuteResult = await activeLimiters.minute.limit(identifier);
    if (!minuteResult.success) {
      return {
        allowed: false,
        retryAfterSeconds: retryAfterSeconds(minuteResult.reset),
      };
    }

    const hourResult = await activeLimiters.hour.limit(identifier);
    if (!hourResult.success) {
      return {
        allowed: false,
        retryAfterSeconds: retryAfterSeconds(hourResult.reset),
      };
    }

    return { allowed: true };
  } catch {
    return { allowed: true };
  }
}
