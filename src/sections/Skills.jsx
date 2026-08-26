import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";
import Reveal from "../components/Reveal";

const categories = Object.keys(skills);

export default function Skills() {
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="skills" className="relative py-28 px-6 bg-bg-elevated/40">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="font-mono text-sm text-secondary mb-3">02 · Skills</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            What I <span className="text-gradient">work with</span>
          </h2>
          <p className="mt-4 text-text-muted">
            A practical toolkit built through real projects — not just tutorials.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                active === cat ? "text-white" : "text-text-muted hover:text-text"
              }`}
            >
              {active === cat && (
                <motion.span
                  layoutId="skill-tab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </Reveal>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skills[active].map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-5 hover:border-secondary/30 transition-colors"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 font-mono text-xs text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 font-display font-semibold">{skill}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
