import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const publicDir = path.join(ROOT, "public");
const galleryFile = path.join(ROOT, "src/lib/content/gallery.ts");
const outFile = path.join(ROOT, "src/lib/image-blur-data.ts");

async function blurDataURL(relPath) {
  const full = path.join(publicDir, relPath.replace(/^\//, ""));
  if (!fs.existsSync(full)) return null;
  if (path.extname(full).toLowerCase() === ".svg") return null;

  const buf = await sharp(full)
    .resize(10, 10, { fit: "inside" })
    .webp({ quality: 20 })
    .toBuffer();

  return `data:image/webp;base64,${buf.toString("base64")}`;
}

const gallery = fs.readFileSync(galleryFile, "utf8");
const paths = [...new Set([...gallery.matchAll(/image: "([^"]+)"/g)].map((m) => m[1]))];

const entries = {};
for (const relPath of paths.sort()) {
  const blur = await blurDataURL(relPath);
  if (blur) entries[relPath] = blur;
}

const content = `/** Auto-generated blur placeholders — run \`npm run blur-placeholders\` to regenerate. */
export const IMAGE_BLUR_DATA: Record<string, string> = ${JSON.stringify(entries, null, 2)} as const;

export function getImageBlur(path: string): string | undefined {
  return IMAGE_BLUR_DATA[path];
}
`;

fs.writeFileSync(outFile, content);
console.log(`Generated ${Object.keys(entries).length} blur placeholders → src/lib/image-blur-data.ts`);
