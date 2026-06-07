/**
 * Regenerate tab / PWA icons from Lino Statyba logo assets.
 * Run: npm run favicons
 */
import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ROOT = path.join(__dirname, "..");
const LOGO_LIGHT_SOURCE = path.join(ROOT, "public/media/lino-logo-color.svg");
const LOGO_DARK_SOURCE = path.join(ROOT, "public/media/lino-logo-light.svg");
const LIGHT_BG = { r: 255, g: 255, b: 255, alpha: 1 };
const DARK_BG = { r: 19, g: 33, b: 60, alpha: 1 };

async function writeSquareIcon(source, size, dest, background) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  await sharp(source)
    .ensureAlpha()
    .resize(size, size, { fit: "contain", background })
    .png({ compressionLevel: 9 })
    .toFile(dest);
  console.log("wrote", path.relative(ROOT, dest));
}

async function squareBuffer(source, size, background) {
  return sharp(source)
    .ensureAlpha()
    .resize(size, size, { fit: "contain", background })
    .png({ compressionLevel: 9 })
    .toBuffer();
}

function pngIcoEntry(pngBuf, size) {
  const header = Buffer.alloc(40);
  header.writeUInt8(size === 256 ? 0 : size, 0);
  header.writeUInt8(size === 256 ? 0 : size, 1);
  header.writeUInt8(0, 2);
  header.writeUInt8(0, 3);
  header.writeUInt16LE(1, 4);
  header.writeUInt16LE(32, 6);
  header.writeUInt32LE(pngBuf.length, 8);
  header.writeUInt32LE(22, 12);
  header.writeUInt32LE(40, 16);
  header.writeInt32LE(size === 256 ? 256 : size, 20);
  header.writeInt32LE(size === 256 ? 256 : size, 24);
  header.writeUInt16LE(1, 28);
  header.writeUInt16LE(32, 30);
  header.writeUInt32LE(0, 34);
  return { header, pngBuf };
}

async function writeFaviconIco(dest) {
  const ico16 = await squareBuffer(LOGO_LIGHT_SOURCE, 16, LIGHT_BG);
  const ico32 = await squareBuffer(LOGO_LIGHT_SOURCE, 32, LIGHT_BG);
  const entries = [pngIcoEntry(ico16, 16), pngIcoEntry(ico32, 32)];
  const count = entries.length;
  const dir = Buffer.alloc(6 + count * 16);
  dir.writeUInt16LE(0, 0);
  dir.writeUInt16LE(1, 2);
  dir.writeUInt16LE(count, 4);
  let offset = 6 + count * 16;
  entries.forEach((entry, i) => {
    const base = 6 + i * 16;
    entry.header.copy(dir, base, 0, 16);
    dir.writeUInt32LE(offset, base + 12);
    offset += entry.pngBuf.length;
  });
  const ico = Buffer.concat([dir, ...entries.map((e) => e.pngBuf)]);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, ico);
  console.log("wrote", path.relative(ROOT, dest));
}

(async () => {
  await writeSquareIcon(LOGO_LIGHT_SOURCE, 32, path.join(ROOT, "public/favicon-light.png"), LIGHT_BG);
  await writeSquareIcon(LOGO_DARK_SOURCE, 32, path.join(ROOT, "public/favicon-dark.png"), DARK_BG);
  await writeSquareIcon(LOGO_LIGHT_SOURCE, 32, path.join(ROOT, "src/app/icon.png"), LIGHT_BG);
  await writeSquareIcon(LOGO_LIGHT_SOURCE, 180, path.join(ROOT, "public/apple-touch-icon.png"), LIGHT_BG);
  await writeSquareIcon(LOGO_LIGHT_SOURCE, 180, path.join(ROOT, "src/app/apple-icon.png"), LIGHT_BG);
  await writeSquareIcon(LOGO_LIGHT_SOURCE, 16, path.join(ROOT, "public/favicon-16x16.png"), LIGHT_BG);
  await writeSquareIcon(LOGO_LIGHT_SOURCE, 32, path.join(ROOT, "public/favicon-32x32.png"), LIGHT_BG);
  await writeSquareIcon(LOGO_LIGHT_SOURCE, 192, path.join(ROOT, "public/icon-192.png"), LIGHT_BG);
  await writeSquareIcon(LOGO_LIGHT_SOURCE, 512, path.join(ROOT, "public/icon-512.png"), LIGHT_BG);
  await writeFaviconIco(path.join(ROOT, "public/favicon.ico"));
})();
