import site from "./_data/site.js";

export default {
  eleventyComputed: {
    description: () => `All public tags used on ${site.name} stories.`,
    dek: () => `Every public tag on ${site.name}, with a link to the stories filed under it.`,
  },
};
