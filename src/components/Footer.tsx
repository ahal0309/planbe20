import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Facebook, Phone, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-ink/10 py-16 md:py-24">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 md:mb-24">
          
          {/* Column 1: Brand & Info */}
          <div className="flex flex-col">
            <div className="relative mb-8 flex items-center select-none">
              <Image
                src="/logo_new.png"
                alt="PLAN Bë Architectural Design Studio"
                width={160}
                height={70}
                className="w-32 h-auto object-contain filter contrast-125"
              />
            </div>
            
            <p className="text-sm text-ashen leading-relaxed mb-8 max-w-sm">
              A multidisciplinary architectural and design practice delivering innovative and context-driven projects.
            </p>
            
            <div className="flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-ink/20 flex items-center justify-center rounded-sm hover:border-ink/50 hover:bg-ink/5 transition-all text-ink/70 hover:text-ink">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-ink/20 flex items-center justify-center rounded-sm hover:border-ink/50 hover:bg-ink/5 transition-all text-ink/70 hover:text-ink">
                <Facebook size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-ink/20 flex items-center justify-center rounded-sm hover:border-ink/50 hover:bg-ink/5 transition-all text-ink/70 hover:text-ink">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#5A3728] mb-6">
              NAVIGATION
            </h4>
            <div className="flex flex-col gap-4 text-sm font-medium tracking-[0.1em] text-ashen uppercase">
              <Link href="/" className="hover:text-ochre transition-colors">HOME</Link>
              <Link href="/about" className="hover:text-ochre transition-colors">ABOUT US</Link>
              <Link href="/services" className="hover:text-ochre transition-colors">SERVICES</Link>
              <Link href="/projects" className="hover:text-ochre transition-colors">PROJECTS</Link>
              <Link href="/contact" className="hover:text-ochre transition-colors">CONTACT</Link>
            </div>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#5A3728] mb-6">
              SERVICES
            </h4>
            <div className="flex flex-col gap-4 text-sm font-medium tracking-[0.1em] text-ashen uppercase">
              <Link href="/services" className="hover:text-ochre transition-colors">ARCHITECTURE</Link>
              <Link href="/services" className="hover:text-ochre transition-colors">INTERIOR DESIGN</Link>
              <Link href="/services" className="hover:text-ochre transition-colors">LANDSCAPE DESIGN</Link>
              <Link href="/services" className="hover:text-ochre transition-colors">PROJECT MANAGEMENT</Link>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#5A3728] mb-6">
              CONTACT
            </h4>
            
            <a 
              href="https://share.google/xrNqoxEYLSRf465o6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ashen leading-relaxed mb-6 max-w-[250px] hover:text-ochre transition-colors block"
            >
              First Floor, Velleparambil building, Kaloor, Cochin-17, Kerala
            </a>
            
            <div className="flex flex-col gap-3 text-sm text-ashen mb-8 font-medium">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#5A3728]" />
                <a href="tel:+919539018362" className="hover:text-ochre transition-colors">+91 95390 18362</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#5A3728]" />
                <a href="mailto:info@planbe.co.in" className="hover:text-ochre transition-colors">info@planbe.co.in</a>
              </div>
            </div>
            
            <a 
              href="https://wa.me/917907082793" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-ink/20 py-3 px-6 text-xs font-bold uppercase tracking-[0.1em] text-ink hover:border-ochre hover:text-ochre transition-all w-fit rounded-sm"
            >
              WHATSAPP US <MessageCircle size={16} />
            </a>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-ink/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs font-semibold tracking-[0.15em] text-ashen uppercase text-center md:text-left">
          <p>© {new Date().getFullYear()} PLAN Bë ARCHITECTURAL DESIGN STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-ochre transition-colors">PRIVACY POLICY</Link>
            <Link href="#" className="hover:text-ochre transition-colors">TERMS OF SERVICE</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
