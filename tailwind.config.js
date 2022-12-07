/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Cera Round Pro, Segoe UI, Roboto, Oxygen'],
      'code' : ['ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'],
    },
    extend: {
      colors: {
        'navbar': '#20232a',
        'navbar90': '#373940',
      },
    },
  },
  plugins: [],
}
