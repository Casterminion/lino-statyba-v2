import "./content/validate";
import siteData from "../../content/site.json";
import type { HomePageV2 } from "./content/schema";

export type { HomePageV2, HomeSections } from "./content/schema";

export const homePage = siteData.pages.home as HomePageV2;
export const home = homePage;
export const homeSections = homePage.sections;

export { homeSections as homeContent } from "./content/home";
export { getAsset, getAssetById } from "./assets";
