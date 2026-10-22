"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { StaggerText } from "@/components/ui/stagger-text";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AboutPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  const approachItems = [
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

  const teamMembers = [
    {
      name: "Ar. Bibite Joy",
      role: "Founder & Principal Architect",
    },
    {
      name: "Ar. Jeffin Kunjeria Varghese",
      role: "Associate Architect",
    },
    {
      name: "Ar. Jinsamol Reji",
      role: "Interior Design Head",
    },
    {
      name: "Ar. Anil Venugopal",
      role: "Visualisation Head",
    },
    {
      name: "Ar. Yadhu Krishnan",
      role: "Consulting Architect",
    },
    {
      name: "Ar. Arun Thobias",
      role: "Junior Architect",
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#F9F6F0] w-full font-sans text-[#111111] overflow-hidden pt-32 pb-24 px-6 md:px-margin-desktop">
      {/* Top Right Palm Leaf Shadow Overlay */}
      <div 
        className="absolute top-0 right-0 w-[420px] md:w-[650px] lg:w-[750px] h-[420px] md:h-[650px] lg:h-[750px] pointer-events-none select-none z-0 opacity-45 mix-blend-multiply transition-opacity duration-700"
        style={{
          maskImage: "radial-gradient(ellipse at top right, black 55%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse at top right, black 55%, transparent 85%)",
        }}
      >
        <Image
          src="/leaf-shadow.jpg"
          alt="Tropical leaf shadow"
          fill
          priority
          className="object-cover object-top-right filter contrast-125"
          sizes="(max-width: 768px) 420px, 750px"
        />
      </div>

      {/* 1. Hero Section */}
      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col pt-12 md:pt-16 mb-16 md:mb-24">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
          <span className="text-sm leading-[1.5] tracking-[0.2em] font-bold uppercase text-[#6A6A6A] mb-4 block">
            Who We Are
          </span>
          <StaggerText
            className="font-serif text-4xl sm:text-5xl md:text-7xl leading-none text-[#111111] tracking-tight mb-8"
            text="About Us"
            direction="bottom"
            stagger={0.08}
          />
          <p className="text-lg md:text-xl text-[#6A6A6A] leading-relaxed max-w-2xl font-light">
            A Kochi-based architectural and interior design practice creating spaces that are climate-responsive, contextual, and built to last.
          </p>
        </motion.div>
      </div>

      {/* About Sections Cards Container */}
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12 md:gap-16 mb-24">
        {/* 2. Who We Are Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="group w-full bg-white border border-[#111111]/5 rounded-md p-8 md:p-12 hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:border-[#111111]/10 transition-all duration-700"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-4 flex flex-col justify-start">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-[#111111] leading-tight">
                Who We Are
              </h2>
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#8FA3A6] mt-3 block">
                Studio Background & Roots
              </span>
            </div>

            <div className="lg:col-span-8 flex flex-col justify-center">
              <p className="font-sans text-base sm:text-lg md:text-xl text-[#6A6A6A] leading-relaxed text-left font-light">
                <strong className="font-bold text-[#111111]">Plan Be Design Studio</strong> is a Kochi-based architectural and interior design practice established in 2018, creating climate-responsive, contextual, and enduring spaces rooted in Kerala’s tropical climate, culture, and landscape. With over 100 completed projects across residential, commercial, hospitality, and institutional sectors, including homes, interiors, resorts, commercial developments, community halls, and churches, we offer comprehensive, multidisciplinary design solutions from concept to completion. Our approach balances functionality, sustainability, and timeless aesthetics, ensuring every project responds thoughtfully to its site, environment, and the people who experience it. Beyond design, we provide integrated project management and site supervision, delivering quality, precision, and seamless execution from the initial concept to final handover. Guided by thoughtful design, honest materials, and a commitment to performance, we create comfortable, efficient, and lasting spaces that truly belong to their place and purpose.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 3. Our Philosophy Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="group w-full bg-white border border-[#111111]/5 rounded-md p-8 md:p-12 hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:border-[#111111]/10 transition-all duration-700"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-4 flex flex-col justify-start">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-[#111111] leading-tight">
                Our Philosophy
              </h2>
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#8FA3A6] mt-3 block">
                Design Approach & Core Beliefs
              </span>
            </div>

            <div className="lg:col-span-8 flex flex-col justify-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-[#111111] mb-6 md:mb-8 text-left font-serif">
                We seek inspiration in simplicity, finding harmony between architecture, nature, and everyday life.
              </p>
              <div className="space-y-6">
                {approachItems.map((item, index) => (
                  <p key={index} className="text-base sm:text-lg md:text-xl text-[#6A6A6A] leading-relaxed text-left font-light">
                    {item.description}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4. Our Vision Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="group w-full bg-white border border-[#111111]/5 rounded-md p-8 md:p-12 hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:border-[#111111]/10 transition-all duration-700"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-4 flex flex-col justify-start">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-[#111111] leading-tight">
                Our Vision
              </h2>
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#8FA3A6] mt-3 block">
                Future & Community Impact
              </span>
            </div>
            
            <div className="lg:col-span-8 flex flex-col justify-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-[#111111] mb-6 md:mb-8 text-left font-serif">
                To shape a built environment where architecture responds intelligently to place, enhances everyday experiences, and contributes positively to the communities it serves.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-[#6A6A6A] leading-relaxed text-left font-light">
                Through thoughtful design, innovation, and a commitment to quality, we aspire to create timeless spaces that inspire, endure, and leave a lasting impact on people and their surroundings.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 5. Our Team Section */}
      <section className="w-full py-24 md:py-32 bg-[#3E2723]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-margin-desktop">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="text-sm leading-[1.5] tracking-[0.2em] font-bold uppercase text-[#E5E0D8]/80 mb-4 block">
                Our Team
              </span>
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-white">
                The Collective
              </h2>
            </motion.div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => scroll("left")} 
                className="p-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => scroll("right")} 
                className="p-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="relative -mx-6 px-6 md:-mx-[var(--margin-desktop)] md:px-[var(--margin-desktop)]">
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12 pt-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col group min-w-[280px] sm:min-w-[320px] max-w-[320px] snap-start shrink-0"
                >
                {/* Blueprint Drafting Style Placeholder Image */}
                <div className="w-full aspect-[3/4] bg-[#EAE8E4] border border-white/5 flex items-center justify-center relative overflow-hidden mb-5 rounded-sm transition-colors duration-500 group-hover:bg-[#F7F5F2]">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-30 stroke-[#8B6B5D] transition-opacity duration-300 group-hover:opacity-45"
                    strokeWidth="1"
                  >
                    <rect x="5" y="5" width="50" height="50" strokeDasharray="3 3" />
                    <line x1="5" y1="5" x2="55" y2="55" strokeDasharray="3 3" />
                    <line x1="55" y1="5" x2="5" y2="55" strokeDasharray="3 3" />
                  </svg>
                </div>

                <h3 className="font-serif text-2xl font-semibold text-white group-hover:text-[#E5E0D8] transition-colors duration-300">
                  {member.name}
                </h3>
                <span className="text-xs font-bold tracking-[0.15em] uppercase text-[#E5E0D8]/70 mt-1.5 block">
                  {member.role}
                </span>
              </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
