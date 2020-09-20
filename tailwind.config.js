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
      display: ["Oxanium", "sans-serif"],
      body: ["Source Serif Pro", "sans-serif"],
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "4": "4px",
    },
    extend: {
      colors: {
        "deep-purple": "#8A2387",
        pinkish: "#E94057",
        "off-white": "#F2F2F2",
        "dark-brown": "#242614",
        "section-1": "#C2C5B7",
        "section-2": "#647E90",
        "section-3": "#A8BAB3",
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
