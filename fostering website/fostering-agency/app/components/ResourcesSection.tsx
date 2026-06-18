"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, FileText, HelpCircle, CheckSquare, Download } from "lucide-react";

const resources = [
  {
    icon: BookOpen,
    title: "Fostering Guide",
    description: "Everything you need to know about fostering — from eligibility to daily life as a carer. A must-read for anyone considering the journey.",
    pages: "32 pages",
    color: "#16324F",
  },
  {
    icon: FileText,
    title: "Allowance Guide",
    description: "A detailed breakdown of all allowances, tax benefits and financial support available to BrightPath foster carers.",
    pages: "16 pages",
    color: "#2A9D8F",
  },
  {
    icon: HelpCircle,
    title: "FAQ Guide",
    description: "Answers to the 50 most common questions from prospective foster carers — honest, clear, and straight to the point.",
    pages: "24 pages",
    color: "#16324F",
  },
  {
    icon: CheckSquare,
    title: "Application Checklist",
    description: "A step-by-step checklist to guide you through every stage of the fostering application process with confidence.",
    pages: "8 pages",
    color: "#2A9D8F",
  },
];

export default function ResourcesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden" style={{ background: "#FAF7F2" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#2A9D8F" }}>
            Free Resources
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair)", color: "#16324F" }}>
            Download Your Free{" "}
            <span className="gradient-text">Fostering Guides</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map(({ icon: Icon, title, description, pages, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="group bg-white rounded-3xl p-7 card-lift border border-gray-100 flex flex-col"
            >
              {/* Icon header */}
              <div className="relative mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${color}15` }}
                >
                  <Icon size={26} style={{ color }} />
                </div>
                <span className="absolute top-1 right-0 text-xs text-gray-400 font-medium">{pages}</span>
              </div>

              <h3 className="font-bold text-lg mb-3" style={{ color: "#16324F", fontFamily: "var(--font-playfair)" }}>
                {title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-6">
                {description}
              </p>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
                style={{ background: color, color: "white" }}
              >
                <Download size={15} />
                Download Free
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 rounded-3xl p-8 sm:p-10 text-center text-white relative overflow-hidden"
          style={{ background: "#16324F" }}
        >
          <div className="absolute inset-0 opacity-10" style={{
            background: "radial-gradient(circle at 30% 50%, #2A9D8F, transparent 60%)"
          }} />
          <div className="relative z-10">
            <p className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
              Ready to Take the First Step?
            </p>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">
              Download all four guides instantly when you submit your free, no-obligation enquiry.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 btn-shimmer"
              style={{ background: "#2A9D8F", boxShadow: "0 8px 30px rgba(42,157,143,0.4)" }}
            >
              <Download size={18} />
              Get All Guides Free
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
