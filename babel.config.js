module.exports = (api) => {
  const isTest = api.env('test')
  api.cache(true)

  return {
    presets: [
      [
        'next/babel',
        !isTest ? { 'preset-react': { runtime: 'automatic' } } : {}
      ]
    ],
    plugins: [
      [
        'babel-plugin-module-resolver',
        {
          root: ['./src/'],
          alias: {
            '~': './src'
          }
        }
      ]
    ]
  }
}
