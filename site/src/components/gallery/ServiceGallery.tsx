import {
  getGalleryItemsByCategory,
  type GalleryCategory,
} from "@/lib/content/gallery";
import { GalleryGrid } from "./GalleryGrid";

type ServiceGalleryProps = {
  category: GalleryCategory;
};

export function ServiceGallery({ category }: ServiceGalleryProps) {
  const items = getGalleryItemsByCategory(category);
  const showcase = items.length === 1;

  return (
    <section className="mt-10 border-t border-primary/10 pt-10">
      <h2 className="type-conversion-section-title mb-6 text-text">Projektų galerija</h2>
      <GalleryGrid items={items} showcase={showcase} />
    </section>
  );
}
