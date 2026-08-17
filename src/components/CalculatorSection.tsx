import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Calculator, MessageSquare, Phone, CheckCircle2, TrendingUp, Sparkles, Scale, RefreshCw } from 'lucide-react';

interface CalculatorSectionProps {
  lang: Language;
}

export const CalculatorSection: React.FC<CalculatorSectionProps> = ({ lang }) => {
  const [weightKg, setWeightKg] = useState<number>(1000);
  const [rubberTypeIndex, setRubberTypeIndex] = useState<number>(0);
  const t = translations[lang];

  const ratePerKg = 40;
  const totalCost = weightKg > 0 ? weightKg * ratePerKg : 0;
  const dailyCapacity = 2000;
  const estimatedDays = Math.max(1, Math.ceil(weightKg / dailyCapacity));
  const isOverDailyCapacity = weightKg > dailyCapacity;

  const quickAmounts = [250, 500, 1000, 2000, 3500, 5000];

  const handleWhatsAppBooking = () => {
    const selectedType = t.calculator.types[rubberTypeIndex];
    const message = lang === 'si'
      ? `හෙලෝ ශෂීනි රබර් මිල්ස්, මට රබර් කිලෝග්‍රෑම් ${weightKg.toLocaleString()} ක (${selectedType}) තොගයක් ඇඹරීමට අවශ්‍යයි. ගණනය කළ මිල් ගාස්තුව (රු. 40/- බැගින්): රු. ${totalCost.toLocaleString()}. කරුණාකර දිනයක් සහ වේලාවක් වෙන්කර දෙන්න.`
      : `Hello Shashini Rubber Mills, I would like to book a milling slot for ${weightKg.toLocaleString()} kg of raw rubber (${selectedType}). Calculated milling fee (at Rs. 40/kg): Rs. ${totalCost.toLocaleString()}. Please confirm availability.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/94770437751?text=${encoded}`, '_blank');
  };

  return (
    <section id="calculator" className="py-20 bg-[#f9f7f2] border-b border-[#e2e2d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e8f5e9] border border-[#2d5a27]/30 text-[#2d5a27] text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#2d5a27]" />
            <span>{t.calculator.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d3436] tracking-tight">
            {t.calculator.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            {t.calculator.subtitle}
          </p>
        </div>

        {/* Interactive Calculator Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-[#e2e2d5] overflow-hidden">
          
          {/* Top Natural Tone Accent Ribbon */}
          <div className="bg-[#2d5a27] p-4 sm:p-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#8b5e3c] text-white flex items-center justify-center font-bold shadow-xs">
                Rs.
              </div>
              <div>
                <span className="text-xs text-[#e8f5e9] font-semibold uppercase tracking-wider block">
                  {lang === 'si' ? 'ස්ථාවර මිල ගණන්' : 'Official Flat Rate'}
                </span>
                <span className="text-lg font-bold text-white">
                  Rs. 40.00 / kg <span className="text-xs font-normal text-[#e8f5e9]">({lang === 'si' ? 'අවම දෛනික ධාරිතාව 2000kg' : '2000kg daily capacity'})</span>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-[#f9f7f2] bg-white/10 px-3 py-1.5 rounded-xl border border-white/20">
              <Sparkles className="w-4 h-4 text-[#d7ccc8]" />
              <span>{lang === 'si' ? 'ක්ෂණික ගණනය කිරීම' : 'Instant Estimate'}</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Weight Input Field */}
              <div>
                <label
                  htmlFor="input-rubber-weight"
                  className="block text-sm font-bold text-[#2d3436] mb-2 flex items-center justify-between"
                >
                  <span>{t.calculator.inputLabel}</span>
                  <span className="text-xs font-semibold text-[#2d5a27]">
                    {weightKg.toLocaleString()} kg
                  </span>
                </label>

                <div className="relative rounded-2xl shadow-xs">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400">
                    <Scale className="w-5 h-5 text-[#2d5a27]" />
                  </div>
                  <input
                    id="input-rubber-weight"
                    type="number"
                    min="1"
                    step="10"
                    value={weightKg || ''}
                    onChange={(e) => setWeightKg(Math.max(0, parseFloat(e.target.value) || 0))}
                    placeholder={t.calculator.inputPlaceholder}
                    className="block w-full pl-12 pr-16 py-3.5 text-lg font-bold text-[#2d3436] rounded-2xl border-2 border-[#e2e2d5] focus:border-[#2d5a27] focus:ring-2 focus:ring-[#e8f5e9] outline-none transition-all"
                  />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-stone-500 font-bold text-sm">
                    kg
                  </div>
                </div>

                {/* Quick Selection Chips */}
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  <span className="text-xs text-stone-500 font-medium">
                    {lang === 'si' ? 'ක්ෂණික තේරීම්:' : 'Quick Presets:'}
                  </span>
                  {quickAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setWeightKg(amt)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                        weightKg === amt
                          ? 'bg-[#2d5a27] text-white'
                          : 'bg-[#f1f3f1] text-[#2d3436] hover:bg-[#e2e2d5]'
                      }`}
                    >
                      {amt.toLocaleString()} kg
                    </button>
                  ))}
                </div>
              </div>

              {/* Rubber Type Selector */}
              <div>
                <label className="block text-sm font-bold text-[#2d3436] mb-2">
                  {t.calculator.selectType}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {t.calculator.types.map((type, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setRubberTypeIndex(idx)}
                      className={`p-3 rounded-xl text-left text-xs font-semibold border transition-all flex items-center justify-between cursor-pointer ${
                        rubberTypeIndex === idx
                          ? 'bg-[#e8f5e9] border-[#2d5a27] text-[#2d5a27] font-bold shadow-xs'
                          : 'bg-[#f9f7f2] border-[#e2e2d5] text-stone-700 hover:bg-[#f1f3f1]'
                      }`}
                    >
                      <span>{type}</span>
                      {rubberTypeIndex === idx && (
                        <CheckCircle2 className="w-4 h-4 text-[#2d5a27] flex-shrink-0 ml-2" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Batch Processing Timeline Notice */}
              <div className="p-4 rounded-2xl bg-[#f9f7f2] border border-[#e2e2d5] text-[#2d3436] text-xs flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-[#8b5e3c] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#2d3436] block">
                    {lang === 'si' ? 'දෛනික සැකසුම් ධාරිතාව:' : 'Processing Throughput:'}
                  </span>
                  <span className="text-stone-600">
                    {isOverDailyCapacity
                      ? (lang === 'si'
                          ? `ඔබගේ තොගය කිලෝ ${weightKg.toLocaleString()}කි. දිනකට කිලෝ 2000ක ධාරිතාව අනුව මෙය දින ${estimatedDays}ක් ඇතුළත සම්පූර්ණයෙන්ම සකසා දෙනු ලැබේ.`
                          : `Your batch is ${weightKg.toLocaleString()} kg. At our 2,000 kg/day capacity, this will be completed in approximately ${estimatedDays} processing days.`)
                      : (lang === 'si'
                          ? `ඔබගේ තොගය කිලෝ 2000ට අඩු බැවින් දින 1ක් තුළ අඹරා නිම කළ හැක.`
                          : `Fits comfortably within our 2,000 kg single-day milling capacity.`)}
                  </span>
                </div>
              </div>

            </div>

            {/* Live Calculation Output Card */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-[#2d5a27] text-white rounded-2xl p-6 sm:p-7 shadow-md border border-[#23471e]">
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/20">
                  <span className="text-xs font-bold text-[#e8f5e9] uppercase tracking-wider">
                    {t.calculator.breakdownTitle}
                  </span>
                  <span className="text-[11px] text-[#f9f7f2] font-semibold bg-white/10 px-2 py-0.5 rounded">
                    {lang === 'si' ? 'සැඟවුණු ගාස්තු නැත' : 'No Hidden Fees'}
                  </span>
                </div>

                {/* Subtotal Calculations */}
                <div className="space-y-3 py-5 text-sm">
                  <div className="flex justify-between items-center text-[#e8f5e9]">
                    <span>{t.calculator.breakdownGross}</span>
                    <span className="font-bold text-white">{weightKg.toLocaleString()} kg</span>
                  </div>

                  <div className="flex justify-between items-center text-[#e8f5e9]">
                    <span>{t.calculator.breakdownRate}</span>
                    <span className="font-bold text-white">Rs. {ratePerKg}.00 / kg</span>
                  </div>

                  <div className="flex justify-between items-center text-[#e8f5e9]">
                    <span>{t.calculator.estimatedDailyBatches}</span>
                    <span className="font-bold text-[#d7ccc8]">
                      {estimatedDays} {lang === 'si' ? 'දිනක් තුළ' : 'Day(s)'}
                    </span>
                  </div>

                  <div className="pt-4 border-t border-white/20 flex justify-between items-baseline">
                    <span className="text-sm font-bold text-[#f9f7f2]">
                      {t.calculator.estimatedCost}:
                    </span>
                    <div className="text-right">
                      <span className="text-3xl sm:text-4xl font-bold text-white block tracking-tight">
                        Rs. {totalCost.toLocaleString()}
                      </span>
                      <span className="text-[11px] text-[#e8f5e9]">
                        {lang === 'si' ? 'සම්පූර්ණ මිල් අයකිරීම' : 'Total estimated fee'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-4 border-t border-white/20">
                <button
                  id="btn-calc-whatsapp-book"
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#8b5e3c] hover:bg-[#764e32] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.01] active:scale-95 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>{t.calculator.actionBook}</span>
                </button>

                <a
                  id="btn-calc-call"
                  href="tel:0770437751"
                  className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center justify-center gap-2 border border-white/20 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#d7ccc8]" />
                  <span>0770437751 - {t.calculator.actionCall}</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
