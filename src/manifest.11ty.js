import { absoluteUrl } from "./_lib/urls.js";

export const data = {
  permalink: "/site.webmanifest",
  eleventyExcludeFromCollections: true,
};

export function render(data) {
  const site = data.site;
  const icon = (file, size, purpose = "any") => ({
    src: file.replace(/^\//, ""),
    sizes: `${size}x${size}`,
    type: "image/png",
    purpose,
  });
  const manifest = {
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    id: absoluteUrl("/", site.url),
    start_url: "./",
    scope: "./",
    display: "browser",
    background_color: site.backgroundColor,
    theme_color: site.themeColor,
    lang: site.lang,
    icons: [icon("/icons/icon-192.png", 192), icon("/icons/icon-512.png", 512), icon("/icons/icon-maskable-512.png", 512, "maskable")],
  };
  return `${JSON.stringify(manifest, null, 2)}\n`;
}
