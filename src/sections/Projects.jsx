import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Layers3 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/portfolioData";
import Reveal from "../components/Reveal";

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-[#070d18] transition-colors hover:border-primary/30 ${index === 0 ? "lg:col-span-2 lg:grid lg:grid-cols-2" : ""}`}
    >
      <div className="relative contents">
        <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div
          className={`bg-white/5 grid place-items-center overflow-hidden ${index === 0 ? "min-h-64 lg:min-h-full" : "aspect-video"}`}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              width="1600"
              height="900"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
            />
          ) : (
            <div className="project-cover relative h-full w-full grid place-items-center overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-60" />
              <div className="relative flex flex-col items-center gap-3 text-white/80">
                <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
                  <Layers3 size={27} strokeWidth={1.4} />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
                  Project / 0{index + 1}
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 sm:p-8 flex flex-col flex-1">
          <p className="text-xs font-mono text-secondary">{project.subtitle}</p>
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display font-semibold text-xl mt-1.5">
              {project.title}
            </h3>
            <span className="font-mono text-xs text-text-muted/40">
              0{index + 1}
            </span>
          </div>
          <p className="mt-3 text-sm text-text-muted leading-relaxed flex-1">
            {project.description}
          </p>

          <ul className="mt-4 space-y-1.5">
            {project.features.slice(0, 3).map((f) => (
              <li key={f} className="text-xs text-text-muted flex gap-2">
                <span className="text-accent">✦</span>
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-text-muted"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-5 flex gap-3 pt-4 border-t border-white/5">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text transition-colors"
              >
                <FaGithub size={15} /> View Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text transition-colors"
              >
                <ExternalLink size={15} /> Live Demo
              </a>
            )}
            {!project.github && !project.demo && (
              <span className="text-xs text-text-muted/70">
                Private / internal project
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const allTech = [
    "All",
    "React.js",
    "Next.js",
    "Express.js",
    "Go",
    "Laravel",
    "PostgreSQL",
  ];

  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.tech.includes(filter)),
    [filter],
  );

  return (
    <section id="projects" className="relative py-28 px-6 bg-bg-elevated/40">
      <div className="max-w-6xl mx-auto">
        <Reveal className="grid gap-6 md:grid-cols-[1fr_0.7fr] md:items-end">
          <div>
            <p className="section-kicker">04 / Selected work</p>
            <h2 className="section-title mt-3">
              Products, systems, and{" "}
              <span className="text-gradient">real outcomes.</span>
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-text-muted md:justify-self-end">
            A selection of full-stack work across commerce, education, and
            enterprise asset operations.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-2">
          {allTech.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-4 py-2 rounded-lg border text-xs font-mono transition-colors ${
                filter === t
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-white/8 bg-white/2.5 text-text-muted hover:text-text"
              }`}
            >
              {t}
            </button>
          ))}
        </Reveal>

        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
