module.exports = {
  content: ['./dist/**/*.html', './src/**/*.{js,jsx,ts,tsx}', './*.html'],
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')],
  purge: {
    options: {
      safelist: [{ pattern: /^(bg|text)-/ }]
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      scrollbar: ['rounded']
    }
  }
}
