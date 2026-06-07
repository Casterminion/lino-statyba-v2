"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { useIsDesktopNavTier } from "@/hooks/useBreakpoint";

type StickyHeroProps = {
  className?: string;
  children?: ReactNode;
};

export function StickyHero({ className, children }: StickyHeroProps) {
  const desktop = useIsDesktopNavTier();

  return (
    <div
      className={cn(
        "h-hero z-hero",
        desktop ? "sticky top-0" : "relative",
        className,
      )}
    >
      {children}
    </div>
  );
}
