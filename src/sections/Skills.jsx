import { motion } from "framer-motion";
import { Braces, Database, Rocket, Server, Wrench } from "lucide-react";
import { skills } from "../data/portfolioData";
import Reveal from "../components/Reveal";

const categoryMeta = {
  Frontend: { icon: Braces, number: "01", accent: "text-cyan-300 bg-cyan-400/10" },
  Backend: { icon: Server, number: "02", accent: "text-blue-300 bg-blue-400/10" },
  Database: { icon: Database, number: "03", accent: "text-violet-300 bg-violet-400/10" },
  "DevOps & Deployment": { icon: Rocket, number: "04", accent: "text-emerald-300 bg-emerald-400/10" },
  Tools: { icon: Wrench, number: "05", accent: "text-amber-300 bg-amber-400/10" },
};

export default function Skills() {
  return (
    <section id="skills" className="section-shell relative overflow-hidden px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="grid gap-6 border-b border-white/10 pb-10 md:grid-cols-[1fr_0.75fr] md:items-end">
          <div><p className="section-kicker">02 / Capabilities</p><h2 className="section-title mt-3">Tools chosen to <span className="text-gradient">ship reliably.</span></h2></div>
          <p className="max-w-lg text-sm leading-7 text-text-muted md:justify-self-end">A focused toolkit shaped by real product work—from interfaces and APIs to deployment and infrastructure.</p>
        </Reveal>

        <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
          {Object.entries(skills).map(([category, items], index) => {
            const meta = categoryMeta[category];
            const Icon = meta.icon;
            return (
              <motion.article key={category} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.06, duration: 0.5 }} className={`group bg-[#070d18] p-6 transition-colors hover:bg-[#0a1322] sm:p-8 ${index === 4 ? "md:col-span-2" : ""}`}>
                <div className="flex items-center justify-between"><span className={`grid h-10 w-10 place-items-center rounded-xl ${meta.accent}`}><Icon size={19} /></span><span className="font-mono text-[10px] tracking-[0.2em] text-text-muted/50">{meta.number}</span></div>
                <h3 className="mt-6 font-display text-lg font-semibold">{category}</h3>
                <div className="mt-5 flex flex-wrap gap-2">{items.map((skill) => <span key={skill} className="rounded-lg border border-white/8 bg-white/[0.025] px-3 py-2 font-mono text-[11px] text-text-muted transition-colors group-hover:text-slate-300">{skill}</span>)}</div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
