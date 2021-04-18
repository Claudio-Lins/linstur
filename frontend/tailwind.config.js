module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      divideColor: ['group-hover'],
      backgroundColor: ['group-focus'],
      scale: ['focus-within'],
    },
  },
  plugins: [],
};
