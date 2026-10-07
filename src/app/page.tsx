"use client";

import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { motion, useReducedMotion } from "framer-motion";

const LUXURY_EASE = [0.22, 1, 0.36, 1] as const;

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="relative w-full min-h-screen bg-white overflow-x-clip">
      <SplashScreen />
      <Navbar />

      {/* Hero Screen */}
      <div
        id="home"
        className="relative h-screen w-full overflow-hidden bg-white flex flex-col justify-between"
      >
        {/* Background Scenic Photograph spanning full screen behind navbar and hero */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <motion.img
            src="/hero_bg.png"
            alt="Harish workspace overlooking mountain lake at sunrise"
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0.8, scale: 1.04 }
            }
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0.3 : 1.4,
              ease: LUXURY_EASE,
            }}
            className="w-full h-full object-cover object-[78%_center] md:object-[72%_center] lg:object-right"
          />

          {/* Mobile Gradient Overlay: ensures text on phone view is 100% readable against the photo */}
          <div
            className="absolute inset-0 md:hidden pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.85) 45%, rgba(255,255,255,0.55) 80%, rgba(255,255,255,0.8) 100%)",
            }}
          />

          {/* Desktop Gradient Overlay: horizontal transition from left white to right landscape */}
          <div
            className="hidden md:block absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.85) 30%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 72%)",
            }}
          />

          {/* Gentle bottom white mist fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-24 md:h-28 pointer-events-none"
            style={{
              background:
                "linear-gradient(0deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)",
            }}
          />
        </div>

        {/* Foreground content sitting cleanly on z-10 */}
        <div className="relative z-10 flex flex-col w-full h-full justify-between flex-1 overflow-hidden pt-16 sm:pt-20">
          <Hero />
        </div>
      </div>

      {/* About Screen */}
      <About />

      {/* Skills Screen */}
      <Skills />

      {/* Projects Screen */}
      <Projects />

      {/* Experience Screen */}
      <Experience />

      {/* Education Screen */}
      <Education />

      {/* Contact Screen */}
      <Contact />
    </main>
  );
}
