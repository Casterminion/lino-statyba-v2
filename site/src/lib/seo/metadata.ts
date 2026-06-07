import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "./config";

type BuildMetadataOptions = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
};

function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Builds Next.js Metadata with canonical, Open Graph, and Twitter Card tags. */
export function buildPageMetadata({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
}: BuildMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);
  const imageUrl = absoluteUrl(ogImage);

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "lt_LT",
      url: canonical,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: imageUrl,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: BRAND.icons.light, media: "(prefers-color-scheme: light)" },
      { url: BRAND.icons.dark, media: "(prefers-color-scheme: dark)" },
      { url: BRAND.icons.ico, sizes: "any" },
      { url: BRAND.icons.png32, sizes: "32x32", type: "image/png" },
      { url: BRAND.icons.png16, sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: BRAND.icons.apple, sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "default",
  },
};
