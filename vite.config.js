import { defineConfig } from 'vite';
import PurgeCSS from 'vite-plugin-purgecss';

export default defineConfig({
  plugins: [
    PurgeCSS({
      content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
      safelist: ['safelist'],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "@/styles/variables.less";`
      }
    }
  }
});
