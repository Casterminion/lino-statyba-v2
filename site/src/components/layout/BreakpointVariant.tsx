"use client";

import type { ReactNode } from "react";

type BreakpointVariantProps = {
  wide?: ReactNode;
  desktop?: ReactNode;
  mobile?: ReactNode;
};

/** Renders exactly one subtree per Vitruvius homepage tier (1492+ / 1440–1491 / ≤1439). */
export function BreakpointVariant({ wide, desktop, mobile }: BreakpointVariantProps) {
  return (
    <>
      <div className="hidden wide:block">{wide ?? desktop ?? mobile}</div>
      <div className="hidden desktop:block wide:hidden">{desktop ?? wide ?? mobile}</div>
      <div className="block wide:hidden desktop:hidden">{mobile ?? desktop ?? wide}</div>
    </>
  );
}

type ProjectBreakpointVariantProps = {
  desktop?: ReactNode;
  tablet?: ReactNode;
  mobile?: ReactNode;
};

export function ProjectBreakpointVariant({ desktop, tablet, mobile }: ProjectBreakpointVariantProps) {
  return (
    <>
      <div className="hidden project-desktop:block">{desktop ?? tablet ?? mobile}</div>
      <div className="hidden project-tablet:block project-desktop:hidden">{tablet ?? desktop ?? mobile}</div>
      <div className="block project-tablet:hidden project-desktop:hidden">{mobile ?? tablet ?? desktop}</div>
    </>
  );
}
