import { Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Stats from "./sections/Stats";
import Contact from "./sections/Contact";
import { personal } from "./data/portfolioData";
import { useLenis } from "./hooks/useLenis";

export default function App() {
  useLenis();

  return (
    <div className="relative bg-noise">
      <Helmet>
        <title>{`${personal.name} — Full Stack Developer`}</title>
        <meta
          name="description"
          content={personal.summary}
        />
        <meta property="og:title" content={`${personal.name} — Full Stack Developer`} />
        <meta property="og:description" content={personal.objective} />
        <meta name="theme-color" content="#030712" />
      </Helmet>

      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <TechStack />
        <Experience />
        <Projects />
        <Education />
        <Stats />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
