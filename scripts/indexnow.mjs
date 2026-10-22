import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import site from "../src/_data/site.js";
import { utcPathDate } from "../src/_lib/dates.js";
import { absoluteUrl } from "../src/_lib/urls.js";

const key = site.indexNowKey;
const keyLocation = absoluteUrl(`/${key}.txt`, site.url);
const host = new URL(site.url).host;

function usage() {
  console.log(`Usage:
  npm run indexnow -- --latest
  npm run indexnow -- --all
  npm run indexnow -- https://host/path/

Submits URLs to IndexNow. The site must already be deployed, because IndexNow fetches the key file at:
  ${keyLocation}`);
}

async function articleRecords() {
  const dir = path.resolve("src/content/posts");
  const files = (await readdir(dir)).filter((name) => name.endsWith(".md"));
  const records = [];
  for (const name of files) {
    const raw = await readFile(path.join(dir, name), "utf8");
    if (/^draft:\s*true\s*$/m.test(raw)) continue;
    const dateMatch = raw.match(/^date:\s*["']?([^"'\n]+)["']?\s*$/m);
    if (!dateMatch) continue;
    const date = new Date(dateMatch[1]);
    if (Number.isNaN(date.getTime())) continue;
    const slug = name.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");
    records.push({
      file: name,
      date,
      url: absoluteUrl(`/${utcPathDate(date)}/${slug}/`, site.url),
    });
  }
  records.sort((a, b) => b.date - a.date);
  return records;
}

async function ping(urls) {
  const keyResponse = await fetch(keyLocation);
  const published = (await keyResponse.text()).trim();
  if (!keyResponse.ok || published !== key) {
    console.error(`IndexNow key is not live at ${keyLocation} (HTTP ${keyResponse.status}).`);
    console.error("Deploy first, then rerun this command.");
    process.exit(1);
  }

  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host,
      key,
      keyLocation,
      urlList: urls,
    }),
  });
  const body = await response.text();
  if (response.status !== 200 && response.status !== 202) {
    console.error(`IndexNow responded HTTP ${response.status}.`);
    if (body) console.error(body);
    process.exit(1);
  }
  console.log(`IndexNow accepted ${urls.length} URL(s) with HTTP ${response.status}.`);
  for (const url of urls) console.log(`  ${url}`);
}

const args = process.argv.slice(2).filter((arg) => arg !== "--");
if (args.length === 0 || args.includes("-h") || args.includes("--help")) {
  usage();
  process.exit(args.includes("--help") || args.includes("-h") ? 0 : 1);
}

const records = args.includes("--latest") || args.includes("--all") ? await articleRecords() : [];
let urls = [];
if (args.includes("--latest")) {
  if (!records.length) {
    console.error("No published articles to submit.");
    process.exit(1);
  }
  urls = [records[0].url];
} else if (args.includes("--all")) {
  urls = [absoluteUrl("/", site.url), ...records.map((record) => record.url)];
} else {
  urls = args.filter((arg) => /^https?:\/\//i.test(arg));
}

if (!urls.length) {
  usage();
  process.exit(1);
}

for (const url of urls) {
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    console.error(`Not a URL: ${url}`);
    process.exit(1);
  }
  if (parsed.host !== host) {
    console.error(`Refusing ${url}. IndexNow host for this build is ${host}.`);
    process.exit(1);
  }
}

await ping([...new Set(urls)]);
