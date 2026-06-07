import Image from "next/image";
import Link from "next/link";
import { HomeSection } from "@/components/home-conversion/HomeSection";
import { getGalleryItemById } from "@/lib/content/gallery";
import type { ServiceRelatedItem } from "@/lib/content/service-pages";
import { IMAGE_SIZES } from "@/lib/image-sizes";
import { imageBlurProps } from "@/lib/image-props";

type ServiceRelatedCardsProps = {
  items: ServiceRelatedItem[];
  title?: string;
};

export function ServiceRelatedCards({ items, title = "Paslaugos" }: ServiceRelatedCardsProps) {
  return (
    <HomeSection id="service-related" className="border-t border-primary/8 !py-10 wide:!py-12 desktop:!py-12">
      <div className="flex flex-col gap-6">
        <h2 className="type-conversion-section-title text-text">{title}</h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 wide:gap-5 desktop:gap-5">
          {items.map((item) => {
            const image = getGalleryItemById(item.imageId);

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative block aspect-[4/3] overflow-hidden rounded-lg bg-primary/5 no-underline"
              >
                {image ? (
                  <Image
                    src={image.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover object-center transition-transform duration-[450ms] ease-out group-hover:scale-[1.03]"
                    sizes={IMAGE_SIZES.storyImage}
                    {...imageBlurProps(image.image)}
                  />
                ) : null}

                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.55] via-black/[0.15] to-transparent transition-[background] duration-[450ms] ease-out group-hover:from-black/[0.65] group-hover:via-black/[0.25]"
                  aria-hidden
                />

                <h3 className="absolute bottom-3 left-3 right-3 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-white wide:bottom-4 wide:left-4 wide:text-[11px] desktop:bottom-4 desktop:left-4 desktop:text-[11px]">
                  {item.label}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </HomeSection>
  );
}
