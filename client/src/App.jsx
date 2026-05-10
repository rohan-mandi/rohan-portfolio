import { useEffect, useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Research from "./components/Research.jsx";
import Projects from "./components/Projects.jsx";
import Leadership from "./components/Leadership.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/portfolio")
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then(setData)
      .catch((e) => setError(e.message));
  }, []);

  if (error) {
    return (
      <div className="loading">
        <p>Couldn't reach the portfolio API.</p>
        <p className="muted">Make sure the Express server is running on port 5174.</p>
        <code>{error}</code>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="loading">
        <div className="spinner" aria-hidden />
      </div>
    );
  }

  return (
    <>
      <Nav profile={data.profile} />
      <main>
        <Hero profile={data.profile} />
        <About about={data.about} profile={data.profile} education={data.education} />
        <Research research={data.research} />
        <Projects projects={data.projects} />
        <Experience experience={data.experience} />
        <Leadership leadership={data.leadership} />
        <Skills skills={data.skills} certifications={data.certifications} />
        <Contact profile={data.profile} />
      </main>
      <Footer profile={data.profile} />
    </>
  );
}
