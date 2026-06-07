import { projektaiPage } from "./projektai";
import type { LinoPage } from "./types";

export type { LinoPage, LinoPageBlock } from "./types";

const pages: Record<string, LinoPage> = {
  projektai: projektaiPage,
};

export function getLinoPage(slug: string): LinoPage {
  const page = pages[slug];
  if (!page) {
    throw new Error(`Unknown Lino page slug: ${slug}`);
  }
  return page;
}
