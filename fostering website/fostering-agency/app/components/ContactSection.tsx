"use client";
import { useRef, useState, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle, Clock } from "lucide-react";

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", message: "", interest: "general",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Please enter a valid email";
    if (!form.message.trim()) e.message = "Please tell us a bit about yourself";
    return e;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1800);
  };

  return (
    <section id="contact" ref={ref} className="py-24 relative overflow-hidden" style={{ background: "#FAF7F2" }}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #2A9D8F, transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#2A9D8F" }}>
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)", color: "#16324F" }}>
            Start Your Fostering{" "}
            <span className="gradient-text">Journey Today</span>
          </h2>
          <p className="text-gray-600 text-lg">
            A quick, no-obligation conversation could be the first step towards changing a child's life — and yours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {[
              { icon: Phone, label: "Phone", value: "0800 123 4567", sub: "Free from any UK number", href: "tel:08001234567" },
              { icon: Mail, label: "Email", value: "hello@brightpathfostering.co.uk", sub: "We reply within 2 hours", href: "mailto:hello@brightpathfostering.co.uk" },
              { icon: MapPin, label: "Office", value: "12 King Street, Manchester, M2 6AW", sub: "By appointment only", href: "#" },
              { icon: Clock, label: "Hours", value: "Mon–Fri: 8am–8pm", sub: "Sat–Sun: 10am–4pm", href: "#" },
            ].map(({ icon: Icon, label, value, sub, href }, i) => (
              <motion.a
                key={label}
                href={href}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i }}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group card-lift"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(42,157,143,0.1)" }}>
                  <Icon size={20} style={{ color: "#2A9D8F" }} />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wider uppercase text-gray-400 mb-1">{label}</p>
                  <p className="font-semibold text-sm" style={{ color: "#16324F" }}>{value}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
                </div>
              </motion.a>
            ))}

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-sm h-40 relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=70"
                alt="Office location map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(22,50,79,0.4)" }}>
                <span className="text-white text-sm font-medium glass px-4 py-2 rounded-full">View on Maps</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl">
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(42,157,143,0.12)" }}>
                    <CheckCircle size={40} style={{ color: "#2A9D8F" }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-playfair)", color: "#16324F" }}>
                    Thank You!
                  </h3>
                  <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                    We&apos;ve received your enquiry and a member of our team will be in touch within 2 hours.
                  </p>
                  <p className="mt-4 text-sm font-semibold" style={{ color: "#2A9D8F" }}>
                    Check your email for your free guides.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="text-xl font-bold mb-6" style={{ color: "#16324F", fontFamily: "var(--font-playfair)" }}>
                    Free, No-Obligation Enquiry
                  </h3>

                  {/* Interest select */}
                  <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700 mb-2">I&apos;m interested in...</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { val: "general", label: "General Info" },
                        { val: "apply", label: "Applying Now" },
                        { val: "respite", label: "Respite Care" },
                      ].map(({ val, label }) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => setForm({ ...form, interest: val })}
                          className={`py-2.5 px-3 rounded-xl text-xs font-semibold border-2 transition-all duration-200 ${
                            form.interest === val ? "text-white" : "text-gray-500 border-gray-200 hover:border-gray-300"
                          }`}
                          style={form.interest === val ? { background: "#2A9D8F", borderColor: "#2A9D8F" } : {}}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name + Email row */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jane Smith"
                        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2 ${errors.name ? "border-red-400" : "border-gray-200 focus:border-teal-400"}`}
                        style={{ focusRingColor: "#2A9D8F" } as React.CSSProperties}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="jane@example.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2 ${errors.email ? "border-red-400" : "border-gray-200"}`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="07700 900000"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none transition-all duration-200"
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Tell us about yourself *</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="A little about your living situation, why you're interested in fostering, and any questions you have..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 resize-none ${errors.message ? "border-red-400" : "border-gray-200"}`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl btn-shimmer disabled:opacity-80"
                    style={{ background: "#2A9D8F", boxShadow: "0 8px 30px rgba(42,157,143,0.35)" }}
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send My Free Enquiry
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-400 mt-4">
                    By submitting you agree to our privacy policy. We&apos;ll never share your details.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
