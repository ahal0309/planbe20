"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "HOME", href: "/", active: pathname === "/" },
    { label: "ABOUT", href: "/about", active: pathname === "/about" },
    { label: "SERVICES", href: "/services", active: pathname === "/services" },
    { label: "PROJECTS", href: "/projects", active: pathname === "/projects" },
    { label: "PROCESS", href: "/#process", active: pathname === "/#process" },
  ];

  return (
    <>
      <header className="fixed top-5 sm:top-7 md:top-8 left-0 right-0 z-50 w-full px-6 sm:px-10 md:px-14 lg:px-20 pointer-events-none">
        <div className="relative w-full max-w-[1600px] mx-auto flex items-center justify-between min-h-[56px]">
          
          {/* Top-Left: Exact Architectural Boxed Logo */}
          <Link
            href="/"
            className="pointer-events-auto flex items-center select-none group transition-transform duration-300 hover:scale-105 z-20"
          >
            <div className="relative flex items-center">
              <Image
                src="/logo_new.png"
                alt="PLAN Bë Architectural Design Studio"
                width={200}
                height={90}
                priority
                className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.85)] filter contrast-125"
              />
            </div>
          </Link>

          {/* Exact Center: Floating Glassmorphic Pill Navbar */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center px-4 py-1.5 rounded-full border border-black/10 bg-white/85 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-300 pointer-events-auto z-20">
            
            {/* Subtle Blueprint Grid Pattern */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(rgba(17,17,17,1) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,1) 1px, transparent 1px)`,
                backgroundSize: '10px 10px'
              }}
            />

            <nav className="flex items-center space-x-1 relative z-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative px-3.5 py-1.5 group transition-colors"
                >
                  <span
                    className={`font-sans text-[10.5px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                      link.active
                        ? "text-ink font-semibold"
                        : "text-ink/70 hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </span>

                  {/* Active Indicator Dot */}
                  {link.active && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-ink shadow-[0_0_4px_rgba(0,0,0,0.15)]" />
                  )}

                  {/* Hover line indicator */}
                  {!link.active && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-ink/50 transition-all duration-300 group-hover:w-3/5" />
                  )}
                </Link>
              ))}

              {/* CONTACT Pill Button */}
              <Link
                href="/#contact"
                className="ml-2 px-5 py-1.5 rounded-full bg-[#E5E0D8]/90 hover:bg-white text-ink text-[10.5px] font-bold tracking-[0.2em] uppercase shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-white/60 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                CONTACT
              </Link>
            </nav>
          </div>

          {/* Right: Mobile Menu Button */}
          <div className="lg:hidden pointer-events-auto ml-auto z-20">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg focus:outline-none"
            >
              <div className="w-4 h-3 flex flex-col justify-between items-center">
                <span
                  className={`w-full h-[1.5px] bg-white transition-all duration-300 ${
                    mobileMenuOpen ? "rotate-45 translate-y-[5px]" : ""
                  }`}
                />
                <span
                  className={`w-full h-[1.5px] bg-white transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-[1.5px] bg-white transition-all duration-300 ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-[5.5px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/85 backdrop-blur-xl flex flex-col items-center justify-center lg:hidden animate-in fade-in duration-300">
          <nav className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-serif text-2xl tracking-[0.15em] uppercase transition-colors duration-300 ${
                  link.active ? "text-white font-semibold" : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-8 py-3 rounded-full bg-[#E5E0D8] text-ink font-sans text-xs tracking-[0.2em] font-bold uppercase shadow-lg hover:bg-white transition-all"
            >
              CONTACT US
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
