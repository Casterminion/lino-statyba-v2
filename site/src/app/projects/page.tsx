import ProjectsGrid from "@/components/ProjectsGrid";
import Appear from "@/components/Appear";
import { projectsPage } from "@/lib/content";

export const metadata = {
  title: "Projects | Lino Statyba",
  description: projectsPage.description,
};

export default function ProjectsPage() {
  return (
    <main className="bg-surface pt-nav text-text">
      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1440px]">
          <Appear>
            <h1 className="font-serif text-4xl md:text-6xl">Projects</h1>
            <p className="mt-4 max-w-2xl text-black/60">
              {projectsPage.intro}
            </p>
          </Appear>
        </div>
      </section>
      <ProjectsGrid />
    </main>
  );
}
