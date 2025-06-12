import "../css/App.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { techKnowledgeList } from "../data/techKnowledgeList";

const Info = () => {
  return (
    <div className="info-section">
      <div className="me">
        <h1>LINDA AMNELL</h1>
        <h3>Frontend Developer</h3>

        <p className="info-text">
          I'm a frontend developer who enjoys solving problems and building
          clear, functional interfaces with a focus on usability and
          responsiveness.
        </p>
        <div>
          <button className="resume-btn">Resume</button>
          <div className="link">
            <FaGithub className="github" />
            <FaLinkedin className="linkedin" />
          </div>
          <div>
            <p className="tech">Technical knowledge</p>
            <div className="knowledge-list">
              {techKnowledgeList.map((item, index) => (
                <button className="knowledge-btn" key={index}>
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
