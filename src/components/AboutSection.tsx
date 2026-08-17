import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { ShieldCheck, Zap, Award, Layers, CheckCircle, Scale, Droplets, Clock, Factory } from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const t = translations[lang];

  const pillarIcons: Record<string, React.ReactNode> = {
    trust: <ShieldCheck className="w-7 h-7 text-[#2d5a27]" />,
    efficiency: <Zap className="w-7 h-7 text-[#8b5e3c]" />,
    quality: <Award className="w-7 h-7 text-[#2d5a27]" />,
    capacity: <Layers className="w-7 h-7 text-[#8b5e3c]" />,
  };

  return (
    <section id="about" className="py-20 bg-[#f9f7f2] border-b border-[#e2e2d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e8f5e9] border border-[#2d5a27]/30 text-[#2d5a27] text-xs font-bold uppercase tracking-wider mb-3">
            <Factory className="w-3.5 h-3.5 text-[#2d5a27]" />
            <span>{t.about.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d3436] tracking-tight">
            {t.about.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        {/* 4 Core Operational Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {t.about.pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#e2e2d5] hover:border-[#2d5a27] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#f9f7f2] border border-[#e2e2d5] flex items-center justify-center mb-5 shadow-xs">
                  {pillarIcons[pillar.id]}
                </div>
                <h3 className="text-lg font-bold text-[#2d3436] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#e2e2d5] flex items-center gap-2 text-xs font-bold text-[#2d5a27]">
                <CheckCircle className="w-4 h-4 text-[#2d5a27]" />
                <span>{lang === 'si' ? 'සහතික කළ ප්‍රමිතිය' : 'Guaranteed Standard'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner: Why Rubber Planters Trust Shashini Rubber Mills */}
        <div className="rounded-3xl bg-[#2d5a27] text-white p-8 sm:p-10 lg:p-12 shadow-xl border border-[#23471e] relative overflow-hidden">
          {/* Subtle background natural tone shape */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#8b5e3c]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#f9f7f2] border border-white/20 text-xs font-bold">
                <span>{lang === 'si' ? 'විශ්වාසනීය සේවාව' : 'Trustworthy Service'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {t.about.missionTitle}
              </h3>
              <p className="text-[#e8f5e9] text-sm sm:text-base leading-relaxed">
                {lang === 'si'
                  ? 'අපගේ අරමුණ වන්නේ රබර් නිෂ්පාදකයන්ට නිසි වටිනාකමක් ලබාදෙමින්, සුහදශීලී සහ විශ්වාසදායක සේවාවක් තුළින් ඔබේ අස්වැන්නෙන් උපරිම ලාභයක් ලබාගැනීමට සහාය වීමයි.'
                  : 'We are dedicated to empowering rubber growers and estate managers with honest weight calculations, superior crepe sheen, and continuous milling reliability at the competitive rate of Rs. 40/- per kg.'}
              </p>

              {/* Quick Feature Chips */}
              <div className="grid grid-cols-3 gap-3 pt-3">
                <div className="p-3 rounded-xl bg-white/10 border border-white/15 text-center">
                  <Scale className="w-5 h-5 text-[#d7ccc8] mx-auto mb-1" />
                  <span className="text-xs font-bold text-[#f9f7f2] block">
                    {lang === 'si' ? 'ඩිජිටල් කිරුම' : 'Digital Weighing'}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-white/15 text-center">
                  <Droplets className="w-5 h-5 text-[#e8f5e9] mx-auto mb-1" />
                  <span className="text-xs font-bold text-[#f9f7f2] block">
                    {lang === 'si' ? 'පිරිසිදු ජල සේදීම' : 'Clean Water Wash'}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-white/15 text-center">
                  <Clock className="w-5 h-5 text-[#d7ccc8] mx-auto mb-1" />
                  <span className="text-xs font-bold text-[#f9f7f2] block">
                    {lang === 'si' ? 'කඩිනම් නිමාව' : 'Fast Delivery'}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-black/20 rounded-2xl p-6 border border-white/15 backdrop-blur-xs">
                <h4 className="text-base font-bold text-[#f9f7f2] mb-4 pb-2 border-b border-white/15">
                  {lang === 'si' ? 'අපගේ සහතික කළ වාසි:' : 'Our Verified Advantages:'}
                </h4>
                <ul className="space-y-3">
                  {t.about.reasons.map((reason, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#e8f5e9]">
                      <div className="w-5 h-5 rounded-full bg-[#8b5e3c] text-white flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                        ✓
                      </div>
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
