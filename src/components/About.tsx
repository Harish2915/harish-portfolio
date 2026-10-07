"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  BarChart3,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const LUXURY_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface AboutDetail {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: React.ReactNode;
}

const details: AboutDetail[] = [
  {
    icon: GraduationCap,
    title: "Education",
    content: (
      <div className="flex flex-col text-left">
        <span className="font-bold text-zinc-900 text-xs sm:text-[13px] font-sans leading-tight">
          B.Tech AI & Data Science
        </span>
        <span className="text-zinc-500 text-[11px] sm:text-xs font-sans mt-0.5">
          Erode Sengunthar Engineering College
        </span>
        <span className="text-zinc-400 text-[11px] sm:text-xs font-sans mt-0.5">
          2022 – 2026 (CGPA: 7.67)
        </span>
      </div>
    ),
  },
  {
    icon: MapPin,
    title: "Location",
    content: (
      <span className="text-xs sm:text-[13px] text-zinc-700 font-medium font-sans">
        Tamil Nadu, India
      </span>
    ),
  },
  {
    icon: BarChart3,
    title: "Interests",
    content: (
      <span className="text-xs sm:text-[13px] text-zinc-700 font-medium font-sans leading-relaxed">
        Web Development, Mobile Apps, AI/ML, Product Building
      </span>
    ),
  },
  {
    icon: Briefcase,
    title: "Open to",
    content: (
      <span className="text-xs sm:text-[13px] text-zinc-700 font-medium font-sans leading-relaxed">
        Full Stack Developer, Flutter Developer, Software Developer (Fresher)
      </span>
    ),
  },
];

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative w-full min-h-[calc(100vh-72px)] bg-[#fafaf9] flex flex-col justify-center py-12 sm:py-16 lg:py-0 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 overflow-hidden scroll-mt-[72px]"
    >
      {/* Background subtle radial gradient */}
      <div className="absolute inset-0 pointer-events-none select-none bg-[radial-gradient(circle_at_top_right,rgba(255,237,213,0.35),transparent_55%)]" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-6 xl:gap-8 items-center">
          {/* Left Column: Fixed photo frame, inner image scales smoothly without shifting layout */}
          <div className="lg:col-span-4 w-full flex justify-center">
            <div className="relative w-full max-w-[460px] lg:max-w-none aspect-[4/3.7] sm:aspect-[4/3.5] lg:aspect-[4/4.2] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-xl shadow-zinc-900/10 border border-zinc-200/80 bg-zinc-900 group">
              <motion.img
                src="/hero_bg.png"
                alt="Harish working on code outdoors facing mountains - Passionate Problem Solver"
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, scale: 1.04 }
                }
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: shouldReduceMotion ? 0.3 : 1.0,
                  ease: LUXURY_EASE,
                }}
                className="w-full h-full object-cover object-right"
              />
              <div className="absolute inset-0 pointer-events-none rounded-[24px] sm:rounded-[28px] ring-1 ring-inset ring-black/5" />

              {/* Handwritten "Passionate Problem Solver" Overlay with Orange Scribble */}
              <div className="absolute right-4 sm:right-6 md:right-7 bottom-5 sm:bottom-7 md:bottom-8 select-none pointer-events-none z-10">
                <motion.div
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: 8, rotate: -18 }
                  }
                  whileInView={{ opacity: 1, y: 0, rotate: -18 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.3 : 0.65,
                    delay: shouldReduceMotion ? 0 : 0.25,
                    ease: LUXURY_EASE,
                  }}
                  className="flex flex-col items-start leading-[0.95] tracking-wide text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)] font-script text-2xl sm:text-3xl lg:text-[34px] font-bold"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  <span>Passionate</span>
                  <span className="relative inline-block mt-0.5 sm:mt-1">
                    Problem Solver

                    {/* Dynamic energetic orange brush scribble underline */}
                    <svg
                      className="absolute -bottom-3 sm:-bottom-4 left-0 w-[110%] h-4 sm:h-5 text-[#ea580c] filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] pointer-events-none overflow-visible"
                      viewBox="0 0 100 24"
                      fill="none"
                    >
                      <motion.path
                        d="M 4 20 L 96 4 L 40 18 L 80 14"
                        stroke="#ea580c"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: shouldReduceMotion ? 1 : 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                          duration: shouldReduceMotion ? 0 : 0.75,
                          delay: shouldReduceMotion ? 0 : 0.45,
                          ease: LUXURY_EASE,
                        }}
                      />
                    </svg>
                  </span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Middle Column: Eyebrow, Main Heading, Bio, and CTA */}
          <div className="lg:col-span-4 flex flex-col items-start justify-center">
            {/* 1. About label appears first */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 10 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: shouldReduceMotion ? 0.25 : 0.5,
                delay: shouldReduceMotion ? 0 : 0.1,
                ease: LUXURY_EASE,
              }}
              className="flex items-center gap-2 mb-2 sm:mb-3"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#ea580c] shrink-0" />
              <span className="text-[11px] sm:text-[13px] font-extrabold uppercase tracking-[0.2em] text-[#ea580c] font-sans">
                About Me
              </span>
            </motion.div>

            {/* 2. Heading appears next with a smooth line reveal */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[48px] font-serif font-bold text-[#12221b] tracking-tight leading-[1.08] mb-3 sm:mb-4">
              <span className="block overflow-hidden">
                <motion.span
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: 12 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.25 : 0.55,
                    delay: shouldReduceMotion ? 0 : 0.2,
                    ease: LUXURY_EASE,
                  }}
                  className="block"
                >
                  Building Digital
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: 12 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.25 : 0.55,
                    delay: shouldReduceMotion ? 0 : 0.28,
                    ease: LUXURY_EASE,
                  }}
                  className="block"
                >
                  Solutions with Purpose
                  <span className="text-[#ea580c]">.</span>
                </motion.span>
              </span>
            </h2>

            {/* 3. Description follows */}
            <motion.p
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 10 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: shouldReduceMotion ? 0.25 : 0.5,
                delay: shouldReduceMotion ? 0 : 0.36,
                ease: LUXURY_EASE,
              }}
              className="text-xs sm:text-base text-zinc-600 font-sans leading-relaxed mb-6 sm:mb-7 max-w-lg text-justify"
            >
              Motivated AI and Data Science undergraduate with hands-on experience
              in Full Stack and Mobile Application Development. I love building
              scalable, user-friendly applications that make a real impact.
            </motion.p>

            {/* 4. CTA appears after the description */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 10, scale: 0.98 }
              }
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: shouldReduceMotion ? 0.25 : 0.5,
                delay: shouldReduceMotion ? 0 : 0.44,
                ease: LUXURY_EASE,
              }}
              className="inline-block"
            >
              <motion.a
                href="#contact"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="inline-flex items-center justify-center px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#ff6a00] to-[#ea580c] border border-orange-400/40 hover:border-orange-300/60 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_6px_18px_rgba(234,88,12,0.22)] hover:shadow-[0_3px_6px_rgba(0,0,0,0.05),0_12px_24px_rgba(234,88,12,0.30)] transition-all duration-300 ease-out group font-sans text-center cursor-pointer"
              >
                <span>More About Me</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: 4 Rounded Glass Cards appearing sequentially with subtle stagger */}
          <div className="lg:col-span-4 flex flex-col gap-3 sm:gap-3.5 w-full">
            {details.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: 12 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.25 : 0.5,
                    delay: shouldReduceMotion ? 0 : 0.38 + idx * 0.07,
                    ease: LUXURY_EASE,
                  }}
                  className="rounded-2xl border border-zinc-200/80 bg-white/95 backdrop-blur-md p-3 sm:p-4 lg:p-3 xl:p-4 shadow-sm hover:shadow-md hover:border-zinc-300 transition-[border-color,box-shadow] duration-200 flex items-center justify-between gap-2.5 sm:gap-3.5"
                >
                  <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 min-w-[95px] sm:min-w-[115px] lg:min-w-[100px] xl:min-w-[115px]">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 xl:w-10 xl:h-10 rounded-xl bg-[#eef7f3] text-[#163327] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 xl:w-5 xl:h-5 text-[#163327]" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-zinc-900 font-sans tracking-tight">
                      {item.title}
                    </span>
                  </div>
                  <div className="flex-1 text-left pl-1">
                    {item.content}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
