import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Layers, Check, ArrowRight, Banknote, ShieldAlert, Sparkles, MessageSquare, Phone } from 'lucide-react';

interface ProductsSectionProps {
  lang: Language;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="products" className="py-20 bg-[#f9f7f2] border-b border-[#e2e2d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e8f5e9] border border-[#2d5a27]/30 text-[#2d5a27] text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-[#2d5a27]" />
            <span>{t.products.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d3436] tracking-tight">
            {t.products.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            {t.products.subtitle}
          </p>

          {/* Pricing Highlight Pill */}
          <div className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-2xl bg-[#8b5e3c] text-white font-bold text-sm sm:text-base shadow-sm">
            <Banknote className="w-5 h-5 text-white" />
            <span>{t.products.feeBanner}</span>
          </div>
        </div>

        {/* Product & Milling Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {t.products.grades.map((product, idx) => (
            <div
              key={product.id}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                idx === 0
                  ? 'bg-[#2d5a27] text-white shadow-xl border border-[#23471e]'
                  : 'bg-white text-[#2d3436] shadow-sm border border-[#e2e2d5] hover:border-[#2d5a27]'
              }`}
            >
              {/* Popular Badge on 3X-Brown Crepe */}
              {idx === 0 && (
                <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-[#8b5e3c] text-white text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{lang === 'si' ? 'ප්‍රධාන නිෂ්පාදනය' : 'Flagship Product'}</span>
                </div>
              )}

              <div>
                {/* Header info */}
                <div className="mb-4">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md inline-block mb-2 ${
                      idx === 0
                        ? 'bg-white/15 text-[#f9f7f2] border border-white/20'
                        : 'bg-[#f1f3f1] text-[#2d5a27]'
                    }`}
                  >
                    {product.grade}
                  </span>
                  <h3
                    className={`text-xl sm:text-2xl font-bold ${
                      idx === 0 ? 'text-white' : 'text-[#2d3436]'
                    }`}
                  >
                    {product.name}
                  </h3>
                  <p
                    className={`text-xs font-semibold mt-1 ${
                      idx === 0 ? 'text-[#d7ccc8]' : 'text-[#2d5a27]'
                    }`}
                  >
                    {product.tagline}
                  </p>
                </div>

                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    idx === 0 ? 'text-[#e8f5e9]' : 'text-stone-600'
                  }`}
                >
                  {product.description}
                </p>

                {/* Pricing Block */}
                <div
                  className={`p-3.5 rounded-xl mb-6 flex items-center justify-between ${
                    idx === 0
                      ? 'bg-white/10 border border-white/15'
                      : 'bg-[#f9f7f2] border border-[#e2e2d5]'
                  }`}
                >
                  <div>
                    <span
                      className={`text-[11px] font-medium block ${
                        idx === 0 ? 'text-[#e8f5e9]' : 'text-stone-600'
                      }`}
                    >
                      {lang === 'si' ? 'මිල් ගාස්තුව' : 'Processing Fee'}
                    </span>
                    <span
                      className={`text-xl font-bold ${
                        idx === 0 ? 'text-white' : 'text-[#2d3436]'
                      }`}
                    >
                      Rs. 40/-
                    </span>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded ${
                      idx === 0 ? 'bg-white/20 text-[#f9f7f2]' : 'bg-[#e8f5e9] text-[#2d5a27]'
                    }`}
                  >
                    {lang === 'si' ? 'කිලෝ 1කට' : 'Per 1 Kg'}
                  </span>
                </div>

                {/* Technical Specifications */}
                <div className="mb-6">
                  <h4
                    className={`text-xs font-bold uppercase tracking-wider mb-3 ${
                      idx === 0 ? 'text-[#d7ccc8]' : 'text-stone-700'
                    }`}
                  >
                    {lang === 'si' ? 'විශේෂතා සහ ප්‍රමිතීන්:' : 'Key Specifications:'}
                  </h4>
                  <ul className="space-y-2">
                    {product.specifications.map((spec, sIdx) => (
                      <li
                        key={sIdx}
                        className={`flex items-start gap-2.5 text-xs ${
                          idx === 0 ? 'text-[#e8f5e9]' : 'text-stone-700'
                        }`}
                      >
                        <Check
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            idx === 0 ? 'text-[#d7ccc8]' : 'text-[#2d5a27]'
                          }`}
                        />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Industrial Applications */}
                <div>
                  <h4
                    className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                      idx === 0 ? 'text-[#d7ccc8]' : 'text-stone-700'
                    }`}
                  >
                    {lang === 'si' ? 'ප්‍රධාන භාවිතයන්:' : 'Typical Applications:'}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {product.applications.map((app, aIdx) => (
                      <span
                        key={aIdx}
                        className={`text-[11px] font-medium px-2 py-1 rounded-md ${
                          idx === 0
                            ? 'bg-black/20 text-[#f9f7f2] border border-white/10'
                            : 'bg-[#f1f3f1] text-[#2d3436] border border-[#e2e2d5]'
                        }`}
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-black/10">
                <a
                  href="#calculator"
                  className={`w-full py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                    idx === 0
                      ? 'bg-[#8b5e3c] hover:bg-[#764e32] text-white shadow-sm'
                      : 'bg-[#2d5a27] hover:bg-[#23471e] text-white'
                  }`}
                >
                  <span>{lang === 'si' ? 'මිල් ගාස්තු ගණනය කරන්න' : 'Calculate Batch Cost'}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Capacity Commitment Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e2d5] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#e8f5e9] text-[#2d5a27] flex items-center justify-center flex-shrink-0 font-bold">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2d3436]">
                {lang === 'si' ? 'දිනකට කිලෝග්‍රෑම් 2,000කට වැඩි අවම ධාරිතාවක්' : 'Guaranteed 2,000+ kg Daily Throughput Capacity'}
              </h3>
              <p className="text-sm text-stone-600 mt-1">
                {lang === 'si'
                  ? 'ඔබගේ රබර් වත්තේ දෛනික හෝ සතිපතා අස්වැන්න ප්‍රමාදයකින් තොරව කඩිනමින් අඹරා ගැනීමට අදම අප අමතන්න.'
                  : 'Whether you bring 50kg or 5,000kg, our continuous multi-roller line handles your harvest with zero waiting bottlenecks.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto flex-shrink-0">
            <a
              id="product-banner-call"
              href="tel:0770437751"
              className="flex-1 md:flex-initial text-center px-5 py-2.5 rounded-xl bg-[#2d5a27] hover:bg-[#23471e] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>0770437751</span>
            </a>
            <a
              id="product-banner-wa"
              href="https://wa.me/94770437751?text=Hello%20Shashini%20Rubber%20Mills,%20I%20have%20a%20rubber%20batch%20ready%20for%20milling."
              target="_blank"
              rel="noreferrer"
              className="flex-1 md:flex-initial text-center px-5 py-2.5 rounded-xl bg-[#8b5e3c] hover:bg-[#764e32] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>{lang === 'si' ? 'වට්ස්ඇප්' : 'WhatsApp'}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
