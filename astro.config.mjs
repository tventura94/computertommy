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
      allowedHosts: ["devserver-preview--tiny-stroopwafel-ab121c.netlify.app"],
    },
  },
  integrations: [sitemap()],
  trailingSlash: "always",
});
