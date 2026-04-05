import { useEffect } from "react";

const DEFAULT_TITLE = "SiTyping | Free Typing Practice";
const DEFAULT_DESCRIPTION =
  "SiTyping is a responsive typing practice website with free speed tests, accuracy tracking, and helpful public information pages.";
const DEFAULT_SITE_URL =
  import.meta.env.VITE_SITE_URL || "https://si-typing.vercel.app";
const DEFAULT_OG_IMAGE = import.meta.env.VITE_OG_IMAGE || "";

const upsertMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
};

const upsertLink = (selector, attributes) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
};

const upsertJsonLd = (id, data) => {
  let element = document.head.querySelector(`script[data-seo-id="${id}"]`);

  if (!data) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement("script");
    element.type = "application/ld+json";
    element.setAttribute("data-seo-id", id);
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
};

export default function Seo({
  title,
  description,
  path = "/",
  type = "website",
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  structuredData,
}) {
  useEffect(() => {
    const pageTitle = title ? `${title} | SiTyping` : DEFAULT_TITLE;
    const pageDescription = description || DEFAULT_DESCRIPTION;
    const canonicalUrl = new URL(path, DEFAULT_SITE_URL).toString();
    const robots = noindex ? "noindex, nofollow" : "index, follow";

    document.title = pageTitle;
    upsertMeta('meta[name="description"]', {
      name: "description",
      content: pageDescription,
    });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: robots,
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: pageTitle,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: pageDescription,
    });
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: type,
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: "SiTyping",
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: image ? "summary_large_image" : "summary",
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: pageTitle,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: pageDescription,
    });

    if (image) {
      const imageUrl = new URL(image, DEFAULT_SITE_URL).toString();
      upsertMeta('meta[property="og:image"]', {
        property: "og:image",
        content: imageUrl,
      });
      upsertMeta('meta[name="twitter:image"]', {
        name: "twitter:image",
        content: imageUrl,
      });
    }

    upsertLink('link[rel="canonical"]', {
      rel: "canonical",
      href: canonicalUrl,
    });
    upsertJsonLd("page", structuredData || null);
  }, [description, image, noindex, path, structuredData, title, type]);

  return null;
}
