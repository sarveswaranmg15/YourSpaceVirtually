/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          950: "#1e1b4b",
        },
      },

      boxShadow: { card: "0 8px 24px rgba(0,0,0,0.08)" },
      borderRadius: { xl: "1rem" },
      container: {
        center: true,
        padding: { DEFAULT: "1rem", sm: "2rem", lg: "3rem", xl: "4rem" },
      },
    },
  },
  plugins: [],
};
