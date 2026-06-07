"use client";

import type { ReactNode } from "react";
import { useRegisterSection } from "@/providers/ScrollProgressProvider";
import { TRACK_PADDING_TOP, TRACK_Z } from "./constants";
import { OverlapDetailingLayer } from "./OverlapDetailingLayer";
import { ScreenBlendOverlay } from "./ScreenBlendOverlay";
import { TrackWatermark } from "./TrackWatermark";

type DesktopHomePageTrackProps = {
  children: ReactNode;
};

/** Desktop Home Page track — `.framer-1ry6wgc-container` + `.framer-EcV2B` (≥1440). */
export function DesktopHomePageTrack({ children }: DesktopHomePageTrackProps) {
  const ref = useRegisterSection("home-page");

  return (
    <div
      ref={ref}
      id="abou"
      data-scroll-track="home-page"
      className="relative w-full"
      style={{ zIndex: TRACK_Z.container }}
    >
      <section
        data-framer-name="Home Page "
        className="relative mx-auto flex w-full flex-col items-center gap-[10px] overflow-x-hidden bg-section wide:max-w-[1492px] desktop:max-w-[1440px]"
        style={{ paddingTop: TRACK_PADDING_TOP.desktop }}
      >
        <TrackWatermark />
        <ScreenBlendOverlay />
        <OverlapDetailingLayer variant="desktop" />

        <div
          data-framer-name="Content"
          className="relative flex w-full flex-col items-end justify-end gap-[28px] overflow-hidden pb-[40px] pl-[40px] pr-[60px]"
        >
          {children}
        </div>
      </section>
    </div>
  );
}
