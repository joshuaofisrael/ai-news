import markdownIt from "markdown-it";
import site from "./src/_data/site.js";
import { storyImage } from "./src/_lib/images.js";
import { tagLabel } from "./src/_lib/labels.js";
import {
  absoluteUrl,
  absolutizeHtml,
  pathPrefixFromUrl,
  prefixPath,
  prefixRootAttributes,
  relativizeRootAttributes,
} from "./src/_lib/urls.js";
import {
  isoDate,
  monthKey,
  monthLabel,
  plusDaysIso,
  readableDate,
  rfc822,
  thisYear,
} from "./src/_lib/dates.js";

const siteUrl = site.url;
const pathPrefix = pathPrefixFromUrl(siteUrl);

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/public": "." });
  eleventyConfig.addPassthroughCopy({ "src/assets/css": "assets/css" });
  eleventyConfig.addWatchTarget("src/assets/css");

  const markdown = markdownIt({
    html: false,
    linkify: true,
    typographer: true,
  });
  const defaultLinkOpen =
    markdown.renderer.rules.link_open ||
    function renderLink(tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options, env, self);
    };
  markdown.renderer.rules.link_open = function linkOpen(tokens, idx, options, env, self) {
    const token = tokens[idx];
    const href = token.attrGet("href") || "";
    if (/^https?:\/\//i.test(href)) {
      const rel = new Set((token.attrGet("rel") || "").split(/\s+/).filter(Boolean));
      rel.add("noopener");
      rel.add("noreferrer");
      token.attrSet("rel", [...rel].join(" "));
    }
    return defaultLinkOpen(tokens, idx, options, env, self);
  };
  eleventyConfig.setLibrary("md", markdown);
  eleventyConfig.addFilter("markdown", (value) => markdown.render(String(value || "")));

  eleventyConfig.addFilter("storyImage", (value) => storyImage(value, site));
  eleventyConfig.addFilter("href", (value) => prefixPath(value, pathPrefix));
  eleventyConfig.addFilter("absUrl", (value) => absoluteUrl(value || "/", siteUrl));
  eleventyConfig.addFilter("isoDate", (value) => isoDate(value));
  eleventyConfig.addFilter("readableDate", (value) => readableDate(value, false));
  eleventyConfig.addFilter("readableDateTime", (value) => readableDate(value, true));
  eleventyConfig.addFilter("rfc822", (value) => rfc822(value));
  eleventyConfig.addFilter("monthKey", (value) => monthKey(value));
  eleventyConfig.addFilter("monthLabel", (value) => monthLabel(value));
  eleventyConfig.addFilter("groupByMonth", (posts) => {
    const groups = [];
    for (const post of posts || []) {
      const key = monthKey(post.date);
      const current = groups[groups.length - 1];
      if (!current || current.key !== key) {
        groups.push({ key, label: monthLabel(post.date), posts: [post] });
      } else {
        current.posts.push(post);
      }
    }
    return groups;
  });
  eleventyConfig.addFilter("thisYear", () => thisYear());
  eleventyConfig.addFilter("tagLabel", (slug) => tagLabel(slug));
  eleventyConfig.addFilter("head", (list, count = 3) => (list || []).slice(0, Number(count) || 0));
  eleventyConfig.addFilter("securityExpires", () => plusDaysIso(site.securityTxtMaxAgeDays));
  eleventyConfig.addFilter("nowIso", () => new Date().toISOString());
  eleventyConfig.addFilter("nowRfc", () => rfc822(new Date()));
  eleventyConfig.addFilter("categoryBySlug", (list, slug) => {
    return (
      (list || []).find((category) => category.slug === slug) || {
        slug: slug || "uncategorized",
        title: slug || "Uncategorized",
        description: "",
      }
    );
  });
  eleventyConfig.addFilter("cdata", (value) => String(value || "").replaceAll("]]>", "]]]]><![CDATA[>"));
  eleventyConfig.addFilter("absHtml", (value) => absolutizeHtml(value, siteUrl));
  eleventyConfig.addFilter("newsWindow", (posts) => {
    const cutoff = Date.now() - site.newsSitemapHours * 60 * 60 * 1000;
    return (posts || []).filter((post) => post.date && post.date.getTime() >= cutoff);
  });
  eleventyConfig.addFilter("byCategory", (posts, slug) =>
    (posts || []).filter((post) => post.data.category === slug),
  );
  eleventyConfig.addFilter("byTag", (posts, tag) =>
    (posts || []).filter((post) => (post.data.tags || []).includes(tag)),
  );
  eleventyConfig.addFilter("related", (posts, current) => {
    const tags = new Set((current.data.tags || []).filter((tag) => tag !== "post"));
    return (posts || [])
      .filter((post) => post.url !== current.url)
      .map((post) => {
        let score = post.data.category === current.data.category ? 2 : 0;
        for (const tag of post.data.tags || []) {
          if (tags.has(tag)) score += 1;
        }
        return { post, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || b.post.date - a.post.date)
      .slice(0, 3)
      .map((item) => item.post);
  });
  eleventyConfig.addFilter("moreStories", (posts, url) => {
    const list = posts || [];
    const current = list.find((post) => post.url === url);
    const related = current
      ? list
          .filter((post) => post.url !== url)
          .map((post) => {
            const tags = new Set((current.data.tags || []).filter((tag) => tag !== "post"));
            let score = post.data.category === current.data.category ? 2 : 0;
            for (const tag of post.data.tags || []) {
              if (tags.has(tag)) score += 1;
            }
            return { post, score };
          })
          .filter((item) => item.score > 0)
          .sort((a, b) => b.score - a.score || b.post.date - a.post.date)
          .map((item) => item.post)
      : [];
    const seen = new Set(related.map((post) => post.url));
    seen.add(url);
    const filler = list.filter((post) => !seen.has(post.url));
    return [...related, ...filler].slice(0, 3);
  });
  eleventyConfig.addFilter("xmlEscapeText", (value) =>
    String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;"),
  );

  eleventyConfig.addCollection("posts", (api) => {
    return api
      .getFilteredByTag("post")
      .filter((item) => item.data.draft !== true)
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("tagList", (api) => {
    const tags = new Set();
    for (const post of api.getFilteredByTag("post")) {
      if (post.data.draft === true) continue;
      for (const tag of post.data.tags || []) {
        if (!["post", "page"].includes(tag)) tags.add(tag);
      }
    }
    return [...tags].sort((a, b) => a.localeCompare(b));
  });

  eleventyConfig.addTransform("portable-urls", function portableUrls(content) {
    const output = this.page?.outputPath || "";
    if (!output.endsWith(".html")) return content;
    const prefixed = prefixRootAttributes(content, pathPrefix);
    return relativizeRootAttributes(prefixed, this.page?.url || "/");
  });

  return {
    pathPrefix,
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html", "11ty.js"],
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
}
