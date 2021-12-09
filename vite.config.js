import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log(command, mode)
  let targetServe = 'http://localhost:8000'
  switch (mode) {
    case 'dev':
      targetServe = 'http://localhost:8001'
      break
    case 'sit':
      targetServe = 'http://localhost:8002'
      break
    case 'uat':
      targetServe = 'http://localhost:8003'
      break
    case 'prd':
    default:
      break
  }
  return {
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    plugins: [vue(), WindiCSS()],
    server: {
      proxy: {
        // 字符串简写写法
        '/foo': targetServe,
        // 选项写法
        '/api': {
          target: 'http://jsonplaceholder.typicode.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
        // 正则表达式写法
        '^/fallback/.*': {
          target: 'http://jsonplaceholder.typicode.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/fallback/, ''),
        },
        // 使用 proxy 实例
        '/api2': {
          target: 'http://jsonplaceholder.typicode.com',
          changeOrigin: true,
          configure: (proxy, options) => {
            // proxy 是 'http-proxy' 的实例
          },
        },
      },
    },
  }
})
