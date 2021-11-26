module.exports = {
  purge: ['./src/**/*.{js,js,js,js}', './public/index.html', './components/**/*.js', './pages/**/*.js'],
  darkMode: false,
  theme: {
    extend: {
      spacing: {
          semi: '28rem'
      },
      fontFamily: {
        Poppins: ["'Poppins', sans-serif"],
        Quicksand: ["'Quicksand', sans-serif"]
      },
      colors: {
        Primary_bg: "#edede9",
        Secondary_bg: "#FDFCF8",
        Orange: "#E15638",
        Black: "#24242c",
        Text: "#fefaec",
      }

    },
  },
  variants: {
    extend: {
      padding: ['hover'],
      backgroundColor: ['active'],
      'postcss-focus-visible': {},
    },
  },
  plugins: [],
}