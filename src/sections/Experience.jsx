import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { experience } from "../data/portfolioData";
import Reveal from "../components/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="grid gap-6 md:grid-cols-[0.7fr_1fr]">
          <div><p className="section-kicker">03 / Experience</p><h2 className="section-title mt-3">Work that built my <span className="text-gradient">foundation.</span></h2></div>
          <p className="max-w-xl self-end text-sm leading-7 text-text-muted md:justify-self-end">Product development, independent delivery, and infrastructure support across education and enterprise environments.</p>
        </Reveal>

        <div className="mt-14 border-t border-white/10">
          {experience.map((job, index) => (
            <motion.article key={job.company} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.55, delay: index * 0.06 }} className="experience-row group grid gap-6 border-b border-white/10 py-9 md:grid-cols-[180px_1fr_44px] md:gap-10">
              <div><p className="font-mono text-[11px] uppercase tracking-wider text-secondary">{job.duration}</p><p className="mt-3 flex items-center gap-1.5 text-xs text-text-muted"><MapPin size={12} /> {job.location}</p></div>
              <div>
                <h3 className="font-display text-xl font-semibold text-white">{job.role}</h3><p className="mt-1 text-sm text-text-muted">{job.company}</p>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-text-muted">{job.description}</p>
                <ul className="mt-5 grid gap-2.5">{job.points.slice(0, 3).map((point) => <li key={point} className="flex gap-3 text-sm leading-6 text-text-muted"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-secondary" />{point}</li>)}</ul>
                <div className="mt-6 flex flex-wrap gap-2">{job.tech.map((tech) => <span key={tech} className="font-mono text-[10px] text-text-muted/70">#{tech.replaceAll(" ", "-")}</span>)}</div>
              </div>
              <span className="hidden h-11 w-11 place-items-center rounded-full border border-white/10 text-text-muted transition-all group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary md:grid"><ArrowUpRight size={17} /></span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
