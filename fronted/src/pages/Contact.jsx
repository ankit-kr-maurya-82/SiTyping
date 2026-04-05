import { Mail, ShieldCheck, MessageSquare, Clock3 } from "lucide-react";
import { motion } from "framer-motion";
import Seo from "../components/Seo";

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "";

const contactCards = [
  {
    title: "General support",
    icon: <MessageSquare size={20} />,
    description:
      "Questions about the typing test, bugs, accessibility, or general site feedback.",
  },
  {
    title: "Policy communication",
    icon: <ShieldCheck size={20} />,
    description:
      "Use this page for advertiser, policy, and account-related communication needs.",
  },
  {
    title: "Response window",
    icon: <Clock3 size={20} />,
    description:
      "Messages are typically reviewed within a few business days depending on volume.",
  },
];

export default function Contact() {
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://sityping.vercel.app";

  return (
    <section className="bg-gray-950 px-4 py-10 text-gray-300 sm:px-6 lg:px-8">
      <Seo
        title="Contact SiTyping"
        description="Find the SiTyping contact page for support, policy communication, and general questions about the website."
        path="/contact"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact SiTyping",
          url: `${siteUrl}/contact`,
          description:
            "Contact page for SiTyping support, policy communication, and general website questions.",
        }}
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="rounded-[2rem] border border-white/8 bg-white/[0.03] px-6 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:px-10 sm:py-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-yellow-400/80">
            Contact Us
          </p>
          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Reach the team behind SiTyping
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-gray-400 sm:text-lg">
            This page exists to make the site easier to trust and easier to
            reach. If you need help with the typing experience, want to report a
            problem, or need publisher-related communication, you can use the
            contact details below.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {contactCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * index, duration: 0.4 }}
              className="rounded-3xl border border-white/8 bg-gray-900/70 p-6"
            >
              <div className="inline-flex rounded-2xl bg-yellow-400/10 p-3 text-yellow-300">
                {card.icon}
              </div>
              <h2 className="mt-4 text-xl font-semibold text-white">
                {card.title}
              </h2>
              <p className="mt-3 leading-7 text-gray-400">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.45 }}
          className="rounded-3xl border border-yellow-500/15 bg-gradient-to-br from-yellow-500/10 to-transparent p-6 sm:p-8"
        >
          <div className="flex items-center gap-3 text-yellow-300">
            <Mail size={22} />
            <h2 className="text-2xl font-semibold text-white">Email contact</h2>
          </div>

          {contactEmail ? (
            <>
              <p className="mt-4 max-w-2xl leading-7 text-gray-300">
                For support, policy communication, and general questions, email:
              </p>
              <a
                href={`mailto:${contactEmail}`}
                className="mt-5 inline-flex rounded-full border border-yellow-400/30 bg-black/20 px-5 py-3 text-base font-semibold text-yellow-300 transition hover:border-yellow-300 hover:text-yellow-200"
              >
                {contactEmail}
              </a>
            </>
          ) : (
            <>
              <p className="mt-4 max-w-2xl leading-7 text-gray-300">
                A direct contact email can be displayed here once
                <code className="mx-1 rounded bg-black/20 px-2 py-1 text-sm text-yellow-200">
                  VITE_CONTACT_EMAIL
                </code>
                is added to the site environment.
              </p>
              <p className="mt-4 text-sm leading-6 text-gray-400">
                This avoids publishing a placeholder address that users cannot
                actually reach.
              </p>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
