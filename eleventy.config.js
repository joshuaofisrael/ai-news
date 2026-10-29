import markdownIt from "markdown-it";
import site from "./src/_data/site.js";
import { figureShortcode, installFigures } from "./src/_lib/figure.js";
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
  isScheduledForLater,
  monthKey,
  monthLabel,
  plusDaysIso,
  readableDate,
  rfc822,
  thisYear,
} from "./src/_lib/dates.js";

import { readdirSync, readFileSync } from "node:fs";

// Legal hold: slugs of posts with status HOLD_REVIEW. Links to them are stripped from every output.
const heldSlugs = readdirSync("src/content/posts")
  .filter((n) => n.endsWith(".md"))
  .filter((n) => /^status:\s*["']?HOLD_REVIEW/m.test(readFileSync(`src/content/posts/${n}`, "utf8")))
  .map((n) => n.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, ""));

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
  installFigures(markdown);
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
  eleventyConfig.addShortcode("figure", (src, alt, caption) => figureShortcode(src, alt, caption));
  eleventyConfig.addFilter("href", (value) => prefixPath(value, pathPrefix));
  eleventyConfig.addFilter("faqSchema", (items) => JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: (items || []).map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })) }).replace(/</g, "\\u003c"));
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
  eleventyConfig.addFilter("byAnyTag", (posts, tags, extraSlugs) => {
    const wanted = new Set(tags || []);
    const slugs = extraSlugs || [];
    return (posts || []).filter((post) => {
      if ((post.data.tags || []).some((tag) => wanted.has(tag))) return true;
      return slugs.some((slug) => String(post.url || "").endsWith(`/${slug}/`));
    });
  });
  eleventyConfig.addFilter("whereSlug", (list, slugs) => {
    const wanted = new Set(slugs || []);
    return (list || []).filter((item) => wanted.has(item.slug));
  });
  eleventyConfig.addFilter("hubsFor", (list, tags, url) => {
    const have = new Set(tags || []);
    const path = String(url || "");
    return (list || []).filter((topic) => {
      if ((topic.matchTags || []).some((tag) => have.has(tag))) return true;
      return (topic.extraSlugs || []).some((slug) => path.endsWith(`/${slug}/`));
    });
  });
  eleventyConfig.addFilter("explainersFor", (list, tags) => {
    const have = new Set(tags || []);
    return (list || []).filter((item) => (item.matchTags || []).some((tag) => have.has(tag)));
  });
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

  const previewing = process.env.ELEVENTY_RUN_MODE === "serve";
  const isPublicPost = (item) => {
    if (item.data.draft === true || item.data.status === "HOLD_REVIEW") return false;
    if (previewing) return true;
    return !isScheduledForLater(item.date);
  };

  eleventyConfig.addCollection("posts", (api) => {
    return api
      .getFilteredByTag("post")
      .filter((item) => isPublicPost(item))
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("tagList", (api) => {
    const tags = new Set();
    for (const post of api.getFilteredByTag("post")) {
      if (!isPublicPost(post)) continue;
      for (const tag of post.data.tags || []) {
        if (!["post", "page"].includes(tag)) tags.add(tag);
      }
    }
    return [...tags].sort((a, b) => a.localeCompare(b));
  });

  eleventyConfig.addTransform("legal-hold-unlink", function unlinkHeld(content) {
    if (!heldSlugs.length || typeof content !== "string") return content;
    let out = content;
    for (const slug of heldSlugs) {
      const re = new RegExp(`<a\\b[^>]*href="[^"]*/${slug}/"[^>]*>([\\s\\S]*?)</a>`, "g");
      out = out.replace(re, "$1");
      const reEsc = new RegExp(`&lt;a\\b[^&]*?href=(&quot;|")[^"&]*/${slug}/(&quot;|")[\\s\\S]*?&gt;([\\s\\S]*?)&lt;/a&gt;`, "g");
      out = out.replace(reEsc, "$3");
    }
    return out;
  });

  eleventyConfig.addTransform("portable-urls", function portableUrls(content) {
    const output = this.page?.outputPath || "";
    if (!output.endsWith(".html")) return content;
    const prefixed = prefixRootAttributes(content, pathPrefix);
    return relativizeRootAttributes(prefixed, this.page?.url || "/");
  });

  return {
    pathPrefix,
    markdownTemplateEngine: "njk",
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
