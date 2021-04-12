const theme = require('./tailwind.theme').theme

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  variants: {
    borderRadius: ['responsive', 'last'],
    borderColor: ['group-hover'],
    textColor: ['group-hover']
  },
  plugins: [
    require('./tailwind-custom-plugins/anchors'),
    require('./tailwind-custom-plugins/typography'),
    require('./tailwind-custom-plugins/gradients'),
    require('./tailwind-custom-plugins/post-nav')
  ],
  theme
}
