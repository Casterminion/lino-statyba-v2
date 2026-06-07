"use client";

import Image from "next/image";
import { useState } from "react";
import {
  getProjectTypeLabel,
  photoCountLabel,
  type Project,
} from "@/lib/content/projects";
import { ProjectModal } from "./ProjectModal";

type ProjectsGridProps = {
  projects: Project[];
};

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  if (projects.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 project-tablet:gap-5 project-desktop:grid-cols-3 project-desktop:gap-5">
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => setActiveProject(project)}
            aria-label={`Peržiūrėti ${getProjectTypeLabel(project.category).toLowerCase()}`}
            className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-primary/5 text-left"
          >
            <Image
              src={project.coverImage}
              alt=""
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              sizes="(min-width: 1440px) 380px, (min-width: 768px) 50vw, 100vw"
            />

            <div
              className="absolute inset-0 flex flex-col items-start justify-end bg-black/0 p-5 transition-colors duration-400 group-hover:bg-black/50 wide:p-6 desktop:p-6"
              aria-hidden
            >
              <span className="translate-y-2 font-body text-[14px] font-semibold text-white opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                Peržiūrėti projektą →
              </span>
              {project.imageCount > 1 ? (
                <span className="mt-1 translate-y-2 font-body text-[12px] font-medium text-white/70 opacity-0 transition-all duration-400 delay-75 group-hover:translate-y-0 group-hover:opacity-100">
                  {photoCountLabel(project.imageCount)}
                </span>
              ) : null}
            </div>
          </button>
        ))}
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}
