"use client";

import type { CSSProperties, ReactNode } from "react";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/cn";
import { scrollHeadingOffset } from "@/lib/motion";

type ScrollLinkedTextProps = {
  children: ReactNode;
  className?: string;
  slotClassName?: string;
  style?: CSSProperties;
  centerX?: boolean;
};

/** Scroll-bound heading block — mirror `translateY(-50%)` + scroll progress shift. */
export function ScrollLinkedText({
  children,
  className,
  slotClassName,
  style,
  centerX = false,
}: ScrollLinkedTextProps) {
  const slotRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: slotRef,
    offset: ["start 0.9", "end 0.1"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? ["0%", "0%", "0%"] : ["-18%", "0%", "18%"],
  );

  return (
    <div ref={slotRef} className={cn("relative", slotClassName)} style={style}>
      <motion.div
        className={cn(
          "will-change-transform",
          centerX && "left-1/2 -translate-x-1/2",
          className,
        )}
        style={{
          y,
          translateY: scrollHeadingOffset,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
