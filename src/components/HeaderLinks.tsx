import React from "react";
import "../css/links.css";
import { sections, sectionsSv, type Section } from "../data/headerLinks";

type SectionNavProps = {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  language?: "en" | "sv";
};

const HeaderLinks: React.FC<SectionNavProps> = ({
  activeSection,
  setActiveSection,
  language = "en",
}) => {
  const currentSections = language === "sv" ? sectionsSv : sections;

  return (
    <nav className="links">
      {currentSections.map((section) => (
        <button
          key={section.id}
          className={activeSection === section.id ? "active" : ""}
          onClick={() => setActiveSection(section.id)}>
          {section.label}
        </button>
      ))}
    </nav>
  );
};

export default HeaderLinks;
