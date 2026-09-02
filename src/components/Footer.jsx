import { personal } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted">
        <p className="flex items-center gap-2 font-display font-semibold text-text"><span className="grid h-7 w-7 place-items-center rounded-full bg-white text-[9px] text-bg">MR</span>
          Murashi<span className="text-gradient">.dev</span></p>
        <p>&copy; {new Date().getFullYear()} {personal.name}. Designed and built with React.</p>
      </div>
    </footer>
  );
}
