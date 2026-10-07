import Section from "../components/Section";
import { education, certificates, languages } from "../data/portfolioData";

export default function Education() {
  return (
    <Section id="education" index="05" label="Education" title="Where I studied">
      <div className="space-y-14">
        <ol className="border-t border-border">
          {education.map((edu) => (
            <li
              key={edu.school}
              className="grid gap-x-14 gap-y-3 border-b border-border py-7 sm:grid-cols-[10rem_1fr]"
            >
              <div className="tnum font-mono text-xs text-faint sm:pt-1">
                <p>{edu.duration}</p>
                <p className="mt-1">{edu.location}</p>
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold tracking-tight">{edu.degree}</h3>
                <p className="mt-0.5 text-sm text-muted">{edu.school}</p>
                <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted">
                  {edu.note}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="grid gap-x-14 gap-y-5 sm:grid-cols-[10rem_1fr]">
          <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-faint">
            Certificates
          </h3>
          <ul className="border-t border-border">
            {certificates.map((cert) => (
              <li
                key={cert.title}
                className="row-line flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-border py-3.5 text-sm"
              >
                <span>{cert.title}</span>
                <span className="tnum font-mono text-xs text-faint">
                  {cert.issuer} · {cert.year}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-x-14 gap-y-3 sm:grid-cols-[10rem_1fr]">
          <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-faint sm:pt-1">
            Languages
          </h3>
          <p className="text-[15px]">
            {languages.map((l) => `${l.name} (${l.level})`).join(", ")}
          </p>
        </div>
      </div>
    </Section>
  );
}
