"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What are the requirements to become a foster carer?",
    a: "You need to be over 21, have a spare bedroom, live in the UK, and have a genuine desire to care for children. You don't need to own your home, be married, have biological children, or have specific qualifications. Single people, couples, and families of all backgrounds can foster.",
  },
  {
    q: "How much will I be paid as a foster carer?",
    a: "BrightPath offers allowances from £400 to £650+ per week depending on the child's age and needs, your experience level, and the type of placement. This covers the child's living costs plus provides a professional fee for your time and skill.",
  },
  {
    q: "How long does the assessment process take?",
    a: "The assessment process typically takes 4–6 months. It begins with an introductory chat, followed by DBS checks, references, a home study and the Form F assessment. We guide and support you throughout — most carers find it a positive, empowering experience.",
  },
  {
    q: "Can I foster if I work full-time?",
    a: "It depends on the type of fostering. For long-term or emergency placements you would need to reduce work hours or stop working. However, respite fostering (short breaks) may be compatible with full-time work. We'll discuss what works for your circumstances.",
  },
  {
    q: "What support will I receive after approval?",
    a: "Every BrightPath foster carer receives a dedicated supervising social worker, 24/7 telephone support, regular home visits, access to our foster carer community groups, fully funded ongoing training, and financial support for respite breaks.",
  },
  {
    q: "Do I need experience with children?",
    a: "No formal experience is required. Many of our best carers came to fostering with no professional background in childcare. What matters most is warmth, resilience, patience, and willingness to learn. Our training equips you with every skill you need.",
  },
  {
    q: "What happens if I find fostering too difficult?",
    a: "We won't leave you to struggle. Our support team is available 24/7. If a placement isn't working, we can arrange a move in a way that's safe for the child and fair to you. Your wellbeing is as important to us as the child's.",
  },
  {
    q: "Can I choose the type of child I foster?",
    a: "Yes. During your assessment we discuss your preferences — age range, number of children, specific needs you feel equipped to support. We match placements carefully to ensure the best outcomes for both carers and children.",
  },
];

function FAQItem({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.06 }}
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${open ? "border-teal-200 shadow-lg" : "border-gray-100"}`}
      style={open ? { borderColor: "rgba(42,157,143,0.3)" } : {}}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors hover:bg-gray-50"
      >
        <span className="font-semibold text-base" style={{ color: "#16324F" }}>{q}</span>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
          style={{ background: open ? "#2A9D8F" : "#FAF7F2" }}
        >
          {open
            ? <Minus size={14} className="text-white" />
            : <Plus size={14} style={{ color: "#2A9D8F" }} />
          }
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 sm:px-6 pb-6 text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-4">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-5 gap-14 items-start">
          {/* Left */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#2A9D8F" }}>
              FAQ
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair)", color: "#16324F" }}>
              Questions{" "}
              <span className="gradient-text">Answered</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              We know fostering raises many questions. Here are the answers to the ones we hear most often — but please do get in touch if yours isn't here.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105 btn-shimmer"
              style={{ background: "#2A9D8F" }}
            >
              Ask Us Anything
            </a>

            {/* Decorative */}
            <div className="mt-12 p-6 rounded-2xl" style={{ background: "#FAF7F2" }}>
              <p className="text-2xl font-bold mb-1" style={{ color: "#16324F", fontFamily: "var(--font-playfair)" }}>Still unsure?</p>
              <p className="text-gray-600 text-sm mb-4">Speak to one of our foster carer advisors — free, no-obligation, confidential.</p>
              <a href="tel:08001234567" className="text-lg font-bold" style={{ color: "#2A9D8F" }}>0800 123 4567</a>
            </div>
          </motion.div>

          {/* Right — accordion */}
          <motion.div
            className="lg:col-span-3 space-y-3"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {faqs.map(({ q, a }, i) => (
              <FAQItem key={q} q={q} a={a} i={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
