import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const photoDir = path.join(root, "src/assets/photos");
const publicDir = path.join(root, "src/public");
const manifest = {};

async function listImages(dir) {
  try {
    const names = await readdir(dir);
    return names.filter((name) => /\.(jpe?g|png)$/i.test(name)).sort();
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

async function emitPhoto(inputPath, outputBase, publicPath) {
  const resized = await sharp(inputPath)
    .rotate()
    .resize(1280, 720, { fit: "inside", withoutEnlargement: true })
    .toBuffer();
  const full = await sharp(resized).metadata();
  const small = await sharp(resized)
    .resize(640, 360, { fit: "inside", withoutEnlargement: true })
    .toBuffer();
  const smallMeta = await sharp(small).metadata();
  await mkdir(path.dirname(outputBase), { recursive: true });
  await sharp(resized).webp({ quality: 68 }).toFile(`${outputBase}.webp`);
  await sharp(resized).avif({ quality: 40, effort: 4 }).toFile(`${outputBase}.avif`);
  await sharp(small).webp({ quality: 64 }).toFile(`${outputBase}-640.webp`);
  await sharp(small).avif({ quality: 38, effort: 4 }).toFile(`${outputBase}-640.avif`);
  const smallPath = publicPath.replace(/\.webp$/, "-640.webp");
  const smallAvif = publicPath.replace(/\.webp$/, "-640.avif");
  manifest[publicPath] = {
    width: full.width,
    height: full.height,
    srcsetWebp: `${smallPath} ${smallMeta.width}w, ${publicPath} ${full.width}w`,
    srcsetAvif: `${smallAvif} ${smallMeta.width}w, ${publicPath.replace(/\.webp$/, ".avif")} ${full.width}w`,
  };
}

async function emitGradient() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#243140"/>
      <stop offset="1" stop-color="#0d1218"/>
    </linearGradient>
  </defs>
  <rect width="1280" height="720" fill="url(#g)"/>
</svg>`;
  const outDir = path.join(publicDir, "images/fallback");
  await mkdir(outDir, { recursive: true });
  const full = await sharp(Buffer.from(svg)).resize(1280, 720).toBuffer();
  const small = await sharp(full).resize(640, 360).toBuffer();
  await sharp(full).webp({ quality: 60 }).toFile(path.join(outDir, "gradient.webp"));
  await sharp(full).avif({ quality: 36, effort: 4 }).toFile(path.join(outDir, "gradient.avif"));
  await sharp(small).webp({ quality: 56 }).toFile(path.join(outDir, "gradient-640.webp"));
  await sharp(small).avif({ quality: 34, effort: 4 }).toFile(path.join(outDir, "gradient-640.avif"));
  manifest["/images/fallback/gradient.webp"] = {
    width: 1280,
    height: 720,
    srcsetWebp: "/images/fallback/gradient-640.webp 640w, /images/fallback/gradient.webp 1280w",
    srcsetAvif: "/images/fallback/gradient-640.avif 640w, /images/fallback/gradient.avif 1280w",
  };
}

const jobs = [
  {
    input: path.join(photoDir, "hero-datacenter.jpg"),
    output: path.join(publicDir, "images/hero/datacenter"),
    url: "/images/hero/datacenter.webp",
  },
];

for (const name of await listImages(path.join(photoDir, "stories"))) {
  const base = name.replace(/\.(jpe?g|png)$/i, "");
  jobs.push({
    input: path.join(photoDir, "stories", name),
    output: path.join(publicDir, "images/stories", base),
    url: `/images/stories/${base}.webp`,
  });
}

for (const name of await listImages(path.join(photoDir, "inline"))) {
  const base = name.replace(/\.(jpe?g|png)$/i, "");
  jobs.push({
    input: path.join(photoDir, "inline", name),
    output: path.join(publicDir, "images/inline", base),
    url: `/images/inline/${base}.webp`,
  });
}

for (const job of jobs) {
  await emitPhoto(job.input, job.output, job.url);
}

await emitGradient();

await sharp(path.join(photoDir, "hero-datacenter.jpg"))
  .rotate()
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .jpeg({ quality: 68, mozjpeg: true })
  .toFile(path.join(publicDir, "og.jpg"));

const manifestPath = path.join(root, "src/_data/imageSizes.json");
const ordered = Object.fromEntries(Object.keys(manifest).sort().map((key) => [key, manifest[key]]));
await writeFile(manifestPath, `${JSON.stringify(ordered, null, 2)}\n`);

console.log(`Wrote ${Object.keys(ordered).length} image sets and og.jpg.`);
