/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      "colors": {
        "brown": {
          "50": "#F0ECEA",
          "100": "#DFD7D3",
          "200": "#BFB0A6",
          "300": "#9F887A",
          "400": "#796558",
          "500": "#4C3F37",
          "600": "#3E342D",
          "700": "#2C2520",
          "800": "#1E1915",
          "900": "#0F0C0B"
        },
        "green": {
          "50": "#F0F8ED",
          "100": "#E1F1DA",
          "200": "#C1E1B2",
          "300": "#A3D38D",
          "400": "#83C364",
          "500": "#67B044",
          "600": "#518C36",
          "700": "#3E6B29",
          "800": "#29461B",
          "900": "#15250E"
        }
      },

      screens: {
        'xs': '350px',
        'apollo': '770px'
      },
    },
  },
  plugins: [],
}
