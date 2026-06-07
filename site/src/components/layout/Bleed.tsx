import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BleedProps = {
  className?: string;
  children?: ReactNode;
};

export function Bleed({ className, children }: BleedProps) {
  return (
    <div className={cn("relative -mx-bleed w-[calc(100%+var(--spacing-bleed)*2)] max-w-none", className)}>
      {children}
    </div>
  );
}
