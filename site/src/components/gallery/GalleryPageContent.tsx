"use client";

import { useMemo, useState } from "react";
import {
  GALLERY_CATEGORY_LABELS,
  getGalleryItemsForFilter,
  type GalleryCategory,
} from "@/lib/content/gallery";
import { GalleryGrid } from "./GalleryGrid";

const FILTERS: (GalleryCategory | "visi")[] = [
  "visi",
  "namu-statyba",
  "terasos",
  "sandeliukai",
  "pirtys",
];

type GalleryPageContentProps = {
  title: string;
  subtitle?: string;
};

export function GalleryPageContent({ title, subtitle }: GalleryPageContentProps) {
  const [filter, setFilter] = useState<GalleryCategory | "visi">("visi");

  const items = useMemo(() => getGalleryItemsForFilter(filter), [filter]);

  return (
    <div className="mx-auto w-full max-w-[1200px] px-5 py-12 wide:px-10 wide:py-16 desktop:px-10 desktop:py-16">
      <div className="mb-8 flex flex-col gap-3">
        <h1 className="type-conversion-section-title text-text">{title}</h1>
        {subtitle ? (
          <p className="type-conversion-section-lead text-text/80">{subtitle}</p>
        ) : null}
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {FILTERS.map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setFilter(key)}
            className={`rounded-full px-4 py-2 font-body text-[13px] font-semibold transition-colors ${
              filter === key
                ? "bg-primary text-white"
                : "border border-primary/15 bg-white text-primary hover:border-primary/30"
            }`}
          >
            {GALLERY_CATEGORY_LABELS[key]}
          </button>
        ))}
      </div>

      <GalleryGrid items={items} />
    </div>
  );
}
