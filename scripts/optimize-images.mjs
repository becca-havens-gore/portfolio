import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const INPUT_DIR = "images/source/new";       // put originals here
const OUTPUT_DIR = "assets/images/profile";   // script writes here

// Widths to generate. Tune if you want fewer files.
const WIDTHS = [640, 960, 1280, 1600, 2000];

// AVIF tends to look great at lower quality than WebP.
// (Alpha/transparency is preserved for PNG inputs.)
const AVIF_QUALITY = 45;
const WEBP_QUALITY = 70;
const PNG_COMPRESSION_LEVEL = 9; // 0–9
const JPEG_QUALITY = 78;

const IMAGE_EXTS = new Set([".png", ".jpg", ".jpeg"]);

function isImageFile(file) {
  return IMAGE_EXTS.has(path.extname(file).toLowerCase());
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function processOne(file) {
  const inPath = path.join(INPUT_DIR, file);
  const ext = path.extname(file).toLowerCase();
  const base = path.basename(file, ext);

  const img = sharp(inPath);
  const meta = await img.metadata();

  // Determine if we should preserve alpha fallback as PNG.
  // PNG input → keep PNG fallback (alpha-friendly).
  // JPEG input → keep JPEG fallback.
  const isPngInput = ext === ".png";

  console.log(`\n→ ${file} (${meta.width}×${meta.height})`);

  for (const w of WIDTHS) {
    // Don’t upscale; skip widths larger than the source.
    if (meta.width && w > meta.width) continue;

    const outBase = `${base}-${w}w`;

    // AVIF
    await img
      .clone()
      .resize({ width: w, withoutEnlargement: true })
      .avif({ quality: AVIF_QUALITY })
      .toFile(path.join(OUTPUT_DIR, `${outBase}.avif`));

    // WebP
    await img
      .clone()
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY })
      .toFile(path.join(OUTPUT_DIR, `${outBase}.webp`));

    // Fallback (PNG if transparency source, else JPEG)
    if (isPngInput) {
      await img
        .clone()
        .resize({ width: w, withoutEnlargement: true })
        .png({ compressionLevel: PNG_COMPRESSION_LEVEL })
        .toFile(path.join(OUTPUT_DIR, `${outBase}.png`));
    } else {
      await img
        .clone()
        .resize({ width: w, withoutEnlargement: true })
        .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
        .toFile(path.join(OUTPUT_DIR, `${outBase}.jpg`));
    }
  }
}

async function main() {
  await ensureDir(OUTPUT_DIR);

  const files = await fs.readdir(INPUT_DIR);
  const images = files.filter(isImageFile);

  if (!images.length) {
    console.log(`No images found in ${INPUT_DIR}. Put originals there first.`);
    process.exit(0);
  }

  for (const file of images) {
    await processOne(file);
  }

  console.log(`\n✅ Done. Optimized images in: ${OUTPUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});