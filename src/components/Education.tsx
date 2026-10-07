"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Calendar, Building2, Sparkles, BookOpen } from "lucide-react";

const LUXURY_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export interface EducationItem {
  id: string;
  number: string;
  degree: string;
  field?: string;
  institution: string;
  duration: string;
  scoreLabel: string;
  scoreValue: string;
  isHighest?: boolean;
  statusBadge?: string;
}

const EDUCATION_DATA: EducationItem[] = [
  {
    id: "bachelors-degree",
    number: "01",
    degree: "Bachelor’s Degree",
    field: "Artificial Intelligence and Data Science",
    institution: "Erode Sengunthar Engineering College",
    duration: "2022 — 2026",
    scoreLabel: "CGPA",
    scoreValue: "7.64",
    isHighest: true,
    statusBadge: "Current • Pursuing",
  },
  {
    id: "higher-secondary",
    number: "02",
    degree: "Higher Secondary",
    field: "Computer Science",
    institution: "Sengunthar Higher Secondary School",
    duration: "2022",
    scoreLabel: "Percentage",
    scoreValue: "72%",
    isHighest: false,
    statusBadge: "Completed",
  },
  {
    id: "secondary-school",
    number: "03",
    degree: "Secondary School",
    institution: "Sengunthar Higher Secondary School",
    duration: "2020",
    scoreLabel: "Percentage",
    scoreValue: "71%",
    isHighest: false,
    statusBadge: "Completed",
  },
];

export default function Education() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="education"
      className="relative w-full bg-[#fafaf9] pt-10 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-28 px-3.5 sm:px-8 md:px-12 lg:px-16 xl:px-20 scroll-mt-20"
    >
      {/* Background subtle warm radial glow matching portfolio aesthetic */}
      <div className="absolute inset-0 pointer-events-none select-none bg-[radial-gradient(circle_at_bottom_left,rgba(255,237,213,0.30),transparent_55%)]" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-start">
          {/* LEFT COLUMN: Visually Anchored Introduction (Sticky on Desktop) */}
          <div className="lg:col-span-4 xl:col-span-3.5 flex flex-col items-start justify-start lg:sticky lg:top-[100px] self-start">
            {/* Eyebrow badge */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: shouldReduceMotion ? 0.25 : 0.5,
                delay: shouldReduceMotion ? 0 : 0.1,
                ease: LUXURY_EASE,
              }}
              className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2"
            >
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ea580c] shrink-0" />
              <span className="text-[11px] sm:text-[13px] font-extrabold uppercase tracking-[0.2em] text-[#ea580c] font-sans">
                Academic Background | Education
              </span>
            </motion.div>

            {/* Editorial Serif Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[46px] font-serif font-bold text-[#12221b] tracking-tight leading-[1.08] mb-2 sm:mb-3">
              <span className="block overflow-hidden">
                <motion.span
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.25 : 0.55,
                    delay: shouldReduceMotion ? 0 : 0.2,
                    ease: LUXURY_EASE,
                  }}
                  className="block"
                >
                  Educational
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.25 : 0.55,
                    delay: shouldReduceMotion ? 0 : 0.28,
                    ease: LUXURY_EASE,
                  }}
                  className="block"
                >
                  Foundations<span className="text-[#ea580c]">.</span>
                </motion.span>
              </span>
            </h2>

            {/* Short Supporting Text */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: shouldReduceMotion ? 0.25 : 0.5,
                delay: shouldReduceMotion ? 0 : 0.36,
                ease: LUXURY_EASE,
              }}
              className="text-xs sm:text-[15px] text-zinc-600 font-sans leading-relaxed mb-4 sm:mb-6 max-w-sm text-justify"
            >
              Formal education in Artificial Intelligence, Data Science, and Computer Science, establishing strong computational principles, analytical problem-solving, and algorithmic thinking.
            </motion.p>

            {/* Chronological Pathway Tracker Pill */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.4,
                delay: shouldReduceMotion ? 0 : 0.42,
                ease: LUXURY_EASE,
              }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.03),0_4px_12px_rgba(0,0,0,0.04)] text-zinc-700 text-[11px] sm:text-xs font-mono font-medium select-none mb-3"
            >
              <span className="text-zinc-500">2020</span>
              <span className="text-[#ea580c]">→</span>
              <span className="text-zinc-500">2022</span>
              <span className="text-[#ea580c]">→</span>
              <span className="font-bold text-[#12221b]">2026</span>
            </motion.div>

            {/* Highlighted Degree Capsule */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.4,
                delay: shouldReduceMotion ? 0 : 0.48,
                ease: LUXURY_EASE,
              }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-orange-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.03),0_4px_12px_rgba(234,88,12,0.08)] text-zinc-800 text-[11px] sm:text-xs font-semibold select-none"
            >
              <span className="w-2 h-2 rounded-full bg-[#ea580c] animate-pulse" />
              <span>B.Tech AI & Data Science (CGPA: 7.64)</span>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Editorial Education Timeline */}
          <div className="lg:col-span-8 xl:col-span-8.5 w-full">
            <div className="relative">
              {/* Continuous vertical connector line running down through the center of all markers */}
              <div
                className="absolute left-[10px] sm:left-[12px] top-6 bottom-6 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#ea580c] via-zinc-200 to-zinc-200/40 pointer-events-none"
                aria-hidden="true"
              />

              <div className="flex flex-col gap-6 sm:gap-8 pb-16 md:pb-0">
                {EDUCATION_DATA.map((item, idx) => {
                  return (
                    <motion.div
                      key={item.id}
                      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{
                        duration: shouldReduceMotion ? 0.25 : 0.5,
                        delay: shouldReduceMotion ? 0 : 0.15 * idx,
                        ease: LUXURY_EASE,
                      }}
                      style={{
                        "--stack-top": `${78 + idx * 24}px`,
                        "--stack-z": `${10 + idx}`,
                      } as React.CSSProperties}
                      className="sticky top-[var(--stack-top)] z-[var(--stack-z)] md:relative md:top-auto md:z-auto group flex items-start gap-3 sm:gap-4 md:gap-5"
                    >
                      {/* Circular Timeline Indicator Marker - Centered directly on the line */}
                      <div className="w-5 sm:w-6 shrink-0 flex items-center justify-center pt-6">
                        <div
                          className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110 ${item.isHighest
                            ? "border-2 border-[#ea580c] shadow-[0_0_0_3px_rgba(234,88,12,0.20)]"
                            : "border-2 border-[#163327] shadow-[0_0_0_3px_rgba(22,51,39,0.12)]"
                            }`}
                          aria-hidden="true"
                        >
                          <span
                            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${item.isHighest ? "bg-[#ea580c]" : "bg-[#163327]"
                              }`}
                          />
                        </div>
                      </div>

                      {/* Editorial Education Card Panel */}
                      <div
                        className={`flex-1 min-w-0 rounded-[22px] sm:rounded-[26px] bg-white p-5 sm:p-7 md:p-8 transition-all duration-300 ease-out hover:-translate-y-0.5 ${item.isHighest
                          ? "border-2 border-orange-500/30 hover:border-orange-500/50 shadow-[0_-4px_24px_rgba(234,88,12,0.06),0_12px_36px_rgba(0,0,0,0.07)] md:shadow-[0_2px_8px_rgba(234,88,12,0.05),0_12px_32px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(234,88,12,0.10),0_20px_45px_rgba(0,0,0,0.08)] ring-1 ring-orange-500/10"
                          : "border border-zinc-200/80 hover:border-zinc-300 shadow-[0_-4px_24px_rgba(0,0,0,0.05),0_10px_32px_rgba(0,0,0,0.06)] md:shadow-[0_1px_3px_rgba(0,0,0,0.03),0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_18px_40px_rgba(0,0,0,0.07)]"
                          }`}
                      >
                        {/* Card Header: Metadata Row */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 mb-3 sm:mb-4">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs font-mono font-bold tracking-widest text-[#ea580c] uppercase">
                              EDUCATION {item.number}
                            </span>
                            <span className="text-zinc-300 font-sans">•</span>
                            {item.statusBadge && (
                              <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider ${item.isHighest
                                  ? "text-[#ea580c] bg-orange-50 border border-orange-200/80"
                                  : "text-zinc-600 bg-zinc-100 border border-zinc-200/80"
                                  }`}
                              >
                                {item.statusBadge}
                              </span>
                            )}
                            {item.isHighest && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-medium text-emerald-800 bg-emerald-50 border border-emerald-200/80">
                                <Sparkles className="w-3 h-3 text-emerald-600" />
                                <span>Highest Qualification</span>
                              </span>
                            )}
                          </div>

                          {/* Duration Badge */}
                          <div className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-mono font-medium text-zinc-600 bg-white sm:bg-transparent py-0.5 self-start sm:self-auto">
                            <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                            <span>{item.duration}</span>
                          </div>
                        </div>

                        {/* Qualification / Degree Title */}
                        <div className="mb-2">
                          <h3 className="text-xl sm:text-2xl md:text-[26px] font-serif font-bold text-[#12221b] tracking-tight leading-snug">
                            {item.degree}
                          </h3>
                        </div>

                        {/* Stream / Field of Study */}
                        {item.field && (
                          <div className="mb-3">
                            <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-sans font-semibold text-[#ea580c]">
                              <BookOpen className="w-3.5 h-3.5 text-[#ea580c]" />
                              <span>{item.field}</span>
                            </div>
                          </div>
                        )}

                        {/* Institution Name */}
                        <div className="flex items-center gap-2 mb-4 text-xs sm:text-[13px] text-zinc-600 font-sans">
                          <Building2 className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                          <span className="font-medium text-zinc-700">{item.institution}</span>
                        </div>

                        {/* Score / Grade Value Section */}
                        <div className="pt-3 border-t border-zinc-100 flex items-center justify-end">
                          <div
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-mono font-bold ${item.isHighest
                              ? "bg-orange-500/10 text-[#ea580c] border border-orange-500/30 shadow-[0_1px_4px_rgba(234,88,12,0.15)]"
                              : "bg-zinc-100 text-zinc-800 border border-zinc-200/80"
                              }`}
                          >
                            <span>
                              {item.scoreLabel === "CGPA"
                                ? `CGPA ${item.scoreValue}`
                                : `Percentage: ${item.scoreValue}`}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
