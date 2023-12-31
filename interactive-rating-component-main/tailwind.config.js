/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#202731",
        accent: "hsl(25, 97%, 53%)",
        gray: {
          100: "#848b95",
          400: "#262f38",
          500: "#212832",
          900: "#141519",
        },

        blue: {
          900: "#121645",
        },
      },
      fontFamily: {
        overpass: ["Overpass"],
      },
    },
    screens: {
      xs: "20em",
      sm: "40em",
      md: "48em",
      lg: "64em",
      xl: "90em",
    },
  },
  variants: {},
  plugins: [],
  safelist: [
    {
      pattern: /(bg|border|text)-(gray|primary|accent|footer|dark)/,
    },
  ],
};
