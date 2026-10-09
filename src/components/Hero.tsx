"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { navigateToSection } from "@/utils/navigation";
import {
  PythonIcon,
  JavaScriptIcon,
  DartIcon,
  SqlIcon,
  ReactIcon,
  FastApiIcon,
  FlutterIcon,
  FirebaseIcon,
  SupabaseIcon,
  MysqlIcon,
  HtmlIcon,
  CssIcon,
  RestApiIcon,
  GraphqlIcon,
  JwtIcon,
  GitIcon,
  GithubIcon,
  PostmanIcon,
  BootstrapIcon,
  SqlAlchemyIcon,
} from "./TechIcons";

const LUXURY_EASE = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "10+", label: "Projects" },
  { value: "5+", label: "Technologies" },
  { value: "1+", label: "Years Experience" },
  { value: "100%", label: "Passionate" },
];

const technologies = [
  { name: "Python", icon: PythonIcon },
  { name: "React.js", icon: ReactIcon },
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "FastAPI", icon: FastApiIcon },
  { name: "Flutter", icon: FlutterIcon },
  { name: "Dart", icon: DartIcon },
  { name: "Firebase", icon: FirebaseIcon },
  { name: "Supabase", icon: SupabaseIcon },
  { name: "MySQL", icon: MysqlIcon },
  { name: "SQL", icon: SqlIcon },
  { name: "REST APIs", icon: RestApiIcon },
  { name: "GraphQL", icon: GraphqlIcon },
  { name: "JWT Auth", icon: JwtIcon },
  { name: "HTML", icon: HtmlIcon },
  { name: "CSS", icon: CssIcon },
  { name: "Git", icon: GitIcon },
  { name: "GitHub", icon: GithubIcon },
  { name: "Postman", icon: PostmanIcon },
  { name: "SQLAlchemy", icon: SqlAlchemyIcon },
  { name: "Bootstrap", icon: BootstrapIcon },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex-1 w-full h-full flex flex-col justify-between md:justify-center px-4 sm:px-12 md:px-16 lg:px-20 max-w-[1536px] mx-auto pt-0.5 pb-1 min-[360px]:pt-1 min-[360px]:pb-2 sm:py-3 overflow-hidden">
      {/* Left Column: Headline, Bio, Full-Width Mobile Buttons, Stats, Technologies */}
      <div className="w-full max-w-full md:max-w-2xl lg:max-w-[680px] flex flex-col justify-center z-10 flex-1 md:flex-none">
        {/* 2. Hero eyebrow */}
        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 12 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0.25 : 0.6,
            delay: shouldReduceMotion ? 0 : 0.18,
            ease: LUXURY_EASE,
          }}
          className="mb-1 min-[360px]:mb-1.5 min-[400px]:mb-2 sm:mb-1"
        >
          <span className="text-[10.5px] min-[360px]:text-[11.5px] min-[410px]:text-[12.5px] sm:text-[13px] font-extrabold uppercase tracking-[0.2em] text-[#ea580c] font-sans">
            Full Stack Developer
          </span>
        </motion.div>

        {/* 3. Main Editorial Headline */}
        <h1 className="text-[27px] min-[360px]:text-[30px] min-[400px]:text-[34px] min-[480px]:text-[38px] sm:text-5xl md:text-6xl lg:text-[66px] xl:text-[72px] font-serif font-bold tracking-tight leading-[1.08] sm:leading-[1.05] mb-1.5 min-[360px]:mb-2 min-[400px]:mb-2.5 min-[480px]:mb-3 sm:mb-2.5">
          <span className="block overflow-hidden">
            <motion.span
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 14 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.25 : 0.65,
                delay: shouldReduceMotion ? 0 : 0.3,
                ease: LUXURY_EASE,
              }}
              className="block text-[#12221b]"
            >
              Hi, I&apos;m
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 14 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.25 : 0.65,
                delay: shouldReduceMotion ? 0 : 0.4,
                ease: LUXURY_EASE,
              }}
              className="block text-[#ea580c] font-brush tracking-wide"
            >
              Harish.
            </motion.span>
          </span>
        </h1>

        {/* 4. Description */}
        <motion.p
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 12 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0.25 : 0.6,
            delay: shouldReduceMotion ? 0 : 0.52,
            ease: LUXURY_EASE,
          }}
          className="text-[11.5px] min-[360px]:text-[12.5px] min-[400px]:text-[13.5px] min-[480px]:text-[14.5px] sm:text-base md:text-[17px] text-zinc-700 max-w-lg leading-normal min-[360px]:leading-snug mb-2 min-[360px]:mb-2.5 min-[400px]:mb-3 min-[480px]:mb-4 sm:mb-5 font-sans text-left line-clamp-2 sm:line-clamp-none"
        >
          I build modern web, mobile and AI solutions that solve real-world problems.
        </motion.p>

        {/* 5. CTA Buttons - Sequential reveal with subtle scale (0.98 -> 1) & smooth instant hover */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-1.5 min-[360px]:gap-2 sm:gap-4 w-full sm:w-auto mb-2 min-[360px]:mb-2.5 min-[400px]:mb-3 sm:mb-5">
          {/* Primary: View My Work */}
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 12, scale: 0.98 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0.25 : 0.55,
              delay: shouldReduceMotion ? 0 : 0.64,
              ease: LUXURY_EASE,
            }}
            className="w-full sm:w-auto"
          >
            <motion.a
              href="/projects"
              onClick={(e) => {
                e.preventDefault();
                navigateToSection("projects", "/projects");
              }}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-3.5 min-[360px]:px-4.5 sm:px-6 py-1.5 min-[360px]:py-2 min-[400px]:py-2.5 sm:py-3 rounded-full text-[11px] min-[360px]:text-xs min-[400px]:text-[13px] sm:text-sm font-semibold text-white bg-gradient-to-r from-[#ff6a00] to-[#ea580c] border border-orange-400/40 hover:border-orange-300/60 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_6px_18px_rgba(234,88,12,0.22)] hover:shadow-[0_3px_6px_rgba(0,0,0,0.05),0_12px_24px_rgba(234,88,12,0.30)] transition-all duration-300 ease-out group font-sans text-center cursor-pointer"
            >
              <span>View My Work</span>
              <ArrowRight className="w-3.5 h-3.5 min-[360px]:w-4 min-[360px]:h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

          {/* Secondary: Download Resume */}
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 12, scale: 0.98 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0.25 : 0.55,
              delay: shouldReduceMotion ? 0 : 0.72,
              ease: LUXURY_EASE,
            }}
            className="w-full sm:w-auto"
          >
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full sm:w-auto glass-pill inline-flex items-center justify-center px-3.5 min-[360px]:px-4.5 py-1.5 min-[360px]:py-2 min-[400px]:py-2.5 sm:py-3 rounded-full text-[11px] min-[360px]:text-xs min-[400px]:text-[13px] sm:text-sm font-semibold text-[#163327] hover:bg-white transition-all duration-200 shadow-sm hover:shadow-md border border-zinc-200/90 group font-sans text-center"
            >
              <span>Download Resume</span>
              <Download className="w-3.5 h-3.5 min-[360px]:w-4 min-[360px]:h-4 ml-2 min-[360px]:ml-2.5 transition-transform duration-200 group-hover:translate-y-0.5 text-[#163327]" />
            </motion.a>
          </motion.div>
        </div>

        {/* 6. Statistics card - Fade in + tiny stagger for each stat */}
        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 14 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0.25 : 0.6,
            delay: shouldReduceMotion ? 0 : 0.8,
            ease: LUXURY_EASE,
          }}
          className="glass-panel rounded-2xl py-1.5 min-[360px]:py-2 min-[400px]:py-2.5 px-3 min-[360px]:px-3.5 sm:py-3 sm:px-6 w-full max-w-full sm:max-w-lg mb-1.5 min-[360px]:mb-2 min-[400px]:mb-2.5 sm:mb-5"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-3 gap-y-1.5 min-[360px]:gap-y-2 min-[400px]:gap-y-2.5 sm:gap-0 items-center divide-y-0 sm:divide-x divide-zinc-200/70">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: 8 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0.2 : 0.5,
                  delay: shouldReduceMotion ? 0 : 0.86 + idx * 0.06,
                  ease: LUXURY_EASE,
                }}
                className={`flex flex-col text-center ${idx !== 0 ? "sm:pl-3" : ""}`}
              >
                <span className="text-[15px] min-[360px]:text-[17px] min-[400px]:text-xl sm:text-2xl font-extrabold text-zinc-950 tracking-tight leading-none mb-0.5 font-sans">
                  {stat.value}
                </span>
                <span className="text-[9px] min-[360px]:text-[9.5px] min-[400px]:text-[10px] sm:text-[11px] font-medium text-zinc-500 font-sans">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 7. Technology badges - Reveal sequentially with subtle fade + upward motion */}
        <div className="flex flex-col gap-1 min-[360px]:gap-1.5 w-full overflow-hidden">
          <motion.span
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 8 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.25 : 0.55,
              delay: shouldReduceMotion ? 0 : 1.0,
              ease: LUXURY_EASE,
            }}
            className="text-[11px] min-[360px]:text-xs min-[400px]:text-[13px] sm:text-sm font-medium text-zinc-700 font-sans"
          >
            Technologies I work with
          </motion.span>
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 10 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.3 : 0.6,
              delay: shouldReduceMotion ? 0 : 1.08,
              ease: LUXURY_EASE,
            }}
            className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_16px,black_calc(100%-16px),transparent)] py-0.5 min-[360px]:py-1"
          >
            <motion.div
              className="flex items-center gap-2.5 sm:gap-3 w-max"
              animate={shouldReduceMotion ? undefined : { x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 40,
                repeat: Infinity,
              }}
            >
              {[...technologies, ...technologies].map((tech, idx) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={`${tech.name}-${idx}`}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: 6 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: shouldReduceMotion
                        ? 0
                        : 1.12 + Math.min(idx, 8) * 0.03,
                      ease: LUXURY_EASE,
                    }}
                    className="glass-pill px-2.5 min-[360px]:px-3 py-0.5 min-[360px]:py-1 sm:px-3.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2 cursor-pointer shadow-sm hover:shadow-md transition-all shrink-0 select-none"
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="text-[11px] min-[360px]:text-xs min-[400px]:text-[13px] sm:text-sm font-semibold text-zinc-800 font-sans">
                      {tech.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 9. Decorative element: Hand-lettered signature script quote pinned into bottom-right corner */}
      <div className="absolute right-3 min-[380px]:right-4 min-[450px]:right-5 sm:right-6 md:right-8 lg:right-10 xl:right-12 bottom-4 min-[360px]:bottom-5 min-[400px]:bottom-6 sm:bottom-4 md:bottom-5 lg:bottom-6 select-none pointer-events-none z-20">
        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 10, rotate: -16 }
          }
          animate={{ opacity: 1, y: 0, rotate: -18 }}
          transition={{
            duration: shouldReduceMotion ? 0.3 : 0.75,
            ease: LUXURY_EASE,
            delay: shouldReduceMotion ? 0 : 0.85,
          }}
          className="flex flex-col items-start leading-[1.12] min-[360px]:leading-[1.16] min-[400px]:leading-[1.2] sm:leading-[1.0] tracking-wide text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.85)] font-script text-[18px] min-[360px]:text-[20px] min-[400px]:text-[22px] min-[480px]:text-[25px] sm:text-2xl md:text-2xl lg:text-[26px] xl:text-[30px] font-bold"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          <span>Ideas</span>
          <span className="pl-2 sm:pl-2.5">Code</span>
          <span className="pl-3.5 sm:pl-4">Build</span>
          <div className="relative pl-2.5 sm:pl-3 inline-block">
            <span className="relative inline-block pb-1">
              Repeat

              {/* Hand-drawn style dual parallel underline auto-fitting from left to right */}
              <svg
                className="absolute left-0 -bottom-3 sm:-bottom-4 w-full h-2.5 sm:h-3.5 text-[#ea580c] filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] pointer-events-none overflow-visible"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
                fill="none"
              >
                {/* Top line */}
                <motion.path
                  d="M2 6C30 2 70 2 98 7"
                  stroke="#ea580c"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: shouldReduceMotion ? 1 : 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.85,
                    delay: shouldReduceMotion ? 0 : 1.15,
                    ease: LUXURY_EASE,
                  }}
                />
                {/* Bottom parallel line */}
                <motion.path
                  d="M4 14C32 9 72 9 96 15"
                  stroke="#ea580c"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: shouldReduceMotion ? 1 : 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.85,
                    delay: shouldReduceMotion ? 0 : 1.28,
                    ease: LUXURY_EASE,
                  }}
                />
              </svg>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
