"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, X } from "lucide-react";
import { TeamMember } from "@/data/team";

interface TeamMemberModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

export default function TeamMemberModal({ member, onClose }: TeamMemberModalProps) {
  useEffect(() => {
    if (!member) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [member, onClose]);

  if (!member) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 sm:p-6 md:p-10 overflow-y-auto animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-white text-[#111111] rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden my-auto border border-black/5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar with Back Link & Close Button */}
        <div className="flex items-center justify-between px-6 sm:px-10 py-5 sm:py-6 border-b border-black/5 bg-[#FAFAFA]">
          <button
            onClick={onClose}
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#6A6A6A] hover:text-[#111111] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>BACK TO TEAM</span>
          </button>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#6A6A6A] hover:text-black hover:bg-black/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Two-Column Layout Matching Reference Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10 md:p-12 max-h-[82vh] overflow-y-auto">
          {/* Left Column: Portrait Photograph with Rounded Corners */}
          <div className="md:col-span-5 flex flex-col">
            <div className="relative w-full aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden bg-[#F3F1EC] shadow-md border border-black/5 flex items-center justify-center">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center grayscale contrast-110"
                  sizes="(max-width: 768px) 100vw, 420px"
                  priority
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#F7F5F0] to-[#EBE7DF] text-[#8B6B5D]">
                  <div className="w-24 h-24 rounded-full border border-black/10 flex items-center justify-center mb-4 bg-white/60 shadow-inner">
                    <span className="font-serif text-3xl tracking-widest text-[#3E2723]">
                      {member.name.replace(/^Ar\.\s*/, '').split(' ').map(n => n[0]).slice(0, 2).join('')}
                    </span>
                  </div>
                  <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#8B6B5D]/70">
                    Plan Bē Studio
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Name, Role, Highlights, and Profile */}
          <div className="md:col-span-7 flex flex-col justify-start">
            {/* Name */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#111111] leading-[1.15] tracking-tight mb-2">
              {member.name}
            </h2>

            {/* Role & Company (Teal Blue / Uppercase tracking) */}
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#0077B6] mb-6 block">
              {member.role} {member.company && `| ${member.company}`}
            </span>

            <div className="w-full h-px bg-black/10 mb-6" />

            {/* Highlights Section */}
            {member.highlights && member.highlights.length > 0 && (
              <div className="mb-8">
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#6A6A6A] block mb-3.5">
                  HIGHLIGHTS
                </span>
                <ul className="space-y-2">
                  {member.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-[15px] text-[#444444] leading-relaxed">
                      <span className="text-[#0077B6] text-lg leading-none mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Profile Section */}
            {member.profile && member.profile.length > 0 && (
              <div>
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#6A6A6A] block mb-3.5">
                  PROFILE
                </span>
                <div className="space-y-4">
                  {member.profile.map((paragraph, idx) => (
                    <p key={idx} className="text-sm sm:text-[15px] text-[#555555] font-light leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
