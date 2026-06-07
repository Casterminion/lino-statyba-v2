import "./content/validate";
import siteData from "../../content/site.json";
import type { HomePageV2, CompanyPageV2 } from "./content/schema";

export type { HomePageV2, CompanyPageV2, FeaturePanel, HomeSections, TeamMember } from "./content/schema";
export type Project = {
  slug: string;
  name: string;
  title: string;
  description: string;
  paragraphs: string[];
  images: string[];
  heroImage: string | null;
};

export type PageContent = {
  slug: string;
  title: string;
  description: string;
  headings: { name: string; text: string }[];
  paragraphs: string[];
  images: string[];
};

export const site = siteData;
export const projects = siteData.projects as Project[];

export const homePage = siteData.pages.home as HomePageV2;
export const home = homePage;
export const homeSections = homePage.sections;

export const companyPage = siteData.pages.company as CompanyPageV2;
export const company = companyPage;

export const contact = siteData.pages.contact as {
  slug: string;
  title: string;
  description: string;
  intro: string;
  images: string[];
};

export const media = siteData.pages.media as PageContent;
export const faqs = siteData.pages.faqs as PageContent;
export const privacyPolicy = siteData.pages["privacy-policy"] as PageContent;
export const projectsPage = siteData.pages.projects as {
  slug: string;
  title: string;
  description: string;
  intro: string;
  images: string[];
};

export { homeSections as homeContent } from "./content/home";
export { teamMembers, getCompanyIntro, getCompanyMission } from "./content/team";
export { getPressLogosForSection } from "./content/press";
export { getAsset, getAssetById, getSectionAssets, getAssetsByRole } from "./assets";

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function cleanParagraph(text: string): string {
  return text
    .replace(/'\)" data-framer[^]*/g, "")
    .replace(/AS SEEN IN/g, "")
    .trim();
}
