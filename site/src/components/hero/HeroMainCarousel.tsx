"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroKenBurns } from "@/lib/motion";
import { HeroVideo } from "./HeroVideo";

/** Main Carousel / Home page — appear-id 1769f6b Ken Burns + filtered video. */
export function HeroMainCarousel() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="absolute top-0 left-0 z-[1] h-full w-[102%] overflow-hidden"
      data-framer-name="Main Carousel"
    >
      <motion.div
        className="h-full w-full"
        data-framer-name="Home page "
        initial={reduceMotion ? false : heroKenBurns.initial}
        animate={heroKenBurns.animate}
        transition={reduceMotion ? { duration: 0 } : heroKenBurns.transition}
      >
        <div className="relative h-full w-full opacity-[0.97] brightness-[0.96]">
          <HeroVideo className="relative h-full w-full" />
        </div>
      </motion.div>
    </div>
  );
}
