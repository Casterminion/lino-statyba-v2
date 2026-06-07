import { getImageBlur } from "@/lib/image-blur-data";

/** Blur placeholder props for next/image when a generated placeholder exists. */
export function imageBlurProps(src: string) {
  const blurDataURL = getImageBlur(src);
  if (!blurDataURL) return {};
  return { placeholder: "blur" as const, blurDataURL };
}
