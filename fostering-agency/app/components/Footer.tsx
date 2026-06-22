"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Heart } from "lucide-react";

const links = {
  Agency: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#about" },
    { label: "Careers", href: "#contact" },
    { label: "News", href: "#" },
  ],
  "Fostering": [
    { label: "Why Foster?", href: "#why-foster" },
    { label: "The Process", href: "#support" },
    { label: "Types of Fostering", href: "#about" },
    { label: "Allowances", href: "#payments" },
  ],
  "Support": [
    { label: "Training", href: "#support" },
    { label: "Resources", href: "#" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  "Legal": [
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Complaints", href: "#" },
    { label: "Safeguarding", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#16324F" }}>
      {/* Decoration */}
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(to right, transparent, rgba(42,157,143,0.5), transparent)" }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-5" style={{ background: "#2A9D8F" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-5 gap-10 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "#2A9D8F" }}>
                <svg width="22" height="22" viewBox="0 0 40 40" fill="none">
                  <path d="M20 6C20 6 8 13 8 22C8 28.627 13.373 34 20 34C26.627 34 32 28.627 32 22C32 13 20 6 20 6Z" fill="white" opacity="0.9"/>
                  <path d="M20 12C20 12 13 17 13 22C13 25.866 16.134 29 20 29C23.866 29 27 25.866 27 22C27 17 20 12 20 12Z" fill="white"/>
                </svg>
              </div>
              <div>
                <span className="text-white font-bold text-lg leading-none block" style={{ fontFamily: "var(--font-playfair)" }}>BrightPath</span>
                <span className="text-xs tracking-widest uppercase" style={{ color: "#3bbfb0" }}>Fostering</span>
              </div>
            </a>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Providing outstanding fostering support across the United Kingdom since 2009.
            </p>
            <div className="flex gap-3">
              {[
              { label: "Facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
              { label: "Twitter", path: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" },
              { label: "Instagram", path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zm1.5-4.87h.01M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2z" },
              { label: "LinkedIn", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
            ].map(({ label, path }) => (
              <a key={label} href="#" aria-label={label} className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110" style={{ background: "rgba(255,255,255,0.08)" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={path} />
                </svg>
              </a>
            ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">{category}</h4>
              <ul className="space-y-3">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-white/50 hover:text-white text-sm transition-colors duration-200">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-wrap gap-6 sm:gap-10">
            {[
              { icon: Phone, text: "0800 123 4567", href: "tel:08001234567" },
              { icon: Mail, text: "hello@brightpathfostering.co.uk", href: "mailto:hello@brightpathfostering.co.uk" },
              { icon: MapPin, text: "12 King Street, Manchester, M2 6AW", href: "#" },
            ].map(({ icon: Icon, text, href }) => (
              <a key={text} href={href} className="flex items-center gap-2 text-white/50 hover:text-white/80 text-sm transition-colors">
                <Icon size={14} style={{ color: "#2A9D8F" }} />
                {text}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © 2024 BrightPath Fostering Ltd. Registered in England & Wales No. 12345678.
            Ofsted Registration: SC123456. ICO Registration: ZA123456.
          </p>
          <div className="flex items-center gap-1 text-white/30 text-xs">
            <span>Made with</span>
            <Heart size={12} style={{ color: "#2A9D8F" }} />
            <span>for children everywhere</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
