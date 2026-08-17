import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { X, Phone, Star, ShieldCheck, Wrench, Banknote, TrendingUp, MapPin, Download, Share2 } from 'lucide-react';

interface FlyerModalProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
}

export const FlyerModal: React.FC<FlyerModalProps> = ({ lang, isOpen, onClose }) => {
  if (!isOpen) return null;
  const t = translations[lang];

  return (
    <div
      id="flyer-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="flyer-modal-content"
        className="relative w-full max-w-2xl bg-[#f9f7f2] rounded-3xl overflow-hidden shadow-2xl border border-[#2d5a27] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="btn-close-flyer-modal"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-[#2d5a27] p-4 px-6 text-white flex items-center justify-between border-b border-[#23471e]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#d7ccc8]" />
            <span className="font-bold text-sm text-[#f9f7f2]">
              {t.flyerBanner.title}
            </span>
          </div>
          <span className="text-xs text-[#e8f5e9]">
            {lang === 'si' ? 'ශෂීනි රබර් මිල්ස්' : 'Shashini Rubber Mills'}
          </span>
        </div>

        {/* Recreated Authentic High-Resolution Visual Layout of the Flyer in Natural Tones */}
        <div className="p-6 sm:p-8 bg-[#f9f7f2] text-[#2d3436]">
          
          <div className="border-2 border-[#2d5a27] rounded-2xl p-4 sm:p-6 bg-white relative overflow-hidden shadow-sm">
            
            {/* Header Brand Badge */}
            <div className="flex items-center justify-center mb-6">
              <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#2d5a27] border border-[#23471e] text-white shadow-sm">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-7 h-7 text-[#e8f5e9]"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" fill="currentColor" fillOpacity="0.4" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
                <span className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                  ශෂීනි රබර් මිල්ස්
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="text-center space-y-2 mb-6">
              <div className="text-xs sm:text-sm font-bold text-stone-600 uppercase tracking-wider">
                උසස් තත්ත්වයේ
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2d5a27] tracking-tight leading-tight">
                ක්‍රේප් රබර්
                <br />
                <span className="text-[#8b5e3c]">නිෂ්පාදන සේවාව</span>
              </h2>

              {/* 3 Stars */}
              <div className="flex items-center justify-center gap-1 text-[#8b5e3c] pt-2">
                <Star className="w-4 h-4 fill-[#8b5e3c]" />
                <Star className="w-4 h-4 fill-[#8b5e3c]" />
                <Star className="w-4 h-4 fill-[#8b5e3c]" />
              </div>
              <p className="text-xs sm:text-sm font-bold text-[#2d3436] tracking-wide">
                විශ්වාසදායක • කාර්යක්ෂම • ගුණාත්මක
              </p>
            </div>

            {/* 5 Core Feature Hexagons/Pills */}
            <div className="space-y-3 mb-6">
              
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#f9f7f2] border border-[#e2e2d5]">
                <div className="w-9 h-9 rounded-lg bg-[#2d5a27] text-white flex items-center justify-center flex-shrink-0 font-bold">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-stone-500 block">සේවාව:</span>
                  <span className="text-sm font-bold text-[#2d3436]">ක්‍රේප් රබර් නිෂ්පාදනය</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#e8f5e9] border border-[#2d5a27]/40">
                <div className="w-9 h-9 rounded-lg bg-[#8b5e3c] text-white flex items-center justify-center flex-shrink-0 font-bold text-xs">
                  Rs.
                </div>
                <div>
                  <span className="text-[10px] text-[#2d5a27] block font-semibold">මිල් ගාස්තුව:</span>
                  <span className="text-sm font-bold text-[#2d5a27]">කිලෝග්‍රෑම් 1කට රු. 40/-</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#f9f7f2] border border-[#e2e2d5]">
                <div className="w-9 h-9 rounded-lg bg-[#2d5a27] text-white flex items-center justify-center flex-shrink-0 font-bold">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-stone-500 block">අවම දෛනික නිෂ්පාදන ධාරිතාව:</span>
                  <span className="text-sm font-bold text-[#2d3436]">කිලෝග්‍රෑම් 2000</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2.5 rounded-xl bg-[#f9f7f2] border border-[#e2e2d5]">
                <div className="w-9 h-9 rounded-lg bg-[#8b5e3c] text-white flex items-center justify-center flex-shrink-0 font-bold mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-stone-500 block">ලිපිනය:</span>
                  <span className="text-xs font-bold text-[#2d3436] leading-tight">
                    ශාන්ත මරියා මාවත, නිරිපොල, කළුඅග්ගල, හංවැල්ල.
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#f9f7f2] border border-[#2d5a27]/30">
                <div className="w-9 h-9 rounded-lg bg-[#2d5a27] text-white flex items-center justify-center flex-shrink-0 font-bold">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-stone-500 block">අමතන්න:</span>
                  <span className="text-base font-bold text-[#2d5a27]">0770437751</span>
                </div>
              </div>

            </div>

            {/* Bottom Ribbon Bar */}
            <div className="rounded-xl p-3 bg-[#8b5e3c] text-white font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-2 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-white" />
              <span>ඔබගේ ක්‍රේප් රබර් නිෂ්පාදන අවශ්‍යතා සඳහා අදම අප අමතන්න!</span>
            </div>

          </div>

          {/* Action buttons inside modal */}
          <div className="flex items-center gap-3 mt-6">
            <a
              id="flyer-modal-call-btn"
              href="tel:0770437751"
              className="flex-1 py-3 px-4 rounded-xl bg-[#8b5e3c] hover:bg-[#764e32] text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>0770437751 - {lang === 'si' ? 'අමතන්න' : 'Call Now'}</span>
            </a>

            <button
              id="flyer-modal-close-btn"
              type="button"
              onClick={onClose}
              className="px-5 py-3 rounded-xl bg-[#2d5a27] hover:bg-[#23471e] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              {t.flyerBanner.closeModal}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
