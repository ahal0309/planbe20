"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { StaggerText } from "@/components/ui/stagger-text";

export default function ServicesPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  const services = [
    {
      num: "01",
      title: "Architectural Design",
      tag: "Residential · Commercial · Hospitality · Institutional",
      description:
        "We design buildings that respond to their context, climate, and purpose. From initial concepts and planning to detailed drawings, approvals, and construction support, our architectural services are tailored to create spaces that are functional, sustainable, and timeless. Every project is carefully developed to balance aesthetics, performance, and the unique aspirations of each client.",
      image: "/akhil.png",
      href: "/#projects",
      linkText: "View Projects",
    },
    {
      num: "02",
      title: "Interior Design",
      tag: "Spaces Designed Around People",
      description:
        "Our interior design approach focuses on creating environments that are elegant, functional, and deeply personal. Through careful attention to materials, lighting, proportions, and detail, we craft interiors that reflect the character of the people who use them while enhancing comfort and everyday living. The result is a cohesive space that feels refined, practical, and enduring.",
      image: "/amal.png",
      href: "/#projects",
      linkText: "View Projects",
    },
    {
      num: "03",
      title: "Landscape Design",
      tag: "Bringing Nature Into Everyday Living",
      description:
        "We believe architecture and landscape should work together as one. Our landscape design services include site planning, planting design, outdoor living spaces, hardscape development, and ecological integration. By responding to the site's natural features and climate, we create outdoor environments that enrich the overall experience of a place and strengthen the connection between people and nature.",
      image: "/joseph.png",
      href: "/#projects",
      linkText: "View Projects",
    },
    {
      num: "04",
      title: "Project Management & Site Supervision",
      tag: "Seamless Execution From Design to Completion",
      description:
        "A successful project requires more than great design—it demands careful coordination and execution. Our project management and site supervision services ensure that every stage of construction is carried out with accuracy, quality, and efficiency. We oversee consultants, contractors, vendors, budgets, timelines, and quality control, providing clients with a streamlined and transparent process from groundbreaking to final handover.",
      image: "/unnikrishnan.png",
      href: "/#contact",
      linkText: "Contact Us",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F7F5F2] w-full font-sans text-[#111111] overflow-hidden pt-32 pb-24 px-6 md:px-margin-desktop">
      <div className="max-w-[1400px] mx-auto flex flex-col pt-12 md:pt-16">
        {/* Header Section */}
        <div className="mb-20 md:mb-28 max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-sm leading-[1.5] tracking-[0.2em] font-bold uppercase text-[#6A6A6A] mb-4 block">
              What We Do
            </span>
            <StaggerText
              className="font-serif text-4xl sm:text-5xl md:text-7xl leading-none text-[#111111] tracking-tight mb-8"
              text="Our Services"
              direction="bottom"
              stagger={0.08}
            />
            <p className="text-lg md:text-xl text-[#6A6A6A] leading-relaxed max-w-2xl font-light">
              Architecture, interiors, landscapes, and project delivery services crafted to create meaningful, climate-responsive spaces.
            </p>
          </motion.div>
        </div>

        {/* Services List Grid */}
        <div className="flex flex-col gap-12 md:gap-16 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="group w-full bg-white border border-[#111111]/5 rounded-md p-8 md:p-12 hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:border-[#111111]/10 transition-all duration-700"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* 1. Monospace Number & Image Block */}
                <div className="lg:col-span-4 flex items-center space-x-8">
                  <span className="font-mono text-lg md:text-xl text-[#8FA3A6] font-semibold tracking-wider">
                    {service.num}
                  </span>
                  <div className="relative w-44 sm:w-48 h-28 overflow-hidden rounded-sm bg-[#EAE8E4] flex-shrink-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 150px, 200px"
                    />
                  </div>
                </div>

                {/* 2. Title & Tag Block */}
                <div className="lg:col-span-4 flex flex-col">
                  <h3 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium leading-tight group-hover:text-[#8B6B5D] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#8FA3A6] mt-3 block">
                    {service.tag}
                  </span>
                </div>
 
                {/* 3. Description & Redirect Button Block */}
                <div className="lg:col-span-4 flex items-center justify-between gap-6 lg:pl-4">
                  <div className="flex flex-col flex-grow">
                    <p className="text-sm text-[#6A6A6A] leading-relaxed font-light mb-4">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="text-xs font-bold tracking-[0.15em] uppercase text-[#111111] hover:text-[#8B6B5D] transition-colors duration-300 w-fit"
                    >
                      {service.linkText}
                    </Link>
                  </div>
                  <Link
                    href={service.href}
                    className="flex-shrink-0 w-12 h-12 rounded-full border border-[#111111]/10 flex items-center justify-center text-[#111111] bg-transparent group-hover:bg-[#111111] group-hover:text-white transition-all duration-500 hover:scale-105 active:scale-95"
                    title={service.linkText}
                  >
                    <ArrowUpRight size={20} strokeWidth={1.5} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="w-full bg-[#8B6B5D] text-white rounded-md p-10 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 shadow-sm"
        >
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-6xl font-semibold mb-4 text-[#F7F5F2]">
              Think. Plan.Bē
            </h2>
            <p className="text-[#E5E0D8] leading-relaxed font-light text-lg md:text-xl">
              Whether you're building a home, developing a commercial project, or transforming an existing space, we partner with you to bring your vision to life through thoughtful design and meticulous execution.
            </p>
          </div>
          <Link
            href="/#contact"
            className="flex-shrink-0 bg-[#F7F5F2] hover:bg-white text-[#8B6B5D] px-8 py-4 rounded-sm transition-all duration-300 font-sans text-sm font-bold tracking-[0.2em] uppercase shadow-md hover:scale-105 active:scale-95"
          >
            Book a Consultation
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
