"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [playing, setPlaying] = useState(false);

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#2A9D8F" }}>
            Real Stories
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair)", color: "#16324F" }}>
            Hear From Real{" "}
            <span className="gradient-text">Foster Families</span>
          </h2>
        </motion.div>

        {/* Video container */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Floating shadow */}
          <div className="absolute -bottom-8 left-[5%] right-[5%] h-16 blur-3xl opacity-30 rounded-full"
            style={{ background: "#16324F" }} />

          {/* Video frame */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white" style={{ aspectRatio: "16/9" }}>
            {!playing ? (
              <>
                {/* Thumbnail */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=1200&q=80"
                  alt="Foster family video thumbnail"
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center"
                  style={{ background: "rgba(22,50,79,0.5)" }}>
                  <motion.button
                    onClick={() => setPlaying(true)}
                    className="relative group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Play video"
                  >
                    {/* Pulse rings */}
                    <span className="absolute inset-0 rounded-full animate-ping opacity-40" style={{ background: "#2A9D8F" }} />
                    <span className="absolute inset-0 scale-125 rounded-full animate-ping opacity-20" style={{ background: "#2A9D8F", animationDelay: "0.3s" }} />
                    {/* Button */}
                    <div className="relative w-20 h-20 rounded-full flex items-center justify-center shadow-2xl"
                      style={{ background: "#2A9D8F" }}>
                      <Play size={30} className="text-white ml-1" />
                    </div>
                  </motion.button>
                  <p className="text-white/80 text-sm mt-5 font-medium">Watch our foster family stories</p>
                </div>
              </>
            ) : (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Foster Family Stories"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            )}
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-20 blur-2xl pointer-events-none" style={{ background: "#2A9D8F" }} />
          <div className="absolute -bottom-4 -left-6 w-32 h-32 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "#16324F" }} />
        </motion.div>

        {/* Quote strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mt-14"
        >
          <p className="text-2xl font-light italic mb-4" style={{ color: "#16324F", fontFamily: "var(--font-playfair)" }}>
            &ldquo;Fostering changed my life as much as it changed theirs. I wish I&apos;d done it sooner.&rdquo;
          </p>
          <p className="text-sm font-semibold tracking-wide" style={{ color: "#2A9D8F" }}>
            — SARAH T., FOSTER CARER SINCE 2015
          </p>
        </motion.div>
      </div>
    </section>
  );
}
