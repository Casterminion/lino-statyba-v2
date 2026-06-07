import { ServicePageLayout } from "@/components/service";
import { getServicePage } from "@/lib/content/service-pages";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getPageSeo } from "@/lib/seo/pages";

const page = getServicePage("karkasiniu-skydiniu-namu-statyba");

export const metadata = buildPageMetadata(getPageSeo("/karkasiniu-skydiniu-namu-statyba"));

export default function KarkasiniuSkydiniuNamuStatybaPage() {
  return <ServicePageLayout page={page} />;
}
