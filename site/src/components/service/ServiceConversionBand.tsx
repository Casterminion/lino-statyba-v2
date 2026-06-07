import { ContactCtaButton } from "@/components/contact/ContactCtaButton";
import { HomeSection } from "@/components/home-conversion/HomeSection";

type ServiceConversionBandProps = {
  headline: string;
  subhead: string;
  ctaLabel: string;
};

export function ServiceConversionBand({ headline, subhead, ctaLabel }: ServiceConversionBandProps) {
  return (
    <HomeSection id="service-cta" variant="dark">
      <div className="flex max-w-[640px] flex-col gap-4">
        <h2 className="font-serif text-3xl leading-tight text-white wide:text-4xl desktop:text-4xl">
          {headline}
        </h2>
        <p className="font-body text-[15px] leading-[1.55] text-white/75">{subhead}</p>
        <div className="pt-2">
          <ContactCtaButton className="inline-flex items-center justify-center rounded-md bg-secondary px-7 py-3.5 text-center font-body text-[15px] font-semibold text-primary transition-opacity hover:opacity-90">
            {ctaLabel}
          </ContactCtaButton>
        </div>
      </div>
    </HomeSection>
  );
}
