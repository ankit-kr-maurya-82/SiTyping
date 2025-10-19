import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-300 flex flex-col items-center justify-center px-6 py-12">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-white mb-6"
      >
        About <span className="text-yellow-400">SiTyping</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="max-w-2xl text-center text-gray-400 text-lg leading-relaxed"
      >
        SiTyping is a fast, elegant, and distraction-free typing website
        <span className="text-yellow-400"> </span>.  
        It’s built with React, Tailwind CSS, and Framer Motion for smooth animations and a delightful user experience.  
        Practice typing, track your speed (WPM), accuracy, and improve your typing consistency — all in a sleek dark interface.
      </motion.p>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-10 grid md:grid-cols-3 gap-8 max-w-4xl text-center"
      >
        {[
          { title: "⚡ Real-Time WPM", desc: "Instant feedback on your typing speed and accuracy." },
          { title: "⌨️ Smooth UI", desc: "A clean, minimalist design that keeps you focused." },
          { title: "📊 Live Stats", desc: "See your progress visualized with charts and scores." },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-gray-900/70 p-6 rounded-xl shadow-md hover:shadow-yellow-400/10 transition"
          >
            <h3 className="text-yellow-400 text-xl font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-gray-400">{item.desc}</p>
          </div>
        ))}
      </motion.div>

      {/* Bottom Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-12 text-sm text-gray-500"
      >
        Made with ❤️ by <span className="text-yellow-400">Ankit Maurya</span>
      </motion.div>
    </div>
  );
}
