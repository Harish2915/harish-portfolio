"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const LUXURY_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const LETTERS = ["H", "A", "R", "I", "S", "H"];

interface SplashScreenProps {
  onComplete?: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  const exitTriggeredRef = useRef(false);

  const handleFinish = useCallback(() => {
    if (exitTriggeredRef.current) return;
    exitTriggeredRef.current = true;

    // Restore body scroll immediately
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.documentElement.classList.add("intro-skipped");
    }

    setIsExiting(true);
    const exitTimer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 850);

    return () => clearTimeout(exitTimer);
  }, [onComplete]);

  useEffect(() => {
    // Prevent re-triggering on in-page navigation while preserving initial visit & reload
    if (typeof window !== "undefined") {
      try {
        const navEntries = window.performance?.getEntriesByType?.("navigation");
        const navType = (navEntries?.[0] as PerformanceNavigationTiming | undefined)?.type;
        const isReload = navType === "reload";
        const hasSeenIntro = sessionStorage.getItem("harish_portfolio_intro_shown");

        if (hasSeenIntro && !isReload) {
          setIsVisible(false);
          document.body.style.overflow = "";
          document.documentElement.style.overflow = "";
          onComplete?.();
          return;
        }
        sessionStorage.setItem("harish_portfolio_intro_shown", "true");
      } catch {
        // Fallback gracefully if storage is restricted
      }
    }

    // Lock background scroll during splash
    const originalOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // Reduced motion fast path
    if (shouldReduceMotion) {
      const rmTimer = setTimeout(() => {
        handleFinish();
      }, 400);
      return () => {
        clearTimeout(rmTimer);
        document.body.style.overflow = originalOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
      };
    }

    // Escape key listener for quick skip
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleFinish();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Smooth choreographed progress from 0% to 100% over ~2.1s
    const startTime = performance.now();
    const duration = 2100;
    let animFrameId: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);

      if (rawProgress < 1) {
        animFrameId = requestAnimationFrame(tick);
      } else {
        // Hold on completed state for ~300ms, then trigger cinematic exit
        setTimeout(() => {
          handleFinish();
        }, 320);
      }
    };

    animFrameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [shouldReduceMotion, handleFinish]);

  if (!isVisible) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <div
          id="splash-screen"
          role="dialog"
          aria-modal="true"
          aria-label="Welcome introduction"
          className="fixed inset-0 z-[100] w-full h-[100dvh] overflow-hidden select-none pointer-events-auto [html.intro-skipped_&]:hidden"
        >
          {/* =========================================================================
              CINEMATIC DUAL CURTAIN PARTING (Upper & Lower architectural panels)
              ========================================================================= */}
          <motion.div
            initial={{ y: "0%" }}
            animate={isExiting ? { y: "-100%" } : { y: "0%" }}
            transition={{ duration: 0.82, ease: LUXURY_EASE }}
            className="absolute top-0 left-0 right-0 h-1/2 bg-[#faf7f2] border-b border-zinc-200/50 shadow-2xl z-10"
          />
          <motion.div
            initial={{ y: "0%" }}
            animate={isExiting ? { y: "100%" } : { y: "0%" }}
            transition={{ duration: 0.82, ease: LUXURY_EASE }}
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#faf7f2] border-t border-zinc-200/50 shadow-2xl z-10"
          />

          {/* =========================================================================
              AMBIENT CANVAS & STUDIO LIGHTING
              ========================================================================= */}
          <div className="absolute inset-0 bg-[#faf7f2] z-20 overflow-hidden pointer-events-none">
            {/* Soft Warm Radial Illumination (Sunlight glow) */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 65% 55% at 50% 48%, rgba(234, 88, 12, 0.07) 0%, rgba(22, 51, 39, 0.04) 45%, rgba(250, 247, 242, 0) 80%)",
              }}
            />
          </div>

          {/* =========================================================================
              MAIN HERO CENTERPIECE: EMBLEM ASSEMBLY & SIGNATURE CHOREOGRAPHY
              ========================================================================= */}
          <div className="relative z-30 w-full h-full flex flex-col items-center justify-center pointer-events-none px-4">
            <motion.div
              animate={
                isExiting
                  ? {
                    opacity: 0,
                    y: -20,
                    scale: 0.96,
                    filter: "blur(6px)",
                    transition: { duration: 0.45, ease: LUXURY_EASE },
                  }
                  : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
              }
              className="flex flex-col items-center justify-center text-center max-w-lg mx-auto"
            >
              {/* 1. THE ASSEMBLED 3D EMBLEM & VECTOR SIGNATURE STROKE */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 flex items-center justify-center mb-6 sm:mb-7">
                {/* Stage A: Subtle Ambient Aura */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 0.45, scale: 1.15 }}
                  transition={{ duration: 1.4, ease: LUXURY_EASE }}
                  className="absolute inset-0 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(234,88,12,0.18)_0%,rgba(22,51,39,0.06)_50%,transparent_70%)]"
                />

                {/* Stage B: Precision Architectural Outline Blueprint (SVG Stroke Construction) */}
                <svg
                  viewBox="0 0 200 200"
                  className="absolute inset-0 w-full h-full pointer-events-none z-10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="wireframeOrange"
                      x1="0"
                      y1="0"
                      x2="200"
                      y2="200"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#ea580c" />
                      <stop offset="50%" stopColor="#ff7828" />
                      <stop offset="100%" stopColor="#c2410c" />
                    </linearGradient>
                    <linearGradient
                      id="wireframeGreen"
                      x1="0"
                      y1="0"
                      x2="200"
                      y2="200"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#163327" />
                      <stop offset="100%" stopColor="#12221b" />
                    </linearGradient>
                  </defs>

                  {/* Left Pillar Structural Trace */}
                  <motion.polygon
                    points="42,42 76,26 76,154 42,170"
                    stroke="url(#wireframeGreen)"
                    strokeWidth="1.2"
                    strokeDasharray="4 2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.25,
                      ease: LUXURY_EASE,
                    }}
                  />

                  {/* Right Pillar Structural Trace */}
                  <motion.polygon
                    points="114,28 148,12 148,140 114,156"
                    stroke="url(#wireframeGreen)"
                    strokeWidth="1.2"
                    strokeDasharray="4 2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.35,
                      ease: LUXURY_EASE,
                    }}
                  />

                  {/* Stage C: Signature Ribbon Dynamic Travel Stroke */}
                  <motion.path
                    d="M 16 146 C 40 126, 60 102, 95 88 C 132 74, 172 58, 184 82 C 194 100, 168 122, 136 116 C 98 110, 64 118, 38 134"
                    stroke="url(#wireframeOrange)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.95 }}
                    transition={{
                      duration: 1.1,
                      delay: 0.6,
                      ease: LUXURY_EASE,
                    }}
                  />
                </svg>

                {/* Stage D: Pristine Assembled 3D Emblem Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.88, filter: "blur(8px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.75, delay: 0.45, ease: LUXURY_EASE }}
                  className="relative z-20 w-full h-full flex items-center justify-center drop-shadow-[0_12px_28px_rgba(22,51,39,0.12)]"
                >
                  <Image
                    src="/logo/emblem.png"
                    alt="Harish Monogram"
                    width={400}
                    height={375}
                    className="w-full h-full object-contain"
                    priority
                  />
                </motion.div>
              </div>

              {/* 2. REFINED WORDMARK: "H A R I S H" LETTER-BY-LETTER REVEAL */}
              <div className="flex items-center justify-center space-x-2 sm:space-x-3.5 mb-2.5">
                {LETTERS.map((letter, idx) => (
                  <motion.span
                    key={idx}
                    initial={{
                      opacity: 0,
                      y: 18,
                      filter: "blur(6px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    transition={{
                      duration: 0.55,
                      delay: 0.85 + idx * 0.065,
                      ease: LUXURY_EASE,
                    }}
                    className="text-3xl sm:text-4xl md:text-5xl font-black tracking-widest text-[#12221b] font-sans inline-block select-none"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              {/* 3. REFINED HAIRLINE ACCENT & DISCIPLINE TITLE */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.25, ease: LUXURY_EASE }}
                className="w-20 sm:w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#ea580c] to-transparent my-3 origin-center"
              />

              <motion.p
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.55, delay: 1.4, ease: LUXURY_EASE }}
                className="text-[11px] sm:text-xs md:text-[13px] font-sans font-medium uppercase tracking-[0.28em] text-[#163327]/85 text-center"
              >
                Full Stack Developer{" "}
                <span className="text-[#ea580c] font-bold mx-1.5">•</span>{" "}
                Creative Engineer
              </motion.p>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
