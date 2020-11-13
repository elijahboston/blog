module.exports = {
  purge: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // screens: {
    //   sm: "640px",
    //   md: "768px",
    //   lg: "1024px",
    //   xl: "1280px",
    // },
    fontFamily: {
      display: ["Source Sans Pro", "sans-serif"],
      body: ["Source Serif Pro", "serif"],
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "4": "4px",
    },
    extend: {
      colors: {
        body: "#2e3d50",
        secondary: "rgb(255 150 125)",
        footerBackground: "#A66252", //"#718096",
        anchor: "rgb(249, 38, 114)",
      },
      // spacing: {
      //   "96": "24rem",
      //   "128": "32rem",
      // },
    },
  },
  variants: {
    borderRadius: ["responsive", "last"],
  },
  plugins: [],
}
