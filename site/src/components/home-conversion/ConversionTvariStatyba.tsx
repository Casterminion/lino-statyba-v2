import Image from "next/image";
import Link from "next/link";
import { getGalleryItemById } from "@/lib/content/gallery";
import { getOverlapPanels, getWhereWeBuild } from "@/lib/content/home";
import { HomeSection } from "./HomeSection";

export function ConversionTvariStatyba() {
  const panels = getOverlapPanels();
  const panel = panels[0];
  const serviceCard = getWhereWeBuild().serviceCards[0];
  const image = getGalleryItemById("projektas-1-01");

  return (
    <HomeSection id="tvari-statyba" className="py-10 wide:py-12 desktop:py-12">
      <div className="grid grid-cols-1 items-center gap-6 wide:grid-cols-[1fr_280px] wide:gap-10 desktop:grid-cols-[1fr_280px] desktop:gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="type-conversion-section-title text-text">{panel?.title}</h2>
          <p className="type-conversion-section-lead text-text/80">{panel?.body}</p>
          {serviceCard ? (
            <Link
              href={serviceCard.href}
              className="mt-1 inline-flex w-fit items-center font-body text-[14px] font-semibold text-primary no-underline transition-opacity hover:opacity-75"
            >
              {serviceCard.cta} →
            </Link>
          ) : null}
        </div>

        {image ? (
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-primary/5 wide:aspect-square wide:max-w-[280px] wide:justify-self-end desktop:aspect-square desktop:max-w-[280px] desktop:justify-self-end">
            <Image
              src={image.image}
              alt={image.title}
              fill
              className="object-cover object-center"
              sizes="(min-width: 1440px) 280px, 100vw"
            />
          </div>
        ) : null}
      </div>
    </HomeSection>
  );
}
