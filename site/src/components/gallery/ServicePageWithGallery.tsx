import Appear from "@/components/Appear";
import PageShell from "@/components/PageShell";
import type { LinoPage, LinoPageBlock } from "@/lib/content/lino-pages/types";
import type { GalleryCategory } from "@/lib/content/gallery";
import { ServiceGallery } from "./ServiceGallery";

function Block({ block }: { block: LinoPageBlock }) {
  if (block.type === "paragraph") {
    return <p className="leading-relaxed text-black/75">{block.text}</p>;
  }

  if (block.type === "heading") {
    if (block.level === "h2") {
      return <h2 className="font-serif text-2xl leading-tight text-black">{block.text}</h2>;
    }
    if (block.level === "h4") {
      return <h4 className="text-base font-medium text-black">{block.text}</h4>;
    }
    return <h3 className="text-lg font-medium text-black">{block.text}</h3>;
  }

  return (
    <ul className="list-disc space-y-2 pl-5 leading-relaxed text-black/75">
      {block.items.map((item) => (
        <li key={item.slice(0, 48)}>{item}</li>
      ))}
    </ul>
  );
}

type ServicePageWithGalleryProps = {
  page: LinoPage;
  galleryCategory: GalleryCategory;
};

export function ServicePageWithGallery({ page, galleryCategory }: ServicePageWithGalleryProps) {
  return (
    <PageShell title={page.h1} subtitle={page.subtitle}>
      {page.blocks.map((block, index) => (
        <Appear key={`${block.type}-${index}`} delay={index * 0.04}>
          <Block block={block} />
        </Appear>
      ))}
      <Appear delay={page.blocks.length * 0.04}>
        <ServiceGallery category={galleryCategory} />
      </Appear>
    </PageShell>
  );
}
