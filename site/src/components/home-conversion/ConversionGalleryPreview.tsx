import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS } from "@/components/nav/constants";
import { cn } from "@/lib/cn";
import {
  GALLERY_CATEGORY_PROOF_LABELS,
  getHomepagePortfolio,
  type GalleryCategory,
  type GalleryItem,
} from "@/lib/content/gallery";
import { projektaiPage } from "@/lib/content/lino-pages/projektai";
import { IMAGE_SIZES } from "@/lib/image-sizes";
import { imageBlurProps } from "@/lib/image-props";
import { HomeSection } from "./HomeSection";

const projektaiNavLabel =
  NAV_ITEMS.find((item) => item.href === "/projektai")?.label ?? projektaiPage.h1;

type PortfolioCardProps = {
  image: GalleryItem;
  className?: string;
  sizes: string;
  priority?: boolean;
};

function PortfolioCard({ image, className, sizes, priority }: PortfolioCardProps) {
  return (
    <Link
      href="/projektai"
      className={cn(
        "group relative block overflow-hidden rounded-sm bg-primary/5",
        className,
      )}
    >
      <Image
        src={image.image}
        alt={GALLERY_CATEGORY_PROOF_LABELS[image.category as GalleryCategory]}
        fill
        priority={priority}
        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        sizes={sizes}
        {...imageBlurProps(image.image)}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 via-black/25 to-transparent"
        aria-hidden
      />
      <p className="absolute bottom-3 left-3 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-white wide:bottom-3.5 wide:left-3.5 wide:text-[11px] desktop:bottom-3.5 desktop:left-3.5 desktop:text-[11px]">
        {GALLERY_CATEGORY_PROOF_LABELS[image.category as GalleryCategory]}
      </p>
    </Link>
  );
}

export function ConversionGalleryPreview() {
  const { featured, supporting } = getHomepagePortfolio();
  const [terrace, shed, frameHouse] = supporting;

  return (
    <HomeSection id="galerija-preview">
      <div className="flex flex-col gap-8 wide:gap-10 desktop:gap-10">
        <h2 className="type-conversion-section-title text-text">{projektaiNavLabel}</h2>

        <div className="flex flex-col gap-2.5 sm:gap-3">
          <PortfolioCard
            image={featured}
            sizes={IMAGE_SIZES.galleryFeatured}
            className="aspect-[4/3] w-full"
          />

          <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
            <PortfolioCard
              image={terrace}
              sizes={IMAGE_SIZES.galleryThumb}
              className="aspect-square w-full"
            />
            <PortfolioCard
              image={shed}
              sizes={IMAGE_SIZES.galleryThumb}
              className="aspect-square w-full"
            />
            <PortfolioCard
              image={frameHouse}
              sizes={IMAGE_SIZES.galleryThumb}
              className="aspect-square w-full"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Link
            href="/projektai"
            className="inline-flex w-fit items-center font-body text-[14px] font-semibold text-primary no-underline transition-opacity hover:opacity-75"
          >
            Daugiau projektų →
          </Link>
        </div>
      </div>
    </HomeSection>
  );
}
