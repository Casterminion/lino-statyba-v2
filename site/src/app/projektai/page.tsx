import { ProjectsPageContent } from "@/components/projects";
import { getLinoPage } from "@/lib/content/lino-pages";

const page = getLinoPage("projektai");

export const metadata = {
  title: page.title,
  description: page.description,
};

export default function ProjektaiPage() {
  return (
    <main className="bg-section">
      <ProjectsPageContent title={page.h1} subtitle={page.subtitle} />
    </main>
  );
}
