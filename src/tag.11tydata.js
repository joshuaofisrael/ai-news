import site from "./_data/site.js";
import { tagLabel } from "./_lib/labels.js";

export default {
  layout: "layouts/base.njk",
  schemaKind: "CollectionPage",
  eleventyComputed: {
    title(data) {
      return `Tagged ${tagLabel(data.tag)}`;
    },
    description(data) {
      return `Stories filed under the ${tagLabel(data.tag)} tag on ${site.name}, with the reporting and the primary sources for each one.`;
    },
    breadcrumbs(data) {
      return [
        { name: "Home", url: "/" },
        { name: "Tags", url: "/tags/" },
        { name: tagLabel(data.tag), url: `/tag/${data.tag}/` },
      ];
    },
  },
};
