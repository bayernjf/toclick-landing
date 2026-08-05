// 核心机制 + AI 人设 + 使用步骤数据：双语，供组件渲染与 JSON-LD schema 复用

export interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export const featuresData: Record<'zh' | 'en', Feature[]> = {
  zh: [
    {
      icon: '😈',
      title: 'AI 人设化反差反馈',
      desc: '损友 bro 嘴贱心善，冷淡御姐 senpai 一句扎心。情绪配比按状态切换：夸夸热情 60% + 幽默 30%，毒舌调侃 70% + 暗示在意 20%。不靠奖励不靠自责，靠情绪反差驱动自律。',
    },
    {
      icon: '🛡️',
      title: '保护模式有底线',
      desc: '连续失败 3 天强制切纯夸夸模式，加 80% 鼓励。未成年（<18）全程强制纯夸夸。吐槽对象只能是行为，永不攻击人格。本地 BANNED_WORDS 二次过滤 + 豆包 API 内容过滤双保险。',
    },
    {
      icon: '🔄',
      title: '洗白机制',
      desc: '连续达标 7 天自动清空该目标的失败记录，给逆袭叙事留出心理空间。失败不是终点，连续坚持可以把黑历史抹掉。',
    },
    {
      icon: '📱',
      title: 'PWA 离线打卡',
      desc: 'Service Worker 多策略缓存 + localStorage 离线队列，断网也能打卡，网络恢复自动同步。Dashboard 启动时 replayQueue() 自动重放。',
    },
    {
      icon: '🔔',
      title: 'Web Push 提醒',
      desc: '关闭标签页也能收到打卡提醒与失败通知。VAPID + Service Worker + 订阅 API 完整链路，Vercel Cron 自动触发定时推送。',
    },
    {
      icon: '📊',
      title: '多目标周报',
      desc: '7 日周报页 + 周导航 + 多目标聚合。html-to-image 截图分享走 Web Share API。周报自动生成 + 失败打卡自动标记走 /api/cron。',
    },
  ],
  en: [
    {
      icon: '😈',
      title: 'AI-persona contrast feedback',
      desc: 'Bro is sharp-tongued but soft-hearted; senpai lands one line like a slap. Emotion ratios switch by state — praise is 60% warmth + 30% humor, roast is 70% jab + 20% veiled care. No rewards, no self-blame; contrast drives discipline.',
    },
    {
      icon: '🛡️',
      title: 'Protection mode has a floor',
      desc: 'Three consecutive misses force-switch to pure encouragement at 80%. Minors (under 18) get forced kind-only mode throughout. Roasts target behavior, never identity. A local BANNED_WORDS array plus Doubao API content filtering double up.',
    },
    {
      icon: '🔄',
      title: 'Clean-streak wipe',
      desc: 'Seven consecutive hits auto-clear the failed records for that goal, leaving room for a comeback narrative. Failure is not the end — sustained consistency erases the black history.',
    },
    {
      icon: '📱',
      title: 'PWA offline check-in',
      desc: 'A Service Worker with multi-strategy caching plus a localStorage queue buffers check-ins offline and reconciles automatically on reconnect. Dashboard triggers replayQueue() on launch.',
    },
    {
      icon: '🔔',
      title: 'Web Push reminders',
      desc: 'Get check-in reminders and failure pings with the tab closed. VAPID + Service Worker + subscription API form the full chain; Vercel Cron triggers scheduled pushes.',
    },
    {
      icon: '📊',
      title: 'Multi-goal weekly report',
      desc: 'A 7-day report page with week navigation and multi-goal aggregation. html-to-image screenshot sharing goes through Web Share API. Weekly reports auto-generate and failed check-ins auto-mark via /api/cron.',
    },
  ],
};

export interface Persona {
  id: 'bro' | 'senpai';
  emoji: string;
  label: string;
  tagline: string;
  sample: string;
  traits: string[];
}

export const personasData: Record<'zh' | 'en', Persona[]> = {
  zh: [
    {
      id: 'bro',
      emoji: '😈',
      label: '损友 bro',
      tagline: '嘴毒心软的哥们，吐槽式监督',
      sample: '可以啊兄弟！第一天就把 flag 立住了，我都有点意外了 🫡',
      traits: ['口语化', '短平快', '1-3 句话', '≤60 字', '偶尔用 1 个 emoji'],
    },
    {
      id: 'senpai',
      emoji: '🧊',
      label: '冷淡御姐 senpai',
      tagline: '少话高冷，一句扎心',
      sample: '闹钟响的时候你在想什么。',
      traits: ['惜字如金', '不用语气词', '1-2 句话', '≤40 字', '极短反问'],
    },
  ],
  en: [
    {
      id: 'bro',
      emoji: '😈',
      label: 'Bro',
      tagline: 'Sharp-tongued buddy, roast-style supervision',
      sample: 'Not bad, bro. First day and the flag is still standing — didn’t see that coming 🫡',
      traits: ['Colloquial', 'Fast and punchy', '1-3 sentences', '≤60 chars', 'Up to 1 emoji'],
    },
    {
      id: 'senpai',
      emoji: '🧊',
      label: 'Senpai',
      tagline: 'Aloof ice-queen, one line lands like a slap',
      sample: 'What were you thinking when the alarm went off.',
      traits: ['Economical', 'No filler words', '1-2 sentences', '≤40 chars', 'Short rhetorical question'],
    },
  ],
};

export interface Step {
  num: string;
  title: string;
  desc: string;
}

export const stepsData: Record<'zh' | 'en', Step[]> = {
  zh: [
    {
      num: '01',
      title: '立 flag',
      desc: '3 步向导设置目标：选类型（早起/健身/学习）、定难度（简单/中等/挑战）、写目标描述。目标可编辑、可软删除。',
    },
    {
      num: '02',
      title: '打卡',
      desc: '每天 ✅ 完成或 ❌ 未完成，可选填感想。断网也能打，进离线队列，恢复网络自动同步。Skip 休息日不打断连续。',
    },
    {
      num: '03',
      title: 'AI 反馈',
      desc: '人设化反差反馈：夸夸或毒舌。连续失败 3 天自动切纯夸夸保护模式，连续达标 7 天洗白失败记录。截图分享走 Web Share。',
    },
  ],
  en: [
    {
      num: '01',
      title: 'Raise a flag',
      desc: 'A 3-step wizard sets the goal: pick a type (early rise / fitness / study), set difficulty (easy / medium / hard), write a description. Goals are editable and soft-deletable.',
    },
    {
      num: '02',
      title: 'Check in',
      desc: 'Each day ✅ done or ❌ missed, with optional reflection. Offline check-ins queue locally and reconcile on reconnect. Skip a rest day without breaking the streak.',
    },
    {
      num: '03',
      title: 'AI feedback',
      desc: 'Persona-driven contrast feedback: praise or roast. Three consecutive misses auto-switch to pure-encouragement protection mode; seven consecutive hits wipe failure records. Share screenshots via Web Share.',
    },
  ],
};
