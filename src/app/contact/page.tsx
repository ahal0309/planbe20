"use client";

import React from "react";
import { Mail, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { StaggerText } from "@/components/ui/stagger-text";
import FaqSection from "@/components/FaqSection";

export default function ContactPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  const roles = [
    {
      category: "ARCHITECTURE",
      title: "Architect",
      location: "COCHIN, KERALA",
      type: "FULL TIME",
      description: "Junior Architect (0-2 Years Experience). We are seeking a passionate and detail-oriented architect with 0-2 years of experience to join our studio. The ideal candidate should have a strong design sensibility, proficiency in AutoCAD, SketchUp, Lumion & D5, and a desire to contribute to the design and delivery of high-end projects.",
      link: "mailto:info@planbe.co.in?subject=Application for Architect",
    },
    {
      category: "ARCHITECTURE",
      title: "Architectural Draftsman",
      location: "COCHIN / DUBAI",
      type: "FULL TIME",
      description: "Architectural Draftsman. We are looking for a skilled and detail-oriented Architectural Draftsman to join our team. The ideal candidate should be proficient in AutoCAD, possess a strong understanding of architectural drawings and construction detailing, and be able to produce accurate working drawings for high-end projects. Experience in coordinating with architects and consultants is an advantage.",
      link: "mailto:info@planbe.co.in?subject=Application for Architectural Draftsman",
    },
    {
      category: "INTERIOR DESIGN",
      title: "Interior Designer",
      location: "COCHIN, KERALA",
      type: "FULL TIME",
      description: "Bespoke Interior Designer with expertise in residential and commercial space planning, material selection, moodboards, 3D visualization, and site execution.",
      link: "mailto:info@planbe.co.in?subject=Application for Interior Designer",
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

      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col pt-12 md:pt-16">

        {/* Hero Section */}
        <div className="mb-16 md:mb-24 max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-sm leading-[1.5] tracking-[0.2em] font-bold uppercase text-[#6A6A6A] mb-4 block">
              Get in Touch
            </span>
            <StaggerText
              className="font-serif text-4xl sm:text-5xl md:text-7xl leading-none text-[#111111] tracking-tight mb-8"
              text="Contact Us"
              direction="bottom"
              stagger={0.08}
            />
            <p className="text-lg md:text-xl text-[#6A6A6A] leading-relaxed max-w-2xl font-light">
              We would love to hear from you. Whether you have a project in mind or just want to say hello, feel free to reach out to our team.
            </p>
          </motion.div>
        </div>

        {/* Contact Main Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="w-full bg-white border border-[#111111]/5 rounded-md p-8 md:p-14 hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:border-[#111111]/10 transition-all duration-700 mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left Column - Info */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-12">
              <div className="flex flex-col gap-10">
                {/* Studio Section */}
                <div className="flex flex-col gap-4">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#8FA3A6]">
                    Our Studio
                  </span>
                  <a
                    href="https://share.google/xrNqoxEYLSRf465o6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#111111] leading-snug hover:text-[#5A3728] transition-colors block"
                  >
                    First Floor, Velleparambil building,<br />
                    Kaloor, Cochin-17, Kerala
                  </a>
                  <p className="text-sm text-[#6A6A6A] font-light mt-1">
                    Open Monday to Saturday, 9:30 AM — 6:30 PM
                  </p>
                </div>

                {/* Inquiries Section */}
                <div className="flex flex-col gap-4 pt-4 border-t border-[#111111]/5">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#8FA3A6]">
                    Inquiries & Connect
                  </span>
                  <div className="flex flex-col gap-4 mt-1">
                    <a
                      href="mailto:info@planbe.co.in"
                      className="group flex items-center gap-3.5 text-base text-[#111111] hover:text-[#5A3728] transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#F9F6F0] flex items-center justify-center text-[#5A3728] group-hover:bg-[#5A3728] group-hover:text-white transition-all duration-300">
                        <Mail className="w-4 h-4" strokeWidth={1.5} />
                      </div>
                      <span className="font-light">info@planbe.co.in</span>
                    </a>
                    <a
                      href="tel:+918848162343"
                      className="group flex items-center gap-3.5 text-base text-[#111111] hover:text-[#5A3728] transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#F9F6F0] flex items-center justify-center text-[#5A3728] group-hover:bg-[#5A3728] group-hover:text-white transition-all duration-300">
                        <Phone className="w-4 h-4" strokeWidth={1.5} />
                      </div>
                      <span className="font-light">+91 88481 62343</span>
                    </a>
                    <a
                      href="https://wa.me/918848162343"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3.5 text-base text-[#111111] hover:text-[#5A3728] transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#F9F6F0] flex items-center justify-center text-[#5A3728] group-hover:bg-[#5A3728] group-hover:text-white transition-all duration-300">
                        <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                      </div>
                      <span className="font-light">+91 88481 62343 (WhatsApp)</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Social / Motto note */}
              <div className="p-6 rounded-md bg-[#F9F6F0] border border-[#111111]/5">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#8FA3A6] block mb-2">
                  Plan Bē Philosophy
                </span>
                <p className="text-xs text-[#6A6A6A] leading-relaxed font-light">
                  Every project begins with a conversation. Share your aspirations and we will build thoughtful, contextual architecture together.
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="mb-8">
                <h3 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium leading-tight">
                  Send an Inquiry
                </h3>
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#8FA3A6] mt-2 block">
                  Fill in the details below and we will respond promptly
                </span>
              </div>

              <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Full Name */}
                  <div className="flex flex-col gap-2 relative">
                    <label htmlFor="name" className="text-xs font-bold tracking-[0.15em] uppercase text-[#6A6A6A]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full border-b border-[#E0E0E0] bg-transparent py-3 text-sm text-[#111111] placeholder-[#A0A0A0] focus:outline-none focus:border-[#5A3728] transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  {/* Email Address */}
                  <div className="flex flex-col gap-2 relative">
                    <label htmlFor="email" className="text-xs font-bold tracking-[0.15em] uppercase text-[#6A6A6A]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full border-b border-[#E0E0E0] bg-transparent py-3 text-sm text-[#111111] placeholder-[#A0A0A0] focus:outline-none focus:border-[#5A3728] transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Phone Number */}
                  <div className="flex flex-col gap-2 relative">
                    <label htmlFor="phone" className="text-xs font-bold tracking-[0.15em] uppercase text-[#6A6A6A]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full border-b border-[#E0E0E0] bg-transparent py-3 text-sm text-[#111111] placeholder-[#A0A0A0] focus:outline-none focus:border-[#5A3728] transition-colors"
                      placeholder="+91 000 000 0000"
                      onInput={(e) => {
                        e.currentTarget.value = e.currentTarget.value.replace(/[^0-9+\s]/g, '');
                      }}
                    />
                  </div>

                  {/* Project Type */}
                  <div className="flex flex-col gap-2 relative">
                    <label htmlFor="projectType" className="text-xs font-bold tracking-[0.15em] uppercase text-[#6A6A6A]">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      className="w-full border-b border-[#E0E0E0] bg-transparent py-3 text-sm text-[#111111] focus:outline-none focus:border-[#5A3728] transition-colors appearance-none cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled className="text-[#A0A0A0]">Select project type</option>
                      <option value="Architectural Design" className="text-[#111111]">Architectural Design</option>
                      <option value="Interior Design" className="text-[#111111]">Interior Design</option>
                      <option value="Landscape Design" className="text-[#111111]">Landscape Design</option>
                      <option value="Project Management & Site Supervision" className="text-[#111111]">Project Management & Site Supervision</option>
                      <option value="Residential" className="text-[#111111]">Residential</option>
                      <option value="Commercial / Hospitality" className="text-[#111111]">Commercial / Hospitality</option>
                    </select>
                    <div className="absolute right-0 bottom-4 pointer-events-none">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="#5A3728" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <div className="flex flex-col gap-2 mb-10 relative">
                  <label htmlFor="description" className="text-xs font-bold tracking-[0.15em] uppercase text-[#6A6A6A]">
                    Project Description *
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    className="w-full border-b border-[#E0E0E0] bg-transparent py-3 text-sm text-[#111111] placeholder-[#A0A0A0] focus:outline-none focus:border-[#5A3728] transition-colors resize-none"
                    placeholder="Tell us about your site, requirements, timeline or vision..."
                    required
                  />
                </div>

                <div className="w-full pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <span className="text-[10px] text-[#A0A0A0] tracking-wider uppercase self-start sm:self-center">
                    * Required fields
                  </span>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-4 bg-[#5A3728] hover:bg-[#3E2723] text-white font-sans text-xs tracking-[0.2em] font-bold uppercase transition-all duration-300 flex items-center justify-center gap-3 rounded-sm shadow-sm hover:scale-[1.02] active:scale-95"
                  >
                    Send Inquiry
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>

          </div>
        </motion.div>

        {/* Careers Section */}
        <div className="mb-24 pt-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-sm leading-[1.5] tracking-[0.2em] font-bold uppercase text-[#6A6A6A] mb-3 block">
                Join Our Team
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-none text-[#111111] tracking-tight">
                Open <span className="text-[#5A3728] italic font-light">Roles</span>
              </h2>
            </div>
            <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#8FA3A6] max-w-[220px] md:text-right md:pb-1">
              Select a role below to view details and submit your portfolio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="group bg-white rounded-md p-8 md:p-10 flex flex-col justify-between gap-6 border border-[#111111]/5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:border-[#111111]/10 transition-all duration-500"
              >
                <div>
                  <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#8FA3A6] mb-3">
                    {role.category}
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#111111] group-hover:text-[#5A3728] transition-colors mb-2">
                    {role.title}
                  </h3>
                  <div className="text-[11px] font-semibold tracking-wider uppercase text-[#6A6A6A]">
                    {role.location} • {role.type}
                  </div>

                  <p className="text-sm text-[#6A6A6A] leading-relaxed font-light mt-4">
                    {role.description}
                  </p>
                </div>

                <a
                  href={role.link}
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase text-[#5A3728] group-hover:text-[#3E2723] transition-colors pt-4 border-t border-[#111111]/5"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <FaqSection />

      </div>
    </main>
  );
}