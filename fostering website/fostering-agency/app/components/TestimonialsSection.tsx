"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Foster Carer since 2015",
    location: "Manchester",
    quote:
      "I was so nervous to begin, but BrightPath held my hand through every step. Now in my ninth year, I've fostered 14 children. The support is truly second to none — they feel like family.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    stars: 5,
  },
  {
    name: "James & Emma Collins",
    role: "Foster Carers since 2019",
    location: "Birmingham",
    quote:
      "We were worried our small house wouldn't qualify, but our social worker was so reassuring. BrightPath matched us with a wonderful child and the allowances have been more than generous.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    stars: 5,
  },
  {
    name: "Patricia Okonkwo",
    role: "Foster Carer since 2012",
    location: "London",
    quote:
      "Fourteen years, twenty-three children. I cannot imagine my life without fostering. BrightPath's 24/7 support line has saved me more times than I can count — they truly care about every carer.",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&q=80",
    stars: 5,
  },
  {
    name: "David & Claire Morrison",
    role: "Foster Carers since 2021",
    location: "Edinburgh",
    quote:
      "As first-time foster carers, we were overwhelmed. The Skills to Foster training gave us incredible confidence and our personal development worker is still in touch every single week.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#F4A261">
          <path d="M8 1.5l1.8 3.6 4 .6-2.9 2.8.7 4L8 10.5l-3.6 1.9.7-4L2.2 5.7l4-.6L8 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const t = setInterval(() => { setDir(1); setCurrent((c) => (c + 1) % testimonials.length); }, 6000);
    return () => clearInterval(t);
  }, []);

  const go = (i: number) => { setDir(i > current ? 1 : -1); setCurrent(i); };
  const prev = () => { setDir(-1); setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length); };
  const next = () => { setDir(1); setCurrent((c) => (c + 1) % testimonials.length); };

  const t = testimonials[current];

  return (
    <section id="stories" ref={ref} className="py-24 relative overflow-hidden" style={{ background: "#FAF7F2" }}>
      {/* Large quote mark decoration */}
      <div className="absolute top-12 left-12 text-[200px] leading-none font-bold pointer-events-none select-none opacity-[0.03]"
        style={{ color: "#16324F", fontFamily: "var(--font-playfair)" }}>
        &ldquo;
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#2A9D8F" }}>
            Success Stories
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair)", color: "#16324F" }}>
            Stories from the{" "}
            <span className="gradient-text">Heart</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative min-h-[320px] testimonial-shadow bg-white rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={current}
                custom={dir}
                initial={{ opacity: 0, x: dir * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -dir * 60 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="p-8 sm:p-12"
              >
                <div className="flex flex-col sm:flex-row gap-8">
                  {/* Avatar side */}
                  <div className="sm:w-48 flex-shrink-0 text-center sm:text-left">
                    <div className="relative inline-block">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-24 h-24 rounded-2xl object-cover shadow-lg mx-auto sm:mx-0"
                      />
                      <div
                        className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center shadow"
                        style={{ background: "#2A9D8F" }}
                      >
                        <Quote size={12} className="text-white" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="font-bold text-sm" style={{ color: "#16324F" }}>{t.name}</p>
                      <p className="text-xs text-gray-500 mt-1">{t.role}</p>
                      <p className="text-xs text-gray-400">{t.location}</p>
                      <div className="mt-2">
                        <Stars count={t.stars} />
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="flex-1 flex flex-col justify-center">
                    <p className="text-xl sm:text-2xl font-light leading-relaxed italic" style={{ color: "#16324F", fontFamily: "var(--font-playfair)" }}>
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Teal accent bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: "linear-gradient(to right, #2A9D8F, #16324F)" }} />
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110" style={{ background: "#16324F", color: "white" }} aria-label="Previous">
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{ width: i === current ? 28 : 10, height: 10, background: i === current ? "#2A9D8F" : "#16324F20" }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button onClick={next} className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110" style={{ background: "#2A9D8F", color: "white" }} aria-label="Next">
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Thumbnail row */}
        <div className="flex justify-center gap-4 mt-8">
          {testimonials.map((item, i) => (
            <button key={i} onClick={() => go(i)} className={`transition-all duration-300 rounded-xl overflow-hidden ${i === current ? "scale-110" : "opacity-50 hover:opacity-80"}`}
              style={i === current ? { outline: "2px solid #2A9D8F", outlineOffset: "2px" } : {}}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.avatar} alt={item.name} className="w-12 h-12 object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
