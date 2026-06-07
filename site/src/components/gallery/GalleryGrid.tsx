"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryItem } from "@/lib/content/gallery";
import { GalleryLightbox } from "./GalleryLightbox";

type GalleryGridProps = {
  items: GalleryItem[];
  /** Single-image showcase mode for thin categories (e.g. pirtys). */
  showcase?: boolean;
};

export function GalleryGrid({ items, showcase }: GalleryGridProps) {
  const [active, setActive] = useState<GalleryItem | null>(null);

  if (items.length === 0) return null;

  if (showcase && items.length === 1) {
    const item = items[0];
    return (
      <>
        <button
          type="button"
          onClick={() => setActive(item)}
          className="group relative mx-auto aspect-[4/3] w-full max-w-4xl overflow-hidden rounded-xl bg-primary/5"
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(min-width: 1440px) 896px, 100vw"
          />
        </button>
        <GalleryLightbox item={active} onClose={() => setActive(null)} />
      </>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-3 project-tablet:grid-cols-3 project-tablet:gap-4 project-desktop:grid-cols-4 project-desktop:gap-4">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(item)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-primary/5"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(min-width: 1440px) 280px, 50vw"
            />
            <div
              className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/10"
              aria-hidden
            />
          </button>
        ))}
      </div>
      <GalleryLightbox item={active} onClose={() => setActive(null)} />
    </>
  );
}
