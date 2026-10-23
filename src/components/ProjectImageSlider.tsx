"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectImageSliderProps {
  images: string[];
  projectTitle: string;
}

export default function ProjectImageSlider({
  images,
  projectTitle,
}: ProjectImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[50vh] sm:h-[65vh] md:h-[75vh] overflow-hidden rounded-sm shadow-sm bg-[#EAE8E4] group select-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative w-full h-full"
        >
          <Image
            src={images[currentIndex]}
            alt={`${projectTitle} - Architectural Perspective ${currentIndex + 1}`}
            fill
            priority={currentIndex === 0}
            className="object-cover"
            sizes="(max-width: 1400px) 100vw, 1400px"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows (Always visible or enhanced on hover) */}
      {images.length > 1 && (
        <>
          {/* Left Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous image"
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/80 hover:bg-white text-[#111111] backdrop-blur-md border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
          </button>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            aria-label="Next image"
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/80 hover:bg-white text-[#111111] backdrop-blur-md border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
          </button>

          {/* Image Counter & Pagination Indicators */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx
                    ? "w-6 h-1.5 bg-white shadow-sm"
                    : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

          {/* Discrete Image Index Badge */}
          <div className="absolute top-5 right-5 z-20 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[11px] font-mono text-white tracking-widest uppercase">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}
