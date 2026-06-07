/** Screen-blend overlay — mirror `.framer-17h57h1-container` spec on track layer. */
export function ScreenBlendOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[7] mix-blend-screen opacity-20"
      data-framer-name="Screen Blend Overlay"
    />
  );
}
