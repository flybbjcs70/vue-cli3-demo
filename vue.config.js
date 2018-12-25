const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  css: {
    extract: false
  },
  pages: {
    index: {
      entry: "src/pages/index/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "Index Page"
      // chunks: ["chunk-vendors", "chunk-common", "index"]
    },
    subpage: {
      entry: "src/pages/subpage/main.js",
      template: "public/subpage.html",
      filename: "subpage/index.html"
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("scss", resolve("src/scss"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"));
  }
};
