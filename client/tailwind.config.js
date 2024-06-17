/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      stroke: {
        'hover': '{}' // Add hover variant
      }
    },
  },
  plugins: [],
}

