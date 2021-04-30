module.exports = {
  purge: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: require("./tailwind.theme").theme,
  variants: {
    borderRadius: ["responsive", "last"],
  },
  plugins: require("./tailwind.plugins").plugins,
}
