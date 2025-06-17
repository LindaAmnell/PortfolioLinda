import "../css/projects.css";
import { projects } from "../data/projectsList";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="projects-section">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <h3>{project.title}</h3>
          {project.description.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
          <div className="techStack-list">
            {project.techStack.map((tech, j) => (
              <span key={j} className="techStack">
                {tech}
              </span>
            ))}
          </div>
          <div className="project-buttons">
            {project.gitHubLink && (
              <a
                className="project-button"
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
                className="project-button">
                Live Site
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
