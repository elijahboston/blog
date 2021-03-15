const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
  const buttons = {
    '.anchor': {
      transition: 'color 0.2 ease',
      color: theme('colors.anchor')
    },
    '.primary-anchor': {
      borderWidth: '1px',
      borderStyle: 'solid',
      padding: '.5rem 1rem',
      display: 'inline-flex',
      transition: 'color 200ms ease',
      textDecoration: 'none',
      alignSelf: 'center',
      justifyContent: 'center',
      color: theme('colors.buttons.color'),
      borderColor: theme('colors.buttons.borderColor'),
      borderRadius: theme('borderRadius.md'),
      '&:hover': {
        color: theme('colors.buttons.hoverColor'),
        borderColor: theme('colors.buttons.hoverBorderColor')
      }
    },
    '.primary-anchor-active': {
      color: theme('colors.secondary'),
      borderColor: theme('colors.secondary')
    }
  }

  addComponents(buttons, {
    variants: ['responsive', 'hover']
  })
})
