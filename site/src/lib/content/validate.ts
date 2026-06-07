import siteData from "../../../content/site.json";
import { isHomePageV2 } from "./schema";

export function validateSiteContent(): void {
  const home = siteData.pages.home;
  if (!isHomePageV2(home)) {
    throw new Error("Invalid home page schema: expected sections v2");
  }

  if (!home.sections.carousel.projectSlugs.length) {
    throw new Error("Invalid home page: carousel.projectSlugs must not be empty");
  }

  if (!home.sections.whereWeBuild.serviceCards.length) {
    throw new Error("Invalid home page: whereWeBuild.serviceCards must not be empty");
  }
}

validateSiteContent();
