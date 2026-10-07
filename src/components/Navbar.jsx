import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, personal } from "../data/portfolioData";
import { useActiveSection } from "../hooks/useActiveSection";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.href));

  // Close the mobile menu if the viewport grows past the breakpoint,
  // so it can't get stuck open behind the desktop nav.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Sections are lazy-loaded, so the target may not be in the DOM yet.
  // Retry briefly until it mounts, then scroll to it.
  const goTo = (href) => {
    setOpen(false);
    let attempts = 0;
    const tryScroll = () => {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
      if (attempts++ < 30) requestAnimationFrame(tryScroll);
    };
    tryScroll();
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            goTo("#hero");
          }}
          className="flex items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Rafli Shidiq
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.slice(1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                goTo(link.href);
              }}
              className={`text-sm transition-colors ${
                active === link.href
                  ? "text-accent"
                  : "text-muted hover:text-text"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href={personal.resumeFile}
            download
            className="u-link text-sm text-muted transition-colors hover:text-text"
          >
            Résumé
          </a>
        </nav>

        <button
          className="-mr-2 p-2 text-text md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden border-t border-border bg-bg md:hidden"
          >
            <nav className="mx-auto flex max-w-5xl flex-col px-6 py-3">
              {navLinks.slice(1).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    goTo(link.href);
                  }}
                  className={`border-b border-border py-3 text-sm last:border-0 ${
                    active === link.href ? "text-accent" : "text-muted"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={personal.resumeFile}
                download
                className="py-3 text-sm text-accent"
              >
                Résumé (PDF)
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
