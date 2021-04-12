const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
  const postNav = {
    '.postNav': {
      transition: 'color 0.2 ease',
      color: theme('colors.anchor')
    },
    '.postNavHover': {
      '& > div > .cube': {
        fill: '#fff',
        borderColor: '#fff'
      },
      '& > div > div': {
        color: '#fff'
      }
    }
  }

  addComponents(postNav, {
    variants: ['responsive', 'hover']
  })
})
