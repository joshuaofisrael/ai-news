import { absoluteUrl } from "./_lib/urls.js";

export const data = {
  permalink: "/data/ai-model-releases.csv",
  eleventyExcludeFromCollections: true,
};

function csvEscape(value) {
  const text = String(value ?? "");
  if (/[",\n]/.test(text)) return `"${text.replaceAll('"', '""')}"`;
  return text;
}

export function render(data) {
  const releases = data.modelReleases || { checked: "", rows: [] };
  const header = [
    "model",
    "maker",
    "release_date",
    "context_window",
    "licence",
    "announcement_url",
    "announcement_title",
    "also_url",
    "also_title",
    "date_note",
    "context_note",
    "licence_note",
    "desk_story_url",
    "checked",
  ];
  const lines = [header.join(",")];
  for (const row of releases.rows || []) {
    lines.push(
      [
        row.model,
        row.maker,
        row.date,
        row.context,
        row.licence,
        row.announcementUrl,
        row.announcementTitle,
        row.extraUrl || "",
        row.extraTitle || "",
        row.dateNote,
        row.contextNote,
        row.licenceNote,
        absoluteUrl(row.storyPath, data.site.url),
        releases.checked,
      ]
        .map(csvEscape)
        .join(","),
    );
  }
  return `${lines.join("\n")}\n`;
}
