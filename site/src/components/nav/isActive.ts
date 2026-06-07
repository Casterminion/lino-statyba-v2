import type { ServiceNavItem } from "./constants";

function normalizePath(path: string): string {
  if (path === "/") return path;
  return path.endsWith("/") ? path.slice(0, -1) : path;
}

/** Match current route to nav href — tolerates trailing-slash differences. */
export function isNavActive(pathname: string, href: string): boolean {
  const path = normalizePath(pathname);
  const target = normalizePath(href);

  if (target === "/") return path === "/";
  return path === target || path.startsWith(`${target}/`);
}

/** True when the current route matches any service page in the nav. */
export function isAnyServiceActive(pathname: string, services: ServiceNavItem[]): boolean {
  return services.some((service) => isNavActive(pathname, service.href));
}
