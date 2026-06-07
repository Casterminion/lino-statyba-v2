"use client";

import { BreakpointVariant } from "@/components/layout";
import { IntroOverlapBlock } from "@/components/overlap-detailing";

/** Intro overlap zone — eyebrow, title, body (Phase 1.4). */
export function Intro() {
  return (
    <BreakpointVariant
      wide={<IntroOverlapBlock variant="desktop" />}
      desktop={<IntroOverlapBlock variant="desktop" />}
      mobile={<IntroOverlapBlock variant="mobile" />}
    />
  );
}
