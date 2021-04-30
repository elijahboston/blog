module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      require.resolve("babel-plugin-module-resolver"),
      {
        root: ["./src/"],
        alias: {
          "~": "./src",
        },
      },
    ],
  ],
}
