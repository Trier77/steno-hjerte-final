import { useEffect, useRef, useState } from "react";




function VideoOverlay({ onClose, visible, src }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [dragging, setDragging] = useState(false);
  const progressRef = useRef(null);

  // Sætter video-event listeners op, starter afspilning automatisk, hvis den finder en
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleLoaded = () => setDuration(video.duration);
    // Lukker overlayет automatisk når videoen er færdig
    const handleEnded = () => onClose();

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoaded);
    video.addEventListener("ended", handleEnded);
    video.play().catch(() => {});

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoaded);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  // Skifter mellem play og pause icon
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  // Laver sekunder om til mm:ss, som viser hvor lang videoen er
  const formatTime = (t) => {
    if (isNaN(t)) return "0:00";
    const mins = Math.floor(t / 60);
    const secs = Math.floor(t % 60)
      .toString()
      .padStart(2, "0");
    return `${mins}:${secs}`;
  };

  // Beregner hvor/hvornår i videoen der trykkes/trækkes baseret på tryk-input
  const getProgressFromEvent = (e) => {
    const bar = progressRef.current;
    if (!bar) return;
    const rect = bar.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    videoRef.current.currentTime = ratio * duration;
    setCurrentTime(ratio * duration);
  };

  const handlePointerDown = (e) => {
    e.preventDefault();
    setDragging(true);
    getProgressFromEvent(e);
  };

  const handlePointerMove = (e) => {
    if (!dragging) return;
    getProgressFromEvent(e);
  };

  const handlePointerUp = () => setDragging(false);

   // Touch-events skal tilføjes med passive: false så vi kan kalde preventDefault()
   // og forhindre at siden scroller mens brugeren trækker i progress-baren
  useEffect(() => {
    const bar = progressRef.current;
    if (!bar) return;

    bar.addEventListener("touchstart", handlePointerDown, { passive: false });
    bar.addEventListener("touchmove", handlePointerMove, { passive: false });
    bar.addEventListener("touchend", handlePointerUp);

    return () => {
      bar.removeEventListener("touchstart", handlePointerDown);
      bar.removeEventListener("touchmove", handlePointerMove);
      bar.removeEventListener("touchend", handlePointerUp);
    };
  }, [dragging]);

  // Beregner videoens progression som en værdi mellem 0 og 1
  const progress = duration ? currentTime / duration : 0;

  return (
    // Mørk baggrund bag overlayет, når overlayet lukker forsvinder det
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        backgroundColor: `rgba(0,0,0,${visible ? 0.4 : 0})`,
        transition: "background-color 0.4s ease",
      }}
      onClick={onClose}
    >
      {/* Selve modulet — stopPropagation forhindrer at klik inde i boksen lukker den */}
      <div
        className="relative bg-ui-box rounded-3xl w-10/12 flex flex-col"
        style={{
          height: "70vh",
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.95)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Lukkeknap i højre hjørne */}
        <button
          onClick={onClose}
          className="absolute top-0 right-0 z-10 w-20 h-20 flex items-center justify-center rounded-full bg-ui-box text-primary shadow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-11 h-11"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Selve video-elementet */}
        <div className="flex-1 m-5 rounded-2xl overflow-hidden">
          <video
            ref={videoRef}
            src={src}
            className="w-full h-full object-cover cursor-pointer"
            onClick={togglePlay}
            playsInline
          />
        </div>

        {/* Videokontrol, start/stop, progressionsbar og resterende tid */}
        <div className="flex items-center gap-6 px-8 py-6">
          {/* Play/Pause knap */}
          <button
            onClick={togglePlay}
            className="shrink-0 w-16 h-16 flex items-center justify-center"
          >
            {playing ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-14 h-14 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-14 h-14 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Progressionsbar — touch-events håndteres af useEffect ovenfor, kun muse-events her */}
          <div
            ref={progressRef}
            className="relative flex-1 h-2 bg-primary/20 rounded-full cursor-pointer"
            onMouseDown={handlePointerDown}
            onMouseMove={handlePointerMove}
            onMouseUp={handlePointerUp}
            onMouseLeave={handlePointerUp}
          >
            {/* Den fyldte del af progressionsbaren */}
            <div
              className="absolute left-0 top-0 h-full bg-primary rounded-full"
              style={{ width: `${progress * 100}%` }}
            />
            {/* Håndtag til at trække i progressionsbaren */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary shadow"
              style={{ left: `calc(${progress * 100}% - 12px)` }}
            />
          </div>

          {/* Resterende tid */}
          <span className="font-display text-primary text-3xl shrink-0">
            -{formatTime(duration - currentTime)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default VideoOverlay;
