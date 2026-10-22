import site from "./_data/site.js";

export default {
  eleventyComputed: {
    description: () => `Chronological archive of every story published by ${site.name}.`,
    dek: () => `Every story on ${site.name}, newest first, grouped by month.`,
  },
};
