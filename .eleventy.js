import emojiShortcode from "./src/_includes/shortcodes/emoji.js";

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ public: "/" });
    eleventyConfig.addShortcode("emoji", emojiShortcode);

    eleventyConfig.addCollection("nestedContent", function(collectionApi) {
        const content = collectionApi.getFilteredByGlob("src/**/*.md");
        const nestedStructure = {};
    
        content.forEach(item => {
          const parts = item.filePathStem.split('/').slice(1);
          let current = nestedStructure;
          
          parts.forEach((part, index) => {
            if (index === parts.length - 1) {
              if (!current[part]) current[part] = [];
              current[part].push(item);
            } else {
              if (!current[part]) current[part] = {};
              current = current[part];
            }
          });
        });
    
        return nestedStructure;
      });

    return {
      dir: {
        input: "src",
        layouts: "_layouts",
        includes: "_includes",
        output: "dist", // Or whatever build directory you prefer
      },
    };
  }