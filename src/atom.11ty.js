import { absolutizeHtml, absoluteUrl } from "./_lib/urls.js";
import { isoDate, thisYear } from "./_lib/dates.js";
import { xmlEscape } from "./_lib/xml.js";
import categories from "./_data/categories.js";

export const data = {
  permalink: "/atom.xml",
  eleventyExcludeFromCollections: true,
};

function categoryTitle(slug) {
  return categories.find((category) => category.slug === slug)?.title || slug || "";
}

export async function render(data) {
  const site = data.site;
  const posts = data.collections.posts || [];
  const home = absoluteUrl("/", site.url);
  const self = absoluteUrl("/atom.xml", site.url);
  const updated = isoDate(posts[0]?.date || new Date());
  const entries = [];
  for (const post of posts) {
      const link = absoluteUrl(post.url, site.url);
      const raw = (await post.templateContent) || `<p>${post.data.description}</p>`;
      const html = xmlEscape(absolutizeHtml(raw, site.url));
      const modified = isoDate(post.data.updated || post.date);
      const tags = (post.data.tags || []).filter((tag) => tag !== "post" && tag !== "page");
      const extraTags = tags.map((tag) => `    <category term="${xmlEscape(tag)}"/>`).join("\n");
      entries.push(`  <entry>
    <title>${xmlEscape(post.data.title)}</title>
    <id>${xmlEscape(link)}</id>
    <link rel="alternate" type="text/html" href="${xmlEscape(link)}"/>
    <published>${xmlEscape(isoDate(post.date))}</published>
    <updated>${xmlEscape(modified)}</updated>
    <author><name>${xmlEscape(post.data.author || site.name)}</name></author>
    <summary>${xmlEscape(post.data.description)}</summary>
    <category term="${xmlEscape(categoryTitle(post.data.category))}" label="${xmlEscape(categoryTitle(post.data.category))}"/>
${extraTags}
    <content type="html">${html}</content>
  </entry>`);
  }
  const entryXml = entries.join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${xmlEscape(site.name)}</title>
  <id>${xmlEscape(home)}</id>
  <updated>${xmlEscape(updated)}</updated>
  <link rel="alternate" type="text/html" href="${xmlEscape(home)}"/>
  <link rel="self" type="application/atom+xml" href="${xmlEscape(self)}"/>
  <author><name>${xmlEscape(site.name)}</name></author>
  <rights>Copyright ${thisYear()} ${xmlEscape(site.name)}</rights>
  <generator>Eleventy</generator>
${entryXml}
</feed>
`;
}
