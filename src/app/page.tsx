"use client";

import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ApproachItem {
  title: string;
  description: string;
}

const approachItems: ApproachItem[] = [
  {
    title: "Understanding People",
    description:
      "We believe great architecture begins with understanding people. Every project is shaped around the way our clients live, work, and interact with their environment, creating spaces that are intuitive, functional, and deeply personal.",
  },
  {
    title: "Context & Craftsmanship",
    description:
      "Our design process is guided by context, craftsmanship, and long-term value. Rather than following trends, we focus on creating meaningful spaces with clarity, purpose, and a strong connection to their surroundings—spaces that remain relevant and enriching for years to come.",
  },
];

interface Project {
  title: string;
  category: string;
  year: string;
  image: string;
  offset: boolean;
  href: string;
}

const projects: Project[] = [
  {
    title: "AKHIL RESIDENCE",
    category: "Architecture",
    year: "2024",
    image: "/akhil.png",
    offset: false,
    href: "#",
  },
  {
    title: "LONG VIEW",
    category: "Landscape",
    year: "2025",
    image: "/long_view.png",
    offset: true,
    href: "#",
  },
];

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Let's Connect",
    description:
      "We begin by understanding your lifestyle, aspirations, and the way you want to live.",
  },
  {
    step: "02",
    title: "Dream Together",
    description:
      "Through collaboration and exploration, we shape ideas into a clear design vision.",
  },
  {
    step: "03",
    title: "Shape & Design",
    description:
      "Layouts, materials, and visual concepts come together to bring your vision to life.",
  },
  {
    step: "04",
    title: "Build With Care",
    description:
      "Every detail is thoughtfully executed with precision, quality, and attention.",
  },
  {
    step: "05",
    title: "Live Your Way",
    description:
      "A home designed around your story, ready to be experienced and enjoyed every day.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Full-Screen Hero Section matching screenshot */}
      <Hero />

      {/* Philosophy / Our Approach Section */}
      <section id="studio" className="w-full bg-transparent py-24 md:py-40 relative scroll-mt-36">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full aspect-square md:aspect-[4/5] bg-[#EAE8E4] relative overflow-hidden lg:sticky lg:top-24 rounded-sm shadow-sm"
          >
            <Image
              src="/akhil.png"
              alt="Our Approach"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-10 lg:pl-10"
          >
            <div>
              <p className="text-ashen tracking-[0.2em] uppercase text-sm font-bold mb-4">
                Philosophy
              </p>
              <h3 className="font-serif text-4xl md:text-5xl lg:text-[56px] font-semibold text-ink leading-tight mb-6">
                Our Approach
              </h3>
              <p className="text-ink/80 leading-relaxed text-base md:text-lg">
                We seek inspiration in simplicity, finding harmony between architecture, nature, and everyday life.
              </p>
            </div>

            <div className="space-y-8">
              {approachItems.map((item, index) => (
                <div key={index} className="flex flex-col gap-3 border-t border-ink/10 pt-6">
                  <h4 className="font-sans text-xl md:text-2xl font-semibold text-ink">
                    {item.title}
                  </h4>
                  <p className="text-ashen leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="w-full max-w-container-max mx-auto px-6 md:px-margin-desktop py-20 md:py-32 scroll-mt-36">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16">
          <div>
            <span className="text-sm leading-[1.5] tracking-[0.2em] font-bold uppercase text-ashen block mb-3">
              Portfolio
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.2]">
              PROJECTS
            </h2>
          </div>
          <p className="text-base md:text-lg text-ashen max-w-md mt-4 md:mt-0 leading-relaxed">
            A collection of spaces thoughtfully designed from concept to reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-gutter">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.href}
              className={`group block cursor-pointer ${project.offset ? "mt-0 md:mt-24" : ""}`}
            >
              <div className="relative overflow-hidden mb-6 bg-surface-container aspect-[4/3] rounded-sm">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex justify-between items-start border-t border-ink/20 pt-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold group-hover:text-ochre transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-xs sm:text-sm text-ashen mt-1 block tracking-wider uppercase font-medium">
                    {project.category}
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-semibold tracking-widest text-ashen">
                  {project.year}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 md:mt-24 text-center">
          <Link
            href="#projects"
            className="inline-flex text-sm leading-[1.5] tracking-[0.2em] font-bold uppercase border-b-2 border-ink pb-1 hover:text-ochre hover:border-ochre transition-colors duration-300"
          >
            View All Projects →
          </Link>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="w-full bg-ink text-surface py-20 md:py-32 scroll-mt-36">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-gutter">
          <div className="md:col-span-5">
            <span className="text-sm leading-[1.5] tracking-[0.2em] font-bold uppercase text-ashen block mb-4">
              Process
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] font-semibold mb-6 leading-tight">
              How Your Home Comes Together
            </h2>
            <p className="text-lg md:text-xl text-surface-dim/80 mb-10 max-w-md leading-relaxed">
              A thoughtful design journey shaped by collaboration, creativity, and craftsmanship — transforming ideas into spaces that truly belong to you.
            </p>
          </div>

          <div className="md:col-span-7 flex flex-col">
            {processSteps.map((step, idx) => (
              <div
                key={step.step}
                className={`flex items-start border-t border-surface/20 py-8 px-4 -mx-4 group hover:bg-surface/5 transition-colors duration-300 ${
                  idx === processSteps.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="text-base font-semibold tracking-widest text-ochre w-16 pt-1">
                  {step.step}
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 font-sans">{step.title}</h3>
                  <p className="text-base md:text-lg text-surface-dim/70 max-w-md leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="w-full max-w-container-max mx-auto px-6 md:px-margin-desktop py-24 md:py-36 flex flex-col items-center justify-center text-center scroll-mt-36">
        <h2 className="font-serif text-4xl sm:text-6xl md:text-[56px] font-semibold mb-8 max-w-2xl leading-tight">
          Design Your Way of Being.
        </h2>
        <Link
          href="mailto:contact@planbe.studio"
          className="inline-flex text-sm leading-[1.5] tracking-[0.2em] font-bold uppercase border-b-2 border-ink pb-1 hover:text-ochre hover:border-ochre transition-colors duration-300"
        >
          Request a Consultation →
        </Link>
      </section>
    </>
  );
}
