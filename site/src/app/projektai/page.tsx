import { ProjectsPageContent } from "@/components/projects";
import { getLinoPage } from "@/lib/content/lino-pages";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getPageSeo } from "@/lib/seo/pages";

const page = getLinoPage("projektai");

export const metadata = buildPageMetadata(getPageSeo("/projektai"));

export default function ProjektaiPage() {
  return (
    <main className="bg-section">
      <ProjectsPageContent title={page.h1} subtitle={page.subtitle} />
    </main>
  );
}
