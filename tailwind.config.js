module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "title-red": "#bd0202",
        "title-black": "#222222",
        "title-hover": "#9d242c",
      },
      fontFamily:{
        Nunito:["'Nunito', sans-serif"],
      },
    },
    container: {
      center: true,
      padding:"1rem",
      screens: {
        lg: "1240px",
        xl: "1240px",
        "2xl": "1240px",
      },
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
