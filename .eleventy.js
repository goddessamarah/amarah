const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addPassthroughCopy({ "img/favicon": "/" });
  eleventyConfig.addPassthroughCopy({ "img/other": "/" });
  eleventyConfig.addPassthroughCopy({ font: "/" });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
