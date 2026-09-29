import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, Droplets, Leaf, ArrowUpRight, ShieldCheck, Activity, Award } from 'lucide-react';
import { INGREDIENT_GROUPS } from '../data/drinks';
import { soundManager } from '../utils/sound';

export const IngredientsPage = ({ onNavigate }) => {
  const [activeItem, setActiveItem] = useState(INGREDIENT_GROUPS[0].items[0]);
  const [userSelected, setUserSelected] = useState(false);

  // Auto-sync active item when scrolling into different ingredient categories
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !userSelected) {
          const groupIdxStr = entry.target.id.replace('ingredient-group-', '');
          const groupIdx = parseInt(groupIdxStr, 10);
          if (!isNaN(groupIdx) && INGREDIENT_GROUPS[groupIdx]) {
            setActiveItem(INGREDIENT_GROUPS[groupIdx].items[0]);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-20% 0px -40% 0px',
      threshold: 0.1
    });

    INGREDIENT_GROUPS.forEach((_, idx) => {
      const el = document.getElementById(`ingredient-group-${idx}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [userSelected]);

  // Flavor profile mock specs based on active selection
  const getProfileSpecs = (item) => {
    if (item.name.includes('LEMON') || item.name.includes('LIME') || item.name.includes('GRAPEFRUIT')) {
      return { acidity: 92, oilDensity: 88, effervescence: 95, aroma: 85, color: '#EAF900' };
    }
    if (item.name.includes('STRAWBERRY') || item.name.includes('RASPBERRY') || item.name.includes('BERRY')) {
      return { acidity: 78, oilDensity: 90, effervescence: 82, aroma: 94, color: '#FF0077' };
    }
    if (item.name.includes('PINEAPPLE') || item.name.includes('PASSION') || item.name.includes('MANGO')) {
      return { acidity: 84, oilDensity: 85, effervescence: 88, aroma: 90, color: '#FF8800' };
    }
    return { acidity: 70, oilDensity: 95, effervescence: 90, aroma: 98, color: '#00E5FF' };
  };

  const currentSpecs = getProfileSpecs(activeItem);

  const scrollToGroup = (groupIdx) => {
    const el = document.getElementById(`ingredient-group-${groupIdx}`);
    if (el) {
      soundManager.playFizzPop();
      setUserSelected(false);
      setActiveItem(INGREDIENT_GROUPS[groupIdx].items[0]);
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0C10] text-white pt-36 md:pt-44 pb-36 px-6 md:px-12 lg:px-20 relative">
      {/* Background Ambient Glow Layer (overflow-hidden scoped to absolute layer to preserve sticky) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-pulse-citrus/5 rounded-full blur-[160px]" />
        <div className="absolute top-2/3 right-0 w-[700px] h-[700px] bg-pulse-berry/5 rounded-full blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HERO HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="badge-hero mb-8"
          >
            <Sparkles className="w-4 h-4 text-pulse-citrus animate-pulse" />
            <span>BOTANICAL ORIGINS & FORMULATION</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="heading-hero text-white mb-8 leading-[1.05]"
          >
            EVERY DROP <span className="text-gradient-citrus">HAS A SOURCE.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg md:text-2xl font-light leading-relaxed max-w-2xl mx-auto"
          >
            Explore the sun-ripened fruits, cold-pressed botanicals, and mineral springs that power PULSE's signature sparkling flavor profiles.
          </motion.p>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-xs text-center"
          >
            <div>
              <span className="text-slate-500 block uppercase mb-1">HARVEST PURITY</span>
              <span className="text-white font-bold text-sm tracking-wider">100% ORGANIC</span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase mb-1">EXTRACTION METHOD</span>
              <span className="text-pulse-citrus font-bold text-sm tracking-wider">COLD-PRESSED &lt;4°C</span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase mb-1">ADDED SUGARS</span>
              <span className="text-white font-bold text-sm tracking-wider">0.0 GRAMS</span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase mb-1">TRACEABILITY</span>
              <span className="text-pulse-citrus font-bold text-sm tracking-wider">SINGLE-ORIGIN</span>
            </div>
          </motion.div>
        </div>

        {/* MAIN EXPLORER SPLIT (12-Col Grid with Working CSS Sticky Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-40 md:mb-56">
          
          {/* Left Column: Ingredient Groups (7 Cols) */}
          <div className="lg:col-span-7 space-y-20 md:space-y-28 pb-36 lg:pb-64">
            {INGREDIENT_GROUPS.map((group, groupIdx) => (
              <div
                key={groupIdx}
                id={`ingredient-group-${groupIdx}`}
                className="space-y-8 scroll-mt-36"
              >
                {/* Group Title Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-6 gap-3">
                  <div>
                    <span className="font-mono text-xs uppercase font-semibold tracking-widest text-slate-400 block mb-1">
                      CATEGORY 0{groupIdx + 1}
                    </span>
                    <h2 className="font-display text-3xl font-extrabold uppercase text-white tracking-wider">
                      {group.title}
                    </h2>
                  </div>
                  <span
                    className="font-mono text-xs uppercase font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 self-start sm:self-auto"
                    style={{ color: group.color }}
                  >
                    {group.items.length} HARVEST SOURCES
                  </span>
                </div>

                <p className="text-slate-400 text-base leading-relaxed max-w-xl">
                  {group.subtitle}
                </p>

                {/* Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {group.items.map((item, itemIdx) => {
                    const isSelected = activeItem.name === item.name;
                    return (
                      <button
                        key={itemIdx}
                        onClick={() => {
                          soundManager.playFizzPop();
                          setUserSelected(true);
                          setActiveItem(item);
                        }}
                        className={`text-left p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                          isSelected
                            ? 'bg-white/15 border-pulse-citrus/70 shadow-[0_0_25px_rgba(234,249,0,0.2)] scale-[1.02]'
                            : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                        }`}
                        data-cursor="explore"
                      >
                        {/* Active Indicator Glow */}
                        {isSelected && (
                          <span className="absolute top-4 right-4 w-3 h-3 rounded-full bg-pulse-citrus animate-pulse shadow-[0_0_8px_#EAF900]" />
                        )}

                        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5 border border-white/10">
                          <img
                            src={item.image}
                            alt={item.name}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=1200&auto=format&fit=crop';
                            }}
                            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        </div>

                        <div>
                          <div className="flex items-center gap-1.5 text-slate-400 font-mono text-xs uppercase mb-2">
                            <MapPin className="w-3.5 h-3.5 text-pulse-citrus" />
                            <span>{item.origin}</span>
                          </div>
                          <h3 className="font-display text-xl font-bold uppercase text-white mb-2">
                            {item.name}
                          </h3>
                          <p className="text-slate-300 text-xs sm:text-sm line-clamp-2 leading-relaxed font-light">
                            {item.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: STICKY DYNAMIC DASHBOARD (5 Cols, pinned at top-24 on md & lg) */}
          <div className="lg:col-span-5 md:sticky md:top-24 z-20 self-start space-y-5">
            
            {/* Category Quick Jump Pills */}
            <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-1 backdrop-blur-md">
              {INGREDIENT_GROUPS.map((g, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToGroup(idx)}
                  className="flex-1 py-1.5 px-2 rounded-xl font-mono text-[10px] uppercase font-bold text-slate-400 hover:text-white hover:bg-white/10 transition-colors text-center truncate"
                  title={`Jump to ${g.title}`}
                  data-cursor="hover"
                >
                  {g.title}
                </button>
              ))}
            </div>

            {/* Active Ingredient Spotlight Card */}
            <motion.div
              key={activeItem.name}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="rounded-[2rem] glass-panel border border-white/20 p-6 md:p-8 shadow-2xl space-y-5 relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-pulse-citrus/10 rounded-full blur-[90px] pointer-events-none" />

              {/* Compact Image Viewport */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 shadow-lg">
                <img
                  src={activeItem.image}
                  alt={activeItem.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=1200&auto=format&fit=crop';
                  }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3.5 py-1.5 rounded-full bg-pulse-citrus text-black font-mono text-xs font-bold uppercase tracking-wider shadow-lg">
                    ORIGIN // {activeItem.origin}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <span className="font-mono text-xs text-pulse-citrus font-bold uppercase tracking-widest block mb-1">
                  ACTIVE SELECTION
                </span>
                <h3 className="font-display text-3xl font-extrabold uppercase text-white tracking-tight mb-3">
                  {activeItem.name}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  {activeItem.desc}
                </p>
              </div>

              {/* Live Extraction Vector Radar / Bars */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <span className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-2 flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-pulse-citrus" />
                  <span>EXTRACT COMPOSITION VECTOR</span>
                </span>

                <div className="space-y-2 font-mono text-xs">
                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-slate-400">Acidity Balance</span>
                      <span className="text-white font-bold">{currentSpecs.acidity}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${currentSpecs.acidity}%` }}
                        transition={{ duration: 0.5 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: currentSpecs.color }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-slate-400">Essential Oil Density</span>
                      <span className="text-white font-bold">{currentSpecs.oilDensity}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${currentSpecs.oilDensity}%` }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="h-full rounded-full bg-gradient-to-r from-pulse-berry to-pulse-citrus"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-slate-400">Aroma Persistence</span>
                      <span className="text-white font-bold">{currentSpecs.aroma}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${currentSpecs.aroma}%` }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-full rounded-full bg-pulse-citrus"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Crafting Beverage Destination Box */}
              <div className="pt-2">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-4 hover:border-pulse-citrus/40 transition-colors">
                  <div>
                    <span className="font-mono text-[10px] text-slate-400 block uppercase tracking-wider mb-1">
                      CRAFTS INTO BEVERAGE
                    </span>
                    <span className="font-display font-bold text-white text-lg">
                      {activeItem.leadsTo}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      soundManager.playPourPour();
                      onNavigate('drinks');
                    }}
                    className="p-3.5 rounded-full bg-pulse-citrus text-black hover:bg-white hover:scale-110 transition-all shadow-lg"
                    data-cursor="hover"
                    title={`View ${activeItem.leadsTo}`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* SECTION 2: HARVEST & ORIGIN MAP                           */}
        {/* ========================================================= */}
        <section className="mt-44 md:mt-56 pt-28 md:pt-36 border-t border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 md:mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-bold text-pulse-citrus tracking-widest uppercase block mb-4">
                02 // GLOBAL HARVEST LOCATIONS
              </span>
              <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white leading-tight break-words">
                SUSTAINABLE SINGLE-ORIGIN FARMING.
              </h2>
            </div>
            <p className="text-slate-400 text-base md:text-lg max-w-lg font-light leading-relaxed">
              We partner directly with small-batch organic orchards across 4 distinct climate zones to guarantee peak potency, essential oil richness, and fair-trade ethics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            <div className="p-8 md:p-10 rounded-[2rem] glass-panel border border-white/15 hover:border-pulse-citrus/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold text-pulse-citrus uppercase tracking-wider">REGION 01</span>
                <MapPin className="w-5 h-5 text-pulse-citrus group-hover:scale-125 transition-transform" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-white mb-3">SICILIAN COAST</h3>
              <p className="font-mono text-xs text-slate-400 mb-6 tracking-wide">ELEVATION: 450M · VOLCANIC SOIL</p>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Sun-drenched citrus groves yielding world-renowned lemon & pink grapefruit essential oils.
              </p>
            </div>

            <div className="p-8 md:p-10 rounded-[2rem] glass-panel border border-white/15 hover:border-pulse-berry/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold text-pulse-berry uppercase tracking-wider">REGION 02</span>
                <MapPin className="w-5 h-5 text-pulse-berry group-hover:scale-125 transition-transform" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-white mb-3">NORDIC VALLEYS</h3>
              <p className="font-mono text-xs text-slate-400 mb-6 tracking-wide">ELEVATION: 800M · GLACIAL WATER</p>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Hand-harvested wild lingonberries and raspberries bursting with deep berry polyphenols.
              </p>
            </div>

            <div className="p-8 md:p-10 rounded-[2rem] glass-panel border border-white/15 hover:border-pulse-tropic/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold text-pulse-tropic uppercase tracking-wider">REGION 03</span>
                <MapPin className="w-5 h-5 text-pulse-tropic group-hover:scale-125 transition-transform" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-white mb-3">COSTA RICA GOLD</h3>
              <p className="font-mono text-xs text-slate-400 mb-6 tracking-wide">ELEVATION: 200M · TROPICAL SUN</p>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Organically grown golden pineapples pressed within hours of harvest for pure tropical nectar.
              </p>
            </div>

            <div className="p-8 md:p-10 rounded-[2rem] glass-panel border border-white/15 hover:border-pulse-zero/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold text-pulse-zero uppercase tracking-wider">REGION 04</span>
                <MapPin className="w-5 h-5 text-pulse-zero group-hover:scale-125 transition-transform" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-white mb-3">ATLAS MOUNTAINS</h3>
              <p className="font-mono text-xs text-slate-400 mb-6 tracking-wide">ELEVATION: 1100M · FRESH SPRINGS</p>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                High-altitude spearmint and key lime leaves steam-distilled to preserve aromatic crispness.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: EXTRACTION ALCHEMY                             */}
        {/* ========================================================= */}
        <section className="mt-44 md:mt-56 pt-28 md:pt-36 border-t border-white/10">
          <div className="max-w-3xl mb-20 md:mb-24">
            <span className="font-mono text-xs font-bold text-pulse-citrus tracking-widest uppercase block mb-4">
              03 // EXTRACTION ALCHEMY
            </span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white leading-tight break-words">
              THREE STEPS TO LIQUID PURITY.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 01 */}
            <div className="p-8 sm:p-10 rounded-[2.5rem] glass-panel border border-white/15 relative overflow-hidden group hover:border-pulse-citrus/40 transition-colors flex flex-col justify-between">
              <div>
                <span className="font-display text-6xl sm:text-7xl font-black text-white/5 absolute top-6 right-8 pointer-events-none group-hover:text-pulse-citrus/10 transition-colors select-none">
                  01
                </span>
                <Droplets className="w-10 h-10 text-pulse-citrus mb-6" />
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white mb-3 tracking-tight">
                  COLD-PRESSING
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  Citrus rinds and fruit pulp are cold-pressed below 4°C to prevent thermal oxidation and lock in raw vitamin C.
                </p>
              </div>
            </div>

            {/* Card 02 */}
            <div className="p-8 sm:p-10 rounded-[2.5rem] glass-panel border border-white/15 relative overflow-hidden group hover:border-pulse-zero/40 transition-colors flex flex-col justify-between">
              <div>
                <span className="font-display text-6xl sm:text-7xl font-black text-white/5 absolute top-6 right-8 pointer-events-none group-hover:text-pulse-zero/10 transition-colors select-none">
                  02
                </span>
                <Leaf className="w-10 h-10 text-pulse-zero mb-6" />
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white mb-3 tracking-tight">
                  STEAM DISTILLATION
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  Botanical herbs undergo slow vapor extraction to capture delicate top-note aromas without heat bitterness.
                </p>
              </div>
            </div>

            {/* Card 03 - Centered on Row 2 for Tablet (768px), 3rd Column for Desktop (1024px+) */}
            <div className="md:col-span-2 lg:col-span-1 w-full md:max-w-[calc(50%-12px)] lg:max-w-none mx-auto p-8 sm:p-10 rounded-[2.5rem] glass-panel border border-white/15 relative overflow-hidden group hover:border-pulse-citrus/40 transition-colors flex flex-col justify-between">
              <div>
                <span className="font-display text-6xl sm:text-7xl font-black text-white/5 absolute top-6 right-8 pointer-events-none group-hover:text-pulse-citrus/10 transition-colors select-none">
                  03
                </span>
                <Sparkles className="w-10 h-10 text-pulse-citrus mb-6" />
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white mb-3 tracking-tight">
                  MICRO EFFERVESCENCE
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  Pure spring water is carbonated with ultra-fine nitrogen-CO2 micro bubbles for a velvety mouthfeel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 4: PURITY GUARANTEE & FINAL CTA                   */}
        {/* ========================================================= */}
        <section className="mt-44 md:mt-56 pt-28 md:pt-36 border-t border-white/10">
          <div className="rounded-[3rem] glass-panel border border-white/15 p-8 sm:p-12 md:p-20 bg-gradient-to-br from-white/5 via-[#12141C] to-pulse-citrus/10 flex flex-col lg:flex-row lg:items-center justify-between gap-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pulse-citrus/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-2xl relative z-10">
              <span className="font-mono text-xs font-bold text-pulse-citrus tracking-widest uppercase block mb-4">
                04 // UNCOMPROMISED FORMULATION
              </span>
              <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white mb-6 leading-tight break-words">
                100% CLEAN LABEL GUARANTEE.
              </h2>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed font-light">
                Zero artificial dyes, zero high-fructose corn syrup, zero synthetic preservatives. Every can of PULSE contains only natural fruit juice, botanicals, and sparkling spring water.
              </p>
            </div>

            <div className="relative z-10 self-start lg:self-center">
              <button
                onClick={() => {
                  soundManager.playFizzPop();
                  onNavigate('drinks');
                }}
                className="px-10 py-5 rounded-full bg-pulse-citrus text-black font-mono font-bold text-sm uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(234,249,0,0.3)] whitespace-nowrap"
                data-cursor="hover"
              >
                EXPLORE OUR DRINKS →
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
