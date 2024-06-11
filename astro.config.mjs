import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://jacobshuman.ca",
  integrations: [tailwind(), svelte(), sitemap(), icon()],
  output: "server",
  adapter: cloudflare(),
  // vite: { ssr: { external: ["svgo"] } },
});
