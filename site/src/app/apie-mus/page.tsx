import { LinoInventoryPage } from "@/components/LinoInventoryPage";
import { getLinoPage } from "@/lib/content/lino-pages";

const page = getLinoPage("apie-mus");

export const metadata = {
  title: page.title,
  description: page.description,
};

export default function ApieMusPage() {
  return <LinoInventoryPage page={page} />;
}
