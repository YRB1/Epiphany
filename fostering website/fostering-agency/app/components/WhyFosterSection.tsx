"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Coins, GraduationCap, Users, Clock, Smile } from "lucide-react";

const cards = [
  {
    icon: Heart,
    title: "Make a Real Difference",
    description:
      "Give a vulnerable child stability, love and safety. The impact you have will last a lifetime — fostering is one of the most meaningful things you can do.",
    color: "#2A9D8F",
  },
  {
    icon: Coins,
    title: "Competitive Allowances",
    description:
      "Receive up to £650+ per week, tax benefits, and additional payments. We offer some of the most generous fostering allowances in the UK.",
    color: "#16324F",
  },
  {
    icon: GraduationCap,
    title: "World-Class Training",
    description:
      "Access accredited training programmes, workshops and skill-building sessions — all fully funded and tailored to your schedule.",
    color: "#2A9D8F",
  },
  {
    icon: Users,
    title: "Join Our Community",
    description:
      "Connect with 500+ foster families across the UK. Share experiences, attend social events, and build friendships that last.",
    color: "#16324F",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Our dedicated support team is available around the clock. You're never alone — day or night, we're just a phone call away.",
    color: "#2A9D8F",
  },
  {
    icon: Smile,
    title: "Flexible Lifestyle",
    description:
      "Foster with confidence knowing we work around your lifestyle. Part-time fostering, respite care and emergency placements available.",
    color: "#16324F",
  },
];

export default function WhyFosterSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-foster" ref={ref} className="py-24 relative overflow-hidden" style={{ background: "#FAF7F2" }}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(42,157,143,0.15), transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#2A9D8F" }}>
            Why Foster With Us?
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair)", color: "#16324F" }}>
            Everything You Need to{" "}
            <span className="gradient-text">Thrive as a Foster Carer</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We remove the barriers so you can focus on what matters most — providing a loving home and changing a child's life.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title, description, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="group bg-white rounded-3xl p-8 card-lift cursor-default border border-gray-100"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${color}15` }}
              >
                <Icon size={26} style={{ color }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#16324F", fontFamily: "var(--font-playfair)" }}>
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
              <div
                className="mt-6 h-0.5 w-0 rounded-full transition-all duration-500 group-hover:w-full"
                style={{ background: `${color}40` }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-14 text-center"
        >
          <p className="text-gray-600 mb-5">
            Ready to find out if fostering is right for you?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl btn-shimmer"
            style={{ background: "#16324F", boxShadow: "0 8px 30px rgba(22,50,79,0.25)" }}
          >
            Start Your Journey Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
