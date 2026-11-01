import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { teamMembers } from "@/data/team";

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);

  if (!member) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white w-full text-[#111111] pt-32 pb-24 px-6 md:px-margin-desktop">
      <div className="max-w-[1280px] mx-auto">
        {/* Top Back Link matching reference screenshot */}
        <div className="mb-10 sm:mb-14">
          <Link
            href="/about#team"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#8B6B5D] hover:text-[#111111] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>BACK TO TEAM</span>
          </Link>
        </div>

        {/* Two-Column Grid matching reference screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Portrait Photograph with Rounded Corners */}
          <div className="md:col-span-5 flex flex-col">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-[#F3F1EC] shadow-lg border border-black/5 flex items-center justify-center">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center grayscale contrast-110"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#F7F5F0] to-[#EBE7DF] text-[#8B6B5D]">
                  <div className="w-28 h-28 rounded-full border border-black/10 flex items-center justify-center mb-4 bg-white/60 shadow-inner">
                    <span className="font-serif text-4xl tracking-widest text-[#3E2723]">
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
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#111111] leading-[1.1] tracking-tight mb-3">
              {member.name}
            </h1>

            {/* Role & Company in Studio Brown */}
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#8B6B5D] mb-8 block">
              {member.role} {member.company && `| ${member.company}`}
            </span>

            <div className="w-full h-px bg-black/10 mb-8" />

            {/* Highlights Section */}
            {member.highlights && member.highlights.length > 0 && (
              <div className="mb-10">
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#6A6A6A] block mb-4">
                  HIGHLIGHTS
                </span>
                <ul className="space-y-3">
                  {member.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#444444] leading-relaxed">
                      <span className="text-[#8B6B5D] text-lg leading-none mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Profile Section */}
            {member.profile && member.profile.length > 0 && (
              <div>
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#6A6A6A] block mb-4">
                  PROFILE
                </span>
                <div className="space-y-5">
                  {member.profile.map((paragraph, idx) => (
                    <p key={idx} className="text-sm sm:text-base text-[#555555] font-light leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
