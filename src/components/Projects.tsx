import "../css/projects.css";
import { EnProjects, SvProjects } from "../data/projectsList";
import { FaGithub } from "react-icons/fa";

const Projects = ({ language = "en" }) => {
  const projects = language === "sv" ? SvProjects : EnProjects;

  return (
    <section className="projects-section">
      <div className="title-line mobile-only">
        <h2 className="title ">Projects</h2>
      </div>
      <div className="project">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            {project.image && (
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>
            )}

            <h3 className="title-standard">{project.title}</h3>
            {project.description.map((text, i) => (
              <p className="text-standard" key={i}>
                {text}
              </p>
            ))}
            <div className="badge-list">
              {project.techStack.map((tech, j) => (
                <button key={j} className="badge-button">
                  {tech}
                </button>
              ))}
            </div>
            <div className="project-buttons">
              {project.gitHubLink && (
                <a
                  className="btn-base"
                  href={project.gitHubLink}
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaGithub style={{ marginRight: "8px" }} />
                  GitHub
                </a>
              )}
              {project.webLink && (
                <a
                  href={project.webLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base">
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
