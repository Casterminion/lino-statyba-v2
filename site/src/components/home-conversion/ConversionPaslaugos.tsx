import Image from "next/image";
import Link from "next/link";
import { getServiceCardGalleryImages } from "@/lib/content/gallery";
import { getServiceCards, getWhereWeBuild } from "@/lib/content/home";
import { HomeSection } from "./HomeSection";

export function ConversionPaslaugos() {
  const { title, body } = getWhereWeBuild();
  const cards = getServiceCards();
  const cardImages = getServiceCardGalleryImages();

  return (
    <HomeSection id="paslaugos">
      <div className="flex flex-col gap-8 wide:gap-10 desktop:gap-10">
        <div className="flex max-w-[600px] flex-col gap-3">
          <h2 className="type-conversion-section-title text-text">{title}</h2>
          <p className="font-body text-[15px] font-normal leading-[1.55] tracking-[-0.01em] text-text/60">
            {body}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 wide:grid-cols-3 wide:gap-5 desktop:grid-cols-3 desktop:gap-5">
          {cards.map((card, index) => {
            const image = cardImages[index];

            return (
              <Link
                key={card.href}
                href={card.href}
                className="group relative block aspect-[4/3] cursor-pointer overflow-hidden rounded-lg bg-primary/5 no-underline"
              >
                {image ? (
                  <Image
                    src={image.image}
                    alt={card.alt ?? image.title}
                    fill
                    className="object-cover object-center transition-transform duration-[450ms] ease-out group-hover:scale-[1.03]"
                    sizes="(min-width: 1440px) 380px, 100vw"
                  />
                ) : null}

                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.55] via-black/[0.15] to-transparent transition-[background] duration-[450ms] ease-out group-hover:from-black/[0.65] group-hover:via-black/[0.25]"
                  aria-hidden
                />

                <h3 className="absolute bottom-3 left-3 right-3 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-white wide:bottom-4 wide:left-4 wide:text-[11px] desktop:bottom-4 desktop:left-4 desktop:text-[11px]">
                  {card.label}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </HomeSection>
  );
}
