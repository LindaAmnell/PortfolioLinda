import "./css/index.css";
import AboutMe from "./components/AboutMe";
import Info from "./components/Info";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <main className="start">
      <div>
        <Info />
        <div>
          <nav className="links">
            <button
              className={activeSection === "about" ? "active" : ""}
              onClick={() => setActiveSection("about")}>
              About me
            </button>
            <button
              className={activeSection === "experience" ? "active" : ""}
              onClick={() => setActiveSection("experience")}>
              Experience
            </button>
            <button
              className={activeSection === "projects" ? "active" : ""}
              onClick={() => setActiveSection("projects")}>
              Projects
            </button>
          </nav>
        </div>
      </div>

      <div>
        {activeSection === "about" && <AboutMe />}
        {activeSection === "experience" && <Experience />}
        {activeSection === "projects" && <Projects />}
      </div>
    </main>
  );
}

export default App;
