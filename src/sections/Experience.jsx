import Section from "../components/Section";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <Section id="experience" index="03" label="Experience" title="Where I've worked">
      <ol className="space-y-16">
        {experience.map((job) => (
          <li
            key={job.company}
            className="grid gap-x-14 gap-y-4 sm:grid-cols-[10rem_1fr]"
          >
            <div className="tnum font-mono text-xs text-faint sm:sticky sm:top-24 sm:self-start">
              <p>{job.duration}</p>
              <p className="mt-1">{job.location}</p>
            </div>

            <div className="min-w-0">
              <h3 className="display text-xl">{job.role}</h3>
              <p className="mt-1 text-sm text-muted">{job.company}</p>

              <p className="mt-4 max-w-2xl text-pretty text-[15px] leading-relaxed text-muted">
                {job.description}
              </p>

              <ul className="mt-5 max-w-2xl space-y-2.5">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-[15px] leading-relaxed text-muted"
                  >
                    <span className="mt-2.5 h-px w-3 shrink-0 bg-accent/60" />
                    <span className="text-pretty">{point}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.1em] text-faint">
                {job.tech.join(" · ")}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
