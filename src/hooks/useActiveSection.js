import { useEffect, useState } from "react";

const observerOptions = { rootMargin: "-45% 0px -45% 0px" };

/**
 * Tracks which section is currently in view.
 *
 * Sections are lazy-loaded, so they may not exist in the DOM when this
 * hook first runs. A MutationObserver keeps watching the document and
 * starts observing each section as soon as it mounts.
 */
export function useActiveSection(ids, options = observerOptions) {
  const [active, setActive] = useState(ids[0]);
  const key = ids.join("|");

  useEffect(() => {
    const targets = key.split("|");
    const observed = new Set();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(`#${entry.target.id}`);
      });
    }, options);

    const scan = () => {
      targets.forEach((id) => {
        const el = document.getElementById(id.replace("#", ""));
        if (el && !observed.has(el)) {
          observed.add(el);
          observer.observe(el);
        }
      });
      return observed.size === targets.length;
    };

    if (!scan()) {
      const mo = new MutationObserver(() => {
        if (scan()) mo.disconnect();
      });
      mo.observe(document.body, { childList: true, subtree: true });
      return () => {
        mo.disconnect();
        observer.disconnect();
      };
    }

    return () => observer.disconnect();
  }, [key, options]);

  return active;
}
