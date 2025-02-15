/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        "custom-ease": "cubic-bezier(0.65, 0.05, 0.36, 1)",
      },
      colors: {
        primary: {
          DEFAULT: "#DFBA4E",
          100: "#EDC759",
          200: "#F6F0E7",
          300: "#FFF8F1",
        },
        myGray: {
          DEFAULT: "#7B7670",
          100: "#959089",
          200: "#CCC6BE",
          300: "#E8E1D9",
        },
      },
    },
  },
  plugins: [],
};
