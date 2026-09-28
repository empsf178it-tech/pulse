import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Sun, BatteryCharging, Smile, Compass, Zap, Heart } from 'lucide-react';
import { DISCOVER_MOMENTS, DRINKS } from '../data/drinks';
import { soundManager } from '../utils/sound';

export const DiscoverPage = ({ onNavigate }) => {
  const [selectedFeeling, setSelectedFeeling] = useState('FRESH');

  const feelingMap = {
    FRESH: {
      drinkId: 'citrus-pulse',
      quote: 'Sunlight slicing through cold glass. Pure citrus clarity to kickstart your focus.',
      icon: Sun,
      color: '#EAF900'
    },
    ENERGETIC: {
      drinkId: 'berry-wave',
      quote: 'High voltage berry nectar and sparkling fizz to surge through peak afternoon hours.',
      icon: BatteryCharging,
      color: '#FF2E75'
    },
    CALM: {
      drinkId: 'botanic',
      quote: 'Crisp spearmint and key lime leaves to quiet the noise and restore your natural rhythm.',
      icon: Smile,
      color: '#10B981'
    },
    CURIOUS: {
      drinkId: 'zero-citrus',
      quote: 'Sharp Japanese yuzu and white grapefruit with zero sugar for pristine mental exploration.',
      icon: Compass,
      color: '#00E5FF'
    },
    ADVENTUROUS: {
      drinkId: 'tropic',
      quote: 'Golden tropical pineapple and passionfruit designed for coastal golden hours.',
      icon: Zap,
      color: '#FF7E27'
    },
    RELAXED: {
      drinkId: 'peach-spark',
      quote: 'Silky yellow peach nectar and delicate micro-bubbles to wind down as dusk falls.',
      icon: Heart,
      color: '#FF9A76'
    }
  };

  const currentFeelingObj = feelingMap[selectedFeeling] || feelingMap.FRESH;
  const featuredDrink = DRINKS.find((d) => d.id === currentFeelingObj.drinkId) || DRINKS[0];

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
            <span>LIFESTYLE & MOMENTS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="heading-hero text-white mb-6 leading-tight break-words"
          >
            WHERE WILL <span className="text-gradient-citrus">PULSE TAKE YOU?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg md:text-2xl font-light leading-relaxed max-w-2xl mx-auto"
          >
            From quiet morning clarity to high-vibe weekend golden hours, PULSE elevates every non-alcoholic ritual.
          </motion.p>
        </div>

        {/* INTERACTIVE MOOD SELECTOR */}
        <div className="p-5 sm:p-8 md:p-12 rounded-3xl glass-panel border border-white/15 mb-24 sm:mb-28">
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <span className="font-mono text-xs font-bold text-pulse-citrus tracking-widest uppercase block mb-2">
              INTERACTIVE MATCHMAKER
            </span>
            <h2 className="font-display text-xl sm:text-3xl font-extrabold text-white uppercase break-words">
              HOW ARE YOU FEELING?
            </h2>
          </div>

          {/* Feeling Option Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
            {Object.keys(feelingMap).map((feelingKey) => {
              const isSelected = selectedFeeling === feelingKey;
              return (
                <button
                  key={feelingKey}
                  onClick={() => {
                    soundManager.playFizzPop();
                    setSelectedFeeling(feelingKey);
                  }}
                  className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                    isSelected
                      ? 'bg-pulse-citrus text-black shadow-lg shadow-pulse-citrus/30 scale-105'
                      : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                  data-cursor="hover"
                >
                  {feelingKey}
                </button>
              );
            })}
          </div>

          {/* Dynamic Match Showcase */}
          <motion.div
            key={selectedFeeling}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center p-4 sm:p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10"
          >
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-2xl">
              <img
                src={featuredDrink.heroImage}
                alt={featuredDrink.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <span
                className="font-mono text-xs font-extrabold tracking-widest uppercase block"
                style={{ color: currentFeelingObj.color }}
              >
                YOUR PERFECT MATCH // {selectedFeeling}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white break-words">
                {featuredDrink.name}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm italic leading-relaxed">
                "{currentFeelingObj.quote}"
              </p>
              <div className="pt-4 flex items-center justify-between border-t border-white/10 font-mono text-xs text-slate-400">
                <span>PROFILE: {featuredDrink.tagline}</span>
                <button
                  onClick={() => {
                    soundManager.playPourPour();
                    onNavigate('drinks');
                  }}
                  className="text-pulse-citrus font-bold hover:underline"
                >
                  DETAILS &rarr;
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* MOMENTS GRID */}
        <div>
          <h2 className="heading-section text-white mb-12 break-words">
            PULSE MOMENTS.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DISCOVER_MOMENTS.map((moment, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10 p-5 sm:p-6 flex flex-col justify-between"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                  <img
                    src={moment.image}
                    alt={moment.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-mono text-[10px] font-bold uppercase">
                    {moment.time}
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white mb-2 break-words">
                    {moment.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    {moment.tagline}
                  </p>
                  <div className="pt-4 border-t border-white/10 font-mono text-xs flex items-center justify-between text-slate-400">
                    <span>RECOMMENDED:</span>
                    <span className="text-pulse-citrus font-bold">{moment.recommendedDrink}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* DISCOVER SECTION 2: CRAFT MIXOLOGY & MOCKTAIL LAB        */}
        {/* ========================================================= */}
        <section className="mt-24 sm:mt-32 pt-16 sm:pt-20 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-mono text-xs font-bold text-pulse-citrus tracking-widest uppercase block mb-3">
                02 // CRAFT MIXOLOGY
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-white break-words">
                SIGNATURE ZERO-PROOF COCKTAILS.
              </h2>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              Elevate your hosting ritual with 3 non-alcoholic serve recipes crafted by top international mixologists using PULSE as a sparkling base.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <div className="w-full sm:w-[calc(50%-16px)] lg:w-0 lg:flex-1 p-5 sm:p-8 rounded-3xl glass-panel border border-white/15 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] font-bold text-pulse-citrus uppercase tracking-widest block mb-2">SERVE 01</span>
                <h3 className="font-display text-lg sm:text-2xl font-bold uppercase text-white mb-3 break-words">YUZU COLD SPARKLER</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  1 can Citrus Pulse + 15ml fresh cucumber juice + crushed ice + slapped basil leaf garnish.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-slate-300">
                <span className="text-pulse-citrus font-bold block mb-1">GLASSWARE:</span>
                Crystal Highball over hand-carved ice sphere.
              </div>
            </div>

            <div className="w-full sm:w-[calc(50%-16px)] lg:w-0 lg:flex-1 p-5 sm:p-8 rounded-3xl glass-panel border border-white/15 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] font-bold text-pulse-berry uppercase tracking-widest block mb-2">SERVE 02</span>
                <h3 className="font-display text-lg sm:text-2xl font-bold uppercase text-white mb-3 break-words">BERRY VELVET FIZZ</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  1 can Berry Wave + 10ml rosemary syrup + fresh blackberries + dusting of freeze-dried raspberry powder.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-slate-300">
                <span className="text-pulse-berry font-bold block mb-1">GLASSWARE:</span>
                Stemmed Coupe Glass chilled to -4°C.
              </div>
            </div>

            <div className="w-full sm:w-[calc(50%-16px)] lg:w-0 lg:flex-1 p-5 sm:p-8 rounded-3xl glass-panel border border-white/15 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] font-bold text-pulse-zero uppercase tracking-widest block mb-2">SERVE 03</span>
                <h3 className="font-display text-lg sm:text-2xl font-bold uppercase text-white mb-3 break-words">BOTANICAL MINT SMASH</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  1 can Botanic Refresh + 3 lime wedges muddled with Moroccan spearmint + sea salt rim.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-slate-300">
                <span className="text-pulse-zero font-bold block mb-1">GLASSWARE:</span>
                Heavy Rocks Glass over cracked ice.
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* DISCOVER SECTION 3: CULTURE & SOCIAL RADAR               */}
        {/* ========================================================= */}
        <section className="mt-24 sm:mt-32 pt-16 sm:pt-20 border-t border-white/10">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs font-bold text-pulse-citrus tracking-widest uppercase block mb-3">
              03 // SOCIAL RADAR
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-white break-words">
              PULSE AT SOUND FESTIVALS & ART GALAS.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden glass-panel border border-white/15 group">
              <img
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop"
                alt="PULSE Nightclub & Sound Stage"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-mono text-[10px] text-pulse-citrus font-bold uppercase block mb-1">TOKYO SOUND FESTIVAL</span>
                <p className="text-white text-xs font-bold">LATE NIGHT REFRESHMENT</p>
              </div>
            </div>

            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden glass-panel border border-white/15 group">
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
                alt="PULSE Rooftop Session"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-mono text-[10px] text-pulse-berry font-bold uppercase block mb-1">BERLIN ART BIENNALE</span>
                <p className="text-white text-xs font-bold">ROOFTOP LOUNGE</p>
              </div>
            </div>

            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden glass-panel border border-white/15 group">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop"
                alt="PULSE Coastal Sunset"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-mono text-[10px] text-pulse-tropic font-bold uppercase block mb-1">IBIZA SUNSET CLUB</span>
                <p className="text-white text-xs font-bold">COASTAL GOLDEN HOUR</p>
              </div>
            </div>

            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden glass-panel border border-white/15 group">
              <img
                src="https://images.unsplash.com/photo-1517649763962-0c623266010b?q=80&w=800&auto=format&fit=crop"
                alt="PULSE Wellness Retreat"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-mono text-[10px] text-pulse-zero font-bold uppercase block mb-1">LA WELLNESS RETREAT</span>
                <p className="text-white text-xs font-bold">POST-RUN HYDRATION</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* DISCOVER SECTION 4: THE PULSE CLUB MEMBERSHIP             */}
        {/* ========================================================= */}
        <section className="mt-24 sm:mt-32 pt-16 sm:pt-20 border-t border-white/10">
          <div className="rounded-3xl glass-panel border border-white/15 p-5 sm:p-8 md:p-14 bg-gradient-to-br from-white/5 via-transparent to-pulse-citrus/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-bold text-pulse-citrus tracking-widest uppercase block mb-3">
                04 // EXCLUSIVE ACCESS
              </span>
              <h2 className="font-display text-xl sm:text-3xl md:text-5xl font-extrabold uppercase text-white mb-4 break-words">
                JOIN THE PULSE TASTING CLUB.
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Receive unreleased seasonal flavor drops, invitation-only event passes, and monthly home delivery packs straight from our liquid laboratory.
              </p>
            </div>

            <button
              onClick={() => {
                soundManager.playFizzPop();
                onNavigate('drinks');
              }}
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-pulse-citrus text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-pulse-citrus/20 whitespace-nowrap"
              data-cursor="hover"
            >
              JOIN MEMBERSHIP CLUB →
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
