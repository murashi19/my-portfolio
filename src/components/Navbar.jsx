import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navLinks, personal } from "../data/portfolioData";
import { useActiveSection } from "../hooks/useActiveSection";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`flex items-center justify-between rounded-full px-4 transition-all duration-500 ${
            scrolled ? "border border-white/10 bg-[#060c16]/85 py-2 shadow-xl shadow-black/30 backdrop-blur-xl" : "py-1"
          }`}
        >
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#hero");
            }}
            className="flex items-center gap-2 font-display text-sm font-bold tracking-tight"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-xs text-bg">MR</span>
            <span>Murashi<span className="text-gradient">.dev</span></span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                className="relative px-4 py-2 text-sm text-text-muted hover:text-text transition-colors"
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-white/[0.07]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 ${active === link.href ? "text-text" : ""}`}>
                  {link.name}
                </span>
              </a>
            ))}
          </nav>

          <a
            href={personal.resumeFile}
            download
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-bg hover:bg-secondary transition-colors"
          >
            <Download size={15} /> Resume
          </a>

          <button
            className="md:hidden p-2 text-text"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mx-6 mt-3 glass rounded-2xl p-4"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                  className={`px-4 py-3 rounded-xl text-sm transition-colors ${
                    active === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-text-muted hover:text-text"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={personal.resumeFile}
                download
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-white"
              >
                <Download size={15} /> Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
