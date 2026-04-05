import { useEffect } from "react";

const DEFAULT_TITLE = "SiTyping | Free Typing Practice";
const DEFAULT_DESCRIPTION =
  "SiTyping is a responsive typing practice website with free speed tests, accuracy tracking, and helpful public information pages.";
const DEFAULT_SITE_URL =
  import.meta.env.VITE_SITE_URL || "https://si-typing.vercel.app";

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

export default function Seo({ title, description, path = "/" }) {
  useEffect(() => {
    const pageTitle = title ? `${title} | SiTyping` : DEFAULT_TITLE;
    const pageDescription = description || DEFAULT_DESCRIPTION;
    const canonicalUrl = new URL(path, DEFAULT_SITE_URL).toString();

    document.title = pageTitle;
    upsertMeta('meta[name="description"]', {
      name: "description",
      content: pageDescription,
    });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: "index, follow",
    });
    upsertLink('link[rel="canonical"]', {
      rel: "canonical",
      href: canonicalUrl,
    });
  }, [description, path, title]);

  return null;
}
