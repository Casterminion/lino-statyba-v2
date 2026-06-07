"use client";

import { getWhereWeBuild } from "@/lib/content/home";
import { ScrollReveal } from "@/components/overlap-detailing/ScrollReveal";
import { WHERE_WE_BUILD } from "./constants";

type WhereWeBuildBlockProps = {
  variant: "desktop" | "mobile";
};

/** Paslaugos intro — flow layout tied to service cards below. */
export function WhereWeBuildBlock({ variant }: WhereWeBuildBlockProps) {
  const content = getWhereWeBuild();
  const isDesktop = variant === "desktop";
  const padding = isDesktop ? WHERE_WE_BUILD.padding : WHERE_WE_BUILD.paddingMobile;

  return (
    <section
      data-framer-name="Content"
      data-section="where-we-build"
      className="relative flex w-full flex-col overflow-hidden"
      style={{ gap: WHERE_WE_BUILD.gap, padding }}
    >
      <ScrollReveal>
        <h2 className="type-where-we-build-title text-left text-black">
          <strong>{content.title}</strong>
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.08}>
        <p className="type-where-we-build max-w-[720px] text-left text-black">{content.body}</p>
      </ScrollReveal>
    </section>
  );
}
