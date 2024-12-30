/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f7ff",
          100: "#e0f0ff",
          200: "#bae2ff",
          300: "#7cc4ff",
          400: "#36a6ff",
          500: "#0c8fff",
          600: "#0077e6",
          700: "#005db4",
        },
        secondary: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e9eef5",
          300: "#d5dde8",
          400: "#9ba8b9",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
        },
      },
    },
  },
  plugins: [],
};
