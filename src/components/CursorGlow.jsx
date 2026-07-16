import { useEffect, useRef } from "react";

/**
 * Subtle radial glow that follows the cursor (desktop only).
 * Pure CSS-variable driven — no re-renders on mousemove.
 */
export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const el = ref.current;
    let raf;
    const handleMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--x", `${e.clientX}px`);
        el.style.setProperty("--y", `${e.clientY}px`);
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 hidden md:block"
      style={{
        background:
          "radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(59,130,246,0.08), transparent 40%)",
      }}
    />
  );
}
