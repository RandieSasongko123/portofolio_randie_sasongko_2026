import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Minus, Plus } from "lucide-react";
import rots from "../assets/audio/RotS.mp3";

export default function AudioController() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.05);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Setup audio on mount
  useEffect(() => {
    const audio = new Audio(rots);
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    const handleClick = () => {
      audio.play().catch(() => {});
      setIsMuted(false);
      window.removeEventListener("click", handleClick);
    };
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
      audio.pause();
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  // Controls
  const toggleMute = () => setIsMuted(!isMuted);
  const increaseVolume = () => setVolume((v) => Math.min(v + 0.1, 1));
  const decreaseVolume = () => setVolume((v) => Math.max(v - 0.1, 0));

  const handleSliderClick = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const clickY = rect.bottom - e.clientY;
    const height = rect.height;
    const newVolume = Math.max(0, Math.min(1, clickY / height));
    setVolume(newVolume);
    if (newVolume > 0) setIsMuted(false);
  };

  const handleSliderDrag = (e: MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const clickY = rect.bottom - e.clientY;
    const height = rect.height;
    const newVolume = Math.max(0, Math.min(1, clickY / height));
    setVolume(newVolume);
    if (newVolume > 0) setIsMuted(false);
  };

  useEffect(() => {
    const stopDrag = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener("mousemove", handleSliderDrag);
      window.addEventListener("mouseup", stopDrag);
    }
    return () => {
      window.removeEventListener("mousemove", handleSliderDrag);
      window.removeEventListener("mouseup", stopDrag);
    };
  }, [isDragging]);

  const getVolumeBars = () => {
    const barCount = 5;
    const activeBars = Math.ceil(volume * barCount);
    return Array.from({ length: barCount }, (_, i) => (
      <div
        key={i}
        className={`w-[2px] rounded-full transition-all duration-300 ${
          i < activeBars
            ? "bg-[#FF6500] shadow-[0_0_5px_rgba(255,101,0,0.8)]"
            : "bg-white/20"
        }`}
        style={{ height: `${(i + 1) * 14}%` }}
      />
    ));
  };

  return (
    <div className="fixed bottom-5 right-4 z-50 scale-[0.9] sm:scale-100">
      {/* Main Container */}
      <div
        className="
          relative flex flex-col items-center gap-1.5
          p-2.5 rounded-2xl
          backdrop-blur-sm border border-white/10
          hover:scale-[1.01] transition-all duration-300
        "
      >
        {/* Volume slider */}
        <div
          ref={sliderRef}
          className="h-20 w-3 flex flex-col justify-between items-center cursor-pointer"
          onClick={handleSliderClick}
          onMouseDown={() => setIsDragging(true)}
        >
          {getVolumeBars()}
        </div>

        {/* Mute / Unmute Button */}
        <button
          onClick={toggleMute}
          className={`p-2 rounded-xl transition-all duration-300 ${
            isMuted
              ? "bg-[#FF6500]/20 border border-[#FF6500]/40"
              : "bg-[#FF6500]/30 border border-[#FF6500]/30"
          } hover:shadow-[0_0_10px_rgba(255,101,0,0.6)] active:scale-95`}
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX size={16} className="text-[#FF6500]" />
          ) : (
            <Volume2 size={16} className="text-[#FF6500]" />
          )}
        </button>

        {/* Plus / Minus */}
        <div className="flex flex-col gap-[2px]">
          <button
            onClick={increaseVolume}
            className="p-1 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 transition"
          >
            <Plus size={12} className="text-[#FF6500]" />
          </button>
          <button
            onClick={decreaseVolume}
            className="p-1 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 transition"
          >
            <Minus size={12} className="text-[#FF6500]" />
          </button>
        </div>

        {/* Text Volume */}
        <div className="text-[9px] text-[#FF6500] mt-0.5">
          {isMuted ? "Muted" : `${Math.round(volume * 100)}%`}
        </div>
      </div>

      {/* Visualizer Bar */}
      <div className="flex justify-center gap-[1.5px] mt-1 h-[4px]">
        {[1, 2, 3, 2, 1].map((h, i) => (
          <div
            key={i}
            className="w-[2px] bg-gradient-to-t from-[#FF6500]/50 to-[#FF6500]/80 rounded-full animate-pulse"
            style={{
              height: `${h * 3}px`,
              animationDelay: `${i * 0.1}s`,
              opacity: isMuted ? 0.3 : 0.9,
            }}
          />
        ))}
      </div>
    </div>
  );
}