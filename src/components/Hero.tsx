import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Phone, MessageSquare, Calculator, Star, ShieldCheck, MapPin, Wrench, Banknote, TrendingUp, ArrowRight, Eye } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenFlyerModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenFlyerModal }) => {
  const t = translations[lang];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#2d5a27] text-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#23471e]"
    >
      {/* Background Natural Tones Geometric Patterns */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#8b5e3c] skew-x-12 transform translate-x-20"></div>
      </div>

      {/* Subtle organic light glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Top Badge: Shashini Rubber Mills Brand Pill with Natural Tones */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-[#8b5e3c] animate-pulse" />
              <span className="text-xs sm:text-sm font-bold tracking-wide text-[#f9f7f2]">
                {lang === 'si' ? 'ශෂීනි රබර් මිල්ස් • හංවැල්ල' : 'Shashini Rubber Mills • Hanwella'}
              </span>
              <span className="text-white/40 hidden sm:inline">|</span>
              <span className="text-xs text-[#e8f5e9] hidden sm:inline">
                {t.hero.badge}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <div className="text-[#e8f5e9] font-semibold text-base sm:text-lg flex items-center gap-2">
                <span>{lang === 'si' ? 'උසස් තත්ත්වයේ' : 'High-Quality & High-Yield'}</span>
                <div className="h-0.5 w-12 bg-[#8b5e3c] rounded-full" />
              </div>
              <h1
                id="hero-main-title"
                className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
              >
                {lang === 'si' ? (
                  <>
                    <span className="text-[#f9f7f2]">ක්‍රේප් රබර්</span>
                    <br />
                    නිෂ්පාදන සේවාව
                  </>
                ) : (
                  <>
                    <span className="text-[#f9f7f2]">Premium 3X-Brown</span>
                    <br />
                    Crepe Rubber Production
                  </>
                )}
              </h1>
            </div>

            {/* Core Values with 3 Stars */}
            <div className="flex flex-wrap items-center gap-3 py-2 px-4 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm">
              <div className="flex items-center gap-1 text-[#d7ccc8]">
                <Star className="w-4 h-4 fill-[#d7ccc8]" />
                <Star className="w-4 h-4 fill-[#d7ccc8]" />
                <Star className="w-4 h-4 fill-[#d7ccc8]" />
              </div>
              <span className="text-sm sm:text-base font-bold text-[#e8f5e9]">
                {t.hero.coreValuesSummary}
              </span>
            </div>

            {/* Explanatory Description */}
            <p className="text-base sm:text-lg text-[#e8f5e9] max-w-xl leading-relaxed font-normal">
              {t.hero.subheading}
            </p>

            {/* Quick Metrics Bar in Hero */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl pt-2">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl flex items-center gap-3.5">
                <div className="p-2.5 bg-[#8b5e3c] rounded-lg text-white flex-shrink-0">
                  <Banknote className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest">
                    {lang === 'si' ? 'මිල් ගාස්තුව' : 'Factory Price'}
                  </p>
                  <p className="text-white font-bold text-xl">Rs. 40 / KG</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl flex items-center gap-3.5">
                <div className="p-2.5 bg-[#2d5a27] border border-white/30 rounded-lg text-white flex-shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest">
                    {lang === 'si' ? 'දෛනික ධාරිතාව' : 'Daily Capacity'}
                  </p>
                  <p className="text-white font-bold text-xl">2000+ KG</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl col-span-2 sm:col-span-1 flex items-center gap-3.5">
                <div className="p-2.5 bg-[#5d4037] rounded-lg text-white flex-shrink-0">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest">
                    {lang === 'si' ? 'නිෂ්පාදනය' : 'Main Grade'}
                  </p>
                  <p className="text-white font-bold text-base">3X-Brown</p>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full">
              <a
                id="hero-cta-call"
                href="tel:0770437751"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#8b5e3c] hover:bg-[#764e32] text-white font-bold text-sm uppercase tracking-wider shadow-lg transition-all hover:scale-[1.02] active:scale-95"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>0770437751</span>
              </a>

              <a
                id="hero-cta-whatsapp"
                href="https://wa.me/94770437751?text=Hello%20Shashini%20Rubber%20Mills,%20I%20would%20like%20to%20inquire%20about%20crepe%20rubber%20milling%20services."
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm border border-white/30 backdrop-blur-sm transition-all hover:scale-[1.02] active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-[#e8f5e9]" />
                <span>{t.hero.ctaWhatsApp}</span>
              </a>

              <a
                id="hero-cta-calc"
                href="#calculator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-black/20 hover:bg-black/30 text-white font-medium text-sm border border-white/20 transition-colors"
              >
                <Calculator className="w-4 h-4 text-[#d7ccc8]" />
                <span>{t.hero.ctaCalculate}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#e8f5e9]" />
              </a>
            </div>

          </div>

          {/* Right Column: Visual Graphic Card Recreating the Flyer Layout */}
          <div className="lg:col-span-5 relative">
            
            {/* Outer stylized card matching Natural Tones */}
            <div className="relative rounded-3xl bg-white/10 backdrop-blur-md p-2 shadow-2xl border border-white/20 overflow-hidden">
              
              {/* Inner Card Container */}
              <div className="rounded-[20px] bg-[#23471e] overflow-hidden text-[#f9f7f2] flex flex-col border border-white/10">
                
                {/* Visual Imagery Banner inside Card */}
                <div className="relative h-56 sm:h-64 bg-[#1a3316] overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#23471e] via-transparent to-black/30 z-10" />
                  
                  {/* Layered images / graphic representations */}
                  <div className="grid grid-cols-2 h-full">
                    {/* Left pane: Drying Lofts */}
                    <div className="relative h-full overflow-hidden border-r border-white/20">
                      <img
                        src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=600&q=80"
                        alt="Crepe Rubber Drying Process"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-2 left-2 z-20 px-2.5 py-1 rounded bg-[#2d5a27]/80 backdrop-blur-xs text-[10px] font-bold text-white border border-white/20">
                        {lang === 'si' ? 'වියලන මැදිරිය' : 'Drying Lofts'}
                      </div>
                    </div>

                    {/* Right pane: Brown Crepe Rubber Sheets */}
                    <div className="relative h-full overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
                        alt="3X-Brown Crepe Rubber Stacks"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-2 right-2 z-20 px-2.5 py-1 rounded bg-[#8b5e3c]/85 backdrop-blur-xs text-[10px] font-bold text-white border border-white/20">
                        {lang === 'si' ? '3X ක්‍රේප් තොග' : '3X Rubber Stacks'}
                      </div>
                    </div>
                  </div>

                  {/* Circular Magnifier Callout of Lace Texture */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-[#8b5e3c] shadow-xl overflow-hidden bg-[#5d4037] group-hover:scale-110 transition-transform duration-300">
                    <img
                      src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80"
                      alt="Crepe Rubber Lace Texture Detail"
                      className="w-full h-full object-cover brightness-80 contrast-125 scale-125"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-[#8b5e3c]/20 mix-blend-overlay" />
                    <div className="absolute inset-0 flex items-center justify-center text-center p-1 bg-black/40">
                      <span className="text-[10px] font-extrabold text-[#f9f7f2] uppercase tracking-tight">
                        3X Texture
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Specification List */}
                <div className="p-4 sm:p-5 space-y-2.5 bg-[#23471e]">
                  
                  {/* Badge 1: Service */}
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/10 border border-white/15 shadow-xs">
                    <div className="w-10 h-10 rounded-xl bg-[#8b5e3c] text-white flex items-center justify-center flex-shrink-0 font-bold shadow-xs">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-semibold text-[#e8f5e9]">
                        {lang === 'si' ? 'සේවාව:' : 'Service:'}
                      </div>
                      <div className="text-sm sm:text-base font-bold text-white truncate">
                        {lang === 'si' ? 'ක්‍රේප් රබර් නිෂ්පාදනය' : 'Crepe Rubber Production'}
                      </div>
                    </div>
                  </div>

                  {/* Badge 2: Milling Fee */}
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/10 border border-white/20 shadow-xs">
                    <div className="w-10 h-10 rounded-xl bg-[#2d5a27] border border-white/30 text-white flex items-center justify-center flex-shrink-0 font-bold text-xs shadow-xs">
                      Rs.
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-semibold text-[#d7ccc8]">
                        {lang === 'si' ? 'මිල් ගාස්තුව:' : 'Milling Fee:'}
                      </div>
                      <div className="text-base sm:text-lg font-black text-white truncate">
                        {lang === 'si' ? 'කිලෝග්‍රෑම් 1කට රු. 40/-' : 'Rs. 40/- per 1 kg'}
                      </div>
                    </div>
                  </div>

                  {/* Badge 3: Daily Capacity */}
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/10 border border-white/15 shadow-xs">
                    <div className="w-10 h-10 rounded-xl bg-[#8b5e3c] text-white flex items-center justify-center flex-shrink-0 font-bold shadow-xs">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-semibold text-[#e8f5e9]">
                        {lang === 'si' ? 'අවම දෛනික නිෂ්පාදන ධාරිතාව:' : 'Min Daily Capacity:'}
                      </div>
                      <div className="text-sm sm:text-base font-bold text-white truncate">
                        {lang === 'si' ? 'කිලෝග්‍රෑම් 2000' : '2000 Kilograms'}
                      </div>
                    </div>
                  </div>

                  {/* Badge 4: Location Address */}
                  <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/10 border border-white/15 shadow-xs">
                    <div className="w-10 h-10 rounded-xl bg-[#2d5a27] border border-white/30 text-white flex items-center justify-center flex-shrink-0 font-bold shadow-xs mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-semibold text-[#e8f5e9]">
                        {lang === 'si' ? 'ලිපිනය:' : 'Location Address:'}
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-[#f9f7f2] leading-snug">
                        {lang === 'si' ? 'ශාන්ත මරියා මාවත, නිරිපොල, කළුඅග්ගල, හංවැල්ල.' : 'Shantha Mariya Mawatha, Niripola, Kaluaggala, Hanwella.'}
                      </div>
                    </div>
                  </div>

                  {/* Badge 5: Contact Hotline */}
                  <a
                    id="card-hotline-tap"
                    href="tel:0770437751"
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-[#8b5e3c] hover:bg-[#764e32] border border-white/20 shadow-md transition-all group/btn"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center flex-shrink-0 font-bold shadow-xs group-hover/btn:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-semibold text-[#f9f7f2]">
                        {lang === 'si' ? 'අමතන්න (Hotline):' : 'Call Manager Directly:'}
                      </div>
                      <div className="text-base sm:text-lg font-black text-white">
                        0770437751
                      </div>
                    </div>
                  </a>

                </div>

                {/* Bottom Banner Ribbon */}
                <div className="p-3 bg-[#8b5e3c] text-white flex items-center justify-between gap-2 border-t border-white/20">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-white flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-white">
                      {lang === 'si' ? 'විශ්වාසනීය සේවාව සහතිකයි' : 'Trustworthy Certified Service'}
                    </span>
                  </div>

                  <button
                    id="btn-inspect-flyer"
                    onClick={onOpenFlyerModal}
                    className="px-2.5 py-1 rounded-lg bg-white/20 hover:bg-white/30 text-white text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{lang === 'si' ? 'දැන්වීම' : 'View Flyer'}</span>
                  </button>
                </div>

              </div>
            </div>

            {/* Decorative Natural Leaf Seal in Corner */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-[#8b5e3c] p-1 shadow-lg border-2 border-white hidden sm:flex items-center justify-center text-center">
              <span className="text-[9px] font-black text-white uppercase leading-none">
                {lang === 'si' ? 'විශ්වාසනීය සේවාව' : 'Trusted Quality'}
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
