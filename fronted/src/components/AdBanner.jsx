import { useEffect, useRef, useState } from "react";

const DEFAULT_AD_CLIENT = import.meta.env.VITE_ADSENSE_CLIENT || "";

export default function AdBanner({
  adClient = DEFAULT_AD_CLIENT,
  adSlot = import.meta.env.VITE_ADSENSE_TYPING_SLOT || "",
  adFormat = "auto",
  fullWidthResponsive = true,
  className = "",
  style = {},
}) {
  const adRef = useRef(null);
  const pushedRef = useRef(false);

  const [adStatus, setAdStatus] = useState("loading");

  // ❌ Disable ads in development
  if (import.meta.env.DEV) return null;

  // ✅ Inject AdSense script if missing
  useEffect(() => {
    if (!adClient) return;

    let script = document.querySelector(
      'script[src*="adsbygoogle.js"]'
    );

    if (!script) {
      script = document.createElement("script");
      script.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" +
        adClient;
      script.async = true;
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    }
  }, [adClient]);

  // ✅ Push ad only once (with delay)
  useEffect(() => {
    if (!adClient || !adSlot || pushedRef.current) return;

    const pushAd = () => {
      try {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
        pushedRef.current = true;
      } catch (error) {
        console.error("AdSense push error:", error);
      }
    };

    const timer = setTimeout(pushAd, 1000);
    return () => clearTimeout(timer);
  }, [adClient, adSlot]);

  // ✅ Observe ad status (filled / unfilled)
  useEffect(() => {
    const adElement = adRef.current;
    if (!adElement) return;

    const updateStatus = () => {
      const status = adElement.getAttribute("data-ad-status");
      if (status) setAdStatus(status);
    };

    const observer = new MutationObserver(updateStatus);
    observer.observe(adElement, {
      attributes: true,
      attributeFilter: ["data-ad-status"],
    });

    updateStatus();

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-3 ${className}`}
    >
      {/* ✅ Placeholder */}
      {adStatus !== "filled" && (
        <div className="absolute inset-3 flex items-center justify-center rounded-xl border border-dashed border-white/10 bg-black/30">
          <p className="text-sm text-gray-400">
            {adStatus === "unfilled"
              ? "Ad not available"
              : "Loading ad..."}
          </p>
        </div>
      )}

      {/* ✅ Ad container */}
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block", minHeight: "250px", ...style }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
      />
    </div>
  );
}