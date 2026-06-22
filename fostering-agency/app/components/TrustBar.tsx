"use client";
import { motion } from "framer-motion";
import { Shield, Award, Users, Star, CheckCircle, Lock } from "lucide-react";

const items = [
  { icon: Shield, text: "Ofsted Registered" },
  { icon: Award, text: "Outstanding Rating" },
  { icon: Users, text: "500+ Families" },
  { icon: Star, text: "4.9/5 Rated" },
  { icon: CheckCircle, text: "DBS Checked Staff" },
  { icon: Lock, text: "ICO Registered" },
];

export default function TrustBar() {
  return (
    <div className="py-4 border-b border-gray-100" style={{ background: "white" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {items.map(({ icon: Icon, text }, i) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-2"
            >
              <Icon size={14} style={{ color: "#2A9D8F" }} />
              <span className="text-xs font-medium text-gray-500 whitespace-nowrap">{text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
