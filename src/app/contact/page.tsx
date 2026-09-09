"use client";

import React from "react";
import { Mail, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
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
    <main className="min-h-screen bg-[#F9F9F9] w-full font-sans text-[#111111] overflow-hidden pt-32 pb-24 px-6 md:px-margin-desktop">
      <div className="max-w-[1200px] w-full mx-auto">
        
        {/* Hero Section */}
        <div className="mb-16 md:mb-24 pt-8 md:pt-12">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
            <span className="block text-sm font-semibold tracking-widest uppercase text-[#5A3728] mb-6">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Column - Info */}
        <div className="flex flex-col gap-12">
          {/* Studio Section */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#5A3728]">
              Studio
            </h3>
            <a href="https://share.google/xrNqoxEYLSRf465o6" target="_blank" rel="noopener noreferrer" className="font-serif text-3xl md:text-4xl text-[#888888] leading-tight hover:text-[#5A3728] transition-colors block">
              First Floor, Velleparambil building,<br />
              Kaloor, Cochin-17, Kerala
            </a>
          </div>

          {/* Inquiries Section */}
          <div className="flex flex-col gap-6 mt-4">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#5A3728]">
              Inquiries
            </h3>
            <div className="flex flex-col gap-4">
              <a href="mailto:info@planbe.co.in" className="flex items-center gap-3 text-sm md:text-base text-[#333333] hover:text-[#5A3728] transition-colors">
                <Mail className="w-5 h-5 text-[#5A3728]" strokeWidth={1.5} />
                <span>info@planbe.co.in</span>
              </a>
              <a href="tel:+918848162343" className="flex items-center gap-3 text-sm md:text-base text-[#333333] hover:text-[#5A3728] transition-colors">
                <Phone className="w-5 h-5 text-[#5A3728]" strokeWidth={1.5} />
                <span>+91 88481 62343</span>
              </a>
              <a href="https://wa.me/918848162343" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm md:text-base text-[#333333] hover:text-[#5A3728] transition-colors">
                <MessageCircle className="w-5 h-5 text-[#5A3728]" strokeWidth={1.5} />
                <span>+91 88481 62343</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="w-full">
          <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Full Name */}
              <div className="flex flex-col gap-2 relative">
                <label htmlFor="name" className="text-xs font-bold tracking-[0.15em] uppercase text-[#5A3728]">
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
                <label htmlFor="email" className="text-xs font-bold tracking-[0.15em] uppercase text-[#5A3728]">
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
                <label htmlFor="phone" className="text-xs font-bold tracking-[0.15em] uppercase text-[#5A3728]">
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
                <label htmlFor="projectType" className="text-xs font-bold tracking-[0.15em] uppercase text-[#5A3728]">
                  Project Type
                </label>
                <select 
                  id="projectType"
                  className="w-full border-b border-[#E0E0E0] bg-transparent py-3 text-sm text-[#111111] focus:outline-none focus:border-[#5A3728] transition-colors appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled className="text-[#A0A0A0]">Select project type</option>
                  <option value="Residential Architecture" className="text-[#111111]">Residential Architecture</option>
                  <option value="Commercial Architecture" className="text-[#111111]">Commercial Architecture</option>
                  <option value="Hospitality" className="text-[#111111]">Hospitality</option>
                  <option value="Interior Design" className="text-[#111111]">Interior Design</option>
                  <option value="Landscape Design" className="text-[#111111]">Landscape Design</option>
                  <option value="Project Consultancy" className="text-[#111111]">Project Consultancy</option>
                  <option value="Mixed Use" className="text-[#111111]">Mixed Use</option>
                </select>
                <div className="absolute right-0 bottom-4 pointer-events-none">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="#5A3728" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Project Description */}
            <div className="flex flex-col gap-2 mb-10 relative">
              <label htmlFor="description" className="text-xs font-bold tracking-[0.15em] uppercase text-[#5A3728]">
                Project Description *
              </label>
              <textarea 
                id="description" 
                rows={3}
                className="w-full border-b border-[#E0E0E0] bg-transparent py-3 text-sm text-[#111111] placeholder-[#A0A0A0] focus:outline-none focus:border-[#5A3728] transition-colors resize-none"
                placeholder="Tell us about your vision..."
                required
              />
            </div>

            <div className="w-full pt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
              <span className="text-[10px] text-[#A0A0A0] tracking-wider uppercase self-start sm:self-center">
                * Required fields
              </span>
              
              <button 
                type="submit"
                className="w-full sm:w-auto px-10 py-4 bg-[#5A3728] hover:bg-[#3E2723] text-white font-sans text-xs tracking-[0.2em] font-bold uppercase transition-colors duration-300 flex items-center justify-center gap-3"
              >
                Send Inquiry
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

      </div>

        {/* Careers Section */}
        <div className="mt-32 pt-16 border-t border-[#E0E0E0]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <h2 className="font-serif text-5xl md:text-6xl leading-none text-[#111111] tracking-tight">
              Open <span className="text-[#5A3728] italic font-light">Roles</span>
            </h2>
            <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#888888] max-w-[200px] md:text-right md:pb-2">
              Select a role to view details and submit application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role, idx) => (
              <div 
                key={idx} 
                className="group bg-white rounded-xl p-8 flex flex-col gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E0E0E0]/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer"
              >
                <div>
                  <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#5A3728] mb-3">
                    {role.category}
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#111111] group-hover:text-[#5A3728] transition-colors mb-3">
                    {role.title}
                  </h3>
                  <div className="text-[10px] font-semibold tracking-widest uppercase text-[#A0A0A0]">
                    {role.location} • {role.type}
                  </div>
                </div>
                
                <p className="text-sm text-[#888888] leading-relaxed flex-grow font-light">
                  {role.description}
                </p>
                
                <a 
                  href={role.link}
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase text-[#5A3728] group-hover:text-[#3E2723] transition-colors mt-4"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <FaqSection />

      </div>
    </main>
  );
}