"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { appearFadeUp, easings, durations } from "@/lib/motion";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/** Viewport-enter reveal — blueprint interaction lane timing (~0.9s ease). */
export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.25, margin: "0px 0px -8% 0px" }}
      variants={appearFadeUp}
      custom={delay}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: durations.appearText, delay, ease: easings.appear }
      }
    >
      {children}
    </motion.div>
  );
}
