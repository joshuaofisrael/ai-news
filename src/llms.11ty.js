import { absoluteUrl } from "./_lib/urls.js";

export const data = {
  permalink: "/llms.txt",
  eleventyExcludeFromCollections: true,
};

export function render(data) {
  const site = data.site;
  const posts = data.collections.posts || [];
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `${site.name} publishes reported stories and links primary sources. Search crawlers and AI crawlers are explicitly allowed in robots.txt, including GPTBot, ClaudeBot, CCBot, Google-Extended, Bytespider, and PerplexityBot. Pages do not use noai or noimageai tags. That access policy does not assign copyright.`,
    "",
    "Full story text is on each article page and in the RSS and Atom feeds.",
    "",
    "## Stories",
    "",
  ];

  if (posts.length === 0) {
    lines.push("No stories published yet.", "");
  } else {
    for (const post of posts) {
      lines.push(`- [${post.data.title}](${absoluteUrl(post.url, site.url)}): ${post.data.description}`);
    }
    lines.push("");
  }

  lines.push("## Sections", "");
  for (const category of data.categories) {
    lines.push(
      `- [${category.title}](${absoluteUrl(`/category/${category.slug}/`, site.url)}): ${category.description}`,
    );
  }

  lines.push(
    "",
    "## The desk",
    "",
    `- [About](${absoluteUrl("/about/", site.url)}): Who publishes ${site.name}.`,
    `- [Editorial policy](${absoluteUrl("/editorial-policy/", site.url)}): Sourcing, updates, and corrections.`,
    `- [Contact](${absoluteUrl("/contact/", site.url)}): How to reach the desk.`,
    `- [Archive](${absoluteUrl("/archive/", site.url)}): Every story, newest first.`,
    `- [RSS](${absoluteUrl("/feed.xml", site.url)}): Full-text RSS feed.`,
    `- [Atom](${absoluteUrl("/atom.xml", site.url)}): Full-text Atom feed.`,
    `- [Privacy](${absoluteUrl("/privacy/", site.url)}): What the site collects.`,
    `- [Terms](${absoluteUrl("/terms/", site.url)}): Rules for using the site.`,
    `- [Disclaimer](${absoluteUrl("/disclaimer/", site.url)}): What the reporting is not.`,
    "",
  );

  return `${lines.join("\n")}\n`;
}
