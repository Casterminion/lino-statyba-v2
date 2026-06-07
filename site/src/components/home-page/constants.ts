/** Home Page track tokens — sourced from mirror `.framer-EcV2B` / `.framer-1ry6wgc-container`. */

/** Total scroll height of the Home Page track (audit reference). */
export const HOME_PAGE_TRACK_HEIGHT = 4695;

export const TRACK_PADDING_TOP = {
  desktop: 100,
  mobile: 121,
} as const;

export const TRACK_WIDTH = {
  wide: 1492,
  desktop: 1440,
  mobile: 390,
} as const;

/** Absolute overlap layer — `.framer-xwaeb3` (desktop v-10p5o6c / mobile hmc6j6). */
export const OVERLAP_LAYER = {
  desktop: { height: 716, top: -27 },
  mobile: { height: 344, top: 390 },
} as const;

/** Placeholder spacer heights — unused sections only. */
export const SECTION_SPACER_HEIGHTS = {} as const;

export const TRACK_CONTENT_HEIGHT =
  HOME_PAGE_TRACK_HEIGHT - TRACK_PADDING_TOP.desktop;

export const TRACK_Z = {
  container: 4,
  screenBlend: 7,
  overlapHeadings: 1,
  watermark: 0,
} as const;

/** Vitruvian watermark — `.framer-1dapt2o` (desktop v-10p5o6c). */
export const TRACK_WATERMARK = {
  size: 2160,
  bottom: -943,
  right: -720,
  opacity: 0.16,
  rotate: -180,
} as const;
