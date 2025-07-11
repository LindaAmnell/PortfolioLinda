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
import Contact from "./components/Contact";

function App() {
  const [activeSection, setActiveSection] = useState<Section>("about");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
  const [language, setLanguage] = useState<"en" | "sv">("en");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "sv" : "en"));
  };

  return (
    <main className="start">
      <div className="header">
        <Info language={language} />
        <div className="switch-btn">
          <button className="btn-base lang-btn" onClick={toggleLanguage}>
            {language === "en" ? "Switch to Swedish" : "Switch to English"}
          </button>
        </div>
      </div>

      <div className="content-section">
        <HeaderLinks
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          language={language}
        />

        <div className="fade-in responsive-sections">
          {isMobile ? (
            <>
              <AboutMe language={language} />
              <Experience language={language} />
              <Projects language={language} />
              <Contact language={language} />
            </>
          ) : (
            <>
              {activeSection === "about" && <AboutMe language={language} />}
              {activeSection === "experience" && (
                <Experience language={language} />
              )}
              {activeSection === "projects" && <Projects language={language} />}
              {activeSection === "contact" && <Contact language={language} />}
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
