import type Lenis from "lenis";

/** Bridge Lenis virtual scroll to native scroll position for Framer Motion useScroll. */
export function syncLenisToDocument(lenis: Lenis): () => void {
  const onScroll = () => {
    const y = lenis.scroll;
    document.documentElement.scrollTop = y;
    document.body.scrollTop = y;
  };

  lenis.on("scroll", onScroll);
  return () => lenis.off("scroll", onScroll);
}

export function getLenisScrollProgress(lenis: Lenis): number {
  return lenis.progress;
}
