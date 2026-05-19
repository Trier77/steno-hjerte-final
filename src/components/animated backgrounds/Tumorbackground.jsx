export default function TumorBackground() {
  return (
    <div className="absolute inset-0 -z-10 bg-[#1a0a0e] overflow-hidden">

      {/* ── Base gradient mesh ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_90%_at_35%_55%,#4a0d1a,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_75%_at_75%_20%,#3b0b16,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_8%_80%,#420c18,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_62%_88%,#350910,transparent_50%)]" />

      {/* ── Deep breathing glow — the "heartbeat" of the cavity ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(180,30,60,0.28),transparent_70%)] animate-heartbeat" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_30%_40%,rgba(200,40,70,0.20),transparent_65%)] animate-heartbeat [animation-delay:0.4s]" />

      {/* ── Large slow drifting tissue masses — clearly visible ── */}
      <div className="absolute top-[-15%] left-[-8%] w-[70vw] h-[70vw] bg-[radial-gradient(ellipse,rgba(160,25,55,0.55),transparent_60%)] animate-drift [animation-delay:0s]" />
      <div className="absolute top-[40%] left-[45%] w-[60vw] h-[60vw] bg-[radial-gradient(ellipse,rgba(140,18,48,0.50),transparent_58%)] animate-drift [animation-delay:6s]" />
      <div className="absolute top-[55%] left-[-12%] w-[55vw] h-[55vw] bg-[radial-gradient(ellipse,rgba(170,30,58,0.48),transparent_62%)] animate-drift [animation-delay:11s]" />
      <div className="absolute top-[-5%] left-[58%] w-[45vw] h-[45vw] bg-[radial-gradient(ellipse,rgba(150,22,52,0.45),transparent_60%)] animate-drift [animation-delay:3s]" />

      {/* ── Pulsing organic blobs — mid-layer ── */}
      <div className="absolute top-[8%]   left-[10%] w-64 h-64 bg-[radial-gradient(circle,rgba(220,45,80,0.30),transparent_65%)] animate-blob-a [animation-delay:0s]" />
      <div className="absolute top-[55%]  left-[68%] w-52 h-52 bg-[radial-gradient(circle,rgba(210,38,72,0.32),transparent_65%)] animate-blob-b [animation-delay:4s]" />
      <div className="absolute top-[70%]  left-[22%] w-60 h-60 bg-[radial-gradient(circle,rgba(230,50,85,0.28),transparent_65%)] animate-blob-c [animation-delay:8s]" />
      <div className="absolute top-[18%]  left-[62%] w-44 h-44 bg-[radial-gradient(circle,rgba(215,42,75,0.30),transparent_65%)] animate-blob-a [animation-delay:13s]" />
      <div className="absolute top-[38%]  left-[38%] w-36 h-36 bg-[radial-gradient(circle,rgba(225,48,82,0.26),transparent_65%)] animate-blob-b [animation-delay:2s]" />
      <div className="absolute top-[28%]  left-[82%] w-48 h-48 bg-[radial-gradient(circle,rgba(205,35,68,0.28),transparent_65%)] animate-blob-c [animation-delay:7s]" />
      <div className="absolute top-[82%]  left-[52%] w-40 h-40 bg-[radial-gradient(circle,rgba(218,44,78,0.30),transparent_65%)] animate-blob-a [animation-delay:16s]" />

      {/* ── Vein-like streaks that shimmer ── */}
      <div
        className="absolute animate-vein [animation-delay:0s]"
        style={{
          top: "18%", left: "5%",
          width: "38%", height: "3px",
          background: "linear-gradient(90deg, transparent, rgba(200,40,70,0.45), rgba(220,60,85,0.30), transparent)",
          transform: "rotate(12deg)",
          borderRadius: "999px",
          filter: "blur(1px)",
        }}
      />
      <div
        className="absolute animate-vein [animation-delay:2.5s]"
        style={{
          top: "42%", left: "55%",
          width: "32%", height: "2px",
          background: "linear-gradient(90deg, transparent, rgba(210,45,75,0.40), rgba(200,38,68,0.28), transparent)",
          transform: "rotate(-8deg)",
          borderRadius: "999px",
          filter: "blur(1px)",
        }}
      />
      <div
        className="absolute animate-vein [animation-delay:5s]"
        style={{
          top: "68%", left: "12%",
          width: "28%", height: "2px",
          background: "linear-gradient(90deg, transparent, rgba(215,42,72,0.38), rgba(205,36,65,0.25), transparent)",
          transform: "rotate(5deg)",
          borderRadius: "999px",
          filter: "blur(1px)",
        }}
      />
      <div
        className="absolute animate-vein [animation-delay:8s]"
        style={{
          top: "28%", left: "65%",
          width: "22%", height: "2px",
          background: "linear-gradient(90deg, transparent, rgba(220,50,80,0.42), transparent)",
          transform: "rotate(-15deg)",
          borderRadius: "999px",
          filter: "blur(1px)",
        }}
      />

      {/* ── Warm ambient glow spots — slow pulse ── */}
      <div className="absolute top-[20%] left-[25%] w-72 h-72 bg-[radial-gradient(circle,rgba(190,35,65,0.22),transparent_60%)] animate-pulse-slow [animation-delay:0s]" />
      <div className="absolute top-[60%] left-[60%] w-80 h-80 bg-[radial-gradient(circle,rgba(200,40,70,0.20),transparent_60%)] animate-pulse-slow [animation-delay:3s]" />
      <div className="absolute top-[75%] left-[15%] w-56 h-56 bg-[radial-gradient(circle,rgba(185,30,60,0.22),transparent_60%)] animate-pulse-slow [animation-delay:6s]" />

      {/* ── Vignette to frame the scene ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_85%_at_50%_50%,transparent_15%,rgba(10,2,5,0.90)_100%)]" />
    </div>
  );
}