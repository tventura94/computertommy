// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";
import lenis from "astro-lenis";

// https://astro.build/config
export default defineConfig({
  site: "https://computertommy.com/",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap(), lenis()],
  trailingSlash: "always",
});
