import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type HeroScrollSpacerProps = {
  className?: string;
};

export function HeroScrollSpacer({ className }: HeroScrollSpacerProps) {
  return <div aria-hidden className={cn("h-hero-spacer", className)} />;
}
