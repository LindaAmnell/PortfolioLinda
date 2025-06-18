import "./css/index.css";
import "./css/fadeAnimation.css";
import "./css/App.css";
import AboutMe from "./components/AboutMe";
import Info from "./components/Info";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { useEffect, useState } from "react";
import HeaderLinks from "./components/HeaderLinks";
import type { Section } from "./data/headerLinks";

function App() {
  const [activeSection, setActiveSection] = useState<Section>("about");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

        <div className="fade-in responsive-sections">
          {isMobile ? (
            <>
              <AboutMe />
              <Experience />
              <Projects />
            </>
          ) : (
            <>
              {activeSection === "about" && <AboutMe />}
              {activeSection === "experience" && <Experience />}
              {activeSection === "projects" && <Projects />}
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
