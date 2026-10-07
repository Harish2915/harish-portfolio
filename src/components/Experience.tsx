"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, Calendar, Building2, CheckCircle2 } from "lucide-react";

const LUXURY_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export interface ExperienceItem {
  id: string;
  number: string;
  role: string;
  company: string;
  employmentType?: string;
  duration: string;
  location?: string;
  responsibilities?: string[];
  technologies?: string[];
  isCurrentOrRecent?: boolean;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "younder-bots",
    number: "01",
    role: "Full Stack Developer Intern",
    company: "Younder Bots (OPC) Pvt Ltd",
    employmentType: "Developer",
    duration: "Sep 2025 – Jan 2026",
    responsibilities: [
      "Developed and integrated RESTful APIs using FastAPI and MySQL, enabling efficient backend data processing and system communication.",
      "Built responsive frontend components using React.js and collaborated with cross-functional teams to develop scalable full-stack applications.",
      "Contributed to debugging, testing, and deployment workflows, improving application reliability and performance.",
    ],
    technologies: ["FastAPI", "MySQL", "React.js", "REST APIs"],
    isCurrentOrRecent: false,
  },
  {
    id: "ksv-technologies",
    number: "02",
    role: "Flutter & Web Developer",
    company: "KSV Technologies",
    employmentType: "Developer",
    duration: "July 2026 – Sep 2026",
    responsibilities: [
      "Developed responsive web and mobile application interfaces using Flutter and modern web technologies.",
      "Implemented reusable UI components and responsive layouts to deliver consistent user experiences across different screen sizes.",
      "Worked on application debugging, testing, and performance improvements to ensure reliable and user-friendly applications.",
    ],
    technologies: ["Flutter", "Dart", "Next.js", "Node.js", "Firebase", "Supabase", "PostgreSQL", "Google Auth"],
    isCurrentOrRecent: false,
  },
];

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative w-full bg-white pt-8 pb-28 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 px-3.5 sm:px-8 md:px-12 lg:px-16 xl:px-20 overflow-x-clip scroll-mt-20"
    >
      {/* Background subtle warm radial glow matching portfolio aesthetic */}
      <div className="absolute inset-0 pointer-events-none select-none bg-[radial-gradient(circle_at_top_right,rgba(255,237,213,0.30),transparent_55%)]" />

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
                Career Journey | Experience
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
                  My Professional
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
                  Journey<span className="text-[#ea580c]">.</span>
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
              Hands-on software development experience building scalable full-stack applications, robust backend APIs, and modern responsive web interfaces.
            </motion.p>

            {/* Premium Pill / Badge */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.4,
                delay: shouldReduceMotion ? 0 : 0.42,
                ease: LUXURY_EASE,
              }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fafaf9] border border-zinc-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.03),0_4px_12px_rgba(0,0,0,0.04)] text-zinc-700 text-[11px] sm:text-xs font-semibold select-none"
            >
              <span className="w-2 h-2 rounded-full bg-[#ea580c] animate-pulse" />
              <span>Building • Learning • Shipping</span>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Editorial Timeline */}
          <div className="lg:col-span-8 xl:col-span-8.5 w-full">
            <div className="relative">
              {/* Very Thin Vertical Timeline Connector Line running down through center of all markers */}
              <div
                className="absolute left-[10px] sm:left-[12px] top-6 bottom-6 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#ea580c] via-zinc-200 to-zinc-200/40 pointer-events-none"
                aria-hidden="true"
              />

              <div className="flex flex-col gap-6 sm:gap-8">
                {EXPERIENCES.map((exp, idx) => {
                  const mobileTopOffset = 84 + idx * 20;
                  const mobileZIndex = 10 + idx * 10;

                  return (
                    <motion.div
                      key={exp.id}
                      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{
                        duration: shouldReduceMotion ? 0.25 : 0.5,
                        delay: shouldReduceMotion ? 0 : 0.15 * idx,
                        ease: LUXURY_EASE,
                      }}
                      style={
                        {
                          "--mobile-top": `${mobileTopOffset}px`,
                          "--mobile-z": `${mobileZIndex}`,
                        } as React.CSSProperties
                      }
                      className="sticky sm:relative top-[var(--mobile-top)] sm:top-auto z-[var(--mobile-z)] sm:z-auto group flex items-start gap-3 sm:gap-4 md:gap-5 transition-[top,box-shadow] duration-300"
                    >
                      {/* Circular Timeline Indicator Marker - Centered directly on the line */}
                      <div className="w-5 sm:w-6 shrink-0 flex items-center justify-center pt-6">
                        <div
                          className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110 ${exp.isCurrentOrRecent
                            ? "border-2 border-[#ea580c] shadow-[0_0_0_3px_rgba(234,88,12,0.20)]"
                            : "border-2 border-[#163327] shadow-[0_0_0_3px_rgba(22,51,39,0.12)]"
                            }`}
                          aria-hidden="true"
                        >
                          <span
                            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${exp.isCurrentOrRecent ? "bg-[#ea580c]" : "bg-[#163327]"
                              }`}
                          />
                        </div>
                      </div>

                      {/* Editorial Experience Card Panel */}
                      <div className="flex-1 min-w-0 relative rounded-[22px] sm:rounded-[26px] bg-white border border-zinc-200/90 sm:border-zinc-200/80 hover:border-zinc-300 p-5 sm:p-7 md:p-8 shadow-[0_-3px_18px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.06)] sm:shadow-[0_1px_3px_rgba(0,0,0,0.03),0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_18px_40px_rgba(0,0,0,0.07)] hover:-translate-y-0.5 transition-all duration-300 ease-out">
                        {/* Card Header: Metadata Row */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 mb-3 sm:mb-4">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs font-mono font-bold tracking-widest text-[#ea580c] uppercase">
                              EXPERIENCE {exp.number}
                            </span>
                            <span className="text-zinc-300 font-sans">•</span>
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-zinc-700 bg-zinc-100 border border-zinc-200/80">
                              <Building2 className="w-3 h-3 text-zinc-500" />
                              <span>{exp.company}</span>
                            </div>
                            {exp.employmentType && (
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-medium text-emerald-800 bg-emerald-50 border border-emerald-200/80">
                                {exp.employmentType}
                              </span>
                            )}
                          </div>

                          {/* Duration Badge */}
                          <div className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-mono font-medium text-zinc-600 bg-white sm:bg-transparent py-0.5 self-start sm:self-auto">
                            <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>

                        {/* Role Title */}
                        <div className="mb-3 sm:mb-4">
                          <h3 className="text-xl sm:text-2xl md:text-[26px] font-serif font-bold text-[#12221b] tracking-tight leading-snug">
                            {exp.role}
                          </h3>
                        </div>

                        {/* Responsibilities List (Rendered only when available) */}
                        {exp.responsibilities && exp.responsibilities.length > 0 && (
                          <div className="mb-5 sm:mb-6">
                            <ul className="space-y-2.5">
                              {exp.responsibilities.map((resp, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 font-sans leading-relaxed text-justify"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-[#ea580c] mt-0.5 shrink-0" />
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Technologies Tags (Rendered only when available) */}
                        {exp.technologies && exp.technologies.length > 0 && (
                          <div className="pt-2 border-t border-zinc-100 flex flex-wrap items-center gap-2">
                            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-400 mr-1">
                              Tech Stack:
                            </span>
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium font-mono text-zinc-700 bg-[#fafaf9] border border-zinc-200/90 shadow-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
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
