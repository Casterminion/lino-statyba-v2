import Image from "next/image";
import { ContactCtaButton } from "@/components/contact/ContactCtaButton";
import { getGalleryItemById } from "@/lib/content/gallery";
import { heroImageDelivery } from "@/lib/image-props";

type ServiceHeroProps = {
  headline: string;
  subhead: string;
  imageId: string;
  imageAlt: string;
  ctaLabel: string;
};

export function ServiceHero({ headline, subhead, imageId, imageAlt, ctaLabel }: ServiceHeroProps) {
  const image = getGalleryItemById(imageId);

  return (
    <section
      data-section="service-hero"
      data-nav-surface="solid"
      className="conversion-hero-shell relative z-hero w-full shrink-0"
    >
      <div className="conversion-hero-frame relative min-h-[min(60vh,560px)] w-full wide:min-h-[min(65vh,620px)] desktop:min-h-[min(65vh,620px)]">
        {image ? (
          <Image
            src={image.image}
            alt={imageAlt}
            fill
            className="conversion-hero-image object-cover object-center"
            sizes="100vw"
            {...heroImageDelivery}
          />
        ) : (
          <div className="absolute inset-0 bg-[#e8e4de]" aria-hidden />
        )}

        <div className="relative z-[1] mx-auto flex h-full min-h-[inherit] w-full max-w-[1200px] flex-col justify-end px-5 pb-10 pt-24 wide:px-10 wide:pb-14 desktop:px-10 desktop:pb-14">
          <div data-hero-copy className="flex max-w-[640px] flex-col gap-4">
            <h1 className="type-conversion-hero-title text-white">{headline}</h1>
            <p className="type-conversion-hero-sub text-white/88">{subhead}</p>
            <div className="pt-1">
              <ContactCtaButton className="inline-flex items-center justify-center rounded-md bg-secondary px-7 py-3.5 text-center font-body text-[15px] font-semibold text-primary transition-opacity hover:opacity-90">
                {ctaLabel}
              </ContactCtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
