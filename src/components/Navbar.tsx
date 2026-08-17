import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Logo } from './Logo';
import { Phone, Globe, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenFlyerModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onLanguageChange, onOpenFlyerModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.products, href: '#products' },
    { label: t.nav.calculator, href: '#calculator' },
    { label: t.nav.process, href: '#process' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <>
      {/* Top Utility Bar */}
      <div id="top-utility-bar" className="bg-[#2d5a27] text-[#e8f5e9] text-xs py-2 px-4 sm:px-8 border-b border-[#23471e] hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#d7ccc8] animate-pulse" />
              <span className="text-[#f9f7f2]">{t.nav.openHours}</span>
            </span>
            <span className="text-[#e8f5e9]/40">•</span>
            <span className="text-[#e8f5e9]/90">{lang === 'si' ? 'ශාන්ත මරියා මාවත, නිරිපොල, කළුඅග්ගල, හංවැල්ල' : 'Shantha Mariya Mawatha, Niripola, Kaluaggala, Hanwella'}</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              id="btn-view-flyer-top"
              onClick={onOpenFlyerModal}
              className="text-[#f9f7f2] hover:text-[#d7ccc8] transition-colors flex items-center gap-1 font-medium underline underline-offset-2 cursor-pointer"
            >
              <span>{lang === 'si' ? 'දැන්වීම නරඹන්න (Flyer)' : 'Official Notice Flyer'}</span>
              <ArrowUpRight className="w-3 h-3 text-[#d7ccc8]" />
            </button>
            <span className="text-[#e8f5e9]/40">•</span>
            <a
              id="top-hotline-link"
              href="tel:0770437751"
              className="font-bold text-[#f9f7f2] hover:text-[#d7ccc8] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-[#d7ccc8]" />
              <span>0770437751</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        id="main-navbar"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-[#e2e2d5]'
            : 'bg-white py-4 border-b border-[#e2e2d5]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" id="nav-brand-logo" className="transition-transform hover:scale-[1.01]">
            <Logo lang={lang} variant="light" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                id={`nav-link-${link.href.replace('#', '')}`}
                href={link.href}
                className="text-sm font-medium text-[#2d3436] hover:text-[#2d5a27] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2d5a27] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Language Toggle + Call Button */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <div
              id="language-switcher-desktop"
              className="flex items-center p-1 bg-[#f1f3f1] rounded-full border border-[#e2e2d5] text-xs font-medium"
            >
              <button
                id="btn-lang-en"
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                  lang === 'en'
                    ? 'bg-white text-[#2d3436] font-bold shadow-xs'
                    : 'text-gray-500 hover:text-[#2d3436]'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>English</span>
              </button>
              <button
                id="btn-lang-si"
                type="button"
                onClick={() => onLanguageChange('si')}
                className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                  lang === 'si'
                    ? 'bg-white text-[#2d3436] font-bold shadow-xs'
                    : 'text-gray-500 hover:text-[#2d3436]'
                }`}
              >
                <span>සිංහල</span>
              </button>
            </div>

            {/* Direct Phone Call Button */}
            <a
              id="btn-nav-call-direct"
              href="tel:0770437751"
              className="inline-flex items-center gap-2 bg-[#8b5e3c] hover:bg-[#764e32] text-white font-bold text-sm px-4 py-2.5 rounded-xl shadow-xs transition-all hover:shadow-md active:scale-95 uppercase tracking-wider text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#f9f7f2]" />
              <span>0770437751</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Compact Mobile Language Switcher */}
            <button
              id="btn-lang-toggle-mobile"
              type="button"
              onClick={() => onLanguageChange(lang === 'en' ? 'si' : 'en')}
              className="px-2.5 py-1.5 rounded-lg bg-[#f1f3f1] border border-[#e2e2d5] text-xs font-bold text-[#2d5a27] flex items-center gap-1"
              aria-label="Switch Language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'සිංහල' : 'ENG'}</span>
            </button>

            <button
              id="btn-mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#2d3436] hover:bg-[#f1f3f1] focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div id="mobile-menu-drawer" className="lg:hidden border-t border-[#e2e2d5] bg-white px-4 pt-3 pb-6 shadow-xl">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  id={`mobile-nav-${link.href.replace('#', '')}`}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-semibold text-[#2d3436] hover:bg-[#f1f3f1] hover:text-[#2d5a27] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-3 border-t border-[#e2e2d5] flex flex-col gap-2">
                <button
                  id="mobile-btn-view-flyer"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenFlyerModal();
                  }}
                  className="w-full text-center py-2.5 px-4 rounded-xl text-sm font-bold bg-[#f1f3f1] text-[#2d5a27] border border-[#e2e2d5]"
                >
                  {lang === 'si' ? 'නිල ප්‍රචාරක දැන්වීම නරඹන්න (Flyer)' : 'View Official Promotional Flyer'}
                </button>

                <a
                  id="mobile-btn-call"
                  href="tel:0770437751"
                  className="w-full text-center py-3 px-4 rounded-xl font-bold text-white bg-[#8b5e3c] hover:bg-[#764e32] flex items-center justify-center gap-2 shadow-sm uppercase tracking-wider text-sm"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>0770437751 - {lang === 'si' ? 'ඇමතුමක් ලබාගන්න' : 'Call Factory'}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
