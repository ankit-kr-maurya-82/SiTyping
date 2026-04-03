import { motion } from "framer-motion";
import {
  BadgeCheck,
  BarChart3,
  CalendarRange,
  Crown,
  FileText,
  Flame,
  History,
  Keyboard,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Upload,
  Zap,
} from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "Rs 0",
    subtitle: "For everyday typing practice",
    accent: "border-white/10 bg-white/[0.03]",
    features: [
      "Basic typing tests",
      "Ads-supported experience",
      "Limited result history",
      "Standard leaderboard access",
      "Core practice modes",
    ],
  },
  {
    name: "Pro",
    price: "Rs 149/mo",
    subtitle: "For learners who want measurable growth",
    accent:
      "border-yellow-500/25 bg-gradient-to-br from-yellow-500/12 via-amber-400/5 to-transparent shadow-[0_24px_80px_rgba(250,204,21,0.08)]",
    badge: "Best Value",
    features: [
      "No ads during practice",
      "Advanced analytics and heatmaps",
      "Unlimited history and trends",
      "Custom tests and premium modes",
      "Certificates, badges, and profile upgrades",
    ],
  },
];

const premiumFeatures = [
  {
    icon: <ShieldCheck size={22} />,
    title: "Ad-Free Focus",
    description:
      "Keep every session distraction-free with a clean premium workspace built for longer practice.",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Advanced Analytics",
    description:
      "Track weak letters, mistake patterns, accuracy trends, and speed graphs over time.",
  },
  {
    icon: <History size={22} />,
    title: "Unlimited History",
    description:
      "Save every test attempt and revisit old scores whenever you want to compare progress.",
  },
  {
    icon: <Upload size={22} />,
    title: "Custom Tests",
    description:
      "Upload your own paragraphs, set word counts, and tune practice difficulty to your goals.",
  },
  {
    icon: <Keyboard size={22} />,
    title: "Premium Modes",
    description:
      "Unlock coding, exam, punctuation, and numbers-focused practice sessions.",
  },
  {
    icon: <FileText size={22} />,
    title: "Certificates",
    description:
      "Generate downloadable certificates for milestones, best scores, and completed challenges.",
  },
  {
    icon: <Trophy size={22} />,
    title: "Leaderboard Depth",
    description:
      "See rank trends, compare with friends, and understand how your standing changes over time.",
  },
  {
    icon: <Sparkles size={22} />,
    title: "Profile Upgrades",
    description:
      "Add badges, avatars, premium frames, and achievement highlights to your public profile.",
  },
];

const roadmap = [
  {
    phase: "Phase 1",
    title: "Launch Pro MVP",
    items: [
      "No-ads upgrade",
      "Advanced analytics dashboard",
      "Unlimited test history",
      "Custom paragraph practice",
    ],
  },
  {
    phase: "Phase 2",
    title: "Retention Features",
    items: [
      "Daily premium challenges",
      "Streak rewards and badges",
      "Weekly performance emails",
      "Profile customization",
    ],
  },
  {
    phase: "Phase 3",
    title: "Competitive Layer",
    items: [
      "Friend comparison",
      "Rank trend charts",
      "Seasonal leaderboards",
      "Milestone certificates",
    ],
  },
  {
    phase: "Phase 4",
    title: "B2B Expansion",
    items: [
      "Teacher dashboards",
      "Student performance reports",
      "Institute plans",
      "Typing assessment tools",
    ],
  },
];

const demoStats = [
  { label: "Weekly WPM Avg", value: "84", tone: "text-yellow-400" },
  { label: "Accuracy", value: "96.2%", tone: "text-emerald-400" },
  { label: "Best Rank", value: "#12", tone: "text-sky-400" },
  { label: "Current Streak", value: "18 days", tone: "text-rose-400" },
];

const demoCards = [
  {
    title: "Weak Keys",
    icon: <Target size={18} />,
    body: "Focus on `;`, `P`, and `B` this week based on your last 20 sessions.",
  },
  {
    title: "Progress Pulse",
    icon: <Zap size={18} />,
    body: "Your average speed is up 9 WPM from last month with steadier accuracy.",
  },
  {
    title: "Next Reward",
    icon: <Flame size={18} />,
    body: "Complete 2 more premium challenges to unlock the Precision Sprinter badge.",
  },
];

export default function Pro() {
  return (
    <section className="bg-gray-950 px-4 py-10 text-gray-200 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="overflow-hidden rounded-[2rem] border border-yellow-500/15 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.16),_transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-6 py-8 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:px-10 sm:py-12"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-yellow-300">
                <Crown size={14} />
                SiTyping Pro
              </p>
              <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl">
                Turn SiTyping into a product people pay for.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
                A focused premium layer with better analytics, cleaner practice,
                deeper progress tracking, and stronger retention features.
              </p>
            </div>

            <div className="grid gap-3 rounded-3xl border border-white/10 bg-black/20 p-5 text-sm text-gray-300 sm:min-w-[280px]">
              <div className="flex items-center justify-between">
                <span>Monetization model</span>
                <span className="font-semibold text-white">Freemium + Ads</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Launch target</span>
                <span className="font-semibold text-white">30-day MVP</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Best first premium hook</span>
                <span className="font-semibold text-yellow-300">No ads + analytics</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.45 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-7 ${plan.accent}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-white">{plan.name}</h2>
                  <p className="mt-2 text-sm text-gray-400">{plan.subtitle}</p>
                </div>
                {plan.badge ? (
                  <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-black">
                    {plan.badge}
                  </span>
                ) : null}
              </div>
              <div className="mt-6 text-4xl font-black text-white">{plan.price}</div>
              <div className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-gray-300">
                    <BadgeCheck size={18} className="text-yellow-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.45 }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Landing Section
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              Premium features worth paying for
            </h2>
            <p className="mt-4 leading-7 text-gray-400">
              The strongest upgrade story for SiTyping is simple: remove ads,
              show richer insight, and give serious learners more control over
              how they practice.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {premiumFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/8 bg-gray-900/70 p-5"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-yellow-400/10 p-3 text-yellow-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.45 }}
            className="rounded-3xl border border-white/10 bg-gray-900/70 p-6 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <LayoutDashboard className="text-yellow-400" size={22} />
              <h2 className="text-2xl font-bold text-white">Demo Premium Dashboard</h2>
            </div>
            <p className="mt-3 max-w-2xl text-gray-400">
              A backend-free preview of what Pro can feel like inside the app.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {demoStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/8 bg-black/20 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-gray-500">
                    {item.label}
                  </p>
                  <p className={`mt-3 text-3xl font-black ${item.tone}`}>{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {demoCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] p-5"
                >
                  <div className="flex items-center gap-2 text-yellow-300">
                    {card.icon}
                    <span className="font-semibold text-white">{card.title}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-400">{card.body}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.45 }}
            className="rounded-3xl border border-cyan-500/15 bg-gradient-to-br from-cyan-500/10 to-transparent p-6 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <CalendarRange className="text-cyan-300" size={22} />
              <h2 className="text-2xl font-bold text-white">Roadmap</h2>
            </div>
            <div className="mt-6 space-y-5">
              {roadmap.map((phase) => (
                <div
                  key={phase.phase}
                  className="rounded-2xl border border-white/8 bg-black/15 p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                    {phase.phase}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {phase.title}
                  </h3>
                  <div className="mt-4 space-y-2 text-sm text-gray-300">
                    {phase.items.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-cyan-300" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
