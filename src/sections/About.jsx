import { motion } from "framer-motion";
import { User } from "lucide-react";
import { personal, quickFacts } from "../data/portfolioData";
import Reveal, { Stagger, staggerItem } from "../components/Reveal";

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-14 items-start">
        <Reveal className="lg:col-span-2" y={30}>
          <div className="relative mx-auto lg:mx-0 w-64 sm:w-72">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 blur-2xl" />
            <div className="relative aspect-[4/5] rounded-[2rem] glass overflow-hidden grid place-items-center">
              {personal.avatar ? (
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center gap-3 text-text-muted p-6 text-center">
                  <User size={48} strokeWidth={1.2} />
                  <span className="text-xs font-mono">
                    add-your-photo.jpg
                    <br />
                    (drop into /public)
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="glass rounded-xl p-4">
                <p className="text-[11px] uppercase tracking-wider text-text-muted font-mono">
                  {fact.label}
                </p>
                <p className="mt-1 text-sm font-medium">{fact.value}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="lg:col-span-3">
          <Reveal>
            <p className="font-mono text-sm text-secondary mb-3">01 · About Me</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
              Turning problems into <span className="text-gradient">reliable software</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-text-muted leading-relaxed text-lg">
              {personal.summary}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-4 text-text-muted leading-relaxed">{personal.objective}</p>
          </Reveal>

          <Stagger className="mt-10 grid sm:grid-cols-2 gap-4" staggerChildren={0.08}>
            {[
              {
                title: "End-to-end ownership",
                body: "From database schema to deployment pipeline — I've independently shipped a project's full lifecycle.",
              },
              {
                title: "REST API design",
                body: "Comfortable building clean, well-structured APIs in both Go and Laravel/PHP.",
              },
              {
                title: "DevOps fundamentals",
                body: "Docker, Nginx, GitHub Actions CI/CD, and Linux server administration.",
              },
              {
                title: "Product-minded UI",
                body: "Responsive interfaces built with attention to UX, informed by hands-on Figma work.",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5 hover:border-primary/30 transition-colors"
              >
                <h3 className="font-display font-semibold text-base">{card.title}</h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">{card.body}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
