import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Mail, Send, CheckCircle2, ArrowRight, MapPin } from 'lucide-react';
import { soundManager } from '../utils/sound';
import { SocialIcons } from '../components/SocialIcons';

export const ContactPage = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundManager.playPourPour();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      soundManager.playFizzPop();
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#0B0C10] text-white pt-28 sm:pt-32 pb-28 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Banner */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="badge-hero mb-8"
          >
            <Sparkles className="w-4 h-4 text-pulse-citrus animate-pulse" />
            <span>GET IN TOUCH</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="heading-hero text-white mb-6 leading-tight break-words"
          >
            LET'S KEEP <span className="text-gradient-citrus">THE PULSE GOING.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg md:text-2xl font-light leading-relaxed max-w-2xl mx-auto"
          >
            Whether you have brand inquiries, event collaboration ideas, or press questions, we'd love to connect.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Emails */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-5 sm:p-8 rounded-3xl glass-panel border border-white/15 space-y-6 sm:space-y-8">
              <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-white tracking-wider border-b border-white/10 pb-4">
                DIRECT CHANNELS
              </h3>

              <div>
                <span className="font-mono text-xs text-slate-500 uppercase font-bold tracking-widest block mb-1">
                  GENERAL INQUIRIES
                </span>
                <a
                  href="mailto:hello@pulse.example"
                  className="font-display font-bold text-lg sm:text-xl text-white hover:text-pulse-citrus transition-colors underline decoration-pulse-citrus/40 break-words"
                >
                  hello@pulse.example
                </a>
              </div>

              <div>
                <span className="font-mono text-xs text-slate-500 uppercase font-bold tracking-widest block mb-1">
                  CREATIVE COLLABORATIONS
                </span>
                <a
                  href="mailto:studio@pulse.example"
                  className="font-display font-bold text-lg sm:text-xl text-white hover:text-pulse-citrus transition-colors underline decoration-pulse-citrus/40 break-words"
                >
                  studio@pulse.example
                </a>
              </div>

              <div>
                <span className="font-mono text-xs text-slate-500 uppercase font-bold tracking-widest block mb-1">
                  COMMERCIAL PARTNERSHIPS
                </span>
                <a
                  href="mailto:partners@pulse.example"
                  className="font-display font-bold text-lg sm:text-xl text-white hover:text-pulse-citrus transition-colors underline decoration-pulse-citrus/40 break-words"
                >
                  partners@pulse.example
                </a>
              </div>
            </div>

            {/* Social Radar Card */}
            <div className="p-5 sm:p-8 rounded-3xl glass-panel border border-white/15 space-y-4">
              <span className="font-mono text-xs text-pulse-citrus font-bold uppercase tracking-widest block">
                SOCIAL RADAR
              </span>
              <h4 className="font-display text-base sm:text-lg font-bold uppercase text-white break-words">
                CONNECT WITH OUR CREATIVE COMMUNITY
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Stay updated on unreleased flavor trials, pop-up events, and BTS studio sessions.
              </p>
              <div className="pt-2">
                <SocialIcons />
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-pulse-citrus/10 border border-pulse-citrus/20 font-mono text-xs text-slate-300 space-y-2">
              <p className="font-bold text-pulse-citrus uppercase">FRONTEND DEMO NOTICE</p>
              <p>Form submission is simulated on client-side for demonstration purposes.</p>
            </div>
          </div>

          {/* Right Column: Contact Form or Success View */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 md:p-12 rounded-3xl glass-panel border border-white/15 relative">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-8 sm:py-12 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-pulse-citrus/20 border border-pulse-citrus text-pulse-citrus flex items-center justify-center mx-auto shadow-xl shadow-pulse-citrus/20">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white break-words">
                      MESSAGE RECEIVED!
                    </h3>

                    <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out, <strong className="text-pulse-citrus">{formData.name}</strong>. Our team will review your message and respond shortly.
                    </p>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
                      }}
                      className="px-6 sm:px-8 py-3 rounded-full bg-white/10 text-white font-mono text-xs font-bold uppercase hover:bg-pulse-citrus hover:text-black transition-colors"
                      data-cursor="hover"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white mb-6 break-words">
                      SEND US A MESSAGE
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="font-mono text-xs text-slate-400 font-bold uppercase tracking-wider block mb-2">
                          YOUR NAME *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Morgan"
                          className="w-full px-4 sm:px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-pulse-citrus font-mono text-xs sm:text-sm transition-colors"
                        />
                      </div>

                      <div>
                        <label className="font-mono text-xs text-slate-400 font-bold uppercase tracking-wider block mb-2">
                          EMAIL ADDRESS *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@example.com"
                          className="w-full px-4 sm:px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-pulse-citrus font-mono text-xs sm:text-sm transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-mono text-xs text-slate-400 font-bold uppercase tracking-wider block mb-2">
                        SUBJECT
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 sm:px-5 py-3.5 rounded-2xl bg-[#14161D] border border-white/10 text-white focus:outline-none focus:border-pulse-citrus font-mono text-xs sm:text-sm transition-colors"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Collaborations">Collaborations</option>
                        <option value="Partnerships">Partnerships & Distribution</option>
                        <option value="Press & Media">Press & Media</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-mono text-xs text-slate-400 font-bold uppercase tracking-wider block mb-2">
                        YOUR MESSAGE *
                      </label>
                      <textarea
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project or inquiry..."
                        className="w-full px-4 sm:px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-pulse-citrus font-mono text-xs sm:text-sm transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full bg-pulse-citrus text-black font-mono font-extrabold text-xs uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2"
                      data-cursor="hover"
                    >
                      {isSubmitting ? (
                        <span>PROCESSING SPARKLING FIZZ...</span>
                      ) : (
                        <>
                          <span>SEND MESSAGE</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* GOOGLE MAP & HEADQUARTERS SECTION                         */}
        {/* ========================================================= */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="font-mono text-xs font-bold text-pulse-citrus tracking-widest uppercase block mb-2">
                STUDIO & FLAVOUR LAB
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-white break-words">
                VISIT OUR HEADQUARTERS.
              </h2>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              Our liquid research studio and flagship tasting room are located in the heart of Shibuya's creative design district.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* HQ Information Card */}
            <div className="lg:col-span-4 p-5 sm:p-8 rounded-3xl glass-panel border border-white/15 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-5 h-5 text-pulse-citrus" />
                  <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-white break-words">
                    PULSE STUDIO TOKYO
                  </h3>
                </div>

                <div className="space-y-4 font-mono text-xs text-slate-300">
                  <div>
                    <span className="text-slate-500 uppercase block mb-1">ADDRESS</span>
                    <p className="text-white font-semibold leading-relaxed">
                      108-0075 Shibuya District, 4-12-10 Jingumae<br />
                      Tokyo, Japan
                    </p>
                  </div>

                  <div>
                    <span className="text-slate-500 uppercase block mb-1">TASTING ROOM HOURS</span>
                    <p className="text-white font-semibold">
                      Mon — Fri: 09:00 - 18:00 JST<br />
                      Sat: 10:00 - 16:00 JST
                    </p>
                  </div>

                  <div>
                    <span className="text-slate-500 uppercase block mb-1">PHONE</span>
                    <p className="text-white font-semibold">+81 (0)3 5410 8890</p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Shibuya+Jingumae+Tokyo"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playFizzPop()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-pulse-citrus hover:text-black text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300"
                data-cursor="hover"
              >
                <span>GET DIRECTIONS</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Embedded Dark Theme Google Map */}
            <div className="lg:col-span-8 rounded-3xl overflow-hidden glass-panel border border-white/15 min-h-[300px] sm:min-h-[380px] relative shadow-2xl">
              <iframe
                title="PULSE Headquarters Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754723146!2d139.70133657676757!3d35.66715297259254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca2c7590899%3A0xa6eb3e0b25e7146e!2sOmotesando!5e0!3m2!1sen!2sjp!4v1710000000000!5m2!1sen!2sjp"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  minHeight: '300px',
                  filter: 'invert(90%) hue-rotate(180deg) contrast(1.1) brightness(0.95)'
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[300px] sm:min-h-[380px] rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
