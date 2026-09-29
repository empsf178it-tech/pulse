import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Snappy, highly responsive spring for the outer ring
  const springConfig = { damping: 35, stiffness: 450, mass: 0.1 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const [cursorState, setCursorState] = useState('default'); // 'default' | 'taste' | 'explore' | 'hover'
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if touchscreen or mobile
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let lastX = window.innerWidth / 2;
    let lastY = window.innerHeight / 2;

    const updateCursorTarget = (x, y) => {
      const el = document.elementFromPoint(x, y);
      if (el) {
        const target = el.closest('[data-cursor]');
        if (target) {
          const type = target.getAttribute('data-cursor');
          if (type === 'taste') {
            setCursorState('taste');
            setCursorText('TASTE');
          } else if (type === 'explore') {
            setCursorState('explore');
            setCursorText('EXPLORE');
          } else if (type === 'hover') {
            setCursorState('hover');
            setCursorText('');
          }
        } else {
          const isInteractive = el.closest('a, button, input, textarea, select, [role="button"]');
          if (isInteractive) {
            setCursorState('hover');
            setCursorText('');
          } else {
            setCursorState('default');
            setCursorText('');
          }
        }
      }
    };

    const onMouseMove = (e) => {
      lastX = e.clientX;
      lastY = e.clientY;
      cursorX.set(lastX);
      cursorY.set(lastY);

      setIsVisible(true);
      updateCursorTarget(lastX, lastY);
    };

    const onScroll = () => {
      setIsVisible(true);
      updateCursorTarget(lastX, lastY);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [cursorX, cursorY]);

  const isExpanded = cursorState === 'taste' || cursorState === 'explore';
  const size = isExpanded ? 80 : cursorState === 'hover' ? 48 : 32;

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[999999] hidden lg:block transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Outer Ring / Label */}
      <motion.div
        className={`fixed top-0 left-0 flex items-center justify-center rounded-full font-mono text-[10px] tracking-widest font-bold uppercase transition-colors duration-300 ${
          isExpanded
            ? 'bg-pulse-citrus text-black shadow-lg shadow-pulse-citrus/30'
            : cursorState === 'hover'
            ? 'border-2 border-white bg-white/20 backdrop-blur-sm'
            : 'border border-white/50 bg-transparent'
        }`}
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: size,
          height: size,
        }}
        transition={{
          width: { type: 'spring', damping: 25, stiffness: 350 },
          height: { type: 'spring', damping: 25, stiffness: 350 },
        }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="select-none font-extrabold text-black"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Center Dot (Instant positioning for zero pointer latency) */}
      {!isExpanded && (
        <motion.div
          className="fixed top-0 left-0 w-2 h-2 bg-pulse-citrus rounded-full pointer-events-none"
          style={{
            x: cursorX,
            y: cursorY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            scale: cursorState === 'hover' ? 0 : 1,
          }}
          transition={{ duration: 0.12 }}
        />
      )}
    </div>
  );
};
