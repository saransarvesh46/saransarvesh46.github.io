import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

/** Converts Vite's injected <link rel="stylesheet"> for the main CSS bundle
 *  to a non-render-blocking preload+onload pattern, eliminating the
 *  "Render-blocking resources" PageSpeed warning. */
const deferMainCss = () => ({
  name: 'defer-main-css',
  apply: 'build',
  transformIndexHtml(html) {
    return html.replace(
      /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/g,
      (_, href) =>
        `<link rel="preload" as="style" crossorigin href="${href}" onload="this.onload=null;this.rel='stylesheet'">` +
        `\n    <noscript><link rel="stylesheet" crossorigin href="${href}"></noscript>`
    );
  },
});

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    deferMainCss(),
  ],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
});
