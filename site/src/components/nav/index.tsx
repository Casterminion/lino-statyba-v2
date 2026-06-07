"use client";

import { BreakpointVariant } from "@/components/layout/BreakpointVariant";
import { DesktopNavBar } from "./DesktopNavBar";
import { MobileNavBar } from "./MobileNavBar";

/** Nav Stack — desktop inline (≥1440) + mobile menu (≤1439). §2.3 / §4.2 */
export default function Nav() {
  return (
    <BreakpointVariant
      wide={<DesktopNavBar />}
      desktop={<DesktopNavBar />}
      mobile={<MobileNavBar />}
    />
  );
}
