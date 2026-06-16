"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import {
  getProjectTypeLabel,
  photoCountLabel,
  type Project,
} from "@/lib/content/projects";
import { IMAGE_SIZES } from "@/lib/image-sizes";
import { setOverlayOpen } from "@/lib/overlay-open";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (project) {
      setActiveIndex(0);
      const frame = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(frame);
    }
    setVisible(false);
  }, [project]);

  const goPrev = useCallback(() => {
    if (!project) return;
    setActiveIndex((i) => (i === 0 ? project.images.length - 1 : i - 1));
  }, [project]);

  const goNext = useCallback(() => {
    if (!project) return;
    setActiveIndex((i) => (i === project.images.length - 1 ? 0 : i + 1));
  }, [project]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    },
    [onClose, goPrev, goNext],
  );

  useEffect(() => {
    if (!project) return;
    setOverlayOpen(true);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      setOverlayOpen(false);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, handleKeyDown]);

  if (!project) return null;

  const typeLabel = getProjectTypeLabel(project.category);
  const countLabel = photoCountLabel(project.imageCount);
  const hasMultiple = project.imageCount > 1;
  const activeImage = project.images[activeIndex];

  return (
    <div
      className={cn(
        "project-modal-backdrop fixed inset-0 z-overlay flex flex-col backdrop-blur-[6px]",
        visible && "project-modal-backdrop--visible",
      )}
      style={{ backgroundColor: "rgba(10, 15, 30, 0.92)" }}
      role="dialog"
      aria-modal="true"
      aria-label={typeLabel}
      onClick={onClose}
    >
      <div
        className="relative flex min-h-0 flex-1 flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-start justify-between px-5 pt-5 wide:px-8 wide:pt-7 desktop:px-8 desktop:pt-7">
          <div className="min-w-0">
            <p className="font-body text-[13px] font-medium tracking-[-0.01em] text-white/75 wide:text-[14px] desktop:text-[14px]">
              {typeLabel}
            </p>
            <p className="mt-1 font-body text-[12px] font-normal text-white/40 wide:text-[13px] desktop:text-[13px]">
              {countLabel}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full font-body text-[22px] leading-none text-white/50 transition-colors duration-200 hover:bg-white/8 hover:text-white/90"
            aria-label="Uždaryti"
          >
            ×
          </button>
        </header>

        <div className="relative min-h-0 flex-1">
          <div className="absolute inset-0 flex items-center justify-center px-3 pt-16 pb-24 wide:px-6 wide:pt-20 wide:pb-28 desktop:px-6 desktop:pt-20 desktop:pb-28">
            <div className="relative h-[calc(100vh-10.5rem)] w-[min(88vw,1320px)]">
              <Image
                key={activeImage.id}
                src={activeImage.image}
                alt={activeImage.title}
                fill
                priority
                draggable={false}
                className="project-modal-image project-modal-image--active object-contain"
                sizes={IMAGE_SIZES.modalMain}
              />
            </div>
          </div>

          {hasMultiple ? (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="project-modal-nav-zone project-modal-nav-zone--prev group absolute inset-y-0 left-0 z-10 w-[min(22vw,140px)]"
                aria-label="Ankstesnė nuotrauka"
              >
                <span
                  className="absolute top-1/2 left-5 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/0 font-body text-xl text-white/0 transition-all duration-300 group-hover:bg-white/10 group-hover:text-white/70 wide:left-6 desktop:left-6"
                  aria-hidden
                >
                  ‹
                </span>
              </button>
              <button
                type="button"
                onClick={goNext}
                className="project-modal-nav-zone project-modal-nav-zone--next group absolute inset-y-0 right-0 z-10 w-[min(22vw,140px)]"
                aria-label="Kita nuotrauka"
              >
                <span
                  className="absolute top-1/2 right-5 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/0 font-body text-xl text-white/0 transition-all duration-300 group-hover:bg-white/10 group-hover:text-white/70 wide:right-6 desktop:right-6"
                  aria-hidden
                >
                  ›
                </span>
              </button>
            </>
          ) : null}
        </div>

        {hasMultiple ? (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center px-5 pb-6 wide:pb-8 desktop:pb-8">
            <div className="pointer-events-auto flex max-w-full gap-1.5 overflow-x-auto rounded-full bg-white/[0.06] px-2.5 py-2 backdrop-blur-md [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {project.images.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "relative h-9 w-11 shrink-0 overflow-hidden rounded-[3px] transition-all duration-300 wide:h-10 wide:w-[52px] desktop:h-10 desktop:w-[52px]",
                    index === activeIndex
                      ? "opacity-100 ring-1 ring-white/50 ring-offset-1 ring-offset-transparent"
                      : "opacity-35 hover:opacity-60",
                  )}
                  aria-label={`${index + 1} nuotrauka`}
                  aria-current={index === activeIndex ? "true" : undefined}
                >
                  <Image
                    src={image.image}
                    alt={image.title}
                    fill
                    className="object-cover object-center"
                    sizes={IMAGE_SIZES.modalThumb}
                  />
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
