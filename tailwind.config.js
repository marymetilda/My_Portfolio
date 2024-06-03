/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "linear-blue":
          "linear-gradient(180deg, #004040 0%, #ffffff 50%, #004040 100%)",
        "linear-blue-white":
          "linear-gradient(200deg, #ffffff 0%, #004040 50%, #ffffff 100%)",
        "linear-dark-blue":
          "linear-gradient(180deg, #000000 0%, #004040 50%, #000000 100%)",
        "linear-indigo":
          "linear-gradient(150deg, transparent 0%, #3f51b5 20%, #3f51b5 40%, #3f51b5 60%, #3f51b5 80%, transparent 100%)",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        "grey-1": "#fcf6ff33",
        "white-1": "#fcf6f4",
        black: "#000",
        white: "#fff",
      },
      animation: {
        "flash-top": "animate-flash-top 2s linear",
        left: "animate-left 2s linear",
        "ltr-linear-infinite": "move-bg 10s linear infinite",
        appear: "animate-appear 1s ease-in-out",
        "appear-slow": "animate-appear 2s ease-in-out",
        roll: "roll 3s infinite ",
        movement: "movement 5s infinite",
      },
      keyframes: {
        roll: {
          "0%, 10%, 20%, 30%, 40%, 60%, 70%, 80%, 90%, 100%": {
            transform: "scale(1)",
          },
          "50%": { transform: "scaleY(0)" },
        },

        movement: {
          "0%, 20%, 40%, 60%, 80%, 100%": { transform: "translateX(0rem)" },
          "10%": { transform: "scale(120%)" },
          "30%": { transform: "scale(100%)" },
          "50%": { transform: "scale(120%)" },
          "70%": { transform: "scale(100%)" },
          "90%": { transform: "scale(120%)" },
        },
        "animate-flash-top": {
          from: { opacity: 0, bottom: 0, transform: "translateY(20vh)" },
          to: { opacity: 1, bottom: 0, transform: "translateY(0)" },
        },
        "animate-left": {
          from: { opacity: 0, right: 0, transform: "translateX(20vw)" },
          to: { opacity: 1, right: 0, transform: "translateX(-5vw)" },
        },
        "move-bg": {
          "0%": { "background-position": "0 0" },
          "100%": { "background-position": "1000px 0" },
        },
        "animate-appear": {
          "0%": { opacity: 0 },
          "50%": { opacity: 0.5 },
          "100%": { opacity: 1 },
        },
      },
    },
    fontFamily: {
      "great-vibes": ["Great Vibes"],
    },
  },

  plugins: [],
};
