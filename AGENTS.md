# AGENTS.md — toclick-landing（反旗 / FlagBreaker 落地页）

供 AI coding agents（Claude Code / Codex / Cursor / Copilot 等）在本仓库工作时自动读取。

## 项目概览
反旗 / FlagBreaker 落地页：反向自律 App（完成目标 → AI 夸夸；没完成 → AI 毒舌调侃）的中英双语官网。
产品技术栈是 Next.js 14 + Supabase + 豆包 API（见 `toclick` 主仓库），本仓库只做营销站。

## 技术栈
| 类别 | 方案 |
|------|------|
| 框架 | Astro 7 |
| 样式 | Tailwind CSS 4（`@tailwindcss/vite`） |
| SEO | `@astrojs/sitemap`、`@astrojs/rss`、`public/robots.txt`、`public/llms*.txt` |
| Node / 包管理 | engines `>=22.12.0` / npm |

## 常用命令
```bash
npm install
npm run build     # astro build && node scripts/shot.mjs
npm run preview
npm run check     # astro check
```

## 约定
- 改域名要同步四处：`astro.config.mjs` 的 `site`、`src/consts.ts` 的 `SITE_URL`、
  `public/robots.txt` 的 Sitemap 行、`public/llms*.txt` 里的链接。
- 文案涉及「毒舌 / 调侃」时要守住合规边界：调侃而非羞辱，不做社死式表达。
- 部署细节见 `docs/DEPLOYMENT.md`（Cloudflare Pages）。

## 不要做的事
- 不要把产品侧的能力数字（工具数、端点等）写死不更新，改产品后回来核对文案。
- 不要只改一个语言的文案。
- 不要提交构建产物与 `.env`。
- 不要跳过 `git pull --rebase` 直接 push。
