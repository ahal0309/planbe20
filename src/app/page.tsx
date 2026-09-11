"use client";

import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

interface ApproachItem {
  title: string;
  description: string;
}

const approachItems: ApproachItem[] = [
  {
    title: "Understanding People",
    description:
      "We believe great architecture begins with understanding people. Every project is shaped around the way our clients live, work, and interact with their environment, creating spaces that are intuitive, functional, and deeply personal.",
  },
  {
    title: "Context & Craftsmanship",
    description:
      "Our design process is guided by context, craftsmanship, and long-term value. Rather than following trends, we focus on creating meaningful spaces with clarity, purpose, and a strong connection to their surroundings—spaces that remain relevant and enriching for years to come.",
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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
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

      {/* Philosophy / Our Approach Section */}
      <section id="studio" className="w-full bg-transparent py-24 md:py-40 relative scroll-mt-36">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full aspect-square md:aspect-[4/5] bg-[#EAE8E4] relative overflow-hidden lg:sticky lg:top-24 rounded-sm shadow-sm"
          >
            <Image
              src="/akhil.png"
              alt="Our Approach"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-10 lg:pl-10"
          >
            <div>
              <h3 className="font-serif text-5xl md:text-7xl text-ink mb-6">
                Our Philosophy
              </h3>
              <p className="text-ink/80 font-bold leading-relaxed md:text-xl">
                We seek inspiration in simplicity, finding harmony between architecture, nature, and everyday life.
              </p>
            </div>

            <div className="space-y-8 pt-6 border-t border-ink/10">
              {approachItems.map((item, index) => (
                <p key={index} className="text-ashen leading-relaxed md:text-lg">
                  {item.description}
                </p>
              ))}
            </div>
          </motion.div>
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
