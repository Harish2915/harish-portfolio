"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Home,
  User,
  Code2,
  Folder,
  Briefcase,
  GraduationCap,
  Mail,
} from "lucide-react";

const LUXURY_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface NavItem {
  name: string;
  href: string;
  id: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/home", id: "home", icon: Home },
  { name: "About", href: "/about", id: "about", icon: User },
  { name: "Skills", href: "/skills", id: "skills", icon: Code2 },
  { name: "Projects", href: "/projects", id: "projects", icon: Folder },
  { name: "Experience", href: "/experience", id: "experience", icon: Briefcase },
  { name: "Education", href: "/education", id: "education", icon: GraduationCap },
  { name: "Contact", href: "/contact", id: "contact", icon: Mail },
];

const getNavByPath = (pathname: string): NavItem => {
  const clean = pathname.replace(/^\/+|\/+$/g, "").toLowerCase();
  if (!clean || clean === "home") return navItems[0];
  const found = navItems.find(
    (item) => item.id.toLowerCase() === clean || item.href.replace(/^\/+/, "").toLowerCase() === clean
  );
  return found || navItems[0];
};

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");
  const activeItemRef = useRef("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Track programmatically triggered scrolling to prevent observer interference
  const isProgrammaticScroll = useRef(false);
  const programmaticTargetId = useRef<string | null>(null);
  const programmaticTargetName = useRef<string | null>(null);
  const scrollEndTimeout = useRef<NodeJS.Timeout | null>(null);

  // Helper to update activeItem only when it actually changes
  const setActive = (name: string) => {
    if (activeItemRef.current !== name) {
      activeItemRef.current = name;
      setActiveItem(name);
    }
  };

  // Smooth scroll and SPA navigation handler
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem
  ) => {
    e.preventDefault();

    // 1. Immediately set active navbar item - Single source of truth
    setActive(item.name);

    // 2. Lock programmatic scroll and record destination
    isProgrammaticScroll.current = true;
    programmaticTargetId.current = item.id;
    programmaticTargetName.current = item.name;

    // 3. Update URL to clean section path without reloading
    window.history.pushState(null, "", item.href);

    // 4. Smoothly scroll to the target section with exact fixed navbar clearance
    const element = document.getElementById(item.id);
    if (element) {
      const headerEl = document.querySelector("header");
      const navOffset = headerEl ? headerEl.getBoundingClientRect().height : 72;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: item.id === "home" ? 0 : Math.max(0, elementTop - navOffset),
        behavior: "smooth",
      });
    }

    // 5. Clear pending unlock timer and establish initial safety window
    if (scrollEndTimeout.current) clearTimeout(scrollEndTimeout.current);
    scrollEndTimeout.current = setTimeout(() => {
      isProgrammaticScroll.current = false;
      programmaticTargetId.current = null;
      programmaticTargetName.current = null;
    }, 1200);

    // Close mobile menu if open
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    // 1. On initial page load / refresh:
    // - Prevent browser native scroll restoration to previous section
    // - Remove any legacy hash
    // - Detect active section from clean URL pathname
    // - Synchronize active navbar item & scroll corresponding section into view
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    const initialItem = getNavByPath(window.location.pathname);
    setActive(initialItem.name);

    if (initialItem.id === "home") {
      window.scrollTo(0, 0);
      const homeEl = document.getElementById("home");
      if (homeEl) {
        homeEl.scrollIntoView({ behavior: "instant", block: "start" });
      }
    } else {
      isProgrammaticScroll.current = true;
      programmaticTargetId.current = initialItem.id;
      programmaticTargetName.current = initialItem.name;

      const scrollToTarget = () => {
        const el = document.getElementById(initialItem.id);
        if (el) {
          const headerEl = document.querySelector("header");
          const navOffset = headerEl ? headerEl.getBoundingClientRect().height : 72;
          const elementTop = el.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: Math.max(0, elementTop - navOffset),
            behavior: "instant",
          });
        }
      };

      scrollToTarget();
      requestAnimationFrame(scrollToTarget);

      if (scrollEndTimeout.current) clearTimeout(scrollEndTimeout.current);
      scrollEndTimeout.current = setTimeout(() => {
        isProgrammaticScroll.current = false;
        programmaticTargetId.current = null;
        programmaticTargetName.current = null;
      }, 500);
    }

    // Deterministic single source of truth active section evaluator
    const computeActiveSection = () => {
      if (isProgrammaticScroll.current) {
        return;
      }

      const scrollY = window.scrollY;

      // At the absolute top of the page, Home is always active
      if (scrollY < 60) {
        setActive("Home");
        if (window.location.pathname !== "/home" && window.location.pathname !== "/") {
          window.history.replaceState(null, "", "/home");
        }
        return;
      }

      // Collect sections that actually exist in the DOM in order
      const domSections: { name: string; id: string; rect: DOMRect }[] = [];
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          domSections.push({
            name: item.name,
            id: item.id,
            rect: el.getBoundingClientRect(),
          });
        }
      }

      if (domSections.length === 0) return;

      // If scrolled to the bottom of the page, activate the last DOM section
      const isAtBottom =
        window.innerHeight + scrollY >= document.documentElement.scrollHeight - 50;
      if (isAtBottom) {
        const lastSec = domSections[domSections.length - 1];
        setActive(lastSec.name);
        const lastNav = navItems.find((it) => it.name === lastSec.name);
        if (lastNav && window.location.pathname !== lastNav.href) {
          window.history.replaceState(null, "", lastNav.href);
        }
        return;
      }

      // Single active detection line: 120px from viewport top (below fixed ~72px navbar)
      const detectionLine = 120;

      let currentActive: string | null = null;

      // Find the section currently spanning across the detection line
      for (const sec of domSections) {
        if (sec.rect.top <= detectionLine && sec.rect.bottom > detectionLine) {
          currentActive = sec.name;
          break;
        }
      }

      // Fallback: if detection line falls in gap between sections, pick closest preceding section
      if (!currentActive) {
        let bestDistance = Infinity;
        for (const sec of domSections) {
          if (sec.rect.top <= detectionLine) {
            const dist = detectionLine - sec.rect.top;
            if (dist < bestDistance) {
              bestDistance = dist;
              currentActive = sec.name;
            }
          }
        }
      }

      if (currentActive) {
        setActive(currentActive);
        const activeNav = navItems.find((it) => it.name === currentActive);
        if (activeNav && window.location.pathname !== activeNav.href) {
          window.history.replaceState(null, "", activeNav.href);
        }
      }
    };

    // 2. Handle browser Back/Forward (popstate)
    const handlePopState = () => {
      const matched = getNavByPath(window.location.pathname);

      setActive(matched.name);
      isProgrammaticScroll.current = true;
      programmaticTargetId.current = matched.id;
      programmaticTargetName.current = matched.name;

      if (matched.id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(matched.id);
        if (element) {
          const headerEl = document.querySelector("header");
          const navOffset = headerEl ? headerEl.getBoundingClientRect().height : 72;
          const elementTop = element.getBoundingClientRect().top + window.scrollY;

          window.scrollTo({
            top: Math.max(0, elementTop - navOffset),
            behavior: "smooth",
          });
        }
      }

      if (scrollEndTimeout.current) clearTimeout(scrollEndTimeout.current);
      scrollEndTimeout.current = setTimeout(() => {
        isProgrammaticScroll.current = false;
        programmaticTargetId.current = null;
        programmaticTargetName.current = null;
      }, 1200);
    };

    window.addEventListener("popstate", handlePopState);

    // Custom navigation handler for buttons across the portfolio (e.g. "View My Work")
    const handlePortfolioNavigate = (e: Event) => {
      const customEvent = e as CustomEvent<{ id: string; href: string }>;
      const { id, href } = customEvent.detail || {};
      const targetItem =
        navItems.find((it) => it.id === id || it.href === href) ||
        getNavByPath(href || id);

      if (targetItem) {
        setActive(targetItem.name);
        isProgrammaticScroll.current = true;
        programmaticTargetId.current = targetItem.id;
        programmaticTargetName.current = targetItem.name;

        if (scrollEndTimeout.current) clearTimeout(scrollEndTimeout.current);
        scrollEndTimeout.current = setTimeout(() => {
          isProgrammaticScroll.current = false;
          programmaticTargetId.current = null;
          programmaticTargetName.current = null;
        }, 1200);
      }
    };

    window.addEventListener("portfolio-navigate", handlePortfolioNavigate as EventListener);

    // 3. User manual scroll interruption handler (wheel or touch drag)
    const handleUserInterrupt = () => {
      if (isProgrammaticScroll.current) {
        isProgrammaticScroll.current = false;
        programmaticTargetId.current = null;
        programmaticTargetName.current = null;
        if (scrollEndTimeout.current) {
          clearTimeout(scrollEndTimeout.current);
        }
      }
    };

    window.addEventListener("wheel", handleUserInterrupt, { passive: true });
    window.addEventListener("touchstart", handleUserInterrupt, { passive: true });

    // 4. Navbar scroll handler throttled with requestAnimationFrame for performance
    let rafId: number | null = null;
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // During programmatic smooth scrolling after a click, do NOT allow
      // computeActiveSection to temporarily overwrite the clicked activeItem!
      if (isProgrammaticScroll.current) {
        if (scrollEndTimeout.current) {
          clearTimeout(scrollEndTimeout.current);
        }
        scrollEndTimeout.current = setTimeout(() => {
          const targetName = programmaticTargetName.current;
          isProgrammaticScroll.current = false;
          programmaticTargetId.current = null;
          programmaticTargetName.current = null;
          if (targetName) {
            setActive(targetName);
          } else {
            computeActiveSection();
          }
        }, 150);
        return;
      }

      if (rafId === null) {
        rafId = window.requestAnimationFrame(() => {
          rafId = null;
          computeActiveSection();
        });
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("portfolio-navigate", handlePortfolioNavigate as EventListener);
      window.removeEventListener("wheel", handleUserInterrupt);
      window.removeEventListener("touchstart", handleUserInterrupt);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      if (scrollEndTimeout.current) {
        clearTimeout(scrollEndTimeout.current);
      }
    };
  }, []);

  const contactItem = navItems.find((item) => item.id === "contact") || navItems[navItems.length - 1];

  return (
    <motion.header
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : 0.5,
        ease: LUXURY_EASE,
      }}
      className={`fixed top-0 left-0 right-0 z-50 py-2.5 min-[360px]:py-3 sm:py-4 transition-[background-color,border-color,backdrop-filter,box-shadow] duration-200 ${scrolled || activeItem !== "Home"
        ? "bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.03),0_8px_20px_rgba(0,0,0,0.02)] border-b border-zinc-200/75"
        : "bg-transparent"
        }`}
    >
      <div className="w-full px-4 sm:px-12 md:px-16 lg:px-20 max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Brand Logo - Subtle entrance */}
        <motion.a
          href="/home"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            delay: shouldReduceMotion ? 0 : 0.08,
            ease: LUXURY_EASE,
          }}
          onClick={(e) => handleNavClick(e, navItems[0])}
          className="flex items-baseline group select-none cursor-pointer"
        >
          <span className="text-3xl font-extrabold tracking-tight text-zinc-950 font-sans">
            H
          </span>
          <span className="text-3xl font-black text-[#ea580c] leading-none transition-transform duration-300 group-hover:scale-125">
            .
          </span>
        </motion.a>

        {/* Desktop Navigation Links - In exact order with icons */}
        <nav className="hidden md:flex items-center space-x-3.5 lg:space-x-4 xl:space-x-5">
          {navItems.map((item, idx) => {
            const isActive = activeItem === item.name;
            const Icon = item.icon;
            return (
              <motion.a
                key={item.name}
                href={item.href}
                initial={
                  shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: shouldReduceMotion ? 0 : 0.12 + idx * 0.03,
                  ease: LUXURY_EASE,
                }}
                onClick={(e) => handleNavClick(e, item)}
                className={`relative py-1 flex items-center gap-1.5 text-xs lg:text-[13px] xl:text-sm font-medium transition-colors duration-200 cursor-pointer select-none ${isActive
                  ? "text-[#e45318] font-semibold"
                  : "text-zinc-700 hover:text-zinc-950"
                  }`}
              >
                <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-[#e45318]" : "text-zinc-500"}`} />
                <span>{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#e45318] rounded-full"
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.45,
                      ease: LUXURY_EASE,
                    }}
                  />
                )}
              </motion.a>
            );
          })}
        </nav>

        {/* Right Action Button ("Let's Talk →") on desktop / tablet & Mobile Menu Toggle */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            delay: shouldReduceMotion ? 0 : 0.12 + navItems.length * 0.03,
            ease: LUXURY_EASE,
          }}
          className="flex items-center space-x-3"
        >
          <motion.a
            href="/contact"
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: LUXURY_EASE }}
            onClick={(e) => handleNavClick(e, contactItem)}
            className="hidden sm:inline-flex relative items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium text-white transition-all duration-300 ease-out bg-[#163327] hover:bg-[#1c3d2f] border border-[#234b39] hover:border-[#2f614a] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_6px_18px_rgba(22,51,39,0.20)] hover:shadow-[0_3px_6px_rgba(0,0,0,0.05),0_12px_24px_rgba(22,51,39,0.28)] shrink-0 cursor-pointer"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
          </motion.a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full glass-pill text-zinc-800 hover:text-zinc-950 focus:outline-none transition-all duration-300 ease-out border border-zinc-200/80 hover:border-zinc-300 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_4px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.04),0_8px_16px_rgba(0,0,0,0.06)]"
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </motion.div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-16 left-4 right-4 p-4 bg-white/95 backdrop-blur-xl rounded-2xl border border-zinc-200/80 shadow-[0_2px_4px_rgba(0,0,0,0.03),0_16px_40px_rgba(0,0,0,0.08)] md:hidden flex flex-col space-y-2.5 z-50"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2.5 ${activeItem === item.name
                  ? "bg-orange-50 text-[#e45318] font-semibold"
                  : "text-zinc-700 hover:bg-zinc-100"
                  }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${activeItem === item.name ? "text-[#e45318]" : "text-zinc-500"}`} />
                <span>{item.name}</span>
              </a>
            );
          })}

          {/* Let's Talk CTA inside mobile dropdown */}
          <a
            href="/contact"
            onClick={(e) => handleNavClick(e, contactItem)}
            className="mt-2 inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#163327] hover:bg-[#1c3d2f] border border-[#234b39] hover:border-[#2f614a] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_6px_18px_rgba(22,51,39,0.20)] hover:shadow-[0_3px_6px_rgba(0,0,0,0.05),0_12px_24px_rgba(22,51,39,0.28)] transition-all duration-300 ease-out"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
