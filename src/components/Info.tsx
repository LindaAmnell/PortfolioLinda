// import "../css/App.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { techKnowledgeList } from "../data/techKnowledgeList";

const Info = () => {
  return (
    <div className="info-section">
      <div className="me">
        <h1 className="title-large">LINDA AMNELL</h1>
        <h3 className="title-medium ">Frontend Developer</h3>

        <p className="text-standard">
          I'm a frontend developer who enjoys solving problems and building
          clear, functional interfaces with a focus on usability and
          responsiveness.
        </p>
        <div>
          <a
            href="/PortfolioLinda/Cv-Linda-En.pdf"
            download
            className="btn-base">
            Resume
          </a>

          <div className="link">
            <a
              href="https://github.com/LindaAmnell"
              target="_blank"
              rel="noopener noreferrer">
              <FaGithub className="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/linda-amnell-54a803297/"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin className="linkedin" />
            </a>
          </div>
          <div>
            <p className="tech">Technical knowledge</p>
            <div className="badge-list">
              {techKnowledgeList.map((item, index) => (
                <button className="badge-button" key={index}>
                  {item.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
