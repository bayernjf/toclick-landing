// 站点级常量，集中管理便于跨页面/组件复用
// 绑定自定义域名后，需同步修改 astro.config.mjs 的 site 字段

// Cloudflare Pages 默认域名：<project-name>.pages.dev
export const SITE_URL = 'https://toclick-landing.pages.dev';
export const SITE_NAME = '反旗';
export const SITE_NAME_EN = 'FlagBreaker';
export const SITE_TITLE = '反旗 FlagBreaker | AI 损友盯你把 flag 立住';
export const SITE_TITLE_EN = 'FlagBreaker | an AI buddy that keeps your flags standing';
export const SITE_DESCRIPTION =
  '反旗（FlagBreaker）是一款人设化 AI 监督的自律 App：完成目标 AI 夸夸，没完成 AI 毒舌调侃。内置损友 bro 与冷淡御姐 senpai 双人设，连续失败 3 天自动切纯夸夸保护模式，未成年强制纯夸夸，连续达标 7 天洗白失败记录。基于 Next.js + Supabase + 豆包 API（火山方舟 Ark），PWA 离线打卡 + Web Push 提醒。';
export const SITE_DESCRIPTION_EN =
  'FlagBreaker is an AI-supervised self-discipline app: finish your goal and the AI cheers; miss it and the AI roasts you. Ships two personas, bro (your sharp-tongued buddy) and senpai (an aloof ice-queen), with a protection mode that auto-switches to pure encouragement after 3 days of consecutive misses, a forced kind-only mode for minors, and a 7-day clean streak that wipes failure records. Built on Next.js + Supabase + Doubao API (Volcano Ark), with PWA offline check-in and Web Push reminders.';
export const AUTHOR = '反旗 FlagBreaker';
export const LOCALES = ['zh', 'en'] as const;
export const DEFAULT_LOCALE = 'en';

// 社交与外部链接
// APP_URL：主应用部署地址
export const APP_URL = 'https://toclick.bayjf.com';
export const SOCIAL = {
  github: 'https://github.com/bayernjf/toclick',
  app: APP_URL,
  email: 'hi@flagbreaker.app',
  docs: 'https://github.com/bayernjf/toclick/blob/main/AGENTS.md',
};

// 默认 OG 图片（按语言切换）
export const OG_IMAGE = {
  zh: '/og/og-zh.jpg',
  en: '/og/og-en.jpg',
};
