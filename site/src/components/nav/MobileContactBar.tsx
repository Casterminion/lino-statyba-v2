"use client";

import { ContactCtaButton } from "@/components/contact/ContactCtaButton";
import { cn } from "@/lib/cn";
import { NAV_ITEMS } from "./constants";

const mobileContactCtaLabel =
  NAV_ITEMS.find((item) => item.cta)?.label ?? "Gauti pasiūlymą";

type MobileContactBarProps = {
  onCtaActivate?: () => void;
  className?: string;
};

export function MobileContactBar({ onCtaActivate, className }: MobileContactBarProps) {
  return (
    <div
      className={cn("w-full shrink-0 bg-white px-6 py-5", className)}
      style={{ paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto w-full max-w-[420px]">
        <ContactCtaButton
          onActivate={onCtaActivate}
          className="flex w-full items-center justify-center rounded-md border-0 bg-secondary px-6 py-3.5 font-body text-[15px] font-semibold leading-snug tracking-[-0.01em] text-primary transition-colors duration-200 hover:bg-secondary-hover"
        >
          {mobileContactCtaLabel}
        </ContactCtaButton>
      </div>
    </div>
  );
}
