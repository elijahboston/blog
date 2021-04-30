const plugin = require("tailwindcss/plugin")

module.exports.plugins = [
  plugin(function ({ addComponents, theme }) {
    const typography = {
      ".text-hero": {
        fontFamily: theme("fontFamily.serif"),
        fontSize: "2.25rem",
        lineHeight: "36px",
      },
      ".text-hero-lg": {
        fontSize: "3.875rem",
        lineHeight: "72px",
      },
      ".text-h1": {
        fontFamily: theme("fontFamily.serif"),
        fontSize: "1.75rem",
        lineHeight: "28px",
      },
      ".text-h1-lg": {
        fontSize: "3.875rem",
        lineHeight: "48px",
      },
      ".text-h2": {
        fontFamily: theme("fontFamily.serif"),
        fontSize: "1.5rem",
        lineHeight: "28px",
      },
      ".text-h2-lg": {
        fontSize: "2.25rem",
      },
      ".text-h3": {
        fontFamily: theme("fontFamily.sans"),
        fontSize: "1.125rem",
        lineHeight: "20px",
      },
      ".text-h4": {
        fontFamily: theme("fontFamily.serif"),
        fontSize: "1.25rem",
        lineHeight: "24px",
      },
      ".text-h5": {
        fontFamily: theme("fontFamily.sans"),
        fontSize: "1rem",
      },
      ".text-body": {
        fontFamily: theme("fontFamily.sans"),
        fontSize: "1rem",
        lineHeight: "24px",
      },
      ".text-body-secondary": {
        fontFamily: theme("fontFamily.sans"),
        fontSize: ".875rem",
        lineHeight: "20px",
      },
      ".text-content-body": {
        fontFamily: theme("fontFamily.serif"),
        fontSize: "1rem",
        lineHeight: "24px",
      },
      ".text-content-body-secondary": {
        fontFamily: theme("fontFamily.serif"),
        fontSize: ".875rem",
        lineHeight: "14px",
      },
      ".text-anchor": {
        fontFamily: theme("fontFamily.sans"),
        textDecoration: "none",
      },
      ".text-button": {
        fontFamily: theme("fontFamily.sans"),
      },
    }

    const buttons = {
      // These are only responsible for:
      // - Button background + border style
      // - Base text color
      ".anchor": {
        transition: "color 0.2 ease",
        color: "#000",
      },
      ".primary-anchor": {
        borderWidth: "1px",
        borderStyle: "solid",
        padding: ".5rem 1rem",
        display: "inline-flex",
        transition: "color 200ms ease",
        textDecoration: "none",
        alignSelf: "center",
        justifyContent: "center",
        color: theme("colors.gray.600"),
        borderColor: theme("colors.gray.600"),
        borderRadius: theme("borderRadius.md"),
        "&:hover": {
          color: theme("colors.gray.100"),
          borderColor: theme("colors.gray.100"),
        },
      },
      ".primary-anchor-active": {
        color: theme("colors.secondary"),
        borderColor: theme("colors.secondary"),
      },
    }

    addComponents(
      { ...buttons, ...typography },
      {
        variants: ["responsive", "hover"],
      }
    )
  }),
]
