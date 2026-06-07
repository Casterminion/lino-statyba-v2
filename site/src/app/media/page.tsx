import Image from "next/image";
import PageShell from "@/components/PageShell";
import Appear from "@/components/Appear";
import { media } from "@/lib/content";

export const metadata = {
  title: "Media | Lino Statyba",
  description: media.description,
};

export default function MediaPage() {
  const gallery = media.images.filter(
    (img) => img.includes(".jpg") || img.includes(".webp") || img.includes(".png")
  );

  return (
    <PageShell title="Media" subtitle="Press, features, and editorial coverage">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.slice(0, 12).map((img, i) => (
          <Appear key={img} delay={i * 0.05}>
            <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
              <Image src={img} alt="" fill className="object-cover" sizes="33vw" />
            </div>
          </Appear>
        ))}
      </div>
      {media.paragraphs.slice(0, 3).map((p, i) => (
        <Appear key={i} delay={0.2 + i * 0.05}>
          <p className="text-sm leading-relaxed text-black/70">{p}</p>
        </Appear>
      ))}
    </PageShell>
  );
}
