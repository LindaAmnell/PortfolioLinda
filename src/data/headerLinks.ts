export type Section = "about" | "experience" | "projects";

export const sections: { id: Section; label: string }[] = [
  { id: "about", label: "About me" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];
