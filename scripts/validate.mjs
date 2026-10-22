import assert from "node:assert/strict";
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { XMLParser } from "fast-xml-parser";
import { HtmlValidate } from "html-validate";
import site from "../src/_data/site.js";
import categories from "../src/_data/categories.js";
import { thisYear, utcPathDate } from "../src/_lib/dates.js";
import { absoluteUrl, pathPrefixFromUrl, prefixPath, relativeUrl } from "../src/_lib/urls.js";

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
const trackerNeedles = [
  "googletagmanager",
  "google-analytics",
  "gtag(",
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
  if (rel !== "404.html" && robots.includes("noindex")) fail(`${rel} is unexpectedly noindex`);

  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
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
    if (organization && organization.name !== site.legalName) {
      fail(`${rel} Organization name is "${organization.name}"`);
    }
    const articleNode = graph.find((node) => node["@type"] === "NewsArticle");
    if (articleNode && articleNode.publisher?.["@id"] !== organization?.["@id"]) {
      fail(`${rel} NewsArticle publisher is not ${site.legalName}`);
    }
    if (organization && organization.legalName !== site.legalName) {
      fail(`${rel} Organization legalName is "${organization.legalName}"`);
    }
    if (website && website.name !== site.name) fail(`${rel} WebSite name is "${website.name}"`);
    if (html.includes('property="og:type" content="article"')) {
      if (!types.has("NewsArticle")) fail(`${rel} is missing NewsArticle JSON-LD`);
      if (!types.has("BreadcrumbList")) fail(`${rel} is missing BreadcrumbList JSON-LD`);
    }
  }

  const copyright = `© ${thisYear()} ${site.legalName}. All rights reserved. ${site.name} is owned and operated by ${site.legalName}.`;
  if (!html.includes(copyright)) fail(`${rel} is missing the required copyright line`);
  const pagePath = rel.split(path.sep).join("/");
  if (["terms/index.html", "privacy/index.html", "disclaimer/index.html"].includes(pagePath)) {
    if (!html.includes(site.legalName) || !html.includes("State of Florida")) {
      fail(`${rel} must name ${site.legalName} and Florida law`);
    }
  }
  if (pagePath === "about/index.html" && !html.includes('class="brand-line"')) {
    fail(`${rel} is missing the brand line`);
  }
  if (pagePath === "contact/index.html" && !html.includes("does not publish a street address")) {
    fail(`${rel} must say that no street address is published`);
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

  if (/(?:\shref|\ssrc|\saction)="\/(?!\/)/.test(html)) {
    fail(`${rel} contains a root-absolute URL`);
  }

  const links = [...html.matchAll(/\s(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
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
  const urls = [...matter.matchAll(/^\s+url:\s+(https?:\/\/\S+)\s*$/gm)].map((match) => match[1]);
  if (urls.length < 1) fail(`${name} needs at least one https source URL`);
  const category = (matter.match(/^category:\s*(\S+)\s*$/m) || [])[1];
  if (category && !categorySlugs.has(category)) fail(`${name} uses unknown category ${category}`);
  const dateValue = (matter.match(/^date:\s*["']?([^"'\n]+)["']?\s*$/m) || [])[1];
  const date = dateValue ? new Date(dateValue) : null;
  if (!date || Number.isNaN(date.getTime())) fail(`${name} has an unreadable date`);
  else if (Date.now() - date.getTime() <= site.newsSitemapHours * 60 * 60 * 1000) {
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
for (const category of categories) {
  const loc = absoluteUrl(`/category/${category.slug}/`, site.url);
  if (!sitemapLocs.includes(loc)) fail(`sitemap is missing ${category.title}`);
}
if (new Set(sitemapLocs).size !== sitemapLocs.length) fail("sitemap contains duplicate URLs");

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

for (const feedName of ["feed.xml", "atom.xml"]) {
  const xml = await readText(feedName);
  if (!xml) continue;
  const parsed = parser.parse(xml);
  if (feedName === "feed.xml") {
    const channel = parsed.rss?.channel;
    if (!channel?.title || !channel.link || !channel.description) fail("RSS channel is missing required fields");
    const items = listify(channel?.item);
    if (items.length < postFiles.length) fail(`RSS has ${items.length} items`);
    for (const item of items) {
      if (!item.title || !item.link || !item.pubDate || !item.guid) fail("RSS item is missing a required field");
      if (!String(item.link).startsWith(site.url)) fail(`RSS link is not absolute: ${item.link}`);
    }
    if (!xml.includes('rel="self"')) fail("RSS is missing an atom:link self reference");
  } else {
    const feed = parsed.feed;
    if (!feed?.title || !feed.id || !feed.updated) fail("Atom feed is missing required fields");
    const entries = listify(feed?.entry);
    if (entries.length < postFiles.length) fail(`Atom has ${entries.length} entries`);
    if (!xml.includes('rel="self"')) fail("Atom feed is missing a self link");
  }
}

const llms = await readText("llms.txt");
if (llms && !llms.startsWith(`# ${site.name}`)) fail("llms.txt does not start with the site name");
if (llms && !/GPTBot/.test(llms)) fail("llms.txt does not mention that AI crawlers are allowed");
for (const name of postFiles) {
  const raw = await readFile(path.join(postsDir, name), "utf8");
  const title = (raw.match(/^title:\s*(.+)\s*$/m) || [])[1]?.replace(/^["']|["']$/g, "");
  if (title && llms && !llms.includes(title)) fail(`llms.txt is missing ${title}`);
}

const humans = await readText("humans.txt");
if (humans && !humans.includes(site.legalName)) fail("humans.txt is missing the publisher");

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

for (const asset of ["favicon.ico", "favicon.svg", "apple-touch-icon.png", "og.png", "assets/css/site.css"]) {
  if (!(await exists(path.join(root, asset)))) fail(`Missing asset ${asset}`);
}

if (errors.length) {
  console.error(`Validation failed with ${errors.length} problem(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Validated ${htmlFiles.length} HTML pages, feeds, sitemaps, and discovery files.`);
