import { useEffect, useRef } from "react";

const AdBanner = ({ slot = import.meta.env.VITE_ADSENSE_TYPING_SLOT }) => {
  const wrapRef = useRef(null);
  const adRef = useRef(null);
  const requestedRef = useRef(false);

  useEffect(() => {
    if (!slot || !wrapRef.current || !adRef.current) {
      return;
    }

    const requestAd = () => {
      if (requestedRef.current || !wrapRef.current || !adRef.current) {
        return;
      }

      if (wrapRef.current.offsetWidth <= 0 || adRef.current.dataset.adStatus) {
        return;
      }

      try {
        requestedRef.current = true;
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
      } catch (error) {
        requestedRef.current = false;
        console.error("AdSense error:", error);
      }
    };

    const resizeObserver = new ResizeObserver(requestAd);
    resizeObserver.observe(wrapRef.current);
    requestAd();

    return () => resizeObserver.disconnect();
  }, [slot]);

  if (!slot) {
    return null;
  }

  return (
    <div ref={wrapRef} className="w-full min-h-[90px]">
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block", width: "100%", minHeight: "90px" }}
        data-ad-client={import.meta.env.VITE_ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdBanner;
