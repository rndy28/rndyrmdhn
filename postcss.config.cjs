module.exports = {
  purge: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@nordice/core/**/*.{js,mjs}",
  ],
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
