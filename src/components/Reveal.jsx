import { motion } from "framer-motion";

/**
 * Scroll-triggered reveal wrapper. Fades/slides children into
 * view once, respecting reduced-motion preference implicitly
 * via small, quick transitions.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  once = true,
  className = "",
  as = "div",
}) {
  const Comp = motion[as] || motion.div;
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Comp>
  );
}

export function Stagger({ children, className = "", staggerChildren = 0.08, once = true }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren } },
      }}
    >
      {children}
    </motion.div>
  );
}
