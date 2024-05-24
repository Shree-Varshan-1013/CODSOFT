/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 8s linear infinite",
      },
      keyframes: {
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
      },
      colors:{
        thBlue:"#68b8d1",
        thBlue2:"#8cb3a2",
        thYellow:"#C4B269",
        thYellow2:"#f8d95b",
        thBlack:"#181c1e"
      }
    },
  },
  plugins: [],
}

