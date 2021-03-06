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
    require('./tailwind-custom-plugins/typography')
  ],
  theme
}
