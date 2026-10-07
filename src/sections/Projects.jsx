import { useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Section from "../components/Section";
import { projects, personal } from "../data/portfolioData";

const ordinal = (n) => String(n).padStart(2, "0");

function Project({ project, number }) {
  return (
    <li className="grid gap-x-14 gap-y-5 border-b border-border py-10 sm:grid-cols-[10rem_1fr]">
      <div className="tnum font-mono text-xs text-faint sm:pt-1.5">
        <span className="text-accent">{ordinal(number)}</span>
        <p className="mt-1">{project.subtitle}</p>
      </div>

      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <h3 className="display text-2xl">{project.title}</h3>
          <div className="flex items-center gap-5 text-sm">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-text"
              >
                <FaGithub size={14} /> Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-text"
              >
                <ExternalLink size={14} /> Live
              </a>
            )}
            {!project.github && !project.demo && (
              <span className="font-mono text-xs text-faint">
                private / client work
              </span>
            )}
          </div>
        </div>

        <p className="mt-4 max-w-2xl text-pretty text-[15px] leading-relaxed text-muted">
          {project.description}
        </p>

        {project.image && (
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            width="1600"
            height="900"
            loading="lazy"
            decoding="async"
            className="mt-6 w-full rounded-sm border border-border"
          />
        )}

        <ul className="mt-5 grid max-w-2xl gap-2 sm:grid-cols-2">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="flex gap-3 text-sm leading-relaxed text-muted"
            >
              <span className="mt-2.5 h-px w-3 shrink-0 bg-accent/60" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.1em] text-faint">
          {project.tech.join(" · ")}
        </p>
      </div>
    </li>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const allTech = useMemo(
    () => ["All", ...new Set(projects.flatMap((p) => p.tech))],
    [],
  );

  const numbered = useMemo(
    () => projects.map((project, i) => ({ project, number: i + 1 })),
    [],
  );

  const filtered = useMemo(
    () =>
      filter === "All"
        ? numbered
        : numbered.filter(({ project }) => project.tech.includes(filter)),
    [filter, numbered],
  );

  return (
    <Section
      id="projects"
      index="04"
      label="Projects"
      title="Things I've built"
      intro="A few projects worth showing, with what they actually do and how they're put together."
      tone="paper"
    >
      <div className="flex flex-wrap gap-x-5 gap-y-2 border-b border-border pb-6">
        {allTech.map((tech) => (
          <button
            key={tech}
            onClick={() => setFilter(tech)}
            className={`font-mono text-xs transition-colors ${
              filter === tech ? "text-accent" : "text-faint hover:text-muted"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <ol className="border-t border-border">
          {filtered.map(({ project, number }) => (
            <Project key={project.title} project={project} number={number} />
          ))}
        </ol>
      ) : (
        <p className="py-16 text-center text-sm text-muted">
          Nothing here uses {filter} yet.
        </p>
      )}

      <p className="mt-10 text-sm text-muted">
        More on{" "}
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="u-link text-accent"
        >
          GitHub
        </a>
        .
      </p>
    </Section>
  );
}
