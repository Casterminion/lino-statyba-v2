/**
 * Homepage typography registry — blueprint §2.4 / §5.4.
 * Poppins weights: 300, 400, 500, 600.
 */

export const fonts = {
  body: '"Poppins", "Poppins Placeholder", sans-serif',
  display: '"GFS Didot", "Ovo", Georgia, serif',
  nav: '"Inter Display", "Inter", system-ui, sans-serif',
  ui: "var(--font-onest), system-ui, sans-serif",
} as const;

/** Blueprint §2.4 — section text presets (CSS property tuples). */
export const typeScale = {
  introEyebrowDesktop: {
    fontFamily: fonts.body,
    fontSize: "70px",
    fontWeight: 100,
    letterSpacing: "-1.2px",
    lineHeight: "78px",
  },
  introTitleMobile: {
    fontFamily: fonts.display,
    fontSize: "18px",
    fontWeight: 400,
    letterSpacing: "-1.2px",
    lineHeight: "78px",
  },
  introBody: {
    fontFamily: fonts.body,
    fontSize: "35px",
    fontWeight: 400,
    letterSpacing: "-1.6px",
  },
  featureTitle: {
    fontFamily: fonts.body,
    fontSize: "24px",
    fontWeight: 400,
  },
  whereWeBuild: {
    fontFamily: fonts.body,
    fontSize: "35px",
    fontWeight: 400,
    letterSpacing: "-1.6px",
  },
  footerHeading: {
    fontFamily: fonts.body,
    fontSize: "24px",
    fontWeight: 400,
    letterSpacing: "0px",
  },
  footerBody: {
    fontFamily: fonts.body,
    fontSize: "15px",
    fontWeight: 500,
    letterSpacing: "0px",
  },
  asSeenInDesktop: {
    fontFamily: fonts.body,
    fontSize: "27px",
    fontWeight: 300,
    letterSpacing: "0px",
  },
  asSeenInMobile: {
    fontFamily: fonts.body,
    fontSize: "20px",
    fontWeight: 300,
    letterSpacing: "0px",
  },
} as const;

export type TypeScaleKey = keyof typeof typeScale;
