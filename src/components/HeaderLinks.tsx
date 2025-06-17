import React from "react";
import "../css/links.css";
import { sections, type Section } from "../data/headerLinks";

type SectionNavProps = {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
};

const HeaderLinks: React.FC<SectionNavProps> = ({
  activeSection,
  setActiveSection,
}) => {
  return (
    <nav className="links">
      {sections.map((section) => (
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
