import { absoluteUrl } from "./_lib/urls.js";
import { plusDaysIso } from "./_lib/dates.js";

export const data = {
  permalink: "/.well-known/security.txt",
  eleventyExcludeFromCollections: true,
};

export function render(data) {
  const site = data.site;
  const canonical = absoluteUrl("/.well-known/security.txt", site.url);
  const lines = [`Contact: ${site.contactUrl}`];
  if (site.securityEmail) lines.push(`Contact: mailto:${site.securityEmail}`);
  lines.push(
    `Expires: ${plusDaysIso(site.securityTxtMaxAgeDays)}`,
    "Preferred-Languages: en",
    `Canonical: ${canonical}`,
    `Policy: ${absoluteUrl("/editorial-policy/", site.url)}`,
    "",
  );
  return `${lines.join("\n")}\n`;
}
