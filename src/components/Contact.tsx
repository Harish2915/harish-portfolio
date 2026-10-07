"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowUpRight,
  ChevronUp,
  Copy,
  Check,
} from "lucide-react";

const LUXURY_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// EmailJS Credentials provided by user
const EMAILJS_SERVICE_ID = "service_n0tj4zs";
const EMAILJS_OWNER_TEMPLATE_ID = "template_38ea594";
const EMAILJS_CLIENT_TEMPLATE_ID = "template_8lqq3h4";
const EMAILJS_PUBLIC_KEY = "phfJLHD8dVPna2ZRu";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactEmail = "harish@example.com"; // Professional display fallback

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("harish.developer.contact@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", "/home");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus("error");
      setErrorMessage("Please complete all fields before sending.");
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setStatus("error");
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const templateParams = {
      from_name: trimmedName,
      from_email: trimmedEmail,
      message: trimmedMessage,
    };

    try {
      // Flow requirement:
      // 1. Send the message to the client using: SERVICE_ID + CLIENT_ID + PUBLIC_KEY
      const clientPromise = emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CLIENT_TEMPLATE_ID,
        templateParams,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      // 2. Send the same message to the portfolio owner using: SERVICE_ID + OWNER_ID + PUBLIC_KEY
      const ownerPromise = emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_OWNER_TEMPLATE_ID,
        templateParams,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      const results = await Promise.allSettled([clientPromise, ownerPromise]);

      const isAnySuccessful = results.some((res) => res.status === "fulfilled");

      if (isAnySuccessful) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const firstError = results.find((r) => r.status === "rejected") as PromiseRejectedResult | undefined;
        console.error("EmailJS Error:", firstError?.reason);
        setStatus("error");
        setErrorMessage("Something went wrong while delivering your message. Please try again.");
      }
    } catch (err) {
      console.error("Submission Exception:", err);
      setStatus("error");
      setErrorMessage("Network error encountered. Please check your connection and retry.");
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#fafaf9] pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-12 lg:pb-28 px-3.5 sm:px-8 md:px-12 lg:px-16 xl:px-20 scroll-mt-20 border-t border-zinc-200/60 overflow-hidden"
    >
      {/* Background Subtle Ambient Warm Radial Glows */}
      <div className="absolute inset-0 pointer-events-none select-none bg-[radial-gradient(circle_at_bottom_left,rgba(255,237,213,0.35),transparent_55%),radial-gradient(circle_at_top_right,rgba(22,51,39,0.04),transparent_50%)]" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 xl:gap-16 items-start">

          {/* LEFT COLUMN: Visually Anchored Editorial Introduction & Info Cards */}
          <div className="lg:col-span-5 flex flex-col items-start justify-start lg:sticky lg:top-[100px] self-start">
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
              className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-2.5"
            >
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ea580c] shrink-0" />
              <span className="text-[11px] sm:text-[13px] font-extrabold uppercase tracking-[0.2em] text-[#ea580c] font-sans">
                Get In Touch | Contact
              </span>
            </motion.div>

            {/* Editorial Serif Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[46px] font-serif font-bold text-[#12221b] tracking-tight leading-[1.08] mb-3 sm:mb-4">
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
                  Let&apos;s Build Something
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
                  className="block text-[#ea580c]"
                >
                  Remarkable.
                </motion.span>
              </span>
            </h2>

            {/* Supporting Editorial Description */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: shouldReduceMotion ? 0.25 : 0.5,
                delay: shouldReduceMotion ? 0 : 0.34,
                ease: LUXURY_EASE,
              }}
              className="text-sm sm:text-base text-zinc-600 leading-relaxed font-sans max-w-lg mb-6 sm:mb-8"
            >
              Have an innovative concept to bring to life, a high-impact engineering role, or a potential collaboration? Send a note and let&apos;s start the conversation.
            </motion.p>


          </div>

          {/* RIGHT COLUMN: Luxury Editorial Contact Form Card */}
          <div className="lg:col-span-7 w-full">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: shouldReduceMotion ? 0.3 : 0.6,
                delay: shouldReduceMotion ? 0 : 0.25,
                ease: LUXURY_EASE,
              }}
              className="relative bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-zinc-200/90 shadow-[0_2px_4px_rgba(0,0,0,0.02),0_16px_40px_rgba(0,0,0,0.06)] p-5 sm:p-8 lg:p-10 overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ea580c] via-orange-400 to-[#163327]" />

              {/* Form Title & Context */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center gap-2 mb-1.5">
                  <Sparkles className="w-4 h-4 text-[#ea580c]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c] font-sans">
                    Get In Touch
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-zinc-900 tracking-tight">
                  Send Me a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 font-sans mt-1">
                  Fill in your details below and a personal confirmation will be delivered directly to your inbox.
                </p>
              </div>

              {/* Success View */}
              {status === "success" ? (
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: LUXURY_EASE }}
                  className="py-8 sm:py-12 flex flex-col items-center text-center px-4"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-700 flex items-center justify-center mb-4 shadow-sm">
                    <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-serif font-bold text-zinc-900 mb-2">
                    Message Delivered Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 font-sans max-w-md leading-relaxed mb-6">
                    Thank you for reaching out. A confirmation email has been dispatched to your inbox, and I will personally review your note and respond promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#163327] hover:bg-[#1c3d2f] transition-all duration-300 shadow-sm cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                  {/* Error Notification Banner */}
                  {status === "error" && errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3.5 rounded-xl bg-red-50/90 border border-red-200 text-red-700 flex items-center gap-2.5 text-xs sm:text-sm font-sans"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  {/* Name Input */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-name"
                      className="text-xs font-semibold text-zinc-700 font-sans flex items-center justify-between"
                    >
                      <span>Your Name</span>
                      <span className="text-[11px] text-zinc-400 font-normal">Required</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alexander Vance"
                        disabled={status === "submitting"}
                        className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-zinc-50/70 hover:bg-zinc-50 focus:bg-white text-zinc-900 text-xs sm:text-sm font-sans border border-zinc-200/90 focus:border-[#ea580c] focus:outline-none focus:ring-2 focus:ring-[#ea580c]/15 transition-all duration-200 placeholder:text-zinc-400"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-email"
                      className="text-xs font-semibold text-zinc-700 font-sans flex items-center justify-between"
                    >
                      <span>Your Email Address</span>
                      <span className="text-[11px] text-zinc-400 font-normal">Required</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alexander@company.com"
                        disabled={status === "submitting"}
                        className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-zinc-50/70 hover:bg-zinc-50 focus:bg-white text-zinc-900 text-xs sm:text-sm font-sans border border-zinc-200/90 focus:border-[#ea580c] focus:outline-none focus:ring-2 focus:ring-[#ea580c]/15 transition-all duration-200 placeholder:text-zinc-400"
                        required
                      />
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-message"
                      className="text-xs font-semibold text-zinc-700 font-sans flex items-center justify-between"
                    >
                      <span>Your Message</span>
                      <span className="text-[11px] text-zinc-400 font-normal">Required</span>
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3.5 pointer-events-none text-zinc-400">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project, idea, or questions..."
                        disabled={status === "submitting"}
                        className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-zinc-50/70 hover:bg-zinc-50 focus:bg-white text-zinc-900 text-xs sm:text-sm font-sans border border-zinc-200/90 focus:border-[#ea580c] focus:outline-none focus:ring-2 focus:ring-[#ea580c]/15 transition-all duration-200 placeholder:text-zinc-400 resize-none"
                        required
                      />
                    </div>
                  </div>

                  {/* Form Submission Action */}
                  <div className="pt-2 flex items-center justify-end">
                    <motion.button
                      type="submit"
                      disabled={status === "submitting"}
                      whileHover={status === "submitting" ? undefined : { scale: 1.02, y: -2 }}
                      whileTap={status === "submitting" ? undefined : { scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className={`w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-semibold text-white transition-all duration-300 ease-out font-sans cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.04),0_6px_18px_rgba(234,88,12,0.22)] hover:shadow-[0_3px_6px_rgba(0,0,0,0.05),0_12px_24px_rgba(234,88,12,0.30)] ${status === "submitting"
                        ? "bg-zinc-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-[#ff6a00] to-[#ea580c] border border-orange-400/40 hover:border-orange-300/60"
                        }`}
                    >
                      {status === "submitting" ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2.5 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-3.5 h-3.5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>

        {/* Editorial Closing Bar & Back to Top */}
        <div className="mt-16 sm:mt-20 lg:mt-24 pt-8 border-t border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 select-none">
            <span className="text-2xl font-extrabold tracking-tight text-zinc-950 font-sans">
              H
            </span>
            <span className="text-2xl font-black text-[#ea580c] leading-none">
              .
            </span>
            <span className="text-xs sm:text-sm text-zinc-500 font-sans ml-2">
              © {new Date().getFullYear()} Harish. Crafted with passion & precision.
            </span>
          </div>

          <button
            type="button"
            onClick={handleScrollToTop}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-600 hover:text-[#ea580c] transition-colors duration-200 font-sans cursor-pointer group"
          >
            <span>Back to top</span>
            <ChevronUp className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
