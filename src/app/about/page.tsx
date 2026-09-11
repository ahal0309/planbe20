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
    <main className="min-h-screen bg-[#F7F5F2] w-full font-sans text-[#111111] overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[85vh] flex items-end pb-12 md:pb-24 px-6 md:px-margin-desktop">
        <div className="absolute inset-0 z-0">
          <Image
            src="/long_view.png"
            alt="About PlanBē"
            fill
            priority
            className="object-cover brightness-[0.85]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col pt-32">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <StaggerText
              className="font-serif text-6xl sm:text-7xl md:text-9xl leading-none text-white tracking-tight"
              text="About Us"
              direction="bottom"
              stagger={0.1}
            />
          </motion.div>
        </div>
      </section>

      {/* 2. Who We Are Section */}
      <section className="w-full py-20 md:py-32 bg-transparent border-b border-[#111111]/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-4 flex flex-col justify-start"
          >
            <h2 className="font-serif text-5xl md:text-6xl font-semibold leading-tight text-[#111111]">
              Who We Are
            </h2>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-8 flex flex-col"
          >
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-[#111111] mb-12 max-w-3xl">
              Plan Be Design Studio is a Kochi-based architectural and interior design practice established in 2018, creating spaces that are climate-responsive, contextual, and built to last. Since our inception, we have delivered a diverse portfolio of projects across residential, commercial, hospitality, and institutional sectors, growing into a multidisciplinary studio that offers complete design solutions from concept to completion.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-6">
                <p className="text-lg text-[#6A6A6A] leading-relaxed">
                  Our work is rooted in an understanding of Kerala's tropical climate, culture, and landscape. From climate-responsive homes and thoughtfully crafted interiors to commercial developments, resorts, community halls, and churches, we design spaces that balance functionality, sustainability, and timeless aesthetics.
                </p>
                <p className="text-lg text-[#6A6A6A] leading-relaxed">
                  At Plan Be Design Studio, we believe architecture should do more than look beautiful—it should perform. Every project is shaped by its site, environment, and the people who will experience it, resulting in spaces that are comfortable, efficient, and enduring.
                </p>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-[#6A6A6A] leading-relaxed">
                  Beyond design, we provide comprehensive project management and site supervision services, ensuring seamless execution at every stage. From the initial idea to the final handover, we are committed to delivering quality, precision, and a collaborative design experience.
                </p>
                <p className="text-lg text-[#6A6A6A] leading-relaxed">
                  With years of experience and over 100 completed projects, our approach remains unchanged: thoughtful design, honest materials, and architecture that truly belongs to its place and purpose.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Our Approach Section */}
      <section className="w-full py-24 md:py-40 px-6 md:px-margin-desktop bg-[#F7F5F2]/50">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="w-full aspect-square md:aspect-[4/5] bg-[#EAE8E4] relative overflow-hidden lg:sticky lg:top-24 rounded-sm shadow-sm"
          >
            <Image
              src="/akhil.png"
              alt="Our Approach"
              fill
              className="object-cover transition-all duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col gap-10 lg:pl-10"
          >
            <div>
              <h3 className="font-serif text-5xl md:text-7xl text-[#111111] mb-6">
                Our Philosophy
              </h3>
              <p className="text-[#6A6A6A] font-bold leading-relaxed md:text-xl">
                We seek inspiration in simplicity, finding harmony between architecture, nature, and everyday life.
              </p>
            </div>

            <div className="space-y-8 pt-6 border-t border-[#111111]/10">
              {approachItems.map((item, index) => (
                <p key={index} className="text-[#6A6A6A] leading-relaxed md:text-lg">
                  {item.description}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Our Vision Section */}
      <section className="w-full py-20 md:py-32 bg-transparent border-t border-[#111111]/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-4 flex flex-col justify-start"
          >
            <h2 className="font-serif text-5xl md:text-6xl font-semibold leading-tight text-[#111111]">
              Our Vision
            </h2>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-8 flex flex-col justify-center"
          >
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-[#111111] mb-8">
              To shape a built environment where architecture responds intelligently to place, enhances everyday experiences, and contributes positively to the communities it serves.
            </p>
            <p className="text-lg md:text-xl text-[#6A6A6A] leading-relaxed">
              Through thoughtful design, innovation, and a commitment to quality, we aspire to create timeless spaces that inspire, endure, and leave a lasting impact on people and their surroundings.
            </p>
          </motion.div>
        </div>
      </section>

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
