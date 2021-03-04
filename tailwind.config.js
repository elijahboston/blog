const plugins = require('./tailwind.plugins').plugins
const theme = require('./tailwind.theme').theme

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  variants: {},
  plugins,
  theme
}
