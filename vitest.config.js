import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { test } from 'vitest'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/notes/dist/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    globals:true,
    eviroment: 'jsdom',
  }
})