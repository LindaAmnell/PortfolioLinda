export type Section = "about" | "experience" | "projects";

// Engelska
export const sections: { id: Section; label: string }[] = [
  { id: "about", label: "About me" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

// Svenska
export const sectionsSv: { id: Section; label: string }[] = [
  { id: "about", label: "Om mig" },
  { id: "experience", label: "Erfarenhet" },
  { id: "projects", label: "Projekt" },
];
