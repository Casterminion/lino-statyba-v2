"use client";

import Link from "next/link";
import { ContactCtaButton } from "@/components/contact/ContactCtaButton";
import { cn } from "@/lib/cn";
import { MOBILE_NAV_LINK_CLASS, type NavItem } from "./constants";

type NavLinkProps = {
  item: NavItem;
  active: boolean;
  variant: "desktop" | "mobile";
  onNavigate?: () => void;
};

const navCtaClassName =
  "inline-flex items-center justify-center rounded-md bg-secondary px-6 py-2.5 text-center font-body text-[14px] font-semibold leading-snug text-primary no-underline transition-[background-color,transform,box-shadow] duration-[250ms] ease-out hover:-translate-y-px hover:bg-secondary-hover hover:shadow-md wide:px-7 wide:py-3 wide:text-[15px] desktop:px-7 desktop:py-3 desktop:text-[15px] motion-reduce:transition-none motion-reduce:hover:translate-y-0";

const labelRowClass =
  "font-body block h-[21px] shrink-0 whitespace-nowrap text-[15px] font-medium leading-[21px] tracking-[-0.01em]";

const rollMaskClass = "block h-[21px] overflow-hidden";

const rollTrackClass =
  "block transition duration-300 ease-out group-hover:-translate-y-[21px] group-focus-visible:-translate-y-[21px]";

export function NavLink({ item, active, variant, onNavigate }: NavLinkProps) {
  const isDesktop = variant === "desktop";

  const colorClass = active ? "text-primary" : "text-primary/70";

  if (item.cta) {
    return (
      <ContactCtaButton
        onActivate={onNavigate}
        className={cn(
          navCtaClassName,
          "shrink-0 whitespace-nowrap",
          !isDesktop && "px-7 py-3.5 text-[18px]",
        )}
      >
        {item.label}
      </ContactCtaButton>
    );
  }

  if (!item.href) return null;

  if (isDesktop) {
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        data-cursor-pointer
        className={cn("group inline-block no-underline", colorClass)}
        aria-current={active ? "page" : undefined}
        aria-label={item.label}
      >
        <span className={rollMaskClass} aria-hidden="true">
          <span className={rollTrackClass}>
            <span className={cn(labelRowClass, !active && "text-primary/70")}>{item.label}</span>
            <span className={cn(labelRowClass, "text-primary")}>{item.label}</span>
          </span>
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      data-cursor-pointer
      className={cn(
        MOBILE_NAV_LINK_CLASS,
        "inline-block w-full text-left no-underline transition-colors duration-200",
        active ? "text-primary" : "text-primary/85 hover:text-primary",
      )}
      aria-current={active ? "page" : undefined}
    >
      {item.label}
    </Link>
  );
}
