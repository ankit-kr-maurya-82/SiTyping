import Typing from "../pages/Typing";
import Timer from "../components/Timer";
import Seo from "../components/Seo";

export default function Test() {
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://sityping.vercel.app";

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-6 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <Seo
        title="Free Typing Test"
        description="Practice typing speed and accuracy with a responsive free typing test on SiTyping."
        path="/"
        structuredData={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              name: "SiTyping",
              url: siteUrl,
              description:
                "Free typing practice website for improving speed and accuracy.",
            },
            {
              "@type": "WebPage",
              name: "Free Typing Test",
              url: siteUrl,
              description:
                "Practice typing speed and accuracy with a responsive free typing test on SiTyping.",
            },
          ],
        }}
      />
      <Timer duration={60} />
      <Typing />
    </div>
  );
}
