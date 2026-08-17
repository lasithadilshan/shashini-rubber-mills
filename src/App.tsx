import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickSpecsBar } from './components/QuickSpecsBar';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { CalculatorSection } from './components/CalculatorSection';
import { ProcessSection } from './components/ProcessSection';
import { ContactSection } from './components/ContactSection';
import { FlyerModal } from './components/FlyerModal';
import { Footer } from './components/Footer';
import { Phone, MessageSquare, ArrowUp, Globe } from 'lucide-react';

export default function App() {
  // Default to Sinhala as the primary authentic local audience language, with seamless instant English switch
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('shashini_lang');
    return (saved === 'en' || saved === 'si') ? saved : 'si';
  });

  const [showFlyerModal, setShowFlyerModal] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    localStorage.setItem('shashini_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f9f7f2] text-[#2d3436] flex flex-col antialiased selection:bg-[#2d5a27] selection:text-white">
      
      {/* Navigation Header */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        onOpenFlyerModal={() => setShowFlyerModal(true)}
      />

      {/* Main Website Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with Value Proposition and Visual Graphic */}
        <Hero
          lang={lang}
          onOpenFlyerModal={() => setShowFlyerModal(true)}
        />

        {/* 2. Key Specs & 5 Badges Bar */}
        <QuickSpecsBar lang={lang} />

        {/* 3. About Section (Reliability, Efficiency, Quality, Trustworthy Service) */}
        <AboutSection lang={lang} />

        {/* 4. Products & Crepe Rubber Milling Services (Rs. 40/kg, 2000kg Daily Capacity) */}
        <ProductsSection lang={lang} />

        {/* 5. Interactive Milling Fee & Yield Calculator */}
        <CalculatorSection lang={lang} />

        {/* 6. 5-Stage Factory Workflow & Standards */}
        <ProcessSection lang={lang} />

        {/* 7. Contact Section (Hanwella Address, Hotline 0770437751, WhatsApp & Map) */}
        <ContactSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenFlyerModal={() => setShowFlyerModal(true)}
      />

      {/* Floating Action Speed-Dial for Mobile/Desktop */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Language Floating Pill */}
        <button
          id="floating-lang-toggle"
          type="button"
          onClick={() => setLang(lang === 'en' ? 'si' : 'en')}
          className="pointer-events-auto px-3.5 py-2 rounded-full bg-[#2d5a27] hover:bg-[#23471e] text-white text-xs font-bold uppercase tracking-wider shadow-lg border border-[#23471e] flex items-center gap-1.5 backdrop-blur-xs transition-all hover:scale-105"
          aria-label="Switch Language"
        >
          <Globe className="w-3.5 h-3.5 text-[#d7ccc8]" />
          <span>{lang === 'en' ? 'සිංහල' : 'English'}</span>
        </button>

        {/* Floating WhatsApp Button */}
        <a
          id="floating-whatsapp-btn"
          href="https://wa.me/94770437751?text=Hello%20Shashini%20Rubber%20Mills,%20I%20would%20like%20to%20inquire%20about%20crepe%20rubber%20milling%20service."
          target="_blank"
          rel="noreferrer"
          className="pointer-events-auto w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#2d5a27] hover:bg-[#23471e] text-white flex items-center justify-center shadow-lg border-2 border-white transition-all hover:scale-110 active:scale-95 group"
          title="WhatsApp Shashini Rubber Mills"
        >
          <MessageSquare className="w-6 h-6 fill-white" />
        </a>

        {/* Floating Direct Call Button */}
        <a
          id="floating-phone-btn"
          href="tel:0770437751"
          className="pointer-events-auto w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#8b5e3c] hover:bg-[#764e32] text-white flex items-center justify-center shadow-lg border-2 border-white transition-all hover:scale-110 active:scale-95"
          title="Call Hotline: 0770437751"
        >
          <Phone className="w-6 h-6 text-white" />
        </a>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            id="floating-scroll-top-btn"
            type="button"
            onClick={scrollToTop}
            className="pointer-events-auto w-10 h-10 rounded-full bg-[#2d3436] hover:bg-[#1e2324] text-white flex items-center justify-center shadow-md backdrop-blur-xs transition-all hover:scale-105"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Official Notice Flyer Modal */}
      <FlyerModal
        lang={lang}
        isOpen={showFlyerModal}
        onClose={() => setShowFlyerModal(false)}
      />

    </div>
  );
}
