"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { FEATURES_IMAGE_RADIUS } from "./constants";

type FeatureImageCardProps = {
  href: string;
  src: string;
  alt: string;
  label: string;
  ctaLabel?: string;
  variant: "desktop" | "mobile";
  imageFit?: "cover" | "contain";
};

/** Feature grid image card — `.framer-1qaqqm7` / `.framer-77xmn9` with hover overlay. */
export function FeatureImageCard({
  href,
  src,
  alt,
  label,
  ctaLabel,
  variant,
  imageFit = "cover",
}: FeatureImageCardProps) {
  const isDesktop = variant === "desktop";

  return (
    <Link
      href={href}
      data-cursor-pointer
      className={cn(
        "group relative flex flex-1 flex-col gap-5 no-underline",
        !isDesktop && "py-[11px]",
      )}
    >
      <div
        className="relative aspect-square w-full overflow-hidden"
        data-framer-name={href.includes("faqs") ? "Image" : "Photo"}
        style={{ borderRadius: FEATURES_IMAGE_RADIUS }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={cn(
            "object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]",
            imageFit === "cover" ? "object-cover" : "object-contain",
          )}
          sizes="(min-width: 1440px) 470px, (max-width: 1439px) 470px"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30"
          style={{ borderRadius: FEATURES_IMAGE_RADIUS }}
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <h3
          className={cn(
            "text-balance leading-snug",
            isDesktop ? "type-feature-grid-link text-left text-black" : "type-feature-title text-left text-black",
          )}
        >
          {label}
        </h3>
        {ctaLabel ? (
          <p
            className={cn(
              isDesktop ? "type-feature-grid-link text-left text-black" : "type-feature-title text-left text-black",
            )}
          >
            {ctaLabel}
          </p>
        ) : null}
      </div>
    </Link>
  );
}
