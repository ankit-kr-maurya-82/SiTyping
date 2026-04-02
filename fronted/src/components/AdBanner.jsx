import { useEffect, useRef } from "react";

const AD_CLIENT = import.meta.env.VITE_ADSENSE_CLIENT;
const AD_SLOTS = {
  typing: import.meta.env.VITE_ADSENSE_TYPING_SLOT,
  about: import.meta.env.VITE_ADSENSE_ABOUT_SLOT,
};

const AdBanner = ({ slot = "typing", adClient, adSlot }) => {
  const adRef = useRef(null);
  const resolvedClient = adClient || AD_CLIENT;
  const resolvedSlot = adSlot || AD_SLOTS[slot] || AD_SLOTS.typing;

  useEffect(() => {
    if (!resolvedClient || !resolvedSlot || !adRef.current) {
      console.warn("AdBanner: missing ad config", {
        resolvedClient,
        resolvedSlot,
        slot,
      });
      return;
    }

    if (adRef.current.dataset.adStatus) {
      console.info("AdBanner: ad already initialized", {
        slot,
        adStatus: adRef.current.dataset.adStatus,
      });
      return;
    }

    try {
      if (!window.adsbygoogle) {
        console.warn("AdBanner: AdSense script not ready yet", { slot });
      }

      (window.adsbygoogle = window.adsbygoogle || []).push({});

      window.setTimeout(() => {
        console.info("AdBanner: ad slot status", {
          slot,
          adStatus: adRef.current?.dataset.adStatus || "not-set",
        });
      }, 1000);
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, [resolvedClient, resolvedSlot]);

  if (!resolvedClient || !resolvedSlot) {
    return null;
  }

  return (
    <section className="mx-auto my-6 w-full max-w-5xl px-4">
      <ins
        ref={adRef}
        className="adsbygoogle block"
        style={{ display: "block" }}
        data-ad-client={resolvedClient}
        data-ad-slot={resolvedSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </section>
  );
};

export default AdBanner;
