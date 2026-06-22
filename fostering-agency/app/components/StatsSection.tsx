"use client";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const stats = [
  { value: 500, suffix: "+", label: "Foster Families", sublabel: "across the UK" },
  { value: 98, suffix: "%", label: "Satisfaction Rate", sublabel: "in annual survey" },
  { value: 24, suffix: "/7", label: "Support Available", sublabel: "365 days a year" },
  { value: 15, suffix: "+", label: "Years Experience", sublabel: "trusted since 2009" },
];

function Counter({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const raf = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden" style={{ background: "#16324F" }}>
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ background: "#2A9D8F" }} />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-10" style={{ background: "#2A9D8F" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map(({ value, suffix, label, sublabel }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center group"
            >
              {/* Number */}
              <div className="text-5xl sm:text-6xl font-bold text-white mb-2 tabular-nums" style={{ fontFamily: "var(--font-playfair)" }}>
                <Counter value={value} suffix={suffix} />
              </div>
              {/* Divider */}
              <div
                className="w-8 h-0.5 rounded-full mx-auto mb-3 transition-all duration-300 group-hover:w-16"
                style={{ background: "#2A9D8F" }}
              />
              <p className="text-white font-semibold text-sm tracking-wide">{label}</p>
              <p className="text-white/50 text-xs mt-1">{sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
