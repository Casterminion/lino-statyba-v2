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

  const company = siteData.pages.company as { teamMembers?: unknown[] };
  if (!Array.isArray(company.teamMembers) || company.teamMembers.length === 0) {
    throw new Error("Invalid company page: teamMembers required");
  }
}

validateSiteContent();
