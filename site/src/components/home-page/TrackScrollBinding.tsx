"use client";

import type { ReactNode } from "react";
import { useSectionProgress } from "@/providers/ScrollProgressProvider";

type TrackScrollBindingProps = {
  children: (progress: number) => ReactNode;
};

/** Scroll progress binding for track-linked transforms (overlap headings in Phase 1.4). */
export function TrackScrollBinding({ children }: TrackScrollBindingProps) {
  const progress = useSectionProgress("home-page");
  return <>{children(progress)}</>;
}
