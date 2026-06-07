"use client";

import { getHomeIntro } from "@/lib/content/home";
import { OVERLAP_HEADING_INSET, INTRO_BOTTOM, INTRO_SLOT, OVERLAP_GAP_MOBILE } from "./constants";
import { ScrollLinkedText } from "./ScrollLinkedText";
import { ScrollReveal } from "./ScrollReveal";

type IntroOverlapBlockProps = {
  variant: "desktop" | "mobile";
};

/** Intro overlap zone — `.framer-xp9jd6` Top + `.framer-1usyrbb` Bottom. */
export function IntroOverlapBlock({ variant }: IntroOverlapBlockProps) {
  const intro = getHomeIntro();
  const isDesktop = variant === "desktop";

  const hasEyebrow = intro.eyebrow.trim().length > 0;

  return (
    <div className="relative flex w-full flex-col" data-section="intro">
      {hasEyebrow ? (
        <div
          className="relative w-full overflow-hidden"
          data-framer-name="Top"
          style={{
            height: isDesktop ? INTRO_SLOT.desktop.height : INTRO_SLOT.mobile.height,
          }}
        >
          <ScrollLinkedText
            slotClassName="absolute top-1/2 left-1/2 w-full max-w-[1340px] -translate-x-1/2"
            className="w-full"
            style={{ paddingLeft: isDesktop ? OVERLAP_HEADING_INSET : 40 }}
          >
            <ScrollReveal>
              <h1 className="type-intro-eyebrow text-pretty text-left text-black">
                <strong>{intro.eyebrow}</strong>
              </h1>
            </ScrollReveal>
          </ScrollLinkedText>
        </div>
      ) : null}

      <div
        className="relative flex w-full flex-col overflow-hidden"
        data-framer-name="Bottom"
        style={{ gap: isDesktop ? INTRO_BOTTOM.gap : OVERLAP_GAP_MOBILE }}
      >
        <div
          className="relative flex w-full flex-col overflow-hidden wide:flex-row desktop:flex-row"
          data-framer-name="Left"
          style={{
            gap: INTRO_BOTTOM.rowGap,
            padding: isDesktop ? INTRO_BOTTOM.padding : INTRO_BOTTOM.paddingMobile,
          }}
        >
          <div className="relative min-h-0 flex-1" data-framer-name="Primary">
            <ScrollReveal delay={0.12}>
              <h2 className="type-intro-heading text-black">{intro.title}</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="type-intro-body mt-4 text-pretty text-left text-black">
                {intro.body}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
