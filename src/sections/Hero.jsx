import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  ArrowDown,
  ArrowRight,
  Braces,
  Check,
  Container,
  Database,
  Download,
  GitBranch,
  Mail,
  MapPin,
  Server,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personal } from "../data/portfolioData";

const architecture = [
  {
    icon: Braces,
    label: "Interface",
    value: "React + Tailwind",
    color: "text-cyan-300",
  },
  {
    icon: Server,
    label: "API layer",
    value: "Express + Go / Gin",
    color: "text-blue-300",
  },
  {
    icon: Database,
    label: "Data",
    value: "PostgreSQL + Redis",
    color: "text-violet-300",
  },
];

function SystemWorkspace() {
  return (
    <div
      className="hero-workspace relative mx-auto w-full max-w-lg"
      aria-label="Full-stack application architecture"
    >
      <motion.div
        initial={{ opacity: 0, y: 24, rotateX: 5, rotateY: -5 }}
        animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ rotateX: -1.5, rotateY: 2, y: -4 }}
        className="hero-console overflow-hidden rounded-3xl border border-white/10 bg-[#07101d]/95 shadow-2xl shadow-black/50"
      >
        <div className="flex items-center justify-between border-b border-white/8 px-5 py-3.5">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <p className="font-mono text-[10px] tracking-wide text-text-muted">
            belimudah / production
          </p>
          <GitBranch size={14} className="text-text-muted" />
        </div>

        <div className="p-5 sm:p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-secondary">
                System architecture
              </p>
              <h2 className="mt-1 font-display text-lg font-semibold">
                From interface to deployment
              </h2>
            </div>
            <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/15 bg-emerald-400/8 px-2.5 py-1 font-mono text-[9px] text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />{" "}
              live
            </span>
          </div>

          <div className="grid gap-2.5">
            {architecture.map(({ icon: Icon, label, value, color }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.65 + index * 0.12 }}
                className="group flex items-center gap-3 rounded-xl border border-white/8 bg-white/2.5 p-3.5 transition-colors hover:border-primary/30 hover:bg-primary/5"
              >
                <span
                  className={`grid h-9 w-9 place-items-center rounded-lg bg-white/5 ${color}`}
                >
                  <Icon size={17} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-wider text-text-muted">
                    {label}
                  </p>
                  <p className="mt-0.5 font-mono text-xs text-white">{value}</p>
                </div>
                <ArrowRight
                  size={14}
                  className="text-text-muted/40 transition-transform group-hover:translate-x-1 group-hover:text-primary"
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-white/8 bg-black/25 p-4 font-mono text-[10px] leading-5">
            <p>
              <span className="text-violet-300">const</span>{" "}
              <span className="text-cyan-200">release</span> ={" "}
              <span className="text-amber-200">await</span> deploy&#40;&#123;
            </p>
            <p className="pl-4 text-text-muted">
              container:{" "}
              <span className="text-emerald-300">&quot;docker&quot;</span>,
            </p>
            <p className="pl-4 text-text-muted">
              server:{" "}
              <span className="text-emerald-300">&quot;nginx&quot;</span>,
            </p>
            <p className="pl-4 text-text-muted">
              pipeline:{" "}
              <span className="text-emerald-300">
                &quot;github-actions&quot;
              </span>
            </p>
            <p>&#125;&#41;;</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 18, y: 12 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute -bottom-5 -right-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0c1626] px-4 py-3 shadow-xl sm:-right-5"
      >
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-500/10 text-blue-300">
          <Container size={18} />
        </span>
        <div>
          <p className="font-mono text-[9px] uppercase tracking-wider text-text-muted">
            Latest deployment
          </p>
          <p className="mt-0.5 flex items-center gap-1.5 text-xs font-medium">
            <Check size={13} className="text-emerald-400" /> All checks passed
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden grid-bg"
    >
      <div className="aurora" />

      <div className="relative z-20 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-secondary mb-4 flex items-center gap-2"
          >
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
            Open to full-time opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Hi, I'm <span className="text-gradient">{personal.name}</span>
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
            I build dependable web products from responsive React interfaces and
            REST APIs to databases, containers, and deployment workflows.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-4 flex items-center gap-2 text-sm text-text-muted"
          >
            <MapPin size={15} className="text-secondary" /> {personal.location}
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
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:-translate-y-0.5 transition-transform"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
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
          className="relative flex min-h-105 items-center sm:min-h-125 lg:min-h-140"
        >
          <SystemWorkspace />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document
            .querySelector("#about")
            ?.scrollIntoView({ behavior: "smooth" });
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
