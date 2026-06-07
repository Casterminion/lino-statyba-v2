/** Footer XL + Mūsų partneriai tokens — mirror `.framer-kZCPt` / `.framer-zKyDj` / `.framer-1j5wsqy`. */

export const AS_SEEN_IN_DESKTOP = {
  padding: "59px 40px",
  gap: 30,
  logoRowGap: 60,
  logoRowWidth: "98%",
} as const;

export const AS_SEEN_IN_MOBILE = {
  outerPadding: "110px 40px",
  outerGap: 7,
  innerWidth: 390,
  innerPadding: "0 40px",
  innerGap: 30,
  logoRowGap: 26,
  logoRowWidth: "90%",
} as const;

export const FOOTER_XL_CARD = {
  padding: "34px 16px 23px",
  containerGap: 80,
  containerPadding: 16,
  containerRadius: 7,
  containerBorder: "1px solid rgba(234, 234, 234, 0.65)",
  contentGap: 16,
  logoWidth: 143,
  logoHeight: 76,
  bottomPadding: "0 44px 10px 18px",
  bottomLinksGap: 31,
  socialGap: 30,
  socialIconSize: 38,
} as const;

/** Mobile footer card — mirror `.framer-zKyDj.framer-v-110o1j5`. */
export const FOOTER_XL_CARD_MOBILE = {
  padding: "34px 16px 23px",
  containerGap: 40,
  containerPadding: 16,
  containerRadius: 7,
  containerBorder: "1px solid rgba(234, 234, 234, 0.65)",
  contentGap: 16,
  logoWidth: 143,
  logoHeight: 76,
  copyWidth: 212,
  bottomPadding: "0 18px 10px",
  bottomGap: 10,
  socialGap: 30,
  socialIconSize: 38,
  maxWidth: 390,
} as const;

export type PressLogoSpec = {
  path: string;
  alt: string;
  href?: string;
  filter?: string;
  objectFit: "contain" | "cover";
  width: number;
  height: number;
};

/** Inventory §1 partner logos — desktop order. */
export const PRESS_LOGOS_DESKTOP: PressLogoSpec[] = [
  {
    path: "/media/lino-partners/daisera.png",
    alt: "daisera",
    href: "https://daisera.lt/",
    objectFit: "contain",
    width: 141,
    height: 104,
  },
  {
    path: "/media/lino-partners/medzio-bites-logo.png",
    alt: "Medzio-Bites-logo",
    href: "https://www.medziobites.lt/",
    objectFit: "contain",
    width: 137,
    height: 100,
  },
  {
    path: "/media/lino-partners/legnoline-logo.jpg",
    alt: "Legnoline logo",
    href: "https://legnoline.lt/",
    objectFit: "contain",
    width: 127,
    height: 93,
  },
  {
    path: "/media/lino-partners/reburnent.jpg",
    alt: "reburnent",
    href: "https://reburnentpro.com/",
    objectFit: "contain",
    width: 122,
    height: 90,
  },
  {
    path: "/media/lino-partners/bauen.png",
    alt: "bauen",
    href: "https://www.bauen.lt/",
    objectFit: "contain",
    width: 103,
    height: 100,
  },
  {
    path: "/media/lino-partners/essve-logo.webp",
    alt: "Essve-logo",
    href: "https://essve.com/lt",
    objectFit: "contain",
    width: 156,
    height: 100,
  },
];

/** Inventory §1 partner logos — mobile order. */
export const PRESS_LOGOS_MOBILE: PressLogoSpec[] = [
  {
    path: "/media/lino-partners/daisera.png",
    alt: "daisera",
    href: "https://daisera.lt/",
    objectFit: "contain",
    width: 96,
    height: 70,
  },
  {
    path: "/media/lino-partners/medzio-bites-logo.png",
    alt: "Medzio-Bites-logo",
    href: "https://www.medziobites.lt/",
    objectFit: "contain",
    width: 96,
    height: 70,
  },
  {
    path: "/media/lino-partners/legnoline-logo.jpg",
    alt: "Legnoline logo",
    href: "https://legnoline.lt/",
    objectFit: "contain",
    width: 96,
    height: 70,
  },
  {
    path: "/media/lino-partners/reburnent.jpg",
    alt: "reburnent",
    href: "https://reburnentpro.com/",
    objectFit: "contain",
    width: 96,
    height: 70,
  },
  {
    path: "/media/lino-partners/bauen.png",
    alt: "bauen",
    href: "https://www.bauen.lt/",
    objectFit: "contain",
    width: 72,
    height: 70,
  },
  {
    path: "/media/lino-partners/essve-logo.webp",
    alt: "Essve-logo",
    href: "https://essve.com/lt",
    objectFit: "contain",
    width: 118,
    height: 70,
  },
];

export const FOOTER_SOCIAL = {
  instagram: "https://www.instagram.com/mblstatyba/",
  facebook: "https://www.facebook.com/p/Mb-Lino-Statyba-100076127300338/",
  x: "https://x.com/vitruviusbuilt",
} as const;
