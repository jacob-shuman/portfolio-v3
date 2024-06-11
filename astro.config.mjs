import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://jacobshuman.ca",
  integrations: [tailwind(), svelte(), sitemap()],
  output: "server",
  adapter: cloudflare(),
  vite: { ssr: { external: ["svgo"] } },
});
