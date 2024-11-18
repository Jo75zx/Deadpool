/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        d1: "url('../imgs/ded1w.jpg')",
        d2: "url('../imgs/ded2w.jpg')",
        d3: "url('../imgs/ded3w.jpeg')",
        mw: "url('../imgs/mw.jpeg')",
      },
      fontFamily: {
        edu: ["edu", "sans-serif", "ui-sans-serif"],
        ded: ["ded", "sans-serif", "ui-sans-serif"],
      },
      transitionProperty: {
        opacity: "opacity",
      },
      transitionDuration: {
        300: "300ms",
        1000: "1000ms", // Add a longer duration for smoother transitions
      },
      boxShadow: {
        "text-shadow":
          "2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-custom": {
          textShadow:
            "2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff",
        },
        ".hide-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".hide-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
