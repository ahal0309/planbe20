import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projectsData[slug];
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Plan Bē Architectural Design Studio`,
    description: project.overviewDescription,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    notFound();
  }

  const relatedProjects = project.relatedSlugs
    .map((s) => projectsData[s])
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-white w-full text-[#111111] overflow-hidden">
      {/* 1. Full Bleed Hero Header Image with Project Title Overlay */}
      <section className="relative w-full h-[75vh] sm:h-[85vh] lg:h-[90vh] flex items-end">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority
          className="object-cover brightness-[0.88]"
          sizes="100vw"
        />
        {/* Subtle architectural gradient for title contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-margin-desktop pb-12 sm:pb-16 md:pb-20">
          <div className="flex items-center gap-2 text-white/80 text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] mb-4">
            <span>{project.subtitle}</span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-white font-normal leading-none tracking-tight">
            {project.title}
          </h1>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="w-full py-16 sm:py-24 md:py-28 px-6 md:px-margin-desktop bg-white">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Kicker */}
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8FA3A6] font-bold block mb-6">
            {project.overviewHeading}
          </span>

          {/* Large Lead Overview Headline */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[44px] text-[#111111] leading-[1.3] max-w-5xl font-light">
            {project.overviewDescription}
          </h2>
        </div>
      </section>

      {/* 3. Mid-Page Full Width Architectural Perspective Image */}
      <section className="w-full px-6 md:px-margin-desktop pb-20 sm:pb-28">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative w-full h-[50vh] sm:h-[65vh] md:h-[75vh] overflow-hidden rounded-sm shadow-sm bg-[#EAE8E4]">
            <Image
              src={project.secondaryImage}
              alt={`${project.title} Architectural Detail`}
              fill
              className="object-cover"
              sizes="(max-width: 1400px) 100vw, 1400px"
            />
          </div>
        </div>
      </section>

      {/* 4. Related Works Section */}
      <section className="w-full py-16 sm:py-24 px-6 md:px-margin-desktop border-t border-[#111111]/10 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-12 sm:mb-16">
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#111111]">
              Related <span className="italic font-light">Works</span>
            </h3>
            <Link
              href="/projects"
              className="text-xs font-mono tracking-[0.2em] uppercase text-[#6A6A6A] hover:text-[#111111] transition-colors border-b border-[#111111]/30 pb-0.5"
            >
              VIEW ALL →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
            {relatedProjects.map((rel) => (
              <Link
                key={rel.slug}
                href={`/projects/${rel.slug}`}
                className="group flex flex-col cursor-pointer"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm bg-[#EAE8E4] mb-6">
                  <Image
                    src={rel.heroImage}
                    alt={rel.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h4 className="font-serif text-2xl md:text-3xl font-medium text-[#111111] group-hover:text-[#5A3728] transition-colors">
                  {rel.title}
                </h4>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8FA3A6] mt-2 block">
                  {rel.location}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
