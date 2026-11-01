"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const videos = [
  { src: "/hero-video-1.mp4" },
  { src: "/hero-video-2.mp4" },
  { src: "/hero-video-3.mp4" },
  { src: "/hero-video-4.mp4" },
];

const slides = [
  { tagline: "Bë Creative" },
  { tagline: "Bë Different" },
  { tagline: "Bë Sustainable" },
  { tagline: "Bë Inspired" },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Smoothly switch active slide with hardware-synchronized single-active video playback
  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);

    const prevIndex = activeIndex;
    const nextVideo = videoRefs.current[index];

    // Start playing the incoming video immediately
    if (nextVideo) {
      nextVideo.currentTime = 0;
      nextVideo.play().catch(() => {});
    }

    // Delay pausing the previous video until the 1000ms crossfade completes
    // so the outgoing frame doesn't freeze abruptly mid-fade
    setTimeout(() => {
      videoRefs.current.forEach((vid, i) => {
        if (!vid || i === index) return;
        vid.pause();
      });
    }, 1000);
  }, [activeIndex]);

  // When active video ends, advance to next video seamlessly
  const handleEnded = useCallback((index: number) => {
    const nextIndex = (index + 1) % videos.length;
    goToSlide(nextIndex);
  }, [goToSlide]);

  // Initial playback: only start the first video, keep others idle
  useEffect(() => {
    const firstVideo = videoRefs.current[0];
    if (firstVideo) {
      firstVideo.currentTime = 0;
      firstVideo.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative w-full h-[100dvh] min-h-[640px] overflow-hidden bg-[#111111] select-none">
      {/* Pre-mounted Seamless Video Backgrounds with GPU layer isolation */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black [transform:translate3d(0,0,0)] [backface-visibility:hidden]">
        {videos.map((vid, index) => {
          const isActive = index === activeIndex;

          return (
            <video
              key={vid.src}
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              src={vid.src}
              muted
              playsInline
              autoPlay={index === 0}
              preload="auto"
              disablePictureInPicture
              onEnded={() => handleEnded(index)}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out will-change-[opacity]"
              style={{
                opacity: isActive ? 1 : 0,
                zIndex: isActive ? 2 : 1,
                pointerEvents: "none",
                transform: "translate3d(0, 0, 0)",
                backfaceVisibility: "hidden",
              }}
            />
          );
        })}

        {/* Dark Overlays for Text Readability & Video Contrast */}
        <div className="absolute inset-0 bg-black/35 z-10 pointer-events-none [transform:translate3d(0,0,0)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-10 pointer-events-none [transform:translate3d(0,0,0)]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 w-full h-full px-6 sm:px-10 md:px-14 lg:px-16 pb-14 sm:pb-18 md:pb-20 flex flex-col justify-end pointer-events-none">
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-12">
          {/* Bottom-Left Headline */}
          <div className="pointer-events-auto flex flex-col items-start text-left">
            <h2 className="font-serif text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-[4.5rem] text-white tracking-tight font-light mb-6 sm:mb-8 md:mb-0 drop-shadow-[0_4px_28px_rgba(0,0,0,0.75)]">
              Design your way<br />
              of bëing
            </h2>
          </div>

          {/* Bottom-Right Tagline */}
          <div className="pointer-events-auto flex flex-col items-start md:items-end justify-end pb-1 md:pb-2">
            <div className="overflow-hidden min-h-[60px] flex items-end">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeIndex}
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="font-serif text-3xl sm:text-4xl text-white tracking-wide font-light whitespace-nowrap drop-shadow-[0_2px_18px_rgba(0,0,0,0.75)]"
                >
                  {slides[activeIndex].tagline}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Center: 4 Horizontal Slider Indicators */}
      <div className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2.5 sm:gap-3.5 z-30 pointer-events-auto">
        {slides.map((_, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              onClick={() => goToSlide(index)}
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
