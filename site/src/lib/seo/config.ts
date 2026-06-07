import { COMPANY } from "@/lib/content/privacy-policy";
import { BUSINESS_ADDRESS, BUSINESS_GEO } from "@/lib/content/business";
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
  logo: `${SITE_URL}${BRAND.logo.color}`,
  email: COMPANY.email,
  telephone: COMPANY.phone.replace(/\s/g, ""),
  vatId: COMPANY.vat,
  companyId: COMPANY.code,
  address: {
    streetAddress: BUSINESS_ADDRESS.streetAddress,
    addressLocality: BUSINESS_ADDRESS.addressLocality,
    addressRegion: BUSINESS_ADDRESS.addressRegion,
    postalCode: BUSINESS_ADDRESS.postalCode,
    addressCountry: BUSINESS_ADDRESS.addressCountry,
  },
  geo: {
    latitude: BUSINESS_GEO.latitude,
    longitude: BUSINESS_GEO.longitude,
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
