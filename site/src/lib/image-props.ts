/** Blur placeholders disabled — they delay sharp image paint. */
export function imageBlurProps(_src: string) {
  return {};
}

/** Hero: serve pre-optimized static WebP — skips /_next/image transform latency. */
export const heroImageDelivery = {
  unoptimized: true,
  priority: true,
  decoding: "sync" as const,
  fetchPriority: "high" as const,
};
