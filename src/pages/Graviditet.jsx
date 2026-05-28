import { useState, useCallback } from "react";
import {motion} from "framer-motion";
import BackButton from "../components/BackButton";
import FlagButton from "../components/FlagButton";
import WombBackground from "../components/animatedbackgrounds/Wombbackground";
import Speedometer from "../components/Speedometer";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";
import { useFadeIn } from "../hooks/useFadeIn";
import { useFadeNavigate } from "../hooks/useFadeNavigate";
import { useIdleTimeout } from "../hooks/useIdleTimeout";

function Graviditet() {
  const { language, visible } = useLanguage();
  const t = translations[language]?.graviditet;
  const fadeVisible = useFadeIn();
  const { fadeNavigate, fading } = useFadeNavigate();

   // currentStep følger hvilket af de 4 segmenter der er aktivt i speedometeret (0-3)
  const [currentStep, setCurrentStep] = useState(0);
  useIdleTimeout(3);

  // Opdaterer currentStep når speedometeret skifter segment
  const handleSegmentChange = useCallback((segmentId) => {
    if (segmentId !== null) setCurrentStep(segmentId);
  }, []);

  const step = t.steps[currentStep];

  // Midlertidig placeholder,  udskift til rigtige billeder senere
const PLACEHOLDERS = [
  "https://placehold.co/800x200/c8cdd6/white?text=Graviditet-billede",
  "https://placehold.co/800x200/c8cdd6/white?text=Graviditetsdiabetes-billede",
  "https://placehold.co/800x200/c8cdd6/white?text=Svangerskabsforgiftning-billede",
  "https://placehold.co/800x200/c8cdd6/white?text=For+tidlig+fødsel-billede",
];

  return (
    <div className={`relative w-full h-screen overflow-hidden flex flex-col page-fade-in ${fadeVisible ? "visible" : ""}`}>
      <FlagButton />
      <BackButton onClick={() => fadeNavigate("/")}/>
      <WombBackground />

      <div className="flex-1" />

     {/* Illustration der skifter baseret på aktivt segment */}
      
      <motion.div
        key={currentStep}
        className="absolute z-20 flex justify-center"
        style={{ bottom: "55vh", left: 0, right: 0 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Tjekker om der er illustration til step'et ellers tager den placeholderbilledet */}
        <img
          src={step.illustration ?? PLACEHOLDERS[currentStep]}
          alt=""
          className="object-contain"
          style={{ height: "180px" }}
        />
      </motion.div>

      
      {/* UI Infobox, der slider op fra bunden når siden loader */}
      <motion.div
        className="relative z-10 w-full bg-ui-box/70 rounded-t-4xl px-8 pt-8 pb-8 flex flex-col"
        style={{ height: "35vh",backdropFilter: "blur(12px)",}}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.5,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        {/*Tekst, der udskiftes afhængigt af step*/}
        <div
          key={currentStep}
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.3s ease",
            animation: "fadeIn 0.6s ease",
            
            }}
        >
          <h2 className="font-display font-semibold text-primary text-4xl mb-3 leading-snug">
            {step.heading}
          </h2>
          <p className="font-display font-light text-primary text-3xl leading-relaxed mb-6">
            {step.body}
          </p>
          {/* Pulserende hint-tekst */}
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col justify-center mt-70"
            style={{ pointerEvents: "none" }}
          >
            <p className="font-display font-semibold text-primary text-3xl text-center">
              {step.hintStart}
            </p>
            <p className="font-display font-semibold text-primary text-3xl text-center">
              {step.hintEnd}
            </p>
          </motion.div>
        </div>
        {/* Speedometer er sat til at sidde i bunden og er kun 80% er sin oprindelige størrelse */}
        <div
          className="absolute -bottom-6 left-0 right-0"
          style={{ transformOrigin: "bottom center", transform: "scale(0.80)" }}
        >
          <Speedometer
            onSegmentChange={handleSegmentChange}
            labels={t.labels}
          />
        </div>
      </motion.div>
      {/* Fader til sort, når man forlader siden */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 999,
          background: "#000",
          opacity: fading ? 1 : 0,
          transition: "opacity 0.7s ease",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

export default Graviditet;
