const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
  const anchors = {
    '.anchor': {
      transition: 'color 0.2 ease',
      // padding: '.5rem 1rem',
      display: 'inline-flex',
      textDecoration: 'none',
      alignSelf: 'center',
      justifyContent: 'center'
    },
    '.anchor-inline': {
      borderWidth: '2px',
      borderStyle: 'solid'
    }
  }

  addComponents(anchors, {
    variants: ['responsive', 'hover']
  })
})
