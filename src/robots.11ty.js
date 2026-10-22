import { absoluteUrl } from "./_lib/urls.js";

export const data = {
  permalink: "/robots.txt",
  eleventyExcludeFromCollections: true,
};

export function render(data) {
  const site = data.site;
  const blocks = [
    "# AI Headline Hub allows search crawlers and AI crawlers to read this site.",
    "# There is no noai or noimageai restriction.",
    "",
    "User-agent: *",
    "Allow: /",
    "",
  ];
  const seen = new Set();
  for (const bot of [...site.requiredCrawlers, ...site.aiCrawlers]) {
    if (seen.has(bot)) continue;
    seen.add(bot);
    blocks.push(`User-agent: ${bot}`, "Allow: /", "");
  }
  blocks.push(
    `Sitemap: ${absoluteUrl("/sitemap.xml", site.url)}`,
    `Sitemap: ${absoluteUrl("/news-sitemap.xml", site.url)}`,
    `# IndexNow key file: ${absoluteUrl(`/${site.indexNowKey}.txt`, site.url)}`,
    `# llms.txt: ${absoluteUrl("/llms.txt", site.url)}`,
    "",
  );
  return blocks.join("\n");
}
