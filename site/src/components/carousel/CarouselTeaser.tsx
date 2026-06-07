"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollLinkedText } from "@/components/overlap-detailing/ScrollLinkedText";
import { getAsset } from "@/lib/assets";
import { getCarouselHeading } from "@/lib/content/home";
import { CAROUSEL_TEASER } from "./constants";

const POSTER_ALT =
  "Vitruvius Built come home in Park  City with Steel Floating Fire Place, Mountain moder design. BERG Design architecture, vitruvius built ";

/** Explore teaser — `.framer-6y91ie` inside desktop Home Page track. */
export function CarouselTeaser() {
  const poster = getAsset("hero-poster");
  const heading = getCarouselHeading();

  return (
    <div
      data-framer-name="Content"
      data-section="carousel"
      className="relative flex w-full flex-col items-end justify-end overflow-hidden"
      style={{
        padding: CAROUSEL_TEASER.padding,
        gap: CAROUSEL_TEASER.gap,
      }}
    >
      <Link
        href="/projects"
        data-cursor-pointer
        className="relative block shrink-0 no-underline"
        style={{
          width: CAROUSEL_TEASER.poster.width,
          height: CAROUSEL_TEASER.poster.height,
        }}
      >
        <div
          data-framer-background-image-wrapper="true"
          className="absolute inset-0 overflow-hidden"
        >
          <Image
            src={poster?.path ?? "/media/WIXf9C0o7dhearF7SPcsHJODOvU.jpg"}
            alt={POSTER_ALT}
            fill
            sizes="759px"
            className="block object-cover object-center"
            style={{ borderRadius: 0 }}
          />
        </div>
      </Link>

      <div
        className="absolute z-[1]"
        style={{
          top: CAROUSEL_TEASER.heading.top,
          left: CAROUSEL_TEASER.heading.left,
          width: CAROUSEL_TEASER.heading.width,
        }}
      >
        <ScrollLinkedText>
          <h3 className="type-carousel-heading whitespace-pre-wrap break-words text-black">
            {heading}
          </h3>
        </ScrollLinkedText>
      </div>
    </div>
  );
}
