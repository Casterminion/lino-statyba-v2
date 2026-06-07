"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { useRegisterSection } from "@/providers/ScrollProgressProvider";

type SectionScrollTrackProps = {
  id: string;
  className?: string;
  children?: ReactNode;
};

export function SectionScrollTrack({ id, className, children }: SectionScrollTrackProps) {
  const ref = useRegisterSection(id);

  return (
    <div ref={ref} data-scroll-track={id} className={cn("relative", className)}>
      {children}
    </div>
  );
}
