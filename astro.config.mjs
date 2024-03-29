import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

const REPO_NAME = "/astro-blog/";

// https://astro.build/config
export default defineConfig({
  site: "https://pabcrudel.github.io" + REPO_NAME,
  base: import.meta.env.PROD ? REPO_NAME : undefined,
  integrations: [sitemap()]
});