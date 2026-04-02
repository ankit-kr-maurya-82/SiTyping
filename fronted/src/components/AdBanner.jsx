import { useEffect } from "react";

export default function AdBanner({
  adClient = "ca-pub-7461393463863515",
  adSlot = "3999064762",
  adFormat = "auto",
  fullWidthResponsive = true,
  className = "",
  style = {},
}) {
  useEffect(() => {
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch (error) {
      console.error("AdSense failed to initialize", error);
    }
  }, []);

  return (
    <div
      className={`w-full overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-3 ${className}`.trim()}
    >
      <ins
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
