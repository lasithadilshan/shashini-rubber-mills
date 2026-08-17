import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Scale, Droplets, Cog, Wind, PackageCheck, ArrowRight, ShieldCheck } from 'lucide-react';

interface ProcessSectionProps {
  lang: Language;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ lang }) => {
  const t = translations[lang];

  const stepIcons = [
    <Scale className="w-6 h-6 text-white" />,
    <Droplets className="w-6 h-6 text-white" />,
    <Cog className="w-6 h-6 text-white" />,
    <Wind className="w-6 h-6 text-white" />,
    <PackageCheck className="w-6 h-6 text-white" />
  ];

  return (
    <section id="process" className="py-20 bg-[#f9f7f2] border-b border-[#e2e2d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e8f5e9] border border-[#2d5a27]/30 text-[#2d5a27] text-xs font-bold uppercase tracking-wider mb-3">
            <Cog className="w-3.5 h-3.5 text-[#2d5a27]" />
            <span>{t.process.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d3436] tracking-tight">
            {t.process.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            {t.process.subtitle}
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {t.process.steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#e2e2d5] hover:border-[#2d5a27] hover:shadow-md transition-all flex flex-col justify-between relative group"
            >
              {/* Step Number Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#2d5a27] text-white flex items-center justify-center font-bold text-lg shadow-xs group-hover:scale-105 transition-transform">
                  {stepIcons[idx]}
                </div>
                <span className="text-3xl font-bold text-[#d7ccc8] group-hover:text-[#2d5a27] transition-colors">
                  0{step.stepNumber}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#2d3436] mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#e2e2d5]">
                <span className="text-[11px] font-bold text-[#2d5a27] bg-[#e8f5e9] px-2 py-1 rounded inline-block">
                  {step.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Factory Standards Banner */}
        <div className="bg-[#2d5a27] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#23471e] shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#8b5e3c] text-white flex items-center justify-center flex-shrink-0 font-bold">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                {lang === 'si' ? 'නියමිත ප්‍රමිතියෙන් යුතු 3X ක්‍රේප් රබර් සහතික කරමු' : 'Certified 3X Crepe Sheeting Quality Standards'}
              </h4>
              <p className="text-xs sm:text-sm text-[#e8f5e9] mt-0.5">
                {lang === 'si'
                  ? 'අධික උණුසුම හෝ තෙතමනය රඳවා නොගනිමින් නිසි පරිදි වියලා දීම සහතික කරනු ලැබේ.'
                  : 'Zero water stagnation, deep maceration, uniform lace embossing, and spot-free air curing.'}
              </p>
            </div>
          </div>

          <a
            id="process-book-btn"
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-[#8b5e3c] hover:bg-[#764e32] text-white font-bold text-xs uppercase tracking-wider flex-shrink-0 transition-colors flex items-center gap-2"
          >
            <span>{lang === 'si' ? 'අස්වැන්න භාරදීමට වේලාවක් වෙන්කරන්න' : 'Schedule Batch Intake'}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
