import { normalizeSiteUrl } from "../_lib/urls.js";

/**
 * Canonical public origin and the newsroom identity.
 *
 * `url` is the origin for canonical links, social cards, JSON-LD, feeds, sitemaps,
 * robots.txt, llms.txt, security.txt, and IndexNow. HTML links are relative, so the
 * same files also open under /ai-news/ on GitHub Pages. The published CNAME is
 * aiheadlinehub.com, and Pages redirects the github.io host to this origin.
 *
 * Optional override for a one-off build: SITE_URL=https://example.com npm run build
 */
const url = normalizeSiteUrl(process.env.SITE_URL || "https://aiheadlinehub.com");

const site = {
  name: "AI Headline Hub",
  shortName: "Headline Hub",
  tagline: "Clear reporting on artificial intelligence.",
  description:
    "AI Headline Hub covers AI models, products, business, policy, and funding, with links to primary sources.",
  legalName: "Joshua Israel Ventures LLC",
  url,
  lang: "en",
  locale: "en_US",
  timezone: "America/New_York",
  contactUrl: "https://github.com/joshuaofisrael/ai-news/issues",
  contactEmail: "",
  correctionsEmail: "",
  securityEmail: "",
  sameAs: ["https://github.com/joshuaofisrael/ai-news"],
  repository: "https://github.com/joshuaofisrael/ai-news",
  themeColor: "#0d1218",
  backgroundColor: "#eef3f4",
  defaultImage: "/og.jpg",
  defaultImageAlt: "Server racks glowing blue in a data-center corridor.",
  fallbackImage: "/images/fallback/gradient.webp",
  fallbackImageAlt: "Plain dark gradient.",
  fallbackImageWidth: 1280,
  fallbackImageHeight: 720,
  heroImage: {
    src: "/images/hero/datacenter.webp",
    alt: "Server racks glowing blue in a data-center corridor.",
    width: 1280,
    height: 720,
  },
  cfBeaconToken: "1961dece0c3d4b0db32e71aeb218d55d",
  indexNowKey: "c7e4a91b6d2f48e0a3b7159c8d6e0f24",
  securityTxtMaxAgeDays: 180,
  newsSitemapHours: 48,
  postsOnHome: 8,
  requiredCrawlers: [
    "Googlebot",
    "Bingbot",
    "OAI-SearchBot",
    "GPTBot",
    "PerplexityBot",
    "ClaudeBot",
    "Google-Extended",
    "Applebot-Extended",
    "CCBot",
    "Bytespider",
  ],
  aiCrawlers: [
    "GPTBot",
    "ChatGPT-User",
    "OAI-SearchBot",
    "ClaudeBot",
    "Claude-SearchBot",
    "Claude-User",
    "anthropic-ai",
    "CCBot",
    "Google-Extended",
    "Bytespider",
    "PerplexityBot",
    "Perplexity-User",
    "Amazonbot",
    "Applebot",
    "Applebot-Extended",
    "Meta-ExternalAgent",
    "Meta-ExternalFetcher",
    "FacebookBot",
    "Diffbot",
    "cohere-ai",
    "YouBot",
    "Timpibot",
    "ImagesiftBot",
    "DuckAssistBot",
    "MistralAI-User",
    "AI2Bot",
  ],
};

export default site;
