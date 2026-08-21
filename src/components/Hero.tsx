"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const videos: { mp4: string; webm: string; poster?: string }[] = [
  { mp4: "/hero-video-1.mp4", webm: "/hero-video-1.mp4" },
  { mp4: "/hero-video-2.mp4", webm: "/hero-video-2.mp4" },
  { mp4: "/hero-video-3.mp4", webm: "/hero-video-3.mp4" },
  { mp4: "/hero-video-4.mp4", webm: "/hero-video-4.mp4" },
];

const slides = [
  { tagline: "Be Creative" },
  { tagline: "Be Different" },
  { tagline: "Be Sustainable" },
  { tagline: "Be Inspired" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Active slot can be 'A' or 'B'
  const [activeSlot, setActiveSlot] = useState<"A" | "B">("A");

  // Video indices loaded in each slot. -1 means no video is loaded.
  const [slotAIndex, setSlotAIndex] = useState<number>(0);
  const [slotBIndex, setSlotBIndex] = useState<number>(-1);

  // Playback states for each slot
  const [isPlayingA, setIsPlayingA] = useState<boolean>(true);
  const [isPlayingB, setIsPlayingB] = useState<boolean>(false);

  // Logical index for the slide (0 to 3) to sync text and dots
  const [logicalIndex, setLogicalIndex] = useState<number>(0);

  const videoRefA = useRef<HTMLVideoElement>(null);
  const videoRefB = useRef<HTMLVideoElement>(null);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Synchronize playing states with video element playback
  useEffect(() => {
    if (isPlayingA && videoRefA.current) {
      videoRefA.current.play().catch((err) => console.log("Play A error:", err));
    } else if (!isPlayingA && videoRefA.current) {
      videoRefA.current.pause();
    }
  }, [isPlayingA, slotAIndex]);

  useEffect(() => {
    if (isPlayingB && videoRefB.current) {
      videoRefB.current.play().catch((err) => console.log("Play B error:", err));
    } else if (!isPlayingB && videoRefB.current) {
      videoRefB.current.pause();
    }
  }, [isPlayingB, slotBIndex]);

  // Clean up timeouts on unmount
  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  // Preloading check
  const checkPreload = (
    currentTime: number,
    duration: number,
    currentSlotIdx: number,
    otherSlotIdx: number,
    setOtherSlotIdx: (idx: number) => void
  ) => {
    if (!duration) return;
    const timeRemaining = duration - currentTime;

    // When less than 4 seconds remaining, preload the next video
    if (timeRemaining < 4 && otherSlotIdx === -1) {
      const nextIdx = (currentSlotIdx + 1) % videos.length;
      setOtherSlotIdx(nextIdx);
    }
  };

  const handleTimeUpdateA = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    checkPreload(video.currentTime, video.duration, slotAIndex, slotBIndex, setSlotBIndex);
  };

  const handleTimeUpdateB = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    checkPreload(video.currentTime, video.duration, slotBIndex, slotAIndex, setSlotAIndex);
  };

  // Starts playback in the upcoming slot; actual activeSlot swap occurs onPlaying
  const triggerTransition = (fromSlot: "A" | "B", targetIndex?: number) => {
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }

    if (fromSlot === "A") {
      const nextIdx = targetIndex !== undefined ? targetIndex : ((slotAIndex + 1) % videos.length);
      setSlotBIndex(nextIdx);
      setIsPlayingB(true);
    } else {
      const nextIdx = targetIndex !== undefined ? targetIndex : ((slotBIndex + 1) % videos.length);
      setSlotAIndex(nextIdx);
      setIsPlayingA(true);
    }
  };

  const handleEndedA = () => {
    triggerTransition("A");
  };

  const handleEndedB = () => {
    triggerTransition("B");
  };

  const transitionToSlide = (nextIndex: number) => {
    if (nextIndex === logicalIndex) return;
    triggerTransition(activeSlot, nextIndex);
  };

  // Swap active Slot and fade it in ONLY when frames are active (onPlaying)
  const handlePlayingA = () => {
    if (activeSlot === "B" && slotAIndex !== -1) {
      setActiveSlot("A");
      setLogicalIndex(slotAIndex);
      transitionTimeoutRef.current = setTimeout(() => {
        setIsPlayingB(false);
        setSlotBIndex(-1);
      }, 1000);
    }
  };

  const handlePlayingB = () => {
    if (activeSlot === "A" && slotBIndex !== -1) {
      setActiveSlot("B");
      setLogicalIndex(slotBIndex);
      transitionTimeoutRef.current = setTimeout(() => {
        setIsPlayingA(false);
        setSlotAIndex(-1);
      }, 1000);
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-[100dvh] min-h-[640px] overflow-hidden bg-[#111111] select-none"
    >
      {/* Full-Screen Video Background */}
      <div className="absolute inset-0 z-0">
        {slotAIndex !== -1 && (
          <video
            ref={videoRefA}
            key={`video-slot-a-${slotAIndex}`}
            muted
            playsInline
            onTimeUpdate={handleTimeUpdateA}
            onEnded={handleEndedA}
            onPlaying={handlePlayingA}
            poster={videos[slotAIndex].poster}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: activeSlot === "A" ? 1 : 0,
              zIndex: activeSlot === "A" ? 1 : 0,
            }}
          >
            <source src={videos[slotAIndex].webm} type="video/webm" />
            <source src={videos[slotAIndex].mp4} type="video/mp4" />
          </video>
        )}

        {slotBIndex !== -1 && (
          <video
            ref={videoRefB}
            key={`video-slot-b-${slotBIndex}`}
            muted
            playsInline
            onTimeUpdate={handleTimeUpdateB}
            onEnded={handleEndedB}
            onPlaying={handlePlayingB}
            poster={videos[slotBIndex].poster}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: activeSlot === "B" ? 1 : 0,
              zIndex: activeSlot === "B" ? 1 : 0,
            }}
          >
            <source src={videos[slotBIndex].webm} type="video/webm" />
            <source src={videos[slotBIndex].mp4} type="video/mp4" />
          </video>
        )}
        
        {/* Dark Overlays for Text Readability & Video Contrast */}
        <div className="absolute inset-0 bg-black/35 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-10 pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 w-full h-full px-6 sm:px-10 md:px-14 lg:px-16 pb-14 sm:pb-18 md:pb-20 flex flex-col justify-end pointer-events-none">
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-12">
          
          {/* Bottom-Left Headline with Balanced Refined Font Size */}
          <div className="pointer-events-auto flex flex-col items-start text-left">
            <h2 className="font-serif text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-[4.5rem] text-white tracking-tight font-light mb-6 sm:mb-8 md:mb-0 drop-shadow-[0_4px_28px_rgba(0,0,0,0.75)]">
              Design your way<br />
              of being
            </h2>
          </div>

          {/* Bottom-Right Tagline */}
          <div className="pointer-events-auto flex flex-col items-start md:items-end justify-end pb-1 md:pb-2">
            <div className="overflow-hidden min-h-[60px] flex items-end">
              <AnimatePresence mode="wait">
                <motion.span
                  key={logicalIndex}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -22 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif text-3xl sm:text-4xl text-white tracking-wide font-light whitespace-nowrap drop-shadow-[0_2px_18px_rgba(0,0,0,0.75)]"
                >
                  {slides[logicalIndex].tagline}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Center: 4 Horizontal Slider Indicators */}
      <div className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2.5 sm:gap-3.5 z-30 pointer-events-auto">
        {slides.map((_, index) => {
          const isActive = index === logicalIndex;
          return (
            <button
              key={index}
              onClick={() => transitionToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className="p-1 focus:outline-none cursor-pointer group"
            >
              <div
                className={`h-[3px] rounded-full transition-all duration-500 ease-out ${
                  isActive
                    ? "w-10 sm:w-16 md:w-18 bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)]"
                    : "w-7 sm:w-10 md:w-12 bg-white/35 group-hover:bg-white/70"
                }`}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}
