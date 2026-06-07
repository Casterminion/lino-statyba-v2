import type { Transition, Variants } from "framer-motion";

/** Single source of truth for animation constants — sourced from Framer appear JSON. */

export const durations = {
  loaderLine: 2.5,
  heroAppear: 3,
  loaderOverlayExit: 0.8,
  appearText: 0.9,
  menuOverlay: 0.3,
  carouselCardHover: 0.7,
  projectsGrid: 0.6,
  /** Loader line delay 0.6 + duration 2.5 + buffer */
  loaderComplete: 3.2,
} as const;

export const delays = {
  loaderLine: 0.6,
  heroAppear: 0.7,
  navReveal: 1.55,
} as const;

export const easings = {
  appear: [0.22, 1, 0.36, 1] as const,
  menu: "easeInOut" as const,
  carouselHover: "ease" as const,
} as const;

export const springs = {
  navReveal: { type: "spring" as const, damping: 70, stiffness: 200, mass: 1 },
  loaderLine: { type: "spring" as const, bounce: 0, delay: delays.loaderLine, duration: durations.loaderLine },
  heroAppear: { type: "spring" as const, bounce: 0, delay: delays.heroAppear, duration: durations.heroAppear },
  cursor: { type: "spring" as const, stiffness: 500, damping: 28, mass: 0.5 },
  scrollSnap: { type: "spring" as const, stiffness: 300, damping: 30 },
} as const;

export const stagger = {
  paragraph: 0.08,
  menuLink: 0.08,
  menuFaqs: 0.4,
} as const;

export const loaderLineSweep = {
  initial: { x: -1440, opacity: 0.001 },
  animate: { x: 0, opacity: 1 },
  transition: springs.loaderLine,
} as const;

export const heroLoaderLine = {
  initial: { width: 0 },
  animate: { width: "100%" },
  transition: springs.loaderLine,
} as const;

export const heroKenBurns = {
  initial: { scale: 1.15, opacity: 0.2 },
  animate: { scale: 1, opacity: 1 },
  transition: springs.heroAppear,
} as const;

export const navReveal = {
  initial: { opacity: 0.001 },
  animate: { opacity: 1 },
  transition: { ...springs.navReveal, delay: delays.navReveal },
} as const;

export const loaderOverlay: { exit: { opacity: number }; transition: Transition } = {
  exit: { opacity: 0 },
  transition: { duration: durations.loaderOverlayExit, ease: easings.menu },
};

export const appearFadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: durations.appearText, delay, ease: easings.appear },
  }),
};

export const menuOverlay = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: durations.menuOverlay },
} as const;

export const menuLink = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
} as const;

export const carouselCardHover = {
  scale: 1.05,
  transition: { duration: durations.carouselCardHover, ease: easings.carouselHover },
} as const;

export const cursorMotion = {
  transition: springs.cursor,
  size: { default: 16, hover: 40 },
  offset: { default: 8, hover: 20 },
} as const;

export const scrollHeadingOffset = "-50%";

export const lenis = {
  intensity: 10,
  duration: 1.0,
} as const;

export function reducedMotion<T>(value: T, fallback: T): T {
  if (typeof window === "undefined") return value;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? fallback : value;
}

export function appearTransition(delay = 0): Transition {
  return reducedMotion(
    { duration: durations.appearText, delay, ease: easings.appear },
    { duration: 0, delay: 0 },
  );
}
