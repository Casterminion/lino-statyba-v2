"use client";

import Image from "next/image";
import { getAsset } from "@/lib/assets";

type HeroVideoProps = {
  className?: string;
  filterClassName?: string;
  posterOnly?: boolean;
};

export function HeroVideo({ className, filterClassName, posterOnly }: HeroVideoProps) {
  const heroVideo = getAsset("hero-video");
  const heroPoster = getAsset("hero-poster");
  const src = heroVideo?.path;
  const poster = heroPoster?.path;

  if (!src || posterOnly) {
    if (!poster) return null;
    return (
      <div className={className}>
        <Image src={poster} alt="" fill priority className="object-cover object-[center_35%]" sizes="100vw" />
      </div>
    );
  }

  return (
    <div className={className}>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className={`h-full w-full object-cover object-center ${filterClassName ?? ""}`}
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
