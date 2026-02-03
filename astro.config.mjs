import { defineConfig } from 'astro/config';

// GitHub Pages deploy workflow passes --site and --base at build time,
// so we keep config minimal and compatible.
export default defineConfig({
  output: 'static',
  srcDir: '.',
});
