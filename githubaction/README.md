# Vue GitHub Actions 实验

> 推送即部署 · Vue 3 + Vite 自动发布到 GitHub Pages

## 🎯 实验目标

在 `githubaction/` 目录搭建 Vue 前端项目，通过 GitHub Actions 实现 **push 到 `main` 自动构建并部署到 GitHub Pages**。

- 源码目录: `githubaction/`
- 构建产物: `githubaction/dist/`
- 触发路径: `githubaction/**` 或 `.github/workflows/deploy.yml`
- 部署地址: `https://Euato-Key.github.io/learning/` （仓库名 `learning` 对应 base `/learning/`）

## 📦 本地开发

```bash
cd githubaction

# 安装依赖
npm install

# 启动开发服务器 http://localhost:5173
npm run dev

# 本地构建预览
npm run build
npm run preview
```

## 🚀 自动部署链路

```
git push origin main
   ↓
.github/workflows/deploy.yml 触发
   ↓
actions/checkout + setup-node@v4 (Node 20)
   ↓
npm ci && npm run build  (生成 dist，已配置 base=/learning/)
   ↓
actions/upload-pages-artifact@v3  上传 dist
   ↓
actions/deploy-pages@v4  发布到 Pages 环境
   ↓
https://Euato-Key.github.io/learning/ 可访问
```

Workflow 文件: `.github/workflows/deploy.yml:1`

关键配置 `vite.config.js:6`:

```js
base: process.env.GITHUB_ACTIONS ? '/learning/' : '/'
```

- 本地开发 `base='/'` 保证 `/src/main.js` 正常加载
- CI 环境 `GITHUB_ACTIONS=true` 自动切换为 `/learning/` 保证 Pages 资源路径正确

## ⚙️ 首次启用 Pages（只需做一次）

1. 推送代码到 GitHub: `git push`
2. 进入 GitHub 仓库 → `Settings` → `Pages`
3. `Build and deployment` → `Source` 选择 **`GitHub Actions`**（不是 Deploy from a branch）
4. 等待 `Actions` Tab 中 `Deploy Vue to GitHub Pages` 变绿 ✅
5. 访问 `https://Euato-Key.github.io/learning/`

> 如果 Pages 404，检查：
> - Pages Source 是否为 GitHub Actions
> - Workflow 是否有 `permissions: pages: write, id-token: write`
> - Actions 日志中 `deploy` job 是否成功

## 🔍 验证实验

1. 修改 `githubaction/src/components/HelloWorld.vue` 任意文字
2. `git add . && git commit -m "test: trigger deploy" && git push`
3. 观察 `Actions` → `Deploy Vue to GitHub Pages` 的 `build`/`deploy` 两个 job
4. 1-2 分钟后刷新 Pages 地址，确认变更已上线（含“构建时间”会更新）

## 📁 目录结构

```
githubaction/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── App.vue
│   ├── main.js
│   ├── style.css
│   ├── assets/
│   └── components/HelloWorld.vue  # 实验首页已定制
├── index.html
├── vite.config.js  # base 自动适配 Pages
└── package.json
```

## 💡 扩展

- 想改部署分支触发: 编辑 `on.push.branches` 和 `paths`
- 想用自定义域名: `base: '/'` 并在 Pages 设置 Custom domain
- 想预渲染 404: 在 `dist` 加 `404.html` 复制 `index.html`（已可按需添加）

---

实验创建于 `2026-08-22` · 由 `create-vite --template vue` 脚手架生成并定制
