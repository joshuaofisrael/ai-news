# Legal hold (JI Ventures rule, 27 Oct 2026)
- `status: HOLD_REVIEW` in a post's front matter = never built, never in sitemap/feeds/llms.txt, never sent to IndexNow.
- `scripts/legal-hold.mjs` runs in CI (`.github/workflows/pages.yml`) and inside `npm test`; any unheld post that trips a rule fails the deploy.
- To publish a held post, Joshua must approve the exact version. Its sha256 (`versionHash`) goes in `approvals.jsonl` with `"approved_by":"Joshua Israel"`, and the post gets `approved_sha256:`. Bots never write approvals themselves.
- Held items are also logged in /workspace/content-review/queue.jsonl on the shared box.
