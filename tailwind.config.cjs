/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@nordice/core/**/*.{js,mjs}",
  ],
  presets: [require("@nordice/tailwind-config")],
  theme: {
    extend: {
      fontFamily: {
        manjari: ['"Manjari"', "sans-seriff"],
        spaceMono: ['"Space Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
