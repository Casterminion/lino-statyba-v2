/** Features layout tokens — mirror `.framer-ial1qm` / `.framer-1w5nw4t` / `.framer-1wk38oh`. */

export const FEATURES_GRID_MAX = 960;
export const FEATURES_GRID_GAP = 20;
export const FEATURES_IMAGE_RADIUS = 20;

export const WHERE_WE_BUILD = {
  padding: "0",
  paddingMobile: "0",
  gap: 16,
} as const;

export const FEATURES_GRID = {
  paddingDesktop: "0 20px 28px",
  paddingMobile: "0 0 24px",
  mobileLinkPadding: "11px 0",
  imageHeightDesktop: 450,
} as const;

/** Visible service cards on homepage; third slot reserved for future render. */
export const SERVICE_CARD_RENDER_LIMIT = 2 as const;
