const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
  const typography = {
    '.text-hero': {
      fontFamily: theme('fontFamily.display'),
      fontSize: '2.25rem'
    },
    '.text-h1': {
      fontFamily: theme('fontFamily.display'),
      fontSize: '1.75rem'
    },
    '.text-h2': {
      fontFamily: theme('fontFamily.display'),
      fontSize: '1.5rem'
    },
    '.text-h3': {
      fontFamily: theme('fontFamily.display'),
      fontSize: '1.125rem'
    },
    '.text-h4': {
      fontFamily: theme('fontFamily.display'),
      fontSize: '1.25rem'
    },
    '.text-h5': {
      fontFamily: theme('fontFamily.display'),
      fontSize: '1rem'
    },
    '.text-body': {
      fontFamily: theme('fontFamily.body'),
      fontSize: '1.2rem',
      letterSpacing: '.08rem',
      lineHeight: '1.8rempx'
    },
    '.text-button': {
      fontFamily: theme('fontFamily.body'),
      fontSize: '1rem',
      lineHeight: '18px',
      fontWeight: 600
    }
  }

  addComponents(typography, {
    variants: ['responsive', 'hover']
  })
})
