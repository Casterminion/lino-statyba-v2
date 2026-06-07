export type GalleryCategory = "namu-statyba" | "terasos" | "sandeliukai" | "pirtys";

export type GalleryItem = {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;
  sourceFolder: string;
};

export const GALLERY_CATEGORY_LABELS: Record<GalleryCategory | "visi", string> = {
  visi: "Visi",
  "namu-statyba": "Namų statyba",
  terasos: "Terasos",
  sandeliukai: "Sandėliukai",
  pirtys: "Pirtys",
};

/** Homepage proof labels — uppercase category for project cards. */
export const GALLERY_CATEGORY_PROOF_LABELS: Record<GalleryCategory, string> = {
  "namu-statyba": "NAMŲ STATYBA",
  terasos: "TERASA",
  sandeliukai: "SANDĖLIUKAS",
  pirtys: "PIRTIS",
};

/** Central portfolio registry — all 40 Projektai assets. */
export const GALLERY_ITEMS: GalleryItem[] = [
  { id: "karkasiniu-namu-statyba-01", title: "Karkasinių namų statyba 1", category: "namu-statyba", image: "/media/gallery/namu-statyba/karkasiniu-namu-statyba-01.webp", sourceFolder: "Karkasinių namų statyba" },
  { id: "karkasiniu-namu-statyba-02", title: "Karkasinių namų statyba 2", category: "namu-statyba", image: "/media/gallery/namu-statyba/karkasiniu-namu-statyba-02.webp", sourceFolder: "Karkasinių namų statyba" },
  { id: "karkasiniu-namu-statyba-03", title: "Karkasinių namų statyba 3", category: "namu-statyba", image: "/media/gallery/namu-statyba/karkasiniu-namu-statyba-03.webp", sourceFolder: "Karkasinių namų statyba" },
  { id: "karkasiniu-namu-statyba-04", title: "Karkasinių namų statyba 4", category: "namu-statyba", image: "/media/gallery/namu-statyba/karkasiniu-namu-statyba-04.webp", sourceFolder: "Karkasinių namų statyba" },
  { id: "projektas-1-01", title: "Projektas 1", category: "namu-statyba", image: "/media/gallery/namu-statyba/projektas-1-01.webp", sourceFolder: "Projektas 1" },
  { id: "projektas-4-01", title: "Projektas 4 — 1", category: "namu-statyba", image: "/media/gallery/namu-statyba/projektas-4-01.webp", sourceFolder: "Projektas 4" },
  { id: "projektas-4-02", title: "Projektas 4 — 2", category: "namu-statyba", image: "/media/gallery/namu-statyba/projektas-4-02.webp", sourceFolder: "Projektas 4" },
  { id: "projektas-4-03", title: "Projektas 4 — 3", category: "namu-statyba", image: "/media/gallery/namu-statyba/projektas-4-03.webp", sourceFolder: "Projektas 4" },
  { id: "projektas-4-04", title: "Projektas 4 — 4", category: "namu-statyba", image: "/media/gallery/namu-statyba/projektas-4-04.webp", sourceFolder: "Projektas 4" },
  { id: "projektas-4-05", title: "Projektas 4 — 5", category: "namu-statyba", image: "/media/gallery/namu-statyba/projektas-4-05.webp", sourceFolder: "Projektas 4" },
  { id: "projektas-5-01", title: "Projektas 5 — 1", category: "namu-statyba", image: "/media/gallery/namu-statyba/projektas-5-01.webp", sourceFolder: "Projektas 5" },
  { id: "projektas-5-02", title: "Projektas 5 — 2", category: "namu-statyba", image: "/media/gallery/namu-statyba/projektas-5-02.webp", sourceFolder: "Projektas 5" },
  { id: "projektas-5-03", title: "Projektas 5 — 3", category: "namu-statyba", image: "/media/gallery/namu-statyba/projektas-5-03.webp", sourceFolder: "Projektas 5" },
  { id: "projektas-5-04", title: "Projektas 5 — 4", category: "namu-statyba", image: "/media/gallery/namu-statyba/projektas-5-04.webp", sourceFolder: "Projektas 5" },
  { id: "projektas-5-05", title: "Projektas 5 — 5", category: "namu-statyba", image: "/media/gallery/namu-statyba/projektas-5-05.webp", sourceFolder: "Projektas 5" },
  { id: "projektas-5-06", title: "Projektas 5 — 6", category: "namu-statyba", image: "/media/gallery/namu-statyba/projektas-5-06.webp", sourceFolder: "Projektas 5" },
  { id: "projektas-5-07", title: "Projektas 5 — 7", category: "namu-statyba", image: "/media/gallery/namu-statyba/projektas-5-07.webp", sourceFolder: "Projektas 5" },
  { id: "projektas-5-08", title: "Projektas 5 — 8", category: "namu-statyba", image: "/media/gallery/namu-statyba/projektas-5-08.webp", sourceFolder: "Projektas 5" },
  { id: "projektas-6-01", title: "Projektas 6 — 1", category: "namu-statyba", image: "/media/gallery/namu-statyba/projektas-6-01.webp", sourceFolder: "Projektas 6" },
  { id: "projektas-6-02", title: "Projektas 6 — 2", category: "namu-statyba", image: "/media/gallery/namu-statyba/projektas-6-02.webp", sourceFolder: "Projektas 6" },
  { id: "projektas-6-03", title: "Projektas 6 — 3", category: "namu-statyba", image: "/media/gallery/namu-statyba/projektas-6-03.webp", sourceFolder: "Projektas 6" },
  { id: "projektas-6-04", title: "Projektas 6 — 4", category: "namu-statyba", image: "/media/gallery/namu-statyba/projektas-6-04.webp", sourceFolder: "Projektas 6" },
  { id: "namu-misc-img-20231201", title: "Namų projektas", category: "namu-statyba", image: "/media/gallery/namu-statyba/namu-misc-img-20231201.webp", sourceFolder: "kiti" },
  { id: "namu-misc-viber-20231107", title: "Namų projektas", category: "namu-statyba", image: "/media/gallery/namu-statyba/namu-misc-viber-20231107.webp", sourceFolder: "kiti" },
  { id: "baltramaicio-terasa-01", title: "Baltramaičio terasa 1", category: "terasos", image: "/media/gallery/terasos/baltramaicio-terasa-01.webp", sourceFolder: "Baltramaičio Terasa" },
  { id: "baltramaicio-terasa-02", title: "Baltramaičio terasa 2", category: "terasos", image: "/media/gallery/terasos/baltramaicio-terasa-02.webp", sourceFolder: "Baltramaičio Terasa" },
  { id: "baltramaicio-terasa-03", title: "Baltramaičio terasa 3", category: "terasos", image: "/media/gallery/terasos/baltramaicio-terasa-03.webp", sourceFolder: "Baltramaičio Terasa" },
  { id: "sandeliukas-palanga-cover", title: "Sandėliukas Palanga", category: "sandeliukai", image: "/media/gallery/sandeliukai/sandeliukas-palanga-cover.webp", sourceFolder: "sandeliukas-palanga" },
  { id: "sandeliukas-palanga-thumb", title: "Sandėliukas Palanga", category: "sandeliukai", image: "/media/gallery/sandeliukai/sandeliukas-palanga-thumb.webp", sourceFolder: "sandeliukas-palanga" },
  { id: "sandeliukas-palanga-vidus-01", title: "Sandėliukas Palanga — vidus", category: "sandeliukai", image: "/media/gallery/sandeliukai/sandeliukas-palanga-vidus-01.webp", sourceFolder: "sandeliukas-palanga" },
  { id: "sandeliukas-palanga-vidus-02", title: "Sandėliukas Palanga — vidus", category: "sandeliukai", image: "/media/gallery/sandeliukai/sandeliukas-palanga-vidus-02.webp", sourceFolder: "sandeliukas-palanga" },
  { id: "sandeliukas-palanga-vidus-03", title: "Sandėliukas Palanga — vidus", category: "sandeliukai", image: "/media/gallery/sandeliukai/sandeliukas-palanga-vidus-03.webp", sourceFolder: "sandeliukas-palanga" },
  { id: "sandeliukas-palanga-vidus-04", title: "Sandėliukas Palanga — vidus", category: "sandeliukai", image: "/media/gallery/sandeliukai/sandeliukas-palanga-vidus-04.webp", sourceFolder: "sandeliukas-palanga" },
  { id: "sandeliukas-palanga-viber-01", title: "Sandėliukas Palanga", category: "sandeliukai", image: "/media/gallery/sandeliukai/sandeliukas-palanga-viber-01.webp", sourceFolder: "sandeliukas-palanga" },
  { id: "sandeliukas-palanga-viber-02", title: "Sandėliukas Palanga", category: "sandeliukai", image: "/media/gallery/sandeliukai/sandeliukas-palanga-viber-02.webp", sourceFolder: "sandeliukas-palanga" },
  { id: "sandeliukas-kunigiskes-viengubas", title: "Sandėliukas Kunigiškės — viengubas", category: "sandeliukai", image: "/media/gallery/sandeliukai/sandeliukas-kunigiskes-viengubas.webp", sourceFolder: "sandeliukas-kunigiskes" },
  { id: "sandeliukas-kunigiskes-dvigubas", title: "Sandėliukas Kunigiškės — dvigubas", category: "sandeliukai", image: "/media/gallery/sandeliukai/sandeliukas-kunigiskes-dvigubas.webp", sourceFolder: "sandeliukas-kunigiskes" },
  { id: "sandeliukas-kunigiskes-isore", title: "Sandėliukas Kunigiškės — išorė", category: "sandeliukai", image: "/media/gallery/sandeliukai/sandeliukas-kunigiskes-isore.webp", sourceFolder: "sandeliukas-kunigiskes" },
  { id: "sandeliukas-kunigiskes-01", title: "Sandėliukas Kunigiškės", category: "sandeliukai", image: "/media/gallery/sandeliukai/sandeliukas-kunigiskes-01.webp", sourceFolder: "sandeliukas-kunigiskes" },
  { id: "pirtis-1", title: "Karkasinė pirtis", category: "pirtys", image: "/media/gallery/pirtys/pirtis-1.webp", sourceFolder: "kiti" },
];

/** Hero — finished exterior (client buys a home, not a frame). */
export const HERO_IMAGE_ID = "namu-misc-viber-20231107";

/** Service cards — namai, sandėliukai, pirtys. */
export const SERVICE_CARD_IMAGE_IDS = [
  "karkasiniu-namu-statyba-02",
  "sandeliukas-palanga-cover",
  "pirtis-1",
] as const;

/** Homepage portfolio — one curated layout, composition-matched slots. */
export const HOMEPAGE_GALLERY_FEATURED_ID = "namu-misc-viber-20231107";

export const HOMEPAGE_GALLERY_SUPPORTING_IDS = [
  "baltramaicio-terasa-02",
  "sandeliukas-palanga-cover",
  "karkasiniu-namu-statyba-02",
] as const;

export const HOMEPAGE_GALLERY_PREVIEW_IDS = [
  HOMEPAGE_GALLERY_FEATURED_ID,
  ...HOMEPAGE_GALLERY_SUPPORTING_IDS,
] as const;

const itemMap = new Map(GALLERY_ITEMS.map((item) => [item.id, item]));

export function getGalleryItemById(id: string): GalleryItem | undefined {
  return itemMap.get(id);
}

export function getGalleryItemsByCategory(category: GalleryCategory): GalleryItem[] {
  return GALLERY_ITEMS.filter((item) => item.category === category);
}

export function getGalleryCategoryCounts(): Record<GalleryCategory, number> {
  return {
    "namu-statyba": getGalleryItemsByCategory("namu-statyba").length,
    terasos: getGalleryItemsByCategory("terasos").length,
    sandeliukai: getGalleryItemsByCategory("sandeliukai").length,
    pirtys: getGalleryItemsByCategory("pirtys").length,
  };
}

export function getHeroGalleryImage(): GalleryItem {
  return getGalleryItemById(HERO_IMAGE_ID)!;
}

export function getServiceCardGalleryImages(): GalleryItem[] {
  return SERVICE_CARD_IMAGE_IDS.map((id) => getGalleryItemById(id)!);
}

export function getHomepageGalleryPreview(): GalleryItem[] {
  return HOMEPAGE_GALLERY_PREVIEW_IDS.map((id) => getGalleryItemById(id)!);
}

export function getHomepagePortfolio(): {
  featured: GalleryItem;
  supporting: [GalleryItem, GalleryItem, GalleryItem];
} {
  return {
    featured: getGalleryItemById(HOMEPAGE_GALLERY_FEATURED_ID)!,
    supporting: HOMEPAGE_GALLERY_SUPPORTING_IDS.map((id) => getGalleryItemById(id)!) as [
      GalleryItem,
      GalleryItem,
      GalleryItem,
    ],
  };
}

export function getGalleryItemsForFilter(filter: GalleryCategory | "visi"): GalleryItem[] {
  if (filter === "visi") return GALLERY_ITEMS;
  return getGalleryItemsByCategory(filter);
}
