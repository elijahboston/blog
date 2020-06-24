const fs = require("fs");
const path = require("path");

const srcPath = "./src";

const aliases = () => {
  const files = fs.readdirSync(srcPath);
  files
    .map((file) => path.join(srcPath, file))
    .map((path) => fs.statSync(path).isDirectory())
    .map((dirPath) => () => {
      console.log(dirPath);
      return {
        [path.basename(dirPath)]: dirPath,
      };
    });
};
module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "module-resolver",
      {
        root: [srcPath],
        alias: {
          ...aliases(),
        },
      },
    ],
  ],
}
