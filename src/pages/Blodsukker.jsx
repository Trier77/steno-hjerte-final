import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackButton from "../components/BackButton";
import FlagButton from "../components/FlagButton";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";
import { useFadeIn } from "../hooks/useFadeIn";
import { useFadeNavigate } from "../hooks/useFadeNavigate";
import BloodBackground from "../components/animated backgrounds/BloodBackground";

// ─── Constants ────────────────────────────────────────────────────────────────
const PERSON_COUNT = 24;
const SNAP_POSITIONS = [0, 50, 100];
const PERCENTAGES = { men: 40, women: 55 };
const PAGE_FADE_DURATION = 0.4;

// ─── Sugar cube flow ──────────────────────────────────────────────────────────

// Each cube gets fixed random traits generated once — stable across re-renders
const CUBE_TRAITS = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  y: 5 + ((i * 37 + 11) % 85), // spread vertically 5–90%
  duration: 6 + ((i * 13) % 10), // 6–16s to cross screen
  delay: -((i * 3.7) % 16), // stagger start so they're not bunched
  size: 24 + ((i * 7) % 20), // 24–44px
  opacity: 0.5 + ((i * 11) % 40) / 100, // 0.5–0.9
  wobble: ((i * 17) % 12) - 6, // slight vertical drift ±6px
}));

const STAGE_CUBE_COUNT = [0, 8, 20];

// Inject keyframes once
const FLOW_STYLE = `
@keyframes sugarFlow {
  0%   { transform: translateX(-60px) translateY(0px); }
  50%  { transform: translateX(calc(50vw))  translateY(var(--wobble)); }
  100% { transform: translateX(calc(100vw + 60px)) translateY(0px); }
}`;
if (
  typeof document !== "undefined" &&
  !document.getElementById("sugar-flow-style")
) {
  const tag = document.createElement("style");
  tag.id = "sugar-flow-style";
  tag.textContent = FLOW_STYLE;
  document.head.appendChild(tag);
}

function SugarCube({ traits, entranceDelay }) {
  const { y, duration, delay, size, opacity, wobble } = traits;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.3 }}
      transition={{
        duration: 0.5,
        delay: entranceDelay,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      style={{
        position: "absolute",
        top: `${y}%`,
        left: 0,
        pointerEvents: "none",
        // The inner div does the continuous drift
      }}
    >
      <div
        style={{
          "--wobble": `${wobble}px`,
          animation: `sugarFlow ${duration}s linear ${delay}s infinite`,
          opacity,
        }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="18,2 34,10 18,18 2,10"
            fill="#f9e4a0"
            stroke="#c9a84c"
            strokeWidth="1"
          />
          <polygon
            points="2,10 18,18 18,34 2,26"
            fill="#e8c96e"
            stroke="#c9a84c"
            strokeWidth="1"
          />
          <polygon
            points="34,10 18,18 18,34 34,26"
            fill="#d4a843"
            stroke="#c9a84c"
            strokeWidth="1"
          />
          <circle cx="20" cy="7" r="1.5" fill="white" opacity="0.6" />
        </svg>
      </div>
    </motion.div>
  );
}

function SugarCubes({ stage }) {
  const count = STAGE_CUBE_COUNT[stage] ?? 0;
  return (
    <div
      className="absolute inset-0"
      style={{ pointerEvents: "none", zIndex: 5, overflow: "hidden" }}
    >
      <AnimatePresence>
        {CUBE_TRAITS.slice(0, count).map((traits, i) => (
          <SugarCube key={traits.id} traits={traits} entranceDelay={i * 0.05} />
        ))}
      </AnimatePresence>
    </div>
  );
}

// ─── Person icon ──────────────────────────────────────────────────────────────
function PersonIcon({ gender, size = 32 }) {
  return (
    <div
      style={{
        width: size,
        height: size * 1.8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={
          gender === "man"
            ? "/src/assets/icons/man.png"
            : "/src/assets/icons/woman.png"
        }
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </div>
  );
}

function GenderRow({ label, gender, stage, percent }) {
  return (
    <div className="flex flex-row items-center gap-3 w-full">
      <p className="font-display font-semibold text-primary text-2xl shrink-0 w-20">
        {label}
      </p>
      <div
        className="flex flex-row flex-wrap gap-1 items-end flex-1"
        style={{ minHeight: "60px" }}
      >
        {Array.from({ length: PERSON_COUNT }).map((_, i) => (
          <PersonIcon key={i} gender={gender} size={24} />
        ))}
      </div>
      <div
        className="shrink-0 w-24 flex flex-col items-end"
        style={{ minHeight: "60px" }}
      >
        <AnimatePresence>
          {stage === 2 && (
            <motion.div
              key="percent"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex items-center gap-1"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#e05555">
                <path d="M12 4 L20 20 H4 Z" />
              </svg>
              <p className="font-display font-semibold text-2xl">{percent}%</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function Blodsukker() {
  const { language, visible } = useLanguage();
  const t = translations[language]?.blodsukker;
  const fadeVisible = useFadeIn();
  const { fadeNavigate, fading } = useFadeNavigate();

  const [stage, setStage] = useState(0);
  const [sliderY, setSliderY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isSnapping, setIsSnapping] = useState(false);

  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const startYRef = useRef(null);
  const startSliderRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ w: 500, h: 900 });

  const isDraggingRef = useRef(false);
  const sliderYRef = useRef(0);
  const stageRef = useRef(0);

  useEffect(() => {
    sliderYRef.current = sliderY;
  }, [sliderY]);
  useEffect(() => {
    isDraggingRef.current = isDragging;
  }, [isDragging]);
  useEffect(() => {
    stageRef.current = stage;
  }, [stage]);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        const r = containerRef.current.getBoundingClientRect();
        setContainerSize({ w: r.width, h: r.height });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const sliderPercent = sliderY * 100;

  const getClientY = (e) => (e.touches ? e.touches[0].clientY : e.clientY);

  const snapToIndex = (index) => {
    const clamped = Math.max(0, Math.min(2, index));
    setIsSnapping(true);
    setSliderY(SNAP_POSITIONS[clamped] / 100);
    if (clamped !== stageRef.current) {
      setTimeout(() => {
        setStage(clamped);
        stageRef.current = clamped;
      }, 150);
    }
    setTimeout(() => setIsSnapping(false), 400);
  };

  const handlePointerDown = (e) => {
    e.preventDefault();
    isDraggingRef.current = true;
    setIsDragging(true);
    startYRef.current = getClientY(e);
    startSliderRef.current = sliderYRef.current;
  };

  useEffect(() => {
    const onMove = (e) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();
      const height = sliderRef.current?.offsetHeight || 300;
      const delta = startYRef.current - getClientY(e);
      const newY = Math.max(
        0,
        Math.min(1, startSliderRef.current + delta / height),
      );
      sliderYRef.current = newY;
      setSliderY(newY);
    };

    const onUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      setIsDragging(false);
      const nearest = Math.round(sliderYRef.current * 2);
      snapToIndex(nearest);
    };

    const track = sliderRef.current;

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onUp);
    track?.addEventListener("touchstart", handlePointerDown, {
      passive: false,
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
      track?.removeEventListener("touchstart", handlePointerDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentStep = t?.steps?.[stage] || {};

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-screen overflow-hidden flex flex-col page-fade-in ${fadeVisible ? "visible" : ""}`}
      style={{ backgroundColor: "#5c1a1a" }}
    >
      <FlagButton />
      <BackButton onClick={() => fadeNavigate("/")} />

      <BloodBackground w={containerSize.w} h={containerSize.h} />

      {/* Sugar cubes — rendered over the blood background, under the UI */}
      <SugarCubes stage={stage} />

      {/* Upper area — vertical slider on the left */}
      <div className="relative z-10 flex-1 flex flex-row px-8 gap-6">
        <div
          className="flex items-center justify-center w-20"
          style={{ marginTop: "15vh", height: "50vh" }}
        >
          <div
            ref={sliderRef}
            className="relative w-6 h-full rounded-full select-none"
            style={{
              backgroundColor: "rgba(255,255,255,0.2)",
              cursor: isDragging ? "grabbing" : "grab",
            }}
            onMouseDown={handlePointerDown}
          >
            {/* Fill — grows upward */}
            <div
              className="absolute bottom-0 left-0 right-0 rounded-full bg-primary"
              style={{
                height: `${sliderPercent}%`,
                transition: isSnapping
                  ? "height 0.4s cubic-bezier(0.25, 1, 0.5, 1)"
                  : isDragging
                    ? "none"
                    : undefined,
              }}
            />

            {/* Handle */}
            <div
              className="absolute left-1/2"
              style={{
                bottom: `${sliderPercent}%`,
                transform: "translate(-50%, 50%)",
                transition: isSnapping
                  ? "bottom 0.4s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s ease, height 0.2s ease"
                  : "width 0.2s ease, height 0.2s ease",
                zIndex: 2,
              }}
            >
              <motion.div
                style={{
                  width: isDragging ? "65px" : "50px",
                  height: isDragging ? "65px" : "50px",
                  position: "relative",
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: PAGE_FADE_DURATION + 0.4,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
              >
                {stage === 0 && (
                  <span className="absolute inset-0 rounded-full bg-primary opacity-40 animate-ping" />
                )}
                <div
                  className="absolute inset-0 rounded-full bg-primary shadow-lg"
                  style={{ cursor: isDragging ? "grabbing" : "grab" }}
                  onMouseDown={handlePointerDown}
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Stage label */}
        <div className="flex items-end pb-4" style={{ marginBottom: "4vh" }}>
          <AnimatePresence mode="wait">
            <motion.p
              key={stage}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ duration: 0.25 }}
              className="font-display font-semibold text-white text-xl"
            >
              {t?.stageLabels?.[stage] || ""}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Infobox */}
      <div
        className="relative z-10 w-full rounded-t-4xl px-8 pt-6 pb-8"
        style={{ height: "32vh", backgroundColor: "rgba(241,241,241,0.7)" }}
      >
        <div
          className="flex flex-col h-full gap-2"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s ease" }}
        >
          <div style={{ minHeight: "80px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={stage}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="font-display font-semibold text-primary text-5xl text-center leading-snug mb-1">
                  {currentStep.heading || "Diabetes og hjertet"}
                </h2>
                <p
                  className="font-display font-light text-primary text-3xl leading-relaxed text-left"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {currentStep.body || ""}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Hint — stage 0 only */}
          <AnimatePresence>
            {stage === 0 && currentStep.hint && (
              <motion.div
                key="hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center gap-2 mt-2"
                style={{ pointerEvents: "none" }}
              >
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex flex-col items-center gap-2"
                >
                  <p className="font-display font-semibold text-primary text-3xl mt-40 text-center px-6">
                    {currentStep.hint}
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Gender rows — stage 1+ */}
          <AnimatePresence>
            {stage >= 1 && (
              <motion.div
                key="gender-rows"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-2 flex-1 justify-center"
              >
                <div className="w-full h-px bg-primary opacity-20 mb-2" />
                <GenderRow
                  label={t?.men || "Mænd"}
                  gender="man"
                  stage={stage}
                  percent={PERCENTAGES.men}
                />
                <GenderRow
                  label={t?.women || "Kvinder"}
                  gender="woman"
                  stage={stage}
                  percent={PERCENTAGES.women}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
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
