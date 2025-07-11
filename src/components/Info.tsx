import { FaGithub, FaLinkedin } from "react-icons/fa";
import { techKnowledgeList } from "../data/techKnowledgeList";
import { infoText } from "../data/EnSweList";

export type Language = "en" | "sv";

interface InfoProps {
  language?: Language;
}

const Info = ({ language = "en" }: InfoProps) => {
  const text = infoText[language];

  return (
    <div className="info-section">
      <div className="me">
        <h1 className="title-large">{text.name}</h1>
        <h3 className="title-medium">{text.title}</h3>

        <p className="text-standard">{text.description}</p>

        <div>
          <a
            href={
              language === "sv"
                ? "/PortfolioLinda/LindaAmnellCv.pdf"
                : "/PortfolioLinda/LindaAmnellCvEn.pdf"
            }
            download
            className="btn-base">
            {text.resume}
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
            <p className="tech">{text.tech}</p>
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
