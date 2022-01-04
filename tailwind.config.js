module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "bing-chilling": "url('/src/assets/cena.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
