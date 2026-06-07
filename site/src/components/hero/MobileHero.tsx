"use client";

import Image from "next/image";
import { getAsset } from "@/lib/assets";

/** Mobile hero — flow layout, brightness 0.5, no sticky/fixed stack (≤1439). */
export function MobileHero() {
  const heroPoster = getAsset("hero-poster");

  if (!heroPoster?.path) return null;

  return (
    <section className="relative w-full bg-section" data-section="hero-mobile" data-framer-name="Home">
      <div
        className="relative mx-auto aspect-[16/10] w-full max-w-[390px] brightness-[0.92]"
        data-framer-name="Content"
      >
        <Image
          src={heroPoster.path}
          alt=""
          fill
          priority
          className="object-cover object-[center_35%]"
          sizes="390px"
        />
      </div>
    </section>
  );
}
