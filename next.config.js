// const SpriteLoaderPlugin = require("svg-sprite-loader/plugin")

module.exports = {
  webpack: function (config, { webpack }) {
    const rules = [
      // {
      //   test: /\.svg$/,
      //   use: ["svg-sprite-loader", "svgo-loader"],
      // },
      {
        test: /\.md$/,
        use: "raw-loader",
      },
    ]
    config.module.rules.push(...rules)

    const plugins = [
      // new SpriteLoaderPlugin(),
      new webpack.ProvidePlugin({
        clsx: "classnames",
      }),
    ]

    config.plugins.push(...plugins)

    return config
  },
}
