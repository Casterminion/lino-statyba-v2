"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getAsset } from "@/lib/assets";
import { BRAND } from "@/lib/brand";
import { NAV_ITEMS, SERVICE_NAV_ITEMS } from "./constants";
import { cn } from "@/lib/cn";
import { isNavActive } from "./isActive";
import { MobileContactBar } from "./MobileContactBar";
import { MobileMenuIcon } from "./MobileMenuIcon";
import { NavLink } from "./NavLink";
import { ServicesMobileAccordion } from "./ServicesMobileAccordion";

export function MobileNavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const logo = getAsset("logo");
  const logoSrc = logo?.path ?? BRAND.logo.color;
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) {
      setMenuVisible(false);
      return;
    }

    const frame = requestAnimationFrame(() => setMenuVisible(true));
    return () => cancelAnimationFrame(frame);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const navLinks = NAV_ITEMS.filter((item) => !item.cta);

  return (
    <div
      className={cn(
        "fixed w-full bg-white transition-[box-shadow,border-color] duration-300",
        open
          ? "z-[50] inset-0 flex h-dvh flex-col overflow-hidden"
          : "z-nav inset-x-0 top-0 border-b border-primary/6 shadow-[0_1px_0_rgba(19,33,60,0.03)]",
      )}
    >
      <nav
        aria-label="Primary"
        className={cn("flex w-full flex-col", open && "min-h-0 flex-1")}
      >
        <div className="flex h-[68px] w-full shrink-0 items-center justify-between px-6">
          <Link
            href="/"
            className="relative block h-[52px] w-[192px] shrink-0"
            data-cursor-pointer
            onClick={close}
          >
            <Image
              src={logoSrc}
              alt={BRAND.name}
              fill
              className="object-contain object-left"
              priority
            />
          </Link>
          <MobileMenuIcon open={open} onToggle={() => setOpen((value) => !value)} />
        </div>

        {open ? (
          <div
            className={cn(
              "flex min-h-0 flex-1 flex-col border-t border-primary/6",
              "transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none",
              menuVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
            )}
          >
            <div className="flex min-h-0 flex-1 overflow-y-auto px-6 py-8">
              <div className="flex w-full max-w-[420px] flex-col">
                <ul className="flex flex-col gap-7">
                  {navLinks.map((item) => (
                    <li key={item.href ?? item.label}>
                      {item.children ? (
                        <ServicesMobileAccordion
                          label={item.label}
                          items={SERVICE_NAV_ITEMS}
                          onNavigate={close}
                        />
                      ) : (
                        <NavLink
                          item={item}
                          active={item.href ? isNavActive(pathname, item.href) : false}
                          variant="mobile"
                          onNavigate={close}
                        />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <MobileContactBar onCtaActivate={close} className="border-t border-primary/6" />
          </div>
        ) : null}
      </nav>
    </div>
  );
}
