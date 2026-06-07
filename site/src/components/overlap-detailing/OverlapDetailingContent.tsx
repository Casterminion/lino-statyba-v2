"use client";

import { getOverlapPanels } from "@/lib/content/home";
import { OverlapPanelBlock, splitPanelBody } from "./OverlapPanelBlock";
import { BreakpointVariant } from "@/components/layout";

type OverlapPanelIndexProps = {
  index: 0 | 1;
};

function DesktopOverlapPanel({ index }: OverlapPanelIndexProps) {
  const panel = getOverlapPanels()[index];
  const panelNumber = index === 0 ? 1 : 2;

  return (
    <OverlapPanelBlock
      variant="desktop"
      panel={panelNumber}
      title={panel.title}
      paragraphs={
        index === 0
          ? splitPanelBody(panel.body, "From ground-up custom homes")
          : splitPanelBody(panel.body)
      }
    />
  );
}

function MobileOverlapPanel({ index }: OverlapPanelIndexProps) {
  const panel = getOverlapPanels()[index];

  return (
    <OverlapPanelBlock
      variant="mobile"
      panel={index === 0 ? 1 : 2}
      title={panel.title}
      paragraphs={splitPanelBody(panel.body)}
    />
  );
}

function OverlapPanelContent({ index }: OverlapPanelIndexProps) {
  return (
    <BreakpointVariant
      wide={<DesktopOverlapPanel index={index} />}
      desktop={<DesktopOverlapPanel index={index} />}
      mobile={<MobileOverlapPanel index={index} />}
    />
  );
}

/** Overlap panel 1 — Kas yra tvari statyba? */
export function OverlapPanelOneContent() {
  return <OverlapPanelContent index={0} />;
}

/** Overlap panel 2 — Kodėl verta rinktis mūsų paslaugas? */
export function OverlapPanelTwoContent() {
  return <OverlapPanelContent index={1} />;
}

/** Overlap Detailing — both panels (legacy export). */
export function OverlapDetailingContent() {
  return (
    <>
      <OverlapPanelOneContent />
      <OverlapPanelTwoContent />
    </>
  );
}
