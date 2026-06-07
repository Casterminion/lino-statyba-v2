import Image from "next/image";
import { notFound } from "next/navigation";
import Appear from "@/components/Appear";
import { projects, getProject, cleanParagraph } from "@/lib/content";
import { getAsset } from "@/lib/assets";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: `${project.name} | Lino Statyba`, description: project.description };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const hero =
    project.heroImage ??
    getAsset("hero-poster")?.path ??
    "/media/WIXf9C0o7dhearF7SPcsHJODOvU.jpg";
  const body = project.paragraphs.map(cleanParagraph).filter((p: string) => p.length > 80)[0] || "";

  return (
    <main className="bg-surface pt-nav text-text">
      <section className="relative h-[70vh] w-full">
        <Image src={hero} alt={project.name} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-10 left-6 md:left-10">
          <h1 className="font-serif text-4xl text-white md:text-6xl">{project.name}</h1>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[900px]">
          <Appear>
            <p className="text-lg leading-relaxed text-black/80">{body}</p>
          </Appear>
        </div>
      </section>

      <section className="grid gap-2 px-2 pb-20 md:grid-cols-2 md:px-4">
        {project.images
          .slice(1, 9)
          .map((img: string, i: number) => (
            <Appear key={img} delay={i * 0.05}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={img} alt="" fill className="object-cover" sizes="50vw" />
              </div>
            </Appear>
          ))}
      </section>
    </main>
  );
}
