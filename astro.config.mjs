// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://computertommy.com/",
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true, // Allow Netlify preview URLs and other hosts in dev
    },
  },
  integrations: [sitemap()],
  trailingSlash: "always",
});
