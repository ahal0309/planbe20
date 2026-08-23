"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const duration = 2000; // 2 seconds total loading
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        // Wait a short moment after hitting 100% before fading out
        setTimeout(() => {
          setIsVisible(false);
        }, 400);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAFAFA]"
        >
          {/* Logo container */}
          <div className="relative mb-8 flex justify-center items-center">
            <Image
              src="/logo_base.png"
              alt="PLAN Bë Architectural Design Studio Base"
              width={300}
              height={135}
              priority
              className="w-48 sm:w-56 md:w-64 h-auto object-contain drop-shadow-sm filter contrast-125"
            />
            <motion.div
              className="absolute inset-0 w-full h-full flex justify-center items-center"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <Image
                src="/logo_e.png"
                alt="e"
                width={300}
                height={135}
                priority
                className="w-48 sm:w-56 md:w-64 h-auto object-contain drop-shadow-sm filter contrast-125"
              />
            </motion.div>
          </div>

          {/* Loading Bar */}
          <div className="w-48 sm:w-56 md:w-64 h-[2px] bg-black/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-black"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
