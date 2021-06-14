const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addBase, theme }) {
  const baseFontStyles = {
    color: theme('colors.gray.200')
  }

  addBase({
    h1: {
      fontFamily: theme('fontFamily.display'),
      fontSize: theme('fontSize.xl'),
      marginBottom: theme('margin.5'),
      ...baseFontStyles
    },
    h2: {
      fontFamily: theme('fontFamily.display'),
      fontSize: theme('fontSize.lg'),
      marginBottom: theme('margin.5'),
      ...baseFontStyles
    },
    h3: {
      fontFamily: theme('fontFamily.display'),
      fontSize: theme('fontSize.md'),
      marginBottom: theme('margin.5'),
      ...baseFontStyles
    },
    p: {
      fontFamily: theme('fontFamily.body'),
      fontSize: theme('fontSize.md'),
      marginBottom: theme('margin.5'),
      ...baseFontStyles
    },
    ul: {
      listStyleType: 'circle',
      paddingLeft: theme('margin.5'),
      marginBottom: theme('margin.5')
    },
    li: {
      fontFamily: theme('fontFamily.body'),
      fontSize: theme('fontSize.md'),
      ...baseFontStyles
    },
    a: {
      color: 'white',
      borderBottomWidth: 1,
      borderBottomStyle: 'solid',
      borderBottomColor: theme('colors.gray.500')
    }
  })
})
