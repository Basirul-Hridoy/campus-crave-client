/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // custom colors here
        'primary': '#173253',
        'secondary': '#F97316',
        'accent': '#ADB0B8',
        'dashboard-primary': '#182237',
        'dashboard-secondary': '#151C2C',
      },
    },
  },
  plugins: [],
}