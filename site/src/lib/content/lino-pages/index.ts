import { apieMusPage } from "./apie-mus";
import { projektaiPage } from "./projektai";
import { kontaktaiPage } from "./kontaktai";
import { karkasiniuSkydiniuNamuStatybaPage } from "./karkasiniu-skydiniu-namu-statyba";
import { karkasiniaiSandeliukaiPage } from "./karkasiniai-sandeliukai";
import { karkasinesPirtysPage } from "./karkasines-pirtys";
import type { LinoPage } from "./types";

export type { LinoPage, LinoPageBlock } from "./types";

const pages: Record<string, LinoPage> = {
  "apie-mus": apieMusPage,
  projektai: projektaiPage,
  kontaktai: kontaktaiPage,
  "karkasiniu-skydiniu-namu-statyba": karkasiniuSkydiniuNamuStatybaPage,
  "karkasiniai-sandeliukai": karkasiniaiSandeliukaiPage,
  "karkasines-pirtys": karkasinesPirtysPage,
};

export function getLinoPage(slug: string): LinoPage {
  const page = pages[slug];
  if (!page) {
    throw new Error(`Unknown Lino page slug: ${slug}`);
  }
  return page;
}

export function getLinoPageSlugs(): string[] {
  return Object.keys(pages);
}
