import { utcPathDate } from "./dates.js";

export function articleSlug(data) {
  if (data?.page?.fileSlug) return data.page.fileSlug;
  const stem = data?.page?.filePathStem || "";
  const base = stem.split("/").pop() || "";
  return base.replace(/^\d{4}-\d{2}-\d{2}-/, "");
}

export function articlePermalink(data) {
  const slug = articleSlug(data);
  const date = data?.date || data?.page?.date;
  const pathDate = utcPathDate(date);
  if (!slug || !pathDate) return "/";
  return `/${pathDate}/${slug}/`;
}

export function isArticle(data) {
  return Array.isArray(data?.tags) && data.tags.includes("post");
}
