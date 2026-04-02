import { useEffect } from "react";

const AD_CLIENT = import.meta.env.VITE_ADSENSE_CLIENT;
const AD_SLOT = import.meta.env.VITE_ADSENSE_TYPING_SLOT;
const ADSENSE_SRC = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}`;

const AdBanner = () => {
  useEffect(() => {
    if (!AD_CLIENT || !AD_SLOT) {
      return;
    }

    const existingScript = document.querySelector(
      `script[src="${ADSENSE_SRC}"]`
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = ADSENSE_SRC;
      script.async = true;
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    }

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  if (!AD_CLIENT || !AD_SLOT) {
    return null;
  }

  return (
    <section className="mx-auto my-6 w-full max-w-5xl px-4">
      <ins
        className="adsbygoogle block"
        style={{ display: "block" }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={AD_SLOT}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </section>
  );
};

export default AdBanner;
