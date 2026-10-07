"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

interface CTAButtonProps {
  id?: string;
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  iconType?: "arrow" | "download";
  className?: string;
  external?: boolean;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  id,
  href,
  children,
  variant = "primary",
  iconType = "arrow",
  className = "",
  external = false,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const isPrimary = variant === "primary";

  return (
    <motion.a
      id={id}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -2,
              transition: { duration: 0.2, ease: "easeOut" },
            }
      }
      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
      className={`group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-[14.5px] font-medium tracking-[0.01em] transition-all duration-300 ease-out focus:outline-none ${
        isPrimary
          ? "bg-[#F05A1A] hover:bg-[#D94E13] text-white shadow-[0_6px_20px_rgba(240,90,26,0.28)] hover:shadow-[0_8px_25px_rgba(240,90,26,0.38)]"
          : "bg-white/80 hover:bg-white text-[#0B2B20] border border-[#063B2D]/20 hover:border-[#063B2D]/40 backdrop-blur-md shadow-xs"
      } ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 flex items-center justify-center transition-transform duration-300 ease-out group-hover:translate-x-0.5">
        {iconType === "download" ? (
          <Download
            size={16}
            strokeWidth={2.2}
            className="text-[#0B2B20] group-hover:translate-y-0.5 transition-transform"
          />
        ) : (
          <ArrowRight
            size={16}
            strokeWidth={2.2}
            className={isPrimary ? "text-white" : "text-[#0B2B20]"}
          />
        )}
      </span>
    </motion.a>
  );
};

export default CTAButton;
