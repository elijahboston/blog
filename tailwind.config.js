const theme = require('./tailwind.theme').theme

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  variants: {
    borderRadius: ['responsive', 'last']
  },
  plugins: [
    require('./tailwind-custom-plugins/buttons'),
    require('./tailwind-custom-plugins/typography'),
    require('./tailwind-custom-plugins/border-gradient')
  ],
  theme
}
