import { aboutMeList, aboutMeListSv } from "../data/EnSweList";

const AboutMe = ({ language = "en" }) => {
  const currentText = language === "sv" ? aboutMeListSv : aboutMeList;
  const title = language === "sv" ? "Om mig" : "About me";

  return (
    <section>
      <div className="text-standard">
        <div className="title-line mobile-only">
          <h2 className="title">{title}</h2>
        </div>
        {currentText.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
