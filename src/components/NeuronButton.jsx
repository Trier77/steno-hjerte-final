import { useEffect, useRef } from "react";

function NeuronButton({ src, alt, selected, onClick, floatSeed = 0 }) {
  const divRef = useRef(null);
  const targetScaleRef = useRef(1);

  // Opdaterer målskalaen når selected-prop ændres —
  // 1.3 = forstørret når valgt, 1 = normal størrelse
  useEffect(() => {
    targetScaleRef.current = selected ? 1.3 : 1;
  }, [selected]);

   // Animationsloop der håndterer både flydende bevægelse og glidende skalering
  // på samme element for at undgå layout-skift
  useEffect(() => {
    const el = divRef.current;
    if (!el) return;

// Bevægelsesområde og hastighed varierer baseret på floatSeed
    const xRange = 8 + (floatSeed % 3) * 4;
    const yRange = 10 + (floatSeed % 4) * 4;
    const duration = 3000 + floatSeed * 400;
    const xOffset = (floatSeed % 5) * 0.4;
    let start = null;
    let currentScale = targetScaleRef.current;
    let animFrame;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      // floatSeed ganget ind i elapsed giver forskudt startposition
      // så knapperne ikke svinger i takt
      const elapsed = timestamp - start + floatSeed * 1200;

      // Bevægelserne er baseret på sinusbølger
      const x = Math.sin((elapsed / duration) * Math.PI * 2 + xOffset) * xRange;
      const y =
        Math.cos((elapsed / (duration * 1.3)) * Math.PI * 2 + floatSeed) *
        yRange;

      // Lerp toward target — 0.06 gives a ~400ms feel, smooth but responsive
      currentScale += (targetScaleRef.current - currentScale) * 0.06;

      el.style.transform = `translate(${x}px, ${y}px) scale(${currentScale})`;
      animFrame = requestAnimationFrame(animate);
    };

    animFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame);
  }, [floatSeed]);

  return (
    // will-change-transform fortæller browseren at dette element animeres
    // så den kan optimere renderingen på forhånd, og vi får et hak til at starte med
    <div ref={divRef} className="will-change-transform">
      <button
        onClick={onClick}
        className={[
          "relative flex items-center justify-center bg-transparent border-none cursor-pointer",
          "transition-[filter] duration-500 ease-out",
          selected
            ? "drop-shadow-[0_0_30px_rgba(232,160,80,0.9)] drop-shadow-[0_0_60px_rgba(232,160,80,0.4)]"
            : "drop-shadow-[0_0_8px_rgba(232,160,80,0.2)] animate-neuron-breathe",
        ].join(" ")}
      >
        <img src={src} alt={alt} className="w-58 h-58 object-contain" />

        {/* Ringe der breder sig udad fra ikke-valgte knapper */}
        {!selected && (
          <>
            <span className="absolute inset-0 rounded-full border border-[#e8a050]/50 animate-ripple" />
            <span className="absolute inset-0 rounded-full border border-[#e8a050]/30 animate-ripple [animation-delay:0.8s]" />
          </>
        )}
      </button>
    </div>
  );
}

export default NeuronButton;
