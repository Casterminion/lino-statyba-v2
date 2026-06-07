"use client";

import { HeroDecorativeBands } from "./HeroDecorativeBands";

/** Fixed hero layer — `.framer-teprji-container` holds cyZUy bands only (desktop ≥1440). */
export function HeroFixedVideo() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-hero h-hero w-full overflow-hidden"
      data-framer-name="Hero Fixed Video"
    >
      <HeroDecorativeBands />
    </div>
  );
}
