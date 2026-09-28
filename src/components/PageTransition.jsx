import React from 'react';
import { motion } from 'framer-motion';

const pageOverlayColors = {
  home: '#EAF900',
  drinks: '#00E5FF',
  flavours: '#FF2E75',
  ingredients: '#10B981',
  story: '#FF7E27',
  discover: '#FF9A76',
  contact: '#EAF900',
  404: '#FF2E75'
};

export const PageTransition = ({ children, pageKey }) => {
  const accentColor = pageOverlayColors[pageKey] || '#EAF900';

  return (
    <div className="relative w-full">
      {/* Liquid Color Flash Curtain */}
      <motion.div
        key={`overlay-${pageKey}`}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ backgroundColor: accentColor, transformOrigin: 'top center' }}
        className="fixed inset-0 z-[10000] pointer-events-none opacity-90"
      />

      {/* Main Page Content */}
      <motion.div
        key={pageKey}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  );
};
