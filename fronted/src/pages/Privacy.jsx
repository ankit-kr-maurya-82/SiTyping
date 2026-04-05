import { motion } from "framer-motion";
import Seo from "../components/Seo";

const sections = [
  {
    title: "Information the site may process",
    body:
      "SiTyping may process basic technical information needed to serve pages, measure usage, and display ads where enabled. This can include browser, device, approximate location, referral, and interaction data handled by hosting, analytics, and advertising providers.",
  },
  {
    title: "Advertising and cookies",
    body:
      "This site uses Google AdSense to display advertising. Ad providers may use cookies or similar technologies to serve ads, limit repetition, measure performance, and improve relevance. Users can manage ad settings through Google and their browser controls.",
  },
  {
    title: "Content and third-party services",
    body:
      "Pages may load resources from third-party services such as analytics, fonts, hosting platforms, and advertising networks. Those services operate under their own terms and privacy policies.",
  },
  {
    title: "User choices",
    body:
      "Users can limit cookies through browser settings, use private browsing modes, or block certain tracking technologies with browser tools and extensions. Some functionality or ad behavior may change when those settings are enabled.",
  },
  {
    title: "Policy updates",
    body:
      "This privacy page may be updated as the site evolves, especially when new features, accounts, analytics, or premium services are introduced.",
  },
];

export default function Privacy() {
  return (
    <section className="bg-gray-950 px-4 py-10 text-gray-300 sm:px-6 lg:px-8">
      <Seo
        title="Privacy Policy"
        description="Read the SiTyping privacy policy, including how the site uses advertising providers, cookies, and third-party services."
        path="/privacy"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "SiTyping Privacy Policy",
          url: "https://sityping.vercel.app/privacy",
          description:
            "Privacy policy page for SiTyping covering cookies, advertising providers, and third-party services.",
        }}
      />

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="rounded-[2rem] border border-white/8 bg-white/[0.03] px-6 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:px-10 sm:py-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-yellow-400/80">
            Privacy Policy
          </p>
          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Clear information about advertising, cookies, and site usage
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-gray-400 sm:text-lg">
            SiTyping is committed to showing users what the site does in plain
            language. This page provides a simple overview of the kinds of
            information that may be involved when visitors use the website.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Last updated: April 5, 2026
          </p>
        </motion.div>

        <div className="grid gap-5">
          {sections.map((section, index) => (
            <motion.article
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * index, duration: 0.4 }}
              className="rounded-3xl border border-white/8 bg-gray-900/70 p-6 sm:p-7"
            >
              <h2 className="text-xl font-semibold text-white">
                {section.title}
              </h2>
              <p className="mt-3 leading-7 text-gray-400">{section.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
