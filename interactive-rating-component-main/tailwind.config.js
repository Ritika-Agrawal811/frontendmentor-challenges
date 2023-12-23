/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./**/*.html", "./**/*.js"],
  darkMode: false, // or 'media' or 'class'
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
      xs: "26.5em",
      sm: "40em",
      md: "48em",
      lg: "64em",
      xxl: "90em",
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
