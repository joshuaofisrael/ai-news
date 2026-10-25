import site from "./_data/site.js";

export default {
  layout: "layouts/base.njk",
  title: site.name,
  description:
    "AI Headline Hub reports on AI models, products, business, policy, and funding. Each story links the primary source behind the claim, in the desk’s own words.",
  mastheadHeading: true,
  schemaKind: "WebPage",
  tags: ["page"],
};
