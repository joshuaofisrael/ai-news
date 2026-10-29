# AI Headline Hub

Static news site. The public name is **AI Headline Hub**. Pages are built with [Eleventy](https://www.11ty.dev/) from Markdown files and deployed to GitHub Pages from `main`.

The public name, short name, and canonical origin live in [`src/_data/site.js`](src/_data/site.js).

```js
name: "AI Headline Hub",
url: "https://aiheadlinehub.com",
```

`url` is the origin for canonical links, Open Graph and Twitter cards, JSON-LD, the sitemap, the Google News sitemap, RSS, Atom, `robots.txt`, `llms.txt`, `security.txt`, and the IndexNow key location. There is no trailing slash.

HTML links are rewritten to paths relative to each page. The same build opens at the apex host and under `/ai-news/` on the GitHub project URL. Canonical URLs stay on `https://aiheadlinehub.com`.

The custom domain is registered. [`src/public/CNAME`](src/public/CNAME) contains `aiheadlinehub.com`, and the Pages artifact includes that file. Once the workflow on `main` deploys, GitHub Pages redirects `https://joshuaofisrael.github.io/ai-news/` to `https://aiheadlinehub.com/`.

## Add a story

Create one file in `src/content/posts/`. The filename must start with the UTC date:

```text
src/content/posts/YYYY-MM-DD-short-slug.md
```

The site builds the permalink from that filename and the `date` field: `/YYYY/MM/DD/short-slug/`. No other file needs to change. The next build adds the story to the homepage, its section, its tags, the archive, both feeds, both sitemaps, and `llms.txt`.

### Front matter

```yaml
---
title: Plain-language headline
description: One or two sentences used as the meta description and the standfirst. Aim for 120–160 characters.
date: 2026-10-22T15:00:00.000Z
updated: 2026-10-22T15:00:00.000Z
category: tools-products
tags:
  - openai
  - agents
author: AI Headline Hub
image:
  src: /images/stories/example.webp
  alt: What a sighted reader should know is in the photograph.
  credit: "Image: AI Headline Hub"
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/example.jpg
  licence: AI Headline Hub
  width: 1280
  height: 720
correction: ""
draft: false
sources:
  - title: Title of the primary document
    url: https://example.com/original-announcement
    publisher: Organization that published it
---
```

| Field | Required | Notes |
| --- | --- | --- |
| `title` | yes | Headline and `NewsArticle` title. Do not append the site name. |
| `description` | yes | Unique summary. Also the meta description, social description, and standfirst. |
| `date` | yes | ISO 8601. This is the published time. The permalink date is the UTC calendar date. A time still in the future is omitted from production builds, the homepage, feeds, both sitemaps, and `llms.txt`. The next production build after that time includes it. `npm start` still shows it. |
| `updated` | no | ISO 8601. Shown when it differs from `date`. |
| `category` | yes | One of `models-research`, `industry-business`, `policy-regulation`, `tools-products`, `funding`. |
| `tags` | yes | Lowercase slugs. Do not include `post`. |
| `sources` | yes | At least one `https` URL. Rendered on the page and in JSON-LD `citation`. |
| `author` | no | Defaults to the site name. |
| `image` | no | Hero photograph. Object with `src`, `alt`, `credit`, `source_url`, `licence`, `width`, and `height`. `src` is a root-relative WebP path. The build also looks for a matching AVIF and a `-640` variant. Credit is `Image: AI Headline Hub` and licence is `AI Headline Hub`. House rule (23 Oct): images carry no “AI-generated” label. Log every file in `images-licences.md`. A story with no image shows a plain dark gradient. Pages without their own image use the hero photograph, `/og.jpg`, as the social card. |
| `correction` | no | Shown in a note at the top of the story. Say what was wrong and what changed. |
| `draft` | no | `true` keeps the file out of production builds. Drafts are visible in `npm start`. |

The body is Markdown. Do not put an `h1` in the body; the template renders the title. Use `h2` for sections. Link primary sources in the copy as well as in `sources`. Write internal links as root-relative paths (`/archive/`, `/2026/10/21/some-slug/`). The build rewrites those to page-relative URLs, so they work on the apex host and under `/ai-news/` on GitHub Pages.

### Photographs

Every new article needs an AI-generated photorealistic hero image in the front matter `image` block, using the credit and licence above. It also needs another AI-generated photograph every few paragraphs. The picture has to be about that article’s subject. Use a scene a camera could have recorded. Do not use cartoons, illustrations, anime, flat vector art, or other stylised drawings. Do not depict real people. Do not stage a news event that did not happen.

Put a hero JPEG in `src/assets/photos/stories/` and an in-body JPEG in `src/assets/photos/inline/`. Then compress them:

```bash
npm run art
```

Commit the JPEG masters and the generated WebP and AVIF files. The Pages build does not run the art script. `npm run art` also refreshes the homepage hero, the plain gradient placeholder, and `og.jpg`.

In the Markdown body, put a photograph on its own lines with the `figure` shortcode:

```liquid
{% figure "/images/inline/example.webp", "Alt text that describes the photograph.", "Short caption." %}
```

A Markdown image on its own line does the same thing:

```markdown
![Alt text that describes the photograph.](/images/inline/example.webp "Short caption.")
```

Either form writes a responsive WebP and AVIF picture with `width`, `height`, `loading="lazy"`, `decoding="async"`, the alt text, with no AI label. The caption is optional. Alt text is required. The hero at the top of the article stays eager so it can paint quickly. Photographs further down stay lazy.

Facts in a story have to come from the sources. Do not invent quotes, numbers, or dates. The [editorial policy](src/editorial-policy.njk) is the rule for what gets published.

After the story is on a host that answers for `https://aiheadlinehub.com`, tell IndexNow about it:

```bash
npm run indexnow -- --latest
```

`--all` submits the homepage and every published story. You can also pass one or more absolute URLs. The command checks that `/{indexNowKey}.txt` is reachable at the configured `url` before it pings `https://api.indexnow.org/indexnow`. That check fails until the custom domain resolves. Do not treat a failed ping, before DNS exists, as a broken build.

## Local build

```bash
npm ci
npm start    # http://localhost:8080/
npm test     # production build, then HTML, feed, and sitemap checks
```

`npm test` fails if a page is missing a title, description, canonical URL, Open Graph tags, Twitter card, or JSON-LD, or if feeds and sitemaps do not parse. It also fails if a built page still uses a root-absolute link, or if the old site name is still in the source or the output.

Regenerate the favicon and app icons after changing `src/public/favicon.svg`:

```bash
npm run icons
```

Commit the generated files in `src/public/`. The Pages build does not run the icon script. The social card is `og.jpg`, a crop of the homepage hero, written by `npm run art`.

## Rename the desk

In `src/_data/site.js`, change `name`, `shortName`, `tagline`, and `description`. `legalName` is used only on legal pages (terms, privacy, disclaimer, editorial policy, and contact). It does not appear in the header, footer, about page, feeds, `llms.txt`, `humans.txt`, the web manifest, or JSON-LD. The site name flows into the masthead, page titles, feeds, JSON-LD `WebSite` and `Organization`, the web manifest, `llms.txt`, and the Google News sitemap publication name. JSON-LD `Organization` uses the site name and does not include `legalName`.

Page copy that should track the name already uses the config. A story’s headline and body do not change when the site is renamed. A few legal-page meta descriptions name the desk directly; update those in the same change.

`contactEmail`, `correctionsEmail`, and `securityEmail` are optional. Leave them empty until the inbox exists. `security.txt` and the contact page use `contactUrl` in the meantime.

## Domain and DNS

[`src/public/CNAME`](src/public/CNAME) contains only the apex hostname:

```text
aiheadlinehub.com
```

Eleventy copies it to the site root. The Pages deployment reads that file and sets the custom domain to `aiheadlinehub.com`. It is the apex hostname, not `www`.

`url` in `src/_data/site.js` is `https://aiheadlinehub.com`. `SITE_URL` can override it for a single build. The workflow does not set `SITE_URL`.

The domain is registered, and DNS is being pointed at GitHub Pages. Use these records:

Apex `aiheadlinehub.com`:

| Type | Value |
| --- | --- |
| A | `185.199.108.153` |
| A | `185.199.109.153` |
| A | `185.199.110.153` |
| A | `185.199.111.153` |
| AAAA | `2606:50c0:8000::153` |
| AAAA | `2606:50c0:8001::153` |
| AAAA | `2606:50c0:8002::153` |
| AAAA | `2606:50c0:8003::153` |

Use both the A and AAAA sets. Do not also put a CNAME on the apex.

`www.aiheadlinehub.com`:

| Type | Value |
| --- | --- |
| CNAME | `joshuaofisrael.github.io` |

In the repository, **Settings → Pages → Build and deployment → Source** must be **GitHub Actions**. **Custom domain** must be `aiheadlinehub.com`. Turn on **Enforce HTTPS** after GitHub finishes issuing the certificate. That checkbox stays unavailable until the apex records point at the addresses above and the certificate exists.

When `https://aiheadlinehub.com/` loads, run `npm run indexnow -- --all`. IndexNow checks the key file on that origin first, so a ping before DNS answers will fail.

## What the build emits

| Path | Role |
| --- | --- |
| `/` | Latest stories and the five sections |
| `/category/{slug}/` | Section |
| `/tag/{slug}/` | Tag |
| `/tags/` | Tag index |
| `/archive/` | Every story, grouped by month |
| `/YYYY/MM/DD/{slug}/` | Story |
| `/about/`, `/contact/`, `/editorial-policy/`, `/privacy/`, `/terms/`, `/disclaimer/` | Desk and legal pages |
| `/404.html` | Not found |
| `/feed.xml`, `/atom.xml` | Full-text feeds |
| `/sitemap.xml` | Sitemap |
| `/news-sitemap.xml` | Google News sitemap (stories from the last 48 hours) |
| `/robots.txt` | Allows all crawlers, and names AI crawlers individually |
| `/llms.txt` | Site guide for language models |
| `/humans.txt` | Publisher credit |
| `/.well-known/security.txt` | Security contact; `Expires` is 180 days after the build |
| `/site.webmanifest`, favicons | Install metadata and icons |
| `/{indexNowKey}.txt` | IndexNow key |

`robots.txt` allows `GPTBot`, `ClaudeBot`, `CCBot`, `Google-Extended`, `Bytespider`, `PerplexityBot`, and the other agents listed in `site.aiCrawlers`. Pages do not use `noai` or `noimageai`.

JSON-LD on every page includes `Organization` and `WebSite`, both named AI Headline Hub. The organization object does not include a `legalName`. Stories add `NewsArticle`, with that organization as `publisher`, and `BreadcrumbList`. Section, tag, and archive pages add `BreadcrumbList` when they have a trail.

`robots.txt` allows every crawler and also names Googlebot, Bingbot, OAI-SearchBot, GPTBot, PerplexityBot, ClaudeBot, Google-Extended, Applebot-Extended, CCBot, and Bytespider. It links `sitemap.xml`, the IndexNow key file `c7e4a91b6d2f48e0a3b7159c8d6e0f24.txt`, and `llms.txt`.

The footer on every page reads: “© YEAR AI Headline Hub.” YEAR is the build year. It also links to Terms, Privacy, Disclaimer, Editorial policy, and Contact, and states that all images are AI-generated and illustrative. The legal entity name and the Florida governing-law sentence live on the terms page. Privacy and the disclaimer also name the legal entity and Florida law. The about page does not. The contact page names the legal entity because that is who receives a message, and it has no street address. Its form sends a note through FormSubmit.co and this site does not keep its own copy. The favicon is an original mark. Story and hero photographs are AI-generated images, credited on the page and in `images-licences.md`. The social card is a crop of the homepage hero photograph.

## Analytics

Cloudflare Web Analytics loads from `cfBeaconToken` in [`src/_data/site.js`](src/_data/site.js). Every HTML page, including the 404 page, includes the beacon script immediately before `</body>`. `npm test` fails if that script is missing. The layout omits the script when the token is empty.

## Deploy

[`.github/workflows/pages.yml`](.github/workflows/pages.yml) builds on pull requests and on pushes to `main`. A push to `main` uploads the `_site` artifact and deploys it with GitHub’s Pages actions. The Pages source is GitHub Actions, not a branch. The same workflow also rebuilds and deploys `main` at 11:00, 15:00, and 19:00 UTC on 29 October, so a story dated for one of those times goes out on that run and not before. GitHub may start the job a few minutes late. `workflow_dispatch` can redeploy `main` the same way.

The project URL is `https://joshuaofisrael.github.io/ai-news/`. After the custom domain is active, GitHub redirects that URL to `https://aiheadlinehub.com/`.

The first deployment needs **Settings → Pages → Source** set to **GitHub Actions**. The published `CNAME` file then sets the custom domain to `aiheadlinehub.com`. Enable **Enforce HTTPS** once the certificate is ready.

## Stack

- Node.js 22
- Eleventy 3
- No web fonts. One small script reveals cards on scroll and turns itself off when reduced motion is requested
- Articles in `src/content/posts/`
