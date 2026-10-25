import { absoluteUrl } from "./_lib/urls.js";
import { isoDate } from "./_lib/dates.js";
import { xmlEscape } from "./_lib/xml.js";

export const data = {
  permalink: "/sitemap.xml",
  eleventyExcludeFromCollections: true,
};

function urlEntry(loc, lastmod) {
  const modified = lastmod ? `\n    <lastmod>${xmlEscape(lastmod)}</lastmod>` : "";
  return `  <url>
    <loc>${xmlEscape(loc)}</loc>${modified}
  </url>`;
}

export function render(data) {
  const site = data.site;
  const posts = data.collections.posts || [];
  const pages = (data.collections.page || []).filter((entry) => entry.data.sitemap !== false && entry.url);
  const home = absoluteUrl("/", site.url);
  const entries = [];

  for (const entry of pages) {
    const loc = absoluteUrl(entry.url, site.url);
    let lastmod = entry.data.updated ? isoDate(entry.data.updated) : "";
    if (loc === home && posts[0]) lastmod = isoDate(posts[0].date);
    entries.push(urlEntry(loc, lastmod));
  }

  for (const post of posts) {
    entries.push(urlEntry(absoluteUrl(post.url, site.url), isoDate(post.data.updated || post.date)));
  }

  for (const topic of data.topicHubs || []) {
    const stories = posts.filter((post) => {
      const tags = post.data.tags || [];
      if ((topic.matchTags || []).some((tag) => tags.includes(tag))) return true;
      return (topic.extraSlugs || []).some((slug) => String(post.url || "").endsWith(`/${slug}/`));
    });
    entries.push(
      urlEntry(
        absoluteUrl(`/topics/${topic.slug}/`, site.url),
        stories[0] ? isoDate(stories[0].data.updated || stories[0].date) : "",
      ),
    );
  }

  for (const category of data.categories) {
    const stories = posts.filter((post) => post.data.category === category.slug);
    entries.push(
      urlEntry(
        absoluteUrl(`/category/${category.slug}/`, site.url),
        stories[0] ? isoDate(stories[0].date) : "",
      ),
    );
  }

  for (const tag of data.collections.tagList || []) {
    const stories = posts.filter((post) => (post.data.tags || []).includes(tag));
    entries.push(
      urlEntry(absoluteUrl(`/tag/${tag}/`, site.url), stories[0] ? isoDate(stories[0].date) : ""),
    );
  }

  entries.push(urlEntry(absoluteUrl("/news-sitemap.xml", site.url), ""));
  entries.push(urlEntry(absoluteUrl("/sitemap-index.xml", site.url), ""));

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- News sitemap: ${absoluteUrl("/news-sitemap.xml", site.url)} -->
${entries.join("\n")}
</urlset>
`;
}
