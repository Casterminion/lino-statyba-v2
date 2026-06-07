"use client";

import { BreakpointVariant } from "@/components/layout/BreakpointVariant";
import { DesktopHero, MobileHero } from "@/components/hero/index";

/** Hero — desktop fixed+sticky stack (≥1440) / mobile flow (≤1439). §1.2 / §3.1 */
export function Hero() {
  return (
    <BreakpointVariant wide={<DesktopHero />} desktop={<DesktopHero />} mobile={<MobileHero />} />
  );
}
