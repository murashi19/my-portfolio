import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ImageOff } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/portfolioData";
import Reveal from "../components/Reveal";

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 8 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-primary/40 via-white/5 to-accent/40 transition-transform duration-200 ease-out"
    >
      <div className="relative rounded-2xl glass overflow-hidden h-full flex flex-col">
        <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="aspect-video bg-white/5 grid place-items-center overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="flex flex-col items-center gap-2 text-text-muted">
              <ImageOff size={28} strokeWidth={1.2} />
              <span className="text-xs font-mono">screenshot placeholder</span>
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col flex-1">
          <p className="text-xs font-mono text-secondary">{project.subtitle}</p>
          <h3 className="font-display font-semibold text-lg mt-1.5">{project.title}</h3>
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
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text transition-colors"
            >
              <FaGithub size={15} /> Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text transition-colors"
            >
              <ExternalLink size={15} /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const allTech = useMemo(() => {
    const set = new Set();
    projects.forEach((p) => p.tech.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.tech.includes(filter))),
    [filter]
  );

  return (
    <section id="projects" className="relative py-28 px-6 bg-bg-elevated/40">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="font-mono text-sm text-secondary mb-3">04 · Projects</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Things I've <span className="text-gradient">shipped</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-2">
          {allTech.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-colors ${
                filter === t
                  ? "bg-primary text-white"
                  : "glass text-text-muted hover:text-text"
              }`}
            >
              {t}
            </button>
          ))}
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
