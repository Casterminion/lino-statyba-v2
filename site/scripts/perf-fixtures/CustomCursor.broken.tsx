"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { cursorMotion } from "@/lib/motion";
import { useOverlayOpen } from "@/lib/overlay-open";

export default function CustomCursor() {
  const overlayOpen = useOverlayOpen();
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const offsetRef = useRef<number>(cursorMotion.offset.default);
  const rafRef = useRef<number | null>(null);
  const visibleRef = useRef(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const applyTransform = () => {
    const el = cursorRef.current;
    if (!el) return;
    const { x, y } = posRef.current;
    const offset = offsetRef.current;
    el.style.transform = `translate3d(${x - offset}px, ${y - offset}px, 0)`;
  };

  useEffect(() => {
    offsetRef.current = hovering
      ? cursorMotion.offset.hover
      : cursorMotion.offset.default;
    applyTransform();
  }, [hovering]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };

      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(() => {
          applyTransform();
          rafRef.current = null;
        });
      }

      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }
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
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  const size = hovering ? cursorMotion.size.hover : cursorMotion.size.default;

  return (
    <>
      <style jsx global>{`
        * { cursor: none !important; }
      `}</style>
      <div
        ref={cursorRef}
        className={cn(
          "pointer-events-none fixed top-0 left-0 z-cursor will-change-transform",
          overlayOpen
            ? "transition-opacity duration-200"
            : "mix-blend-difference transition-[width,height,opacity] duration-300 ease-out",
        )}
        style={{
          width: size,
          height: size,
          opacity: visible ? 1 : 0,
        }}
      >
        <div
          className={cn(
            "h-full w-full rounded-full",
            overlayOpen
              ? "border-2 border-primary bg-primary/15"
              : "border border-white bg-white/20",
          )}
        />
      </div>
    </>
  );
}
