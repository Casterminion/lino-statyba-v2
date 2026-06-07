"use client";

import { OVERLAP_GAP_MOBILE, OVERLAP_PANEL } from "./constants";
import { ScrollReveal } from "./ScrollReveal";

type OverlapPanelBlockProps = {
  title: string;
  paragraphs: string[];
  variant: "desktop" | "mobile";
  panel: 1 | 2;
};

function PanelParagraphs({ paragraphs, className }: { paragraphs: string[]; className: string }) {
  return (
    <>
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 48)} className={className}>
          {paragraph}
        </p>
      ))}
    </>
  );
}

/** Overlap panel — `.framer-7jyc7f` (panel 1) / `.framer-1odmzsu` (panel 2). */
export function OverlapPanelBlock({ title, paragraphs, variant, panel }: OverlapPanelBlockProps) {
  const isDesktop = variant === "desktop";
  const isPanel2 = panel === 2;

  const padding = isDesktop
    ? isPanel2
      ? OVERLAP_PANEL.paddingBottomPanel2
      : OVERLAP_PANEL.padding
    : OVERLAP_PANEL.paddingMobile;

  const sectionId = isPanel2 ? "overlap-panel-2" : "overlap-panel-1";
  const TitleTag = isDesktop && isPanel2 ? "h2" : "h3";
  const bodyAlign = isDesktop && !isPanel2 ? "text-center" : "text-left";

  return (
    <section
      data-framer-name="Content"
      data-section={sectionId}
      className="relative flex w-full flex-col overflow-hidden"
      style={{
        padding,
        gap: isDesktop ? OVERLAP_PANEL.flowGap : OVERLAP_GAP_MOBILE,
      }}
    >
      <ScrollReveal>
        <TitleTag className="type-overlap-panel-title text-center text-black">{title}</TitleTag>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <div className="flex w-full min-w-0 flex-col gap-4">
          <PanelParagraphs
            paragraphs={paragraphs}
            className={`type-overlap-panel-body ${bodyAlign} text-black`}
          />
        </div>
      </ScrollReveal>
    </section>
  );
}

export function splitPanelBody(body: string, splitAt?: string): string[] {
  if (!splitAt) {
    return body
      .split(/(?<=\.)\s+/)
      .map((p) => p.trim())
      .filter(Boolean);
  }
  const idx = body.indexOf(splitAt);
  if (idx === -1) return [body];
  return [body.slice(0, idx).trim(), body.slice(idx).trim()].filter(Boolean);
}
