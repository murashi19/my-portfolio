import { motion, useMotionValue, useSpring } from "framer-motion";
import { BadgeCheck, Code2, Grip, MapPin, User } from "lucide-react";
import { personal, quickFacts } from "../data/portfolioData";
import Reveal, { Stagger } from "../components/Reveal";
import { staggerItem } from "../components/motionVariants";

function EmployeeCard() {
  const rotateXValue = useMotionValue(0);
  const rotateYValue = useMotionValue(0);
  const rotateX = useSpring(rotateXValue, { stiffness: 260, damping: 24 });
  const rotateY = useSpring(rotateYValue, { stiffness: 260, damping: 24 });

  const handlePointerMove = (event) => {
    if (event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    rotateXValue.set(y * -12);
    rotateYValue.set(x * 14);
  };

  const resetTilt = () => {
    rotateXValue.set(0);
    rotateYValue.set(0);
  };

  return (
    <div className="relative mx-auto w-72 sm:w-80 select-none perspective-[1000px] lg:mx-0">
      <motion.div
        drag
        dragSnapToOrigin
        dragElastic={0.16}
        dragTransition={{ bounceStiffness: 420, bounceDamping: 24 }}
        whileDrag={{ scale: 1.035, cursor: "grabbing" }}
        className="relative z-10 cursor-grab touch-none"
        aria-label={`${personal.name} interactive employee ID card. Drag to move it.`}
        role="img"
      >
        <div className="id-lanyard" aria-hidden="true">
          <span />
        </div>

        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetTilt}
          className="id-card relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#0b1220] shadow-2xl shadow-black/40"
        >
          <div className="id-card-shine" aria-hidden="true" />
          <div className="relative border-b border-white/10 px-5 pb-4 pt-5 transform-[translateZ(24px)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-linear-to-br from-primary to-accent text-white shadow-lg shadow-primary/20">
                  <Code2 size={17} />
                </span>
                <div>
                  <p className="font-display text-xs font-bold tracking-wide text-white">
                    MURASHI
                  </p>
                  <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-secondary">
                    Digital Studio
                  </p>
                </div>
              </div>
              <BadgeCheck size={19} className="text-secondary" />
            </div>
          </div>

          <div className="relative p-5 transform-[translateZ(34px)]">
            <div className="relative mx-auto h-56 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              {personal.avatar ? (
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  width="720"
                  height="1059"
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <div className="grid h-full place-items-center text-text-muted">
                  <User size={48} strokeWidth={1.2} />
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-[#070b13] to-transparent" />
              <span className="absolute bottom-3 right-3 rounded-full border border-emerald-300/20 bg-emerald-400/15 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-emerald-300">
                Available
              </span>
            </div>

            <div className="mt-5">
              <p className="font-display text-xl font-bold tracking-tight text-white">
                {personal.name}
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-secondary">
                Full Stack Developer
              </p>
              <p className="mt-3 flex items-center gap-1.5 text-xs text-text-muted">
                <MapPin size={12} /> {personal.location}
              </p>
            </div>

            <div className="mt-5 flex items-end justify-between border-t border-white/10 pt-4">
              <div>
                <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-text-muted">
                  Employee ID
                </p>
                <p className="mt-1 font-mono text-xs text-white">
                  MRS-2026-001
                </p>
              </div>
              <div className="id-barcode" aria-hidden="true" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <p className="mt-5 flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted/70">
        <Grip size={13} /> Drag the card · move cursor to tilt
      </p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-14 items-start">
        <Reveal className="lg:col-span-2" y={30}>
          <EmployeeCard />

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
            <p className="font-mono text-sm text-secondary mb-3">
              01 · About Me
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
              Turning problems into{" "}
              <span className="text-gradient">reliable software</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-text-muted leading-relaxed text-lg">
              {personal.summary}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-4 text-text-muted leading-relaxed">
              {personal.objective}
            </p>
          </Reveal>

          <Stagger
            className="mt-10 grid sm:grid-cols-2 gap-4"
            staggerChildren={0.08}
          >
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
                <h3 className="font-display font-semibold text-base">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  {card.body}
                </p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
