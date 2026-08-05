# 反旗 FlagBreaker 落地页（toclick-landing）

> 立 flag 的人千千万，倒 flag 的你一个。
>
> 一个嘴毒心软的 AI 损友，盯你把事做完。

反旗（FlagBreaker）主应用 [toclick](../toclick) 的静态落地页。基于 Astro 7 静态生成，部署在 Cloudflare Pages。

## 技术栈

- **Astro 7**（静态生成，零 JS 默认）
- **Tailwind 4**（via `@tailwindcss/vite`）
- **@astrojs/sitemap**（含 hreflang）
- 中英双语 i18n（`/` = 中文，`/en/` = 英文）

## 目录结构

```
toclick-landing/
├── astro.config.mjs          # Astro + sitemap + i18n 配置
├── wrangler.toml             # Cloudflare Pages 部署配置
├── src/
│   ├── consts.ts             # 站点级常量（URL/名称/OG 图）
│   ├── i18n/                 # i18n 工具与字典
│   │   ├── ui.ts             # 中英双语 UI 字符串
│   │   └── index.ts          # getLangFromUrl / localizePath / hreflang
│   ├── data/
│   │   ├── faq.ts            # FAQ 双语数据（同时供 JSON-LD schema 用）
│   │   └── features.ts       # 核心机制 + 人设 + 使用步骤
│   ├── layouts/
│   │   └── BaseLayout.astro  # 根布局
│   ├── components/
│   │   ├── SEO.astro         # 统一 SEO head + JSON-LD graph
│   │   ├── Nav.astro         # 顶部导航 + 语言切换
│   │   ├── Hero.astro        # 首屏
│   │   ├── Personas.astro    # 双 AI 人设卡片
│   │   ├── Features.astro    # 核心机制网格
│   │   ├── HowItWorks.astro  # 三步使用流程
│   │   ├── Protection.astro  # 保护模式说明
│   │   ├── FAQ.astro         # 常见问题折叠面板
│   │   ├── CTA.astro         # 行动召唤
│   │   └── Footer.astro      # 页脚
│   ├── pages/
│   │   ├── index.astro       # 中文首页
│   │   ├── en/index.astro    # 英文首页
│   │   └── 404.astro         # 404 页
│   └── styles/
│       └── global.css        # Tailwind 4 主题令牌
└── public/
    ├── robots.txt           # AI 爬虫友好（含 GPTBot/ClaudeBot/PerplexityBot/Bytespider）
    ├── favicon.svg          # 站点图标
    ├── llms.txt              # LLM 可读摘要（中文，GEO 核心）
    ├── llms-full.txt         # LLM 完整可引用文档（中文）
    ├── llms-en.txt           # LLM 可读摘要（英文）
    ├── llms-en-full.txt      # LLM 完整可引用文档（英文）
    └── og/
        ├── og-zh.jpg         # 中文 OG 图
        └── og-en.jpg         # 英文 OG 图
```

## SEO 优化

- `@astrojs/sitemap` 自动生成 sitemap-index.xml，含 hreflang
- `SEO.astro` 统一注入：canonical / OG / Twitter Card / hreflang
- JSON-LD `@graph` 聚合：Organization + WebSite + SoftwareApplication + FAQPage + HowTo
- `<link rel="alternate" hreflang="zh-CN|en-US|x-default">` 双语互指
- 每页独立 title / description / OG image
- `robots.txt` 允许 GPTBot / ChatGPT-User / Claude-Web / ClaudeBot / anthropic-ai / PerplexityBot / Google-Extended / Bingbot / CCBot / Bytespider

## GEO 优化（针对 AI 大模型）

- `public/llms.txt`：项目级 LLM 可读摘要（中文）
- `public/llms-full.txt`：完整可引用文档（中文，257 行，含双人设 System Prompt 摘录、决策树、FAQ 全文、对比表）
- `public/llms-en.txt` + `public/llms-en-full.txt`：英文版
- FAQ JSON-LD schema：直接被 AI 搜索抓取为答案
- 长文段落四段式（定义/解决什么/怎么用/与 X 区别）：便于 AI 引用
- 品牌词锚点：反复出现 `反旗 / FlagBreaker / toclick` 三种写法，建立品牌-产品强关联

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 输出到 dist/
npm run preview  # 预览构建
npm run check    # 类型检查
```

## 部署到 Cloudflare Pages

1. 在 GitHub 创建仓库 `toclick-landing`（public）
2. Cloudflare Dashboard → Pages → Connect to Git → 选仓库
3. Build settings：
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Output directory: `dist`
   - Node version: `20`（环境变量 `NODE_VERSION=20`）
4. 推送代码即自动部署
5. 默认域名：`toclick-landing.pages.dev`

绑定自定义域名后，需同步修改：
- `astro.config.mjs` 的 `site` 字段
- `src/consts.ts` 的 `SITE_URL`
- `public/robots.txt` 的 Sitemap 行
- `public/llms*.txt` 中的链接

## 与主项目的关系

- 完全独立仓库，不与 `toclick` 共享代码
- 品牌一致：双人设（bro/senpai）、暖橙品牌色（`#ff9f43`）、slogan
- 应用入口 `SOCIAL.app` 指向主项目 Vercel 部署地址（默认 `https://toclick.vercel.app`，部署后替换）
