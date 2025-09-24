import { eleventyImageTransformPlugin } from '@11ty/eleventy-img';

export default function(eleventyConfig) {
  eleventyConfig.ignores.add("includes/**");

  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
};
