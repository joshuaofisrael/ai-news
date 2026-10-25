import site from "../_data/site.js";
import categories from "../_data/categories.js";
import { absoluteUrl } from "./urls.js";
import { isoDate, toDate } from "./dates.js";

function categoryTitle(slug) {
  return categories.find((category) => category.slug === slug)?.title || slug || "";
}

export function buildSchema(input = {}) {
  const pageUrl = absoluteUrl(input.pageUrl || "/", site.url);
  const orgId = `${site.url}/#organization`;
  const websiteId = `${site.url}/#website`;
  const logo = absoluteUrl("/icons/icon-512.png", site.url);
  const image = absoluteUrl(input.image || site.defaultImage, site.url);
  const imageAlt = input.imageAlt || site.defaultImageAlt;
  const kind = input.kind || "WebPage";

  const organization = {
    "@type": "Organization",
    "@id": orgId,
    name: site.name,
    url: `${site.url}/`,
    logo: {
      "@type": "ImageObject",
      url: logo,
      width: 512,
      height: 512,
    },
    publishingPrinciples: absoluteUrl("/editorial-policy/", site.url),
  };
  if (Array.isArray(site.sameAs) && site.sameAs.length) organization.sameAs = site.sameAs;

  if (site.contactEmail) {
    organization.contactPoint = {
      "@type": "ContactPoint",
      contactType: "editorial",
      url: absoluteUrl("/contact/", site.url),
      email: site.contactEmail,
    };
  } else {
    organization.contactPoint = {
      "@type": "ContactPoint",
      contactType: "editorial",
      url: absoluteUrl("/contact/", site.url),
    };
  }

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    name: site.name,
    url: `${site.url}/`,
    description: site.description,
    inLanguage: site.lang,
    publisher: { "@id": orgId },
  };

  const graph = [organization, website];
  const crumbs = Array.isArray(input.breadcrumbs) ? input.breadcrumbs : [];

  if (crumbs.length > 1) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: crumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: absoluteUrl(crumb.url, site.url),
      })),
    });
  }

  if (kind === "NewsArticle") {
    const published = isoDate(input.datePublished);
    const modified = isoDate(input.dateModified || input.datePublished);
    const keywords = (input.tags || []).filter((tag) => !["post", "page"].includes(tag));
    graph.push({
      "@type": "NewsArticle",
      "@id": `${pageUrl}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
      headline: input.title,
      description: input.description,
      datePublished: published,
      dateModified: modified,
      inLanguage: site.lang,
      isAccessibleForFree: true,
      articleSection: categoryTitle(input.section),
      keywords: keywords.join(", "),
      image: [image],
      author:
        input.author && input.author !== site.name
          ? { "@type": "Person", name: input.author }
          : {
              "@type": "NewsMediaOrganization",
              name: site.name,
              url: `${site.url}/about/`,
            },
      publisher: { "@id": orgId },
      citation: (input.sources || []).map((source) => ({
        "@type": "CreativeWork",
        name: source.title,
        url: source.url,
        publisher: source.publisher ? { "@type": "Organization", name: source.publisher } : undefined,
      })),
    });
  } else {
    const page = {
      "@type": kind,
      "@id": pageUrl,
      url: pageUrl,
      name: input.title,
      description: input.description,
      isPartOf: { "@id": websiteId },
      publisher: { "@id": orgId },
      inLanguage: site.lang,
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: image,
        caption: imageAlt,
      },
    };
    if (crumbs.length > 1) page.breadcrumb = { "@id": `${pageUrl}#breadcrumb` };
    const modified = toDate(input.dateModified);
    if (modified) page.dateModified = isoDate(modified);
    graph.push(page);
  }

  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  }).replace(/</g, "\\u003c");
}
