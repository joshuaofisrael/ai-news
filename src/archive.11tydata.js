import site from "./_data/site.js";

export default {
  eleventyComputed: {
    description: () =>
      `Every story on ${site.name}, newest first and grouped by month. Open a headline for the report, the date, and the primary sources printed on the page.`,
    dek: () => `Every story on ${site.name}, newest first, grouped by month.`,
  },
};
