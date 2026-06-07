/**
 * Lino Statyba design tokens — brand color palette.
 * Source: docs/design-system.md (linostatyba.lt)
 *
 * Semantic roles:
 * - primary   — navy, dark chrome and headings
 * - secondary — gold, supporting brand accent
 * - surface   — warm off-white, content track backgrounds
 * - background — page ground (alias of primary on Vitruvius shell)
 * - text      — body copy on light surfaces
 * - accent    — gold, interactive emphasis
 */

export const linoBrandColors = {
  primary: "#13213c",
  secondary: "#f2be6e",
  surface: "#f0ece6",
  background: "#13213c",
  text: "#1a1a1a",
  accent: "#f2be6e",
  muted: "#5c6470",
  white: "#ffffff",
  textOnDark: "#ffffff",
  textOnDarkMuted: "rgba(255, 255, 255, 0.6)",
  heroBase: "#0f1a30",
  heroOverlay: "rgba(15, 26, 48, 0.8)",
  navMobile: "#2a3f5c",
  navMobileOpen: "#3d5270",
  divider: "rgba(255, 255, 255, 0.25)",
  selection: "rgba(242, 190, 110, 0.25)",
} as const;

export type LinoBrandColor = keyof typeof linoBrandColors;
