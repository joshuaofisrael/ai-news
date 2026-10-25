import site from "./_data/site.js";

export default {
  eleventyComputed: {
    description: () =>
      `Every public tag on ${site.name}, with a count of the stories filed under it and a link to that reporting and the primary sources named on each story.`,
    dek: () => `Every public tag on ${site.name}, with a link to the stories filed under it.`,
  },
};
