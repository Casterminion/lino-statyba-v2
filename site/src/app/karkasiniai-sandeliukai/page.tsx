import { ServicePageLayout } from "@/components/service";
import { getServicePage } from "@/lib/content/service-pages";

const page = getServicePage("karkasiniai-sandeliukai");

export const metadata = {
  title: page.title,
  description: page.description,
};

export default function KarkasiniaiSandeliukaiPage() {
  return <ServicePageLayout page={page} />;
}
