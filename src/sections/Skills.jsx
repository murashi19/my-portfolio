import Section from "../components/Section";
import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      label="Skills"
      title="What I work with"
      intro="The tools I reach for most often. I'd rather be honest about the edges of this list than pad it out."
    >
      <dl className="border-t border-border">
        {skills.map(({ group, items }) => (
          <div
            key={group}
            className="row-line grid gap-x-8 gap-y-2 border-b border-border py-5 sm:grid-cols-[10rem_1fr]"
          >
            <dt className="font-mono text-xs uppercase tracking-[0.12em] text-faint sm:pt-0.5">
              {group}
            </dt>
            <dd className="text-pretty text-[15px] leading-relaxed">
              {items.join(", ")}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
