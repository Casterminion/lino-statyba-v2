"use client";

import { useEffect, useState } from "react";
import {
  resolveHomepageBreakpoint,
  type HomepageBreakpoint,
} from "@/lib/breakpoints";

const DEFAULT: HomepageBreakpoint = "desktop";

export function useBreakpoint(): HomepageBreakpoint {
  const [breakpoint, setBreakpoint] = useState<HomepageBreakpoint>(DEFAULT);

  useEffect(() => {
    const update = () => setBreakpoint(resolveHomepageBreakpoint(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return breakpoint;
}

export function useIsDesktopNavTier(): boolean {
  const bp = useBreakpoint();
  return bp === "wide" || bp === "desktop";
}
