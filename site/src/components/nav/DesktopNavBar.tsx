"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getAsset } from "@/lib/assets";
import { BRAND } from "@/lib/brand";
import { IMAGE_SIZES } from "@/lib/image-sizes";
import { NavStack } from "@/components/layout/NavStack";
import { NAV_ITEMS } from "./constants";
import { isNavActive } from "./isActive";
import { NavLink } from "./NavLink";
import { ServicesDropdown } from "./ServicesDropdown";

export function DesktopNavBar() {
  const pathname = usePathname();
  const logo = getAsset("logo");

  return (
    <NavStack>
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[68px] w-full max-w-[1200px] items-center justify-between px-10"
      >
        <Link href="/" className="relative block h-[60px] w-[209px] shrink-0" data-cursor-pointer>
          <Image
            src={logo?.path ?? BRAND.logo.color}
            alt={BRAND.name}
            fill
            className="object-contain object-left"
            priority
            sizes={IMAGE_SIZES.navLogoDesktop}
          />
        </Link>

        <div className="flex items-center gap-8">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <ServicesDropdown key={item.label} label={item.label} items={item.children} />
            ) : (
              <NavLink
                key={item.href ?? item.label}
                item={item}
                active={item.href ? isNavActive(pathname, item.href) : false}
                variant="desktop"
              />
            ),
          )}
        </div>
      </nav>
    </NavStack>
  );
}
