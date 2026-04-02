import { useEffect } from "react";

const AD_CLIENT = "ca-pub-7461393463863515";
const AD_SLOT = "3999064762";
const ADSENSE_SRC = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}`;

const AdBanner = () => {
  useEffect(() => {
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
