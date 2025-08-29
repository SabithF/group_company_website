/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        messiri: ["El Messiri", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        montaga: ["Montaga", "sans-serif"],
        monteCarlo: ["MonteCarlo", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],

      },
      colors: {
        meezanGold: {
          DEFAULT: '#E0B973',
          light: '#d5b874',
          dark: '#8c6e32',
          headL: '#E69508',
        },
        mzBlue: {
          specialText: '#284b63',
          headingText: '#778da9',
          borderBl: '#e2d7ac'
        },
        grayText: '#8F8282',
        lightYellow: '#FFFCF5',
        textBlue:'#031458',
        cardBlue:'#BCC2DD',
        visionH1:'#EAEEFC',
        textDarkBlue:'#031458',
        cusiveFont:'#414B71',
      }
    },
  },
  plugins: [],
}
