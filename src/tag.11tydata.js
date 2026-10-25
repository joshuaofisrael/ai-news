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
      const label = tagLabel(data.tag);
      const count = (data.collections.posts || []).filter((post) => (post.data.tags || []).includes(data.tag)).length;
      const noun = count === 1 ? "story" : "stories";
      return `${count} ${noun} tagged ${label} on ${site.name}, each linking a primary source. Open a story for the reporting and its sources, or use the archive for every section.`;
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
