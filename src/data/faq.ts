// FAQ 数据：中英双语，同时供 FAQ 组件渲染与 SEO JSON-LD schema 使用
// 保证 AI 搜索能直接抓取为答案（GEO 关键）

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqData: Record<'zh' | 'en', FaqItem[]> = {
  zh: [
    {
      question: '反旗 FlagBreaker 是什么？',
      answer:
        '反旗（FlagBreaker）是一款 AI 人设化监督的自律 App：完成目标 AI 夸夸，没完成 AI 毒舌调侃。核心是用情绪反差驱动用户自律，而不是冷冰冰的提醒或自责。内置损友 bro 和冷淡御姐 senpai 两个 AI 人设，每人设有独立的 System Prompt + Few-Shot 样本。技术栈是 Next.js 14 + Supabase + 豆包 API（火山方舟 Ark），PWA 离线打卡 + Web Push 提醒。',
    },
    {
      question: '两个 AI 人设有何不同？',
      answer:
        '损友 bro 是用户的铁哥们/闺蜜，口语化、网络化、短平快，偶尔用"啊喂""兄弟"拉近距离，反馈 1-3 句话不超过 60 字。冷淡御姐 senpai 是气质疏离的年长女性角色，惜字如金，1-2 句话不超过 40 字，不用语气词和网络梗，用极短反问让人自己反思。两人设都遵循同一套反馈决策树与合规红线。',
    },
    {
      question: 'AI 反馈如何决策？是随机的吗？',
      answer:
        '不是随机。AI 反馈有严格决策树：第 1 次完成给夸张式夸夸；连续 3 天以上升级夸奖；断签后逆袭重点夸逆袭；连续 2 天失败给中度毒舌；连续 3 天及以上失败强制切保护模式（夸夸 80% + 毒舌 20%）；第 1 次失败或简单目标未完成给轻度毒舌。情绪配比也有规则：夸夸模式热情 60% + 幽默 30% + 认真鼓励 10%。',
    },
    {
      question: '什么是保护模式？什么时候触发？',
      answer:
        '保护模式在用户连续失败 3 天（PROTECTION_MODE_THRESHOLD）时自动触发，AI 毒舌力度降为 20%，加 80% 鼓励，必须包含一句正向引导。保护模式在后端 doubao.ts 再次判定，不依赖 AI 自觉。未成年用户（<18 岁，MINOR_AGE）全程强制纯夸夸模式，关闭毒舌。判定逻辑写在后端，前端无法绕过。',
    },
    {
      question: 'AI 会骂人吗？有合规风险吗？',
      answer:
        '不会攻击人格。AI 严禁说"你没用""你是废物""你不行"这类定性话，禁止涉及外貌、体重、智商、家庭、出身、疾病、性别、性取向、宗教、种族。吐槽对象只能是"行为"不能是"人"。豆包 API 侧有内容过滤，本地 persona.ts 的 BANNED_WORDS 数组做二次过滤（废物/垃圾/没用/蠢货/傻子等 14 个词）。每次 AI 反馈写入 ai_feedback_logs 审计日志，存 consecutive_fail 快照便于核查。',
    },
    {
      question: '什么是洗白机制？',
      answer:
        '连续达标 7 天（CLEAN_STREAK_DAYS）自动清空该目标的 failed 记录，给用户重新开始的心理空间。这是一套"逆袭"叙事：失败不是终点，连续坚持可以把黑历史抹掉。',
    },
    {
      question: '支持哪些目标类型？能自定义吗？',
      answer:
        'MVP 内置 3 类目标：早起（early_rise）、健身（fitness）、学习（study）。每类目标有三档难度：简单（没做到会被狠狠损）、中等（正常力度）、挑战（做不到它理解你）。打卡状态三态：完成 success、未完成 failed、休息 skipped。P1 规划支持自定义目标类型。',
    },
    {
      question: '断网能打卡吗？会丢数据吗？',
      answer:
        '能。PWA Service Worker 多策略缓存 + localStorage 离线打卡队列（offlineQueue.ts），断网时打卡入队，网络恢复后通过 /api/checkin/sync 自动同步。Dashboard 启动时自动触发 replayQueue()。Web Push 推送通知独立于在线状态，关闭标签页也能收到打卡提醒与失败通知。',
    },
    {
      question: '反旗与 Forest、滴答清单、Keep 有何不同？',
      answer:
        'Forest 靠种树养成正向激励，不针对 flag 失败；滴答清单是任务管理工具没有 AI 反馈；Keep 是健身内容社区不是监督工具。反旗的核心差异化是"AI 人设化反差陪伴"：用嘴毒心软的损友或冷淡扎心的御姐驱动自律，避开羞辱与社死，靠情绪反差而非奖励或自责。保护模式确保毒舌有底线，未成年强制纯夸夸。',
    },
    {
      question: '数据安全吗？别人能看到我的打卡吗？',
      answer:
        'Supabase PostgreSQL 所有表开启行级安全（RLS），用户只能读写自己的数据。CSP + HTTP 安全头（X-Frame-Options: DENY、X-Content-Type-Options: nosniff 等）在 next.config.js 配置。所有 API 路由用 Zod 校验输入，/api/checkin 限流 10 次/60s，/api/ai-feedback 限流 5/60s（滑动窗口算法）。GitHub App 密钥等服务端 API Key 不加 NEXT_PUBLIC_ 前缀，永不暴露给浏览器。',
    },
  ],
  en: [
    {
      question: 'What is FlagBreaker?',
      answer:
        'FlagBreaker is an AI-persona-supervised self-discipline app: finish your goal and the AI cheers; miss it and the AI roasts you. The core driver is emotional contrast, not cold reminders or self-blame. It ships two AI personas, bro (your sharp-tongued buddy) and senpai (an aloof ice-queen), each with its own System Prompt and Few-Shot samples. Built on Next.js 14 + Supabase + Doubao API (Volcano Ark), with PWA offline check-in and Web Push reminders.',
    },
    {
      question: 'How do the two AI personas differ?',
      answer:
        'Bro is your long-time friend: colloquial, net-native, fast and punchy, occasionally dropping "hey man" to close the distance; replies are 1-3 sentences, max 60 chars. Senpai is a detached older-woman character, economical with words, 1-2 sentences max 40 chars, no filler words or memes, using one short rhetorical question to make you reflect. Both share the same feedback decision tree and compliance red lines.',
    },
    {
      question: 'How does AI feedback decide what to say? Is it random?',
      answer:
        'Not random. A strict decision tree applies: first success triggers exaggerated praise; 3+ days of consecutive success upgrades the praise; a comeback after a miss highlights the comeback; two consecutive misses trigger moderate roasting; 3+ consecutive misses force protection mode (80% encouragement + 20% roast with one positive line); first miss or easy-goal miss gets light roast. Emotion ratios are fixed too: praise mode is 60% warmth + 30% humor + 10% earnest encouragement.',
    },
    {
      question: 'What is protection mode and when does it trigger?',
      answer:
        'Protection mode triggers after 3 consecutive days of missing a goal (PROTECTION_MODE_THRESHOLD): the AI drops roast intensity to 20% and adds 80% encouragement, with one mandatory positive line. It is re-decided in the backend doubao.ts, not trusted to the AI itself. Minors (under MINOR_AGE=18) get forced kind-only mode throughout, with roasting disabled. The check lives on the backend and cannot be bypassed from the client.',
    },
    {
      question: 'Will the AI insult me? Any compliance risk?',
      answer:
        'It never attacks identity. The AI is forbidden from saying "you are useless" or "you are a failure", and from touching appearance, weight, intelligence, family, origin, illness, gender, sexual orientation, religion, or race. Roasts target behavior, never the person. The Doubao API does content filtering on its side; persona.ts adds a BANNED_WORDS array as a second filter (14 words). Every AI reply is written to ai_feedback_logs with a consecutive_fail snapshot for audit.',
    },
    {
      question: 'What is the clean-streak mechanism?',
      answer:
        'Seven consecutive days of hitting a goal (CLEAN_STREAK_DAYS) auto-wipes the failed records for that goal, giving the user psychological room to restart. It is a comeback narrative: failure is not the end, sustained consistency erases the black history.',
    },
    {
      question: 'What goal types are supported? Can I customize?',
      answer:
        'MVP ships 3 goal types: early_rise, fitness, study. Each has 3 difficulty levels: easy (miss it and you get roasted hard), medium (normal intensity), hard (the AI understands if you miss). Check-in has 3 states: success, failed, skipped (rest day). Custom goal types are planned for P1.',
    },
    {
      question: 'Can I check in offline? Will I lose data?',
      answer:
        'Yes. A PWA Service Worker with multi-strategy caching plus a localStorage offline queue (offlineQueue.ts) buffers check-ins while offline; once back online, /api/checkin/sync reconciles automatically. Dashboard triggers replayQueue() on launch. Web Push notifications are independent of the open tab; you still get reminders and failure pings with the tab closed.',
    },
    {
      question: 'How is FlagBreaker different from Forest, TickTick, or Keep?',
      answer:
        'Forest relies on positive tree-growing incentives and does not address flag failures. TickTick is a task manager with no AI feedback. Keep is a fitness content community, not a supervision tool. FlagBreaker’s core differentiation is AI-persona contrast companionship: a sharp-tongued buddy or an ice-queen senpai driving discipline through emotional contrast, avoiding shame and social death. Protection mode keeps the roast above a floor; minors get forced kind-only mode.',
    },
    {
      question: 'Is my data safe? Can others see my check-ins?',
      answer:
        'Supabase PostgreSQL has Row Level Security (RLS) on every table: users can only read and write their own rows. CSP and HTTP security headers (X-Frame-Options: DENY, X-Content-Type-Options: nosniff, etc.) are set in next.config.js. Every API route validates input with Zod. /api/checkin is rate-limited to 10/60s, /api/ai-feedback to 5/60s via a sliding-window algorithm. Server-side keys like ARK_API_KEY and CRON_SECRET never carry the NEXT_PUBLIC_ prefix and are never exposed to the browser.',
    },
  ],
};
