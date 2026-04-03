import { useEffect, useRef } from "react";

const AD_CLIENT = import.meta.env.VITE_ADSENSE_CLIENT;
const AD_SLOTS = {
  typing: import.meta.env.VITE_ADSENSE_TYPING_SLOT,
  about: import.meta.env.VITE_ADSENSE_ABOUT_SLOT,
};
const ADSENSE_SCRIPT_ID = "adsense-script";
const DEBUG_PREFIX = "AdBanner:";

const ensureAdSenseScript = (client) => {
  if (!client) {
    return Promise.resolve(false);
  }

  const existingScript =
    document.getElementById(ADSENSE_SCRIPT_ID) ||
    document.querySelector('script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]');
  if (existingScript?.dataset.loaded === "true") {
    return Promise.resolve(true);
  }

  if (existingScript && !existingScript.id) {
    existingScript.id = ADSENSE_SCRIPT_ID;
  }

  if (existingScript?.dataset.loading === "true") {
    return new Promise((resolve) => {
      existingScript.addEventListener("load", () => resolve(true), { once: true });
      existingScript.addEventListener("error", () => resolve(false), { once: true });
    });
  }

  if (existingScript) {
    existingScript.dataset.loaded = "true";
    return Promise.resolve(true);
  }

  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.id = ADSENSE_SCRIPT_ID;
    script.async = true;
    script.crossOrigin = "anonymous";
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`;
    script.dataset.loading = "true";
    script.addEventListener(
      "load",
      () => {
        script.dataset.loading = "false";
        script.dataset.loaded = "true";
        resolve(true);
      },
      { once: true },
    );
    script.addEventListener(
      "error",
      () => {
        script.dataset.loading = "false";
        script.dataset.loaded = "false";
        resolve(false);
      },
      { once: true },
    );
    document.head.appendChild(script);
  });
};

const AdBanner = ({
  slot = "typing",
  adClient,
  adSlot,
  className = "",
  format = "auto",
  responsive = true,
}) => {
  const containerRef = useRef(null);
  const adRef = useRef(null);
  const hasRequestedAdRef = useRef(false);
  const resolvedClient = adClient || AD_CLIENT;
  const resolvedSlot = adSlot || AD_SLOTS[slot] || AD_SLOTS.typing;

  useEffect(() => {
    if (!resolvedClient || !resolvedSlot || !adRef.current) {
      console.warn(`${DEBUG_PREFIX} missing config`, {
        slot,
        resolvedClient,
        resolvedSlot,
      });
      return;
    }

    if (hasRequestedAdRef.current) {
      return;
    }

    let cancelled = false;
    const adNode = adRef.current;
    const containerNode = containerRef.current;
    const requestAdWhenReady = () => {
      if (cancelled || hasRequestedAdRef.current || !adRef.current) {
        return;
      }

      const width = containerRef.current?.offsetWidth || 0;
      if (width <= 0) {
        console.info(`${DEBUG_PREFIX} waiting for width`, { slot, width });
        return;
      }

      if (adRef.current.dataset.adStatus) {
        console.info(`${DEBUG_PREFIX} already initialized`, {
          slot,
          adStatus: adRef.current.dataset.adStatus,
        });
        hasRequestedAdRef.current = true;
        return;
      }

      try {
        hasRequestedAdRef.current = true;
        console.info(`${DEBUG_PREFIX} requesting ad`, {
          slot,
          resolvedClient,
          resolvedSlot,
          width,
          height: containerRef.current?.offsetHeight || 0,
          scriptPresent: Boolean(
            document.querySelector(
              'script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]',
            ),
          ),
        });
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});

        window.setTimeout(() => {
          console.info(`${DEBUG_PREFIX} slot status`, {
            slot,
            adStatus: adRef.current?.dataset.adStatus || "not-set",
            width: containerRef.current?.offsetWidth || 0,
            height: containerRef.current?.offsetHeight || 0,
          });

          if (!adRef.current?.dataset.adStatus) {
            console.warn(`${DEBUG_PREFIX} no status after request`, {
              slot,
              message:
                "Likely causes: ad blocker, localhost/dev mode, unapproved account or slot, or no-fill from AdSense.",
            });
          }
        }, 1200);
      } catch (error) {
        hasRequestedAdRef.current = false;
        console.error(`${DEBUG_PREFIX} request failed`, error);
      }
    };

    const observer = new MutationObserver(() => {
      console.info(`${DEBUG_PREFIX} mutation observed`, {
        slot,
        adStatus: adNode.dataset.adStatus || "not-set",
        width: containerNode?.offsetWidth || 0,
        height: containerNode?.offsetHeight || 0,
      });
    });

    observer.observe(adNode, {
      attributes: true,
      attributeFilter: ["data-ad-status", "style", "class"],
    });

    const resizeObserver = new ResizeObserver(() => {
      requestAdWhenReady();
    });

    if (containerNode) {
      resizeObserver.observe(containerNode);
    }

    const loadAd = async () => {
      const scriptLoaded = await ensureAdSenseScript(resolvedClient);
      if (!scriptLoaded || cancelled || !adRef.current) {
        console.warn(`${DEBUG_PREFIX} AdSense script unavailable`, {
          slot,
          resolvedClient,
        });
        return;
      }

      requestAdWhenReady();
    };

    loadAd();

    return () => {
      cancelled = true;
      observer.disconnect();
      resizeObserver.disconnect();
    };
  }, [resolvedClient, resolvedSlot, slot]);

  if (!resolvedClient || !resolvedSlot) {
    return null;
  }

  return (
    <section
      ref={containerRef}
      className={`mx-auto my-6 w-full max-w-5xl px-4 ${className}`.trim()}
      style={{ minHeight: "90px" }}
    >
      <ins
        key={`${resolvedClient}-${resolvedSlot}`}
        ref={adRef}
        className="adsbygoogle block"
        style={{ display: "block", width: "100%", minWidth: "250px", minHeight: "90px" }}
        data-ad-client={resolvedClient}
        data-ad-slot={resolvedSlot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </section>
  );
};

export default AdBanner;
