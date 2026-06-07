"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";
import type { GalleryItem } from "@/lib/content/gallery";

type GalleryLightboxProps = {
  item: GalleryItem | null;
  onClose: () => void;
};

export function GalleryLightbox({ item, onClose }: GalleryLightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!item) return;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, handleKeyDown]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-overlay flex items-center justify-center bg-black/85 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-body text-2xl text-white transition-colors hover:bg-white/20"
        aria-label="Uždaryti"
      >
        ×
      </button>

      <div
        className="relative max-h-[90vh] w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-black">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-contain"
            sizes="(min-width: 1440px) 1024px, 100vw"
            priority
          />
        </div>
        <p className="mt-3 text-center font-body text-[15px] text-white/80">{item.title}</p>
      </div>
    </div>
  );
}
