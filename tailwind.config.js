/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': "#1E293B",
        'secondary': "#94A3B8"
      }),
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      }
    },
  },
  plugins: [],
}

