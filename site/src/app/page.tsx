import { HomeConversionPage } from "@/components/home-conversion";
import { getHeroGalleryImage } from "@/lib/content/gallery";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getPageSeo } from "@/lib/seo/pages";

const seo = getPageSeo("/");
const heroImage = getHeroGalleryImage();

export const metadata = buildPageMetadata(seo);

export default function HomePage() {
  return (
    <>
      <link rel="preload" as="image" href={heroImage.image} type="image/webp" fetchPriority="high" />
      <HomeConversionPage />
    </>
  );
}
