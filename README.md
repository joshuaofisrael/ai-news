# AI Headline Hub

Static news site published by **Joshua Israel Ventures LLC**. Pages are built with [Eleventy](https://www.11ty.dev/) from Markdown files and deployed to GitHub Pages from `main`.

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
  alt: Short description of what the picture shows
  credit: Original illustration by AI Headline Hub
  source_url: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/art/example.svg
  licence: Original artwork, all rights reserved
  width: 1200
  height: 675
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
| `date` | yes | ISO 8601. This is the published time. The permalink date is the UTC calendar date. |
| `updated` | no | ISO 8601. Shown when it differs from `date`. |
| `category` | yes | One of `models-research`, `industry-business`, `policy-regulation`, `tools-products`, `funding`. |
| `tags` | yes | Lowercase slugs. Do not include `post`. |
| `sources` | yes | At least one `https` URL. Rendered on the page and in JSON-LD `citation`. |
| `author` | no | Defaults to the site name. |
| `image` | no | Object with `src`, `alt`, `credit`, `source_url`, `licence`, `width`, and `height`. `src` is a root-relative WebP path. The build also looks for a matching AVIF and a `-640` variant. Log every file in `images-licences.md`. Pages without an image use `/og.png`. |
| `correction` | no | Shown in a note at the top of the story. Say what was wrong and what changed. |
| `draft` | no | `true` keeps the file out of production builds. Drafts are visible in `npm start`. |

The body is Markdown. Do not put an `h1` in the body; the template renders the title. Use `h2` for sections. Link primary sources in the copy as well as in `sources`. Write internal links as root-relative paths (`/archive/`, `/2026/10/21/some-slug/`). The build rewrites those to page-relative URLs, so they work on the apex host and under `/ai-news/` on GitHub Pages.

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

Regenerate the favicon, app icons, and social card after changing `src/public/favicon.svg` or `src/assets/og.svg`:

```bash
npm run icons
```

Commit the generated files in `src/public/`. The Pages build does not run the icon script.

## Rename the desk

In `src/_data/site.js`, change `name`, `shortName`, `tagline`, and `description`. `legalName` is the publisher, Joshua Israel Ventures LLC. The site name flows into the masthead, page titles, feeds, JSON-LD `WebSite`, the web manifest, `llms.txt`, and the Google News sitemap publication name. JSON-LD `Organization` uses `legalName` as both `name` and `legalName`, and lists the site name as `alternateName`.

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

JSON-LD on every page includes `Organization` (Joshua Israel Ventures LLC) and `WebSite` (AI Headline Hub). Stories add `NewsArticle`, with that organization as `publisher`, and `BreadcrumbList`. Section, tag, and archive pages add `BreadcrumbList` when they have a trail.

`robots.txt` allows every crawler and also names Googlebot, Bingbot, OAI-SearchBot, GPTBot, PerplexityBot, ClaudeBot, Google-Extended, Applebot-Extended, CCBot, and Bytespider. It links `sitemap.xml`, the IndexNow key file `c7e4a91b6d2f48e0a3b7159c8d6e0f24.txt`, and `llms.txt`.

The footer on every page reads: “© YEAR Joshua Israel Ventures LLC. All rights reserved. AI Headline Hub is owned and operated by Joshua Israel Ventures LLC.” YEAR is the build year. Terms, privacy, and the disclaimer name the company and are governed by Florida law. The about page carries the same ownership line. The contact page has no street address and does not store form submissions. Icons and the social card are original artwork for this site.

## Analytics

No analytics script is loaded while `cfBeaconToken` in [`src/_data/site.js`](src/_data/site.js) is empty. When that value is set, the base layout adds the Cloudflare Web Analytics beacon before `</body>`.

## Deploy

[`.github/workflows/pages.yml`](.github/workflows/pages.yml) builds on pull requests and on pushes to `main`. A push to `main` uploads the `_site` artifact and deploys it with GitHub’s Pages actions. The Pages source is GitHub Actions, not a branch.

The project URL is `https://joshuaofisrael.github.io/ai-news/`. After the custom domain is active, GitHub redirects that URL to `https://aiheadlinehub.com/`.

The first deployment needs **Settings → Pages → Source** set to **GitHub Actions**. The published `CNAME` file then sets the custom domain to `aiheadlinehub.com`. Enable **Enforce HTTPS** once the certificate is ready.

## Stack

- Node.js 22
- Eleventy 3
- No web fonts. One small script reveals cards on scroll and turns itself off when reduced motion is requested
- Articles in `src/content/posts/`
