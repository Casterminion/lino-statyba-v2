import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav/index";
import { ConversionKontaktaiFooter } from "@/components/home-conversion/ConversionKontaktaiFooter";
import Providers from "@/components/Providers";
import { ServiceWorkerCleanup } from "@/components/ServiceWorkerCleanup";
import { home } from "@/lib/content";

const onest = Onest({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-onest",
  display: "swap",
});

export const metadata: Metadata = {
  title: home.title,
  description: home.description,
  icons: {
    icon: [
      { url: "/favicon-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="lt" className={`${onest.variable} overflow-x-hidden`}>
      <body className="min-h-screen overflow-x-hidden bg-primary antialiased">
        <ServiceWorkerCleanup />
        <Providers>
          <Nav />
          <div className="pt-[68px]">
            {children}
            <ConversionKontaktaiFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
