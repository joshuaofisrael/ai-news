import { readableDate } from "./_lib/dates.js";

export const data = {
  permalink: "/humans.txt",
  eleventyExcludeFromCollections: true,
};

export function render(data) {
  const site = data.site;
  const latest = data.collections.posts?.[0];
  return `/* TEAM */
Publisher: ${site.legalName}
Site: ${site.name}
Contact: ${site.contactUrl}
${site.contactEmail ? `Email: ${site.contactEmail}\n` : ""}
/* SITE */
Standards: HTML, CSS, RSS, Atom, XML sitemaps, JSON-LD
Components: Eleventy
Language: English
Last story: ${latest ? readableDate(latest.date) : "none yet"}

/* THANKS */
Readers who follow a citation back to the primary source.

/* ASSETS */
Icons, the favicon, and the social card are original artwork drawn for this site.
No third-party or stock images are published.
`;
}
