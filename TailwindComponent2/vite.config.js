// vite.config.js
import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss'
export default defineConfig({
    base: '',
    plugins: [],
    resolve: {
      alias: {
        images: "./images"
      }
    },
    css: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: './index.html'
        }
      }
    }
  });