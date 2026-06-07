import { MobileStickyCta } from "@/components/home-conversion/MobileStickyCta";
import type { ServicePageContent } from "@/lib/content/service-pages";
import { ServiceConversionBand } from "./ServiceConversionBand";
import { ServiceFaqAccordion } from "./ServiceFaqAccordion";
import { ServiceHero } from "./ServiceHero";
import { ServiceProcessStepper } from "./ServiceProcessStepper";
import { ServiceProjectStory } from "./ServiceProjectStory";
import { ServiceRelatedCards } from "./ServiceRelatedCards";

type ServicePageLayoutProps = {
  page: ServicePageContent;
};

export function ServicePageLayout({ page }: ServicePageLayoutProps) {
  return (
    <>
      <main className="flex w-full flex-col pb-[calc(4.5rem+env(safe-area-inset-bottom))] wide:pb-0 desktop:pb-0">
        <ServiceHero
          headline={page.hero.headline}
          subhead={page.hero.subhead}
          imageId={page.hero.imageId}
          imageAlt={page.hero.imageAlt}
          ctaLabel={page.hero.ctaLabel}
        />
        <ServiceProjectStory blocks={page.storyBlocks} />
        <ServiceProcessStepper title={page.processTitle} steps={page.processSteps} />
        <ServiceFaqAccordion items={page.faq} />
        <ServiceConversionBand
          headline={page.cta.headline}
          subhead={page.cta.subhead}
          ctaLabel={page.cta.ctaLabel}
        />
        <ServiceRelatedCards items={page.related} title={page.relatedTitle} />
      </main>
      <MobileStickyCta />
    </>
  );
}
