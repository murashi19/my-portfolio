import Section from "../components/Section";
import { personal, quickFacts } from "../data/portfolioData";

export default function About() {
  return (
    <Section id="about" index="01" label="About" title="A bit about how I work">
      <div className="grid gap-x-14 gap-y-10 sm:grid-cols-[10rem_1fr]">
        <dl className="space-y-6 sm:sticky sm:top-24 sm:self-start">
          {quickFacts.map((fact) => (
            <div key={fact.label}>
              <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                {fact.label}
              </dt>
              <dd className="mt-1 text-sm">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="min-w-0 space-y-5 text-[15px] leading-relaxed">
          <p className="text-pretty text-lg leading-relaxed">
            {personal.summary}
          </p>
          <p className="text-pretty text-muted">
            I like problems that have a clear edge to them — an API that needs
            to hold up under load, a deploy that keeps breaking, a form that
            loses people halfway through. Most of what I know came from
            shipping things and then fixing what broke.
          </p>
          <p className="text-pretty text-muted">
            Outside of work I'm usually reading about systems design or
            rebuilding something small just to see how it fits together.
          </p>
        </div>
      </div>
    </Section>
  );
}
