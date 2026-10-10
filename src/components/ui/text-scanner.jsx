import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Text with a highlight sweeping across it, trailed by a thin accent line.
 *
 * Adapted from the shadcn "animated-text-10" registry item for this project:
 * - `motion/react` -> `framer-motion` (the same library, already installed,
 *   so we don't pull in a second copy of it)
 * - default colours now read this project's tokens instead of
 *   `--foreground` / `--primary`
 * - dropped the Next.js `"use client"` directive
 * - the scan line is sized in `em`, so it stays proportional at any
 *   font size instead of assuming a fixed one
 *
 * Honours `prefers-reduced-motion` by rendering plain text.
 *
 * @param {object} props
 * @param {string} [props.text]          Text to render. Spaces are preserved.
 * @param {string} [props.className]     Extra classes, merged with `cn`.
 * @param {string} [props.inkColor]      Text colour. Any CSS colour value.
 * @param {string} [props.accentColor]   Colour of the sweeping line.
 * @param {number} [props.duration]      Seconds per sweep.
 * @param {number} [props.glow]          Blur radius (px) on the sweeping line.
 */
export function TextScanner({
  text = "SCANNER",
  className,
  inkColor,
  accentColor,
  duration = 2.6,
  glow = 10,
}) {
  const reducedMotion = useReducedMotion();

  const ink = inkColor ?? "var(--color-text)";
  const accent = accentColor ?? "var(--color-accent)";

  const baseClass = cn(
    "relative inline-block font-semibold tracking-wide whitespace-pre",
    className,
  );

  if (reducedMotion) {
    return (
      <span className={baseClass} style={{ color: ink }}>
        {text}
      </span>
    );
  }

  return (
    <motion.span
      className={baseClass}
      style={{
        backgroundImage: `linear-gradient(90deg, color-mix(in srgb, ${ink} 25%, transparent) 0 40%, ${ink} 50%, color-mix(in srgb, ${ink} 25%, transparent) 60% 100%)`,
        backgroundSize: "240% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }}
      animate={{ backgroundPosition: ["100% 0", "0% 0"] }}
      transition={{
        duration,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      {text}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute top-[-0.2em] bottom-[-0.2em] w-[2px]"
        style={{
          background: accent,
          boxShadow: `0 0 ${glow}px ${accent}`,
        }}
        animate={{ left: ["0%", "100%"], x: ["0%", "-100%"] }}
        transition={{
          duration,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.span>
  );
}

export default TextScanner;
