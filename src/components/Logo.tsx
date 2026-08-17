import React from 'react';
import { Language } from '../types';

interface LogoProps {
  lang: Language;
  variant?: 'light' | 'dark' | 'badge';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ lang, variant = 'light', className = '' }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Brand Icon Badge with Natural Tones */}
      <div className="relative flex-shrink-0">
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#2d5a27] p-[2px] shadow-sm flex items-center justify-center">
          <div className="w-full h-full rounded-[10px] bg-[#2d5a27] flex items-center justify-center">
            {/* Rubber Leaf Graphic */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-5 h-5 sm:w-6 sm:h-6 text-[#e8f5e9]"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" fill="currentColor" fillOpacity="0.35" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
          </div>
        </div>
        {/* Natural Tone Earth Brown Dot Accent */}
        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#8b5e3c] border-2 border-white shadow-xs" />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-bold tracking-tight text-base sm:text-lg leading-tight uppercase ${
              variant === 'dark'
                ? 'text-white'
                : variant === 'badge'
                ? 'text-[#2d5a27]'
                : 'text-[#2d5a27]'
            }`}
          >
            {lang === 'si' ? 'ශෂීනි රබර් මිල්ස්' : 'Shashini Rubber Mills'}
          </span>
        </div>
        <span
          className={`text-[11px] font-semibold tracking-wider ${
            variant === 'dark' ? 'text-[#d7ccc8]' : 'text-[#8b5e3c]'
          }`}
        >
          {lang === 'si' ? 'ශෂිනි රබර් මෝල් • හංවැල්ල' : 'Crepe Rubber Manufacturing • Hanwella'}
        </span>
      </div>
    </div>
  );
};
