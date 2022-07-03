import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteCommonjs()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    }
  },
  server: {
    port: 3000,
    open: true,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://www.xxxx.com.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace('/api', '')
      }
    }
  }
})
