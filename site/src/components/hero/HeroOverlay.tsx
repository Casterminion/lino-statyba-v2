/** Hero gradient overlay — `.framer-a0vzrq` mask + brand hero tint. */
export function HeroOverlay() {
  return (
    <div
      aria-hidden
      className="hero-overlay-mask pointer-events-none absolute inset-0 z-[1] h-full w-full overflow-hidden bg-hero-overlay"
      data-framer-name="Overlay"
    />
  );
}
