import { ServicePageLayout } from "@/components/service";
import { getServicePage } from "@/lib/content/service-pages";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getPageSeo } from "@/lib/seo/pages";

const page = getServicePage("karkasines-pirtys");

export const metadata = buildPageMetadata(getPageSeo("/karkasines-pirtys"));

export default function KarkasinesPirtysPage() {
  return <ServicePageLayout page={page} />;
}
