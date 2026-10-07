"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, X, ExternalLink } from "lucide-react";

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

const LUXURY_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  tags: string[];
  circleImage: string; // The "4" image for circular showcase & small circles
  modalImages: string[]; // The "1", "2", "3" images for detailed modal gallery
  duration?: string;
  githubUrl?: string;
  liveUrl?: string;
}

// 5 Real Projects mapped strictly as requested:
// 1. Kadhambari -> /projects/kadhambari4
// 2. Anvesha -> /projects/anvesha4
// 3. Crime Rate Prediction -> /projects/crime-rate-prediction4
// 4. Baby Name Finder -> /projects/baby-name-finder4
// 5. Student Management System -> /projects/student-management4
const PROJECTS: ProjectItem[] = [
  {
    id: "selavu",
    number: "01",
    title: "Selavu",
    category: "Trip Expense & Settlement Platform",

    description:
      "A modern group travel expense management platform built with Flutter and Supabase. Selavu helps travelers create trips, manage members, record shared expenses, split costs fairly, track payments, analyze spending, and complete trips through a structured settlement workflow with secure authentication and app-level biometric protection.",

    features: [
      "Complete trip management with members, dates, expenses, payments, and settlement tracking",
      "Flexible expense splitting with equal sharing and custom individual amounts",
      "Real-time settlement calculation showing who needs to pay whom and the remaining balance",
      "Trip analytics with category-wise, person-wise, and overall spending insights",
      "Supabase-powered cloud database with secure authentication and synchronized trip data",
      "Google Authentication for fast and secure user onboarding",
      "Biometric fingerprint and password-based app lock for additional local security",
      "Active and completed trip management with finalized read-only trip history",
      "Modern light, dark, and customizable theme experience",
      "Responsive premium mobile UI designed specifically for Android"
    ],

    tags: [
      "Flutter",
      "Dart",
      "Supabase",
      "PostgreSQL",
      "Google Auth",
      "Biometrics",
      "Provider",
      "Material 3"
    ],

    circleImage: "/projects/selavu1.png",

    modalImages: [
      "/projects/selavu2.png",
      "/projects/selavu3.png",
      "/projects/selavu4.png"
    ],

    duration: "2026"
  },
  {
    id: "anvesha",
    number: "02",
    title: "Anvesha",
    category: "Travel Booking & Experience Platform",

    description:
      "A full-stack travel platform that brings destinations, tour packages, hotels, flights, trains, buses, and curated travel experiences into one unified booking ecosystem. Anvesha combines flexible travel planning, dynamic package selection, independent service booking, and centralized administration into a seamless experience.",

    features: [
      "Complete travel planning with destinations, tour packages, transportation, hotels, and curated experiences",
      "Flexible package customization with optional hotel, transport, and experience add-ons",
      "Independent booking for flights, trains, buses, hotels, and travel experiences",
      "Dynamic pricing based on selected packages, services, and add-ons",
      "User booking management with centralized trip and reservation information",
      "Admin dashboard for managing users, destinations, packages, bookings, hotels, flights, buses, trains, and experiences",
      "Bulk data management and upload support for efficiently maintaining travel inventory",
      "Microservices-based backend architecture for separating travel and booking services",
    ],

    tags: [
      "Next.js",
      "FastAPI",
      "Python",
      "MySQL",
      "Microservices",
      "REST API"
    ],

    circleImage: "/projects/anvesha1.png",

    modalImages: [
      "/projects/anvesha2.png",
      "/projects/anvesha3.png",
      "/projects/anvesha4.png",
    ],

    duration: "2026",

    // githubUrl: "https://github.com/...",
    // liveUrl: "https://...",
  },
  {
    id: "kadhambari",
    number: "03",
    title: "Kadhambari",
    category: "Landscape & Gardening Platform",

    description:
      "A full-service landscaping and gardening platform that combines an online botanical store with professional landscape design, smart irrigation planning, garden maintenance, and service management. Kadhambari provides customers with a convenient way to discover plants, purchase products, request expert services, and manage their landscaping needs from one platform.",

    features: [
      "Curated botanical plant store with categories, product details, pricing, and plant growth information",
      "Product discovery with category-based browsing and search for plants and gardening products",
      "Landscape design consultation with service requests and quote management",
      "Smart irrigation planning and installation service requests",
      "Garden maintenance and on-site service request management",
      "Online order management with product cart, checkout, and payment integration",
      "Customer account and order history management",
      "Admin dashboard for managing products, categories, orders, customers, services, and inquiries",
      "Business analytics for monitoring orders, revenue, and customer activity",
      "Cloud-based data and image management for products and service information"
    ],

    tags: [
      "Flutter",
      "Dart",
      "Firebase",
      "REST API",
      "Razorpay",
      "Cloudinary"
    ],

    circleImage: "/projects/kadhambari1.png",

    modalImages: [
      "/projects/kadhambari2.png",
      "/projects/kadhambari3.png",
      "/projects/kadhambari4.png",
    ],

    duration: "2026",

    // githubUrl: "https://github.com/...",
    // liveUrl: "https://...",
  },
  {
    id: "crime-rate-prediction",
    number: "04",
    title: "Crime Rate Prediction",
    category: "Machine Learning & Crime Analytics",

    description:
      "A machine learning and analytics project that analyzes historical crime incident data to identify temporal and geographic patterns, classify crime categories, and estimate areas with higher historical risk. The project combines data preprocessing, feature engineering, predictive modeling, spatial analysis, and visual analytics to transform historical crime data into actionable insights.",

    features: [
      "Historical crime data preprocessing, exploratory analysis, and feature engineering",
      "Supervised machine learning models for predicting crime categories from historical patterns",
      "Temporal analysis to identify crime trends across dates, times, and periods",
      "Geographic analysis and visualization of historical crime concentration and potential risk zones",
      "Model evaluation using classification performance metrics and comparative analysis",
      "Interactive visual analytics for exploring crime patterns, trends, categories, and geographic distributions"
    ],

    tags: [
      "Python",
      "Machine Learning",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Data Visualization"
    ],

    circleImage: "/projects/crime-rate-prediction4.png",

    modalImages: [
      "/projects/crime-rate-prediction1.png",
      "/projects/crime-rate-prediction2.png",
      "/projects/crime-rate-prediction3.png",
    ],

    duration: "2025 – 2026",
  },
  {
    id: "baby-name-finder",
    number: "05",
    title: "Baby Name Finder",
    category: "Name Discovery Web Application",

    description:
      "A responsive web application designed to help users discover meaningful baby names through intelligent filtering, cultural and gender-based exploration, detailed name information, popularity insights, and personalized favorites.",

    features: [
      "Multi-criteria name discovery with filtering by gender, cultural origin, starting letter, and other available attributes",
      "Detailed name profiles displaying meaning, origin, etymology, and related information",
      "Personalized favorites system for bookmarking and quickly revisiting preferred names",
      "Popularity and trending name views for discovering commonly selected names",
      "Search and comparison experience for exploring multiple names efficiently",
      "Responsive and modern interface optimized for desktop and mobile browsing",
      "REST API integration for retrieving and displaying name-related data dynamically"
    ],

    tags: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "REST API",
      "Responsive Design"
    ],

    circleImage: "/projects/baby-name-finder4.png",

    modalImages: [
      "/projects/baby-name-finder1.png",
      "/projects/baby-name-finder2.png",
      "/projects/baby-name-finder3.png",
    ],

    duration: "2026",
  }
];

// Coordinates for the 5 small circles curving along the RIGHT flank of the large circle
const RIGHT_ARC_NODES = [
  { left: "65.5%", top: "10.7%" }, // 1. Top-Right
  { left: "80.8%", top: "28.2%" }, // 2. Upper-Right
  { left: "86.0%", top: "50.0%" }, // 3. Center-Right (apex)
  { left: "80.8%", top: "71.8%" }, // 4. Lower-Right
  { left: "65.5%", top: "89.3%" }, // 5. Bottom-Right
];

const SMALL_CIRCLE_SIZES = [
  "w-11 h-11 sm:w-12 sm:h-12 md:w-13 md:h-13 lg:w-14 lg:h-14",
  "w-11 h-11 sm:w-12 sm:h-12 md:w-13 md:h-13 lg:w-14 lg:h-14",
  "w-11 h-11 sm:w-12 sm:h-12 md:w-13 md:h-13 lg:w-14 lg:h-14",
  "w-11 h-11 sm:w-12 sm:h-12 md:w-13 md:h-13 lg:w-14 lg:h-14",
  "w-11 h-11 sm:w-12 sm:h-12 md:w-13 md:h-13 lg:w-14 lg:h-14",
];

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const [activeProject, setActiveProject] = useState(0);

  // Failure tracking for graceful fallbacks
  const [failedSmallImages, setFailedSmallImages] = useState<Record<string, boolean>>({});
  const [failedLargeImages, setFailedLargeImages] = useState<Record<string, boolean>>({});
  const [failedModalImages, setFailedModalImages] = useState<Record<string, boolean>>({});

  // View Project Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const totalProjects = PROJECTS.length;
  const currentProject = PROJECTS[activeProject];

  useEffect(() => {
    setModalImageIndex(0);
  }, [activeProject]);

  // Auto-cycle modal gallery images without arrows
  useEffect(() => {
    if (!isModalOpen) return;
    const numImages = currentProject?.modalImages?.length || 0;
    if (numImages <= 1) return;

    const interval = setInterval(() => {
      setModalImageIndex((prev) => (prev + 1) % numImages);
    }, 3000);

    return () => clearInterval(interval);
  }, [isModalOpen, currentProject?.id, currentProject?.modalImages?.length]);

  // Lock background scroll and handle Escape key for modal
  useEffect(() => {
    if (isModalOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsModalOpen(false);
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isModalOpen]);

  const handleNext = () => {
    setActiveProject((prev) => (prev + 1) % totalProjects);
  };

  const handlePrev = () => {
    setActiveProject((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  return (
    <section
      id="projects"
      className="relative w-full bg-[#fafaf9] pt-4 pb-12 sm:pt-6 sm:pb-14 lg:pt-8 lg:pb-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 overflow-hidden scroll-mt-20"
    >
      {/* Background subtle warm radial tint */}
      <div className="absolute inset-0 pointer-events-none select-none bg-[radial-gradient(circle_at_bottom_left,rgba(255,237,213,0.30),transparent_55%)]" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto flex flex-col justify-start">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-4 sm:mb-5 lg:mb-6">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: shouldReduceMotion ? 0.25 : 0.5,
              ease: LUXURY_EASE,
            }}
            className="flex items-center gap-2 mb-1.5 sm:mb-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#ea580c] shrink-0" />
            <span className="text-[11px] sm:text-[13px] font-extrabold uppercase tracking-[0.2em] text-[#ea580c] font-sans">
              Featured Work | Portfolio
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-serif font-bold text-[#12221b] tracking-tight leading-[1.08]">
            Selected Projects<span className="text-[#ea580c]">.</span>
          </h2>
        </div>

        {/* Cohesive Composition with Large Circle + 5 Selectors on Left, Details on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 xl:gap-8 items-center">
          {/* LEFT / CENTER: Large Main Circle + 5 Small Circles Curving Along Right Flank */}
          <div className="lg:col-span-7 xl:col-span-6 flex items-center justify-center lg:justify-start">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[500px] xl:max-w-[530px] aspect-square flex items-center select-none">
              {/* Very Large Main Project Circle showing current project's "4" image */}
              <div
                style={{
                  position: "absolute",
                  left: "38%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "69%",
                  height: "69%",
                }}
                className="rounded-full bg-white border border-zinc-200/90 shadow-[0_24px_60px_-10px_rgba(0,0,0,0.14),0_10px_24px_-5px_rgba(0,0,0,0.08),0_0_1px_rgba(0,0,0,0.1)] overflow-hidden flex items-center justify-center z-10"
              >
                <AnimatePresence mode="wait">
                  {!failedLargeImages[currentProject.id] ? (
                    /* Project Image Filling the Full Circle Edge-to-Edge */
                    <motion.div
                      key={`circle-${currentProject.id}`}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.35, ease: LUXURY_EASE }}
                      className="w-full h-full relative group overflow-hidden select-none flex items-center justify-center bg-zinc-100"
                    >
                      <img
                        src={currentProject.circleImage}
                        alt={currentProject.title}
                        className="w-full h-full object-cover object-center scale-[1.09] transition-transform duration-500"
                        onError={() => {
                          setFailedLargeImages((prev) => ({
                            ...prev,
                            [currentProject.id]: true,
                          }));
                        }}
                      />
                    </motion.div>
                  ) : (
                    /* Clean Image Skeleton Placeholder (When image is not available or still loading) */
                    <motion.div
                      key={`skeleton-${currentProject.id}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.35, ease: LUXURY_EASE }}
                      className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-zinc-100 via-zinc-200/70 to-zinc-300/80 relative flex flex-col justify-between p-6 sm:p-8 md:p-10"
                    >
                      <div className="w-1/3 h-2.5 sm:h-3 rounded-full bg-white/70" />

                      <div className="w-full h-[58%] rounded-3xl bg-white/85 border border-zinc-200/70 p-4 sm:p-5 flex flex-col justify-between shadow-sm relative overflow-hidden">
                        <div className="w-1/3 h-2 rounded-full bg-zinc-200" />
                        <div className="space-y-2 mt-auto">
                          <div className="w-3/4 h-3.5 rounded-md bg-zinc-200/90" />
                          <div className="w-1/2 h-2.5 rounded-md bg-zinc-200/60" />
                        </div>
                        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />
                      </div>

                      <div className="w-1/2 h-2.5 sm:h-3 rounded-full bg-white/60" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 5 Small Circular Project Selectors Curving Along the Right Side */}
              {/* Displaying each project's image without number labels */}
              {PROJECTS.map((proj, idx) => {
                const isActive = activeProject === idx;
                const pos = RIGHT_ARC_NODES[idx];
                const sizeClass = SMALL_CIRCLE_SIZES[idx];
                const hasImage = !failedSmallImages[proj.id];

                return (
                  <div
                    key={proj.id}
                    style={{
                      position: "absolute",
                      left: pos.left,
                      top: pos.top,
                      transform: "translate(-50%, -50%)",
                    }}
                    className="z-20 flex items-center justify-center pointer-events-auto"
                  >
                    <motion.button
                      type="button"
                      onClick={() => {
                        setActiveProject(idx);
                        setModalImageIndex(0);
                      }}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.25, ease: LUXURY_EASE }}
                      style={{
                        transformOrigin: "center center",
                        willChange: "transform",
                      }}
                      className={`${sizeClass} rounded-full overflow-hidden flex items-center justify-center cursor-pointer p-0.5 origin-center transition-[border-color,box-shadow] duration-200 ${isActive
                        ? "bg-white border-2 border-[#ea580c] shadow-[0_0_0_3px_rgba(234,88,12,0.22),0_10px_26px_rgba(234,88,12,0.35)] scale-105"
                        : "bg-white border border-zinc-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.08),0_1px_4px_rgba(0,0,0,0.04)] hover:border-zinc-300 hover:shadow-[0_8px_22px_rgba(0,0,0,0.12),0_0_10px_rgba(234,88,12,0.15)]"
                        }`}
                      aria-label={`Select Project ${proj.number} - ${proj.title}`}
                    >
                      {/* Image inside small circle with graceful fallback */}
                      <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-zinc-100">
                        {hasImage ? (
                          <img
                            src={proj.circleImage}
                            alt={proj.title}
                            className="w-full h-full object-cover object-center scale-[1.09] transition-transform duration-300"
                            onError={() => {
                              setFailedSmallImages((prev) => ({
                                ...prev,
                                [proj.id]: true,
                              }));
                            }}
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-zinc-100 via-zinc-200/80 to-zinc-300 flex items-center justify-center text-[11px] sm:text-xs font-mono font-bold text-zinc-600">
                            {proj.title.charAt(0)}
                          </div>
                        )}
                      </div>
                    </motion.button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Dedicated Project Information Area */}
          <div className="lg:col-span-5 xl:col-span-6 flex flex-col items-start justify-center lg:pl-2 xl:pl-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35, ease: LUXURY_EASE }}
                className="w-full flex flex-col items-start"
              >
                {/* Project Number + Category Pill */}
                <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
                  <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#ea580c] uppercase">
                    PROJECT {currentProject.number}
                  </span>
                  <span className="text-zinc-300 font-sans">•</span>
                  <span className="text-[11px] sm:text-xs font-mono font-medium uppercase tracking-wider text-zinc-500 bg-zinc-100 px-2.5 py-0.5 rounded-full border border-zinc-200/80">
                    {currentProject.category}
                  </span>
                </div>

                {/* Project Title */}
                <div className="w-full mb-3.5 sm:mb-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#12221b] tracking-tight leading-tight">
                    {currentProject.title}
                  </h3>
                </div>

                {/* Short Project Description */}
                <div className="w-full max-w-lg mb-4 sm:mb-5">
                  <p className="text-sm sm:text-[15px] text-zinc-600 leading-relaxed font-sans">
                    {currentProject.description}
                  </p>
                </div>

                {/* Technology / Tag Pills */}
                <div className="flex flex-wrap items-center gap-2 mb-5 sm:mb-6">
                  {currentProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium font-mono text-zinc-700 bg-white border border-zinc-200/90 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Primary CTA / "View Project" Button Opens Modal + Stepper Controls */}
                <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                  <motion.button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#ff6a00] to-[#ea580c] border border-orange-400/40 hover:border-orange-300/60 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_6px_18px_rgba(234,88,12,0.22)] hover:shadow-[0_3px_6px_rgba(0,0,0,0.05),0_12px_24px_rgba(234,88,12,0.30)] transition-all duration-300 ease-out group font-sans cursor-pointer"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                  </motion.button>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="w-10 h-10 rounded-full bg-white border border-zinc-200/90 hover:border-zinc-300 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-sm flex items-center justify-center text-zinc-600 hover:text-zinc-950 transition-all cursor-pointer"
                      aria-label="Previous project"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="w-10 h-10 rounded-full bg-white border border-zinc-200/90 hover:border-zinc-300 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-sm flex items-center justify-center text-zinc-600 hover:text-zinc-950 transition-all cursor-pointer"
                      aria-label="Next project"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* CHANGE 5: Premium View Project Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Backdrop with blur & smooth click-outside to close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Dialog Card with Premium Shadow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.3, ease: LUXURY_EASE }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-[#fafaf9] border border-zinc-200/90 rounded-[24px] sm:rounded-[28px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25),0_10px_30px_rgba(0,0,0,0.12)] overflow-hidden z-10 flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-project-title"
            >
              {/* Close Button - Fixed in top-right of modal card */}
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-white border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.12)] flex items-center justify-center text-zinc-600 hover:text-zinc-950 transition-all cursor-pointer z-50"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Scrollable Modal Body - Same unified scroll behavior as Skills screen */}
              <div className="w-full max-h-[90vh] overflow-y-auto modal-scrollbar px-6 pb-6 pt-6 sm:px-8 sm:pb-8 sm:pt-7 lg:px-10 lg:pb-10 lg:pt-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                  {/* LEFT COLUMN: Sticky Anchor matching Skills screen (stays pinned at top while scrolling) */}
                  <div className="lg:col-span-6 flex flex-col gap-3.5 lg:sticky lg:top-6 sm:lg:top-7 lg:top-8 self-start select-none">
                    {/* Main Modal Image Container with Layered Shadow */}
                    <div className="relative w-full aspect-[16/10] bg-zinc-100 rounded-2xl border border-zinc-200/90 overflow-hidden flex items-center justify-center shadow-[0_16px_40px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.06)] group">
                      {currentProject.modalImages.length > 0 &&
                        !failedModalImages[`${currentProject.id}-${modalImageIndex}`] ? (
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={`modal-img-${currentProject.id}-${modalImageIndex}`}
                            src={currentProject.modalImages[modalImageIndex]}
                            alt={`${currentProject.title} preview ${modalImageIndex + 1}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="w-full h-full object-cover object-top select-none pointer-events-none"
                            onError={() => {
                              setFailedModalImages((prev) => ({
                                ...prev,
                                [`${currentProject.id}-${modalImageIndex}`]: true,
                              }));
                            }}
                          />
                        </AnimatePresence>
                      ) : (
                        /* Skeleton Mockup in Modal */
                        <div className="w-full h-full bg-gradient-to-br from-zinc-100 via-zinc-200/60 to-zinc-200/80 p-5 flex flex-col justify-between relative overflow-hidden">
                          <div className="w-1/3 h-3 rounded-full bg-white/80" />
                          <div className="w-full h-[55%] rounded-xl bg-white/85 border border-zinc-200/70 p-3.5 flex flex-col justify-between shadow-sm relative overflow-hidden">
                            <div className="w-1/4 h-2 rounded-full bg-zinc-200" />
                            <div className="space-y-1.5 mt-auto">
                              <div className="w-2/3 h-3 rounded bg-zinc-200/80" />
                              <div className="w-1/2 h-2 rounded bg-zinc-200/60" />
                            </div>
                          </div>
                          <div className="w-1/2 h-2.5 rounded-full bg-white/70" />
                        </div>
                      )}
                    </div>

                    {/* Technologies Used below image */}
                    {currentProject.tags && currentProject.tags.length > 0 && (
                      <div className="w-full pt-3 mt-1 border-t border-zinc-200/80">
                        <div className="flex items-center gap-1.5 mb-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]" />
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#12221b]">
                            Technologies Used
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {currentProject.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium font-mono text-zinc-700 bg-white border border-zinc-200/90 shadow-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* RIGHT COLUMN: Natural Flow Content matching Skills screen */}
                  <div className="lg:col-span-6 flex flex-col items-start pr-1 sm:pr-2">
                  {/* Project Number + Category + Duration */}
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#ea580c] uppercase">
                      PROJECT {currentProject.number}
                    </span>
                    <span className="text-zinc-300 font-sans">•</span>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-500 bg-zinc-100 px-2.5 py-0.5 rounded-full border border-zinc-200/80">
                      {currentProject.category}
                    </span>
                    {currentProject.duration && (
                      <>
                        <span className="text-zinc-300 font-sans">•</span>
                        <span className="text-xs text-zinc-400 font-mono">
                          {currentProject.duration}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3
                    id="modal-project-title"
                    className="text-2xl sm:text-3xl font-serif font-bold text-[#12221b] tracking-tight mb-3"
                  >
                    {currentProject.title}
                  </h3>

                  {/* Full Description */}
                  <p className="text-sm sm:text-[15px] text-zinc-600 leading-relaxed font-sans mb-5">
                    {currentProject.description}
                  </p>

                  {/* Key Features */}
                  {currentProject.features && currentProject.features.length > 0 && (
                    <div className="w-full mb-5">
                      <h4 className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.16em] text-[#12221b] font-sans mb-2.5">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {currentProject.features.map((feat, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-xs sm:text-[13px] text-zinc-600 font-sans leading-snug"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] mt-1.5 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Action Buttons: GitHub & Live Project (Hidden if no URL exists) */}
                  {(Boolean(currentProject.githubUrl) ||
                    Boolean(currentProject.liveUrl)) && (
                      <div className="flex items-center gap-3 pt-1 flex-wrap">
                        {currentProject.githubUrl && (
                          <a
                            href={currentProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-zinc-800 bg-white border border-zinc-300 hover:border-zinc-400 shadow-sm hover:shadow transition-all"
                          >
                            <GithubIcon className="w-4 h-4" />
                            <span>GitHub</span>
                          </a>
                        )}
                        {currentProject.liveUrl && (
                          <a
                            href={currentProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#ff6a00] to-[#ea580c] shadow-[0_4px_14px_rgba(234,88,12,0.25)] hover:shadow-[0_6px_20px_rgba(234,88,12,0.35)] transition-all"
                          >
                            <span>Live Project</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        )}
      </AnimatePresence>
    </section>
  );
}
