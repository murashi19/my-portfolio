import { personal } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <p className="display text-2xl sm:text-3xl">
          Let's build something worth keeping.
        </p>

        <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 font-mono text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Muhamad Rafli Shidiq</p>
          <div className="flex items-center gap-5">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-muted"
            >
              GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-muted"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="transition-colors hover:text-muted"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
