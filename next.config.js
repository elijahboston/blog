const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = (phase, defaultConfig) => {
  const config = withBundleAnalyzer(defaultConfig)

  return {
    ...config,
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
      config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
      config.plugins.push(
        new webpack.ProvidePlugin({
          clsx: 'classnames'
        })
      )
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader']
      })
      // Important: return the modified config
      return config
    }
  }
}
