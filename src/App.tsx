import "./css/index.css";
import "./css/fadeAnimation.css";
import "./css/App.css";
import AboutMe from "./components/AboutMe";
import Info from "./components/Info";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { useState } from "react";
import HeaderLinks from "./components/HeaderLinks";
import type { Section } from "./data/headerLinks";

function App() {
  const [activeSection, setActiveSection] = useState<Section>("about");

  return (
    <main className="start">
      <div className="header">
        <Info />
      </div>
      <div className="content-section">
        <HeaderLinks
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        <div key={activeSection} className="fade-in">
          {activeSection === "about" && <AboutMe />}
          {activeSection === "experience" && <Experience />}
          {activeSection === "projects" && <Projects />}
        </div>
      </div>
    </main>
  );
}

export default App;
