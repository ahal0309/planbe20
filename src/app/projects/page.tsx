import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Plan Bē Architectural Design Studio | Projects',
  description: 'Explore a collection of spaces designed with purpose and crafted with timeless appeal.',
};

export default function ProjectsPage() {
  return (
    <div className="w-full bg-[#3B2A25] text-white relative z-10 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-start overflow-hidden px-6 md:px-margin-desktop bg-[#3B2A25]/50">
        <Image
          src="/projects-hero.jpg"
          alt="Projects Hero"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#3B2A25]/40 mix-blend-multiply"></div>
        
        <div className="relative z-10 max-w-2xl text-white mt-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold tracking-widest uppercase">Our Projects</span>
            <div className="h-[1px] w-12 bg-white"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
            Sculpting Light,<br />
            Defining Space.
          </h1>
          <p className="text-lg md:text-xl max-w-md mb-8">
            Thoughtful architecture that blends naturally with its surroundings.
          </p>
          <Link href="#our-work" className="inline-flex items-center justify-center px-8 py-3 bg-white/10 hover:bg-white/20 transition-colors border border-white/20 text-white text-sm font-semibold tracking-wider">
            EXPLORE OUR WORK
            <svg className="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section id="our-work" className="w-full px-6 md:px-margin-desktop py-section-gap">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-8 text-white">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">OUR PROJECTS</h2>
            <div className="h-[1px] w-16 bg-white"></div>
          </div>
          <p className="max-w-xs text-sm leading-relaxed">
            Explore a collection of spaces designed with purpose and crafted with timeless appeal.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Villa Sereno (Tall) */}
          <div className="md:col-span-1 md:row-span-2 group cursor-pointer flex flex-col bg-warm-canvas text-ink">
            <div className="relative w-full h-[300px] md:h-full min-h-[400px] bg-surface-dim overflow-hidden">
              <Image
                src="/villa-sereno.jpg"
                alt="Villa Sereno"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-2xl font-serif mb-4 uppercase">Villa Sereno</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
              </div>
              <div className="flex items-center text-xs font-semibold tracking-wider uppercase group-hover:text-secondary transition-colors">
                VIEW PROJECT
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2: The Glass House (Square) */}
          <div className="md:col-span-1 group cursor-pointer flex flex-col bg-warm-canvas text-ink">
            <div className="relative w-full h-[250px] bg-surface-dim overflow-hidden">
              <Image
                src="/glass-house.jpg"
                alt="The Glass House"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif mb-3 uppercase">The Glass House</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
              <div className="flex items-center text-xs font-semibold tracking-wider uppercase group-hover:text-secondary transition-colors">
                VIEW PROJECT
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 3: The Glass House (Square) */}
          <div className="md:col-span-1 group cursor-pointer flex flex-col bg-warm-canvas text-ink">
            <div className="relative w-full h-[250px] bg-surface-dim overflow-hidden">
              <Image
                src="/3-trees-banner.jpg"
                alt="The Glass House"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif mb-3 uppercase">The Glass House</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
              <div className="flex items-center text-xs font-semibold tracking-wider uppercase group-hover:text-secondary transition-colors">
                VIEW PROJECT
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 4: The Glass House (Square) */}
          <div className="md:col-span-1 group cursor-pointer flex flex-col bg-warm-canvas text-ink">
            <div className="relative w-full h-[250px] bg-surface-dim overflow-hidden">
              <Image
                src="/entrance-01.jpg"
                alt="The Glass House"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif mb-3 uppercase">The Glass House</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
              <div className="flex items-center text-xs font-semibold tracking-wider uppercase group-hover:text-secondary transition-colors">
                VIEW PROJECT
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 5: Nature's Edge (Square) */}
          <div className="md:col-span-1 group cursor-pointer flex flex-col bg-warm-canvas text-ink">
            <div className="relative w-full h-[250px] bg-surface-dim overflow-hidden">
              <Image
                src="/ochre-5.jpg"
                alt="Nature's Edge"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif mb-3 uppercase">Nature's Edge</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
              <div className="flex items-center text-xs font-semibold tracking-wider uppercase group-hover:text-secondary transition-colors">
                VIEW PROJECT
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
