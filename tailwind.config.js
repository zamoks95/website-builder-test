module.exports = {
  content: ['./dist/**/*.html', './src/**/*.{js,jsx,ts,tsx}', './*.html'],
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')],
  variants: {
    extend: {
      opacity: ['disabled'],
      scrollbar: ['rounded']
    }
  }
}
