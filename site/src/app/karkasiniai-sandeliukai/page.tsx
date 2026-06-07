import { ServicePageLayout } from "@/components/service";
import { getServicePage } from "@/lib/content/service-pages";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getPageSeo } from "@/lib/seo/pages";

const page = getServicePage("karkasiniai-sandeliukai");

export const metadata = buildPageMetadata(getPageSeo("/karkasiniai-sandeliukai"));

export default function KarkasiniaiSandeliukaiPage() {
  return <ServicePageLayout page={page} />;
}
