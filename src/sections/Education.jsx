import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { education, certificates, languages } from "../data/portfolioData";
import Reveal, { Stagger, staggerItem } from "../components/Reveal";

export default function Education() {
  return (
    <section id="education" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-16">
        <div className="lg:col-span-3">
          <Reveal>
            <p className="font-mono text-sm text-secondary mb-3">05 · Education</p>
            <h2 className="font-display text-4xl font-bold tracking-tight">
              Academic <span className="text-gradient">background</span>
            </h2>
          </Reveal>

          <div className="mt-10 space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 hover:border-secondary/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-secondary/10 grid place-items-center text-secondary">
                    <GraduationCap size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-mono text-xs text-secondary">{edu.duration}</p>
                    <h3 className="font-display font-semibold text-lg mt-1">{edu.degree}</h3>
                    <p className="text-text-muted text-sm">
                      {edu.school} · {edu.location}
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {edu.details.map((d) => (
                        <li key={d} className="text-sm text-text-muted flex gap-2">
                          <span className="text-secondary mt-1.5">▸</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-6 glass rounded-2xl p-6">
            <p className="font-mono text-xs text-secondary uppercase tracking-wider">Languages</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {languages.map((l) => (
                <span key={l.name} className="text-sm text-text-muted">
                  {l.name} <span className="text-text-muted/60">· {l.level}</span>
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div id="certificates" className="lg:col-span-2">
          <Reveal>
            <p className="font-mono text-sm text-secondary mb-3">06 · Certificates</p>
            <h2 className="font-display text-4xl font-bold tracking-tight">
              Credentials <span className="text-gradient">earned</span>
            </h2>
          </Reveal>

          <Stagger className="mt-10 space-y-4" staggerChildren={0.1}>
            {certificates.map((cert) => (
              <motion.div
                key={cert.title}
                variants={staggerItem}
                whileHover={{ y: -3 }}
                className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-accent/30 transition-colors"
              >
                <div className="h-11 w-11 shrink-0 rounded-xl bg-accent/10 grid place-items-center text-accent">
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm">{cert.title}</h3>
                  <p className="text-text-muted text-xs mt-0.5">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
