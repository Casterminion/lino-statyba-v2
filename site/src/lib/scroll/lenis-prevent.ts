export const LENIS_PREVENT = "data-lenis-prevent";

export function lenisPreventProps(): { [LENIS_PREVENT]: true } {
  return { [LENIS_PREVENT]: true };
}

export function markLenisPrevent(element: HTMLElement): void {
  element.setAttribute(LENIS_PREVENT, "true");
}
