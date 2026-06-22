"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Heart, Shield, Star } from "lucide-react";

const SLIDES = [
  "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1920&q=80",
  "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=1920&q=80",
  "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1920&q=80",
  "https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=1920&q=80",
];

export default function HeroSection() {
  const [slide, setSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((s) => (s + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Slideshow background */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        {SLIDES.map((src, i) => (
          <motion.div
            key={src}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: slide === i ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover scale-105"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </motion.div>
        ))}
        {/* Gradient overlay */}
        <div className="absolute inset-0 hero-gradient" />
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`
        }} />
      </motion.div>

      {/* Floating shapes */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-[8%] w-72 h-72 rounded-full opacity-10 blur-3xl"
          style={{ background: "#2A9D8F" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-[5%] w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{ background: "#3bbfb0" }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20"
        style={{ opacity }}
      >
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white mb-8 glass"
          >
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" style={{ background: "#2A9D8F" }} />
            Ofsted Registered & Award-Winning Agency
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Change a Child&apos;s{" "}
            <span className="relative inline-block">
              Future.
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                style={{ background: "#2A9D8F" }}
                initial={{ scaleX: 0 }}
                animate={loaded ? { scaleX: 1 } : {}}
                transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
              />
            </span>
            <br />
            <span style={{ color: "#3bbfb0" }}>Become a Foster Parent.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-white/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl"
          >
            Provide a safe and loving home while receiving full support, training and
            <span className="text-white font-medium"> competitive allowances</span>.
            Join 500+ families making a real difference across the UK.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 btn-shimmer"
              style={{ background: "#2A9D8F", boxShadow: "0 8px 30px rgba(42,157,143,0.4)" }}
            >
              <Heart size={18} className="group-hover:scale-125 transition-transform" />
              Become a Foster Carer
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white glass transition-all duration-300 hover:bg-white/20 hover:scale-105"
            >
              Request Information Pack
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="flex flex-wrap gap-6"
          >
            {[
              { icon: Shield, text: "Ofsted Registered" },
              { icon: Star, text: "4.9★ Rated Agency" },
              { icon: Heart, text: "500+ Foster Families" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/70 text-sm">
                <Icon size={15} style={{ color: "#2A9D8F" }} />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Slide indicators */}
      <div className="absolute bottom-28 right-6 z-10 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            className={`transition-all duration-300 rounded-full ${
              slide === i ? "w-8 h-2" : "w-2 h-2 bg-white/40"
            }`}
            style={slide === i ? { background: "#2A9D8F" } : {}}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs tracking-widest uppercase">Discover More</span>
        <ChevronDown size={20} />
      </motion.a>

      {/* Bottom wave */}
      <div className="wave-divider z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FAF7F2"/>
        </svg>
      </div>
    </section>
  );
}
