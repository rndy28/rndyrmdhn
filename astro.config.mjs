import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://rndyrmdhn.vercel.app",
  integrations: [
    react(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
    }),
    tailwind(),
  ],
  vite: {
    ssr: {
      noExternal: ["astro-seo"],
    },
  },
});
