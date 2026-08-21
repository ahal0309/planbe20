import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";

const footerLinks = [
  { name: "Instagram", href: "https://instagram.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "Journal", href: "#journal" },
  { name: "Privacy Policy", href: "#privacy" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-ink/10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full px-6 md:px-margin-desktop py-16 md:py-24 max-w-container-max mx-auto">
        <div className="mb-12 md:mb-0">
          <div className="relative mb-4 flex items-center select-none">
            <Image
              src="/logo_new.png"
              alt="PLAN Bë Architectural Design Studio"
              width={160}
              height={70}
              className="w-28 sm:w-32 h-auto object-contain filter contrast-125"
            />
          </div>
          <p className="text-sm md:text-base text-ashen max-w-xs leading-relaxed">
            © {new Date().getFullYear()} PLAN Bë Architectural Design Studio. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-gutter text-[12px] uppercase tracking-[0.2em] font-semibold">
          {/* Social Icons (Coffee Brown) */}
          <div className="flex items-center space-x-6 mr-0 sm:mr-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#8B6B5D] hover:text-[#5F463B] transition-colors duration-300"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#8B6B5D] hover:text-[#5F463B] transition-colors duration-300"
            >
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
          </div>

          {/* Journal & Privacy Links */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-gutter">
            {footerLinks
              .filter((item) => item.name !== "Instagram" && item.name !== "LinkedIn")
              .map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-ashen hover:text-ochre underline underline-offset-4 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
