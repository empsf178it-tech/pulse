import React from 'react';
import { ArrowUp } from 'lucide-react';
import { soundManager } from '../utils/sound';
import { Logo } from './Logo';
import { SocialIcons } from './SocialIcons';

export const Footer = ({ onNavigate }) => {
  return (
    <footer className="relative bg-[#07080A] text-white pt-24 pb-12 border-t border-white/10 overflow-hidden">
      {/* Background Accent Glow Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pulse-citrus/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Brand & Tagline Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <button
                onClick={() => onNavigate('home')}
                className="text-left focus:outline-none mb-6 cursor-pointer block"
                data-cursor="hover"
                aria-label="PULSE Home"
              >
                <Logo size="lg" />
              </button>
              <h3 className="font-display text-2xl font-bold tracking-tight text-white mb-4">
                FEEL THE FRESH.
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Contemporary non-alcoholic drinks crafted with cold-pressed real fruits, crisp botanicals, and refined sparkling effervescence.
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="font-mono text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-3">
                FOLLOW THE PULSE
              </p>
              <SocialIcons />
            </div>
          </div>

          {/* Nav Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1: Explore */}
            <div>
              <h4 className="font-mono text-xs text-slate-500 font-bold uppercase tracking-widest mb-6">
                EXPLORE
              </h4>
              <ul className="space-y-3 font-mono text-sm">
                <li>
                  <button onClick={() => onNavigate('drinks')} className="text-slate-300 hover:text-pulse-citrus transition-colors" data-cursor="hover">
                    DRINKS RANGE
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('flavours')} className="text-slate-300 hover:text-pulse-citrus transition-colors" data-cursor="hover">
                    FLAVOUR MOODS
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('ingredients')} className="text-slate-300 hover:text-pulse-citrus transition-colors" data-cursor="hover">
                    RAW INGREDIENTS
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('discover')} className="text-slate-300 hover:text-pulse-citrus transition-colors" data-cursor="hover">
                    DISCOVER MOMENTS
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: Brand */}
            <div>
              <h4 className="font-mono text-xs text-slate-500 font-bold uppercase tracking-widest mb-6">
                PULSE BRAND
              </h4>
              <ul className="space-y-3 font-mono text-sm">
                <li>
                  <button onClick={() => onNavigate('story')} className="text-slate-300 hover:text-pulse-citrus transition-colors" data-cursor="hover">
                    OUR STORY
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('contact')} className="text-slate-300 hover:text-pulse-citrus transition-colors" data-cursor="hover">
                    CONTACT US
                  </button>
                </li>
                <li>
                  <span className="text-slate-500 cursor-not-allowed">PRESS KIT</span>
                </li>
                <li>
                  <span className="text-slate-500 cursor-not-allowed">CAREERS</span>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h4 className="font-mono text-xs text-slate-500 font-bold uppercase tracking-widest mb-6">
                GET IN TOUCH
              </h4>
              <ul className="space-y-3 font-mono text-xs text-slate-400">
                <li>
                  <span className="block text-slate-500">GENERAL</span>
                  <a href="mailto:hello@pulse.example" className="text-white hover:text-pulse-citrus underline decoration-white/20">
                    hello@pulse.example
                  </a>
                </li>
                <li>
                  <span className="block text-slate-500">STUDIO & MEDIA</span>
                  <a href="mailto:studio@pulse.example" className="text-white hover:text-pulse-citrus underline decoration-white/20">
                    studio@pulse.example
                  </a>
                </li>
                <li>
                  <span className="block text-slate-500">PARTNERSHIPS</span>
                  <a href="mailto:partners@pulse.example" className="text-white hover:text-pulse-citrus underline decoration-white/20">
                    partners@pulse.example
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>&copy; 2026 PULSE BEVERAGE COMPANY. FRONTEND BRAND SHOWCASE.</p>
          <div className="flex items-center space-x-6">
            <span>100% NON-ALCOHOLIC</span>
            <span>·</span>
            <span>COLD PRESSED</span>
            <span>·</span>
            <span>SPARKLING</span>
          </div>
          <button
            onClick={() => {
              soundManager.playFizzPop();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-2 text-slate-400 hover:text-pulse-citrus transition-colors font-bold uppercase tracking-wider text-xs cursor-pointer"
            data-cursor="hover"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
