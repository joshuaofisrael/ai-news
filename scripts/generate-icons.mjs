import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const publicDir = path.join(root, "src/public");
const iconDir = path.join(publicDir, "icons");

function icoFromPngs(pngs) {
  const count = pngs.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);
  const directory = Buffer.alloc(16 * count);
  let offset = 6 + 16 * count;
  for (const [index, png] of pngs.entries()) {
    const cursor = index * 16;
    directory.writeUInt8(png.size >= 256 ? 0 : png.size, cursor);
    directory.writeUInt8(png.size >= 256 ? 0 : png.size, cursor + 1);
    directory.writeUInt16LE(1, cursor + 4);
    directory.writeUInt16LE(32, cursor + 6);
    directory.writeUInt32LE(png.buffer.length, cursor + 8);
    directory.writeUInt32LE(offset, cursor + 12);
    offset += png.buffer.length;
  }
  return Buffer.concat([header, directory, ...pngs.map((png) => png.buffer)]);
}

const favicon = await readFile(path.join(publicDir, "favicon.svg"));
await mkdir(iconDir, { recursive: true });

async function png(size) {
  return sharp(favicon).resize(size, size).png().toBuffer();
}

const sizes = [32, 180, 192, 512];
const buffers = new Map();
for (const size of sizes) {
  buffers.set(size, await png(size));
}
const sixteen = await png(16);

await sharp(buffers.get(32)).toFile(path.join(iconDir, "icon-32.png"));
await sharp(buffers.get(192)).toFile(path.join(iconDir, "icon-192.png"));
await sharp(buffers.get(512)).toFile(path.join(iconDir, "icon-512.png"));
await sharp(buffers.get(180)).toFile(path.join(publicDir, "apple-touch-icon.png"));

const maskMark = await sharp(favicon).resize(360, 360).png().toBuffer();
await sharp({
  create: { width: 512, height: 512, channels: 4, background: "#0d1218" },
})
  .composite([{ input: maskMark, gravity: "centre" }])
  .png()
  .toFile(path.join(iconDir, "icon-maskable-512.png"));

const ico = icoFromPngs([
  { size: 16, buffer: sixteen },
  { size: 32, buffer: buffers.get(32) },
]);
await writeFile(path.join(publicDir, "favicon.ico"), ico);

console.log("Wrote favicon and app icons.");
