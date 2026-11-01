"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Discipline {
  id: string;
  num: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

const disciplines: Discipline[] = [
  {
    id: "arch",
    num: "01",
    title: "Architectural Design",
    description: "We create thoughtful architectural spaces that balance form, context, and function.",
    image: "/akhil.png",
    href: "/services",
  },
  {
    id: "interior",
    num: "02",
    title: "Interior Design",
    description: "We create thoughtfully designed interiors that balance aesthetics, comfort, and functionality.",
    image: "/amal.png",
    href: "/services",
  },
  {
    id: "landscape",
    num: "03",
    title: "Landscape Design",
    description: "We design meaningful outdoor environments that connect people, architecture, and nature.",
    image: "/joseph.png",
    href: "/services",
  },
  {
    id: "pm",
    num: "04",
    title: "Project Management",
    description: "We coordinate every stage of the project to deliver quality, clarity, and efficiency.",
    image: "/unnikrishnan.png",
    href: "/services",
  },
];

export default function ArchitecturalExpertise() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section 
      id="expertise" 
      className="w-full bg-[#3E2723] text-surface py-20 md:py-32 scroll-mt-36 overflow-hidden border-t border-surface/10"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-margin-desktop">
        {/* Header Row: Teal Blue Italic Serif Heading on Left + Explore All on Right */}
        <div className="flex flex-row justify-between items-end mb-10 md:mb-14">
          <div>
            <h2 
              className="font-serif italic font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-tight text-white tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
            >
              Architectural Expertise
            </h2>
          </div>

          <Link
            href="/services"
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-surface-dim/80 hover:text-white transition-colors duration-300 pb-1"
          >
            <span>EXPLORE ALL</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 4 Cards Container: Interactive Expanding Flex Row on Desktop */}
        <div
          className="flex flex-col md:flex-row gap-4 lg:gap-5 w-full h-auto md:h-[580px] lg:h-[640px]"
          onMouseLeave={() => setHoveredIdx(null)}
        >
          {disciplines.map((item, index) => {
            const isHovered = hoveredIdx === index;
            const hasHover = hoveredIdx !== null;

            return (
              <div
                key={item.id}
                tabIndex={0}
                role="region"
                aria-label={`${item.num} ${item.title}`}
                onMouseEnter={() => setHoveredIdx(index)}
                onFocus={() => setHoveredIdx(index)}
                onBlur={() => setHoveredIdx(null)}
                className={`group relative overflow-hidden rounded-[24px] sm:rounded-[28px] md:rounded-[32px] cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-white select-none
                  w-full h-[400px] sm:h-[460px] md:h-full
                  transition-[flex,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${hasHover ? (isHovered ? "md:flex-[3.2]" : "md:flex-[1]") : "md:flex-[1]"}
                `}
              >
                {/* Full-Bleed Architectural Photograph */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  priority={index < 2}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={`object-cover object-center transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isHovered ? "scale-105" : "scale-100"
                  }`}
                />

                {/* Refined Dark Gradient Overlays for Readability */}
                <div className="absolute inset-0 bg-black/25 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                {/* Top Badge (01, 02...) & Top-Right Arrow Button */}
                <div className="absolute top-5 sm:top-6 left-5 sm:left-6 right-5 sm:right-6 flex justify-between items-center z-10 pointer-events-none">
                  {/* Number Badge */}
                  <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-white/90 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
                    {item.num}
                  </span>

                  {/* Circular Arrow Icon */}
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border transition-all duration-500 backdrop-blur-md ${
                      isHovered
                        ? "bg-white border-white rotate-45 scale-110 shadow-lg"
                        : "bg-black/40 border-white/20 text-white"
                    }`}
                  >
                    <ArrowUpRight
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${
                        isHovered ? "!text-black !stroke-black" : "!text-white !stroke-white"
                      }`}
                      strokeWidth={2.2}
                    />
                  </div>
                </div>

                {/* Bottom Content Area */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 md:p-8 z-10 flex flex-col justify-end">
                  {/* Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-[28px] lg:text-3xl font-medium text-white mb-2 leading-snug drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                    {item.title}
                  </h3>

                  {/* Expanding Details on Hover (Desktop) or always readable on mobile */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isHovered
                        ? "opacity-100 max-h-48 translate-y-0 mt-2"
                        : "md:opacity-0 md:max-h-0 md:translate-y-4 opacity-100 max-h-48 mt-2"
                    }`}
                  >
                    <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-lg mb-4 drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
                      {item.description}
                    </p>

                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-white hover:text-ochre transition-colors duration-300"
                    >
                      <span>EXPLORE DISCIPLINE</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
