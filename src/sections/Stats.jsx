import { useEffect, useRef } from "react";
import { useCountUp } from "react-countup";
import { useInView } from "react-intersection-observer";
import { stats } from "../data/portfolioData";
import Reveal from "../components/Reveal";

function StatNumber({ value, suffix, inView }) {
  const ref = useRef(null);
  const { start } = useCountUp({
    ref,
    end: value,
    duration: 2,
    suffix,
    startOnMount: false,
  });

  useEffect(() => {
    if (inView) start();
  }, [inView, start]);

  return (
    <p className="font-display text-4xl sm:text-5xl font-bold text-gradient">
      <span ref={ref}>0{suffix}</span>
    </p>
  );
}

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <section ref={ref} className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto glass rounded-3xl p-10 sm:p-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 relative overflow-hidden">
        <div className="aurora opacity-60" />
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="relative z-10 text-center sm:text-left">
            <StatNumber value={stat.value} suffix={stat.suffix} inView={inView} />
            <p className="mt-2 text-sm text-text-muted">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
