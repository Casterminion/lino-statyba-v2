/**
 * Vitruvius homepage breakpoint system.
 * Test matrix: 1492, 1440, 1439, 810, 390
 */

export const BREAKPOINTS = {
  wide: 1492,
  desktopMin: 1440,
  desktopMax: 1491.98,
  mobileMax: 1439.98,
  projectMdMax: 809.98,
} as const;

export const FRAMER_HASH = {
  wide: "vqrolt",
  desktop: "njs80y",
  mobile: "qenovs",
} as const;

export type HomepageBreakpoint = "wide" | "desktop" | "mobile";

export type ProjectBreakpoint = "desktop" | "tablet" | "mobile";

export const MEDIA = {
  wide: `(min-width: ${BREAKPOINTS.wide}px)`,
  desktop: `(min-width: ${BREAKPOINTS.desktopMin}px) and (max-width: ${BREAKPOINTS.desktopMax}px)`,
  mobile: `(max-width: ${BREAKPOINTS.mobileMax}px)`,
  projectDesktop: `(min-width: ${BREAKPOINTS.desktopMin}px)`,
  projectTablet: `(min-width: ${BREAKPOINTS.projectMdMax + 0.02}px) and (max-width: ${BREAKPOINTS.mobileMax}px)`,
  projectMobile: `(max-width: ${BREAKPOINTS.projectMdMax}px)`,
} as const;

export function matchesBreakpoint(tier: HomepageBreakpoint, width: number): boolean {
  switch (tier) {
    case "wide":
      return width >= BREAKPOINTS.wide;
    case "desktop":
      return width >= BREAKPOINTS.desktopMin && width <= BREAKPOINTS.desktopMax;
    case "mobile":
      return width <= BREAKPOINTS.mobileMax;
  }
}

export function resolveHomepageBreakpoint(width: number): HomepageBreakpoint {
  if (width >= BREAKPOINTS.wide) return "wide";
  if (width >= BREAKPOINTS.desktopMin) return "desktop";
  return "mobile";
}

export function isDesktopNavTier(breakpoint: HomepageBreakpoint): boolean {
  return breakpoint === "wide" || breakpoint === "desktop";
}
