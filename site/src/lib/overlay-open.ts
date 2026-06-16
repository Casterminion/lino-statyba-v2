"use client";

import { useSyncExternalStore } from "react";

let overlayCount = 0;
const listeners = new Set<() => void>();

export function setOverlayOpen(open: boolean) {
  overlayCount = Math.max(0, overlayCount + (open ? 1 : -1));
  listeners.forEach((listener) => listener());
}

export function useOverlayOpen() {
  return useSyncExternalStore(
    (onStoreChange) => {
      listeners.add(onStoreChange);
      return () => listeners.delete(onStoreChange);
    },
    () => overlayCount > 0,
    () => false,
  );
}
