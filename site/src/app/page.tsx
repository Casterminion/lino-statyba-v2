import { HomeConversionPage } from "@/components/home-conversion";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getPageSeo } from "@/lib/seo/pages";

const seo = getPageSeo("/");

export const metadata = buildPageMetadata(seo);

export default function HomePage() {
  return <HomeConversionPage />;
}
