"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { navigateToSection } from "@/utils/navigation";

const LUXURY_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Social Icons SVGs matching reference styling
function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
    </svg>
  );
}

function MailFilledIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H3zm0 2h18v.53l-9 5.625-9-5.625V7zm0 2.89 8.47 5.293a1 1 0 0 0 1.06 0L21 9.89V17H3V9.89z" />
    </svg>
  );
}

function TwitterBirdIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// Hand-drawn Mountain Sketch SVG matching the reference design
function MountainSketch({ className = "w-16 h-8 sm:w-20 sm:h-9" }: { className?: string }) {
  return (
    <svg
      className={`${className} stroke-current select-none`}
      viewBox="0 0 100 42"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Center Main Peak */}
      <path d="M26 34 L50 8 L74 34" />
      <path d="M50 8 L48 24 L52 34" strokeWidth="1.2" />
      {/* Center Peak Rock Crevices */}
      <path d="M46 16 L42 20 M47 22 L43 25 M53 15 L57 19 M52 21 L57 25 M51 27 L55 30" strokeWidth="1" />

      {/* Left Peak */}
      <path d="M10 34 L28 18 L40 26" />
      <path d="M28 18 L31 24 M24 25 L27 29" strokeWidth="1" />

      {/* Right Peak */}
      <path d="M66 26 L78 19 L92 34" />
      <path d="M78 19 L76 25 M82 23 L85 27" strokeWidth="1" />
    </svg>
  );
}

const NAV_LINKS = [
  { name: "Home", href: "/home", id: "home" },
  { name: "About", href: "/about", id: "about" },
  { name: "Projects", href: "/projects", id: "projects" },
  { name: "Skills", href: "/skills", id: "skills" },
  { name: "Experience", href: "/experience", id: "experience" },
  { name: "Education", href: "/education", id: "education" },
  { name: "Contact", href: "/contact", id: "contact" },
];

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: GithubIcon,
    ariaLabel: "GitHub profile",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: LinkedinIcon,
    ariaLabel: "LinkedIn profile",
  },
  {
    name: "Email",
    href: "mailto:harish.developer.contact@gmail.com",
    icon: MailFilledIcon,
    ariaLabel: "Send Email",
  },
  {
    name: "Twitter / X",
    href: "https://twitter.com",
    icon: TwitterBirdIcon,
    ariaLabel: "Twitter profile",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: InstagramIcon,
    ariaLabel: "Instagram profile",
  },
];

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", "/home");
  };

  const handleNav = (id: string, href: string) => {
    navigateToSection(id, href);
  };

  return (
    <footer
      className="relative w-full overflow-hidden font-sans bg-[#faf7f2] bg-cover bg-center sm:bg-[center_bottom] bg-no-repeat py-12 sm:py-14 md:py-16 px-4 sm:px-8 md:px-12 select-none"
      style={{
        backgroundImage: "url('/footer.png')",
      }}
    >
      {/* Subtle soft cream radial glow in the center to maintain pristine text contrast */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 50% 45%, rgba(250, 247, 242, 0.4) 0%, rgba(250, 247, 242, 0) 75%)",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">

        {/* 1. CENTERED LOGO: "H." */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: LUXURY_EASE }}
          className="flex items-center justify-center mb-2 sm:mb-2.5"
        >
          <button
            type="button"
            onClick={handleScrollToTop}
            className="flex items-baseline justify-center cursor-pointer select-none group transition-transform duration-300 hover:scale-105"
            aria-label="Back to top"
          >
            <span className="text-4xl sm:text-5xl md:text-[50px] font-black tracking-tight text-[#12221b] font-sans leading-none">
              H
            </span>
            <span className="text-4xl sm:text-5xl md:text-[50px] font-black text-[#ea580c] leading-none ml-0.5 transition-transform duration-300 group-hover:scale-125">
              .
            </span>
          </button>
        </motion.div>

        {/* 2. TAGLINE: “Turning ideas into real-world digital solutions.” */}
        <motion.p
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.05, ease: LUXURY_EASE }}
          className="text-sm sm:text-base md:text-[17px] font-medium text-[#12221b] text-center font-sans tracking-tight leading-snug px-4 mb-4 sm:mb-5 max-w-xl"
        >
          Turning ideas into{" "}
          <span className="text-[#ea580c] font-semibold">real-world</span> digital solutions.
        </motion.p>

        {/* 3. CIRCULAR SOCIAL LINKS: GitHub, LinkedIn, Email, Twitter/X, Instagram */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.1, ease: LUXURY_EASE }}
          className="flex items-center justify-center gap-2.5 sm:gap-3.5 pb-8 sm:pb-16 md:pb-15 mb-2 sm:mb-3 flex-wrap"
        >
          {SOCIAL_LINKS.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={item.ariaLabel}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#f4efe8]/90 hover:bg-white border border-zinc-300/90 hover:border-zinc-400 shadow-[0_4px_14px_rgba(0,0,0,0.09),0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.14)] flex items-center justify-center text-[#163327] hover:text-[#ea580c] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <Icon className="w-4 h-4 sm:w-[17px] sm:h-[17px]" />
              </a>
            );
          })}
        </motion.div>

        {/* 6. BOTTOM INFORMATION ROW */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.25, ease: LUXURY_EASE }}
          className="w-full flex flex-row items-center justify-between gap-3 sm:gap-4 md:gap-6 text-center md:text-left"
        >
          {/* Left: Copyright */}
          <div className="order-1 flex items-center justify-start translate-x-0 translate-y-0 md:-translate-x-14 lg:-translate-x-20 xl:-translate-x-24 md:translate-y-5 md:self-end">
            <div className="inline-flex items-center px-3 sm:px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-[11px] sm:text-xs md:text-[13px] text-zinc-800 font-sans font-medium tracking-tight whitespace-nowrap">
              © 2026 <span className="font-bold text-[#163327] ml-1 mr-0.5">Harish.</span> All rights reserved.
            </div>
          </div>

          {/* Center: Hand-drawn Mountain Illustration & Tagline */}
          <div className="hidden md:flex order-2 flex-col items-center justify-center select-none pt-0 md:pt-8 md:-translate-x-16 lg:-translate-x-20 xl:-translate-x-24">
            <div className="hidden md:block w-16 h-8 sm:w-20 sm:h-9 text-[#163327]" />
            <div className="text-center font-sans leading-tight mt-0 md:mt-3">
              <span className="block text-[13px] sm:text-[15px] md:text-base font-semibold text-[#163327] tracking-tight">
                Turning Ideas
              </span>
              <span className="block text-[13px] sm:text-[15px] md:text-base font-bold text-[#ea580c] tracking-tight">
                Into Real Solutions.
              </span>
            </div>
          </div>

          {/* Right: Back to Top control */}
          <div className="order-3 flex items-center justify-end translate-x-0 translate-y-0 md:translate-x-20 lg:translate-x-28 xl:translate-x-36 md:translate-y-5 md:self-end">
            <button
              type="button"
              onClick={handleScrollToTop}
              aria-label="Back to top"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/95 hover:bg-white border border-zinc-300/90 hover:border-zinc-400 shadow-[0_6px_20px_rgba(0,0,0,0.10)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.16)] flex items-center justify-center text-[#ea580c] transition-all duration-200 hover:-translate-y-1 cursor-pointer group shrink-0"
            >
              <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 md:w-6.5 md:h-6.5 text-[#ea580c] transition-transform duration-200 group-hover:-translate-y-0.5 stroke-[2.4]" />
            </button>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
