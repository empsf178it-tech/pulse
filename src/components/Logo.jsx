import React from 'react';

export const Logo = ({ size = 'md', showBadge = false, className = '' }) => {
  // Sizing definitions for icon mark and text
  const sizeClasses = {
    sm: {
      box: 'w-7 h-7 rounded-lg p-[1px]',
      inner: 'rounded-[7px]',
      svg: 'w-4 h-4',
      text: 'text-xl md:text-2xl',
      dot: 'w-2 h-2',
      badge: 'text-[9px] px-2 py-0.5'
    },
    md: {
      box: 'w-9 h-9 rounded-xl p-[1.5px]',
      inner: 'rounded-[10.5px]',
      svg: 'w-5 h-5',
      text: 'text-2xl md:text-3xl',
      dot: 'w-2.5 h-2.5',
      badge: 'text-[10px] px-2.5 py-0.5'
    },
    lg: {
      box: 'w-11 h-11 rounded-2xl p-[2px]',
      inner: 'rounded-[14px]',
      svg: 'w-6 h-6',
      text: 'text-3xl md:text-4xl',
      dot: 'w-3 h-3',
      badge: 'text-[11px] px-3 py-1'
    }
  };

  const current = sizeClasses[size] || sizeClasses.md;

  return (
    <div className={`flex items-center gap-3 group inline-flex select-none ${className}`}>
      {/* Unique Logo Emblem / Icon Mark */}
      <div className={`relative flex items-center justify-center bg-gradient-to-br from-pulse-citrus via-pulse-berry/60 to-pulse-tropic shadow-[0_0_15px_rgba(234,249,0,0.25)] group-hover:shadow-[0_0_24px_rgba(234,249,0,0.55)] transition-all duration-300 ${current.box}`}>
        <div className={`w-full h-full bg-[#0B0C10] flex items-center justify-center relative overflow-hidden ${current.inner}`}>
          {/* Subtle inner background glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-pulse-citrus/20 via-transparent to-pulse-berry/20 opacity-70 group-hover:opacity-100 transition-opacity" />
          
          {/* Custom PULSE Wave & Sparkle SVG Icon */}
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${current.svg} text-pulse-citrus transition-transform duration-300 group-hover:scale-110 relative z-10`}
          >
            <defs>
              <linearGradient id="pulseLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EAF900" />
                <stop offset="60%" stopColor="#FF0077" />
                <stop offset="100%" stopColor="#FF8800" />
              </linearGradient>
            </defs>
            {/* Dynamic Soundwave / Fluid Energy Line */}
            <path
              d="M3 16H8L11 9L15 23L19 13L22 18H29"
              stroke="url(#pulseLogoGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Effervescent Sparkling Bubbles */}
            <circle cx="21" cy="7" r="2.2" fill="#EAF900" className="animate-pulse" />
            <circle cx="9" cy="24" r="1.4" fill="#FF0077" />
          </svg>
        </div>
      </div>

      {/* Brand Name Typography & Status Dot */}
      <div className="flex items-center gap-2">
        <span className={`font-display font-black tracking-tighter text-white group-hover:text-pulse-citrus transition-colors leading-none ${current.text}`}>
          PULSE
        </span>
        <span className={`${current.dot} rounded-full bg-pulse-citrus animate-pulse group-hover:scale-125 transition-transform shadow-[0_0_8px_#EAF900]`} />

        {showBadge && (
          <span className={`ml-1 rounded-full bg-pulse-citrus/20 border border-pulse-citrus/40 text-pulse-citrus font-mono tracking-widest font-bold uppercase hidden sm:inline-block ${current.badge}`}>
            NON-ALCOHOLIC
          </span>
        )}
      </div>
    </div>
  );
};
