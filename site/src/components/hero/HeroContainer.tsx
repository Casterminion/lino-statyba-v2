import { HeroMainCarousel } from "./HeroMainCarousel";
import { HeroOverlay } from "./HeroOverlay";

/** Hero inner container — `.framer-xle0fb`, padding 34px. */
export function HeroContainer() {
  return (
    <div
      className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-hero-base p-[34px]"
      data-framer-name="Container"
    >
      <div aria-hidden className="relative h-[54px] w-full shrink-0" data-framer-name="Spacer" />
      <HeroMainCarousel />
      <HeroOverlay />
    </div>
  );
}
