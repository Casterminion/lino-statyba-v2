"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cursorMotion } from "@/lib/motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(
        !!target.closest("a, button, [data-cursor-pointer], input, textarea, select"),
      );
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [visible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  const size = hovering ? cursorMotion.size.hover : cursorMotion.size.default;
  const offset = hovering ? cursorMotion.offset.hover : cursorMotion.offset.default;

  return (
    <>
      <style jsx global>{`
        * { cursor: none !important; }
      `}</style>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-cursor mix-blend-difference"
        animate={{
          x: pos.x - offset,
          y: pos.y - offset,
          width: size,
          height: size,
          opacity: visible ? 1 : 0,
        }}
        transition={cursorMotion.transition}
      >
        <div className="h-full w-full rounded-full border border-white bg-white/20" />
      </motion.div>
    </>
  );
}
