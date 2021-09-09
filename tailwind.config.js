const theme = require('./tailwind.theme').theme

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  variants: {
    borderRadius: ['responsive', 'last'],
    borderColor: ['group-hover'],
    textColor: ['group-hover']
  },
  plugins: [],
  theme
}
