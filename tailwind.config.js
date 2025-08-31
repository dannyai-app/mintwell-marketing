/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "mintwell-blue": "#1e40af",
        "mintwell-teal": "#0891b2",
        "mintwell-navy": "#1e293b",
        "mintwell-light": "#f8fafc",
        "mintwell-gray": "#e5e7eb"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: []
}
