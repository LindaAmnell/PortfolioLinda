import "../css/experience.css";
import { experienceList } from "../data/experienceList";

const Experience = () => {
  return (
    <section>
      <div className="text-standard">
        <div className="title-line mobile-only">
          <h2 className="title">Experience</h2>
        </div>

        {experienceList.map((item, index) => (
          <div className="experience-card" key={index}>
            <h3 className="title-standard">
              {item.title} - {item.company}
            </h3>
            <p className="date">{item.date}</p>
            {item.description.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
