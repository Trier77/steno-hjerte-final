import BackButton from "../components/BackButton";
import FlagButton from "../components/FlagButton";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";
import { useState, useRef } from "react";
import TumorButton from "../components/TumorButton";
import { useFadeIn } from "../hooks/useFadeIn";
import { useFadeNavigate } from "../hooks/useFadeNavigate";
import { useIdleTimeout } from "../hooks/useIdleTimeout";
import TumorBackground from "../components/animated backgrounds/Tumorbackground"
import tumorani from "../assets/tumorani.webm"
import rayOverlay from "../assets/rayOverlay.webm"  // din overlay video
import notumorani from "../assets/notumorani.webm"            // din nye baggrund
import hjertezoom from "../assets/hjertezoom.webm"
import { motion } from "framer-motion";

function TekstModul({ step, currentStep }) {
  return (
    <motion.section
      className="absolute z-10 w-screen bottom-0 rounded-t-4xl px-8 pt-8 pb-10"
      style={{
        height: "30vh",
        backgroundColor: "rgba(241,241,241,0.7)",
        backdropFilter: "blur(12px)",
      }}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.5,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <div key={currentStep} style={{ animation: "fadeIn 0.6s ease" }}>
        <div className="mb-4">
          <h2 className="font-display font-semibold text-primary text-4xl">
            {step.heading}
          </h2>
        </div>
        <p className="font-display font-light text-primary text-3xl leading-relaxed whitespace-pre-line">
          {step.body}
        </p>
        {step.hint && (
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center mt-40"
            style={{ pointerEvents: "none" }}
          >
            <p className="font-display font-semibold text-primary text-3xl text-center">
              {step.hint}
            </p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}

function Kraeftbehandling() {
  const { language, visible } = useLanguage();
  const t = translations[language].kraeftbehandling;
  const [currentStep, setCurrentStep] = useState(0);
  const [showTumor, setShowTumor] = useState(true);
  // const [showHint, setShowHint] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showTumorBg, setShowTumorBg] = useState(true);
  const [showZoom, setShowZoom] = useState(false);
  const [showNewBg, setShowNewBg] = useState(false);
  const step = t.steps[currentStep];
  const fadeVisible = useFadeIn();
  const { fadeNavigate, fading } = useFadeNavigate();
  useIdleTimeout(3);

  const handleTumorComplete = () => {
    // Start overlay — tekst skifter IKKE endnu
    setShowOverlay(true);
    setTimeout(() => setShowTumor(false), 800);
  };


 // Opdater disse to handlers:
const handleOverlayEnded = () => {
  setShowOverlay(false);
  setShowZoom(true); // Start hjertezoom i stedet for at skifte baggrund direkte
  setShowTumorBg(false);
  
};

const handleZoomEnded = () => {
  setShowZoom(false);
  setShowNewBg(true);
  setCurrentStep(1); // Tekst skifter når hjerteZoom er færdig
};

const zoomRef = useRef(null);
const newBgRef = useRef(null);

const PRELOAD_SECONDS = 6000; // Juster efter behov

const handleZoomTimeUpdate = () => {
  const video = zoomRef.current;
  if (!video || !newBgRef.current) return;
  const timeLeft = video.duration - video.currentTime;
  // Start notumorani i baggrunden X sekunder før hjertezoom slutter
  if (timeLeft <= PRELOAD_SECONDS && newBgRef.current.paused) {
    newBgRef.current.play().catch(() => {});
  }
};

  // const handleLinkTap = () => setShowHint(true);
  // const handleTumorStart = () => setShowHint(false);

  return (
    <div className={`relative w-full h-screen overflow-hidden page-fade-in ${fadeVisible ? "visible" : ""}`} >
      <FlagButton />
      <BackButton onClick={() => fadeNavigate("/")} />
      <TumorBackground />

      {/* Baggrund 1: tumorani — fader ud når ny baggrund vises */}
      <video
        src={tumorani}
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        style={{ zIndex: 0, opacity: showTumorBg ? 1 : 0 }}
      />

      {/* Baggrund 2: ny baggrund — fader ind når overlay er færdig */}
      <video
        ref={newBgRef}
        src={notumorani}
        loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 1, opacity: showNewBg ? 1 : 0 }}
      />

      {/* Hjertezoom — spiller én gang efter overlay */}
      {showZoom && (
        <video
          ref={zoomRef}
          src={hjertezoom}
          autoPlay muted playsInline
          onTimeUpdate={handleZoomTimeUpdate}
          onEnded={handleZoomEnded}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 2 }}
        />
      )}

      {/* Overlay video — spiller én gang henover alt */}
      {showOverlay && (
        <video
          src={rayOverlay}
          autoPlay muted playsInline
          onEnded={handleOverlayEnded}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 20 }}
        />
      )}

      {/* Tumor button + hint */}
      {showTumor && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            zIndex: 10,
            opacity: currentStep === 0 ? 1 : 0,
            transition: "opacity 0.8s ease",
            pointerEvents: currentStep === 0 ? "auto" : "none",
          }}
        >
          {/* <div
            className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white rounded-full px-4 py-2 whitespace-nowrap"
            style={{
              opacity: showHint ? 1 : 0,
              transition: "opacity 0.4s ease",
              pointerEvents: "none",
            }}
          >
            <span className="font-display font-semibold text-primary text-lg">
              Hold her
            </span>
          </div> */}

          <TumorButton
            onComplete={handleTumorComplete}
            // onHoldStart={handleTumorStart}
          />
        </div>
      )}

      {/* Tekst — skifter kun efter overlay er færdig */}
      <div
        style={{
          zIndex: 30,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <TekstModul
          step={step}
          currentStep={currentStep}
          // onLinkTap={handleLinkTap}
          style={{
             backdropFilter: "blur(12px)",
          }}
        />
      </div>
      {/* Fade to black */}
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

export default Kraeftbehandling;
