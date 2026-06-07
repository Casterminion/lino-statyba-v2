"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getAsset } from "@/lib/assets";
import { heroKenBurns } from "@/lib/motion";

type HeroProps = {
  video?: string;
};

/** Legacy hero — retained for inner routes; homepage uses sections/Hero shell. */
export default function Hero({ video }: HeroProps) {
  const heroVideo = getAsset("hero-video");
  const heroPoster = getAsset("hero-poster");
  const src = video ?? heroVideo?.path;
  const poster = heroPoster?.path;

  return (
    <section className="relative h-hero w-full overflow-hidden bg-page">
      <motion.div
        className="absolute inset-0"
        initial={heroKenBurns.initial}
        animate={heroKenBurns.animate}
        transition={heroKenBurns.transition}
      >
        {src ? (
          <video autoPlay muted loop playsInline preload="none" className="h-full w-full object-cover" poster={poster}>
            <source src={src} type="video/mp4" />
          </video>
        ) : poster ? (
          <Image src={poster} alt="Vitruvius Built luxury home" fill priority className="object-cover" sizes="100vw" />
        ) : null}
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>
    </section>
  );
}
