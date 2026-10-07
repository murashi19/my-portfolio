import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import { useLenis } from "./hooks/useLenis";

// Hero renders eagerly (above the fold). Everything below is split into
// its own chunk so the initial payload stays small.
const About = lazy(() => import("./sections/About"));
const Skills = lazy(() => import("./sections/Skills"));
const Experience = lazy(() => import("./sections/Experience"));
const Projects = lazy(() => import("./sections/Projects"));
const Education = lazy(() => import("./sections/Education"));
const Contact = lazy(() => import("./sections/Contact"));

export default function App() {
  useLenis();

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
        </Suspense>
        <Suspense fallback={null}>
          <Skills />
        </Suspense>
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
        <Suspense fallback={null}>
          <Projects />
        </Suspense>
        <Suspense fallback={null}>
          <Education />
        </Suspense>
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}
