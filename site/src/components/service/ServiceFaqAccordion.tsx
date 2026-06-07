"use client";

import { useState } from "react";
import { HomeSection } from "@/components/home-conversion/HomeSection";
import { cn } from "@/lib/cn";
import { getHomeFooter } from "@/lib/content/home";
import type { ServiceFaqItem } from "@/lib/content/service-pages";

type ServiceFaqAccordionProps = {
  items: ServiceFaqItem[];
};

export function ServiceFaqAccordion({ items }: ServiceFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { faqsHeading } = getHomeFooter();
  const answeredItems = items.filter((item) => item.answer?.trim());

  if (answeredItems.length === 0) {
    return null;
  }

  return (
    <HomeSection id="service-faq" className="border-t border-primary/8">
      <div className="flex flex-col gap-8">
        <h2 className="type-conversion-section-title text-text">{faqsHeading}</h2>

        <ul className="divide-y divide-primary/10 border-y border-primary/10">
          {answeredItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <li key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-body text-[15px] font-semibold text-text">{item.question}</span>
                  <span
                    className={cn(
                      "shrink-0 font-body text-[18px] leading-none text-primary/50 transition-transform duration-200",
                      isOpen && "rotate-45",
                    )}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                {isOpen ? (
                  <p className="pb-4 font-body text-[15px] leading-[1.6] text-text/70">{item.answer}</p>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </HomeSection>
  );
}
