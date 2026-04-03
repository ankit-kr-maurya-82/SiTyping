import { useEffect, useRef } from "react";

const AdBanner = ({ slot = import.meta.env.VITE_ADSENSE_TYPING_SLOT }) => {
  const adRef = useRef(null);

  useEffect(() => {
    if (!slot || !adRef.current || adRef.current.dataset.adStatus) {
      return;
    }

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
      console.log("AdBanner status:", adRef.current.dataset.adStatus || "not-set");
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, [slot]);

  if (!slot) {
    return null;
  }

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client={import.meta.env.VITE_ADSENSE_CLIENT}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default AdBanner;
