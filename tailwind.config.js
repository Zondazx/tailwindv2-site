module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1992d4',
      },
      spacing: {
        '72': '18rem',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"]
      // backgroundColor: ["responsive", "hover", "focus", "active"]
    },
  },
  plugins: [],
};
