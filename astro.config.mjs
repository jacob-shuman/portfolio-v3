import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import netlify from "@astrojs/netlify/functions";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://jacob-shuman.ca",
  integrations: [tailwind(), svelte(), sitemap()],
  output: "server",
  adapter: netlify(),
});
