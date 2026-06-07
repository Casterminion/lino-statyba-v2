import manifest from "../../content/assets.manifest.json";

export type AssetRole =
  | "hero-video"
  | "hero-poster"
  | "logo"
  | "watermark"
  | "feature-image"
  | "section-image"
  | "press-logo"
  | "carousel-image";

export type AssetRef = {
  id: string;
  role: AssetRole;
  path: string;
  section?: string;
  breakpoint?: string;
  sizes?: string;
  priority?: boolean;
};

const assets = manifest as AssetRef[];

export function getAsset(role: AssetRole): AssetRef | undefined {
  return assets.find((a) => a.role === role);
}

export function getAssetById(id: string): AssetRef | undefined {
  return assets.find((a) => a.id === id);
}

export function getSectionAssets(section: string): AssetRef[] {
  return assets.filter((a) => a.section === section);
}

export function getAssetsByRole(role: AssetRole): AssetRef[] {
  return assets.filter((a) => a.role === role);
}

export { assets };
