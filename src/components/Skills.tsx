"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  FlutterIcon,
  DartIcon,
  ReactIcon,
  NextJsIcon,
  PythonIcon,
  FastApiIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  MysqlIcon,
  PostgreSqlIcon,
  FirebaseIcon,
  GithubIcon,
  SqlIcon,
  HtmlIcon,
  CssIcon,
  RestApiIcon,
  GraphqlIcon,
  JwtIcon,
  GitIcon,
  PostmanIcon,
  BootstrapIcon,
  SqlAlchemyIcon,
  SupabaseIcon,
  WorkbenchIcon,
  FullStackIcon,
  MobileDevIcon,
  ApiDevIcon,
} from "./TechIcons";

const LUXURY_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export interface Skill {
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const allSkills: Skill[] = [
  // Programming (5)
  { name: "Python", category: "programming", icon: PythonIcon },
  { name: "JavaScript", category: "programming", icon: JavaScriptIcon },
  { name: "TypeScript", category: "programming", icon: TypeScriptIcon },
  { name: "Dart", category: "programming", icon: DartIcon },
  { name: "SQL", category: "programming", icon: SqlIcon },

  // Frameworks (6)
  { name: "React.js", category: "frameworks", icon: ReactIcon },
  { name: "Next.js", category: "frameworks", icon: NextJsIcon },
  { name: "Flutter", category: "frameworks", icon: FlutterIcon },
  { name: "FastAPI", category: "frameworks", icon: FastApiIcon },
  { name: "Bootstrap", category: "frameworks", icon: BootstrapIcon },
  { name: "SQLAlchemy", category: "frameworks", icon: SqlAlchemyIcon },

  // Web Technologies (5)
  { name: "HTML", category: "web", icon: HtmlIcon },
  { name: "CSS", category: "web", icon: CssIcon },
  { name: "REST APIs", category: "web", icon: RestApiIcon },
  { name: "GraphQL", category: "web", icon: GraphqlIcon },
  { name: "JWT Auth", category: "web", icon: JwtIcon },

  // Database (4)
  { name: "Firebase", category: "database", icon: FirebaseIcon },
  { name: "Supabase", category: "database", icon: SupabaseIcon },
  { name: "MySQL", category: "database", icon: MysqlIcon },
  { name: "PostgreSQL", category: "database", icon: PostgreSqlIcon },

  // Tools (4)
  { name: "Git", category: "tools", icon: GitIcon },
  { name: "GitHub", category: "tools", icon: GithubIcon },
  { name: "Postman", category: "tools", icon: PostmanIcon },
  { name: "MySQL Workbench", category: "tools", icon: WorkbenchIcon },

  // Concepts (3)
  { name: "Full Stack Dev", category: "concepts", icon: FullStackIcon },
  { name: "Mobile App Dev", category: "concepts", icon: MobileDevIcon },
  { name: "API Development", category: "concepts", icon: ApiDevIcon },
];

export const skillCategories = [
  { id: "all", name: "All Skills", count: allSkills.length },
  { id: "programming", name: "Programming", count: 5 },
  { id: "frameworks", name: "Frameworks", count: 6 },
  { id: "web", name: "Web Tech", count: 5 },
  { id: "database", name: "Database", count: 4 },
  { id: "tools", name: "Tools", count: 4 },
  { id: "concepts", name: "Concepts", count: 3 },
];

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const currentSkills: Skill[] =
    activeCategory === "all"
      ? allSkills
      : allSkills.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      className="relative w-full bg-white pt-10 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-28 px-3.5 sm:px-8 md:px-12 lg:px-16 xl:px-20 scroll-mt-20"
    >
      {/* Background subtle radial warm tint */}
      <div className="absolute inset-0 pointer-events-none select-none bg-[radial-gradient(circle_at_top_left,rgba(255,237,213,0.30),transparent_50%)]" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column: Fixed / Sticky Stationary Heading & Bio (Sticky on Desktop) */}
          <div className="lg:col-span-4 xl:col-span-3.5 flex flex-col items-start justify-start lg:sticky lg:top-[100px] self-start">
            {/* Eyebrow badge */}
            <motion.div
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }
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
                Technologies | Tools I Use
              </span>
            </motion.div>

            {/* Main Editorial Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[46px] font-serif font-bold text-[#12221b] tracking-tight leading-[1.08] mb-3 sm:mb-4">
              <span className="block overflow-hidden">
                <motion.span
                  initial={
                    shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }
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
                  Technologies
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={
                    shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }
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
                  I Work With<span className="text-[#ea580c]">.</span>
                </motion.span>
              </span>
            </h2>

            {/* Description */}
            <motion.p
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: shouldReduceMotion ? 0.25 : 0.5,
                delay: shouldReduceMotion ? 0 : 0.36,
                ease: LUXURY_EASE,
              }}
              className="text-xs sm:text-base text-zinc-600 font-sans leading-relaxed mb-4 sm:mb-6 max-w-md text-justify"
            >
              I use modern tools and frameworks to build scalable, secure and
              high-performance applications.
            </motion.p>

            {/* Skills count pill */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: 0.42, ease: LUXURY_EASE }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04),0_6px_16px_rgba(0,0,0,0.04)] text-zinc-700 text-xs font-semibold select-none"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{allSkills.length} Technologies Mastered</span>
            </motion.div>
          </div>

          {/* Right Column: Filter Tabs + Skill Cards Grid */}
          <div className="lg:col-span-8 xl:col-span-8.5 w-full flex flex-col gap-4 sm:gap-5">
            {/* Category Filter Pills */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, ease: LUXURY_EASE }}
              className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-1 pt-0.5 no-scrollbar select-none shrink-0"
            >
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 sm:px-4.5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer border ${activeCategory === cat.id
                    ? "bg-[#163327] text-white border-[#163327] shadow-[0_2px_8px_rgba(22,51,39,0.25)]"
                    : "bg-white text-zinc-600 hover:text-zinc-950 border-zinc-200/90 hover:border-zinc-300 shadow-[0_1px_4px_rgba(0,0,0,0.03)]"
                    }`}
                >
                  <span>
                    {cat.name} ({cat.count})
                  </span>
                </button>
              ))}
            </motion.div>

            {/* Natural Document Flow Grid matching Experience and Education */}
            <div className="w-full">
              <motion.div
                layout
                className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-4.5"
              >
                <AnimatePresence mode="popLayout">
                  {currentSkills.map((skill, idx) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        layout
                        key={skill.name}
                        initial={
                          shouldReduceMotion
                            ? { opacity: 0 }
                            : { opacity: 0, scale: 0.94, y: 10 }
                        }
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{
                          opacity: 0,
                          scale: 0.92,
                          transition: { duration: 0.15 },
                        }}
                        transition={{
                          duration: shouldReduceMotion ? 0.2 : 0.32,
                          delay: shouldReduceMotion ? 0 : 0.015 * idx,
                          ease: LUXURY_EASE,
                        }}
                        className="rounded-2xl sm:rounded-3xl border border-zinc-200/90 hover:border-zinc-300 bg-white p-4 sm:p-5 md:p-5.5 flex flex-col items-center justify-center text-center gap-2.5 sm:gap-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.05),0_10px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_14px_rgba(0,0,0,0.08),0_18px_38px_rgba(0,0,0,0.11)] hover:-translate-y-1 transition-all duration-300 ease-out group cursor-default select-none aspect-square sm:aspect-[1/1.05]"
                      >
                        <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shrink-0">
                          <Icon className="w-9 h-9 sm:w-10 sm:h-10" />
                        </div>
                        <span className="text-xs sm:text-[13px] md:text-sm font-bold text-zinc-900 group-hover:text-zinc-950 font-sans tracking-tight transition-colors line-clamp-1">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
