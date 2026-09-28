import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Droplets, Flame, CheckCircle, ArrowRight } from 'lucide-react';
import { DRINKS } from '../data/drinks';
import { BubbleCanvas } from '../components/BubbleCanvas';
import { soundManager } from '../utils/sound';

export const DrinksPage = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [activeDrinkModal, setActiveDrinkModal] = useState(null);

  const categories = ['ALL', 'Citrus', 'Berry', 'Tropical', 'Botanical', 'Soft', 'Zero Sugar'];

  const filteredDrinks = selectedCategory === 'ALL'
    ? DRINKS
    : DRINKS.filter((d) => d.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleDrinkClick = (drink) => {
    soundManager.playPourPour();
    setActiveDrinkModal(drink);
  };

  return (
    <div className="min-h-screen bg-[#0B0C10] text-white pt-32 pb-28 px-6 md:px-12 relative overflow-hidden">
      <BubbleCanvas density={20} speed={0.8} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Banner */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="badge-hero mb-8"
          >
            <Sparkles className="w-4 h-4 text-pulse-citrus animate-pulse" />
            <span>PRODUCT LINEUP</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="heading-hero text-white mb-6 leading-tight"
          >
            THE <span className="text-gradient-citrus">RANGE.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg md:text-2xl font-light leading-relaxed max-w-2xl mx-auto"
          >
            Different moods. Different flavours. One refreshing pulse.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-10 sm:flex-wrap sm:justify-center sm:overflow-visible no-scrollbar border-b border-white/10 sm:pb-6">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  soundManager.playFizzPop();
                  setSelectedCategory(cat);
                }}
                className={`px-5 py-2 rounded-full font-mono text-xs tracking-wider uppercase font-bold transition-all ${
                  isActive
                    ? 'bg-pulse-citrus text-black shadow-lg shadow-pulse-citrus/20'
                    : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
                data-cursor="hover"
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDrinks.map((drink) => (
            <motion.div
              key={drink.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleDrinkClick(drink)}
              className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10 p-6 flex flex-col justify-between cursor-pointer"
              data-cursor="taste"
            >
              {/* Top Accent Pill */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="px-3 py-1 rounded-full font-mono text-[10px] font-bold uppercase tracking-widest text-black"
                  style={{ backgroundColor: drink.accentColor }}
                >
                  {drink.category}
                </span>
                <span className="font-mono text-xs text-slate-400">
                  {drink.calories}
                </span>
              </div>

              {/* Product Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#14161D] mb-6">
                <img
                  src={drink.heroImage}
                  alt={drink.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Product Information */}
              <div>
                <h3 className="font-display text-2xl font-bold uppercase text-white mb-1 group-hover:text-pulse-citrus transition-colors">
                  {drink.name}
                </h3>
                <p className="font-mono text-xs text-slate-400 mb-3">
                  {drink.tagline}
                </p>
                <p className="text-slate-300 text-xs line-clamp-2 leading-relaxed mb-6">
                  {drink.description}
                </p>

                {/* Flavor Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {drink.flavorNotes.map((note, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 font-mono text-[10px]"
                    >
                      {note}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                  <span className="text-slate-400">EXPLORE PROFILE</span>
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-black font-bold text-sm shadow-md"
                    style={{ backgroundColor: drink.accentColor }}
                  >
                    &rarr;
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {activeDrinkModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-black/80 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setActiveDrinkModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#12141A] rounded-3xl border border-white/20 p-8 md:p-12 overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveDrinkModal(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Modal Left Image */}
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <img
                    src={activeDrinkModal.heroImage}
                    alt={activeDrinkModal.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full font-mono text-xs font-bold text-black uppercase" style={{ backgroundColor: activeDrinkModal.accentColor }}>
                    {activeDrinkModal.category}
                  </div>
                </div>

                {/* Modal Right Info */}
                <div>
                  <span className="font-mono text-xs text-pulse-citrus uppercase font-bold tracking-widest block mb-2">
                    TASTING PROFILE & CRAFT
                  </span>
                  <h2 className="font-display text-4xl font-extrabold uppercase text-white mb-2">
                    {activeDrinkModal.name}
                  </h2>
                  <p className="font-mono text-xs text-slate-400 mb-6">
                    {activeDrinkModal.tagline}
                  </p>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {activeDrinkModal.description}
                  </p>

                  {/* Rating Metrics */}
                  <div className="space-y-3 mb-6 p-4 rounded-xl bg-white/5 border border-white/10 font-mono text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">SWEETNESS</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <span key={i} className={`w-3 h-3 rounded-full ${i <= activeDrinkModal.tastingProfile.sweetness ? 'bg-pulse-citrus' : 'bg-white/20'}`} />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">ACIDITY / TART</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <span key={i} className={`w-3 h-3 rounded-full ${i <= activeDrinkModal.tastingProfile.acidity ? 'bg-pulse-citrus' : 'bg-white/20'}`} />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">CARBONATION FIZZ</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <span key={i} className={`w-3 h-3 rounded-full ${i <= activeDrinkModal.tastingProfile.fizz ? 'bg-pulse-citrus' : 'bg-white/20'}`} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Best Moment */}
                  <div className="mb-6">
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mb-1">
                      RECOMMENDED MOMENT:
                    </span>
                    <p className="text-sm font-semibold text-white">
                      {activeDrinkModal.bestMoment}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setActiveDrinkModal(null);
                      onNavigate('discover');
                    }}
                    className="w-full py-4 rounded-full bg-pulse-citrus text-black font-mono text-xs font-extrabold uppercase tracking-widest hover:bg-white transition-colors"
                  >
                    DISCOVER MATCHING MOODS &rarr;
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
