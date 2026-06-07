import { OVERLAP_LAYER } from "./constants";

/** Absolute overlap zone shell — `.framer-xwaeb3`; content deferred to Phase 1.4. */
export function OverlapDetailingLayer({ variant }: { variant: "desktop" | "mobile" }) {
  const layer = OVERLAP_LAYER[variant];

  return (
    <section
      aria-hidden
      className="pointer-events-none absolute left-0 w-full overflow-visible bg-section"
      data-framer-name="Overlap Detailing"
      style={{
        height: layer.height,
        top: layer.top,
      }}
    />
  );
}
