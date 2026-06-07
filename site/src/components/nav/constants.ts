export type ServiceNavItem = {
  href: string;
  label: string;
};

export type NavItem = {
  href?: string;
  label: string;
  indicator: string;
  cta?: boolean;
  children?: ServiceNavItem[];
};

export const SERVICE_NAV_ITEMS: ServiceNavItem[] = [
  { href: "/karkasiniu-skydiniu-namu-statyba", label: "Karkasiniai namai" },
  { href: "/karkasines-pirtys", label: "Karkasinės pirtys" },
  { href: "/karkasiniai-sandeliukai", label: "Karkasiniai sandėliukai" },
];

/** Mobile menu — main link typography (34px, bold, dark navy) */
export const MOBILE_NAV_LINK_CLASS =
  "font-body text-[34px] font-bold leading-[1.1] tracking-[-0.02em] text-primary";

/** Mobile menu — submenu link typography (22px, medium, lighter) */
export const MOBILE_NAV_SUB_LINK_CLASS =
  "block font-body text-[22px] font-medium leading-snug tracking-[-0.01em]";

/** Desktop + mobile primary navigation — Lino IA (Phase 2.7) */
export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Pradžia", indicator: "I" },
  { label: "Paslaugos", indicator: "II", children: SERVICE_NAV_ITEMS },
  { href: "/projektai", label: "Projektai", indicator: "III" },
  {
    label: "Gauti pasiūlymą",
    indicator: "IV",
    cta: true,
  },
];

