"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getAsset } from "@/lib/assets";
import { appearTransition, delays, durations, stagger } from "@/lib/motion";
import { projects } from "@/lib/content";

export default function ProjectsGrid() {
  const fallback = getAsset("hero-poster")?.path ?? "/media/WIXf9C0o7dhearF7SPcsHJODOvU.jpg";

  return (
    <section className="bg-section px-content-inset-mobile py-section-y wide:px-content-inset">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="mb-4 font-serif text-3xl">Explore our projects</h2>
        <p className="mb-12 text-sm tracking-widest text-black/50">FROM COMPLETED TO TAKING FORM</p>
        <div className="grid gap-4 wide:grid-cols-3 desktop:grid-cols-3">
          {projects.map((project, i) => {
            const img = project.heroImage ?? fallback;
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...appearTransition(i * stagger.paragraph), duration: durations.projectsGrid }}
              >
                <Link href={`/projects/${project.slug}`} className="group block" data-cursor-pointer>
                  <div className="relative aspect-[4/3] overflow-hidden bg-black">
                    <Image
                      src={img}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                  </div>
                  <p className="mt-3 font-serif text-sm tracking-[0.15em]">{project.name}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
