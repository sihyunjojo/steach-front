/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dongle: ["Dongle", "sans-serif"],
        "noto-sans": ['"Noto Sans Korean"', "sans-serif"],
        malang: ["HancomMalangMalang-Regular", "sans-serif"],
        lineseed: ['lineseed', 'sans-serif'],
      },
      colors: {
        ivory: "#FFFFF0",
        lightBeige: "#F5F5DC",
        lightPink: "#FFB6C1",
        pastelBlue: "#AEC6CF",
        darkGray: "#A9A9A9",
        darkNavy: "#000080",
        coral: "#FF7F50",
        pastelGreen: "#77DD77",
        lightGray: "#D3D3D3",
        silver: "#C0C0C0",
      },
    },
  },
  plugins: [],
};
