/**

 * Design token registry — single source of truth.

 * Naming: {category}-{semantic}-{breakpoint?}

 */



import { linoBrandColors } from "./brand-tokens";

import { BREAKPOINTS, MEDIA } from "./breakpoints";

import { fonts, typeScale } from "./typography";



export const tokens = {

  colors: {

    primary: linoBrandColors.primary,

    secondary: linoBrandColors.secondary,

    surface: linoBrandColors.surface,

    background: linoBrandColors.background,

    text: linoBrandColors.text,

    accent: linoBrandColors.accent,

    page: linoBrandColors.primary,

    section: linoBrandColors.surface,

    footer: linoBrandColors.primary,

    nav: linoBrandColors.primary,

    foreground: linoBrandColors.textOnDark,

    muted: linoBrandColors.muted,

    textOnDark: linoBrandColors.textOnDark,

    textOnDarkMuted: linoBrandColors.textOnDarkMuted,

    heroBase: linoBrandColors.heroBase,

    heroOverlay: linoBrandColors.heroOverlay,

    navMobile: linoBrandColors.navMobile,

    navMobileOpen: linoBrandColors.navMobileOpen,

    divider: linoBrandColors.divider,

  },

  spacing: {

    sectionY: "100px",

    sectionYMobile: "64px",

    contentInsetMobile: "20px",

    stackGapMd: "64px",

    stackGapSm: "12px",

    footerXlPadding: "59px 40px",

    overlapPadding: "0 60px 60px 40px",

    homePagePaddingTop: "100px",

  },

  zIndex: {

    loader: 100,

    nav: 8,

    track: 4,

    screenBlend: 7,

    hero: 2,

    content: 1,

    cursor: 9999,

    overlay: 40,

  },

  breakpoints: BREAKPOINTS,

  media: MEDIA,

  layout: {

    contentInsetDesktop: "230px",

    navHeight: "57px",

    navMinHeight: "57px",

    heroHeight: "100vh",

    heroSpacerHeight: "100vh",

    featuresGridMax: "960px",

    carouselCardMax: "470px",

    pageMaxWide: "1492px",

    pageMaxDesktop: "1440px",

  },

  typography: {

    fonts,

    scale: typeScale,

  },

} as const;



export type TokenPath = keyof typeof tokens;



export function getToken<K extends TokenPath>(category: K): (typeof tokens)[K] {

  return tokens[category];

}


