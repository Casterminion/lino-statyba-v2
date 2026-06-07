import { namaiServicePage } from "./namai";
import { pirtysServicePage } from "./pirtys";
import { sandeliukaiServicePage } from "./sandeliukai";
import type { ServicePageContent } from "./types";

export type {
  ServiceFaqItem,
  ServicePageContent,
  ServiceProcessStep,
  ServiceRelatedItem,
  ServiceStoryBlock,
} from "./types";

const pages: Record<string, ServicePageContent> = {
  "karkasiniu-skydiniu-namu-statyba": namaiServicePage,
  "karkasines-pirtys": pirtysServicePage,
  "karkasiniai-sandeliukai": sandeliukaiServicePage,
};

export function getServicePage(slug: string): ServicePageContent {
  const page = pages[slug];
  if (!page) {
    throw new Error(`Unknown service page slug: ${slug}`);
  }
  return page;
}
