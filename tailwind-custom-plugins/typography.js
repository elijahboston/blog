const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
  const typography = {
    '.text-hero': {
      fontFamily: theme('fontFamily.display'),
      fontSize: '2.25rem',
      lineHeight: '2.5rem'
    },
    '.text-h1': {
      fontFamily: theme('fontFamily.display'),
      fontSize: '2.25rem'
    },
    '.text-h2': {
      fontFamily: theme('fontFamily.display'),
      fontSize: '2rem'
    },
    '.text-h3': {
      fontFamily: theme('fontFamily.display'),
      fontSize: '1.8rem'
    },
    '.text-h4': {
      fontFamily: theme('fontFamily.display'),
      fontSize: '1.5rem'
    },
    '.text-h5': {
      fontFamily: theme('fontFamily.display'),
      fontSize: '1rem'
    },
    '.text-body': {
      fontFamily: theme('fontFamily.body'),
      fontSize: '1.2rem',
      letterSpacing: '.08rem',
      lineHeight: '2.3rem'
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
