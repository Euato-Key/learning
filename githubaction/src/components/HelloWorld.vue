<script setup>
import { ref, onMounted } from 'vue'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import vueLogo from '../assets/vue.svg'

const count = ref(0)
const buildTime = ref(new Date().toLocaleString('zh-CN'))
const deployStatus = ref('✅ 构建成功')
const baseUrl = import.meta.env.BASE_URL

onMounted(() => {
  // 模拟从环境读取部署信息
  console.log('GitHub Actions Experiment Mounted at:', buildTime.value)
  console.log('Base URL:', baseUrl)
})
</script>

<template>
  <section id="center">
    <div class="hero">
      <img :src="heroImg" class="base" width="170" height="179" alt="" />
      <img :src="vueLogo" class="framework" alt="Vue logo" />
      <img :src="viteLogo" class="vite" alt="Vite logo" />
    </div>
    <div>
      <h1>GitHub Actions 实验 🎉</h1>
      <p>
        Vue 3 + Vite 已 <code>自动部署</code> 到
        <code>GitHub Pages</code>
      </p>
      <p style="margin-top: 8px; font-size: 14px; opacity: 0.8">
        推送到 <code>main</code> 分支 → 触发 Actions → 构建 <code>dist</code> → 发布到 Pages
      </p>
    </div>
    <button type="button" class="counter" @click="count++">
      Count is {{ count }} — 点我测试响应式
    </button>
    <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center">
      <code>{{ deployStatus }}</code>
      <code>构建时间: {{ buildTime }}</code>
    </div>
  </section>

  <div class="ticks"></div>

  <section id="next-steps">
    <div id="docs">
      <svg class="icon" role="presentation" aria-hidden="true">
        <use :href="`${baseUrl}icons.svg#documentation-icon`"></use>
      </svg>
      <h2>实验说明</h2>
      <p>这个项目用于验证 GitHub Actions 自动化</p>
      <ul>
        <li>
          <a href="https://vite.dev/" target="_blank">
            <img class="logo" :src="viteLogo" alt="" />
            Vite 8.2
          </a>
        </li>
        <li>
          <a href="https://vuejs.org/" target="_blank">
            <img class="button-icon" :src="vueLogo" alt="" />
            Vue 3.5
          </a>
        </li>
      </ul>
      <ul style="margin-top: 8px">
        <li>
          <a href="https://github.com/Euato-Key/learning/actions" target="_blank">
            <svg class="button-icon" role="presentation" aria-hidden="true">
              <use :href="`${baseUrl}icons.svg#github-icon`"></use>
            </svg>
            查看 Actions
          </a>
        </li>
        <li>
          <a href="https://euato-key.github.io/learning/" target="_blank" style="background: var(--accent-bg); border: 1px solid var(--accent-border)">
            🚀 访问 Pages
          </a>
        </li>
      </ul>
    </div>
    <div id="social">
      <svg class="icon" role="presentation" aria-hidden="true">
        <use :href="`${baseUrl}icons.svg#social-icon`"></use>
      </svg>
      <h2>如何验证</h2>
      <p>修改后自动部署的完整链路</p>
      <ul>
        <li>
          <a href="https://github.com/Euato-Key/learning/blob/main/.github/workflows/deploy.yml" target="_blank">
            <svg class="button-icon" role="presentation" aria-hidden="true">
              <use :href="`${baseUrl}icons.svg#github-icon`"></use>
            </svg>
            Workflow 源码
          </a>
        </li>
        <li>
          <a href="#" @click.prevent="count++">
            🔢 点击计数: {{ count }}
          </a>
        </li>
      </ul>
      <div style="margin-top: 16px; padding: 12px; background: var(--code-bg); border-radius: 8px; font-size: 13px; text-align: left; line-height: 1.6">
        <div><strong>1. 本地开发:</strong> <code>npm run dev</code></div>
        <div><strong>2. 本地构建:</strong> <code>npm run build</code></div>
        <div><strong>3. 自动部署:</strong> <code>git push</code> 即触发</div>
      </div>
    </div>
  </section>

  <div class="ticks"></div>
  <section id="spacer" style="display:flex; align-items:center; justify-content:center; font-size:13px; opacity:0.6">
    Euato-Key / learning · githubaction · {{ buildTime }}
  </section>
</template>
