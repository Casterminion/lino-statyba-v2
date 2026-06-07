import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ];
  },
};

export default nextConfig;
