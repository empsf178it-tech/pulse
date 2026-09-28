import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react';
import { soundManager } from '../utils/sound';
import { Logo } from './Logo';
import { SocialIcons } from './SocialIcons';

export const Navbar = ({ activePage, onNavigate, scrollProgress }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    soundManager.enabled = nextState;
    if (nextState) soundManager.playFizzPop();
  };

  const navLinks = [
    { label: 'HOME', route: 'home', num: '01' },
    { label: 'DRINKS', route: 'drinks', num: '02' },
    { label: 'FLAVOURS', route: 'flavours', num: '03' },
    { label: 'INGREDIENTS', route: 'ingredients', num: '04' },
    { label: 'OUR STORY', route: 'story', num: '05' },
    { label: 'DISCOVER', route: 'discover', num: '06' },
    { label: 'CONTACT', route: 'contact', num: '07' }
  ];

  const handleLinkClick = (route) => {
    soundManager.playFizzPop();
    setMobileMenuOpen(false);
    onNavigate(route);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-white/10 z-[1000]">
        <motion.div
          className="h-full bg-gradient-to-r from-pulse-citrus via-pulse-berry to-pulse-tropic shadow-[0_0_12px_#EAF900]"
          style={{ width: `${scrollProgress}%` }}
          transition={{ ease: 'easeOut', duration: 0.1 }}
        />
      </div>

      {/* Main Header / Glass Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
          scrolled ? 'py-3 md:py-4 glass-nav shadow-2xl' : 'py-4 md:py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="text-left focus:outline-none"
            data-cursor="hover"
            aria-label="PULSE Home"
          >
            <Logo size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 6).map((link) => {
              const isActive = activePage === link.route;
              return (
                <button
                  key={link.route}
                  onClick={() => handleLinkClick(link.route)}
                  className={`font-mono text-xs tracking-widest font-semibold uppercase transition-colors relative py-1 focus:outline-none ${
                    isActive ? 'text-pulse-citrus' : 'text-slate-300 hover:text-white'
                  }`}
                  data-cursor="hover"
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-pulse-citrus shadow-[0_0_8px_#EAF900]"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Group */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-pulse-citrus/40 text-slate-300 hover:text-white transition-all text-xs font-mono"
              title="Toggle Audio Feedback"
              data-cursor="hover"
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-pulse-citrus" />
                  <span>AUDIO ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-slate-500" />
                  <span className="text-slate-500">MUTED</span>
                </>
              )}
            </button>

            {/* Contact Button */}
            <button
              onClick={() => handleLinkClick('contact')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-mono text-xs tracking-wider font-bold uppercase transition-all duration-300 ${
                activePage === 'contact'
                  ? 'bg-pulse-citrus text-black shadow-lg shadow-pulse-citrus/20'
                  : 'bg-white/10 hover:bg-pulse-citrus text-white hover:text-black border border-white/15 hover:border-pulse-citrus'
              }`}
              data-cursor="hover"
            >
              <span>CONTACT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2.5">
            <button
              onClick={toggleSound}
              className="w-9 h-9 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Toggle Sound"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-pulse-citrus" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-full bg-pulse-citrus text-black hover:bg-white hover:text-black flex items-center justify-center transition-all focus:outline-none shadow-[0_0_12px_rgba(234,249,0,0.3)]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 stroke-[2.5]" /> : <Menu className="w-4 h-4 stroke-[2.5]" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Animated Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[1001] bg-[#0B0C10] flex flex-col justify-between p-6 sm:p-10 lg:hidden overflow-y-auto"
          >
            {/* Mobile Drawer Header */}
            <div className="flex items-center justify-between w-full pt-2 pb-4">
              <button
                onClick={() => handleLinkClick('home')}
                className="text-left focus:outline-none"
                aria-label="PULSE Home"
              >
                <Logo size="sm" />
              </button>

              <div className="flex items-center gap-3">
                {/* Audio Toggle Button in Yellow Circle */}
                <button
                  onClick={toggleSound}
                  className="w-10 h-10 rounded-full bg-pulse-citrus text-black flex items-center justify-center transition-transform active:scale-95 shadow-[0_0_15px_rgba(234,249,0,0.35)]"
                  title="Toggle Audio Feedback"
                  aria-label="Toggle Audio"
                >
                  {soundEnabled ? (
                    <Volume2 className="w-5 h-5 text-black" />
                  ) : (
                    <VolumeX className="w-5 h-5 text-black/60" />
                  )}
                </button>

                {/* Close Drawer Button in Yellow Circle */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-pulse-citrus text-black flex items-center justify-center transition-transform active:scale-95 shadow-[0_0_15px_rgba(234,249,0,0.35)]"
                  aria-label="Close Menu"
                >
                  <X className="w-5 h-5 text-black stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Vertical Typography Nav Links */}
            <div className="flex flex-col justify-center flex-1 my-auto py-6 space-y-3 sm:space-y-4">
              {navLinks.map((link, idx) => {
                const isActive = activePage === link.route;
                return (
                  <motion.button
                    key={link.route}
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + idx * 0.035 }}
                    onClick={() => handleLinkClick(link.route)}
                    className="text-left group w-full focus:outline-none py-1"
                  >
                    <span
                      className={`font-display font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight uppercase transition-all duration-200 block ${
                        isActive
                          ? 'text-pulse-citrus translate-x-1'
                          : 'text-white hover:text-pulse-citrus group-hover:translate-x-1.5'
                      }`}
                    >
                      {link.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Mobile Drawer Bottom Footer */}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-1.5">
              <p className="font-mono text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                FEEL THE FRESH.
              </p>
              <p className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                PULSE Non-Alcoholic Beverage Brand &copy; 2026. All rights reserved.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


