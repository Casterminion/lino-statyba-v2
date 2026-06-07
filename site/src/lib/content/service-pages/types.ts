export type ServiceStoryBlock = {
  label: string;
  body: string;
  imageId: string;
  imageAlt: string;
};

export type ServiceProcessStep = {
  label: string;
  description: string;
};

export type ServiceFaqItem = {
  question: string;
  answer: string;
};

export type ServiceRelatedItem = {
  href: string;
  label: string;
  imageId: string;
  imageAlt: string;
};

export type ServicePageContent = {
  slug: string;
  title: string;
  description: string;
  hero: {
    headline: string;
    subhead: string;
    imageId: string;
    imageAlt: string;
    ctaLabel: string;
  };
  storyBlocks: ServiceStoryBlock[];
  processTitle: string;
  processSteps: ServiceProcessStep[];
  faq: ServiceFaqItem[];
  cta: {
    headline: string;
    subhead: string;
    ctaLabel: string;
  };
  related: ServiceRelatedItem[];
  relatedTitle?: string;
};
