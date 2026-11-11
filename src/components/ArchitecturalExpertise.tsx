"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

interface Discipline {
  id: string;
  num: string;
  title: string;
  subCategory: string;
  description: string;
  image: string;
  href: string;
}

const disciplines: Discipline[] = [
  {
    id: "arch",
    num: "01",
    title: "Architectural Design",
    subCategory: "ARCHITECTURE & PLANNING",
    description:
      "We create climate-responsive, enduring architectural spaces rooted in Kerala's culture, landscape, and context.",
    image: "/akhil.png",
    href: "/services",
  },
  {
    id: "interior",
    num: "02",
    title: "Interior Design",
    subCategory: "SPATIAL & INTERIOR",
    description:
      "Thoughtfully curated interiors balancing natural lighting, tactile materials, comfort, and timeless elegance.",
    image: "/amal.png",
    href: "/services",
  },
  {
    id: "landscape",
    num: "03",
    title: "Landscape Design",
    subCategory: "ENVIRONMENT & NATURE",
    description:
      "Meaningful outdoor environments connecting people, architecture, indigenous flora, and water bodies.",
    image: "/joseph.png",
    href: "/services",
  },
  {
    id: "pm",
    num: "04",
    title: "Project Management",
    subCategory: "EXECUTION & QUALITY",
    description:
      "End-to-end site supervision, vendor coordination, and strict quality control from concept to turnkey delivery.",
    image: "/unnikrishnan.png",
    href: "/services",
  },
  {
    id: "sustainable",
    num: "05",
    title: "Sustainable Consulting",
    subCategory: "CLIMATE & PERFORMANCE",
    description:
      "Thermal comfort modeling, passive ventilation strategies, and low-embodied carbon design solutions.",
    image: "/rajasthan.png",
    href: "/services",
  },
];

export default function ArchitecturalExpertise() {
  const n = disciplines.length;
  const [index, setIndex] = useState<number>(0);
  const [pos, setPos] = useState<number>(0);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const rootRef = useRef<HTMLElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  // Exact parameters calibrated so the active card sits flush against the right margin (like in the CodePen snapshot)
  const stateRef = useRef({
    index: 0,
    pos: 0,
    width: 0,
    slideW: 780,
    gap: 30,
    rotateY: 28,
    zDepth: 140,
    scaleDrop: 0.1,
    blurMax: 2.0,
    interval: 5000,
    transitionMs: 900,
    dragging: false,
    pointerId: null as number | null,
    x0: 0,
    v: 0,
    t0: 0,
    animating: false,
    hovering: false,
    startTime: 0,
    pausedAt: 0,
    tiltX: 0,
    tiltY: 0,
  });

  const mod = (i: number, count: number) => ((i % count) + count) % count;

  const nearest = (from: number, target: number) => {
    let d = target - Math.round(from);
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return Math.round(from) + d;
  };

  const measure = useCallback(() => {
    if (!viewportRef.current) return;
    const viewRect = viewportRef.current.getBoundingClientRect();
    const w = viewRect.width;
    stateRef.current.width = w;

    if (w <= 640) {
      stateRef.current.slideW = Math.min(540, w * 0.92);
      stateRef.current.gap = 16;
      stateRef.current.rotateY = 16;
      stateRef.current.zDepth = 70;
    } else if (w <= 1024) {
      stateRef.current.slideW = Math.min(680, w * 0.68);
      stateRef.current.gap = 24;
      stateRef.current.rotateY = 22;
      stateRef.current.zDepth = 100;
    } else {
      // Desktop: card takes ~56% of viewport, placing card 2 prominently on the right with zero wasted space
      stateRef.current.slideW = Math.min(840, Math.max(620, w * 0.56));
      stateRef.current.gap = 32;
      stateRef.current.rotateY = 28;
      stateRef.current.zDepth = 140;
    }
  }, []);

  const goTo = useCallback(
    (i: number, animate = true) => {
      const start = stateRef.current.pos;
      const end = nearest(start, i);
      const dur = animate ? stateRef.current.transitionMs : 0;
      const t0 = performance.now();
      const ease = (x: number) => 1 - Math.pow(1 - x, 4);

      stateRef.current.animating = true;

      const step = (now: number) => {
        const t = dur ? Math.min(1, (now - t0) / dur) : 1;
        const p = dur ? ease(t) : 1;
        const currentPos = start + (end - start) * p;
        stateRef.current.pos = currentPos;
        setPos(currentPos);

        if (t < 1) {
          requestAnimationFrame(step);
        } else {
          const finalIdx = mod(Math.round(currentPos), n);
          stateRef.current.index = finalIdx;
          stateRef.current.pos = finalIdx;
          stateRef.current.animating = false;
          stateRef.current.startTime = performance.now();
          setIndex(finalIdx);
          setPos(finalIdx);
        }
      };
      requestAnimationFrame(step);
    },
    [n]
  );

  const prev = useCallback(() => {
    goTo(mod(stateRef.current.index - 1, n));
  }, [goTo, n]);

  const next = useCallback(() => {
    goTo(mod(stateRef.current.index + 1, n));
  }, [goTo, n]);

  // Pointer & Drag handling
  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    stateRef.current.dragging = true;
    stateRef.current.pointerId = e.pointerId;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    stateRef.current.x0 = e.clientX;
    stateRef.current.t0 = performance.now();
    stateRef.current.v = 0;
    stateRef.current.pausedAt = performance.now();
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (viewportRef.current) {
      const r = viewportRef.current.getBoundingClientRect();
      const mx = (e.clientX - r.left) / r.width - 0.5;
      const my = (e.clientY - r.top) / r.height - 0.5;
      stateRef.current.tiltX = my * -6;
      stateRef.current.tiltY = mx * 6;
      setTilt({ x: my * -6, y: mx * 6 });
    }

    if (!stateRef.current.dragging || e.pointerId !== stateRef.current.pointerId) return;

    const dx = e.clientX - stateRef.current.x0;
    const dt = Math.max(16, performance.now() - stateRef.current.t0);
    stateRef.current.v = dx / dt;
    const slideSpan = stateRef.current.slideW + stateRef.current.gap;
    const newPos = mod(stateRef.current.index - dx / slideSpan, n);
    stateRef.current.pos = newPos;
    setPos(newPos);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!stateRef.current.dragging || e.pointerId !== stateRef.current.pointerId) return;
    stateRef.current.dragging = false;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
    stateRef.current.pointerId = null;

    if (stateRef.current.pausedAt) {
      stateRef.current.startTime += performance.now() - stateRef.current.pausedAt;
      stateRef.current.pausedAt = 0;
    }

    const v = stateRef.current.v;
    const threshold = 0.18;
    const target = Math.round(stateRef.current.pos - Math.sign(v) * (Math.abs(v) > threshold ? 0.5 : 0));
    goTo(mod(target, n));
  };

  // 5-second automatic rotation
  useEffect(() => {
    measure();
    const handleResize = () => measure();
    window.addEventListener("resize", handleResize);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);

    stateRef.current.startTime = performance.now();

    let rafId: number;
    const loop = (t: number) => {
      if (!stateRef.current.dragging && !stateRef.current.hovering && !stateRef.current.animating) {
        const elapsed = t - stateRef.current.startTime;
        if (elapsed >= stateRef.current.interval) {
          next();
        }
      }
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
      cancelAnimationFrame(rafId);
    };
  }, [measure, next, prev]);

  return (
    <section
      ref={rootRef}
      id="expertise"
      className="relative w-full bg-white text-[#111111] pt-8 sm:pt-14 pb-12 sm:pb-16 overflow-hidden border-t border-black/5"
      onMouseEnter={() => {
        stateRef.current.hovering = true;
        stateRef.current.pausedAt = performance.now();
      }}
      onMouseLeave={() => {
        if (stateRef.current.pausedAt) {
          stateRef.current.startTime += performance.now() - stateRef.current.pausedAt;
          stateRef.current.pausedAt = 0;
        }
        stateRef.current.hovering = false;
        setTilt({ x: 0, y: 0 });
      }}
    >
      {/* Static Architectural Grid Background matching Client Reviews exactly without mouse-warp animation */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundColor: "#FFFFFF",
          backgroundImage: `
            linear-gradient(to right, rgba(90, 55, 40, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(90, 55, 40, 0.07) 1px, transparent 1px),
            radial-gradient(circle, rgba(90, 55, 40, 0.12) 1.5px, transparent 1.5px),
            radial-gradient(circle, rgba(90, 55, 40, 0.035) 0.7px, transparent 0.7px)
          `,
          backgroundSize: "55px 55px, 55px 55px, 55px 55px, 28px 28px",
          backgroundPosition: "0 0, 0 0, 0 0, 14px 14px",
        }}
      />

      {/* Header Container */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-margin-desktop mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.15] text-[#111111]">
              Architectural Expertise
            </h2>
          </div>

          <div className="hidden sm:flex items-center justify-end gap-5">
            <p className="text-sm md:text-base text-[#6A6A6A] max-w-sm leading-relaxed hidden lg:block">
              We offer the highest level of architectural design solutions to facilitate excellence and seamless execution.
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================================
          Two-Card 3D Viewport: Flush Right Active Card + Angled Left Card (No Right Empty Space)
         ========================================================================= */}
      <div className="relative w-full max-w-[1440px] mx-auto px-2 sm:px-4">
        <div
          ref={viewportRef}
          tabIndex={0}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="relative w-full h-[520px] sm:h-[580px] md:h-[620px] overflow-hidden select-none touch-none outline-none cursor-grab active:cursor-grabbing"
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="relative w-full h-full"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {disciplines.map((item, i) => {
              let d = i - pos;
              if (d > n / 2) d -= n;
              if (d < -n / 2) d += n;

              // Strictly show only the active card (d = 0) and the previous adjacent card (d = -1)
              // Completely hides any third card so only two cards appear at any time
              const isRelevant = d >= -1.4 && d <= 0.35;
              if (!isRelevant) return null;

              const span = stateRef.current.slideW + stateRef.current.gap;
              
              // Positioning logic: The active card (d = 0) is placed right at the right edge
              // (offset by +24% of viewport width), so there is zero empty space on the right!
              const rightEdgeShift = stateRef.current.width ? (stateRef.current.width - stateRef.current.slideW) / 2 - 20 : 0;
              const tx = d * span + Math.max(0, rightEdgeShift);

              const depth = -Math.abs(d) * stateRef.current.zDepth;
              const rot = -d * stateRef.current.rotateY;
              const scale = 1 - Math.min(Math.abs(d) * stateRef.current.scaleDrop, 0.42);
              const blur = Math.min(Math.abs(d) * stateRef.current.blurMax, stateRef.current.blurMax);
              const z = Math.round(1000 - Math.abs(d) * 10);

              const isActive = Math.round(index) === i;

              // Parallax offset math per slide
              const parBase = Math.max(-1, Math.min(1, -d));
              const parX = parBase * 48 + tilt.y * 2.0;
              const parY = tilt.x * -1.5;
              const bgX = parBase * -64 + tilt.y * -2.4;
              const bgY = parY * 0.35;

              return (
                <article
                  key={item.id}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${n}`}
                  data-state={isActive ? "active" : "rest"}
                  onClick={() => goTo(i)}
                  className="absolute top-1/2 left-1/2 will-change-transform rounded-[22px] overflow-hidden"
                  style={{
                    width: `${stateRef.current.slideW}px`,
                    height: "min(560px, calc(100% - 40px))",
                    transformStyle: "preserve-3d",
                    transform: `translate3d(calc(-50% + ${tx}px), -50%, ${depth}px) rotateY(${rot}deg) scale(${scale})`,
                    filter: `blur(${blur}px)`,
                    zIndex: z,
                    transition: stateRef.current.dragging ? "none" : "filter 400ms ease",
                  }}
                >
                  {/* 3D Card Shell */}
                  <div
                    className="relative w-full h-full rounded-[22px] overflow-hidden bg-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-[4px]"
                    style={{
                      transform: "translateZ(0)",
                      boxShadow: isActive
                        ? "0 30px 70px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.15) inset"
                        : "0 20px 50px rgba(0, 0, 0, 0.28)",
                    }}
                  >
                    {/* Parallax Background Image with scale(1.18) and translate3d */}
                    <div
                      className="absolute inset-[-4%] will-change-transform"
                      style={{
                        transform: `translate3d(${bgX}px, ${bgY}px, 0) scale(1.18)`,
                        transition:
                          "transform 800ms cubic-bezier(0.2, 0.7, 0, 1), filter 800ms cubic-bezier(0.2, 0.7, 0, 1)",
                        filter: isActive
                          ? "contrast(1.05) saturate(1.12) brightness(1.0)"
                          : "contrast(1.02) saturate(1.05) brightness(0.85)",
                      }}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        priority={i === 0 || i === 1}
                        className="object-cover object-center"
                        sizes="(max-width: 1000px) 92vw, 880px"
                      />
                    </div>

                    {/* Gradient overlays matching MzaCard */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.65) 100%)",
                      }}
                    />

                    {/* Header: Title & Number with Parallax 1 (mzaPar-1 ~ 0.35x) */}
                    <header
                      className="absolute top-5 sm:top-7 left-5 sm:left-7 z-10 pointer-events-none will-change-transform"
                      style={{
                        transform: `translate3d(${parX * 0.35}px, ${parY * 0.35}px, 0)`,
                        transition: "transform 500ms cubic-bezier(0.2, 0.7, 0, 1)",
                      }}
                    >
                      <span className="text-white/80 font-mono text-xs sm:text-sm font-bold tracking-widest block mb-1">
                        {item.num}
                      </span>
                      <h3 className="text-white font-serif font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight drop-shadow-[2px_2px_15px_rgba(0,0,0,0.6)]">
                        {item.title}
                      </h3>
                      <p className="text-[#D4A373] font-semibold text-xs sm:text-sm tracking-wider uppercase mt-1 drop-shadow-[1px_1px_10px_rgba(0,0,0,0.6)]">
                        {item.subCategory}
                      </p>
                    </header>

                    {/* Description Box with Parallax 2 (mzaPar-2 ~ 0.25x) */}
                    <div
                      className="absolute bottom-24 sm:bottom-28 left-5 sm:left-7 right-5 sm:right-auto z-10 max-w-[54ch] bg-black/40 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-white/10 text-white/90 will-change-transform"
                      style={{
                        transform: `translate3d(${parX * 0.25}px, ${parY * 0.25}px, 0)`,
                        transition: "transform 500ms cubic-bezier(0.2, 0.7, 0, 1)",
                      }}
                    >
                      <p className="text-xs sm:text-sm leading-relaxed font-light drop-shadow line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    {/* Action Button with Parallax 3 (mzaPar-3 ~ 0.18x) in studio brown palette */}
                    <footer
                      className="absolute bottom-5 sm:bottom-7 left-5 sm:left-7 z-10 will-change-transform"
                      style={{
                        transform: `translate3d(${parX * 0.18}px, ${parY * 0.18}px, 0)`,
                        transition: "transform 500ms cubic-bezier(0.2, 0.7, 0, 1)",
                      }}
                    >
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-2 border border-[#8B5A3E]/60 rounded-xl px-5 py-3 font-bold text-xs sm:text-sm tracking-wide text-white bg-gradient-to-b from-[#6D432D] via-[#5A3728] to-[#3E2723] shadow-[0_4px_20px_rgba(62,39,35,0.45)] hover:brightness-110 active:translate-y-0.5 active:shadow-[0_2px_10px_rgba(62,39,35,0.3)] transition-all"
                      >
                        <span>Explore Discipline</span>
                        <ArrowUpRight className="w-4 h-4 text-[#D4A373]" />
                      </Link>
                    </footer>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Circular Left & Right Nav Buttons placed on the sides of the viewport */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous card"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-lg active:scale-95 transition-all"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2.2]" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next card"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-lg active:scale-95 transition-all"
        >
          <ChevronRight className="w-6 h-6 stroke-[2.2]" />
        </button>
      </div>

      {/* Pagination Dot Navigation in studio brown */}
      <div className="flex items-center justify-center gap-2.5 mt-8">
        {disciplines.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === index
                ? "w-8 h-2.5 bg-gradient-to-r from-[#5A3728] to-[#8B5A3E] scale-105 shadow-sm"
                : "w-2.5 h-2.5 bg-black/20 hover:bg-[#5A3728]/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
