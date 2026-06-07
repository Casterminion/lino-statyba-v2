"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/cn";
import type { ServiceNavItem } from "./constants";
import { isAnyServiceActive, isNavActive } from "./isActive";

type ServicesDropdownProps = {
  label: string;
  items: ServiceNavItem[];
};

const labelRowClass =
  "font-body block h-[21px] shrink-0 whitespace-nowrap text-[15px] font-medium leading-[21px] tracking-[-0.01em]";

const rollMaskClass = "block h-[21px] overflow-hidden";

const rollTrackClass =
  "block transition duration-300 ease-out group-hover:-translate-y-[21px] group-focus-visible:-translate-y-[21px]";

export function ServicesDropdown({ label, items }: ServicesDropdownProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = isAnyServiceActive(pathname, items);

  return (
    <div
      className="relative h-[21px]"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-label={label}
        aria-haspopup="true"
        aria-expanded={open}
        className={cn(
          "group block border-0 bg-transparent p-0 no-underline",
          active ? "text-primary" : "text-primary/70",
        )}
      >
        <span className={rollMaskClass} aria-hidden="true">
          <span className={rollTrackClass}>
            <span className={cn(labelRowClass, !active && "text-primary/70")}>{label}</span>
            <span className={cn(labelRowClass, "text-primary")}>{label}</span>
          </span>
        </span>
      </button>

      <div
        aria-hidden={!open}
        className={cn(
          "absolute left-1/2 top-full z-10 -translate-x-1/2 pt-2",
          "transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none",
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0",
        )}
      >
        <div
          role="menu"
          aria-label={label}
          className="min-w-[220px] overflow-hidden rounded-lg border border-primary/8 bg-white py-1.5 shadow-[0_8px_24px_rgba(19,33,60,0.12)]"
        >
          {items.map((item) => {
            const itemActive = isNavActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                data-cursor-pointer
                aria-current={itemActive ? "page" : undefined}
                className={cn(
                  "block px-4 py-2.5 font-body text-[14px] font-medium leading-snug tracking-[-0.01em] no-underline transition-colors duration-150",
                  itemActive ? "bg-primary/[0.04] text-primary" : "text-primary/70 hover:bg-primary/[0.03] hover:text-primary",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
