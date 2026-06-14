import { useState, useCallback, useEffect } from "react";
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
import gravid from "../assets/gravid.png"
import babymk from "../assets/babymk.png"
import diabetes from "../assets/grDiabetes.png"
import blodtryk from "../assets/blodtryk.png"
import tidligBaby from "../assets/tidligBaby.png"
import { div } from "framer-motion/client";



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
// Billeder der stables oven på hinanden til første step
const ILLUSTRATIONS = [
  <div className="relative flex justify-center h-full w-full" >
  <img src={gravid} alt="" className="absolute inset-0 object-contain w-full  h-370 z-0" />
  <img src={babymk} alt="" className="absolute inset-0 object-contain w-full h-67 z-1 top-167 opacity-40 rotate-270" />
</div>,

<div className="relative flex justify-center h-full w-full">
    <img src={diabetes} alt="" className="absolute inset-0 object-contain w-full h-165 z-2 top-40 left-80" />
    <div className="relative h-full w-full ">
      <img src={babymk} alt="" className="absolute inset-0 object-contain w-full h-67 z-1 top-167 opacity-40 rotate-270" />
      <img src={gravid} alt="" className="absolute inset-0 object-contain w-full  h-370 z-0" />
    </div>
    
  </div>,
  
  <div className="relative flex justify-center h-full w-full">
    <img src={blodtryk} alt="" className="absolute inset-0 object-contain w-full h-100 z-1 top-67 left-98"  />
    <img src={gravid} alt="" className="absolute inset-0 object-contain w-full  h-370 z-0" />
    <img src={babymk} alt="" className="absolute inset-0 object-contain w-full h-67 z-1 top-167 opacity-40 rotate-270" />
  </div>,
  
  <div className="relative flex justify-center h-full w-full">
    <img src={tidligBaby} alt="" className="absolute inset-0 object-contain w-full  h-370 z-0" />
    </div>
];

 const [illustrationVisible, setIllustrationVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIllustrationVisible(true), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative w-full h-screen overflow-hidden flex flex-col page-fade-in ${fadeVisible ? "visible" : ""}`}>
      <FlagButton />
      <BackButton onClick={() => fadeNavigate("/")}/>
      <WombBackground />

      <div className="flex-1" />

     {/* Illustration der skifter baseret på aktivt segment */}
      
      <motion.div
        key={currentStep}
        className="absolute z-0 flex justify-center"
        style={{ top: "-3vh", left: 0, right: 0, scale: 0.885 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: illustrationVisible ? 1 : 0, y: illustrationVisible ? 0 : 20 }}
        transition={{ duration: 0.4 }}
      >
        
        
        {step.illustration
          ? <img src={step.illustration} alt="" className="object-contain " style={{ height: "180px" }} />
          : ILLUSTRATIONS[currentStep]
        }
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
            className="absolute bottom-6 left-0 right-0"
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
