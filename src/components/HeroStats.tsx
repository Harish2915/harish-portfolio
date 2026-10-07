"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const STATS = [
  { value: "10+", label: "Projects" },
  { value: "5+", label: "Technologies" },
  { value: "1+", label: "Years Experience" },
  { value: "100%", label: "Passionate" },
];

export const HeroStats: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="inline-block w-full max-w-xl"
    >
      {/* Translucent Frosted Glass Card Container */}
      <div className="bg-white/75 backdrop-blur-md border border-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.06)] rounded-2xl sm:rounded-3xl p-4 sm:p-5">
        <div className="grid grid-cols-4 divide-x divide-gray-200/70">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center text-center px-1 sm:px-3 ${
                idx === 0 ? "pl-2" : ""
              } ${idx === STATS.length - 1 ? "pr-2" : ""}`}
            >
              <span className="font-sans text-xl sm:text-2xl md:text-[28px] font-bold tracking-tight text-[#101512] leading-tight">
                {stat.value}
              </span>
              <span className="text-[11px] sm:text-[12px] font-medium text-[#4B554F] mt-1 whitespace-nowrap">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies I work with */}
      <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-[#4B554F]">
        <span className="font-medium text-[#2C3831] text-[12.5px]">
          Technologies I work with:
        </span>
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Python", "AI"].map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 rounded-full bg-white/70 border border-gray-200/80 text-[11px] font-medium text-[#2C3831] backdrop-blur-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HeroStats;
