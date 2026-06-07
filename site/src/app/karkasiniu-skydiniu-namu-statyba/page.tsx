import { ServicePageLayout } from "@/components/service";
import { getServicePage } from "@/lib/content/service-pages";

const page = getServicePage("karkasiniu-skydiniu-namu-statyba");

export const metadata = {
  title: page.title,
  description: page.description,
};

export default function KarkasiniuSkydiniuNamuStatybaPage() {
  return <ServicePageLayout page={page} />;
}
