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
          100: "#EDC759",
          200: "#F6F0E7",
          300: "#FFF8F1",
          DEFAULT: "#DFB146",
        },
        myGray: {
          100: "#959089",
          200: "#CCC6BE",
          300: "#E8E1D9",
          400: "#767471",
          500: "#666666",
          DEFAULT: "#7B7670",
        },
      },
      keyframes: {
        slideIn: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        slideOut: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "slide-in": "slideIn 0.15s ease-out forwards",
        "slide-out": "slideOut 0.15s ease-in forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
