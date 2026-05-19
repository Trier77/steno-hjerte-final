export default function WombBackground() {
  return (
    <div className="absolute inset-0 -z-10 bg-[#2d0a14] overflow-hidden">

      {/* ── Base gradient mesh — dyb, varm livmoder-rød ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_130%_100%_at_50%_80%,#5c1428,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_20%_30%,#4a0f20,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_75%_at_82%_22%,#3e0b1a,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_50%_10%,#521526,transparent_55%)]" />

      {/* ── Livmoderens varme centrale glow — den "hule" ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_62%,rgba(210,60,90,0.22),transparent_65%)] animate-heartbeat" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_35%_28%_at_50%_65%,rgba(230,80,110,0.18),transparent_60%)] animate-heartbeat [animation-delay:0.6s]" />

      {/* ── Store bløde vævsflader der drifter langsomt ── */}
      <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-[radial-gradient(ellipse,rgba(175,35,65,0.52),transparent_58%)] animate-drift [animation-delay:0s]" />
      <div className="absolute top-[30%] left-[35%]  w-[75vw] h-[75vw] bg-[radial-gradient(ellipse,rgba(160,28,58,0.48),transparent_55%)] animate-drift [animation-delay:7s]" />
      <div className="absolute top-[50%] left-[-15%] w-[65vw] h-[65vw] bg-[radial-gradient(ellipse,rgba(185,42,70,0.45),transparent_60%)] animate-drift [animation-delay:13s]" />
      <div className="absolute top-[-8%]  left-[52%]  w-[55vw] h-[55vw] bg-[radial-gradient(ellipse,rgba(170,32,62,0.42),transparent_58%)] animate-drift [animation-delay:4s]" />
      <div className="absolute top-[65%]  left-[38%]  w-[60vw] h-[60vw] bg-[radial-gradient(ellipse,rgba(180,38,68,0.44),transparent_56%)] animate-drift [animation-delay:10s]" />

      {/* ── Pulserende organiske blobs — slimhindelag ── */}
      <div className="absolute top-[5%]  left-[5%]  w-72 h-72 bg-[radial-gradient(circle,rgba(230,65,100,0.32),transparent_62%)] animate-blob-a [animation-delay:0s]" />
      <div className="absolute top-[60%] left-[65%] w-64 h-64 bg-[radial-gradient(circle,rgba(220,55,90,0.34),transparent_62%)] animate-blob-b [animation-delay:4s]" />
      <div className="absolute top-[72%] left-[18%] w-56 h-56 bg-[radial-gradient(circle,rgba(235,70,105,0.30),transparent_62%)] animate-blob-c [animation-delay:9s]" />
      <div className="absolute top-[15%] left-[60%] w-48 h-48 bg-[radial-gradient(circle,rgba(225,60,95,0.32),transparent_62%)] animate-blob-a [animation-delay:14s]" />
      <div className="absolute top-[40%] left-[42%] w-40 h-40 bg-[radial-gradient(circle,rgba(240,75,108,0.28),transparent_62%)] animate-blob-b [animation-delay:2s]" />
      <div className="absolute top-[25%] left-[80%] w-52 h-52 bg-[radial-gradient(circle,rgba(215,50,85,0.30),transparent_62%)] animate-blob-c [animation-delay:7s]" />
      <div className="absolute top-[85%] left-[50%] w-44 h-44 bg-[radial-gradient(circle,rgba(228,62,98,0.32),transparent_62%)] animate-blob-a [animation-delay:17s]" />

      {/* ── Blodkar/kapillærer — lyser op og falmer ── */}
      <div
        className="absolute animate-vein [animation-delay:0s]"
        style={{
          top: "22%", left: "3%",
          width: "42%", height: "3px",
          background: "linear-gradient(90deg, transparent, rgba(230,70,105,0.55), rgba(210,50,85,0.35), transparent)",
          transform: "rotate(8deg)",
          borderRadius: "999px",
          filter: "blur(1.5px)",
        }}
      />
      <div
        className="absolute animate-vein [animation-delay:3s]"
        style={{
          top: "38%", left: "52%",
          width: "36%", height: "2px",
          background: "linear-gradient(90deg, transparent, rgba(225,65,100,0.50), rgba(215,55,88,0.32), transparent)",
          transform: "rotate(-11deg)",
          borderRadius: "999px",
          filter: "blur(1px)",
        }}
      />
      <div
        className="absolute animate-vein [animation-delay:6s]"
        style={{
          top: "60%", left: "8%",
          width: "30%", height: "2px",
          background: "linear-gradient(90deg, transparent, rgba(235,72,108,0.48), transparent)",
          transform: "rotate(4deg)",
          borderRadius: "999px",
          filter: "blur(1px)",
        }}
      />
      <div
        className="absolute animate-vein [animation-delay:9s]"
        style={{
          top: "75%", left: "60%",
          width: "25%", height: "2px",
          background: "linear-gradient(90deg, transparent, rgba(220,58,92,0.45), transparent)",
          transform: "rotate(-6deg)",
          borderRadius: "999px",
          filter: "blur(1px)",
        }}
      />
      <div
        className="absolute animate-vein [animation-delay:1.5s]"
        style={{
          top: "12%", left: "38%",
          width: "20%", height: "2px",
          background: "linear-gradient(90deg, transparent, rgba(240,78,112,0.42), transparent)",
          transform: "rotate(18deg)",
          borderRadius: "999px",
          filter: "blur(1px)",
        }}
      />

      {/* ── Varme glødende pulspunkter ── */}
      <div className="absolute top-[18%] left-[22%] w-80 h-80 bg-[radial-gradient(circle,rgba(200,45,78,0.24),transparent_58%)] animate-pulse-slow [animation-delay:0s]" />
      <div className="absolute top-[55%] left-[55%] w-96 h-96 bg-[radial-gradient(circle,rgba(210,50,85,0.22),transparent_58%)] animate-pulse-slow [animation-delay:3.5s]" />
      <div className="absolute top-[78%] left-[10%] w-64 h-64 bg-[radial-gradient(circle,rgba(195,40,72,0.24),transparent_58%)] animate-pulse-slow [animation-delay:7s]" />

      {/* ── Vignette — trækker øjet ind mod midten ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_55%,transparent_20%,rgba(12,2,6,0.92)_100%)]" />
    </div>
  );
}