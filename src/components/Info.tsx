// import "../css/App.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { techKnowledgeList } from "../data/techKnowledgeList";

const Info = () => {
  return (
    <div className="info-section">
      <div className="me">
        <h1>LINDA AMNELL</h1>
        <h3 className="title-medium ">Frontend Developer</h3>

        <p className="text-standard">
          I'm a frontend developer who enjoys solving problems and building
          clear, functional interfaces with a focus on usability and
          responsiveness.
        </p>
        <div>
          <button className="btn-base">Resume</button>
          <div className="link">
            <FaGithub className="github" />
            <FaLinkedin className="linkedin" />
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
