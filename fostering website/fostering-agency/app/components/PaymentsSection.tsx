"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, TrendingUp, Shield, Gift } from "lucide-react";

const tiers = [
  {
    label: "Standard Foster Care",
    range: "£400–£520",
    period: "per week",
    features: [
      "All living costs covered",
      "Clothing allowance",
      "Birthday & Christmas allowance",
      "Education support fund",
      "Mileage reimbursement",
    ],
    popular: false,
    bg: "bg-white",
  },
  {
    label: "Enhanced Care",
    range: "£520–£650",
    period: "per week",
    features: [
      "Everything in Standard, plus:",
      "Enhanced skills payment",
      "Respite care contributions",
      "Additional therapeutic support",
      "Higher training allowance",
    ],
    popular: true,
    bg: "",
  },
  {
    label: "Specialist Placements",
    range: "£650+",
    period: "per week",
    features: [
      "Everything in Enhanced, plus:",
      "Specialist skills premium",
      "Priority placement matching",
      "Extended support package",
      "Enhanced respite funding",
    ],
    popular: false,
    bg: "bg-white",
  },
];

const benefits = [
  { icon: TrendingUp, text: "Tax-free allowances up to £18,140/year" },
  { icon: Shield, text: "National Insurance credits included" },
  { icon: Gift, text: "Birthday & holiday top-ups" },
  { icon: Check, text: "No impact on most existing benefits" },
];

export default function PaymentsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="payments" ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#2A9D8F" }}>
            Payments & Allowances
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair)", color: "#16324F" }}>
            Market-Leading{" "}
            <span className="gradient-text">Fostering Allowances</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We offer some of the most competitive allowances in the UK — because your dedication deserves proper recognition.
          </p>
        </motion.div>

        {/* Tiers */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {tiers.map(({ label, range, period, features, popular }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`relative rounded-3xl p-8 ${popular ? "shadow-2xl scale-105" : "border border-gray-100 shadow-lg"}`}
              style={popular ? { background: "#16324F" } : { background: "white" }}
            >
              {popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-5 py-2 rounded-full text-xs font-bold text-white shadow" style={{ background: "#2A9D8F" }}>
                    MOST POPULAR
                  </span>
                </div>
              )}

              <p className={`text-sm font-semibold mb-3 ${popular ? "text-white/70" : "text-gray-500"}`}>{label}</p>
              <div className={`text-4xl font-bold mb-1 ${popular ? "text-white" : ""}`} style={{ fontFamily: "var(--font-playfair)", color: popular ? undefined : "#16324F" }}>
                {range}
              </div>
              <p className={`text-sm mb-8 ${popular ? "text-white/50" : "text-gray-400"}`}>{period}</p>

              <ul className="space-y-3 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}
                      style={{ background: popular ? "rgba(255,255,255,0.15)" : "rgba(42,157,143,0.12)" }}>
                      <Check size={11} style={{ color: popular ? "#3bbfb0" : "#2A9D8F" }} />
                    </div>
                    <span className={`text-sm leading-relaxed ${popular ? "text-white/80" : "text-gray-600"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 btn-shimmer`}
                style={popular
                  ? { background: "#2A9D8F", color: "white" }
                  : { background: "#16324F", color: "white" }
                }
              >
                Find Out More
              </a>
            </motion.div>
          ))}
        </div>

        {/* Benefits strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="rounded-2xl p-6 sm:p-8"
          style={{ background: "#FAF7F2" }}
        >
          <p className="text-center text-sm font-semibold tracking-wider uppercase mb-6" style={{ color: "#2A9D8F" }}>
            Additional Financial Benefits
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map(({ icon: Icon, text }, i) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.08 }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(42,157,143,0.12)" }}>
                  <Icon size={16} style={{ color: "#2A9D8F" }} />
                </div>
                <p className="text-sm text-gray-700">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
