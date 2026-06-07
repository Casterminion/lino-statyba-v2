/** Overlap Detailing layout tokens — mirror `.framer-EcV2B` / blueprint §2.5. */

export const OVERLAP_PADDING = "0 60px 60px 40px" as const;
export const OVERLAP_GAP = 50;
export const OVERLAP_GAP_MOBILE = 17;

export const INTRO_SLOT = {
  desktop: { height: 260 },
  mobile: { height: 636, heightCompact: 200 },
} as const;

export const INTRO_BOTTOM = {
  gap: 40,
  rowGap: 24,
  padding: "24px 40px 48px 40px",
  paddingMobile: "0 20px 32px",
  asideWidth: 0,
  asideHeight: 0,
} as const;

export const OVERLAP_PANEL = {
  minHeight: 0,
  flowGap: 32,
  padding: "48px 40px 40px 40px",
  paddingMobile: "40px 20px 32px",
  paddingBottomPanel2: "48px 40px 56px 40px",
  title: {
    top: "48%",
    right: 90,
    width: 420,
  },
  body: {
    top: "52%",
    left: 40,
    width: 872,
  },
  panel2: {
    titleBottom: 191,
    titleLeft: 126,
    titleWidth: 509,
    bodyTop: 33,
    bodyWidth: 1368,
    bodyExtraBottom: 191,
    bodyExtraRight: 67,
    bodyExtraWidth: 701,
  },
} as const;

export const OVERLAP_HEADING_INSET = 230;
