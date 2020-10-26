var fs = require("fs")
var path = require("path")

var srcPath = "./src"

function aliases() {
  var files = fs.readdirSync(srcPath)
  return files
    .map((file) => path.join(srcPath, file))
    .map((path) => fs.statSync(path).isDirectory())
    .map((dirPath) => () => {
      return {
        [path.basename(dirPath)]: dirPath,
      }
    })
}
module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "module-resolver",
      {
        root: [srcPath],
        alias: aliases(),
      },
    ],
  ],
}
