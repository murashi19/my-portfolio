import { personal } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-text-muted">
        <p className="font-display font-semibold text-text">
          Murashi<span className="text-gradient">.dev</span>
        </p>
        <p>&copy; {new Date().getFullYear()} {personal.name}. Designed and built with React.</p>
      </div>
    </footer>
  );
}
