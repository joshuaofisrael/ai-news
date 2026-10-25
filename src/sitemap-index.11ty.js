import { absoluteUrl } from "./_lib/urls.js";
import { xmlEscape } from "./_lib/xml.js";

export const data = {
  permalink: "/sitemap-index.xml",
  eleventyExcludeFromCollections: true,
};

export function render(data) {
  const site = data.site;
  const locs = ["/sitemap.xml", "/news-sitemap.xml"].map((path) => absoluteUrl(path, site.url));
  const entries = locs
    .map(
      (loc) => `  <sitemap>
    <loc>${xmlEscape(loc)}</loc>
  </sitemap>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>
`;
}
