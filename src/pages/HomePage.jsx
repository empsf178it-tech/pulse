import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Sparkles, Droplets, Zap, ChevronRight } from 'lucide-react';
import { BubbleCanvas } from '../components/BubbleCanvas';
import { DRINKS, FLAVOUR_MOODS } from '../data/drinks';
import { soundManager } from '../utils/sound';

export const HomePage = ({ onNavigate }) => {
  const [activeFlavourId, setActiveFlavourId] = useState('citrus');
  const activeFlavour = FLAVOUR_MOODS.find((f) => f.id === activeFlavourId) || FLAVOUR_MOODS[0];

  const handleFlavourHover = (id) => {
    soundManager.playFizzPop();
    setActiveFlavourId(id);
  };

  const activeDrinkData = DRINKS.find((d) => d.id === activeFlavour.drinkId) || DRINKS[0];

  return (
    <div className="relative min-h-screen bg-[#0B0C10] text-white overflow-hidden">
      {/* ========================================================= */}
      {/* HERO SECTION                                              */}
      {/* ========================================================= */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 md:px-12 overflow-hidden">
        {/* Background Bubble Canvas */}
        <BubbleCanvas density={35} speed={1.2} />

        {/* Ambient Radial Spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-pulse-citrus/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
          {/* Left Text Block */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center text-center">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pulse-citrus/15 border border-pulse-citrus/30 text-pulse-citrus font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest mb-6 w-fit mx-auto"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>COLD PRESSED · NON-ALCOHOLIC · SPARKLING</span>
            </motion.div>

            {/* Giant Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-[12vw] sm:text-[9vw] lg:text-[7.5rem] font-extrabold leading-[0.88] tracking-tighter uppercase text-white mb-6 text-center"
            >
              FEEL <br />
              <span className="text-pulse-citrus text-gradient-citrus drop-shadow-[0_0_35px_rgba(234,249,0,0.3)]">
                THE FRESH.
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10 mx-auto text-center"
            >
              Bright flavours. Cold refreshment. A little energy for every moment.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <button
                onClick={() => {
                  soundManager.playFizzPop();
                  onNavigate('drinks');
                }}
                className="group relative px-8 py-4 rounded-full bg-pulse-citrus text-black font-mono font-bold text-sm uppercase tracking-wider overflow-hidden shadow-xl shadow-pulse-citrus/25 hover:shadow-pulse-citrus/50 transition-all duration-300"
                data-cursor="hover"
              >
                <span className="relative z-10 flex items-center gap-3">
                  EXPLORE THE RANGE
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <a
                href="#flavour-pulse"
                onClick={() => soundManager.playFizzPop()}
                className="flex items-center gap-2 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white font-mono font-semibold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
                data-cursor="hover"
              >
                <span>DISCOVER THE FLAVOURS</span>
                <ArrowDown className="w-4 h-4 text-pulse-citrus animate-bounce" />
              </a>
            </motion.div>
          </div>

          {/* Right Hero Composition (Bottle + Fruit + Ice) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient Back Glow Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[360px] h-[360px] md:w-[450px] md:h-[450px] rounded-full border border-pulse-citrus/20 border-dashed pointer-events-none"
            />

            {/* Chilled Bottle Hero Card */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md rounded-3xl overflow-hidden glass-panel p-4 border border-white/15 shadow-2xl group"
              data-cursor="taste"
              onClick={() => {
                soundManager.playPourPour();
                onNavigate('drinks');
              }}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-[#1A1C24] to-[#0D0E12]">
                <img
                  src="/images/pulse_citrus_hero.jpg"
                  alt="PULSE Citrus Beverage Studio Photography"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Micro Pills */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white font-mono text-[10px] uppercase">
                  <Droplets className="w-3 h-3 text-pulse-citrus" />
                  <span>CHILLED CONDENSATION</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <span className="font-mono text-xs text-pulse-citrus font-bold uppercase tracking-wider block mb-1">
                      SIGNATURE DRINK
                    </span>
                    <h3 className="font-display text-2xl font-bold uppercase text-white">
                      CITRUS PULSE
                    </h3>
                    <p className="text-xs text-slate-300 font-light">
                      Sicilian Lemon · Blood Orange · Carbonated
                    </p>
                  </div>
                  <span className="w-10 h-10 rounded-full bg-pulse-citrus text-black flex items-center justify-center font-mono font-bold text-lg shadow-lg">
                    &rarr;
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* HOME — FLAVOUR PULSE (INTERACTIVE FLAVOUR CARDS)           */}
      {/* ========================================================= */}
      <section id="flavour-pulse" className="py-28 px-6 md:px-12 bg-[#0E0F14] relative border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-mono text-xs font-bold text-pulse-citrus tracking-widest uppercase block mb-2">
                CHOOSE YOUR ENERGY
              </span>
              <h2 className="heading-section text-white">
                FIND YOUR PULSE.
              </h2>
            </div>
            <p className="text-slate-400 max-w-md text-sm leading-relaxed">
              Hover or tap each flavor family to experience its signature tasting profile, fresh fruit notes, and ambient aesthetic.
            </p>
          </div>

          {/* Flavour Cards & Interactive Preview Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Flavour Category Tabs */}
            <div className="lg:col-span-5 flex flex-col space-y-3">
              {FLAVOUR_MOODS.map((mood) => {
                const isActive = activeFlavourId === mood.id;
                return (
                  <button
                    key={mood.id}
                    onMouseEnter={() => handleFlavourHover(mood.id)}
                    onClick={() => handleFlavourHover(mood.id)}
                    className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                      isActive
                        ? 'bg-white/10 border-white/30 shadow-xl'
                        : 'bg-white/5 border-white/5 hover:bg-white/8 hover:border-white/15'
                    }`}
                    data-cursor="explore"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: mood.accent }}
                        />
                        <h3 className="font-display text-xl font-bold text-white tracking-wide">
                          {mood.name}
                        </h3>
                      </div>
                      <p className="font-mono text-xs text-slate-400">
                        {mood.tagline}
                      </p>
                    </div>

                    <ChevronRight
                      className={`w-5 h-5 transition-transform ${
                        isActive ? 'translate-x-1 text-pulse-citrus' : 'text-slate-600 group-hover:text-white'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Flavour Dynamic Showcase */}
            <div className="lg:col-span-7 relative rounded-3xl overflow-hidden glass-panel border border-white/15 p-8 flex flex-col justify-between min-h-[450px]">
              {/* Dynamic Accent Background Overlay */}
              <div
                className="absolute inset-0 opacity-20 transition-colors duration-500 pointer-events-none"
                style={{ backgroundColor: activeFlavour.accent }}
              />

              {/* Dynamic Image & Details */}
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center h-full">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={activeDrinkData.heroImage}
                    alt={activeDrinkData.name}
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>

                <div className="flex flex-col justify-center">
                  <span
                    className="font-mono text-xs font-extrabold uppercase tracking-widest mb-2"
                    style={{ color: activeFlavour.accent }}
                  >
                    {activeFlavour.name} FAMILY
                  </span>
                  <h3 className="font-display text-3xl font-extrabold text-white mb-3 uppercase">
                    {activeDrinkData.name}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {activeFlavour.description}
                  </p>

                  <div className="space-y-2 mb-8">
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block">
                      KEY FLAVOUR NOTES:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeFlavour.notes.map((n, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white font-mono text-xs"
                        >
                          {n}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      soundManager.playFizzPop();
                      onNavigate('flavours');
                    }}
                    className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-pulse-citrus transition-colors"
                    data-cursor="hover"
                  >
                    <span>EXPLORE ALL {activeFlavour.name} DRINKS</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* HOME — THE POUR (CINEMATIC LIQUID POURING SECTION)        */}
      {/* ========================================================= */}
      <section className="relative py-36 px-6 md:px-12 bg-[#0B0C10] overflow-hidden flex items-center justify-center">
        {/* Colorful Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pulse-citrus/25 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pulse-berry/25 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

        {/* Full-width Background Vibrant Liquid Pour Image */}
        <div className="absolute inset-0 opacity-75">
          <img
            src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1920&auto=format&fit=crop"
            alt="PULSE Vibrant Liquid Physics Splash"
            className="w-full h-full object-cover scale-105 animate-float-slow"
          />
        </div>

        {/* Gradient Overlay Vignette for seamless dark blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10] via-black/50 to-[#0B0C10] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C10]/90 via-transparent to-[#0B0C10]/90 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs font-bold text-pulse-citrus tracking-widest uppercase block mb-4 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full w-fit mx-auto border border-pulse-citrus/30 shadow-lg shadow-pulse-citrus/10">
              CRAFTED LIQUID PHYSICS
            </span>
            <h2 className="heading-hero text-white mb-6 drop-shadow-md">
              POUR SOMETHING <br />
              <span className="text-gradient-citrus">FRESH.</span>
            </h2>
            <p className="text-slate-200 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10 drop-shadow">
              Cold carbonation meeting crystal-clear ice. Real fruit extracts density created to elevate every sip without artificial sugar spikes.
            </p>

            {/* Condensation Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 rounded-2xl glass-panel border border-white/20 max-w-3xl mx-auto backdrop-blur-xl bg-black/60 shadow-2xl">
              <div>
                <span className="font-display text-3xl font-extrabold text-pulse-citrus block">100%</span>
                <span className="font-mono text-[10px] text-slate-300 uppercase tracking-wider">REAL FRUIT EXTRACT</span>
              </div>
              <div>
                <span className="font-display text-3xl font-extrabold text-white block">0%</span>
                <span className="font-mono text-[10px] text-slate-300 uppercase tracking-wider">ALCOHOL CONTENT</span>
              </div>
              <div>
                <span className="font-display text-3xl font-extrabold text-pulse-citrus block">COLD</span>
                <span className="font-mono text-[10px] text-slate-300 uppercase tracking-wider">PRESSED PURITY</span>
              </div>
              <div>
                <span className="font-display text-3xl font-extrabold text-white block">FINE</span>
                <span className="font-mono text-[10px] text-slate-300 uppercase tracking-wider">MICRO EFFERVESCENCE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* HOME — SIGNATURE DRINKS                                  */}
      {/* ========================================================= */}
      <section className="py-28 px-6 md:px-12 bg-[#0B0C10] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-mono text-xs font-bold text-pulse-citrus tracking-widest uppercase block mb-2">
                FEATURED LINEUP
              </span>
              <h2 className="heading-section text-white">
                SIGNATURE DRINKS.
              </h2>
            </div>
            <button
              onClick={() => {
                soundManager.playFizzPop();
                onNavigate('drinks');
              }}
              className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-pulse-citrus hover:text-white transition-colors"
              data-cursor="hover"
            >
              <span>VIEW ALL 6 DRINKS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 3 Hero Drink Cards */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {DRINKS.slice(0, 3).map((drink) => (
              <motion.div
                key={drink.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="w-full sm:w-[calc(50%-16px)] lg:w-0 lg:flex-1 group relative rounded-3xl overflow-hidden glass-panel border border-white/10 p-6 flex flex-col justify-between"
                data-cursor="taste"
                onClick={() => {
                  soundManager.playPourPour();
                  onNavigate('drinks');
                }}
              >
                {/* Product Image */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#14161D] mb-6">
                  <img
                    src={drink.heroImage}
                    alt={drink.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  <span
                    className="absolute top-4 left-4 px-3 py-1 rounded-full font-mono text-[10px] font-bold uppercase tracking-widest text-black"
                    style={{ backgroundColor: drink.accentColor }}
                  >
                    {drink.category}
                  </span>
                </div>

                {/* Details */}
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase text-white mb-1 group-hover:text-pulse-citrus transition-colors">
                    {drink.name}
                  </h3>
                  <p className="font-mono text-xs text-slate-400 mb-4">
                    {drink.tagline}
                  </p>
                  <p className="text-slate-300 text-xs line-clamp-2 leading-relaxed mb-6">
                    {drink.description}
                  </p>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                    <span className="text-slate-400">{drink.calories}</span>
                    <span className="text-pulse-citrus font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      VIEW PROFILE &rarr;
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* HOME — INGREDIENTS STORY                                  */}
      {/* ========================================================= */}
      <section className="py-28 px-6 md:px-12 bg-[#07080A] border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="font-mono text-xs font-bold text-pulse-citrus tracking-widest uppercase block mb-2">
              RAW SOURCE PURITY
            </span>
            <h2 className="heading-section text-white mb-4">
              GOOD DRINKS START <br />
              <span className="text-gradient-citrus">WITH GOOD THINGS.</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              We extract only cold-pressed fruit essence, botanical distillates, and mineral spring water. No high-fructose syrups or artificial chemical preservatives.
            </p>
          </div>

          {/* Ingredient to Drink Visual Flow */}
          <div className="flex flex-wrap justify-center gap-6">
            {/* Step 1 */}
            <div className="w-full sm:w-[calc(50%-12px)] lg:w-0 lg:flex-1 p-8 rounded-3xl glass-panel border border-white/10 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-pulse-citrus font-bold mb-4 block">STEP 01 — RAW SOURCE</span>
                <h3 className="font-display text-xl font-bold uppercase text-white mb-2">FRESH LIME & CITRUS</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  Hand-harvested key limes and Sicilian lemons cut at peak morning humidity.
                </p>
              </div>
              <div className="h-40 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=800&auto=format&fit=crop"
                  alt="Lime and Mint"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="w-full sm:w-[calc(50%-12px)] lg:w-0 lg:flex-1 p-8 rounded-3xl glass-panel border border-white/10 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-pulse-citrus font-bold mb-4 block">STEP 02 — COLD PRESS</span>
                <h3 className="font-display text-xl font-bold uppercase text-white mb-2">PURE LIQUID ESSENCE</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  Gentle hydraulic pressing to preserve fragile essential oils and natural aromatics.
                </p>
              </div>
              <div className="h-40 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop"
                  alt="Liquid Extraction"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Step 3 */}
            <div className="w-full sm:w-[calc(50%-12px)] lg:w-0 lg:flex-1 p-8 rounded-3xl glass-panel border border-pulse-citrus/30 flex flex-col justify-between bg-pulse-citrus/5">
              <div>
                <span className="font-mono text-xs text-pulse-citrus font-bold mb-4 block">STEP 03 — FINAL CRAFT</span>
                <h3 className="font-display text-xl font-bold uppercase text-pulse-citrus mb-2">PULSE BOTANIC</h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-6">
                  Balanced with sparkling mineral water for maximum crispness and vitality.
                </p>
              </div>
              <button
                onClick={() => {
                  soundManager.playFizzPop();
                  onNavigate('ingredients');
                }}
                className="w-full py-3 rounded-full bg-pulse-citrus text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors"
                data-cursor="hover"
              >
                EXPLORE INGREDIENTS →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* HOME — FINAL CTA (ABOVE FOOTER)                           */}
      {/* ========================================================= */}
      <section className="relative py-36 px-6 md:px-12 bg-[#0B0C10] overflow-hidden flex items-center justify-center text-center">
        {/* Colorful Ambient Glow Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pulse-citrus/20 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-pulse-tropic/20 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

        {/* Vibrant Liquid Physics Background Image */}
        <div className="absolute inset-0 opacity-80">
          <img
            src="https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=1920&auto=format&fit=crop"
            alt="PULSE Vibrant Liquid Physics & Sparkling Effervescence"
            className="w-full h-full object-cover scale-105 animate-float-slow"
          />
        </div>

        {/* Gradient Overlay Vignette for smooth integration */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10] via-black/45 to-[#0B0C10] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C10]/80 via-transparent to-[#0B0C10]/80 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="font-mono text-xs font-bold text-pulse-citrus tracking-widest uppercase block mb-4 bg-black/50 backdrop-blur-md px-5 py-2 rounded-full w-fit mx-auto border border-pulse-citrus/30 shadow-lg shadow-pulse-citrus/15">
            READY FOR A RESET?
          </span>
          <h2 className="heading-hero text-white mb-8 drop-shadow-lg">
            WHAT'S YOUR <br />
            <span className="text-gradient-citrus">NEXT REFRESH?</span>
          </h2>
          <button
            onClick={() => {
              soundManager.playFizzPop();
              onNavigate('drinks');
            }}
            className="px-10 py-5 rounded-full bg-pulse-citrus text-black font-mono font-extrabold text-sm uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-2xl shadow-pulse-citrus/40 hover:scale-105 active:scale-95"
            data-cursor="hover"
          >
            EXPLORE PULSE RANGE →
          </button>
        </div>
      </section>
    </div>
  );
};
