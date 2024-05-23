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
        // 'primary': "#1E293B",
        // 'secondary': "#94A3B8",

        'primary': "#1E293B",
        'secondary': "#93A1B8",
        'brown': "#635943",
        'text': "#E3C78F",
        'light': "#A39D90",
        'blue': "#76ABFF"
        
      }),
      textColor: {
        'primary': '#E3C78F',
        'dark': "#1E293B",
        'light': "#A39D90",
        'blue': "#76ABFF"
      },
      borderColor: {
        'primary': '#E3C78F',
        'blue': "#76ABFF",
        'dark': "#1E293B",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        'hero': "url('/fondo.webp')",
      }
    },
  },
  plugins: [],
}

