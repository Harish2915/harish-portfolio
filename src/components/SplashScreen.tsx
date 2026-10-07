"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const LUXURY_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface SplashScreenProps {
  onComplete?: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      const timer = setTimeout(() => handleFinish(), 600);
      return () => clearTimeout(timer);
    }

    // Animate progress smoothly from 0 to 100 over ~1.9s
    const startTime = Date.now();
    const duration = 1900;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          handleFinish();
        }, 350);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const handleFinish = () => {
    setIsVisible(false);
    if (onComplete) {
      setTimeout(onComplete, 700);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="cinematic-splash"
          initial={{ opacity: 1, y: 0 }}
          exit={{
            y: "-100%",
            opacity: 0.98,
            transition: {
              duration: 0.75,
              ease: LUXURY_EASE,
            },
          }}
          className="fixed inset-0 z-[100] w-full h-[100dvh] bg-[#fafaf9] flex items-center justify-center overflow-hidden select-none cursor-default"
        >
          {/* Subtle Ambient Forest Green Vignette */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: LUXURY_EASE }}
            className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(250,250,249,0)_40%,rgba(18,34,27,0.06)_100%)]"
          />

          {/* Warm center lighting breath */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 0.5, scale: 1.05 }}
            transition={{ duration: 1.6, ease: LUXURY_EASE }}
            className="absolute w-[500px] h-[500px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(234,88,12,0.08)_0%,transparent_70%)]"
          />

          {/* Centerpiece Container */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
            {/* Elegant Orange Top Line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: LUXURY_EASE }}
              className="w-16 sm:w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#ea580c] to-transparent mb-5 origin-center"
            />

            {/* Logo Mark "H." */}
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15, ease: LUXURY_EASE }}
              className="flex items-baseline mb-2"
            >
              <span className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[#12221b] font-sans">
                H
              </span>
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.35, delay: 0.35, ease: LUXURY_EASE }}
                className="text-5xl sm:text-6xl font-black text-[#ea580c] leading-none"
              >
                .
              </motion.span>
            </motion.div>

            {/* "HARISH" Title */}
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.4, ease: LUXURY_EASE }}
              className="text-xl sm:text-2xl font-serif font-bold text-[#12221b] tracking-[0.25em] uppercase mb-1.5"
            >
              Harish
            </motion.h1>

            {/* "FULL STACK DEVELOPER" Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.55, ease: LUXURY_EASE }}
              className="flex items-center gap-2 mb-8"
            >
              <span className="w-1 h-1 rounded-full bg-[#ea580c]" />
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-zinc-500 font-sans">
                Full Stack Developer
              </span>
              <span className="w-1 h-1 rounded-full bg-[#ea580c]" />
            </motion.div>

            {/* Modern Sleek Loading Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.65, ease: LUXURY_EASE }}
              className="flex flex-col items-center gap-2.5 w-44 sm:w-52"
            >
              {/* Progress Track */}
              <div className="w-full h-[2.5px] bg-zinc-200/90 rounded-full overflow-hidden relative shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#ea580c] via-[#ff6a00] to-[#ea580c] rounded-full shadow-[0_0_8px_rgba(234,88,12,0.4)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>

              {/* Progress Numbers & Status */}
              <div className="w-full flex items-center justify-between text-[10px] font-mono tracking-widest text-zinc-400">
                <span className="text-[9px] uppercase tracking-[0.2em] font-sans font-medium text-zinc-400">
                  {progress < 100 ? "Loading Portfolio" : "Ready"}
                </span>
                <span className="font-semibold text-zinc-600">
                  {progress}%
                </span>
              </div>
            </motion.div>
          </div>

          {/* Discreet Skip Button (Top Right) */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            whileHover={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            onClick={handleFinish}
            className="absolute top-6 right-6 sm:top-8 sm:right-8 text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-400 hover:text-zinc-800 font-sans transition-colors cursor-pointer px-3 py-1.5 rounded-full bg-zinc-200/40 hover:bg-zinc-200/80 backdrop-blur-xs"
          >
            Skip
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
