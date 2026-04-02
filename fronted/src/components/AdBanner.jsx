import { useEffect, useRef } from "react";

export default function AdBanner({
  adClient = "ca-pub-7461393463863515",
  adSlot = "3999064762",
  adFormat = "auto",
  fullWidthResponsive = true,
  className = "",
  style = {},
}) {
  const adRef = useRef(null);

  useEffect(() => {
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch (error) {
      console.error("AdSense failed to initialize", error);
    }
  }, []);

  useEffect(() => {
    const adElement = adRef.current;
    if (!adElement) return;

    const logStatus = () => {
      const status = adElement.getAttribute("data-ad-status");
      if (status) {
        console.log(`AdSense status for slot ${adSlot}: ${status}`);
      }
    };

    logStatus();

    const observer = new MutationObserver(logStatus);
    observer.observe(adElement, {
      attributes: true,
      attributeFilter: ["data-ad-status"],
    });

    return () => observer.disconnect();
  }, [adSlot]);

  return (
    <div
      className={`w-full overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-3 ${className}`.trim()}
    >
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block", ...style }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
      />
    </div>
  );
}
