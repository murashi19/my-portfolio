import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personal } from "../data/portfolioData";

const HeroScene = lazy(() => import("../components/three/HeroScene"));

const floatIcons = [
  { label: "React", top: "12%", left: "6%", delay: 0 },
  { label: "Go", top: "68%", left: "4%", delay: 0.6 },
  { label: "Docker", top: "20%", left: "88%", delay: 1.1 },
  { label: "PostgreSQL", top: "74%", left: "86%", delay: 1.6 },
  { label: "Laravel", top: "42%", left: "90%", delay: 0.3 },
  { label: "Tailwind", top: "48%", left: "3%", delay: 1.9 },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden grid-bg"
    >
      <div className="aurora" />

      {/* Floating tech chips — desktop only to avoid mobile clutter */}
      <div className="hidden lg:block">
        {floatIcons.map((icon) => (
          <motion.div
            key={icon.label}
            className="absolute z-10 glass rounded-full px-3.5 py-1.5 text-xs font-mono text-text-muted animate-float"
            style={{ top: icon.top, left: icon.left, animationDelay: `${icon.delay}s` }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + icon.delay * 0.2, duration: 0.6 }}
          >
            {icon.label}
          </motion.div>
        ))}
      </div>

      <div className="relative z-20 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-secondary mb-4 flex items-center gap-2"
          >
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
            Available for new opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Hi, I'm{" "}
            <span className="text-gradient">{personal.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-display text-2xl sm:text-3xl text-text-muted h-10"
          >
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "React Developer",
                2000,
                "Golang Developer",
                2000,
                "Backend Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-gradient font-semibold"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-text-muted text-lg max-w-xl leading-relaxed"
          >
            I build end-to-end web applications with React, Go, and Laravel —
            from REST APIs to responsive interfaces — and I'm currently
            sharpening my DevOps toolkit at a full-stack bootcamp in Depok.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href={personal.resumeFile}
              download
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
            >
              <Download size={16} /> Download CV
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:-translate-y-0.5 transition-transform"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-text-muted hover:text-text transition-colors"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 flex items-center gap-4"
          >
            {[
              { icon: FaGithub, href: personal.github, label: "GitHub" },
              { icon: FaLinkedin, href: personal.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="h-10 w-10 grid place-items-center rounded-full glass text-text-muted hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Icon size={17} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative h-[380px] sm:h-[460px] lg:h-[560px]"
        >
          <Suspense
            fallback={
              <div className="h-full w-full grid place-items-center text-text-muted text-sm font-mono">
                loading scene…
              </div>
            }
          >
            <HeroScene />
          </Suspense>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted hover:text-text transition-colors z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll to About"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
