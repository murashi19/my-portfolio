import {
  SiReact,
  SiGo,
  SiLaravel,
  SiPhp,
  SiJavascript,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiNginx,
  SiLinux,
  SiGit,
  SiGithubactions,
  SiTailwindcss,
  SiBootstrap,
  SiVite,
  SiFigma,
} from "react-icons/si";
import { techStack } from "../data/portfolioData";
import Reveal from "../components/Reveal";

// Icon + official brand color per technology. Falls back to a
// plain label (no icon) for anything not mapped here, so new
// entries in portfolioData.js never break the build.
const techMeta = {
  React: { icon: SiReact, color: "#61DAFB" },
  Go: { icon: SiGo, color: "#00ADD8" },
  Laravel: { icon: SiLaravel, color: "#FF2D20" },
  PHP: { icon: SiPhp, color: "#777BB4" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Nginx: { icon: SiNginx, color: "#009639" },
  Linux: { icon: SiLinux, color: "#FCC624" },
  Git: { icon: SiGit, color: "#F05032" },
  "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38BDF8" },
  Bootstrap: { icon: SiBootstrap, color: "#7952B3" },
  Vite: { icon: SiVite, color: "#BD34FE" },
  Figma: { icon: SiFigma, color: "#F24E1E" },
};

export default function TechStack() {
  const loopItems = [...techStack, ...techStack];

  return (
    <section className="relative py-16 overflow-hidden">
      <Reveal className="text-center mb-10 px-6">
        <p className="text-text-muted text-sm font-mono">
          Technologies I reach for daily
        </p>
      </Reveal>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent z-10" />
        <div className="flex w-max animate-marquee">
          {loopItems.map((tech, i) => {
            const meta = techMeta[tech];
            const Icon = meta?.icon;
            return (
              <span
                key={`${tech}-${i}`}
                className="group mx-3 shrink-0 flex items-center gap-2.5 glass rounded-full px-6 py-2.5 text-sm font-mono text-text-muted hover:text-text hover:border-primary/30 transition-colors"
              >
                {Icon && (
                  <Icon
                    size={17}
                    className="shrink-0 transition-colors"
                    style={{ color: meta.color }}
                  />
                )}
                {tech}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
