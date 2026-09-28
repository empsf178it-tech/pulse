import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowLeft, RefreshCw } from 'lucide-react';
import { BubbleCanvas } from '../components/BubbleCanvas';
import { soundManager } from '../utils/sound';

export const NotFoundPage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#0B0C10] text-white flex items-center justify-center pt-32 pb-24 px-6 md:px-12 relative overflow-hidden text-center">
      <BubbleCanvas density={40} speed={1.5} />

      {/* Ambient Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pulse-berry/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pulse-berry/20 border border-pulse-berry/40 text-pulse-berry font-mono text-xs font-bold uppercase tracking-widest"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>ERROR 404 // DEPRESSED EFFERVESCENCE</span>
        </motion.div>

        {/* 404 Giant Visual */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-7xl sm:text-9xl font-extrabold uppercase text-white tracking-tighter leading-none"
        >
          4<span className="text-pulse-citrus">0</span>4
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white"
        >
          THIS PAGE <br />
          <span className="text-gradient-berry">LOST ITS FIZZ.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed"
        >
          The route you are trying to reach seems to have evaporated or moved into another flavour parallel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <button
            onClick={() => {
              soundManager.playFizzPop();
              onNavigate('home');
            }}
            className="px-8 py-4 rounded-full bg-pulse-citrus text-black font-mono font-extrabold text-xs uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-pulse-citrus/20 inline-flex items-center gap-2"
            data-cursor="hover"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO PULSE →</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};
