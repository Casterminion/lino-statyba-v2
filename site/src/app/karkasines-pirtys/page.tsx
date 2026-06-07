import { ServicePageLayout } from "@/components/service";
import { getServicePage } from "@/lib/content/service-pages";

const page = getServicePage("karkasines-pirtys");

export const metadata = {
  title: page.title,
  description: page.description,
};

export default function KarkasinesPirtysPage() {
  return <ServicePageLayout page={page} />;
}
