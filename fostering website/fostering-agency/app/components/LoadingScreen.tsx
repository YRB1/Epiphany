"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "#16324F" }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Logo mark */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "backOut" }}
            className="mb-8"
          >
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 rounded-full bg-teal opacity-20 animate-ping" />
              <div className="relative w-20 h-20 rounded-full bg-teal flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M20 6C20 6 8 13 8 22C8 28.627 13.373 34 20 34C26.627 34 32 28.627 32 22C32 13 20 6 20 6Z" fill="white" opacity="0.9"/>
                  <path d="M20 12C20 12 13 17 13 22C13 25.866 16.134 29 20 29C23.866 29 27 25.866 27 22C27 17 20 12 20 12Z" fill="white"/>
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-white text-xl font-light tracking-[0.3em] uppercase mb-8"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            BrightPath Fostering
          </motion.p>

          {/* Progress bar */}
          <div className="w-48 h-0.5 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: "#2A9D8F" }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
