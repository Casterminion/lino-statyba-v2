import {
  GALLERY_ITEMS,
  type GalleryCategory,
  type GalleryItem,
} from "./gallery";

export type Project = {
  id: string;
  category: GalleryCategory;
  coverImage: string;
  images: GalleryItem[];
  imageCount: number;
};

const CATEGORY_ORDER: GalleryCategory[] = [
  "namu-statyba",
  "terasos",
  "sandeliukai",
  "pirtys",
];

export const PROJECT_TYPE_LABELS: Record<GalleryCategory, string> = {
  "namu-statyba": "Karkasinis namas",
  terasos: "Terasa",
  sandeliukai: "Sandėliukas",
  pirtys: "Pirtis",
};

function projectGroupKey(item: GalleryItem): string {
  if (item.sourceFolder === "kiti") {
    return `kiti::${item.category}`;
  }
  return item.sourceFolder;
}

function slugifyFolderKey(key: string): string {
  return key
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function buildProjects(): Project[] {
  const groups = new Map<string, GalleryItem[]>();

  for (const item of GALLERY_ITEMS) {
    const key = projectGroupKey(item);
    const existing = groups.get(key);
    if (existing) {
      existing.push(item);
    } else {
      groups.set(key, [item]);
    }
  }

  const projects: Project[] = [];

  for (const [key, images] of groups) {
    const category = images[0].category;
    projects.push({
      id: slugifyFolderKey(key),
      category,
      coverImage: images[0].image,
      images,
      imageCount: images.length,
    });
  }

  return projects.sort((a, b) => {
    const categoryDiff =
      CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category);
    if (categoryDiff !== 0) return categoryDiff;
    return b.imageCount - a.imageCount;
  });
}

export const PROJECTS: Project[] = buildProjects();

const projectMap = new Map(PROJECTS.map((project) => [project.id, project]));

export function getProjectById(id: string): Project | undefined {
  return projectMap.get(id);
}

export function getProjectTypeLabel(category: GalleryCategory): string {
  return PROJECT_TYPE_LABELS[category];
}

export function photoCountLabel(count: number): string {
  if (count === 1) return "1 nuotrauka";
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 >= 2 && mod10 <= 9 && (mod100 < 11 || mod100 > 19)) {
    return `${count} nuotraukos`;
  }
  return `${count} nuotraukų`;
}
