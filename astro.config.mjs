// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://YAlZayat.com',
  base: '/', // Set to '/' if your GitHub repository is named YousefAlzayat.github.io
  vite: {
    plugins: [tailwindcss()],
  },
});