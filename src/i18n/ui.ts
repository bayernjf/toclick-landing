// UI 字符串字典：中英双语
// 新增页面文案时，在对应 locale 下追加 key，保持两边同步

export const languages = {
  zh: '简体中文',
  en: 'English',
} as const;

export const defaultLang = 'en';

export const ui = {
  zh: {
    'nav.personas': 'AI 人设',
    'nav.features': '核心机制',
    'nav.how': '怎么用',
    'nav.protection': '保护模式',
    'nav.faq': '常见问题',
    'nav.langSwitch': 'English',

    'hero.badge': '反向自律 · AI 人设化监督',
    'hero.title': '立 flag 的人千千万，倒 flag 的你一个',
    'hero.subtitle': '反旗（FlagBreaker）是一款嘴毒心软的 AI 损友盯你把事做完的自律 App。完成目标 AI 夸夸，没完成 AI 毒舌调侃。损友 bro 嘴贱心善，冷淡御姐 senpai 一句扎心。连续失败 3 天自动切纯夸夸，未成年强制纯夸夸，连续达标 7 天洗白失败记录。',
    'hero.cta.primary': '开始用反旗',
    'hero.cta.secondary': '看产品宪法',

    'personas.title': '两个 AI 盯着你',
    'personas.subtitle': '不是冷冰冰的助手，是会损你也会拉你一把的真人角色',

    'features.title': '核心机制',
    'features.subtitle': '反差情绪 + 安全护栏 + 真实事实，让自律不再靠意志力死撑',

    'how.title': '三步用上反旗',
    'how.subtitle': '从立 flag 到洗白记录，最短路径走完一轮',

    'protection.title': '保护模式：毒舌有底线',
    'protection.subtitle': '连续失败 3 天强制切纯夸夸；未成年（<18）全程强制纯夸夸；吐槽只针对行为，永不攻击人格',

    'faq.title': '常见问题',
    'faq.subtitle': '关于人设、毒舌边界、未成年保护与离线打卡的关键问题',

    'cta.title': '别再让 flag 倒在地上',
    'cta.subtitle': '让一个嘴毒心软的 AI 损友，盯你把今天该做的事做完',
    'cta.button': '打开反旗 App',
    'cta.comingSoon': '即将上架',

    'footer.tagline': '反向自律 · AI 人设化监督',
    'footer.rights': '保留所有权利。',
  },

  en: {
    'nav.personas': 'Personas',
    'nav.features': 'Mechanisms',
    'nav.how': 'How it works',
    'nav.protection': 'Protection',
    'nav.faq': 'FAQ',
    'nav.langSwitch': '简体中文',

    'hero.badge': 'Reverse self-discipline · AI persona supervision',
    'hero.title': 'A flag for every thousand who raise one, yours is the one that falls',
    'hero.subtitle': 'FlagBreaker is a self-discipline app where a sharp-tongued AI buddy stares you down until the job is done. Hit the goal and the AI cheers; miss it and the AI roasts you. Pick bro (your foul-mouthed, soft-hearted friend) or senpai (an aloof ice-queen whose one line lands like a slap). After 3 days of consecutive misses it auto-switches to pure encouragement; minors get kind-only mode throughout; a 7-day clean streak wipes failure records.',
    'hero.cta.primary': 'Start with FlagBreaker',
    'hero.cta.secondary': 'Read the product constitution',

    'personas.title': 'Two AIs watching you',
    'personas.subtitle': 'Not a cold assistant: real characters who roast you and pull you back up',

    'features.title': 'Core mechanisms',
    'features.subtitle': 'Emotional contrast + safety rails + real facts, so discipline stops relying on raw willpower',

    'how.title': 'Three steps to use FlagBreaker',
    'how.subtitle': 'From raising a flag to wiping failure records: the shortest path through one cycle',

    'protection.title': 'Protection mode: roasting has a floor',
    'protection.subtitle': 'Three consecutive misses force-switch to pure encouragement; minors (<18) get kind-only mode end to end; roasts target behavior, never identity',

    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Key questions on personas, roast boundaries, minor protection, and offline check-in',

    'cta.title': "Stop letting your flags fall on the floor",
    'cta.subtitle': 'Let a sharp-tongued, soft-hearted AI buddy stare you down until today’s job is done',
    'cta.button': 'Open FlagBreaker App',
    'cta.comingSoon': 'Coming soon',

    'footer.tagline': 'Reverse self-discipline · AI persona supervision',
    'footer.rights': 'All rights reserved.',
  },
} as const;

export type UIKey = keyof typeof ui[typeof defaultLang];
