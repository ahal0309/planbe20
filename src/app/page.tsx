"use client";

import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PhilosophySlide {
  kicker: string;
  quotePart1: string;
  highlight: string;
  quotePart2: string;
  subtext: string;
  tagline: string;
}

const philosophySlides: PhilosophySlide[] = [
  {
    kicker: "OUR PHILOSOPHY",
    quotePart1: "Innovation requires a deep respect for",
    highlight: "tradition",
    quotePart2: "—",
    subtext: "seamlessly integrated with cutting-edge technology.",
    tagline: "PLAN BĒ ARCHITECTURAL DESIGN STUDIO · EST. 2018 · COCHIN, KERALA",
  },
  {
    kicker: "DESIGN PRINCIPLE",
    quotePart1: "Great architecture begins with",
    highlight: "understanding people",
    quotePart2: "—",
    subtext: "creating spaces that are intuitive, functional, and deeply personal.",
    tagline: "PLAN BĒ ARCHITECTURAL DESIGN STUDIO · EST. 2018 · COCHIN, KERALA",
  },
  {
    kicker: "TIMELESS CONTEXT",
    quotePart1: "Guided by context, craftsmanship and",
    highlight: "long-term value",
    quotePart2: "—",
    subtext: "designing meaningful spaces with clarity, purpose, and natural harmony.",
    tagline: "PLAN BĒ ARCHITECTURAL DESIGN STUDIO · EST. 2018 · COCHIN, KERALA",
  },
];

interface Testimonial {
  name: string;
  role: string;
  review: string;
  image: string | null;
}

const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    role: "Residence Owner",
    review: "Working with Plan Be was an absolute pleasure. They understood our vision perfectly and transformed our ideas into a beautiful, functional home that we love.",
    image: null,
  },
  {
    name: "Sarah Smith",
    role: "Commercial Project",
    review: "The team's attention to detail and commitment to quality is unmatched. The spaces they create are not just visually stunning but deeply rooted in context and craftsmanship.",
    image: null,
  },
  {
    name: "Michael Brown",
    role: "Interior Design Client",
    review: "From the first meeting to the final handover, the entire process was seamless. They brought our dream space to life with such clarity and purpose.",
    image: null,
  },
];

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Let's Connect",
    description:
      "We begin by understanding your lifestyle, aspirations, and the way you want to live.",
  },
  {
    step: "02",
    title: "Dream Together",
    description:
      "Through collaboration and exploration, we shape ideas into a clear design vision.",
  },
  {
    step: "03",
    title: "Shape & Design",
    description:
      "Layouts, materials, and visual concepts come together to bring your vision to life.",
  },
  {
    step: "04",
    title: "Build With Care",
    description:
      "Every detail is thoughtfully executed with precision, quality, and attention.",
  },
  {
    step: "05",
    title: "Live Your Way",
    description:
      "A home designed around your story, ready to be experienced and enjoyed every day.",
  },
];

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activePhilosophy, setActivePhilosophy] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhilosophy((prev) => (prev + 1) % philosophySlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Full-Screen Hero Section matching screenshot */}
      <Hero />

      {/* Process Section */}
      <section id="process" className="w-full bg-[#3E2723] text-surface py-20 md:py-32 scroll-mt-36">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-gutter">
          <div className="md:col-span-5">
            <span className="text-sm leading-[1.5] tracking-[0.2em] font-bold uppercase text-ashen block mb-4">
              Process
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] font-semibold mb-6 leading-tight">
              How Your Home Comes Together
            </h2>
            <p className="text-lg md:text-xl text-surface-dim/80 mb-10 max-w-md leading-relaxed">
              A thoughtful design journey shaped by collaboration, creativity, and craftsmanship — transforming ideas into spaces that truly belong to you.
            </p>
          </div>

          <div className="md:col-span-7 flex flex-col">
            {processSteps.map((step, idx) => (
              <div
                key={step.step}
                className={`flex items-start border-t border-surface/20 py-8 px-4 -mx-4 group hover:bg-surface/5 transition-colors duration-300 ${
                  idx === processSteps.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="text-base font-semibold tracking-widest text-ochre w-16 pt-1">
                  {step.step}
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 font-sans">{step.title}</h3>
                  <p className="text-base md:text-lg text-surface-dim/70 max-w-md leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section id="testimonials" className="w-full max-w-container-max mx-auto px-6 md:px-margin-desktop py-20 md:py-32 scroll-mt-36">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16">
          <div>
            <span className="text-sm leading-[1.5] tracking-[0.2em] font-bold uppercase text-ashen block mb-3">
              Testimonials
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.2]">
              CLIENT REVIEWS
            </h2>
          </div>
          <p className="text-base md:text-lg text-ashen max-w-md mt-4 md:mt-0 leading-relaxed">
            What our clients have to say about their experience working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-gutter items-center">
          {/* Left Side: Square Image Placeholder */}
          <div className="relative w-full aspect-square bg-[#EAE8E4] rounded-sm overflow-hidden flex items-center justify-center border border-ink/5">
            <AnimatePresence mode="wait">
              {testimonials[activeTestimonial].image ? (
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={testimonials[activeTestimonial].image!}
                    alt={testimonials[activeTestimonial].name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ) : (
                <motion.svg
                  key={`placeholder-${activeTestimonial}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  width="80"
                  height="80"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-20 stroke-ink"
                  strokeWidth="1.5"
                >
                  <circle cx="30" cy="20" r="12" strokeDasharray="3 3" />
                  <path d="M10 50C10 38.9543 18.9543 30 30 30C41.0457 30 50 38.9543 50 50" strokeDasharray="3 3" />
                </motion.svg>
              )}
            </AnimatePresence>
          </div>

          {/* Right Side: Review Details */}
          <div className="flex flex-col justify-center min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col"
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6 opacity-20">
                  <path d="M16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10ZM16 10V22C16 28.6274 10.6274 34 4 34" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M36 10C36 13.3137 33.3137 16 30 16C26.6862 16 24 13.3137 24 10C24 6.68629 26.6862 4 30 4C33.3137 4 36 6.68629 36 10ZM36 10V22C36 28.6274 30.6274 34 24 34" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                
                <p className="font-serif text-2xl md:text-3xl leading-relaxed text-ink mb-8 italic">
                  "{testimonials[activeTestimonial].review}"
                </p>
                
                <div>
                  <h3 className="font-sans text-xl font-bold tracking-wide text-ink uppercase">
                    {testimonials[activeTestimonial].name}
                  </h3>
                  <span className="text-sm font-medium tracking-[0.15em] uppercase text-ashen mt-1 block">
                    {testimonials[activeTestimonial].role}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Dots Pagination */}
            <div className="flex items-center gap-3 mt-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeTestimonial === index ? "w-8 bg-[#5A3728]" : "w-2 bg-ink/20 hover:bg-ink/40"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Editorial Thought Slider Section */}
      <section id="studio" className="w-full bg-transparent py-28 md:py-44 relative scroll-mt-36 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 md:px-margin-desktop relative z-10 flex flex-col items-center text-center">
          
          {/* Subtle Top Architectural Motif */}
          <div className="mb-6 flex flex-col items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40 text-[#5A3728]">
              <circle cx="12" cy="5" r="2" fill="currentColor" />
              <circle cx="6" cy="18" r="2" fill="currentColor" />
              <circle cx="18" cy="18" r="2" fill="currentColor" />
              <line x1="12" y1="5" x2="6" y2="18" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="12" y1="5" x2="18" y2="18" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="6" y1="18" x2="18" y2="18" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
            </svg>
          </div>

          <div className="relative w-full flex items-center justify-between min-h-[300px] md:min-h-[260px]">
            {/* Left Nav Button */}
            <button
              onClick={() => setActivePhilosophy((prev) => (prev - 1 + philosophySlides.length) % philosophySlides.length)}
              className="p-3 text-ink/30 hover:text-ink transition-colors duration-300 focus:outline-none"
              aria-label="Previous philosophy slide"
            >
              <ChevronLeft className="w-7 h-7 md:w-8 md:h-8" strokeWidth={1} />
            </button>

            {/* Slide Content */}
            <div className="w-full max-w-3xl px-4 md:px-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhilosophy}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center"
                >
                  <span className="text-xs md:text-sm font-sans font-bold tracking-[0.3em] uppercase text-[#8FA3A6] mb-6 block">
                    {philosophySlides[activePhilosophy].kicker}
                  </span>

                  <h3 className="font-serif text-3xl sm:text-4xl md:text-6xl text-[#111111] leading-[1.25] tracking-tight mb-6">
                    {philosophySlides[activePhilosophy].quotePart1}{" "}
                    <span className="italic font-normal text-[#5A3728]">
                      {philosophySlides[activePhilosophy].highlight}
                    </span>{" "}
                    {philosophySlides[activePhilosophy].quotePart2}
                  </h3>

                  <p className="font-sans text-base sm:text-lg md:text-xl text-[#6A6A6A] leading-relaxed max-w-2xl font-light">
                    {philosophySlides[activePhilosophy].subtext}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Nav Button */}
            <button
              onClick={() => setActivePhilosophy((prev) => (prev + 1) % philosophySlides.length)}
              className="p-3 text-ink/30 hover:text-ink transition-colors duration-300 focus:outline-none"
              aria-label="Next philosophy slide"
            >
              <ChevronRight className="w-7 h-7 md:w-8 md:h-8" strokeWidth={1} />
            </button>
          </div>

          {/* Dots Pagination */}
          <div className="flex items-center gap-2 mt-10 md:mt-12">
            {philosophySlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActivePhilosophy(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activePhilosophy === index ? "w-8 bg-[#5A3728]" : "w-2 bg-ink/20 hover:bg-ink/40"
                }`}
                aria-label={`Go to philosophy slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Bottom Studio Tagline */}
          <div className="mt-12 pt-8 border-t border-[#111111]/10 w-full max-w-md">
            <span className="text-[10px] md:text-xs font-sans tracking-[0.25em] uppercase text-[#6A6A6A] font-medium block">
              {philosophySlides[activePhilosophy].tagline}
            </span>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="w-full max-w-container-max mx-auto px-6 md:px-margin-desktop py-24 md:py-36 flex flex-col items-center justify-center text-center scroll-mt-36">
        <h2 className="font-serif text-4xl sm:text-6xl md:text-[56px] font-semibold mb-8 max-w-2xl leading-tight">
          Design Your Way of Being.
        </h2>
        <Link
          href="mailto:contact@planbe.studio"
          className="inline-flex text-sm leading-[1.5] tracking-[0.2em] font-bold uppercase border-b-2 border-ink pb-1 hover:text-ochre hover:border-ochre transition-colors duration-300"
        >
          Request a Consultation →
        </Link>
      </section>
    </>
  );
}
