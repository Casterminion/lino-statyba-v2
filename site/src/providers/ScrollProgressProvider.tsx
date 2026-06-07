"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useSyncExternalStore,
  type ReactNode,
  type RefObject,
} from "react";
import { useLenis } from "@/providers/LenisProvider";

type SectionEntry = {
  ref: RefObject<HTMLDivElement | null>;
  progress: number;
};

type ScrollProgressStore = {
  sections: Map<string, SectionEntry>;
  listeners: Set<() => void>;
};

const ScrollProgressContext = createContext<ScrollProgressStore | null>(null);

function createStore(): ScrollProgressStore {
  return { sections: new Map(), listeners: new Set() };
}

function notify(store: ScrollProgressStore) {
  store.listeners.forEach((l) => l());
}

/**
 * Scroll architecture: Lenis-driven section progress registry.
 */
export function ScrollProgressProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<ScrollProgressStore>(createStore());
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    const store = storeRef.current;

    const update = () => {
      const scrollY = lenis.scroll;
      let changed = false;

      store.sections.forEach((entry, id) => {
        const el = entry.ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const top = scrollY + rect.top - window.innerHeight;
        const height = Math.max(el.offsetHeight - window.innerHeight, 1);
        const progress = Math.min(1, Math.max(0, (scrollY - top) / height));
        if (entry.progress !== progress) {
          store.sections.set(id, { ...entry, progress });
          changed = true;
        }
      });

      if (changed) notify(store);
    };

    lenis.on("scroll", update);
    update();
    return () => lenis.off("scroll", update);
  }, [lenis]);

  return (
    <ScrollProgressContext.Provider value={storeRef.current}>
      {children}
    </ScrollProgressContext.Provider>
  );
}

function useStore() {
  const store = useContext(ScrollProgressContext);
  if (!store) throw new Error("ScrollProgressProvider required");
  return store;
}

export function useRegisterSection(id: string) {
  const store = useStore();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    store.sections.set(id, { ref, progress: 0 });
    notify(store);
    return () => {
      store.sections.delete(id);
      notify(store);
    };
  }, [store, id]);

  return ref;
}

export function useSectionProgress(id: string): number {
  const store = useStore();

  return useSyncExternalStore(
    useCallback((onStoreChange) => {
      store.listeners.add(onStoreChange);
      return () => store.listeners.delete(onStoreChange);
    }, [store]),
    () => store.sections.get(id)?.progress ?? 0,
    () => 0,
  );
}
