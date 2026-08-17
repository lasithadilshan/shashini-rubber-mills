import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Wrench, Banknote, TrendingUp, MapPin, PhoneCall, CheckCircle2, ArrowRight } from 'lucide-react';

interface QuickSpecsBarProps {
  lang: Language;
}

export const QuickSpecsBar: React.FC<QuickSpecsBarProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="quick-specs" className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-sm border border-[#e2e2d5] p-4 sm:p-6 lg:p-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#e2e2d5]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f5e9] text-[#2d5a27] text-xs font-bold mb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#2d5a27]" />
              <span>{lang === 'si' ? 'ප්‍රධාන තොරතුරු සහ විශේෂාංග' : 'Core Milling Specifications'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#2d3436]">
              {lang === 'si' ? 'ශෂීනි රබර් මිල්ස් සේවා දළ විශ්ලේෂණය' : 'Quick Facts & Operational Highlights'}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              id="specs-bar-call-btn"
              href="tel:0770437751"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#8b5e3c] hover:bg-[#764e32] text-white text-xs font-bold shadow-xs transition-colors uppercase tracking-wider"
            >
              <PhoneCall className="w-4 h-4 text-white" />
              <span>0770437751</span>
            </a>
          </div>
        </div>

        {/* 5-Item Grid Matching the 5 Badges from Flyer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-6">
          
          {/* Card 1: Service */}
          <div className="p-4 rounded-xl bg-[#f9f7f2] border border-[#e2e2d5] hover:border-[#2d5a27] transition-all flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#2d5a27] text-white flex items-center justify-center mb-3 shadow-xs group-hover:scale-105 transition-transform">
                <Wrench className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-[#2d5a27] uppercase tracking-wider block">
                {t.quickSpecs[0].label}
              </span>
              <p className="text-base font-bold text-[#2d3436] mt-1 leading-snug">
                {t.quickSpecs[0].value}
              </p>
            </div>
            <p className="text-xs text-stone-600 mt-3 pt-2 border-t border-[#e2e2d5]">
              {t.quickSpecs[0].detail}
            </p>
          </div>

          {/* Card 2: Price */}
          <div className="p-4 rounded-xl bg-[#f9f7f2] border-2 border-[#8b5e3c]/50 hover:border-[#8b5e3c] transition-all flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#8b5e3c] text-white flex items-center justify-center mb-3 shadow-xs font-bold group-hover:scale-105 transition-transform">
                <Banknote className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-[#8b5e3c] uppercase tracking-wider block">
                {t.quickSpecs[1].label}
              </span>
              <p className="text-xl font-black text-[#2d3436] mt-1 leading-snug">
                {t.quickSpecs[1].value}
              </p>
            </div>
            <p className="text-xs text-stone-600 mt-3 pt-2 border-t border-[#e2e2d5] font-medium">
              {t.quickSpecs[1].detail}
            </p>
          </div>

          {/* Card 3: Capacity */}
          <div className="p-4 rounded-xl bg-[#f9f7f2] border border-[#e2e2d5] hover:border-[#2d5a27] transition-all flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#2d5a27] text-white flex items-center justify-center mb-3 shadow-xs group-hover:scale-105 transition-transform">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-[#2d5a27] uppercase tracking-wider block">
                {t.quickSpecs[2].label}
              </span>
              <p className="text-base font-bold text-[#2d3436] mt-1 leading-snug">
                {t.quickSpecs[2].value}
              </p>
            </div>
            <p className="text-xs text-stone-600 mt-3 pt-2 border-t border-[#e2e2d5]">
              {t.quickSpecs[2].detail}
            </p>
          </div>

          {/* Card 4: Location */}
          <div className="p-4 rounded-xl bg-[#f9f7f2] border border-[#e2e2d5] hover:border-[#2d5a27] transition-all flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#2d5a27] text-white flex items-center justify-center mb-3 shadow-xs group-hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-[#2d5a27] uppercase tracking-wider block">
                {t.quickSpecs[3].label}
              </span>
              <p className="text-xs font-bold text-[#2d3436] mt-1 leading-snug">
                {t.quickSpecs[3].value}
              </p>
            </div>
            <a
              id="quick-spec-map-link"
              href="#contact"
              className="text-xs font-bold text-[#2d5a27] hover:text-[#23471e] mt-3 pt-2 border-t border-[#e2e2d5] inline-flex items-center gap-1"
            >
              <span>{lang === 'si' ? 'සිතියම බලන්න' : 'View Location'}</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Card 5: Hotline */}
          <a
            id="quick-spec-call-card"
            href="tel:0770437751"
            className="p-4 rounded-xl bg-[#2d5a27] text-white border border-[#23471e] hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#8b5e3c] text-white flex items-center justify-center mb-3 shadow-xs font-bold group-hover:scale-110 transition-transform">
                <PhoneCall className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-[#d7ccc8] uppercase tracking-wider block">
                {t.quickSpecs[4].label}
              </span>
              <p className="text-lg font-black text-[#f9f7f2] mt-1 leading-snug">
                {t.quickSpecs[4].value}
              </p>
            </div>
            <p className="text-xs text-[#e8f5e9] mt-3 pt-2 border-t border-white/20 flex items-center justify-between">
              <span>{lang === 'si' ? 'ක්ෂණික ඇමතුම්' : 'Instant Hotline'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#d7ccc8]" />
            </p>
          </a>

        </div>

      </div>
    </section>
  );
};
