import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { soundManager } from '../utils/sound';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    soundManager.playFizzPop();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={scrollToTop}
          aria-label="Back to top"
          data-cursor="hover"
          className="group fixed bottom-8 right-8 z-50 flex items-center gap-2 p-3.5 sm:px-4 sm:py-3 rounded-full bg-[#12141A]/80 backdrop-blur-xl border border-white/20 text-white hover:bg-pulse-citrus hover:text-black hover:border-pulse-citrus shadow-2xl shadow-black/80 hover:shadow-pulse-citrus/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider hidden sm:inline-block">
            TOP
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
