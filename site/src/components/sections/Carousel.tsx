"use client";

import { CarouselTeaser } from "@/components/carousel";
import { BreakpointVariant } from "@/components/layout";

/** Carousel teaser — `.framer-6y91ie` (desktop ≥1440 only; absent on mobile track). */
export function Carousel() {
  return (
    <BreakpointVariant
      wide={<CarouselTeaser />}
      desktop={<CarouselTeaser />}
      mobile={<></>}
    />
  );
}
