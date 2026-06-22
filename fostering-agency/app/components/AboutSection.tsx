"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Clock, CheckCircle } from "lucide-react";

const badges = [
  { icon: Award, label: "Ofsted Outstanding", sub: "Latest inspection" },
  { icon: Users, label: "500+ Families", sub: "Across the UK" },
  { icon: Clock, label: "15+ Years", sub: "Of excellence" },
  { icon: CheckCircle, label: "98% Satisfaction", sub: "Foster carer survey" },
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Subtle BG pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle, #16324F 1px, transparent 1px)`,
        backgroundSize: "32px 32px"
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — image collage */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative h-[500px]">
              {/* Main image */}
              <div className="absolute top-0 left-0 w-[72%] h-[72%] rounded-3xl overflow-hidden shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=700&q=80"
                  alt="Happy foster family"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Secondary image */}
              <div className="absolute bottom-0 right-0 w-[55%] h-[55%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80"
                  alt="Children playing"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating card */}
              <motion.div
                className="absolute top-[45%] right-[30%] glass-navy rounded-2xl p-4 shadow-2xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#2A9D8F" }}>
                    <CheckCircle size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Fully Supported</p>
                    <p className="text-white/60 text-xs">24/7 helpline available</p>
                  </div>
                </div>
              </motion.div>
              {/* Teal accent circle */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full opacity-20 blur-2xl" style={{ background: "#2A9D8F" }} />
            </div>
          </motion.div>

          {/* Right — copy */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#2A9D8F" }}>
              About BrightPath
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: "var(--font-playfair)", color: "#16324F" }}>
              A Fostering Agency You Can{" "}
              <span className="gradient-text">Truly Trust</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              For over 15 years, BrightPath Fostering has been connecting vulnerable children with warm, caring families across the United Kingdom. We believe every child deserves stability, love, and the chance to thrive.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              We're not just an agency — we're a community. From your very first enquiry through every placement and beyond, our dedicated team is beside you every step of the way. We hold ourselves to the highest standards, reflected in our Ofsted Outstanding rating.
            </p>

            {/* Badges grid */}
            <div className="grid grid-cols-2 gap-4">
              {badges.map(({ icon: Icon, label, sub }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 p-4 rounded-2xl"
                  style={{ background: "#FAF7F2" }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(42,157,143,0.12)" }}>
                    <Icon size={18} style={{ color: "#2A9D8F" }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "#16324F" }}>{label}</p>
                    <p className="text-xs text-gray-500">{sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
