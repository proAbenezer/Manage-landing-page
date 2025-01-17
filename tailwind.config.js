/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "760px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        brightRed: "hsl(12, 88%, 59%)",
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRedSupLight: "hsl(12, 88%, 95%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 63%)",
        veryDarkBlue: "hsl(227, 12%, 13%)",
        veryPaleRed: "hsl(13,100%, 96%)",
        veryLightGray: "hsl(0, 0%, 95%)",
      },
    },
  },
  plugins: [],
};
