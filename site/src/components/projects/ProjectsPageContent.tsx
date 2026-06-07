"use client";

import { PROJECTS } from "@/lib/content/projects";
import { ProjectsGrid } from "./ProjectsGrid";

type ProjectsPageContentProps = {
  title: string;
  subtitle?: string;
};

export function ProjectsPageContent({ title, subtitle }: ProjectsPageContentProps) {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-5 py-12 wide:px-10 wide:py-16 desktop:px-10 desktop:py-16">
      <div className="mb-10 flex max-w-[640px] flex-col gap-3 wide:mb-12 desktop:mb-12">
        <h1 className="type-conversion-section-title text-text">{title}</h1>
        {subtitle ? (
          <p className="type-conversion-section-lead text-text/75">{subtitle}</p>
        ) : null}
      </div>

      <ProjectsGrid projects={PROJECTS} />
    </div>
  );
}
