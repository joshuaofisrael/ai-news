import categories from "../../_data/categories.js";
import { isScheduledForLater } from "../../_lib/dates.js";
import { articlePermalink } from "../../_lib/posts.js";

function hiddenFromProduction(data) {
  if (process.env.ELEVENTY_RUN_MODE === "serve") return false;
  if (data.draft === true) return true;
  return isScheduledForLater(data.date || data.page?.date);
}

export default {
  layout: "layouts/article.njk",
  tags: ["post"],
  schemaKind: "NewsArticle",
  eleventyComputed: {
    permalink(data) {
      if (data.status === "HOLD_REVIEW") return false;
      if (hiddenFromProduction(data)) return false;
      return articlePermalink(data);
    },
    breadcrumbs(data) {
      const category = categories.find((item) => item.slug === data.category);
      const self = articlePermalink(data);
      return [
        { name: "Home", url: "/" },
        {
          name: category ? category.title : "Archive",
          url: category ? `/category/${category.slug}/` : "/archive/",
        },
        { name: data.title, url: self },
      ];
    },
  },
};
