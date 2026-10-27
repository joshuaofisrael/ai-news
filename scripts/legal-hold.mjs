// Pre-publish legal-hold gate (JI Ventures rule, 27 Oct 2026).
// A post with `status: HOLD_REVIEW` is never built, listed, fed or pinged.
// A post without that status must pass every automated check below, or CI fails and nothing deploys.
// Publishing a once-held post needs `approved_sha256:` matching an entry in content-review/approvals.jsonl
// that Joshua approved (approved_by: "Joshua Israel"). Bots must never write that entry themselves.
import { createHash } from "node:crypto";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

export const HOLD = "HOLD_REVIEW";
export const isHeld = (raw) => /^status:\s*["']?HOLD_REVIEW["']?\s*$/m.test(raw);
export const isDraftOrHeld = (raw) => /^draft:\s*true\s*$/m.test(raw) || isHeld(raw);
export const versionHash = (raw) =>
  createHash("sha256").update(raw.replace(/^approved_sha256:.*\n/m, "")).digest("hex");

const RULES = [
  [1, "damaging allegation", /\b(fraud(ulent)?|embezzl\w*|brib(e|ed|ery)|corrupt(ion)?|money[- ]launder\w*|indicted|charged with|accused of|alleged(ly)?|misconduct|(sexual|child|physical) abuse|abused|abusive|lied to|cover[- ]up|scam(med)?)\b/i],
  [2, "sensitive personal info", /([\w.+-]+@(?!aiheadlinehub\.com)[\w-]+\.[\w.]+)|(\+?\d[\d ()-]{8,}\d)|\b\d{1,5} [A-Z][a-z]+ (Street|St|Avenue|Ave|Road|Rd|Lane|Drive)\b|\b(diagnos\w+ with|HIV|sexual orientation|minor victim)\b/],
  [5, "high-impact guidance", /\b(you should (buy|sell|invest|take)|guaranteed (returns?|profit)|buy (the|this) stock|dosage|how to make (a )?(bomb|weapon|explosive))\b/i],
  [6, "election information", /\b(polling (place|station|location)s?|registration deadline|register to vote|eligible to vote|(certified|final|official) (results?|count|tally)|election day is|vote by mail deadline)\b/i],
  [7, "misleading presentation / affiliation", /\b(endorsed by|official partner|in partnership with AI Headline Hub|exclusive:)\b/i],
  [8, "legal restriction", /\b(embargo(ed)?|cease and desist|takedown (notice|request)|DMCA|reporting restriction|injunction|gag order)\b/i],
];

export function checkPost(name, raw, approvals = new Set()) {
  const issues = [];
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return [{ rule: 4, why: "no front matter" }];
  const [, matter, body] = m;
  const title = (matter.match(/^title:\s*(.+)$/m) || [])[1] || "";
  const desc = (matter.match(/^description:\s*(.+)$/m) || [])[1] || "";
  const text = `${title}\n${desc}\n${body}`.replace(/\]\([^)]*\)/g, "]").replace(/https?:\/\/\S+/g, "").replace(/\bCVE-\d{4}-\d+\b/g, "");
  for (const [rule, why, re] of RULES) {
    const hit = text.match(re);
    if (hit) issues.push({ rule, why, flagged: hit[0] });
  }
  // Rule 3: every image needs a documented licence and source record.
  if (/^image:/m.test(matter)) {
    if (!/^\s+licence:\s*\S/m.test(matter)) issues.push({ rule: 3, why: "image missing licence record", flagged: "image" });
    if (!/^\s+source_url:\s*https:\/\//m.test(matter)) issues.push({ rule: 3, why: "image missing source_url record", flagged: "image" });
  }
  for (const fig of body.matchAll(/figure\s+"([^"]+)"/g)) {
    if (!/^\/images\/(stories|inline)\//.test(fig[1])) issues.push({ rule: 3, why: "inline image not from our own licensed set", flagged: fig[1] });
  }
  // Rule 4: material claims need accessed sources.
  const srcUrls = [...(matter.match(/^sources:[\s\S]*?(?=^\S|(?![\s\S]))/m)?.[0] || "").matchAll(/url:\s*(https:\/\/\S+)/g)];
  if (srcUrls.length === 0) issues.push({ rule: 4, why: "no source URLs", flagged: "sources" });
  // Rule 8: unresolved correction request.
  if (/^correction_request:\s*["']?(open|pending)/im.test(matter)) issues.push({ rule: 8, why: "unresolved correction request", flagged: "correction_request" });
  // Approved overrides only for the exact approved version.
  const approved = (matter.match(/^approved_sha256:\s*([a-f0-9]{64})/m) || [])[1];
  if (approved) {
    if (approved === versionHash(raw) && approvals.has(approved)) return [];
    issues.push({ rule: 0, why: "approved_sha256 does not match an approval of this exact version", flagged: name });
  }
  return issues;
}

export async function loadApprovals(file = "content-review/approvals.jsonl") {
  try {
    const lines = (await readFile(file, "utf8")).split("\n").filter(Boolean);
    return new Set(lines.map((l) => JSON.parse(l)).filter((a) => a.approved_by === "Joshua Israel" && a.sha256).map((a) => a.sha256));
  } catch { return new Set(); }
}

export async function runGate(dir = "src/content/posts") {
  const approvals = await loadApprovals();
  const failures = [];
  const held = [];
  for (const name of (await readdir(dir)).filter((n) => n.endsWith(".md")).sort()) {
    const raw = await readFile(path.join(dir, name), "utf8");
    if (isHeld(raw)) { held.push(name); continue; }
    if (/^draft:\s*true\s*$/m.test(raw)) continue;
    const issues = checkPost(name, raw, approvals);
    if (issues.length) failures.push({ name, issues });
  }
  return { failures, held };
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const { failures, held } = await runGate(process.argv[2]);
  for (const h of held) console.log(`HOLD_REVIEW (not published): ${h}`);
  for (const f of failures) for (const i of f.issues) console.error(`LEGAL HOLD rule ${i.rule}: ${f.name}: ${i.why}: "${i.flagged}"`);
  if (failures.length) {
    console.error(`\n${failures.length} post(s) need status: HOLD_REVIEW (or Joshua's approval of the exact version). Deploy blocked.`);
    process.exit(1);
  }
  console.log("Legal-hold gate passed.");
}
