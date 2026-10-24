import { absolutizeHtml, absoluteUrl } from "./_lib/urls.js";
import { rfc822, thisYear } from "./_lib/dates.js";
import { cdata, xmlEscape } from "./_lib/xml.js";
import categories from "./_data/categories.js";

export const data = {
  permalink: "/feed.xml",
  eleventyExcludeFromCollections: true,
};

function categoryTitle(slug) {
  return categories.find((category) => category.slug === slug)?.title || slug || "";
}

export async function render(data) {
  const site = data.site;
  const posts = data.collections.posts || [];
  const home = absoluteUrl("/", site.url);
  const self = absoluteUrl("/feed.xml", site.url);
  const items = [];
  for (const post of posts) {
      const link = absoluteUrl(post.url, site.url);
      const raw = (await post.templateContent) || `<p>${xmlEscape(post.data.description)}</p>`;
      const body = cdata(absolutizeHtml(raw, site.url));
      const tags = (post.data.tags || []).filter((tag) => tag !== "post" && tag !== "page");
      const extraTags = tags.map((tag) => `      <category>${xmlEscape(tag)}</category>`).join("\n");
      items.push(`    <item>
      <title>${xmlEscape(post.data.title)}</title>
      <link>${xmlEscape(link)}</link>
      <guid isPermaLink="true">${xmlEscape(link)}</guid>
      <pubDate>${xmlEscape(rfc822(post.date))}</pubDate>
      <description>${xmlEscape(post.data.description)}</description>
      <category>${xmlEscape(categoryTitle(post.data.category))}</category>
${extraTags}
      <content:encoded><![CDATA[${body}]]></content:encoded>
    </item>`);
  }
  const itemXml = items.join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${xmlEscape(site.name)}</title>
    <link>${xmlEscape(home)}</link>
    <description>${xmlEscape(site.description)}</description>
    <language>en-us</language>
    <lastBuildDate>${xmlEscape(rfc822(posts[0]?.date || new Date()))}</lastBuildDate>
    <atom:link href="${xmlEscape(self)}" rel="self" type="application/rss+xml"/>
    <copyright>Copyright ${thisYear()} ${xmlEscape(site.name)}</copyright>
    <generator>Eleventy</generator>
${itemXml}
  </channel>
</rss>
`;
}
