import site from "./_data/site.js";

export const data = {
  permalink: `/${site.indexNowKey}.txt`,
  eleventyExcludeFromCollections: true,
};

export function render() {
  return `${site.indexNowKey}\n`;
}
