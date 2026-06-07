import type { AssetRef } from "../assets";

export type FeaturePanel = {
  title: string;
  body: string;
};

export type HomeSections = {
  intro: {
    eyebrow: string;
    title: string;
    body: string;
    summary?: string;
  };
  overlapDetailing: {
    panels: FeaturePanel[];
  };
  features: {
    panels: FeaturePanel[];
  };
  carousel: {
    heading: string;
    projectSlugs: string[];
  };
  whereWeBuild: {
    title: string;
    body: string;
    serviceCards: {
      label: string;
      cta: string;
      href: string;
      alt?: string;
    }[];
    communities: string[];
  };
  press: {
    logos: AssetRef[];
  };
  footer: {
    faqsHeading: string;
    projectsHeading: string;
    projectsBody: string;
    phone: string;
    email: string;
    address: string;
    privacyLabel: string;
    privacyHref: string;
    contactLabel: string;
    contactHref: string;
    copyright: string;
    createdByLabel?: string;
    createdByHref?: string;
  };
};

export type HomePageV2 = {
  slug: "home";
  title: string;
  description: string;
  sections: HomeSections;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image?: string;
};

export type CompanyPageV2 = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  mission: string;
  teamMembers: TeamMember[];
  images: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SiteDataV2 = {
  name: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  address: string;
  social: Record<string, string>;
  communities: string[];
  projects: unknown[];
  pages: {
    home: HomePageV2;
    company: CompanyPageV2;
    contact: { slug: string; title: string; description: string; intro: string; images: string[] };
    media: { slug: string; title: string; description: string; images: string[] };
    faqs: { slug: string; title: string; description: string; items: FaqItem[]; images: string[] };
    "privacy-policy": { slug: string; title: string; description: string; body: string[]; images: string[] };
    projects: { slug: string; title: string; description: string; intro: string; images: string[] };
  };
};

export function isFeaturePanel(value: unknown): value is FeaturePanel {
  return (
    typeof value === "object" &&
    value !== null &&
    "title" in value &&
    "body" in value &&
    typeof (value as FeaturePanel).title === "string" &&
    typeof (value as FeaturePanel).body === "string"
  );
}

export function isHomePageV2(value: unknown): value is HomePageV2 {
  if (typeof value !== "object" || value === null) return false;
  const page = value as HomePageV2;
  return page.slug === "home" && typeof page.sections === "object" && page.sections !== null;
}
