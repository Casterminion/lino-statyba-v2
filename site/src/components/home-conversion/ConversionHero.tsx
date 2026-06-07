import Image from "next/image";
import Link from "next/link";
import { ContactCtaButton } from "@/components/contact/ContactCtaButton";
import { NAV_ITEMS } from "@/components/nav/constants";
import { getHeroGalleryImage } from "@/lib/content/gallery";
import { getHomeIntro } from "@/lib/content/home";
import { projektaiPage } from "@/lib/content/lino-pages/projektai";
import { imageBlurProps } from "@/lib/image-props";
import { IMAGE_SIZES } from "@/lib/image-sizes";

const projectsCtaLabel =
  NAV_ITEMS.find((item) => item.href === "/projektai")?.label ?? projektaiPage.h1;

/** Inventory §1 — product-first hero headline (not Apie mus). */
const HERO_HEADLINE = "A++ klasės karkasinių namų statyba nuo pamato iki rakto";

const HERO_PRIMARY_CTA = "Gauti pasiūlymą";

export function ConversionHero() {
  const intro = getHomeIntro();
  const poster = getHeroGalleryImage();
  const primaryCta = HERO_PRIMARY_CTA;
  const subhead = intro.summary ?? intro.body;

  return (
    <section
      data-section="hero"
      data-nav-surface="solid"
      className="conversion-hero-shell relative z-hero w-full shrink-0"
    >
      <div className="conversion-hero-frame relative min-h-[min(72vh,640px)] w-full wide:min-h-[min(78vh,720px)] desktop:min-h-[min(78vh,720px)]">
        {poster ? (
          <Image
            src={poster.image}
            alt={poster.title}
            fill
            priority
            className="conversion-hero-image object-cover object-center"
            sizes={IMAGE_SIZES.hero}
            {...imageBlurProps(poster.image)}
          />
        ) : (
          <div className="absolute inset-0 bg-[#e8e4de]" aria-hidden />
        )}

        <div className="conversion-hero-overlay absolute inset-0" aria-hidden />

        <div className="relative z-[1] mx-auto flex h-full min-h-[inherit] w-full max-w-[1200px] flex-col justify-end px-5 pb-10 pt-24 wide:px-10 wide:pb-14 desktop:px-10 desktop:pb-14">
          <div data-hero-copy className="flex max-w-[640px] flex-col gap-4">
            <h1 className="type-conversion-hero-title text-white">{HERO_HEADLINE}</h1>
            <p className="type-conversion-hero-sub text-white/88">{subhead}</p>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
              <ContactCtaButton className="inline-flex items-center justify-center rounded-md bg-secondary px-7 py-3.5 text-center font-body text-[15px] font-semibold text-primary transition-opacity hover:opacity-90">
                {primaryCta}
              </ContactCtaButton>
              <Link
                href="/projektai"
                className="inline-flex items-center justify-center rounded-md border border-white/35 bg-white/10 px-7 py-3.5 text-center font-body text-[15px] font-semibold text-white no-underline backdrop-blur-sm transition-colors hover:border-white/55 hover:bg-white/15"
              >
                {projectsCtaLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
