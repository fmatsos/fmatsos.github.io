import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://www.matsos.dev',
  integrations: [icon()],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
