"use client";

import { useEffect, useRef, useState } from "react";

function getNavHeight(): number {
  const value = getComputedStyle(document.documentElement).getPropertyValue("--layout-nav-height");
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 57;
}

function readNavBackgroundOpacity(): number {
  const navHeight = getNavHeight();
  const probeY = navHeight / 2;

  for (const el of document.querySelectorAll<HTMLElement>("[data-nav-surface]")) {
    const rect = el.getBoundingClientRect();
    if (rect.top <= probeY && rect.bottom > probeY) {
      if (el.dataset.navSurface !== "solid") return 0;
      return 1 - Math.min(1, Math.max(0, rect.top / navHeight));
    }
  }

  return 0;
}

/** Smooth 0–1 opacity for the homepage nav backdrop over light sections. */
export function useNavSolidBackground(enabled: boolean): number {
  const [opacity, setOpacity] = useState(0);
  const opacityRef = useRef(0);

  useEffect(() => {
    if (!enabled) {
      opacityRef.current = 0;
      setOpacity(0);
      return;
    }

    let frame = 0;

    const tick = () => {
      const target = readNavBackgroundOpacity();
      const blended = opacityRef.current + (target - opacityRef.current) * 0.22;
      const next = Math.abs(target - blended) < 0.004 ? target : blended;

      opacityRef.current = next;

      setOpacity((prev) => (Math.abs(prev - next) < 0.004 ? prev : next));
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [enabled]);

  return opacity;
}
