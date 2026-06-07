"use client";

import type { ReactNode } from "react";
import { useRegisterSection } from "@/providers/ScrollProgressProvider";
import { TRACK_PADDING_TOP, TRACK_Z } from "./constants";
import { OverlapDetailingLayer } from "./OverlapDetailingLayer";
import { ScreenBlendOverlay } from "./ScreenBlendOverlay";
import { TrackWatermark } from "./TrackWatermark";

type MobileHomePageTrackProps = {
  children: ReactNode;
};

/** Mobile Home Page track — flow layout, max 390px column (≤1439). */
export function MobileHomePageTrack({ children }: MobileHomePageTrackProps) {
  const ref = useRegisterSection("home-page");

  return (
    <div
      ref={ref}
      data-scroll-track="home-page"
      className="relative mx-auto w-full max-w-[390px]"
      style={{ zIndex: TRACK_Z.container }}
    >
      <section
        data-framer-name="Home Page "
        className="relative flex w-full flex-col flex-wrap items-start justify-start gap-[10px] overflow-x-hidden bg-section"
        style={{ paddingTop: TRACK_PADDING_TOP.mobile }}
      >
        <TrackWatermark />
        <ScreenBlendOverlay />
        <OverlapDetailingLayer variant="mobile" />

        <div
          data-framer-name="Content"
          className="relative flex w-full flex-col items-start gap-[24px] overflow-hidden px-[20px]"
        >
          {children}
        </div>
      </section>
    </div>
  );
}
