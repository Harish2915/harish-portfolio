"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

export const HeroImage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 45, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 20 });

  const moveX = useTransform(springX, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [-8, 8]);
  const moveY = useTransform(springY, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[480px] sm:h-[580px] md:h-[680px] lg:h-[780px] xl:h-[840px] overflow-hidden select-none"
      id="hero-visual-area"
    >
      {/* Background Image Container with Parallax and Scale */}
      <motion.div
        style={{ x: moveX, y: moveY }}
        initial={shouldReduceMotion ? { scale: 1, opacity: 0.95 } : { scale: 1.04, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full"
      >
        <Image
          src="/hero_workspace.jpg"
          alt="Developer working on laptop on a modern wooden terrace overlooking alpine lake and mountain sunrise"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 65vw"
          className="object-cover object-[70%_center] lg:object-[65%_center]"
        />

        {/* Soft Left Gradient Mask: Blends smoothly into the white content area */}
        <div
          className="absolute inset-y-0 left-0 w-36 sm:w-60 md:w-80 lg:w-96 bg-linear-to-r from-white via-white/80 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Subtle Top & Bottom Fades for Seamless Page Flow */}
        <div
          className="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-white/40 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white via-white/50 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </motion.div>

      {/* Cursive Handwriting Overlay: Ideas Code Build Repeat */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.92, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-10 sm:bottom-14 right-6 sm:right-10 md:right-14 z-20 pointer-events-none select-none text-right flex flex-col items-end"
      >
        <div className="font-handwriting text-[38px] sm:text-[46px] md:text-[54px] lg:text-[62px] font-bold text-white leading-[0.92] drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)] -rotate-3 space-y-0.5">
          <div className="tracking-wide">Ideas</div>
          <div className="tracking-wide">Code</div>
          <div className="tracking-wide">Build</div>
          <div className="tracking-wide">Repeat</div>
        </div>

        {/* Hand-drawn Orange Brush Underline */}
        <svg
          className="w-24 sm:w-32 md:w-40 -mt-1 -mr-2 drop-shadow-md"
          viewBox="0 0 150 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M6 14C40 6 100 5 144 15"
            stroke="#F05A1A"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M18 19C52 11 96 10 134 16"
            stroke="#F05A1A"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>
      </motion.div>

      {/* Subtle Foreground Leaf / Plant Blur Accent on bottom right */}
      <div
        className="absolute -bottom-6 -right-6 w-32 h-32 bg-linear-to-tr from-emerald-950/20 to-transparent blur-xl pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
};

export default HeroImage;
