import site from "./_data/site.js";

export default {
  layout: "layouts/base.njk",
  title: site.name,
  description: site.description,
  mastheadHeading: true,
  schemaKind: "WebPage",
  tags: ["page"],
};
