import { mkdir, readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const artDir = path.join(root, "src/assets/art");
const outDir = path.join(root, "src/public/images/stories");
const names = ["claude-duet", "openai-google-cloud", "partner-safeguards"];

await mkdir(outDir, { recursive: true });

for (const name of names) {
  const svg = await readFile(path.join(artDir, `${name}.svg`));
  const full = sharp(svg).resize(1200, 675);
  const small = sharp(svg).resize(640, 360);
  await full.clone().webp({ quality: 68 }).toFile(path.join(outDir, `${name}.webp`));
  await full.clone().avif({ quality: 42, effort: 4 }).toFile(path.join(outDir, `${name}.avif`));
  await small.clone().webp({ quality: 66 }).toFile(path.join(outDir, `${name}-640.webp`));
  await small.clone().avif({ quality: 40, effort: 4 }).toFile(path.join(outDir, `${name}-640.avif`));
}

console.log("Wrote story WebP and AVIF images.");
