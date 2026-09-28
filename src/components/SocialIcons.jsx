import React from 'react';
import { Instagram, Youtube, Linkedin } from 'lucide-react';
import { soundManager } from '../utils/sound';

export const XIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const TikTokIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 1 1-2.896-2.896c.245 0 .484.03.712.086V9.387a6.34 6.34 0 1 0 5.629 6.285V8.423a8.219 8.219 0 0 0 4.77 1.708V6.686z" />
  </svg>
);

export const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    handle: '@pulsebeverages',
    url: 'https://instagram.com',
    icon: Instagram
  },
  {
    name: 'X',
    handle: '@pulsebeverages',
    url: 'https://x.com',
    icon: XIcon
  },
  {
    name: 'TikTok',
    handle: '@pulse.official',
    url: 'https://tiktok.com',
    icon: TikTokIcon
  },
  {
    name: 'YouTube',
    handle: 'PULSE Beverage Co.',
    url: 'https://youtube.com',
    icon: Youtube
  },
  {
    name: 'LinkedIn',
    handle: 'PULSE Beverage Studio',
    url: 'https://linkedin.com',
    icon: Linkedin
  }
];

export const SocialIcons = ({ variant = 'default' }) => {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      {SOCIAL_LINKS.map((item) => {
        const IconComponent = item.icon;
        return (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playFizzPop()}
            title={`Follow PULSE on ${item.name}`}
            aria-label={`Follow PULSE on ${item.name}`}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-pulse-citrus hover:text-black hover:border-pulse-citrus hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center text-slate-300 shadow-md cursor-pointer"
            data-cursor="hover"
          >
            <IconComponent className="w-4 h-4" />
          </a>
        );
      })}
    </div>
  );
};
