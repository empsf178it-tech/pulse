import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';
import { soundManager } from '../utils/sound';

export const StoryPage = ({ onNavigate }) => {
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
            <span>THE MANIFESTO</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="heading-hero text-white mb-6 leading-tight break-words"
          >
            BUILT AROUND <span className="text-gradient-citrus">REFRESHMENT.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg md:text-2xl font-light leading-relaxed max-w-2xl mx-auto"
          >
            We set out to strip away artificial sodas and sugary energy drink clichés to build a contemporary beverage brand rooted in pure, vibrant flavor physics.
          </motion.p>
        </div>

        {/* Story Section 1: WHY PULSE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 sm:mb-32">
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs font-bold text-pulse-citrus tracking-widest uppercase block">
              01 // WHY PULSE
            </span>
            <h2 className="font-display text-xl sm:text-3xl md:text-4xl font-extrabold uppercase text-white leading-tight break-words">
              “WE WANTED REFRESHMENT TO FEEL AS EXCITING AS THE MOMENT YOU OPEN IT.”
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Traditional soft drinks were stuck in outdated sugar formulas and heavy artificial dyes. We believed non-alcoholic drinks should command the same culinary respect and aesthetic obsession as fine craft beverages.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              PULSE was created to deliver an uncompromising sensory rush: cold-pressed fruit clarity, fine micro-bubbles, and sleek editorial design.
            </p>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden glass-panel border border-white/15 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=1200&auto=format&fit=crop"
              alt="PULSE Crafting Studio"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Story Section 2: OUR APPROACH */}
        <div className="py-12 sm:py-20 px-4 sm:px-8 md:px-14 rounded-3xl glass-panel border border-white/15 mb-24 sm:mb-32">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs font-bold text-pulse-citrus tracking-widest uppercase block mb-2">
              02 // OUR THREE PILLARS
            </span>
            <h2 className="heading-section text-white">
              OUR APPROACH.
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <div className="w-full sm:w-[calc(50%-16px)] lg:w-0 lg:flex-1 p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 flex flex-col justify-between">
              <div>
                <span className="w-10 h-10 rounded-full bg-pulse-citrus/20 border border-pulse-citrus/40 flex items-center justify-center text-pulse-citrus font-mono font-bold text-sm mb-4">
                  01
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-white mb-2">
                  BOLD FLAVOUR
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Zero synthetic flavorings. Only genuine fruit juices and cold-extracted botanicals.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-[calc(50%-16px)] lg:w-0 lg:flex-1 p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 flex flex-col justify-between">
              <div>
                <span className="w-10 h-10 rounded-full bg-pulse-berry/20 border border-pulse-berry/40 flex items-center justify-center text-pulse-berry font-mono font-bold text-sm mb-4">
                  02
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-white mb-2">
                  THOUGHTFUL INGREDIENTS
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Responsibly sourced from volcanic soils, coastal groves, and mountain valleys.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-[calc(50%-16px)] lg:w-0 lg:flex-1 p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 flex flex-col justify-between">
              <div>
                <span className="w-10 h-10 rounded-full bg-pulse-tropic/20 border border-pulse-tropic/40 flex items-center justify-center text-pulse-tropic font-mono font-bold text-sm mb-4">
                  03
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-white mb-2">
                  MODERN DESIGN
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Minimalist glass packaging engineered to maintain maximum carbonation and chill.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Story Section 3: OUR PHILOSOPHY */}
        <div className="text-center py-14 sm:py-24 px-4 sm:px-8 bg-[#07080A] rounded-3xl border border-white/10 relative overflow-hidden mb-24 sm:mb-32">
          <span className="font-mono text-xs font-bold text-pulse-citrus tracking-widest uppercase block mb-4">
            03 // OUR CORE PHILOSOPHY
          </span>

          <h2 className="font-display text-2xl sm:text-5xl md:text-7xl font-extrabold uppercase text-white leading-tight sm:leading-none tracking-tight mb-8 break-words">
            KEEP IT FRESH. <br />
            <span className="text-gradient-citrus">KEEP IT BRIGHT.</span> <br />
            KEEP IT MOVING.
          </h2>

          <button
            onClick={() => {
              soundManager.playFizzPop();
              onNavigate('drinks');
            }}
            className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-pulse-citrus text-black font-mono text-[10px] sm:text-xs font-extrabold uppercase tracking-widest hover:bg-white transition-colors"
            data-cursor="hover"
          >
            DISCOVER THE DRINKS RANGE &rarr;
          </button>
        </div>

        {/* ========================================================= */}
        {/* STORY SECTION 4: THE MILESTONES TIMELINE                  */}
        {/* ========================================================= */}
        <section className="mt-24 sm:mt-32 pt-16 sm:pt-20 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-mono text-xs font-bold text-pulse-citrus tracking-widest uppercase block mb-3">
                04 // THE CHRONICLE
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-white break-words">
                THE PULSE TIMELINE.
              </h2>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md">
              From late-night laboratory flavor trials to international design accolades, trace how PULSE redefined zero-alcohol beverages.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <div className="w-full sm:w-[calc(50%-16px)] lg:w-0 lg:flex-1 p-5 sm:p-8 rounded-3xl glass-panel border border-white/15 relative flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-pulse-citrus uppercase tracking-widest block mb-2">2024 · THE LAB INCEPTION</span>
                <h3 className="font-display text-xl font-bold uppercase text-white mb-3">FLAVOUR PHYSICS ZERO</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Formulated our proprietary cold carbonation & natural fruit extract density curve after testing 240+ botanical blends.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-[calc(50%-16px)] lg:w-0 lg:flex-1 p-5 sm:p-8 rounded-3xl glass-panel border border-white/15 relative flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-pulse-berry uppercase tracking-widest block mb-2">2025 · CRAFT BATCH LAUNCH</span>
                <h3 className="font-display text-xl font-bold uppercase text-white mb-3">URBAN POP-UP REVOLUTION</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Debuted at Tokyo, Berlin & NYC boutique design spaces, selling out 50,000 inaugural cans in under 72 hours.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-[calc(50%-16px)] lg:w-0 lg:flex-1 p-5 sm:p-8 rounded-3xl glass-panel border border-white/15 relative flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-pulse-zero uppercase tracking-widest block mb-2">2026 · GLOBAL EXPANSION</span>
                <h3 className="font-display text-xl font-bold uppercase text-white mb-3">INTERNATIONAL DESIGN AWARD</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Awarded Gold for Best Minimalist Beverage Packaging and 100% Sustainable Supply Chain Excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* STORY SECTION 5: ECO SUSTAINABILITY & PACKAGING           */}
        {/* ========================================================= */}
        <section className="mt-24 sm:mt-32 pt-16 sm:pt-20 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-xs font-bold text-pulse-citrus tracking-widest uppercase block">
                05 // ZERO WASTE VISION
              </span>
              <h2 className="font-display text-xl sm:text-3xl md:text-5xl font-extrabold uppercase text-white leading-tight break-words">
                INFINITE RECYCLABILITY. ZERO PLASTIC FOOTPRINT.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Every PULSE can is crafted from 100% infinitely recyclable aluminum with BPA-free protective linings and organic soy-based inks.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-pulse-citrus block">60 DAYS</span>
                  <span className="font-mono text-[10px] text-slate-400 uppercase">CAN-TO-SHELF RECYCLING</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-white block">0g</span>
                  <span className="font-mono text-[10px] text-slate-400 uppercase">SINGLE-USE PLASTIC</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden glass-panel border border-white/15 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200&auto=format&fit=crop"
                alt="PULSE Sustainable Can Architecture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-mono text-xs font-bold text-pulse-citrus uppercase block mb-1">SUSTAINABLE MATERIALS</span>
                <p className="text-white text-xs">Lightweight aluminum design engineered for optimal thermal conductivity.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* STORY SECTION 6: BEVERAGE ALCHEMISTS SPOTLIGHT            */}
        {/* ========================================================= */}
        <section className="mt-24 sm:mt-32 pt-16 sm:pt-20 border-t border-white/10">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs font-bold text-pulse-citrus tracking-widest uppercase block mb-3">
              06 // THE CREATIVE COLLECTIVE
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-white break-words">
              MEET THE LIQUID ALCHEMISTS.
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <div className="w-full sm:w-[calc(50%-16px)] lg:w-0 lg:flex-1 p-6 rounded-3xl glass-panel border border-white/15 flex flex-col justify-between">
              <div>
                <div className="h-48 rounded-2xl overflow-hidden mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
                    alt="Elena Vance - Head Flavor Chemist"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-mono text-[10px] text-pulse-citrus font-bold uppercase tracking-wider block mb-1">HEAD FLAVOR CHEMIST</span>
                <h3 className="font-display text-xl font-bold uppercase text-white mb-2">ELENA VANCE</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Pioneered our low-temperature essential oil infusion process after 10 years in perfumery and molecular gastronomy.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-[calc(50%-16px)] lg:w-0 lg:flex-1 p-6 rounded-3xl glass-panel border border-white/15 flex flex-col justify-between">
              <div>
                <div className="h-48 rounded-2xl overflow-hidden mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                    alt="Marcus Thorne - Liquid Physicist"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-mono text-[10px] text-pulse-berry font-bold uppercase tracking-wider block mb-1">LIQUID PHYSICIST</span>
                <h3 className="font-display text-xl font-bold uppercase text-white mb-2">MARCUS THORNE</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Engineered the 4.2 Vol micro-effervescence carbonation system to guarantee silky mouthfeel in every can.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-[calc(50%-16px)] lg:w-0 lg:flex-1 p-6 rounded-3xl glass-panel border border-white/15 flex flex-col justify-between">
              <div>
                <div className="h-48 rounded-2xl overflow-hidden mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop"
                    alt="Aria Chen - Creative Director"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-mono text-[10px] text-pulse-zero font-bold uppercase tracking-wider block mb-1">CREATIVE DIRECTOR</span>
                <h3 className="font-display text-xl font-bold uppercase text-white mb-2">ARIA CHEN</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Shapes PULSE’s signature editorial aesthetic, glassmorphic UI, and minimalist industrial packaging.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
