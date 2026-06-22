"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";

export default function MidPageCTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden" style={{ background: "#16324F" }}>
      {/* Animated blob */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "#2A9D8F" }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full blur-3xl opacity-10"
          style={{ background: "#3bbfb0" }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 mx-auto" style={{ background: "rgba(42,157,143,0.2)" }}>
            <Heart size={28} style={{ color: "#3bbfb0" }} />
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
            Could You Provide a Loving Home?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            There are thousands of children across the UK waiting for a safe, stable and nurturing foster placement. Your decision to enquire today could change a child&apos;s entire future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 btn-shimmer shadow-2xl"
              style={{ background: "#2A9D8F", boxShadow: "0 8px 30px rgba(42,157,143,0.4)" }}
            >
              <Heart size={18} />
              Become a Foster Carer
            </a>
            <a
              href="tel:08001234567"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white glass transition-all duration-300 hover:bg-white/20 hover:scale-105"
            >
              Call 0800 123 4567
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
