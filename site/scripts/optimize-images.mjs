/**
 * Compress raster images to WebP with a 200 KB cap.
 * SVGs and favicons are skipped.
 *
 * Usage: node scripts/optimize-images.mjs [--dir public/media/gallery]
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const MAX_BYTES = 200 * 1024;
const DEFAULT_DIRS = [
  path.join(ROOT, "public/media/gallery"),
  path.join(ROOT, "public/media/lino-partners"),
  path.join(ROOT, "public/media"),
];

const args = process.argv.slice(2);
const dirArgIdx = args.indexOf("--dir");
const targetDirs =
  dirArgIdx >= 0 ? [path.resolve(ROOT, args[dirArgIdx + 1])] : DEFAULT_DIRS;

const RASTER = new Set([".webp", ".png", ".jpg", ".jpeg", ".avif"]);
const SKIP_NAMES = new Set([
  "lino-logo-color.svg",
  "lino-logo-light.svg",
  "lino-logo-footer.svg",
  "lino-watermark.svg",
]);

function collectFiles(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...collectFiles(full));
    else if (RASTER.has(path.extname(entry.name).toLowerCase())) out.push(full);
  }
  return out;
}

async function encodeWebp(input, width, quality) {
  let pipeline = sharp(input);
  if (width) {
    pipeline = pipeline.resize({ width, withoutEnlargement: true });
  }
  return pipeline.webp({ quality, effort: 6, smartSubsample: true }).toBuffer();
}

async function compressToTarget(input) {
  const meta = await sharp(input).metadata();
  const widthSteps = [null, 1600, 1400, 1200, 1000, 800].filter(
    (w) => w === null || w < (meta.width ?? Infinity),
  );
  const qualitySteps = [82, 76, 70, 64, 58, 52, 46, 40];

  for (const width of widthSteps) {
    for (const quality of qualitySteps) {
      const buf = await encodeWebp(input, width ?? undefined, quality);
      if (buf.length <= MAX_BYTES) {
        return { buf, quality, width: width ?? meta.width, bytes: buf.length };
      }
    }
  }

  const buf = await encodeWebp(input, 640, 40);
  return { buf, quality: 40, width: 640, bytes: buf.length };
}

async function optimizeFile(input) {
  const ext = path.extname(input).toLowerCase();
  const base = input.slice(0, -ext.length);
  const output = `${base}.webp`;

  const before = fs.statSync(input).size;
  const { buf, quality, width, bytes } = await compressToTarget(input);
  fs.writeFileSync(output, buf);

  if (output !== input) {
    fs.unlinkSync(input);
  }

  return {
    file: path.relative(ROOT, output),
    before,
    after: bytes,
    quality,
    width,
    ok: bytes <= MAX_BYTES,
  };
}

const files = [
  ...new Set(targetDirs.flatMap(collectFiles)),
].filter((f) => !SKIP_NAMES.has(path.basename(f)));

const results = [];
for (const file of files.sort()) {
  results.push(await optimizeFile(file));
}

const failed = results.filter((r) => !r.ok);
const saved = results.reduce((sum, r) => sum + (r.before - r.after), 0);

console.log(`Optimized ${results.length} files, saved ${(saved / 1024 / 1024).toFixed(2)} MB`);
for (const r of results) {
  const flag = r.ok ? "OK" : "OVER";
  console.log(
    `[${flag}] ${r.file}: ${(r.before / 1024).toFixed(0)}KB → ${(r.after / 1024).toFixed(0)}KB (q${r.quality}, w${r.width})`,
  );
}
if (failed.length) {
  console.error(`\n${failed.length} file(s) still exceed 200KB`);
  process.exit(1);
}
