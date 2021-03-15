const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
  const borderGradient = {
    '.border-gradient': {
      borderImageSlice: '1'
    },
    '.border-gradient-purple': {
      borderImageSource: 'linear-gradient(to left, #743ad5, #d53a9d)'
    }
  }

  addComponents(borderGradient)
})
