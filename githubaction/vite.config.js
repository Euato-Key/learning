import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
// GitHub Pages: https://Euato-Key.github.io/learning/
// 本地开发用 '/'，CI 环境用 '/learning/' 保证资源路径正确
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/learning/' : '/',
  plugins: [vue()],
})
