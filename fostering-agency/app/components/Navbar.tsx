"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Why Foster?", href: "#why-foster" },
  { label: "Support", href: "#support" },
  { label: "Payments", href: "#payments" },
  { label: "Stories", href: "#stories" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    links.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-navy shadow-2xl shadow-navy/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg width="22" height="22" viewBox="0 0 40 40" fill="none">
                <path d="M20 6C20 6 8 13 8 22C8 28.627 13.373 34 20 34C26.627 34 32 28.627 32 22C32 13 20 6 20 6Z" fill="white" opacity="0.9"/>
                <path d="M20 12C20 12 13 17 13 22C13 25.866 16.134 29 20 29C23.866 29 27 25.866 27 22C27 17 20 12 20 12Z" fill="white"/>
              </svg>
            </div>
            <div>
              <span className="text-white font-bold text-lg leading-none block" style={{ fontFamily: "var(--font-playfair)" }}>
                BrightPath
              </span>
              <span className="text-teal-light text-xs tracking-widest uppercase" style={{ color: "#3bbfb0" }}>
                Fostering
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {links.map(({ label, href }) => {
              const id = href.replace("#", "");
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group ${
                      active === id
                        ? "text-teal-300"
                        : "text-white/80 hover:text-white"
                    }`}
                    style={{ color: active === id ? "#3bbfb0" : undefined }}
                  >
                    {label}
                    {active === id && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                        style={{ background: "#2A9D8F" }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA + mobile */}
          <div className="flex items-center gap-3">
            <a
              href="tel:08001234567"
              className="hidden sm:flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors"
            >
              <Phone size={14} />
              <span>0800 123 4567</span>
            </a>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 btn-shimmer shadow-lg hover:shadow-teal/30 hover:scale-105"
              style={{ background: "#2A9D8F" }}
            >
              Enquire Now
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 z-40 w-72 glass-navy flex flex-col pt-24 pb-8 px-6 shadow-2xl"
          >
            <nav className="flex flex-col gap-2">
              {links.map(({ label, href }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 text-sm font-medium"
                >
                  {label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-auto pt-6 border-t border-white/10">
              <a
                href="tel:08001234567"
                className="flex items-center gap-2 text-white/70 text-sm mb-4"
              >
                <Phone size={14} />
                0800 123 4567
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-5 py-3 rounded-full text-sm font-semibold text-white transition-all duration-300"
                style={{ background: "#2A9D8F" }}
              >
                Become a Foster Carer
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
