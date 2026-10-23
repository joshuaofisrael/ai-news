# Image licences

Story photographs and the homepage hero are AI-generated photorealistic images made for AI Headline Hub. They are not stock-agency files. An article image has to show that article’s subject. Do not publish cartoons, illustrations, anime, flat vector art, or other stylised drawings as story or hero images. Do not depict real people. Do not stage a news event that did not happen.

A story with no `image` block shows a plain dark gradient. That file is a placeholder, not a picture of a subject. Story pages do not use SVG illustrations.

WebP and AVIF files are compressed copies of the JPEG masters, at the master size (1280×720) and at 640 pixels wide. `og.jpg` is a 1200×630 cover crop of the hero.

| File | Where it appears | Credit | Source | Licence |
| --- | --- | --- | --- | --- |
| `src/assets/photos/hero-datacenter.jpg`, `src/public/images/hero/datacenter.webp`, and `src/public/og.jpg` | Homepage hero background and the default social card | AI-generated image, AI Headline Hub | Generated for this site. Master: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/hero-datacenter.jpg | Generated for AI Headline Hub |
| `src/assets/photos/stories/claude-duet.jpg` and `src/public/images/stories/claude-duet.webp` | Claude Duet story, 21 October 2026 | AI-generated image, AI Headline Hub | Generated for this site. Master: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/claude-duet.jpg | Generated for AI Headline Hub |
| `src/assets/photos/stories/openai-google-cloud.jpg` and `src/public/images/stories/openai-google-cloud.webp` | OpenAI on Google Cloud story, 21 October 2026 | AI-generated image, AI Headline Hub | Generated for this site. Master: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/openai-google-cloud.jpg | Generated for AI Headline Hub |
| `src/assets/photos/stories/partner-safeguards.jpg` and `src/public/images/stories/partner-safeguards.webp` | OpenAI partner safeguards story, 21 October 2026 | AI-generated image, AI Headline Hub | Generated for this site. Master: https://github.com/joshuaofisrael/ai-news/blob/main/src/assets/photos/stories/partner-safeguards.jpg | Generated for AI Headline Hub |
| `src/public/images/fallback/gradient.webp` | Stories with no image | Neutral placeholder | Plain gradient from `scripts/generate-story-art.mjs` | Generated for AI Headline Hub |
| `src/public/favicon.svg` and the generated app icons | Favicon and manifest icons | Plain mark by AI Headline Hub | Drawn for this site | Original artwork, all rights reserved |

The `-640.webp` and `.avif` files next to each photograph are the same picture at another size and format.

Inline photographs belong in `src/assets/photos/inline/`. `npm run art` writes them to `src/public/images/inline/`. Give each one the same credit and licence, and the figure markup adds the visible “AI-generated image” label.
