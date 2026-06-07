import { PRIVACY_POLICY, COMPANY } from "@/lib/content/privacy-policy";
import { getServicePage } from "@/lib/content/service-pages";
import { projektaiPage } from "@/lib/content/lino-pages/projektai";
import { home } from "@/lib/content";
import type { PublicRoute } from "./config";

export type PageSeo = {
  path: PublicRoute;
  title: string;
  description: string;
  ogImage?: string;
};

const namaiPage = getServicePage("karkasiniu-skydiniu-namu-statyba");
const pirtysPage = getServicePage("karkasines-pirtys");
const sandeliukaiPage = getServicePage("karkasiniai-sandeliukai");

/** Unique metadata per indexable page — titles/descriptions sourced from existing site copy. */
export const PAGE_SEO: Record<PublicRoute, PageSeo> = {
  "/": {
    path: "/",
    title: "Lino Statyba | A++ klasės karkasinių namų statyba nuo pamato iki rakto",
    description: home.description,
    ogImage: "/media/gallery/namu-statyba/namu-misc-viber-20231107.webp",
  },
  "/projektai": {
    path: "/projektai",
    title: projektaiPage.title,
    description: projektaiPage.description,
    ogImage: "/media/gallery/namu-statyba/karkasiniu-namu-statyba-02.webp",
  },
  "/karkasiniu-skydiniu-namu-statyba": {
    path: "/karkasiniu-skydiniu-namu-statyba",
    title: namaiPage.title,
    description: namaiPage.description,
    ogImage: "/media/gallery/namu-statyba/karkasiniu-namu-statyba-01.webp",
  },
  "/karkasines-pirtys": {
    path: "/karkasines-pirtys",
    title: pirtysPage.title,
    description: pirtysPage.description,
    ogImage: "/media/gallery/pirtys/pirtis-1.webp",
  },
  "/karkasiniai-sandeliukai": {
    path: "/karkasiniai-sandeliukai",
    title: sandeliukaiPage.title,
    description: sandeliukaiPage.description,
    ogImage: "/media/gallery/sandeliukai/sandeliukas-palanga-cover.webp",
  },
  "/privatumo-politika": {
    path: "/privatumo-politika",
    title: `${PRIVACY_POLICY.title} | ${COMPANY.name}`,
    description: PRIVACY_POLICY.description,
  },
};

export function getPageSeo(path: PublicRoute): PageSeo {
  return PAGE_SEO[path];
}
