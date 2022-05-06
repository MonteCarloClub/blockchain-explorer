import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

/** https://vitejs.dev/config/ */ 
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  // 打包后的根路径
  base: "/",
  // 开发时的代理
  server: {
    proxy: {
      '/api/transactions': {
        target: 'https://api.blockchair.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, 'ethereum')
      },
    }
  }
})
