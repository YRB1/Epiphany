"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const pages = [
  {
    number: 1,
    title: "What Is Fostering?",
    content:
      "Fostering means providing a safe, nurturing home for a child or young person who cannot live with their birth family. As a foster carer, you become a critical part of a child's life — offering stability, routine and unconditional care while they need it most.",
    highlight: "Over 80,000 children are in foster care in the UK today.",
    bg: "#16324F",
    accent: "#2A9D8F",
    icon: "🏠",
  },
  {
    number: 2,
    title: "Who Can Foster?",
    content:
      "Fostering is open to people from all walks of life. You don't need to own your home, be married, or have children. You do need a spare bedroom, a caring nature, and a commitment to making a difference. Single people, couples, and families all foster successfully.",
    highlight: "If you have love to give, you could be a foster carer.",
    bg: "#2A9D8F",
    accent: "#16324F",
    icon: "👨‍👩‍👧",
  },
  {
    number: 3,
    title: "The Application Process",
    content:
      "Our friendly, guided process typically takes 4-6 months. It begins with a no-obligation chat, followed by a home visit, then a thorough assessment (Form F). We walk alongside you every step of the way, preparing you for approval panel.",
    highlight: "Most applicants are approved at their first panel.",
    bg: "#16324F",
    accent: "#2A9D8F",
    icon: "📋",
  },
  {
    number: 4,
    title: "Training & Support",
    content:
      "From day one, you'll access our award-winning training programme — Skills to Foster, trauma-informed care, therapeutic parenting and much more. All training is free, flexible, and designed around your schedule.",
    highlight: "100+ hours of CPD-accredited training included.",
    bg: "#2A9D8F",
    accent: "#16324F",
    icon: "🎓",
  },
  {
    number: 5,
    title: "Payments & Benefits",
    content:
      "BrightPath offers some of the most competitive fostering allowances in the UK — up to £650+ per week depending on the child's needs. Plus, enjoy tax benefits, birthday allowances, holiday contributions and more.",
    highlight: "Fostering allowances are separate from and in addition to benefits.",
    bg: "#16324F",
    accent: "#2A9D8F",
    icon: "💰",
  },
  {
    number: 6,
    title: "Success Stories",
    content:
      "\"I never imagined how much fostering would change all of our lives — the child's and mine. BrightPath supported me from day one, and today I've fostered 12 children.\" — Sarah, foster carer since 2012.",
    highlight: "Join hundreds of families who've already taken the leap.",
    bg: "#2A9D8F",
    accent: "#16324F",
    icon: "⭐",
  },
];

export default function BookletSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const goNext = () => {
    if (currentPage < pages.length - 1) {
      setDirection(1);
      setCurrentPage((p) => p + 1);
    }
  };
  const goPrev = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage((p) => p - 1);
    }
  };

  const page = pages[currentPage];

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#2A9D8F" }}>
            Learn About Fostering
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair)", color: "#16324F" }}>
            Your Complete{" "}
            <span className="gradient-text">Fostering Guide</span>
          </h2>
        </motion.div>

        {/* Book container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Book shadow */}
          <div className="absolute -bottom-6 left-[10%] right-[10%] h-12 blur-2xl opacity-30 rounded-full" style={{ background: "#16324F" }} />

          {/* Book */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ minHeight: "420px" }}>
            {/* Page spine effect */}
            <div className="absolute left-0 top-0 bottom-0 w-6 z-10 shadow-inner" style={{
              background: "linear-gradient(to right, rgba(0,0,0,0.3), transparent)"
            }} />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentPage}
                custom={direction}
                initial={{ opacity: 0, rotateY: direction > 0 ? -30 : 30, x: direction > 0 ? 80 : -80 }}
                animate={{ opacity: 1, rotateY: 0, x: 0 }}
                exit={{ opacity: 0, rotateY: direction > 0 ? 30 : -30, x: direction > 0 ? -80 : 80 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid md:grid-cols-5 min-h-[420px]"
                style={{ background: page.bg }}
              >
                {/* Page number side */}
                <div className="md:col-span-1 flex flex-col items-center justify-center p-8 opacity-30">
                  <span className="text-7xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
                    {page.number}
                  </span>
                  <div className="w-px h-32 mt-4" style={{ background: "rgba(255,255,255,0.3)" }} />
                </div>

                {/* Content */}
                <div className="md:col-span-4 flex flex-col justify-center p-8 sm:p-12">
                  <div className="text-5xl mb-6">{page.icon}</div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-5" style={{ fontFamily: "var(--font-playfair)" }}>
                    {page.title}
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed mb-8">
                    {page.content}
                  </p>
                  <div
                    className="inline-flex items-start gap-3 p-4 rounded-2xl text-sm font-medium"
                    style={{ background: "rgba(255,255,255,0.12)", color: "white" }}
                  >
                    <span className="text-lg flex-shrink-0">💡</span>
                    <span>{page.highlight}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={goPrev}
              disabled={currentPage === 0}
              className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-200 disabled:opacity-30 hover:scale-105"
              style={{ background: "#16324F", color: "white" }}
            >
              <ChevronLeft size={16} />
              Previous
            </button>

            {/* Page dots */}
            <div className="flex gap-2">
              {pages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > currentPage ? 1 : -1); setCurrentPage(i); }}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === currentPage ? 28 : 10,
                    height: 10,
                    background: i === currentPage ? "#2A9D8F" : "#16324F20",
                  }}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              disabled={currentPage === pages.length - 1}
              className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-200 disabled:opacity-30 hover:scale-105"
              style={{ background: "#2A9D8F", color: "white" }}
            >
              Next
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
