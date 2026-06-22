"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Home, ClipboardList, BookOpen, CheckCircle, Heart } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Initial Enquiry",
    description: "Have a friendly, no-obligation conversation with our team. Ask anything — we're here to answer every question.",
    duration: "Week 1",
    color: "#2A9D8F",
  },
  {
    icon: Home,
    title: "Home Visit",
    description: "A dedicated social worker visits your home for an informal chat. We want to understand your life and your motivations.",
    duration: "Weeks 2–4",
    color: "#16324F",
  },
  {
    icon: ClipboardList,
    title: "Assessment",
    description: "We complete the Form F assessment — a thorough but supportive process exploring your background and skills.",
    duration: "Months 2–4",
    color: "#2A9D8F",
  },
  {
    icon: BookOpen,
    title: "Skills to Foster",
    description: "Complete our award-winning pre-approval training programme, fully funded and delivered at your convenience.",
    duration: "Months 3–5",
    color: "#16324F",
  },
  {
    icon: CheckCircle,
    title: "Approval Panel",
    description: "Attend the fostering panel where independent experts review your assessment and make a recommendation.",
    duration: "Month 5–6",
    color: "#2A9D8F",
  },
  {
    icon: Heart,
    title: "First Placement",
    description: "Welcome your first foster child home. We'll be there before, during and after to ensure everything goes smoothly.",
    duration: "Month 6+",
    color: "#16324F",
  },
];

export default function JourneySection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="support" ref={ref} className="py-24 relative overflow-hidden" style={{ background: "#FAF7F2" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#2A9D8F" }}>
            Your Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair)", color: "#16324F" }}>
            From Enquiry to{" "}
            <span className="gradient-text">First Placement</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Our guided process makes becoming a foster carer straightforward and supportive at every stage.
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden lg:block relative">
          {/* Connector line */}
          <div className="absolute top-20 left-[8.33%] right-[8.33%] h-0.5 z-0" style={{ background: "linear-gradient(to right, #2A9D8F, #16324F, #2A9D8F, #16324F, #2A9D8F, #16324F)" }} />

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {steps.map(({ icon: Icon, title, description, duration, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center text-center"
              >
                {/* Step circle */}
                <div className="relative mb-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4 border-white transition-transform duration-300 hover:scale-110"
                    style={{ background: color }}
                  >
                    <Icon size={24} className="text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shadow"
                    style={{ background: "#16324F" }}>
                    {i + 1}
                  </div>
                </div>

                <span className="text-xs font-semibold tracking-wider uppercase mb-2" style={{ color }}>
                  {duration}
                </span>
                <h3 className="font-bold text-sm mb-2" style={{ color: "#16324F" }}>
                  {title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map(({ icon: Icon, title, description, duration, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex gap-5"
            >
              {/* Left column */}
              <div className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg flex-shrink-0"
                  style={{ background: color }}
                >
                  <Icon size={20} className="text-white" />
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 mt-3 min-h-[40px]" style={{ background: `${color}40` }} />
                )}
              </div>

              {/* Content */}
              <div className="pb-6">
                <span className="text-xs font-semibold tracking-wider uppercase" style={{ color }}>
                  {duration}
                </span>
                <h3 className="font-bold text-base mt-1 mb-2" style={{ color: "#16324F", fontFamily: "var(--font-playfair)" }}>
                  {title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl btn-shimmer"
            style={{ background: "#2A9D8F", boxShadow: "0 8px 30px rgba(42,157,143,0.3)" }}
          >
            <MessageCircle size={18} />
            Begin Your Journey — Free Enquiry
          </a>
        </motion.div>
      </div>
    </section>
  );
}
