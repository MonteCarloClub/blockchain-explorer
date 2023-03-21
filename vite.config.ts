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
      '/dev': {
        target: 'http://106.14.244.78:8888', // zzp's public server
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/dev/, ''),
      },
      '/sm': {
        target: 'http://106.14.244.78:8080', // zzp's public server
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/sm/, ''),
      },
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#000000',
          'link-color': '#0057a8',
          'select-item-selected-bg': '#AAAAAA'
        },
        javascriptEnabled: true,
      },
    }
  },
})
