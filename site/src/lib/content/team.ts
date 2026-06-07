import siteData from "../../../content/site.json";
import type { CompanyPageV2, TeamMember } from "./schema";

const raw = siteData.pages.company as CompanyPageV2;

export const companyPage = raw;

export const teamMembers: TeamMember[] = raw.teamMembers ?? [];

export function getCompanyIntro() {
  return raw.intro;
}

export function getCompanyMission() {
  return raw.mission;
}
