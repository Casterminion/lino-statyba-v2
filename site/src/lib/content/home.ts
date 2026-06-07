import siteData from "../../../content/site.json";
import { getAssetsByRole } from "../assets";
import { BUSINESS_ADDRESS } from "./business";
import type { HomePageV2, HomeSections } from "./schema";
import { isHomePageV2 } from "./schema";

const raw = siteData.pages.home;

if (!isHomePageV2(raw)) {
  throw new Error("site.json: pages.home must use sections schema v2");
}

export const homePage = raw as HomePageV2;

export const homeSections: HomeSections = homePage.sections;

export function getHomeIntro() {
  return homeSections.intro;
}

export function getOverlapPanels() {
  return homeSections.overlapDetailing.panels;
}

export function getFeaturePanels() {
  return homeSections.features.panels;
}

export function getCarouselHeading() {
  return homeSections.carousel.heading;
}

export function getCarouselSlugs() {
  return homeSections.carousel.projectSlugs;
}

export function getWhereWeBuild() {
  return homeSections.whereWeBuild;
}

export function getServiceCards() {
  return homeSections.whereWeBuild.serviceCards;
}

export function getHomeFooter() {
  return {
    ...homeSections.footer,
    address: BUSINESS_ADDRESS.formatted,
  };
}

export function getPressLogos() {
  return homeSections.press.logos.length > 0
    ? homeSections.press.logos
    : getAssetsByRole("press-logo");
}
