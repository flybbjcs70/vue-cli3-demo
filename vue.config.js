const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  css: {
    extract: false
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("scss", resolve("src/scss"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"));
  }
};
