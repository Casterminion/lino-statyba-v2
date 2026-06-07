"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { MOBILE_NAV_LINK_CLASS, MOBILE_NAV_SUB_LINK_CLASS, type ServiceNavItem } from "./constants";
import { isAnyServiceActive, isNavActive } from "./isActive";

type ServicesMobileAccordionProps = {
  label: string;
  items: ServiceNavItem[];
  onNavigate?: () => void;
};

function PlusToggle({ expanded }: { expanded: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex h-[34px] w-[34px] shrink-0 items-center justify-center font-body text-[28px] font-light leading-none text-primary/35 transition-transform duration-300 ease-out motion-reduce:transition-none",
        expanded && "rotate-45",
      )}
    >
      +
    </span>
  );
}

export function ServicesMobileAccordion({ label, items, onNavigate }: ServicesMobileAccordionProps) {
  const pathname = usePathname();
  const active = isAnyServiceActive(pathname, items);
  const [expanded, setExpanded] = useState(active);

  return (
    <div className="flex flex-col">
      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        aria-expanded={expanded}
        className={cn(
          "flex w-full items-center justify-between gap-4 border-0 bg-transparent p-0 text-left transition-colors duration-200",
          MOBILE_NAV_LINK_CLASS,
          active ? "text-primary" : "text-primary/85",
        )}
      >
        <span>{label}</span>
        <PlusToggle expanded={expanded} />
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out motion-reduce:transition-none",
          expanded ? "mt-4 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0",
        )}
      >
        <ul className="ml-0.5 flex flex-col gap-3 overflow-hidden border-l border-primary/15 pl-4">
          {items.map((item) => {
            const itemActive = isNavActive(pathname, item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  data-cursor-pointer
                  aria-current={itemActive ? "page" : undefined}
                  className={cn(
                    MOBILE_NAV_SUB_LINK_CLASS,
                    "no-underline transition-colors duration-200",
                    itemActive ? "text-primary/80" : "text-primary/50 hover:text-primary/70",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
