/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: ["selector", "[data-mode='dark']"],
  darkMode: "class",
  // darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        indieFlower: ["Indie Flower", "cursive"],
        winkySans: ["Winky Sans", "sans-serif"],
      },
      fontWeight: {
        thin: "100",
        extraLight: "200",
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extraBold: "800",
        black: "900",
      },
      height: {
        350: "150px",
      },
    },
  },
  plugins: [],
};

// export default {

// };
