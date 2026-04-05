/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-tertiary-fixed": "#002203",
        "on-primary-fixed": "#0f1a37",
        "surface-variant": "#e2e2e2",
        "outline": "#76767e",
        "on-tertiary-container": "#009f24",
        "on-background": "#1a1c1c",
        "error": "#ba1a1a",
        "surface-container-lowest": "#ffffff",
        "primary": "#010a27",
        "surface-container": "#eeeeee",
        "on-tertiary": "#ffffff",
        "on-primary": "#ffffff",
        "on-surface": "#1a1c1c",
        "surface": "#f9f9f9",
        "on-secondary": "#ffffff",
        "secondary-fixed-dim": "#e4c285",
        "tertiary-container": "#002904",
        "primary-fixed-dim": "#bbc5eb",
        "on-primary-container": "#7e89ab",
        "inverse-on-surface": "#f0f1f1",
        "primary-fixed": "#dae1ff",
        "on-error-container": "#93000a",
        "background": "#f9f9f9",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-tertiary-fixed-variant": "#00530e",
        "on-surface-variant": "#45464d",
        "secondary-fixed": "#ffdea4",
        "secondary": "#745a27",
        "surface-tint": "#535d7e",
        "outline-variant": "#c6c6ce",
        "tertiary": "#000f01",
        "surface-dim": "#dadada",
        "surface-container-highest": "#e2e2e2",
        "inverse-primary": "#bbc5eb",
        "on-secondary-container": "#795f2b",
        "tertiary-fixed-dim": "#00e639",
        "surface-container-low": "#f3f3f3",
        "inverse-surface": "#2f3131",
        "tertiary-fixed": "#72ff70",
        "primary-container": "#16213e",
        "on-secondary-fixed": "#261900",
        "on-primary-fixed-variant": "#3b4665",
        "surface-container-high": "#e8e8e8",
        "surface-bright": "#f9f9f9",
        "on-secondary-fixed-variant": "#5a4312",
        "secondary-container": "#fedb9b"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      fontFamily: {
        headline: ["Noto Serif", "serif"],
        body: ["Inter", "sans-serif"],
        label: ["Space Grotesk", "monospace"]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
