import path from "node:path";

export function normalizeSiteUrl(url) {
  return String(url || "").trim().replace(/\/$/, "");
}

export function pathPrefixFromUrl(siteUrl) {
  const { pathname } = new URL(siteUrl);
  const trimmed = pathname.replace(/\/$/, "");
  return trimmed ? `${trimmed}/` : "/";
}

export function originFromUrl(siteUrl) {
  return new URL(siteUrl).origin;
}

export function prefixPath(path, prefix) {
  if (/^https?:\/\//i.test(path || "")) return path;
  const bare = !prefix || prefix === "/" ? "" : prefix.replace(/\/$/, "");
  if (!path || path === "/") return bare ? `${bare}/` : "/";
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  if (!bare) return withSlash;
  if (withSlash === bare || withSlash.startsWith(`${bare}/`)) return withSlash;
  return `${bare}${withSlash}`;
}

export function absoluteUrl(path, siteUrl) {
  const href = prefixPath(path, pathPrefixFromUrl(siteUrl));
  return new URL(href, originFromUrl(siteUrl)).href;
}

export function absolutizeHtml(html, siteUrl) {
  const origin = originFromUrl(siteUrl);
  const prefix = pathPrefixFromUrl(siteUrl);
  const marker = prefix === "/" ? "" : prefix.replace(/^\//, "").replace(/\/$/, "");
  return String(html || "").replace(/(\s(?:href|src)=")\//g, (match, before, offset, source) => {
    const rest = source.slice(offset + match.length);
    if (marker && rest.startsWith(marker)) return `${before}${origin}/`;
    if (prefix === "/") return `${before}${origin}/`;
    return `${before}${origin}${prefix}`;
  });
}

export function pageDirectory(pageUrl) {
  const clean = String(pageUrl || "/").split("?")[0].split("#")[0];
  if (clean.endsWith(".html")) {
    const slash = clean.lastIndexOf("/");
    return slash <= 0 ? "/" : clean.slice(0, slash + 1);
  }
  if (clean.endsWith("/")) return clean || "/";
  return `${clean}/`;
}

export function relativeUrl(fromPageUrl, toUrl) {
  if (!toUrl || /^(https?:|mailto:|#)/i.test(toUrl) || toUrl.startsWith("//")) return toUrl;
  const hashAt = toUrl.indexOf("#");
  const beforeHash = hashAt >= 0 ? toUrl.slice(0, hashAt) : toUrl;
  const hash = hashAt >= 0 ? toUrl.slice(hashAt) : "";
  const queryAt = beforeHash.indexOf("?");
  const pathname = queryAt >= 0 ? beforeHash.slice(0, queryAt) : beforeHash;
  const query = queryAt >= 0 ? beforeHash.slice(queryAt) : "";
  if (!pathname.startsWith("/")) return toUrl;

  const fromDir = pageDirectory(fromPageUrl);
  let rel = path.posix.relative(fromDir, pathname);
  const directory = pathname.endsWith("/") || pathname === "/";
  if (directory) {
    if (!rel || rel === ".") rel = "./";
    else if (!rel.endsWith("/")) rel = `${rel}/`;
  } else if (!rel) {
    rel = ".";
  }
  return `${rel}${query}${hash}`;
}

export function relativizeRootAttributes(html, pageUrl) {
  const attributes = String(html || "").replace(
    /(\s(?:href|src|action)=")(\/[^"]*)(")/g,
    (match, before, url, after) => {
      if (url.startsWith("//")) return match;
      return `${before}${relativeUrl(pageUrl, url)}${after}`;
    },
  );
  return attributes.replace(/(\ssrcset=")([^"]*)(")/g, (match, before, value, after) => {
    const rewritten = value
      .split(",")
      .map((part) => {
        const trimmed = part.trim();
        const space = trimmed.indexOf(" ");
        const url = space === -1 ? trimmed : trimmed.slice(0, space);
        const rest = space === -1 ? "" : trimmed.slice(space);
        if (!url.startsWith("/") || url.startsWith("//")) return trimmed;
        return `${relativeUrl(pageUrl, url)}${rest}`;
      })
      .join(", ");
    return `${before}${rewritten}${after}`;
  });
}

export function prefixRootAttributes(html, prefix) {
  if (!prefix || prefix === "/") return html;
  const bare = prefix.replace(/\/$/, "");
  const marker = bare.slice(1);
  return html.replace(/(\s(?:href|src|action)=")\//g, (match, before, offset) => {
    const rest = html.slice(offset + match.length);
    if (rest.startsWith(marker)) return match;
    return `${before}${bare}/`;
  });
}
