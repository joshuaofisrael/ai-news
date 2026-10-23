import { readFileSync } from "node:fs";
import path from "node:path";

const FALLBACK_SRC = "/images/fallback/gradient.webp";
let sizes;

function imageSizes() {
  if (!sizes) {
    const file = path.join(process.cwd(), "src/_data/imageSizes.json");
    sizes = JSON.parse(readFileSync(file, "utf8"));
  }
  return sizes;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function renderFigure({ src, alt, caption = "" }) {
  const source = String(src || "").trim();
  const description = String(alt || "").trim();
  if (!source) throw new Error("A figure needs a src path.");
  if (!description) throw new Error(`The figure for ${source} needs alt text.`);
  if (source === FALLBACK_SRC) {
    throw new Error("The figure shortcode is for an AI-generated photograph. The gradient is only a placeholder.");
  }
  const meta = imageSizes()[source];
  if (!meta) {
    throw new Error(
      `No compressed image for ${source}. Add the JPEG under src/assets/photos and run npm run art.`,
    );
  }
  const captionText = String(caption || "").trim();
  const avif = meta.srcsetAvif
    ? `<source type="image/avif" srcset="${escapeHtml(meta.srcsetAvif)}" sizes="(min-width: 64rem) 40rem, 100vw">`
    : "";
  const webp = meta.srcsetWebp
    ? `<source type="image/webp" srcset="${escapeHtml(meta.srcsetWebp)}" sizes="(min-width: 64rem) 40rem, 100vw">`
    : "";
  const captionHtml = captionText ? ` ${escapeHtml(captionText)}` : "";
  return `<figure class="story-media inline-figure"><picture>${avif}${webp}<img src="${escapeHtml(source)}" alt="${escapeHtml(description)}" width="${meta.width}" height="${meta.height}" loading="lazy" decoding="async"></picture><figcaption><span class="ai-label">AI-generated image</span>${captionHtml}</figcaption></figure>`;
}

export function figureShortcode(src, alt, caption = "") {
  const source = String(src || "").trim();
  const description = String(alt || "").trim();
  if (!source) throw new Error("The figure shortcode needs a src path.");
  if (!description) throw new Error(`The figure for ${source || "a photograph"} needs alt text.`);
  if (!source.startsWith("/")) throw new Error(`Figure src must be a root-relative path: ${source}`);
  const safeAlt = description.replaceAll("[", "").replaceAll("]", "");
  const safeCaption = String(caption || "").trim().replaceAll('"', "'");
  const title = safeCaption ? ` "${safeCaption}"` : "";
  return `\n\n![${safeAlt}](${source}${title})\n\n`;
}

export function installFigures(md) {
  md.core.ruler.after("inline", "solo_image_figures", (state) => {
    const tokens = state.tokens;
    for (let index = 0; index < tokens.length - 2; index += 1) {
      if (tokens[index].type !== "paragraph_open" || tokens[index + 1].type !== "inline") continue;
      if (tokens[index + 2].type !== "paragraph_close") continue;
      const children = tokens[index + 1].children || [];
      const meaningful = children.filter((child) => {
        if (child.type === "text" && !String(child.content || "").trim()) return false;
        return true;
      });
      if (meaningful.length !== 1 || meaningful[0].type !== "image") continue;
      const image = meaningful[0];
      const html = renderFigure({
        src: image.attrGet("src"),
        alt: image.content,
        caption: image.attrGet("title") || "",
      });
      const token = new state.Token("html_block", "", 0);
      token.content = `${html}\n`;
      tokens.splice(index, 3, token);
    }
  });
}
