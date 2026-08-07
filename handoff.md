# Handoff — toclick-landing

更新时间：2026-08-08

## 项目概况
ToClick 产品落地页。Astro 7 静态站点，中英双语，部署于 Cloudflare Pages
（站点：https://toclick-landing.pages.dev）。
通过页头/页脚链接回 hub 站 bayjf.com，不与其他落地页直接互链。

## 已完成（本地未推送，分支 dev）
- `571addd` feat(legal): add privacy, terms and 404 pages

## 注意点
- OG 图为 JPG（public/og/og-zh.jpg、og-en.jpg），社交平台可正常显示。
- robots.txt、sitemap 已就位；构建通过；提交仅在本地。

## 下一步
1. `git push`（dev 分支，推送前可先 `git pull --rebase`）。
2. 部署后验证 og:image、robots.txt、sitemap、法务页面。
