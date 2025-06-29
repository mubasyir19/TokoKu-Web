/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-yellow-500",
    "bg-orange-500",
    "bg-sky-500",
    "bg-emerald-500",
    "bg-red-500",
    "bg-gray-400",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        splash: "url('/images/background-splash.png')",
        splash2: "url('/images/background2.png')",
      },
      colors: {
        "yellow-primary": "#FFC92B",
        "yellow-darken": "#D69F00",
      },
    },
  },
  plugins: [],
};
