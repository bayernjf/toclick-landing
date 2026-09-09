# 部署 — toclick-landing（反旗 / FlagBreaker 落地页）

更新时间：2026-09-09

## 站点信息
- 默认域名：`toclick.bayjf.com`（README 里另有历史 Vercel 地址 `toclick.vercel.app`，已不用）
- 技术栈：Astro 7 + Tailwind CSS 4（`@tailwindcss/vite`）+ `@astrojs/sitemap` + `@astrojs/rss`
- Node：`package.json` engines 为 `>=22.12.0`；README 的 Pages 配置写的是 `NODE_VERSION=20`
  —— **两者不一致，以实际能构建成功的版本为准，建议统一到 22**
- 包管理器：npm

## 构建
```bash
npm install
npm run build     # astro build && node scripts/shot.mjs
npm run preview
npm run check     # astro check
```

## Cloudflare Pages
1. GitHub 建仓库 `toclick-landing`（public）。
2. Dashboard → Pages → Connect to Git → 选仓库。
3. 构建配置：

| 配置项 | 值 |
|---|---|
| Framework preset | `Astro` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `20`（见上方 Node 版本说明） |

4. push 即自动部署。

## 发布后验证
1. 中英双语页面与语言切换正常。
2. `robots.txt`、`sitemap.xml`、`llms*.txt` 可访问且域名一致。
3. OG 图（构建时截出）可访问。

## 改域名时的同步点
- `astro.config.mjs` 的 `site`
- `src/consts.ts` 的 `SITE_URL`
- `public/robots.txt` 的 Sitemap 行
- `public/llms*.txt` 中的链接
