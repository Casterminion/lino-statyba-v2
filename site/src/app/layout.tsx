import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav/index";
import { ConversionKontaktaiFooter } from "@/components/home-conversion/ConversionKontaktaiFooter";
import Providers from "@/components/Providers";
import { ServiceWorkerCleanup } from "@/components/ServiceWorkerCleanup";
import { JsonLd } from "@/components/seo/JsonLd";
import { rootMetadata } from "@/lib/seo/metadata";
import { globalStructuredData } from "@/lib/seo/structured-data";

const onest = Onest({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-onest",
  display: "swap",
});

export const metadata: Metadata = rootMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="lt" className={`${onest.variable} overflow-x-hidden`}>
      <body className="min-h-screen overflow-x-hidden bg-primary antialiased">
        <JsonLd data={globalStructuredData()} />
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
