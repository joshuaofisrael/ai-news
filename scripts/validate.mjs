import assert from "node:assert/strict";
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { XMLParser } from "fast-xml-parser";
import { HtmlValidate } from "html-validate";
import site from "../src/_data/site.js";
import categories from "../src/_data/categories.js";
import topicHubs from "../src/_data/topicHubs.js";
import explainerPages from "../src/_data/explainerPages.js";
import { publishAsOfMs, thisYear, utcPathDate } from "../src/_lib/dates.js";
import markdownIt from "markdown-it";
import { runGate, checkPost, isHeld } from "./legal-hold.mjs";
import { figureShortcode, installFigures } from "../src/_lib/figure.js";
import { storyImage } from "../src/_lib/images.js";
import { absoluteUrl, absolutizeHtml, pathPrefixFromUrl, prefixPath, prefixRootAttributes, relativeUrl, relativizeRootAttributes } from "../src/_lib/urls.js";

assert.equal(pathPrefixFromUrl("https://joshuaofisrael.github.io/ai-news"), "/ai-news/");
assert.equal(pathPrefixFromUrl("https://news.example.com"), "/");
assert.equal(prefixPath("/about/", "/ai-news/"), "/ai-news/about/");
assert.equal(prefixPath("/ai-news/about/", "/ai-news/"), "/ai-news/about/");
assert.equal(
  absoluteUrl("/about/", "https://joshuaofisrael.github.io/ai-news"),
  "https://joshuaofisrael.github.io/ai-news/about/",
);
assert.equal(absoluteUrl("/about/", "https://news.example.com"), "https://news.example.com/about/");
assert.equal(relativeUrl("/", "/about/"), "about/");
assert.equal(relativeUrl("/about/", "/feed.xml"), "../feed.xml");
assert.equal(relativeUrl("/about/", "/"), "../");
assert.equal(
  relativeUrl("/2026/10/21/slug/", "/category/tools-products/"),
  "../../../../category/tools-products/",
);
assert.equal(relativeUrl("/category/funding/", "/assets/css/site.css"), "../../assets/css/site.css");
assert.equal(relativeUrl("/404.html", "/assets/css/site.css"), "assets/css/site.css");
assert.equal(relativeUrl("/about/", "/about/"), "./");
assert.equal(relativeUrl("/about/", "/about/#top"), "./#top");
assert.equal(
  relativizeRootAttributes(
    '<link rel="preload" imagesrcset="/images/hero/datacenter-640.avif 640w, /images/hero/datacenter.avif 1280w">',
    "/",
  ),
  '<link rel="preload" imagesrcset="images/hero/datacenter-640.avif 640w, images/hero/datacenter.avif 1280w">',
);
assert.equal(
  prefixRootAttributes('<img srcset="/images/a.webp 640w, /images/b.webp 1280w">', "/ai-news/"),
  '<img srcset="/ai-news/images/a.webp 640w, /ai-news/images/b.webp 1280w">',
);
assert.equal(
  absolutizeHtml(
    '<img src="/images/hero/datacenter.webp" srcset="/images/hero/datacenter-640.webp 640w, /images/hero/datacenter.webp 1280w">',
    "https://aiheadlinehub.com",
  ),
  '<img src="https://aiheadlinehub.com/images/hero/datacenter.webp" srcset="https://aiheadlinehub.com/images/hero/datacenter-640.webp 640w, https://aiheadlinehub.com/images/hero/datacenter.webp 1280w">',
);

const figureMarkdown = markdownIt({ html: false, linkify: true, typographer: false });
installFigures(figureMarkdown);
const figureHtml = figureMarkdown.render(
  `The agent keeps working.\n\n${figureShortcode(
    "/images/hero/datacenter.webp",
    "Server racks glowing blue in a data-center corridor.",
    "A corridor of racks.",
  )}\n\nThe preview is limited to the United States.`,
);
assert.match(figureHtml, /<figure class="story-media inline-figure">/);
assert.match(figureHtml, /<source type="image\/avif" srcset="[^"]*datacenter-640\.avif 640w, [^"]*datacenter\.avif 1280w"/);
assert.match(figureHtml, /<source type="image\/webp" srcset="[^"]*datacenter-640\.webp 640w, [^"]*datacenter\.webp 1280w"/);
assert.match(
  figureHtml,
  /<img src="\/images\/hero\/datacenter\.webp" alt="Server racks glowing blue in a data-center corridor\." width="1280" height="720" loading="lazy" decoding="async">/,
);
assert.match(figureHtml, /<figcaption>A corridor of racks\.<\/figcaption>/);
assert.doesNotMatch(figureHtml, /AI-generated image/);
assert.doesNotMatch(figureHtml, /loading="eager"/);
assert.doesNotMatch(figureHtml, /&lt;figure/);
assert.match(figureHtml, /<p>The agent keeps working\.<\/p>/);
assert.throws(
  () => figureMarkdown.render("![](/images/hero/datacenter.webp)\n"),
  /needs alt text/,
);
assert.throws(
  () => figureMarkdown.render(figureShortcode("/images/inline/not-yet.webp", "A desk with a laptop.", "")),
  /npm run art/,
);
const placeholder = storyImage(null, site);
assert.equal(placeholder.src, site.fallbackImage);
assert.equal(placeholder.aiGenerated, false);
assert.equal(placeholder.width, 1280);
assert.equal(placeholder.height, 720);
const socialCard = storyImage(site.defaultImage, site);
assert.equal(socialCard.src, "/og.jpg");
assert.equal(socialCard.width, 1200);
assert.equal(socialCard.height, 630);
assert.match(storyImage(site.heroImage, site).srcsetAvif, /datacenter-640\.avif 640w/);

const root = path.resolve("_site");
const errors = [];
const fail = (message) => errors.push(message);
const categorySlugs = new Set(categories.map((category) => category.slug));

function listify(value) {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

async function walk(dir, skip = new Set()) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (skip.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full, skip)));
    else files.push(full);
  }
  return files;
}

function canonicalFromFile(file) {
  const rel = path.relative(root, file).split(path.sep).join("/");
  if (rel === "404.html") return absoluteUrl("/404.html", site.url);
  if (rel === "index.html") return absoluteUrl("/", site.url);
  let route = rel;
  if (route.endsWith("/index.html")) route = route.slice(0, -"index.html".length);
  else if (route.endsWith(".html")) route = `${route.slice(0, -".html".length)}/`;
  if (route === "" || route === ".") route = "/";
  else if (!route.startsWith("/")) route = `/${route}`;
  if (!route.endsWith("/")) route += "/";
  return absoluteUrl(route, site.url);
}

function attr(html, pattern) {
  const match = html.match(pattern);
  return match ? match[1] : "";
}

function linksToContact(fragment, file) {
  const contactFile = path.resolve(root, "contact", "index.html");
  const hrefs = [...fragment.matchAll(/\shref="([^"]+)"/g)].map((match) => match[1]);
  return hrefs.some((link) => {
    const pathname = link.split(/[?#]/)[0];
    if (!pathname || /^(https?:|mailto:|#)/i.test(pathname) || pathname.startsWith("//")) return false;
    const absolute = pathname.startsWith("/")
      ? path.resolve(root, pathname.slice(1))
      : path.resolve(path.dirname(file), pathname);
    const candidate = !path.extname(absolute) || pathname.endsWith("/") ? path.join(absolute, "index.html") : absolute;
    return path.resolve(candidate) === contactFile;
  });
}

async function exists(file) {
  try {
    const info = await stat(file);
    return info.isFile();
  } catch {
    return false;
  }
}

const files = await walk(root);
const htmlFiles = files.filter((file) => file.endsWith(".html"));
const htmlvalidate = new HtmlValidate({
  extends: ["html-validate:recommended", "html-validate:document"],
  elements: ["html5"],
  rules: {
    "no-trailing-whitespace": "off",
    "void-style": "off",
    "tel-non-breaking": "off",
    "require-sri": "off",
    "long-title": "off",
  },
});

const descriptions = new Map();
const titles = new Map();
const noindexPages = [];
const trackerNeedles = [
  "facebook.net/en_US/fbevents",
  "plausible.io",
  "umami",
  "hotjar",
  "segment.com",
  "doubleclick",
];

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const rel = path.relative(root, file);
  const report = await htmlvalidate.validateString(html, rel);
  for (const result of report.results) {
    for (const message of result.messages) {
      if (message.severity < 2) continue;
      fail(`${rel}:${message.line}:${message.column} ${message.ruleId} ${message.message}`);
    }
  }

  if (!html.includes('lang="en"')) fail(`${rel} is missing lang="en"`);
  if (!html.includes('href="#main"')) fail(`${rel} is missing a skip link`);
  if (!html.includes('id="main"')) fail(`${rel} is missing <main id="main">`);
  const h1s = html.match(/<h1\b/g) || [];
  if (h1s.length !== 1) fail(`${rel} has ${h1s.length} h1 elements`);
  if (/<meta[^>]*(?:noai|noimageai)/i.test(html)) fail(`${rel} contains a noai or noimageai meta tag`);
  for (const needle of trackerNeedles) {
    if (html.toLowerCase().includes(needle)) fail(`${rel} contains a tracker marker: ${needle}`);
  }
  if (/<img\b(?![^>]*\balt=)/i.test(html)) fail(`${rel} has an image without alt`);
  if (html.includes("Original illustration") || html.includes('class="network"') || html.includes("/assets/art/")) {
    fail(`${rel} still contains illustration art`);
  }

  const title = attr(html, /<title>([^<]*)<\/title>/);
  const description = attr(html, /<meta name="description" content="([^"]*)">/);
  const canonical = attr(html, /<link rel="canonical" href="([^"]+)">/);
  const robots = attr(html, /<meta name="robots" content="([^"]+)">/);
  const ogTitle = attr(html, /<meta property="og:title" content="([^"]*)">/);
  const ogDescription = attr(html, /<meta property="og:description" content="([^"]*)">/);
  const ogUrl = attr(html, /<meta property="og:url" content="([^"]+)">/);
  const ogImage = attr(html, /<meta property="og:image" content="([^"]+)">/);
  const twitter = attr(html, /<meta name="twitter:card" content="([^"]+)">/);
  if (!title) fail(`${rel} is missing a title`);
  if (!description) fail(`${rel} is missing a meta description`);
  if (description && (description.length < 40 || description.length > 220)) {
    fail(`${rel} description length is ${description.length}`);
  }
  if (!canonical) fail(`${rel} is missing a canonical URL`);
  if (!ogTitle || !ogDescription || !ogUrl || !ogImage) fail(`${rel} is missing Open Graph tags`);
  if (twitter !== "summary_large_image") fail(`${rel} is missing a large Twitter card`);
  const expected = canonicalFromFile(file);
  if (canonical && canonical !== expected) fail(`${rel} canonical is ${canonical}, expected ${expected}`);
  if (ogUrl && canonical && ogUrl !== canonical) fail(`${rel} og:url does not match canonical`);
  if (rel === "404.html" && !robots.includes("noindex")) fail("404.html must be noindex");
  const thinAllowed = /^tag\//.test(rel);
  if (rel !== "404.html" && !thinAllowed && robots.includes("noindex")) fail(`${rel} is unexpectedly noindex`);
  if (thinAllowed) {
    const n = (html.match(/<li>\s*<article/g) || []).length;
    if (robots.includes("noindex") && n >= 3) fail(`${rel} has ${n} stories but is noindex`);
    if (!robots.includes("noindex") && n < 3) fail(`${rel} has ${n} stories and should be noindex`);
  }
  if (robots.includes("noindex")) noindexPages.push(canonical);
  // GA4 must only load through the consent script, with Consent Mode v2 defaulting to denied.
  if (/<script[^>]+googletagmanager\.com/i.test(html)) fail(`${rel} loads gtag.js directly instead of after consent`);
  if (!/gtag\('consent','default',\{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied'/.test(html)) fail(`${rel} is missing Consent Mode v2 default-denied`);
  if (!html.includes('consent.js" data-ga="G-V3LFT40PLN"')) fail(`${rel} is missing the GA4 consent loader`);
  if (!html.includes("adsbygoogle.js?client=ca-pub-5681559774142917")) fail(`${rel} lost the AdSense tag`);

  const allBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  const faqBlocks = allBlocks.filter((b) => /"@type":"FAQPage"/.test(b[1]));
  if (faqBlocks.length > 1 || (faqBlocks.length && rel !== "index.html")) fail(`${rel} has unexpected FAQPage JSON-LD`);
  for (const b of faqBlocks) {
    try {
      const faq = JSON.parse(b[1]);
      for (const q of faq.mainEntity || []) {
        if (!html.includes(`<summary>${q.name.replace(/&/g, "&amp;")}</summary>`)) fail(`${rel} FAQ question not visible: ${q.name}`);
      }
    } catch (error) { fail(`${rel} has invalid FAQ JSON-LD: ${error.message}`); }
  }
  const blocks = allBlocks.filter((b) => !faqBlocks.includes(b));
  if (blocks.length !== 1) fail(`${rel} should have one JSON-LD block, found ${blocks.length}`);
  for (const block of blocks) {
    let json;
    try {
      json = JSON.parse(block[1]);
    } catch (error) {
      fail(`${rel} has invalid JSON-LD: ${error.message}`);
      continue;
    }
    const graph = json["@graph"] || [];
    const types = new Set(graph.map((node) => node["@type"]));
    const organization = graph.find((node) => node["@type"] === "Organization");
    const website = graph.find((node) => node["@type"] === "WebSite");
    if (!types.has("Organization")) fail(`${rel} JSON-LD is missing Organization`);
    if (!types.has("WebSite")) fail(`${rel} JSON-LD is missing WebSite`);
    if (organization && organization.name !== site.name) {
      fail(`${rel} Organization name is "${organization.name}"`);
    }
    const articleNode = graph.find((node) => node["@type"] === "NewsArticle");
    if (articleNode && articleNode.publisher?.["@id"] !== organization?.["@id"]) {
      fail(`${rel} NewsArticle publisher is not ${site.name}`);
    }
    if (organization && Object.prototype.hasOwnProperty.call(organization, "legalName")) {
      fail(`${rel} Organization schema still includes legalName`);
    }
    if (website && website.name !== site.name) fail(`${rel} WebSite name is "${website.name}"`);
    if (html.includes('property="og:type" content="article"')) {
      if (!types.has("NewsArticle") && !types.has("Article")) {
        fail(`${rel} is missing NewsArticle or Article JSON-LD`);
      }
      if (!types.has("BreadcrumbList")) fail(`${rel} is missing BreadcrumbList JSON-LD`);
    }
  }

  const beacon =
    `<script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "${site.cfBeaconToken}"}'></script>`;
  if (!site.cfBeaconToken) fail("cfBeaconToken is empty");
  const beaconAt = html.indexOf(beacon);
  const bodyEnd = html.lastIndexOf("</body>");
  if (beaconAt < 0 || beaconAt > bodyEnd) {
    fail(`${rel} is missing the Cloudflare beacon before </body>`);
  }

  const pagePath = rel.split(path.sep).join("/");
  const legalCopyright = "© 2026 Joshua Israel Ventures LLC. All rights reserved.";
  if (["terms/index.html", "privacy/index.html", "disclaimer/index.html"].includes(pagePath)) {
    if (!html.includes(legalCopyright)) fail(`${rel} is missing the legal copyright line`);
  } else if (html.includes("All rights reserved")) {
    fail(`${rel} carries a copyright line outside a legal page`);
  }
  const legalPages = new Set([
    "terms/index.html",
    "privacy/index.html",
    "disclaimer/index.html",
    "editorial-policy/index.html",
    "contact/index.html",
  ]);
  if (["terms/index.html", "privacy/index.html", "disclaimer/index.html"].includes(pagePath)) {
    if (!html.includes(site.legalName) || !html.includes("State of Florida")) {
      fail(`${rel} must name ${site.legalName} and Florida law`);
    }
  }
  if (!legalPages.has(pagePath) && (html.includes(site.legalName) || html.includes("Joshua Israel"))) {
    fail(`${rel} names the publisher’s legal entity outside a legal page`);
  }
  if (pagePath === "about/index.html" && !html.includes('class="brand-line"')) {
    fail(`${rel} is missing the brand line`);
  }
  if (pagePath === "contact/index.html") {
    if (!html.includes("does not publish a street address")) {
      fail(`${rel} must say that no street address is published`);
    }
    if (/joshuaofisrael@gmail\.com/i.test(html) || /@gmail\.com/i.test(html)) {
      fail(`${rel} contains a literal gmail address`);
    }
    for (const needle of [
      'id="contact-form"',
      'name="name"',
      'name="email"',
      'name="message"',
      'name="_honey"',
      'tabindex="-1"',
      'aria-hidden="true"',
      'aria-live="polite"',
      'name="_captcha" value="false"',
      'name="_template" value="table"',
      'name="_subject" value="AI Headline Hub contact"',
      "assets/js/contact.js",
      "FormSubmit.co",
      "privacy/",
    ]) {
      if (!html.includes(needle)) fail(`${rel} is missing ${needle}`);
    }
  }
  if (pagePath === "privacy/index.html" && !/FormSubmit\.co is the processor/.test(html)) {
    fail(`${rel} must name FormSubmit as the message processor`);
  }
  const footer = html.split('<footer class="site-footer">')[1]?.split("</footer>")[0] || "";
  if (!linksToContact(footer, file)) fail(`${rel} footer does not link to the contact page`);
  if (pagePath === "index.html") {
    if (!html.includes("images/hero/datacenter")) fail(`${rel} is missing the hero photograph`);
    if (!html.includes('fetchpriority="high"')) fail(`${rel} hero is missing fetchpriority`);
    if (!html.includes('class="hero-photo"') || !html.includes('loading="eager"')) {
      fail(`${rel} hero photograph should load eagerly`);
    }
    if (!html.includes("hero-scrim")) fail(`${rel} is missing the hero scrim`);
    if (!html.includes("/og.jpg")) fail(`${rel} social card should use the hero`);
    if (/imagesrcset="\//.test(html)) fail(`${rel} preload imagesrcset is still root-absolute`);
  }
  if (html.includes('class="wrap article-page"')) {
    if (!html.includes("Updated <time")) fail(`${rel} is missing a visible updated date`);
    const sourcesBlock = html.split('id="sources-heading"')[1]?.split("</section>")[0] || "";
    if (!sourcesBlock || !/href="https?:\/\//.test(sourcesBlock)) {
      fail(`${rel} needs a sources list with at least one link`);
    }
    const hasStoryImage = html.includes('class="story-media article-hero"') && !html.includes("/images/fallback/gradient");
    if (hasStoryImage && html.includes("AI-generated image")) {
      fail(`${rel} must not carry an AI-generated image label (owner rule, 23 Oct)`);
    }
  }
  if (html.includes('class="story-media article-hero"')) {
    if (!html.includes('width="1280"') || !html.includes('height="720"')) {
      fail(`${rel} article image is missing its dimensions`);
    }
    if (html.includes("Original illustration") || html.includes("/assets/art/")) {
      fail(`${rel} still embeds illustration art`);
    }
  }

  if (title) {
    if (titles.has(title)) fail(`Duplicate title "${title}" on ${rel} and ${titles.get(title)}`);
    titles.set(title, rel);
  }
  if (description) {
    if (descriptions.has(description)) {
      fail(`Duplicate description on ${rel} and ${descriptions.get(description)}`);
    }
    descriptions.set(description, rel);
  }

  if (/(?:\shref|\ssrc|\saction|\ssrcset|\simagesrcset)="\/(?!\/)/.test(html)) {
    fail(`${rel} contains a root-absolute URL`);
  }

  const srcsetLinks = [...html.matchAll(/\s(?:srcset|imagesrcset)="([^"]+)"/g)].flatMap((match) =>
    match[1]
      .split(",")
      .map((part) => part.trim().split(/\s+/)[0])
      .filter(Boolean),
  );
  const links = [
    ...[...html.matchAll(/\s(?:href|src)="([^"]+)"/g)].map((match) => match[1]),
    ...srcsetLinks,
  ];
  for (const link of links) {
    if (!link || /^(https?:|mailto:|#)/i.test(link) || link.startsWith("//")) continue;
    const pathname = link.split(/[?#]/)[0];
    if (!pathname || pathname === "." || pathname === "./") continue;
    const absolute = pathname.startsWith("/")
      ? path.resolve(root, pathname.slice(1))
      : path.resolve(path.dirname(file), pathname);
    const relativeToRoot = path.relative(root, absolute);
    if (relativeToRoot.startsWith("..") || path.isAbsolute(relativeToRoot)) {
      fail(`${rel} links outside the site: ${link}`);
      continue;
    }
    const candidates = [absolute];
    if (!path.extname(absolute) || pathname.endsWith("/")) {
      candidates.push(path.join(absolute, "index.html"));
    }
    const found = await Promise.all(candidates.map((candidate) => exists(candidate)));
    if (!found.some(Boolean)) fail(`${rel} links to missing ${link}`);
  }
}

const postsDir = path.resolve("src/content/posts");
const postFiles = (await readdir(postsDir)).filter((name) => name.endsWith(".md"));
if (postFiles.length < 3) fail(`Expected at least 3 articles, found ${postFiles.length}`);
const recentUrls = [];
const publishedTitles = [];
let publishedCount = 0;
const now = publishAsOfMs();
for (const name of postFiles) {
  const raw = await readFile(path.join(postsDir, name), "utf8");
  const front = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!front) {
    fail(`${name} is missing front matter`);
    continue;
  }
  const matter = front[1];
  for (const key of ["title", "description", "date", "category"]) {
    if (!new RegExp(`^${key}:\\s*\\S`, "m").test(matter)) fail(`${name} is missing ${key}`);
  }
  if (!/^tags:\s*$/m.test(matter)) fail(`${name} is missing tags`);
  if (!/^sources:\s*$/m.test(matter)) fail(`${name} is missing sources`);
  if (!/^updated:\s*\S/m.test(matter)) fail(`${name} is missing updated`);
  const urls = [...matter.matchAll(/^\s+url:\s+(https?:\/\/\S+)\s*$/gm)].map((match) => match[1]);
  if (urls.length < 1) fail(`${name} needs at least one https source URL`);
  const category = (matter.match(/^category:\s*(\S+)\s*$/m) || [])[1];
  if (category && !categorySlugs.has(category)) fail(`${name} uses unknown category ${category}`);
  if (!matter.includes("credit: \"Image: AI Headline Hub\"")) {
    fail(`${name} image credit must be "Image: AI Headline Hub"`);
  }
  if (!matter.includes("licence: AI Headline Hub")) {
    fail(`${name} image licence must be "AI Headline Hub"`);
  }
  if (/\.svg\b/.test(matter) || matter.includes("Original illustration")) {
    fail(`${name} still uses illustration art`);
  }
  const dateValue = (matter.match(/^date:\s*["']?([^"'\n]+)["']?\s*$/m) || [])[1];
  const date = dateValue ? new Date(dateValue) : null;
  const isScheduled = date && !Number.isNaN(date.getTime()) && date.getTime() > now;
  const isDraft =
    /^draft:\s*true\s*$/m.test(matter) ||
    /^status:\s*["']?HOLD_REVIEW/m.test(matter) ||
    isScheduled;
  if (!isDraft) {
    publishedCount += 1;
    const publishedTitle = (matter.match(/^title:\s*(.+)\s*$/m) || [])[1]?.replace(/^["']|["']$/g, "");
    if (publishedTitle) publishedTitles.push(publishedTitle);
  }
  if (!date || Number.isNaN(date.getTime())) fail(`${name} has an unreadable date`);
  else if (!isDraft && now - date.getTime() <= site.newsSitemapHours * 60 * 60 * 1000) {
    const slug = name.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");
    recentUrls.push(absoluteUrl(`/${utcPathDate(date)}/${slug}/`, site.url));
  }
}

async function readText(relative) {
  const file = path.join(root, relative);
  if (!(await exists(file))) {
    fail(`Missing ${relative}`);
    return "";
  }
  return readFile(file, "utf8");
}

const robots = await readText("robots.txt");
if (robots) {
  if (!/User-agent:\s*\*\s+Allow:\s*\//i.test(robots)) fail("robots.txt does not allow all crawlers");
  if (/disallow:\s*\/\s*$/im.test(robots)) fail("robots.txt disallows the whole site");
  const robotDirectives = robots
    .split("\n")
    .filter((line) => line.trim() && !line.trim().startsWith("#"))
    .join("\n");
  if (/noai|noimageai/i.test(robotDirectives)) fail("robots.txt contains a noai restriction");
  for (const bot of site.aiCrawlers) {
    const pattern = new RegExp(`User-agent:\\s*${bot}\\s+Allow:\\s*/`, "i");
    if (!pattern.test(robots)) fail(`robots.txt does not explicitly allow ${bot}`);
  }
  for (const bot of site.requiredCrawlers) {
    const pattern = new RegExp(`User-agent:\\s*${bot}\\s+Allow:\\s*/`, "i");
    if (!pattern.test(robots)) fail(`robots.txt does not explicitly allow ${bot}`);
  }
  if (!robots.includes(absoluteUrl("/sitemap.xml", site.url))) fail("robots.txt is missing sitemap.xml");
  if (!robots.includes(absoluteUrl("/news-sitemap.xml", site.url))) fail("robots.txt is missing news-sitemap.xml");
  if (!robots.includes(absoluteUrl(`/${site.indexNowKey}.txt`, site.url))) {
    fail("robots.txt is missing the IndexNow key file");
  }
  if (!robots.includes(absoluteUrl("/llms.txt", site.url))) fail("robots.txt is missing llms.txt");
}

const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "@_" });
const sitemap = parser.parse(await readText("sitemap.xml"));
const sitemapLocs = listify(sitemap.urlset?.url).map((url) => url.loc);
if (!sitemapLocs.includes(absoluteUrl("/", site.url))) fail("sitemap is missing the homepage");
if (!sitemapLocs.includes(absoluteUrl("/contact/", site.url))) fail("sitemap is missing the contact page");
for (const category of categories) {
  const loc = absoluteUrl(`/category/${category.slug}/`, site.url);
  if (!sitemapLocs.includes(loc)) fail(`sitemap is missing ${category.title}`);
}
if (new Set(sitemapLocs).size !== sitemapLocs.length) fail("sitemap contains duplicate URLs");
const hubLocs = [
  absoluteUrl("/topics/", site.url),
  absoluteUrl("/explainers/", site.url),
  ...topicHubs.map((topic) => absoluteUrl(`/topics/${topic.slug}/`, site.url)),
  ...explainerPages.map((guide) => absoluteUrl(guide.href, site.url)),
];
for (const loc of hubLocs) {
  if (!sitemapLocs.includes(loc)) fail(`sitemap is missing ${loc}`);
}
for (const u of noindexPages) if (sitemapLocs.includes(u)) fail(`sitemap lists noindex page ${u}`);
if (!sitemapLocs.includes(absoluteUrl("/news-sitemap.xml", site.url))) {
  fail("sitemap does not cross-link the news sitemap");
}
if (!sitemapLocs.includes(absoluteUrl("/sitemap-index.xml", site.url))) {
  fail("sitemap does not cross-link the sitemap index");
}

const news = parser.parse(await readText("news-sitemap.xml"));
const newsUrls = listify(news.urlset?.url);
const newsLocs = newsUrls.map((url) => url.loc);
for (const loc of recentUrls) {
  if (!newsLocs.includes(loc)) fail(`Google News sitemap is missing ${loc}`);
}
for (const entry of newsUrls) {
  const publication = entry["news:news"]?.["news:publication"];
  if (publication?.["news:name"] !== site.name) fail("Google News publication name does not match the site name");
  if (publication?.["news:language"] !== site.lang) fail("Google News language is not en");
  if (!entry["news:news"]?.["news:title"]) fail("Google News entry is missing a title");
  if (!entry["news:news"]?.["news:publication_date"]) fail("Google News entry is missing a publication date");
}
if (newsLocs.length !== recentUrls.length) {
  fail(`Google News sitemap has ${newsLocs.length} URLs; ${recentUrls.length} articles are inside the window`);
}
for (const loc of hubLocs) {
  if (newsLocs.includes(loc)) fail(`Google News sitemap should not list non-news page ${loc}`);
}
const sitemapIndex = parser.parse(await readText("sitemap-index.xml"));
const indexLocs = listify(sitemapIndex.sitemapindex?.sitemap).map((entry) => entry.loc);
for (const path of ["/sitemap.xml", "/news-sitemap.xml"]) {
  const loc = absoluteUrl(path, site.url);
  if (!indexLocs.includes(loc)) fail(`sitemap index is missing ${loc}`);
}

for (const feedName of ["feed.xml", "atom.xml"]) {
  const xml = await readText(feedName);
  if (!xml) continue;
  const parsed = parser.parse(xml);
  if (feedName === "feed.xml") {
    const channel = parsed.rss?.channel;
    if (!channel?.title || !channel.link || !channel.description) fail("RSS channel is missing required fields");
    const items = listify(channel?.item);
    if (items.length < publishedCount) fail(`RSS has ${items.length} items`);
    for (const item of items) {
      if (!item.title || !item.link || !item.pubDate || !item.guid) fail("RSS item is missing a required field");
      if (!String(item.link).startsWith(site.url)) fail(`RSS link is not absolute: ${item.link}`);
    }
    if (!xml.includes('rel="self"')) fail("RSS is missing an atom:link self reference");
  } else {
    const feed = parsed.feed;
    if (!feed?.title || !feed.id || !feed.updated) fail("Atom feed is missing required fields");
    const entries = listify(feed?.entry);
    if (entries.length < publishedCount) fail(`Atom has ${entries.length} entries`);
    if (!xml.includes('rel="self"')) fail("Atom feed is missing a self link");
  }
}

const llms = await readText("llms.txt");
if (llms && !llms.startsWith(`# ${site.name}`)) fail("llms.txt does not start with the site name");
if (llms && !/GPTBot/.test(llms)) fail("llms.txt does not mention that AI crawlers are allowed");
for (const title of publishedTitles) {
  if (llms && !llms.includes(title)) fail(`llms.txt is missing ${title}`);
}

const humans = await readText("humans.txt");
if (humans && !humans.includes(`Publisher: ${site.name}`)) fail("humans.txt is missing the publisher");
if (humans && (humans.includes(site.legalName) || humans.includes("Joshua"))) {
  fail("humans.txt names the publisher’s legal entity or personal name");
}
for (const discoveryName of ["llms.txt", "site.webmanifest", "feed.xml", "atom.xml"]) {
  const discovery = await readText(discoveryName);
  if (discovery && (discovery.includes(site.legalName) || discovery.includes("Joshua"))) {
    fail(`${discoveryName} names the publisher’s legal entity or personal name`);
  }
}

const security = await readText(path.join(".well-known", "security.txt"));
for (const field of ["Contact:", "Expires:", "Preferred-Languages:", "Canonical:"]) {
  if (security && !security.includes(field)) fail(`security.txt is missing ${field}`);
}
const expires = (security.match(/^Expires:\s*(.+)$/m) || [])[1];
if (expires && new Date(expires).getTime() <= Date.now()) fail("security.txt Expires is not in the future");
if (security && !security.includes(absoluteUrl("/.well-known/security.txt", site.url))) {
  fail("security.txt Canonical does not match the configured site URL");
}

const keyFile = await readText(`${site.indexNowKey}.txt`);
if (keyFile && keyFile.trim() !== site.indexNowKey) fail("IndexNow key file does not contain the key");
if (!/^[a-f0-9]{8,128}$/i.test(site.indexNowKey)) fail("IndexNow key must be 8–128 hexadecimal characters");

const manifestRaw = await readText("site.webmanifest");
if (manifestRaw) {
  const manifest = JSON.parse(manifestRaw);
  if (manifest.name !== site.name) fail("Web manifest name does not match the site config");
  if (!manifest.icons?.length) fail("Web manifest is missing icons");
  if (manifest.start_url !== "./" || manifest.scope !== "./") {
    fail("Web manifest start_url and scope must stay relative so both hosts can open the site");
  }
  if (manifest.id !== absoluteUrl("/", site.url)) fail("Web manifest id must be the canonical homepage");
  for (const icon of manifest.icons) {
    const relative = String(icon.src || "").replace(/^\//, "");
    if (!(await exists(path.join(root, relative)))) fail(`Manifest icon is missing: ${icon.src}`);
  }
}

const cnameSourcePath = path.resolve("src/public/CNAME");
const cnameSource = (await readFile(cnameSourcePath, "utf8")).trim();
const canonicalHost = new URL(site.url).host;
if (cnameSource !== canonicalHost) {
  fail(`src/public/CNAME is "${cnameSource}", expected ${canonicalHost}`);
}
const builtCname = path.join(root, "CNAME");
if (!(await exists(builtCname))) {
  fail("Published site is missing CNAME");
} else {
  const published = (await readFile(builtCname, "utf8")).trim();
  if (published !== canonicalHost) fail(`Published CNAME is "${published}", expected ${canonicalHost}`);
}

const banned = [
  new RegExp(["AI", "News", "Daily"].join(" "), "i"),
  new RegExp(["Token", "Times"].join(" "), "i"),
  new RegExp("token" + "times", "i"),
];
const textExtensions = new Set([
  ".html",
  ".xml",
  ".txt",
  ".webmanifest",
  ".svg",
  ".css",
  ".js",
  ".json",
  ".md",
  ".njk",
  ".yml",
]);
async function scanNames(dir, label) {
  const entries = await walk(dir);
  for (const file of entries) {
    const extension = path.extname(file);
    if (extension && !textExtensions.has(extension)) continue;
    if (!extension && path.basename(file) !== "CNAME") continue;
    const text = await readFile(file, "utf8");
    for (const pattern of banned) {
      if (pattern.test(text)) fail(`${label} ${path.relative(dir, file)} still contains ${pattern}`);
    }
  }
}
await scanNames(root, "output");
const sourceRoot = path.resolve(".");
const sourceFiles = await walk(sourceRoot, new Set(["node_modules", "_site", ".git"]));
for (const file of sourceFiles) {
  const extension = path.extname(file);
  if (extension && !textExtensions.has(extension)) continue;
  if (!extension && path.basename(file) !== "CNAME") continue;
  const text = await readFile(file, "utf8");
  for (const pattern of banned) {
    if (pattern.test(text)) fail(`source ${path.relative(sourceRoot, file)} still contains ${pattern}`);
  }
}

const contactJs = await readText(path.join("assets", "js", "contact.js"));
if (contactJs) {
  if (/joshuaofisrael@gmail\.com/i.test(contactJs) || /@gmail\.com/i.test(contactJs)) {
    fail("contact.js contains a literal gmail address");
  }
  const codes = (name) => {
    const match = contactJs.match(new RegExp(`var ${name} = \\[([\\d,\\s]+)\\];`));
    if (!match) {
      fail(`contact.js is missing ${name}`);
      return [];
    }
    return match[1].split(",").map((part) => Number(part.trim()));
  };
  const decode = (list) => String.fromCharCode(...list);
  const built = `https://${decode(codes("gateCodes"))}/ajax/${decode(codes("localCodes"))}@${decode(codes("mailHostCodes"))}`;
  const expected = `https://${["formsubmit", "co"].join(".")}/ajax/${"joshuaofisrael"}@${["gmail", "com"].join(".")}`;
  if (built !== expected) fail("contact.js does not build the FormSubmit ajax endpoint");
  for (const field of ["name", "email", "message", "_captcha", "_template", "_subject", "_honey"]) {
    if (!contactJs.includes(field)) fail(`contact.js does not send ${field}`);
  }
}

for (const asset of [
  "favicon.ico",
  "favicon.svg",
  "apple-touch-icon.png",
  site.defaultImage.replace(/^\//, ""),
  "images/hero/datacenter.webp",
  "images/hero/datacenter.avif",
  "images/fallback/gradient.webp",
  "assets/css/site.css",
]) {
  if (!(await exists(path.join(root, asset)))) fail(`Missing asset ${asset}`);
}

// ---- Legal-hold gate (rule of 27 Oct 2026) ----
{
  const fx = async (n) => readFile(path.resolve("tests/fixtures", n), "utf8");
  const heldFx = await fx("legal-hold-should-hold.md");
  const passFx = await fx("legal-hold-should-pass.md");
  if (checkPost("hold", heldFx).length === 0) fail("legal-hold fixture that should be held passed the checks");
  if (checkPost("pass", passFx).length !== 0) fail("legal-hold fixture that should pass was flagged: " + JSON.stringify(checkPost("pass", passFx)));
  const gate = await runGate(path.resolve("src/content/posts"));
  for (const f of gate.failures) for (const i of f.issues) fail(`LEGAL HOLD rule ${i.rule}: ${f.name}: ${i.why}: "${i.flagged}" (set status: HOLD_REVIEW)`);
  const built = await readFile(path.join(root, "sitemap.xml"), "utf8").catch(() => "");
  const feeds = ["feed.xml", "atom.xml", "news-sitemap.xml", "llms.txt"];
  for (const name of gate.held) {
    const slug = name.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");
    const raw = await readFile(path.resolve("src/content/posts", name), "utf8");
    const d = new Date((raw.match(/^date:\s*["']?([^"'\n]+)/m) || [])[1]);
    if (await exists(path.join(root, utcPathDate(d), slug, "index.html"))) fail(`HOLD_REVIEW post ${name} was built`);
    if (built.includes(`/${slug}/`)) fail(`HOLD_REVIEW post ${name} is in sitemap.xml`);
    for (const f of feeds) {
      const t = await readFile(path.join(root, f), "utf8").catch(() => "");
      if (t.includes(`/${slug}/`)) fail(`HOLD_REVIEW post ${name} is in ${f}`);
    }
  }
  console.log(`Legal-hold gate: ${gate.held.length} held, ${gate.failures.length} failing.`);
}

if (errors.length) {
  console.error(`Validation failed with ${errors.length} problem(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Validated ${htmlFiles.length} HTML pages, feeds, sitemaps, and discovery files.`);
