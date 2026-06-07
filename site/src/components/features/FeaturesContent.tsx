"use client";

import { BreakpointVariant } from "@/components/layout";
import { FeaturesImageGrid } from "./FeaturesImageGrid";
import { WhereWeBuildBlock } from "./WhereWeBuildBlock";

function DesktopFeatures() {
  return (
    <section data-section="paslaugos" className="flex w-full flex-col gap-6">
      <WhereWeBuildBlock variant="desktop" />
      <FeaturesImageGrid variant="desktop" />
    </section>
  );
}

function MobileFeatures() {
  return (
    <section data-section="paslaugos" className="flex w-full flex-col gap-5">
      <WhereWeBuildBlock variant="mobile" />
      <FeaturesImageGrid variant="mobile" />
    </section>
  );
}

/** Features — Where We Build + 2-col image grid (Phase 1.5). */
export function FeaturesContent() {
  return (
    <BreakpointVariant
      wide={<DesktopFeatures />}
      desktop={<DesktopFeatures />}
      mobile={<MobileFeatures />}
    />
  );
}
