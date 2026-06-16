import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const siteRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: siteRoot,
  },
  images: {
    /** Drop 2048/3840 — cards never need them; hero caps at 1920. */
    /** 1600 matches hero source width — avoids upscaling blur at ~1598px viewports. */
    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 640],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/karkasiniu-skydiniu-namu-statyba/",
        destination: "/karkasiniu-skydiniu-namu-statyba",
        permanent: true,
      },
      {
        source: "/karkasiniai-sandeliukai/",
        destination: "/karkasiniai-sandeliukai",
        permanent: true,
      },
      {
        source: "/karkasines-pirtys/",
        destination: "/karkasines-pirtys",
        permanent: true,
      },
      {
        source: "/kontaktai",
        destination: "/",
        permanent: true,
      },
      {
        source: "/kontaktai/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contact/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/karkasiniai-namai",
        destination: "/karkasiniu-skydiniu-namu-statyba",
        permanent: true,
      },
      {
        source: "/karkasiniai-namai/",
        destination: "/karkasiniu-skydiniu-namu-statyba",
        permanent: true,
      },
      {
        source: "/galerija",
        destination: "/projektai",
        permanent: true,
      },
      {
        source: "/galerija/",
        destination: "/projektai",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "/privatumo-politika",
        permanent: true,
      },
      {
        source: "/privacy-policy/",
        destination: "/privatumo-politika",
        permanent: true,
      },
      {
        source: "/projects/:slug",
        destination: "/projektai",
        permanent: true,
      },
      {
        source: "/projects/:slug/",
        destination: "/projektai",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/projektai",
        permanent: true,
      },
      {
        source: "/projects/",
        destination: "/projektai",
        permanent: true,
      },
      {
        source: "/company",
        destination: "/",
        permanent: true,
      },
      {
        source: "/company/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/media",
        destination: "/projektai",
        permanent: true,
      },
      {
        source: "/media/",
        destination: "/projektai",
        permanent: true,
      },
      {
        source: "/faqs",
        destination: "/",
        permanent: true,
      },
      {
        source: "/faqs/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/apie-mus",
        destination: "/",
        permanent: true,
      },
      {
        source: "/apie-mus/",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
