"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { appearTransition } from "@/lib/motion";

export default function Appear({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={appearTransition(delay)}
    >
      {children}
    </motion.div>
  );
}
