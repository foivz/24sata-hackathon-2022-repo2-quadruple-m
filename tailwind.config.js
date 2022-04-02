const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      ...colors,
      gray: colors.slate,
      primary: colors.slate,
      secondary: colors.slate,
      accent: colors.indigo
    },
    extend: {},
  },
  plugins: [],
}
