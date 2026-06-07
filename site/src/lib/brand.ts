/** Lino Statyba brand identity — name and asset paths. */
export const BRAND = {
  name: "Lino Statyba",
  nameUpper: "LINO STATYBA",
  shortName: "Lino",
  logo: {
    color: "/media/lino-logo-color.svg",
    light: "/media/lino-logo-light.svg",
    watermark: "/media/lino-watermark.svg",
  },
  /** Tab / PWA icons — generated from logo assets via `npm run favicons`. */
  icons: {
    ico: "/favicon.ico",
    light: "/favicon-light.png",
    dark: "/favicon-dark.png",
    png32: "/favicon-32x32.png",
    png16: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    pwa192: "/icon-192.png",
    pwa512: "/icon-512.png",
  },
} as const;
