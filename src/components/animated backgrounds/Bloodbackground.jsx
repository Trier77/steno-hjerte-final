// Three depth layers: back (huge/slow/dark), mid (standard), fore (small/fast/bright)
const BLOOD_CELLS = [
  // Back layer — large, very slow, near-black, barely visible
  ...Array.from({ length: 6 }, (_, i) => ({
    id: `b${i}`,
    layer: "back",
    yPercent: (i * 37 + 8) % 100,
    r: 80 + (i % 3) * 40,
    ry: 0.38,
    duration: 22 + i * 4,
    delay: -(i * 5.5),
    color: "#2d0808",
    opacity: 0.55,
  })),
  // Mid layer — standard cells, arterial red
  ...Array.from({ length: 16 }, (_, i) => ({
    id: `m${i}`,
    layer: "mid",
    yPercent: (i * 61) % 100,
    r: 22 + (i % 4) * 10,
    ry: 0.52,
    duration: 7 + (i % 5) * 1.8,
    delay: -(i * 1.1),
    color: i % 3 === 0 ? "#c0392b" : i % 3 === 1 ? "#922b21" : "#a93226",
    opacity: 0.22,
  })),
  // Fore layer — small, quick, brighter red, close to viewer
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `f${i}`,
    layer: "fore",
    yPercent: (i * 83 + 5) % 100,
    r: 8 + (i % 3) * 5,
    ry: 0.5,
    duration: 3.5 + (i % 4) * 0.9,
    delay: -(i * 0.6),
    color: "#e74c3c",
    opacity: 0.28,
  })),
];

export default function BloodBackground({ w, h }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Full-perimeter vignette — all four edges darken */}
        <radialGradient id="bb-vig" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.72" />
        </radialGradient>

        {/* Warm arterial glow from center — submerged feel */}
        <radialGradient id="bb-centerGlow" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#7b1a1a" stopOpacity="0.55" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>

        {/* Blur filter for back-layer cells — soft depth of field */}
        <filter id="bb-dof" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        {/* Mild blur for mid layer */}
        <filter id="bb-dofMid" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
      </defs>

      {/* Deep background base glow */}
      <rect x="0" y="0" width={w} height={h} fill="url(#bb-centerGlow)" />

      {/* ── Back layer — huge ghostly cells, blurred ── */}
      {BLOOD_CELLS.filter((c) => c.layer === "back").map((cell) => {
        const cy = h * (cell.yPercent / 100);
        return (
          <ellipse
            key={cell.id}
            rx={cell.r}
            ry={cell.r * cell.ry}
            fill={cell.color}
            fillOpacity={cell.opacity}
            filter="url(#bb-dof)"
          >
            <animateMotion
              dur={`${cell.duration}s`}
              begin={`${cell.delay}s`}
              repeatCount="indefinite"
              path={`M -300 ${cy} L ${w + 300} ${cy}`}
            />
          </ellipse>
        );
      })}

      {/* ── Mid layer — standard blood cells ── */}
      {BLOOD_CELLS.filter((c) => c.layer === "mid").map((cell) => {
        const cy = h * (cell.yPercent / 100);
        return (
          <ellipse
            key={cell.id}
            rx={cell.r}
            ry={cell.r * cell.ry}
            fill={cell.color}
            fillOpacity={cell.opacity}
            filter="url(#bb-dofMid)"
          >
            <animateMotion
              dur={`${cell.duration}s`}
              begin={`${cell.delay}s`}
              repeatCount="indefinite"
              path={`M -150 ${cy} L ${w + 150} ${cy}`}
            />
          </ellipse>
        );
      })}

      {/* ── Fore layer — small fast cells, no blur, sharpest ── */}
      {BLOOD_CELLS.filter((c) => c.layer === "fore").map((cell) => {
        const cy = h * (cell.yPercent / 100);
        return (
          <ellipse
            key={cell.id}
            rx={cell.r}
            ry={cell.r * cell.ry}
            fill={cell.color}
            fillOpacity={cell.opacity}
          >
            <animateMotion
              dur={`${cell.duration}s`}
              begin={`${cell.delay}s`}
              repeatCount="indefinite"
              path={`M -80 ${cy} L ${w + 80} ${cy}`}
            />
          </ellipse>
        );
      })}

      {/* Vignette last — darkens all four edges heavily */}
      <rect x="0" y="0" width={w} height={h} fill="url(#bb-vig)" />
    </svg>
  );
}
