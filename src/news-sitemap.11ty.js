import { absoluteUrl } from "./_lib/urls.js";
import { isoDate } from "./_lib/dates.js";
import { xmlEscape } from "./_lib/xml.js";

export const data = {
  permalink: "/news-sitemap.xml",
  eleventyExcludeFromCollections: true,
};

export function render(data) {
  const site = data.site;
  const hours = site.newsSitemapHours || 48;
  const cutoff = Date.now() - hours * 60 * 60 * 1000;
  const posts = (data.collections.posts || []).filter((post) => post.date && post.date.getTime() >= cutoff);
  const entries = posts
    .map((post) => {
      return `  <url>
    <loc>${xmlEscape(absoluteUrl(post.url, site.url))}</loc>
    <news:news>
      <news:publication>
        <news:name>${xmlEscape(site.name)}</news:name>
        <news:language>${xmlEscape(site.lang)}</news:language>
      </news:publication>
      <news:publication_date>${xmlEscape(isoDate(post.date))}</news:publication_date>
      <news:title>${xmlEscape(post.data.title)}</news:title>
    </news:news>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${entries}
</urlset>
`;
}
