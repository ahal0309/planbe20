"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { StaggerText } from "@/components/ui/stagger-text";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  const projects = [
    {
      title: "Villa Sereno",
      category: "RESIDENTIAL",
      location: "Kottayam, Kerala, India · 2024",
      image: "/villa-sereno.jpg",
      href: "/projects/villa-sereno",
      tall: true,
    },
    {
      title: "The Glass House",
      category: "COMMERCIAL",
      location: "Kochi, Kerala, India · 2023",
      image: "/glass-house.jpg",
      href: "/projects/glass-house",
      tall: false,
    },
    {
      title: "Modern Living",
      category: "INTERIOR",
      location: "Trivandrum, Kerala · 2024",
      image: "/3-trees-banner.jpg",
      href: "/projects/modern-living",
      tall: false,
    },
    {
      title: "Entrance Courtyard",
      category: "RESIDENTIAL",
      location: "Thrissur, Kerala · 2023",
      image: "/entrance-01.jpg",
      href: "/projects/entrance-courtyard",
      tall: false,
    },
    {
      title: "Nature's Edge",
      category: "HOSPITALITY",
      location: "Wayanad, Kerala · 2024",
      image: "/ochre-5.jpg",
      href: "/projects/natures-edge",
      tall: false,
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#F9F6F0] w-full font-sans text-[#111111] overflow-hidden pt-32 pb-24 px-6 md:px-margin-desktop">
      {/* Top Right Palm Leaf Shadow Overlay with Gentle Breeze Animation */}
      <motion.div
        animate={{
          x: [0, 8, -4, 6, 0],
          y: [0, -6, 5, -3, 0],
          rotate: [0, 1.2, -0.8, 1, 0],
          scale: [1, 1.02, 0.99, 1.01, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-[420px] md:w-[650px] lg:w-[750px] h-[420px] md:h-[650px] lg:h-[750px] pointer-events-none select-none z-0 opacity-45 mix-blend-multiply origin-top-right"
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
      </motion.div>

      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col pt-12 md:pt-16">
        {/* 1. Hero Section matching Services & About Us pages */}
        <div className="mb-16 md:mb-24 max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-sm leading-[1.5] tracking-[0.2em] font-bold uppercase text-[#6A6A6A] mb-4 block">
              Our Portfolio
            </span>
            <StaggerText
              className="font-serif text-4xl sm:text-5xl md:text-7xl leading-none text-[#111111] tracking-tight mb-8"
              text="Selected Works"
              direction="bottom"
              stagger={0.08}
            />
            <p className="text-lg md:text-xl text-[#6A6A6A] leading-relaxed max-w-2xl font-light">
              Explore a curated collection of architectural and interior spaces designed with purpose, context, and enduring quality.
            </p>
          </motion.div>
        </div>

        {/* 2. Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
            >
              <Link
                href={project.href}
                className="group flex flex-col bg-white border border-[#111111]/5 rounded-none overflow-hidden hover:shadow-[0_20px_45px_rgba(0,0,0,0.06)] hover:border-[#111111]/15 transition-all duration-500 h-full"
              >
                {/* Project Image */}
                <div className="relative w-full h-[320px] sm:h-[360px] bg-[#EAE8E4] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-[#111111]/10 flex items-center justify-center text-[#111111] shadow-sm transition-all duration-300 group-hover:bg-[#111111] group-hover:text-white group-hover:scale-105">
                    <ArrowUpRight size={18} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-7 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#8FA3A6] block mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif text-[#111111] font-medium mb-3 group-hover:text-[#3E2723] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#6A6A6A] block">
                      {project.location}
                    </span>
                  </div>

                  <div className="mt-6 pt-5 border-t border-[#111111]/5 flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#111111] group-hover:text-[#3E2723] transition-colors">
                      View Project
                    </span>
                    <span className="font-mono text-xs text-[#8FA3A6]">
                      0{index + 1}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* 3. Bottom Gallery Callout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="w-full border-t border-[#111111]/10 pt-16 pb-8"
        >
          <Link
            href="/gallery"
            className="flex items-center justify-between group p-6 sm:p-10 bg-white border border-[#111111]/5 hover:border-[#111111]/15 hover:shadow-md transition-all duration-300"
          >
            <div>
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#8FA3A6] block mb-2">
                Visual Archive
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#111111] group-hover:text-[#3E2723] transition-colors">
                Explore Studio Gallery
              </h2>
            </div>
            <div className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-all duration-300 group-hover:scale-105">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
