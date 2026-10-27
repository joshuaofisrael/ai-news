export default {
  layout: "layouts/base.njk",
  schemaKind: "CollectionPage",
  eleventyComputed: {
    title(data) {
      return data.topic.title;
    },
    description(data) {
      return data.topic.description;
    },
    updated() {
      return "2026-10-27T14:15:00.000Z";
    },
    breadcrumbs(data) {
      return [
        { name: "Home", url: "/" },
        { name: "Topics", url: "/topics/" },
        { name: data.topic.title, url: `/topics/${data.topic.slug}/` },
      ];
    },
  },
};
