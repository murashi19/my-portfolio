import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { experience } from "../data/portfolioData";
import Reveal from "../components/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="font-mono text-sm text-secondary mb-3">03 · Experience</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Where I've <span className="text-gradient">built things</span>
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-[15px] sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent/40 sm:-translate-x-1/2" />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <div key={job.company} className="relative sm:grid sm:grid-cols-2 sm:gap-10">
                <span
                  className="absolute left-0 sm:left-1/2 top-1.5 h-3.5 w-3.5 rounded-full bg-primary ring-4 ring-bg sm:-translate-x-1/2 z-10"
                />
                <div className={i % 2 === 0 ? "sm:col-start-1" : "sm:col-start-2"} />

                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`pl-10 sm:pl-0 ${
                    i % 2 === 0 ? "sm:col-start-2" : "sm:col-start-1 sm:row-start-1"
                  }`}
                >
                  <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-colors">
                    <p className="font-mono text-xs text-secondary">{job.duration}</p>
                    <h3 className="font-display font-semibold text-lg mt-1.5 flex items-center gap-2">
                      <Briefcase size={16} className="text-primary shrink-0" />
                      {job.role}
                    </h3>
                    <p className="text-text-muted text-sm mt-1">{job.company}</p>
                    <p className="text-text-muted text-xs mt-1 flex items-center gap-1.5">
                      <MapPin size={12} /> {job.location}
                    </p>
                    <p className="mt-4 text-sm text-text-muted leading-relaxed">
                      {job.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {job.points.map((point) => (
                        <li key={point} className="text-sm text-text-muted flex gap-2">
                          <span className="text-primary mt-1.5">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {job.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
