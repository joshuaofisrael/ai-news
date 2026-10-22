export default {
  layout: "layouts/base.njk",
  schemaKind: "CollectionPage",
  eleventyComputed: {
    title(data) {
      return data.category.title;
    },
    description(data) {
      return data.category.description;
    },
    breadcrumbs(data) {
      return [
        { name: "Home", url: "/" },
        { name: data.category.title, url: `/category/${data.category.slug}/` },
      ];
    },
  },
};
