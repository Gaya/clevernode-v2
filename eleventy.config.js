export default function(eleventyConfig) {
  eleventyConfig.ignores.add("includes/**");
  eleventyConfig.addPassthroughCopy("assets");
};
