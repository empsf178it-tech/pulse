import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Sun, Droplet, Heart, Wind, Coffee } from 'lucide-react';
import { FLAVOUR_MOODS, DRINKS } from '../data/drinks';
import { soundManager } from '../utils/sound';

export const FlavoursPage = ({ onNavigate }) => {
  const [selectedMoodId, setSelectedMoodId] = useState(FLAVOUR_MOODS[0].id);

  const currentMood = FLAVOUR_MOODS.find((m) => m.id === selectedMoodId) || FLAVOUR_MOODS[0];
  const matchingDrink = DRINKS.find((d) => d.id === currentMood.drinkId) || DRINKS[0];

  return (
    <div className="min-h-screen bg-[#0B0C10] text-white pt-28 sm:pt-32 pb-28 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Background Accent Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[180px] opacity-15 pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: currentMood.accent }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="badge-hero mb-8"
          >
            <Sparkles className="w-4 h-4 text-pulse-citrus animate-pulse" />
            <span>PALATE UNIVERSE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="heading-hero text-white mb-6 leading-tight break-words"
          >
            CHOOSE <span className="text-gradient-citrus">YOUR MOOD.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg md:text-2xl font-light leading-relaxed max-w-2xl mx-auto"
          >
            Flavour profiles engineered around state of mind. Select a mood family to reveal its taste architecture and key botanicals.
          </motion.p>
        </div>

        {/* Mood Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-16">
          {FLAVOUR_MOODS.map((mood) => {
            const isSelected = selectedMoodId === mood.id;
            return (
              <button
                key={mood.id}
                onClick={() => {
                  soundManager.playFizzPop();
                  setSelectedMoodId(mood.id);
                }}
                className={`p-4 sm:p-6 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white/10 border-white/40 shadow-2xl scale-[1.02]'
                    : 'bg-white/5 border-white/5 hover:bg-white/8 hover:border-white/15'
                }`}
                data-cursor="explore"
              >
                <div>
                  <span
                    className="w-3.5 h-3.5 rounded-full block mb-3"
                    style={{ backgroundColor: mood.accent }}
                  />
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white uppercase tracking-wider mb-1">
                    {mood.name}
                  </h3>
                  <p className="font-mono text-[10px] text-slate-400">
                    {mood.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Editorial Detail Card */}
        <motion.div
          key={currentMood.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl glass-panel border border-white/15 p-5 sm:p-8 md:p-14 overflow-hidden relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div>
                <span
                  className="font-mono text-xs font-bold uppercase tracking-widest block mb-2"
                  style={{ color: currentMood.accent }}
                >
                  MOOD FAMILY // {currentMood.name}
                </span>
                <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase mb-4 break-words">
                  {matchingDrink.name}
                </h2>
                <p className="text-slate-300 text-sm sm:text-base md:text-lg font-light leading-relaxed">
                  {currentMood.description}
                </p>
              </div>

              {/* Grid Notes & Moment */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                <div>
                  <span className="font-mono text-xs text-slate-400 uppercase tracking-widest block mb-3">
                    TASTING NOTES
                  </span>
                  <ul className="space-y-2">
                    {currentMood.notes.map((note, idx) => (
                      <li key={idx} className="flex items-center gap-2 font-mono text-xs sm:text-sm text-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-pulse-citrus flex-shrink-0" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="font-mono text-xs text-slate-400 uppercase tracking-widest block mb-3">
                    SUGGESTED MOMENT
                  </span>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-white">
                    {currentMood.moment}
                  </div>
                </div>
              </div>

              <div className="pt-4 sm:pt-6">
                <button
                  onClick={() => {
                    soundManager.playPourPour();
                    onNavigate('drinks');
                  }}
                  className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-pulse-citrus text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-3"
                  data-cursor="hover"
                >
                  <span>VIEW DRINK SPECS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Large Image */}
            <div className="lg:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/15">
              <img
                src={matchingDrink.heroImage}
                alt={matchingDrink.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 font-mono text-xs text-slate-300">
                <span className="block text-pulse-citrus font-bold uppercase mb-1">INGREDIENT CORE:</span>
                <p className="line-clamp-2 text-white">
                  {matchingDrink.ingredients.join(' · ')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* FLAVOURS SECTION 2: FLAVOUR SCIENCE & PAIRING MATRIX      */}
        {/* ========================================================= */}
        <section className="mt-24 sm:mt-32 pt-16 sm:pt-20 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-mono text-xs font-bold text-pulse-citrus tracking-widest uppercase block mb-3">
                02 // SENSORY METRICS
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-white break-words">
                FLAVOUR ARCHITECTURE & PAIRINGS.
              </h2>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              Every PULSE formula is mapped across 4 key palate vectors: acidity balance, natural fruit density, effervescence velocity, and lingering botanicals.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <div className="w-full sm:w-[calc(50%-16px)] lg:w-0 lg:flex-1 p-6 sm:p-8 rounded-3xl glass-panel border border-white/15 hover:border-pulse-citrus/40 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-pulse-citrus/10 border border-pulse-citrus/30 flex items-center justify-center text-pulse-citrus mb-6 group-hover:scale-110 transition-transform">
                  <Sun className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs font-bold text-pulse-citrus uppercase tracking-widest block mb-2">01. CITRUS & ACIDITY</span>
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white mb-3">SHARP & BRIGHT</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  Cold-pressed Japanese Yuzu and Spanish White Grapefruit deliver crisp upfront tartness with a ultra-clean finish.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-slate-300">
                <span className="text-pulse-citrus font-bold block mb-1">PAIR WITH:</span>
                Spicy Asian fusion, grilled sea bass, wood-fired pizza, artisan tacos.
              </div>
            </div>

            <div className="w-full sm:w-[calc(50%-16px)] lg:w-0 lg:flex-1 p-6 sm:p-8 rounded-3xl glass-panel border border-white/15 hover:border-pulse-berry/40 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-pulse-berry/10 border border-pulse-berry/30 flex items-center justify-center text-pulse-berry mb-6 group-hover:scale-110 transition-transform">
                  <Droplet className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs font-bold text-pulse-berry uppercase tracking-widest block mb-2">02. NECTAR & DENSITY</span>
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white mb-3">LUSH & VIBRANT</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  Crushed wild raspberries and hibiscus blossom infuse full-bodied fruit richness without syrupy heaviness.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-slate-300">
                <span className="text-pulse-berry font-bold block mb-1">PAIR WITH:</span>
                Dark chocolate desserts, charcuterie boards, gourmet burgers, sunset aperitifs.
              </div>
            </div>

            <div className="w-full sm:w-[calc(50%-16px)] lg:w-0 lg:flex-1 p-6 sm:p-8 rounded-3xl glass-panel border border-white/15 hover:border-pulse-zero/40 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-pulse-zero/10 border border-pulse-zero/30 flex items-center justify-center text-pulse-zero mb-6 group-hover:scale-110 transition-transform">
                  <Wind className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs font-bold text-pulse-zero uppercase tracking-widest block mb-2">03. BOTANICAL HERBAL</span>
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white mb-3">CLEAN & RESTORATIVE</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  Steeped Moroccan spearmint, lime zest, and natural sea mineral salts offer cooling herbal depth.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-slate-300">
                <span className="text-pulse-zero font-bold block mb-1">PAIR WITH:</span>
                Fresh Mediterranean salads, sushi, post-workout bowls, late night study sessions.
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* FLAVOURS SECTION 3: TASTE PROFILER QUIZ                   */}
        {/* ========================================================= */}
        <section className="mt-24 sm:mt-32 pt-16 sm:pt-20 border-t border-white/10">
          <div className="rounded-3xl glass-panel border border-white/15 p-5 sm:p-8 md:p-14 relative overflow-hidden bg-gradient-to-br from-white/5 via-transparent to-pulse-citrus/5">
            <div className="max-w-3xl">
              <span className="font-mono text-xs font-bold text-pulse-citrus tracking-widest uppercase block mb-3">
                03 // PERSONAL TASTE PROFILER
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-white mb-4 break-words">
                FIND YOUR EXACT FLAVOUR MATCH.
              </h2>
              <p className="text-slate-300 text-xs sm:text-base leading-relaxed mb-8">
                Not sure which PULSE formula fits your current routine? Explore our quick 3-point taste profiler to get tailored beverage recommendations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 sm:p-6 rounded-2xl bg-black/40 border border-white/10">
                  <span className="font-mono text-[10px] text-slate-400 uppercase block mb-2">STEP 1: CHOOSE INTENSITY</span>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 rounded-lg bg-pulse-citrus text-black font-mono text-xs font-bold">LIGHT</span>
                    <span className="px-3 py-1.5 rounded-lg bg-white/10 text-white font-mono text-xs">MED</span>
                    <span className="px-3 py-1.5 rounded-lg bg-white/10 text-white font-mono text-xs">BOLD</span>
                  </div>
                </div>

                <div className="p-4 sm:p-6 rounded-2xl bg-black/40 border border-white/10">
                  <span className="font-mono text-[10px] text-slate-400 uppercase block mb-2">STEP 2: FIZZ LEVEL</span>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 rounded-lg bg-white/10 text-white font-mono text-xs">SILK</span>
                    <span className="px-3 py-1.5 rounded-lg bg-pulse-citrus text-black font-mono text-xs font-bold">MICRO FIZZ</span>
                  </div>
                </div>

                <div className="p-4 sm:p-6 rounded-2xl bg-black/40 border border-white/10">
                  <span className="font-mono text-[10px] text-slate-400 uppercase block mb-2">STEP 3: CALORIE PREFERENCE</span>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 rounded-lg bg-pulse-citrus text-black font-mono text-xs font-bold">0 SUGAR</span>
                    <span className="px-3 py-1.5 rounded-lg bg-white/10 text-white font-mono text-xs">LOW CAL</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  soundManager.playFizzPop();
                  onNavigate('drinks');
                }}
                className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-pulse-citrus text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-white transition-all shadow-lg shadow-pulse-citrus/20"
                data-cursor="hover"
              >
                MATCH ME WITH A DRINK →
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* FLAVOURS SECTION 4: EFFERVESCENCE & CHILLING STANDARD     */}
        {/* ========================================================= */}
        <section className="mt-24 sm:mt-32 pt-16 sm:pt-20 border-t border-white/10">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs font-bold text-pulse-citrus tracking-widest uppercase block mb-3">
              04 // SERVING BENCHMARK
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-white break-words">
              THE 2.8°C CHILLING PROTOCOL.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 rounded-2xl glass-panel border border-white/10">
              <span className="font-display text-3xl sm:text-4xl font-black text-pulse-citrus block mb-2">2.8°C</span>
              <span className="font-mono text-xs text-white font-bold block mb-1">OPTIMAL TEMP</span>
              <p className="font-mono text-[11px] text-slate-400">Preserves maximum effervescence & citrus aromatics.</p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl glass-panel border border-white/10">
              <span className="font-display text-3xl sm:text-4xl font-black text-white block mb-2">4.2 Vol</span>
              <span className="font-mono text-xs text-white font-bold block mb-1">CARBONATION DENSITY</span>
              <p className="font-mono text-[11px] text-slate-400">Fine micro-bubbles that dance gently on the tongue.</p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl glass-panel border border-white/10">
              <span className="font-display text-3xl sm:text-4xl font-black text-pulse-citrus block mb-2">100%</span>
              <span className="font-mono text-xs text-white font-bold block mb-1">NATURAL JUICE BASE</span>
              <p className="font-mono text-[11px] text-slate-400">Never diluted with artificial concentrates or corn syrup.</p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl glass-panel border border-white/10">
              <span className="font-display text-3xl sm:text-4xl font-black text-white block mb-2">0.0%</span>
              <span className="font-mono text-xs text-white font-bold block mb-1">ALCOHOL & DYES</span>
              <p className="font-mono text-[11px] text-slate-400">Pure liquid clarity for high-performing active lifestyles.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
