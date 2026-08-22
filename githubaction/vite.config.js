import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
// 自定义域 testaction.euatokey.top 已绑定，base 必须为 '/'，旧 /learning/ 仅用于 github.io 项目页
export default defineConfig({
  base: '/',
  plugins: [vue()],
})
