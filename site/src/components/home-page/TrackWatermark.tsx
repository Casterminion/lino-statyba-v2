import Image from "next/image";
import { getAsset } from "@/lib/assets";
import { BRAND } from "@/lib/brand";
import { TRACK_WATERMARK, TRACK_Z } from "./constants";

/** Brand watermark — mirror `.framer-1dapt2o` on Home Page track. */
export function TrackWatermark() {
  const watermark = getAsset("watermark");

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 overflow-hidden"
      data-framer-name="Watermark"
      style={{
        zIndex: TRACK_Z.watermark,
        height: TRACK_WATERMARK.size,
        bottom: TRACK_WATERMARK.bottom,
      }}
    >
      <div
        className="relative h-full w-full max-w-full"
        style={{ transform: "rotate(-180deg)" }}
      >
        <Image
          src={watermark?.path ?? BRAND.logo.watermark}
          alt=""
          fill
          className="relative object-contain object-left-top opacity-[0.16] [image-rendering:pixelated]"
          sizes="100vw"
        />
      </div>
    </div>
  );
}
