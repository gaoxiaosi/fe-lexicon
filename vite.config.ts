import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: '/fe-lexicon/',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
