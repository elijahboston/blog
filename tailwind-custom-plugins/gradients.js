const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
  const gradients = {
    '.gradient-border': {
      borderImageSlice: '1',
      borderImageSource: theme('colors.primaryGradient')
    },
    // use with bg-clip-text
    '.gradient-text': {
      '-webkit-text-fill-color': 'transparent',
      background: theme('colors.primaryGradient')
    }
  }

  addComponents(gradients, {
    variants: ['responsive', 'hover']
  })
})
