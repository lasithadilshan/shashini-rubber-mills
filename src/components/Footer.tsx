import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Logo } from './Logo';
import { Phone, MapPin, Clock, MessageSquare, ChevronRight, ShieldCheck } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onOpenFlyerModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenFlyerModal }) => {
  const t = translations[lang];

  return (
    <footer id="main-footer" className="bg-[#2d5a27] text-[#e8f5e9] border-t border-[#23471e]">
      
      {/* Top Banner inside Footer */}
      <div className="border-b border-white/10 bg-black/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo lang={lang} variant="dark" />

          <div className="flex flex-wrap items-center gap-3">
            <a
              id="footer-call-btn"
              href="tel:0770437751"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#8b5e3c] hover:bg-[#764e32] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>0770437751</span>
            </a>

            <a
              id="footer-wa-btn"
              href="https://wa.me/94770437751"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#e8f5e9]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: About */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base">
              {lang === 'si' ? 'ශෂීනි රබර් මිල්ස්' : 'Shashini Rubber Mills'}
            </h4>
            <p className="text-xs sm:text-sm text-[#e8f5e9]/90 leading-relaxed">
              {t.footer.aboutText}
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#f9f7f2] text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d7ccc8]" />
              <span>{lang === 'si' ? 'විශ්වාසනීය සේවාව' : 'Trustworthy Certified'}</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#d7ccc8]" />
                  <span>{t.nav.home}</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#d7ccc8]" />
                  <span>{t.nav.about}</span>
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#d7ccc8]" />
                  <span>{t.nav.products}</span>
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#d7ccc8]" />
                  <span>{t.nav.calculator}</span>
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#d7ccc8]" />
                  <span>{t.nav.process}</span>
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenFlyerModal}
                  className="hover:text-white transition-colors flex items-center gap-1 text-left cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-[#d7ccc8]" />
                  <span className="text-[#f9f7f2] font-semibold">{lang === 'si' ? 'නිල දැන්වීම (Flyer)' : 'Official Flyer'}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services & Rates */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">
              {t.footer.services}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#e8f5e9]/90">
              <li className="font-semibold text-white">
                • {lang === 'si' ? '3X-දුඹුරු ක්‍රේප් රබර් නිෂ්පාදනය' : '3X-Brown Crepe Rubber'}
              </li>
              <li>
                • {lang === 'si' ? 'ස්ක්‍රැප් සහ කප්ලම්ප් ඇඹරීම' : 'Scrap & Cup Lump Maceration'}
              </li>
              <li>
                • {lang === 'si' ? 'වතු ගිවිසුම්ගත නිෂ්පාදනය' : 'Estate Plantation Contracts'}
              </li>
              <li className="pt-2 text-[#d7ccc8] font-bold">
                {lang === 'si' ? 'මිල් ගාස්තුව: කිලෝවකට රු. 40/-' : 'Milling Fee: Rs. 40/- per kg'}
              </li>
              <li className="text-[#e8f5e9] font-semibold">
                {lang === 'si' ? 'අවම දෛනික ධාරිතාව: කිලෝ 2000' : 'Daily Min Capacity: 2000 kg'}
              </li>
            </ul>
          </div>

          {/* Col 4: Contact info */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#e8f5e9]/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d7ccc8] flex-shrink-0 mt-0.5" />
                <span>
                  {lang === 'si'
                    ? 'ශාන්ත මරියා මාවත, නිරිපොල, කළුඅග්ගල, හංවැල්ල.'
                    : 'Shantha Mariya Mawatha, Niripola, Kaluaggala, Hanwella, Sri Lanka.'}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d7ccc8] flex-shrink-0" />
                <a href="tel:0770437751" className="text-white font-bold hover:underline">
                  0770437751
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#d7ccc8] flex-shrink-0 mt-0.5" />
                <span>{t.nav.openHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#e8f5e9]/70">
          <p>© {new Date().getFullYear()} {t.footer.copyright}</p>
          <div className="flex items-center gap-4">
            <span>Hanwella, Sri Lanka</span>
            <span>•</span>
            <a href="tel:0770437751" className="text-[#f9f7f2] hover:underline">
              Hotline: 0770437751
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
