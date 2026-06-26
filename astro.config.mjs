import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [tailwind(), react(), keystatic()],
  output: 'hybrid',
  adapter: cloudflare(),
  compressHTML: true,
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },
});
