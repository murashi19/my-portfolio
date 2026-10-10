import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personal } from "../data/portfolioData";
import { TextScanner } from "../components/ui/text-scanner";

const links = [
  { icon: FaGithub, href: personal.github, label: "GitHub" },
  { icon: FaLinkedin, href: personal.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
];

export default function Hero() {
  return (
    <section id="hero" className="hero-bg pt-14">
      <div className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pb-28 sm:pt-24">
        <div className="flex items-center justify-between border-b border-border pb-4 font-mono text-xs uppercase tracking-[0.14em] text-faint">
          <TextScanner
            text={personal.role}
            inkColor="var(--color-muted)"
            duration={3}
            glow={6}
            className="font-medium tracking-[0.14em]"
          />
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {personal.location}
          </span>
        </div>

        <div className="mt-12 grid gap-12 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-16">
          <div>
            <h1 className="display text-balance text-[2.6rem] sm:text-6xl lg:text-7xl">
              {personal.name}
            </h1>

            <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed sm:text-xl">
              {personal.intro}
            </p>

            <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted">
              {personal.objective}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-2 text-accent"
              >
                <span className="u-link">Get in touch</span>
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="u-link text-muted transition-colors hover:text-text"
              >
                See what I've built
              </a>
              <a
                href={personal.resumeFile}
                download
                className="u-link text-muted transition-colors hover:text-text"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="w-40 sm:w-48">
            {personal.avatar && (
              <img
                src={personal.avatar}
                alt={`Portrait of ${personal.name}`}
                width="720"
                height="1059"
                className="w-full rounded-sm border border-border object-cover grayscale transition-all duration-500 hover:grayscale-0"
              />
            )}
            <p className="mt-3 flex items-center gap-1.5 font-mono text-[11px] text-faint">
              <MapPin size={12} /> {personal.location}
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-faint">
            Elsewhere
          </p>
          <div className="flex items-center gap-5">
            {links.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted transition-colors hover:text-accent"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
