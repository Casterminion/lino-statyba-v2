"use client";

import { HeroScrollSpacer } from "@/components/layout/HeroScrollSpacer";
import { HeroContainer } from "./HeroContainer";
import { HeroFixedVideo } from "./HeroFixedVideo";

/** Desktop hero stack — fixed video + sticky section + scroll spacer (≥1440). */
export function DesktopHero() {
  return (
    <>
      <HeroFixedVideo />
      <section
        className="sticky top-0 z-hero h-hero w-full overflow-hidden bg-section"
        data-section="hero"
        data-framer-name="Hero"
      >
        <HeroContainer />
      </section>
      <HeroScrollSpacer />
    </>
  );
}
