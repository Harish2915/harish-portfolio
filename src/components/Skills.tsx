"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
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
  SupabaseIcon,
} from "./TechIcons";

const LUXURY_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export interface SkillItem {
  id: string;
  name: string;
  category: string;
  tags?: string[];
  icon: React.ComponentType<{ className?: string }>;
  bgTint: string;
  badgeStyle: string;
}

export type CategoryId =
  | "all"
  | "frontend"
  | "backend"
  | "tools"
  | "database"
  | "mobile"
  | "programming";

export const CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "tools", label: "Tools" },
  { id: "database", label: "Database" },
  { id: "mobile", label: "Mobile" },
  { id: "programming", label: "Programming" },
];

// Exactly 21 technologies with their authentic data & icons:
export const SKILLS_LIST: SkillItem[] = [
  {
    id: "typescript",
    name: "TypeScript",
    category: "Programming",
    tags: ["programming", "frontend"],
    icon: TypeScriptIcon,
    bgTint: "bg-blue-50/90 border-blue-100",
    badgeStyle: "bg-[#fff7ed] text-[#c2410c] border-[#ffedd5]",
  },
  {
    id: "python",
    name: "Python",
    category: "Programming",
    tags: ["programming", "backend"],
    icon: PythonIcon,
    bgTint: "bg-amber-50/80 border-amber-100",
    badgeStyle: "bg-[#fff7ed] text-[#c2410c] border-[#ffedd5]",
  },
  {
    id: "react",
    name: "React.js",
    category: "Frontend",
    tags: ["frontend"],
    icon: ReactIcon,
    bgTint: "bg-cyan-50/90 border-cyan-100",
    badgeStyle: "bg-cyan-50 text-cyan-600 border-cyan-200/70",
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Web Development",
    tags: ["frontend", "backend"],
    icon: NextJsIcon,
    bgTint: "bg-zinc-100/90 border-zinc-200/80",
    badgeStyle: "bg-zinc-100 text-zinc-700 border-zinc-200/80",
  },
  {
    id: "flutter",
    name: "Flutter",
    category: "Mobile Development",
    tags: ["mobile", "frontend"],
    icon: FlutterIcon,
    bgTint: "bg-sky-50 border-sky-100",
    badgeStyle: "bg-sky-50 text-sky-600 border-sky-200/80",
  },
  {
    id: "fastapi",
    name: "FastAPI",
    category: "Backend",
    tags: ["backend"],
    icon: FastApiIcon,
    bgTint: "bg-emerald-50 border-emerald-100",
    badgeStyle: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "Backend",
    tags: ["backend", "database"],
    icon: FirebaseIcon,
    bgTint: "bg-amber-50 border-amber-100",
    badgeStyle: "bg-[#fff7ed] text-[#c2410c] border-[#ffedd5]",
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "Database",
    tags: ["database"],
    icon: MysqlIcon,
    bgTint: "bg-sky-50 border-sky-100",
    badgeStyle: "bg-sky-50 text-sky-600 border-sky-200/80",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Database",
    tags: ["database"],
    icon: PostgreSqlIcon,
    bgTint: "bg-blue-50/80 border-blue-100",
    badgeStyle: "bg-sky-50 text-sky-600 border-sky-200/80",
  },
  {
    id: "dart",
    name: "Dart",
    category: "Programming",
    tags: ["programming", "mobile"],
    icon: DartIcon,
    bgTint: "bg-sky-50 border-sky-100",
    badgeStyle: "bg-[#fff7ed] text-[#c2410c] border-[#ffedd5]",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Programming",
    tags: ["programming", "frontend"],
    icon: JavaScriptIcon,
    bgTint: "bg-amber-50 border-amber-100",
    badgeStyle: "bg-[#fff7ed] text-[#c2410c] border-[#ffedd5]",
  },
  {
    id: "supabase",
    name: "Supabase",
    category: "Backend",
    tags: ["backend", "database"],
    icon: SupabaseIcon,
    bgTint: "bg-emerald-50 border-emerald-100",
    badgeStyle: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
  },
  {
    id: "restapi",
    name: "REST APIs",
    category: "Web Development",
    tags: ["backend", "frontend"],
    icon: RestApiIcon,
    bgTint: "bg-orange-50 border-orange-100",
    badgeStyle: "bg-zinc-100 text-zinc-700 border-zinc-200/80",
  },
  {
    id: "graphql",
    name: "GraphQL",
    category: "Web Development",
    tags: ["backend", "frontend"],
    icon: GraphqlIcon,
    bgTint: "bg-pink-50 border-pink-100",
    badgeStyle: "bg-zinc-100 text-zinc-700 border-zinc-200/80",
  },
  {
    id: "jwt",
    name: "JWT Auth",
    category: "Backend",
    tags: ["backend"],
    icon: JwtIcon,
    bgTint: "bg-purple-50 border-purple-100",
    badgeStyle: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
  },
  {
    id: "sql",
    name: "SQL",
    category: "Database",
    tags: ["database", "programming"],
    icon: SqlIcon,
    bgTint: "bg-sky-50 border-sky-100",
    badgeStyle: "bg-sky-50 text-sky-600 border-sky-200/80",
  },
  {
    id: "html",
    name: "HTML5",
    category: "Frontend",
    tags: ["frontend"],
    icon: HtmlIcon,
    bgTint: "bg-orange-50 border-orange-100",
    badgeStyle: "bg-cyan-50 text-cyan-600 border-cyan-200/70",
  },
  {
    id: "css",
    name: "CSS3",
    category: "Frontend",
    tags: ["frontend"],
    icon: CssIcon,
    bgTint: "bg-blue-50 border-blue-100",
    badgeStyle: "bg-cyan-50 text-cyan-600 border-cyan-200/70",
  },
  {
    id: "git",
    name: "Git",
    category: "Tools",
    tags: ["tools"],
    icon: GitIcon,
    bgTint: "bg-orange-50 border-orange-100",
    badgeStyle: "bg-violet-50 text-violet-600 border-violet-200/70",
  },
  {
    id: "github",
    name: "GitHub",
    category: "Tools",
    tags: ["tools"],
    icon: GithubIcon,
    bgTint: "bg-zinc-100 border-zinc-200/80",
    badgeStyle: "bg-violet-50 text-violet-600 border-violet-200/70",
  },
  {
    id: "postman",
    name: "Postman",
    category: "Tools",
    tags: ["tools"],
    icon: PostmanIcon,
    bgTint: "bg-orange-50 border-orange-100",
    badgeStyle: "bg-violet-50 text-violet-600 border-violet-200/70",
  },
];

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [activeIndex, setActiveIndex] = useState(4); // Default to Flutter
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastWheelTime = useRef<number>(0);
  const touchStartX = useRef<number | null>(null);

  const filteredSkills = useMemo(() => {
    if (activeCategory === "all") return SKILLS_LIST;
    return SKILLS_LIST.filter(
      (skill) =>
        skill.tags?.includes(activeCategory) ||
        skill.category.toLowerCase().includes(activeCategory)
    );
  }, [activeCategory]);

  // Split filteredSkills into 2 rows for phone view continuous marquee
  const { repeatedRow1, repeatedRow2 } = useMemo(() => {
    const list = filteredSkills.length > 0 ? filteredSkills : SKILLS_LIST;
    const half = Math.ceil(list.length / 2);
    const r1 = list.slice(0, half);
    const r2 = list.slice(half);

    const base1 = r1.length > 0 ? r1 : list;
    const base2 = r2.length > 0 ? r2 : list;

    return {
      repeatedRow1: [...base1, ...base1, ...base1, ...base1],
      repeatedRow2: [...base2, ...base2, ...base2, ...base2],
    };
  }, [filteredSkills]);

  const totalSkills = filteredSkills.length;

  const handlePrev = useCallback(() => {
    if (totalSkills <= 1) return;
    setActiveIndex((prev) => (prev - 1 + totalSkills) % totalSkills);
  }, [totalSkills]);

  const handleNext = useCallback(() => {
    if (totalSkills <= 1) return;
    setActiveIndex((prev) => (prev + 1) % totalSkills);
  }, [totalSkills]);

  // 1. AUTO GLIDE: Automatically glides through the cards
  useEffect(() => {
    if (isHovered || shouldReduceMotion || totalSkills <= 1) return;

    const interval = setInterval(() => {
      handleNext();
    }, 1600);

    return () => clearInterval(interval);
  }, [isHovered, shouldReduceMotion, totalSkills, handleNext]);

  // 2. MANUAL WHEEL SCROLL: Handles horizontal scrolling smoothly without hijacking natural vertical page scrolling
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (e: WheelEvent) => {
      // Allow category filter bar to scroll horizontally on its own
      const target = e.target as HTMLElement | null;
      if (target?.closest?.("[data-category-bar]")) {
        return;
      }

      const absX = Math.abs(e.deltaX);
      const absY = Math.abs(e.deltaY);

      // Distinguish horizontal gesture (trackpad swipe, tilt wheel, Shift+wheel) from vertical scroll
      const isHorizontal = absX > absY || (e.shiftKey && absY > 0);

      // If user is scrolling vertically, NEVER hijack or prevent default:
      // let natural vertical page scrolling work completely unhindered
      if (!isHorizontal) {
        return;
      }

      // User is scrolling horizontally: prevent default so the page doesn't scroll vertically or bounce
      e.preventDefault();

      const hDelta = e.shiftKey && absX === 0 ? e.deltaY : e.deltaX;
      if (Math.abs(hDelta) < 12) return;

      const now = Date.now();
      if (now - lastWheelTime.current < 180) return;
      lastWheelTime.current = now;

      if (hDelta > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    };

    section.addEventListener("wheel", handleWheel, { passive: false });
    return () => section.removeEventListener("wheel", handleWheel);
  }, [handleNext, handlePrev]);

  // 3. TOUCH SWIPE FOR MOBILE
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsHovered(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX.current;

    if (Math.abs(diff) > 35) {
      if (diff > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    touchStartX.current = null;
    setIsHovered(false);
  };

  // 4. KEYBOARD NAVIGATION: Only active when Skills section is in viewport
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      if (
        activeEl &&
        (activeEl.tagName === "INPUT" ||
          activeEl.tagName === "TEXTAREA" ||
          activeEl.getAttribute("contenteditable") === "true")
      ) {
        return;
      }

      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        const section = sectionRef.current;
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        if (!isInView) return;

        e.preventDefault();
        if (e.key === "ArrowLeft") {
          handlePrev();
        } else {
          handleNext();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  // Shortest cyclic distance calculation so cards physically travel around carousel
  const getOffset = (index: number) => {
    if (totalSkills <= 1) return 0;
    const currentActive = activeIndex % totalSkills;
    let diff = index - currentActive;
    while (diff > totalSkills / 2) diff -= totalSkills;
    while (diff < -totalSkills / 2) diff += totalSkills;
    return diff;
  };

  const getCategoryCount = (catId: CategoryId) => {
    if (catId === "all") return SKILLS_LIST.length;
    return SKILLS_LIST.filter(
      (s) => s.tags?.includes(catId) || s.category.toLowerCase().includes(catId)
    ).length;
  };

  // Dynamically calculate mobile layout based on screen and container size
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const [mobileMetrics, setMobileMetrics] = useState<{
    width: number;
    height: number;
  }>({
    width: typeof window !== "undefined" ? window.innerWidth : 390,
    height: typeof window !== "undefined" ? window.innerHeight - 200 : 400,
  });

  useEffect(() => {
    const el = mobileContainerRef.current;
    const updateMetrics = () => {
      if (el) {
        const rect = el.getBoundingClientRect();
        setMobileMetrics({
          width: rect.width || window.innerWidth,
          height: rect.height || (window.innerHeight - 190),
        });
      } else {
        setMobileMetrics({
          width: window.innerWidth,
          height: window.innerHeight - 190,
        });
      }
    };

    updateMetrics();

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && el) {
      ro = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const { width, height } = entry.contentRect;
          if (width > 0 && height > 0) {
            setMobileMetrics({ width, height });
          }
        }
      });
      ro.observe(el);
    }

    window.addEventListener("resize", updateMetrics);
    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", updateMetrics);
    };
  }, []);

  // Columns calculated based on screen width
  const mobileCols = useMemo(() => {
    if (mobileMetrics.width >= 560) return 4;
    if (mobileMetrics.width >= 410) return 3;
    return 2;
  }, [mobileMetrics.width]);

  // Card height for static category grid calculated to occupy available vertical space
  const gridCardHeight = useMemo(() => {
    const availH = mobileMetrics.height || 360;
    const rowCount = Math.ceil(filteredSkills.length / mobileCols);
    if (rowCount <= 1) {
      return Math.min(160, Math.max(125, Math.round(availH * 0.42)));
    }
    if (rowCount === 2) {
      return Math.min(150, Math.max(115, Math.round((availH - 24) / 2.2)));
    }
    return Math.min(130, Math.max(98, Math.round((availH - 28) / 2.85)));
  }, [mobileMetrics.height, filteredSkills.length, mobileCols]);

  // Card size for continuous marquee calculated based on available height
  const { marqueeCardHeight, marqueeCardWidth } = useMemo(() => {
    const availH = mobileMetrics.height || 360;
    const h = Math.min(142, Math.max(106, Math.floor((availH - 36) / 2.15)));
    const w = Math.round(h * 1.16);
    return { marqueeCardHeight: h, marqueeCardWidth: w };
  }, [mobileMetrics.height]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full bg-[#faf7f2] h-[calc(100dvh-72px)] sm:h-[calc(100vh-72px)] min-h-[460px] max-h-[100dvh] py-2 sm:py-3 px-3 sm:px-8 md:px-12 lg:px-16 overflow-hidden scroll-mt-[72px] font-sans select-none flex flex-col justify-between items-center touch-pan-y overscroll-x-contain"
    >
      {/* Background Soft Radiant Warm Glow */}
      <div className="absolute inset-0 pointer-events-none select-none bg-[radial-gradient(circle_at_50%_40%,rgba(255,241,230,0.65),transparent_65%)]" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col items-center justify-between h-full my-auto">

        {/* 1. EDITORIAL HEADER SECTION */}
        <div className="relative w-full flex flex-col items-center text-center max-w-5xl shrink-0 pt-0.5">
          {/* Eyebrow */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: LUXURY_EASE }}
            className="mb-1"
          >
            <span className="text-[10.5px] sm:text-[11.5px] font-extrabold uppercase tracking-[0.22em] text-[#ea580c] font-sans">
              MY SKILLS
            </span>
          </motion.div>

          {/* Heading with Deep Forest-Dark & Vivid Orange Accent */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.05, ease: LUXURY_EASE }}
            className="flex items-center justify-center relative w-full mb-1 sm:mb-1.5"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-serif font-bold text-[#12221b] tracking-tight leading-[1.12]">
              Technologies & <span className="text-[#ea580c]">Tools</span>
            </h2>

            {/* "21 Skills" Pill Badge matching reference */}
            <div className="hidden sm:inline-flex absolute right-0 top-1/2 -translate-y-1/2 items-center px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#fff7ed] border border-[#ffedd5] text-[#ea580c] text-[11px] sm:text-xs font-bold shadow-xs">
              21 Skills
            </div>
          </motion.div>

          {/* Mobile "21 Skills" Pill Badge */}
          <div className="inline-flex sm:hidden items-center px-2.5 py-0.5 mb-1 rounded-full bg-[#fff7ed] border border-[#ffedd5] text-[#ea580c] text-[10px] font-bold shadow-xs">
            21 Skills
          </div>

          {/* Subtitle - slightly spaced down */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.1, ease: LUXURY_EASE }}
            className="text-xs sm:text-[13px] text-zinc-600 font-sans leading-snug max-w-lg mx-auto mt-1.5 sm:mt-2.5 mb-3 sm:mb-3.5"
          >
            The tools and technologies I use to build modern, scalable and impactful solutions.
          </motion.p>

          {/* Category Filter Buttons ("tools, frontend like that") - ALWAYS IN SAME LINE with slightly increased size */}
          <div
            data-category-bar="true"
            className="w-full flex items-center justify-start sm:justify-center flex-nowrap gap-2 sm:gap-2.5 md:gap-3 overflow-x-auto no-scrollbar py-1 px-4 sm:px-1"
          >
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              const count = getCategoryCount(cat.id);
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setActiveIndex(0);
                  }}
                  className={`px-3.5 sm:px-4 md:px-4.5 py-1.5 sm:py-2 rounded-full text-[12.5px] sm:text-[13.5px] font-semibold transition-all duration-200 cursor-pointer border flex items-center gap-2 shrink-0 whitespace-nowrap ${
                    isSelected
                      ? "bg-[#163327] text-white border-[#163327] shadow-[0_2px_10px_rgba(22,51,39,0.25)] scale-[1.02]"
                      : "bg-white text-zinc-700 hover:text-zinc-950 border-zinc-200/90 hover:border-zinc-300 shadow-2xs hover:bg-zinc-50/70"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[11px] sm:text-xs px-2 py-0.5 rounded-full font-bold ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-zinc-100 text-zinc-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. DESKTOP & TABLET: 3D COVERFLOW CAROUSEL */}
        <div
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="hidden sm:flex relative w-full max-w-5xl h-[230px] sm:h-[250px] md:h-[275px] items-center justify-center my-auto cursor-grab active:cursor-grabbing"
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
            overscrollBehaviorX: "contain",
            touchAction: "pan-y",
          }}
        >
          {filteredSkills.map((skill, idx) => {
            const offset = getOffset(idx);
            const absOffset = Math.abs(offset);
            const isCenter = offset === 0;

            let x = 0;
            let rotateY = 0;
            let scale = 1;
            let zIndex = 30 - absOffset * 6;
            let opacity = 1;

            if (offset === 0) {
              x = 0;
              rotateY = 0;
              scale = 1.08;
              zIndex = 35;
              opacity = 1;
            } else if (offset === -1) {
              x = -130;
              rotateY = 22;
              scale = 0.94;
              opacity = 0.96;
            } else if (offset === 1) {
              x = 130;
              rotateY = -22;
              scale = 0.94;
              opacity = 0.96;
            } else if (offset === -2) {
              x = -245;
              rotateY = 28;
              scale = 0.85;
              opacity = 0.9;
            } else if (offset === 2) {
              x = 245;
              rotateY = -28;
              scale = 0.85;
              opacity = 0.9;
            } else if (offset === -3) {
              x = -350;
              rotateY = 34;
              scale = 0.77;
              opacity = 0.82;
            } else if (offset === 3) {
              x = 350;
              rotateY = -34;
              scale = 0.77;
              opacity = 0.82;
            } else if (offset === -4) {
              x = -445;
              rotateY = 38;
              scale = 0.69;
              opacity = 0.65;
            } else if (offset === 4) {
              x = 445;
              rotateY = -38;
              scale = 0.69;
              opacity = 0.65;
            } else {
              x = offset > 0 ? 560 : -560;
              rotateY = offset > 0 ? -42 : 42;
              scale = 0.58;
              zIndex = 0;
              opacity = 0;
            }

            const IconComponent = skill.icon;

            return (
              <motion.div
                key={skill.id}
                onClick={() => {
                  setActiveIndex(idx);
                  setIsHovered(true);
                  setTimeout(() => setIsHovered(false), 2000);
                }}
                initial={false}
                animate={{
                  x,
                  scale,
                  rotateY,
                  opacity,
                  zIndex,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0.2 : 0.45,
                  ease: LUXURY_EASE,
                }}
                className={`absolute w-[150px] h-[210px] sm:w-[175px] sm:h-[235px] md:w-[195px] md:h-[255px] rounded-3xl p-3 sm:p-3.5 md:p-4 flex flex-col items-center justify-between cursor-pointer select-none transition-[border-color,box-shadow] duration-300 ${
                  isCenter
                    ? "bg-white border-2 border-orange-400 shadow-[0_14px_36px_rgba(234,88,12,0.22),0_4px_16px_rgba(0,0,0,0.04)] ring-4 ring-orange-500/10 pointer-events-auto"
                    : absOffset <= 4
                    ? "bg-white/95 border border-zinc-200/90 shadow-[0_6px_20px_rgba(0,0,0,0.05),0_2px_6px_rgba(0,0,0,0.03)] hover:border-zinc-300 pointer-events-auto"
                    : "pointer-events-none opacity-0"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  willChange: "transform, opacity",
                }}
              >
                {/* Top: Centered Technology Icon in Rounded Tint Container */}
                <div className="w-full flex flex-col items-center pt-1">
                  <div
                    className={`rounded-full flex items-center justify-center transition-all duration-300 ${skill.bgTint} ${
                      isCenter
                        ? "w-15 h-15 sm:w-18 sm:h-18 shadow-xs"
                        : "w-13 h-13 sm:w-15 sm:h-15"
                    }`}
                  >
                    <IconComponent
                      className={
                        isCenter
                          ? "w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-300"
                          : "w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300"
                      }
                    />
                  </div>
                </div>

                {/* Middle: Technology Name */}
                <h3
                  className={`font-bold font-sans text-center tracking-tight text-[#12221b] transition-all duration-300 ${
                    isCenter
                      ? "text-base sm:text-lg md:text-xl"
                      : "text-sm sm:text-base text-zinc-800"
                  }`}
                >
                  {skill.name}
                </h3>

                {/* Bottom: Category Pill Label */}
                <div className="w-full flex justify-center pb-0.5">
                  <span
                    className={`inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-semibold border transition-all duration-300 text-center truncate max-w-full ${skill.badgeStyle}`}
                  >
                    {skill.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 3. PHONE VIEW: Dynamically calculates layout and card sizing based on available screen space */}
        <div
          ref={mobileContainerRef}
          className="flex sm:hidden flex-col flex-1 min-h-0 w-full justify-center items-center py-1 sm:py-2 overflow-hidden"
        >
          {activeCategory === "all" ? (
            /* All Skills: 2-LINE CONTINUOUS SLOW MOTION MARQUEE */
            <div className="flex flex-col justify-center gap-3 sm:gap-4 w-full h-full overflow-hidden py-1 relative">
              {/* Subtle edge fades for luxury smooth appearance */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-r from-[#faf7f2] to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-l from-[#faf7f2] to-transparent z-10" />

              {/* Line 1: Right to Left continuously with slow motion */}
              <div className="w-full overflow-hidden flex">
                <motion.div
                  animate={shouldReduceMotion ? undefined : { x: ["0%", "-50%"] }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 28,
                      ease: "linear",
                    },
                  }}
                  className="flex items-center gap-2.5 sm:gap-3 w-max will-change-transform"
                >
                  {repeatedRow1.map((skill, idx) => {
                    const IconComponent = skill.icon;
                    return (
                      <div
                        key={`r1-${skill.id}-${idx}`}
                        style={{
                          width: `${marqueeCardWidth}px`,
                          height: `${marqueeCardHeight}px`,
                        }}
                        className="bg-white rounded-2xl border border-zinc-200/90 shadow-[0_3px_10px_rgba(0,0,0,0.04)] p-2.5 flex flex-col items-center justify-between text-center select-none shrink-0"
                      >
                        <div
                          className={`w-9 h-9 min-[380px]:w-10 min-[380px]:h-10 rounded-full flex items-center justify-center shrink-0 ${skill.bgTint}`}
                        >
                          <IconComponent className="w-5 h-5 min-[380px]:w-5.5 min-[380px]:h-5.5" />
                        </div>
                        <h3 className="font-bold text-[11.5px] min-[380px]:text-xs text-[#12221b] tracking-tight truncate max-w-full">
                          {skill.name}
                        </h3>
                        <span
                          className={`inline-block px-2 py-0.5 rounded-full text-[9px] min-[380px]:text-[9.5px] font-semibold border truncate max-w-full ${skill.badgeStyle}`}
                        >
                          {skill.category}
                        </span>
                      </div>
                    );
                  })}
                </motion.div>
              </div>

              {/* Line 2: Left to Right continuously with slow motion */}
              <div className="w-full overflow-hidden flex">
                <motion.div
                  animate={shouldReduceMotion ? undefined : { x: ["-50%", "0%"] }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 28,
                      ease: "linear",
                    },
                  }}
                  className="flex items-center gap-2.5 sm:gap-3 w-max will-change-transform"
                >
                  {repeatedRow2.map((skill, idx) => {
                    const IconComponent = skill.icon;
                    return (
                      <div
                        key={`r2-${skill.id}-${idx}`}
                        style={{
                          width: `${marqueeCardWidth}px`,
                          height: `${marqueeCardHeight}px`,
                        }}
                        className="bg-white rounded-2xl border border-zinc-200/90 shadow-[0_3px_10px_rgba(0,0,0,0.04)] p-2.5 flex flex-col items-center justify-between text-center select-none shrink-0"
                      >
                        <div
                          className={`w-9 h-9 min-[380px]:w-10 min-[380px]:h-10 rounded-full flex items-center justify-center shrink-0 ${skill.bgTint}`}
                        >
                          <IconComponent className="w-5 h-5 min-[380px]:w-5.5 min-[380px]:h-5.5" />
                        </div>
                        <h3 className="font-bold text-[11.5px] min-[380px]:text-xs text-[#12221b] tracking-tight truncate max-w-full">
                          {skill.name}
                        </h3>
                        <span
                          className={`inline-block px-2 py-0.5 rounded-full text-[9px] min-[380px]:text-[9.5px] font-semibold border truncate max-w-full ${skill.badgeStyle}`}
                        >
                          {skill.category}
                        </span>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          ) : (
            /* Other categories: DYNAMIC STATIC GRID OCCUPYING FULL AVAILABLE SPACE */
            <div className="w-full h-full flex-1 min-h-0 overflow-y-auto no-scrollbar px-3 py-1 flex flex-col">
              <motion.div
                key={activeCategory}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: LUXURY_EASE }}
                style={{
                  gridTemplateColumns: `repeat(${mobileCols}, minmax(0, 1fr))`,
                }}
                className="grid gap-2.5 sm:gap-3 w-full max-w-lg mx-auto my-auto"
              >
                {filteredSkills.map((skill, idx) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skill.id}
                      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.93 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.28,
                        delay: idx * 0.04,
                        ease: LUXURY_EASE,
                      }}
                      style={{
                        minHeight: `${gridCardHeight}px`,
                      }}
                      className="w-full bg-white rounded-2xl border border-zinc-200/90 shadow-[0_3px_12px_rgba(0,0,0,0.04)] p-2.5 flex flex-col items-center justify-between text-center select-none"
                    >
                      <div
                        className={`w-9.5 h-9.5 min-[380px]:w-10 min-[380px]:h-10 rounded-full flex items-center justify-center shrink-0 mb-1 ${skill.bgTint}`}
                      >
                        <IconComponent className="w-5 h-5 min-[380px]:w-5.5 min-[380px]:h-5.5" />
                      </div>
                      <h3 className="font-bold text-xs min-[380px]:text-[13px] text-[#12221b] tracking-tight truncate max-w-full">
                        {skill.name}
                      </h3>
                      <span
                        className={`inline-block px-2 min-[380px]:px-2.5 py-0.5 rounded-full text-[9px] min-[380px]:text-[9.5px] font-semibold border truncate max-w-full mt-1 ${skill.badgeStyle}`}
                      >
                        {skill.category}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
