import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: import.meta.env.PROD ? '/astro-blog/' : undefined
});
