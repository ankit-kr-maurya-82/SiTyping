import React from "react";
import { motion } from "framer-motion";
import AdBanner from "../components/AdBanner";

const highlights = [
  {
    title: "Real-time feedback",
    desc: "Track words per minute, accuracy, and character count while you type so progress stays visible.",
  },
  {
    title: "Focused practice",
    desc: "A clean, low-distraction layout keeps attention on the test instead of clutter around it.",
  },
  {
    title: "Built to improve",
    desc: "Short sessions, quick restarts, and responsive design make it easy to practice on any screen.",
  },
];

export default function About() {
  return (
    <section className="bg-gray-950 px-4 py-10 text-gray-300 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/8 bg-white/[0.03] px-6 py-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:px-10 sm:py-12"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-yellow-400/80">
            About SiTyping
          </p>
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Practice typing with speed, clarity, and consistency.
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-400 sm:text-lg">
            SiTyping is a modern typing practice app designed to help users
            improve speed and accuracy through a simple, responsive interface.
            It focuses on fast sessions, instant feedback, and a smooth
            experience that works well on desktop, tablet, and mobile.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="rounded-3xl border border-white/8 bg-gray-900/70 p-6 sm:p-8"
          >
            <h2 className="text-2xl font-semibold text-white">What SiTyping offers</h2>
            <p className="mt-4 text-gray-400 leading-7">
              The app is built for everyday practice. Instead of overwhelming
              users with too many controls, it keeps the flow straightforward:
              open the test, start typing, view your results, and restart in
              seconds. That makes it useful for beginners building confidence
              and for regular users trying to improve consistency over time.
            </p>
            <p className="mt-4 text-gray-400 leading-7">
              SiTyping is powered by React, Tailwind CSS, and Framer Motion,
              giving it a fast interface, smooth transitions, and a polished
              dark theme that stays easy on the eyes during longer sessions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="rounded-3xl border border-yellow-500/15 bg-gradient-to-br from-yellow-500/10 to-transparent p-6 sm:p-8"
          >
            <h2 className="text-2xl font-semibold text-white">Why it matters</h2>
            <p className="mt-4 text-gray-400 leading-7">
              Strong typing skills save time, reduce friction, and make digital
              work feel lighter. SiTyping is meant to support that progress with
              a simple tool people can return to regularly without a learning
              curve.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="grid gap-5 md:grid-cols-3"
        >
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/8 bg-gray-900/70 p-6 transition hover:border-yellow-400/20 hover:shadow-yellow-400/5"
            >
              <h3 className="mb-3 text-xl font-semibold text-yellow-400">
                {item.title}
              </h3>
              <p className="leading-7 text-gray-400">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mx-auto w-full max-w-3xl"
        >
          <AdBanner />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center text-sm text-gray-500"
        >
          Built for consistent practice by{" "}
          <span className="text-yellow-400">Ankit Maurya</span>.
        </motion.div>
      </div>
    </section>
  );
}
