/**
 * Shared section frame.
 *
 * A sticky label rail on the left (desktop) keeps the section name in
 * view while its content scrolls past — a small editorial touch that
 * also keeps every section aligned to the same grid.
 *
 * `tone="paper"` flips the section to the light palette.
 */
export default function Section({
  id,
  index,
  label,
  title,
  intro,
  tone = "dark",
  children,
  className = "",
}) {
  return (
    <section
      id={id}
      className={`border-t border-border ${
        tone === "paper" ? "tone-paper" : ""
      } ${className}`}
    >
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <div className="grid gap-x-14 gap-y-10 sm:grid-cols-[10rem_1fr]">
          <p className="tnum font-mono text-xs uppercase tracking-[0.14em] text-faint sm:sticky sm:top-24 sm:self-start">
            <span className="text-accent">{index}</span>
            <span className="mx-2 text-faint/50">/</span>
            {label}
          </p>

          <div className="min-w-0">
            <h2 className="display text-balance text-3xl sm:text-4xl">
              {title}
            </h2>
            {intro && (
              <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted">
                {intro}
              </p>
            )}

            <div className="mt-14">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
