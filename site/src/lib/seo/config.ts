import { COMPANY } from "@/lib/content/privacy-policy";
import { BRAND } from "@/lib/brand";

/** Production site origin — used for canonicals, OG URLs, sitemap, and JSON-LD. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://linostatyba.lt";

export const SITE_NAME = BRAND.name;

export const DEFAULT_OG_IMAGE = "/media/gallery/namu-statyba/namu-misc-viber-20231107.webp";

export const ORGANIZATION = {
  name: COMPANY.name,
  legalName: COMPANY.name,
  url: SITE_URL,
  logo: `${SITE_URL}/media/lino-logo-color.svg`,
  email: COMPANY.email,
  telephone: COMPANY.phone.replace(/\s/g, ""),
  vatId: COMPANY.vat,
  companyId: COMPANY.code,
  address: {
    streetAddress: "Vasario 16-osios g. 32",
    addressLocality: "Teleičiai",
    addressRegion: "Kauno r.",
    postalCode: "53214",
    addressCountry: "LT",
  },
  geo: {
    latitude: 54.889,
    longitude: 23.882,
  },
  sameAs: [
    "https://www.facebook.com/p/Mb-Lino-Statyba-100076127300338/",
    "https://www.instagram.com/mblstatyba/",
  ],
} as const;

/** Indexable Lithuanian routes for sitemap and SEO metadata registry. */
export const PUBLIC_ROUTES = [
  "/",
  "/projektai",
  "/karkasiniu-skydiniu-namu-statyba",
  "/karkasines-pirtys",
  "/karkasiniai-sandeliukai",
  "/privatumo-politika",
] as const;

export type PublicRoute = (typeof PUBLIC_ROUTES)[number];
