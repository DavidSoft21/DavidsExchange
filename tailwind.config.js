/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: ["./src/**/*.{vue,html,js}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      display: ["Gilroy", "sans-serif"],
      body: ["Graphik", "sans-serif"],
    },
    extend: {
      colors: {
        cyan: "#9cdbff",
      },
      margin: {
        96: "24rem",
        128: "32rem",
      },
    },
  },
  variants: {
    opacity: ["responsive", "hover"],
  },
  plugins: [],
};
