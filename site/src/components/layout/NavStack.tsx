"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type NavStackProps = {
  className?: string;
  children?: ReactNode;
};

/** Phase 3.4 — fixed white nav shell (always visible while scrolling). */
export function NavStack({ className, children }: NavStackProps) {
  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-nav w-full border-b border-primary/8 bg-white shadow-[0_1px_0_rgba(19,33,60,0.04)]",
        "flex h-[68px] min-h-[68px] w-full flex-col items-center justify-center",
        className,
      )}
    >
      <div className="relative z-[1] w-full">{children}</div>
    </div>
  );
}
