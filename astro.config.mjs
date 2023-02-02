import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import netlify from "@astrojs/netlify/functions";
import solidJs from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://jacob-shuman.ca",
  integrations: [tailwind(), svelte(), solidJs(), sitemap()],
  output: "server",
  adapter: netlify(),
});
