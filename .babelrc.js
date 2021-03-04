module.exports = (api) => {
  const isTest = api.env('test')

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
      ],
      'babel-plugin-macros',
      ['styled-components', { ssr: true }]
    ]
  }
}
