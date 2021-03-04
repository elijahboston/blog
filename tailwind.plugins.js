const plugin = require('tailwindcss/plugin')

module.exports.plugins = [
  plugin(function ({ addComponents, theme }) {
    const typography = {
      '.text-hero': {
        fontFamily: theme('fontFamily.serif'),
        fontSize: '2.25rem',
        lineHeight: '36px',
        fontWeight: 600
      },
      '.text-hero-lg': {
        fontSize: '3.875rem',
        lineHeight: '72px'
      },
      '.text-h1': {
        fontFamily: theme('fontFamily.serif'),
        fontSize: '1.75rem',
        lineHeight: '28px'
      },
      '.text-h1-lg': {
        fontSize: '3.875rem',
        lineHeight: '48px'
      },
      '.text-h2': {
        fontFamily: theme('fontFamily.serif'),
        fontSize: '1.5rem',
        lineHeight: '28px'
      },
      '.text-h2-lg': {
        fontSize: '2.25rem'
      },
      '.text-h3': {
        fontFamily: theme('fontFamily.sans'),
        fontSize: '1.125rem',
        lineHeight: '20px'
      },
      '.text-h4': {
        fontFamily: theme('fontFamily.serif'),
        fontSize: '1.25rem',
        lineHeight: '24px'
      },
      '.text-h5': {
        fontFamily: theme('fontFamily.sans'),
        fontSize: '1rem'
      },
      '.text-body': {
        fontFamily: theme('fontFamily.sans'),
        fontSize: '1rem',
        lineHeight: '24px'
      },
      '.text-body-secondary': {
        fontFamily: theme('fontFamily.sans'),
        fontSize: '.875rem',
        lineHeight: '20px'
      },
      '.text-content-body': {
        fontFamily: theme('fontFamily.serif'),
        fontSize: '1rem',
        lineHeight: '24px'
      },
      '.text-content-body-secondary': {
        fontFamily: theme('fontFamily.serif'),
        fontSize: '.875rem',
        lineHeight: '14px'
      },
      '.text-review': {
        fontFamily: theme('fontFamily.serif'),
        fontSize: '.875rem',
        lineHeight: '14px'
      },
      '.text-button': {
        fontFamily: theme('fontFamily.sans'),
        fontSize: '1rem',
        lineHeight: '18px',
        fontWeight: 600
      }
    }

    const buttons = {
      // These are only responsible for:
      // - Button background + border style
      // - Base text color
      '.btn': {
        padding: '12px 48px',
        borderRadius: theme('borderRadius.full'),
        color: theme('colors.white')
      },
      '.btn-primary': {
        backgroundColor: theme('colors.daisyblush'),
        '&:hover': {
          backgroundColor: theme('colors.violet')
        }
      },
      '.btn-secondary': {
        borderWidth: '2px',
        color: theme('colors.ming'),
        borderColor: theme('colors.ming'),
        backgroundColor: 'transparent',
        '&:hover': {
          color: theme('colors.nileBlue'),
          borderColor: theme('colors.nileBlue'),
          backgroundColor: theme('colors.white')
        }
      },
      '.btn-right-half': {
        borderTopRightRadius: 9999,
        borderBottomRightRadius: 9999,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
      }
    }

    addComponents(
      { ...typography, ...buttons },
      {
        variants: ['responsive', 'hover']
      }
    )
  })
]
