/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'GloriaHallelujah-Regular': ['GloriaHallelujah-Regular', 'sans-serif'],
        'RecklessNeue-Thin': ['RecklessNeue-Thin', 'sans-serif'],
        'RecklessNeue-ThinItalic': ['RecklessNeue-ThinItalic', 'sans-serif'],
        'Inter-Variable': ['Inter-Variable', 'sans-serif']
      },
    },
  },
  plugins: [],
}