import { contactText } from "../data/EnSweList";
import type { Language } from "../components/Info"; // om du har en separat typfil

interface ContactProps {
  language?: Language;
}

const Contact = ({ language = "en" }: ContactProps) => {
  const currentText = contactText[language];
  const title = language === "sv" ? "Kontakt" : "Contact";

  return (
    <section>
      <div className="text-standard">
        <div className="title-line mobile-only">
          <h2 className="title">{title}</h2>
        </div>
        <p>{currentText.info}</p>
        <div>
          <button className="btn-base">{currentText.button}</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
