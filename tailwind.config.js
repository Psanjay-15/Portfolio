/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        borderColor: {
          gradient: "linear-gradient(45deg, #F3A7B0, #F0C6C6)", // Example gradient
        },
      },
      animation: {
        slide: "slide 2s linear infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.border-gradient': {
            borderImage: 'linear-gradient(45deg, #F3A7B0, #F0C6C6) 1',
          },
        },
        ['responsive', 'hover']
      )
    }
  ],
};
