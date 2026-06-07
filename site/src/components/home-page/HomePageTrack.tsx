import type { ReactNode } from "react";
import { BreakpointVariant } from "@/components/layout";
import { DesktopHomePageTrack } from "./DesktopHomePageTrack";
import { MobileHomePageTrack } from "./MobileHomePageTrack";

type HomePageTrackProps = {
  children: ReactNode;
};

/** Framer `Home Page ` scroll container — wraps all post-hero homepage sections. */
export function HomePageTrack({ children }: HomePageTrackProps) {
  return (
    <BreakpointVariant
      wide={<DesktopHomePageTrack>{children}</DesktopHomePageTrack>}
      desktop={<DesktopHomePageTrack>{children}</DesktopHomePageTrack>}
      mobile={<MobileHomePageTrack>{children}</MobileHomePageTrack>}
    />
  );
}
