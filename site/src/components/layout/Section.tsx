import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  name: string;
  background?: "page" | "section" | "footer";
  paddingY?: "none" | "section" | "section-mobile";
  className?: string;
  children?: ReactNode;
};

const bgClass = {
  page: "bg-page",
  section: "bg-section",
  footer: "bg-footer",
} as const;

const pyClass = {
  none: "",
  section: "py-section-y",
  "section-mobile": "py-section-y-mobile mobile:py-section-y-mobile",
} as const;

export function Section({ name, background = "section", paddingY = "none", className, children }: SectionProps) {
  return (
    <section data-section={name} className={cn(bgClass[background], pyClass[paddingY], className)}>
      {children}
    </section>
  );
}
