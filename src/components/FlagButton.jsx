import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import daFlag from "../assets/icons/da-flag.webp";
import enFlag from "../assets/icons/en-flag.svg";

//flagbillede sat til henholdsvis navnene "da" og "en"
const flags = {
  da: daFlag,
  en: enFlag,
};

function FlagButton() {
  const { language, switchLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  // Det sprog der ikke er aktivt, bliver til "skift" knappen, når Flagbutton aktiveres
  const otherLang = language === "da" ? "en" : "da";

  //Skifter sprog og lukker Flagbutton-"menuen"
  const handleSwitch = (lang) => {
    switchLanguage(lang);
    setOpen(false);
  };

  // Lukker menuen hvis brugeren trykker udenfor FlagButton-området
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed bottom-6 right-6 flex flex-row items-center gap-3 z-50"
    >
      {/* Det andet sprogs flag glider ind fra højre når menuen åbnes */}
      <button
        onClick={() => handleSwitch(otherLang)}
        className={`w-14 h-14 rounded-full overflow-hidden  shadow-lg transition-all duration-500 ease-in-out
          ${open ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 translate-x-4 pointer-events-none"}`}
      >
        <img
          src={flags[otherLang]}
          alt={otherLang}
          className="w-full h-full object-cover"
        />
      </button>

      {/* Det aktive sprogs flag er halvt gennemsigtigt for at indikere at det er klikbart */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full overflow-hidden opacity-50 transition-opacity duration-500"
      >
        <img
          src={flags[language]}
          alt={language}
          className="w-full h-full object-cover"
        />
      </button>
    </div>
  );
}

export default FlagButton;
