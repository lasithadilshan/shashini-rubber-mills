import React, { useState } from 'react';
import { Language, InquiryFormData } from '../types';
import { translations } from '../translations';
import { MapPin, Phone, Clock, MessageSquare, Send, CheckCircle2, ShieldCheck, ExternalLink, Calendar, Scale } from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const t = translations[lang];

  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    phone: '',
    rubberQuantityKg: '',
    rubberType: '3X-Brown Crepe',
    preferredDate: '',
    location: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = lang === 'si'
      ? `*ශෂීනි රබර් මිල්ස් - නව ඇණවුම් විමසීම*\n\n` +
        `👤 නම / වත්ත: ${formData.name || 'සඳහන් කර නැත'}\n` +
        `📞 දුරකථන: ${formData.phone || 'සඳහන් කර නැත'}\n` +
        `⚖️ බර (kg): ${formData.rubberQuantityKg || 'නොදනී'} kg\n` +
        `🏷️ රබර් වර්ගය: ${formData.rubberType}\n` +
        `📅 අපේක්ෂිත දිනය: ${formData.preferredDate || 'කඩිනමින්'}\n` +
        `📝 සටහන්: ${formData.notes || 'කිසිවක් නැත'}\n\n` +
        `(මිල් ගාස්තුව කිලෝවකට රු. 40/- බැගින්)`
      : `*Shashini Rubber Mills - Milling Batch Inquiry*\n\n` +
        `👤 Name / Estate: ${formData.name || 'Not provided'}\n` +
        `📞 Phone: ${formData.phone || 'Not provided'}\n` +
        `⚖️ Estimated Weight: ${formData.rubberQuantityKg || 'Unknown'} kg\n` +
        `🏷️ Rubber Type: ${formData.rubberType}\n` +
        `📅 Preferred Date: ${formData.preferredDate || 'ASAP'}\n` +
        `📝 Notes: ${formData.notes || 'None'}\n\n` +
        `(At standard Rs. 40/- per kg milling rate)`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/94770437751?text=${encoded}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-[#f9f7f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e8f5e9] border border-[#2d5a27]/30 text-[#2d5a27] text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#2d5a27]" />
            <span>{t.contact.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d3436] tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Promotional Call-to-Action Banner from Flyer */}
        <div className="mb-12 rounded-2xl bg-[#2d5a27] p-6 sm:p-8 text-white border border-[#23471e] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#8b5e3c] text-white flex items-center justify-center flex-shrink-0 font-bold shadow-sm">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#d7ccc8] uppercase tracking-wider block">
                {lang === 'si' ? 'අදම අමතන්න' : 'Direct Call-to-Action'}
              </span>
              <p className="text-lg sm:text-2xl font-bold text-white leading-snug">
                {t.contact.sinhalaBanner}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              id="btn-banner-call-hotline"
              href="tel:0770437751"
              className="flex-1 md:flex-initial px-6 py-3.5 rounded-xl bg-[#8b5e3c] hover:bg-[#764e32] text-white font-bold text-base shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5 text-white" />
              <span>0770437751</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Details Cards & Google Maps Location */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e2e2d5]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#e8f5e9] text-[#2d5a27] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-[#2d3436]">
                    {t.contact.addressTitle}
                  </h3>
                  <p className="text-sm font-semibold text-[#2d5a27] mt-1">
                    {t.contact.addressLine1}
                  </p>
                  <p className="text-sm font-medium text-stone-600">
                    {t.contact.addressLine2}
                  </p>
                  <a
                    id="contact-map-directions-btn"
                    href="https://www.google.com/maps/search/?api=1&query=Shantha+Mariya+Mawatha+Niripola+Kaluaggala+Hanwella"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2d5a27] hover:underline mt-3 pt-3 border-t border-[#e2e2d5]"
                  >
                    <span>{t.contact.directionsBtn}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Hotline Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e2e2d5]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#f1f3f1] text-[#8b5e3c] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-[#2d3436]">
                    {t.contact.phoneTitle}
                  </h3>
                  <a
                    id="contact-card-phone-link"
                    href="tel:0770437751"
                    className="text-2xl font-bold text-[#2d5a27] hover:text-[#23471e] transition-colors block mt-1"
                  >
                    {t.contact.phoneVal}
                  </a>
                  <p className="text-xs text-stone-500 mt-1">
                    {t.contact.phoneSub}
                  </p>

                  <div className="flex items-center gap-2 mt-4">
                    <a
                      id="contact-card-call-btn"
                      href="tel:0770437751"
                      className="px-4 py-2 rounded-xl bg-[#2d5a27] hover:bg-[#23471e] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-white" />
                      <span>{t.contact.callBtn}</span>
                    </a>
                    <a
                      id="contact-card-wa-btn"
                      href="https://wa.me/94770437751"
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl bg-[#e8f5e9] hover:bg-[#d7ccc8] text-[#2d5a27] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#2d5a27]" />
                      <span>{t.contact.whatsappBtn}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e2e2d5]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#f9f7f2] text-stone-700 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#2d5a27]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#2d3436]">
                    {t.contact.hoursTitle}
                  </h3>
                  <p className="text-sm font-bold text-[#2d3436] mt-1">
                    {t.contact.hoursVal}
                  </p>
                  <p className="text-xs text-stone-500 mt-1">
                    {t.contact.hoursSub}
                  </p>
                </div>
              </div>
            </div>

            {/* Location Map Preview */}
            <div className="rounded-2xl overflow-hidden border border-[#e2e2d5] bg-stone-200 h-48 relative shadow-sm">
              <iframe
                title="Shashini Rubber Mills Location Map"
                src="https://maps.google.com/maps?q=Kaluaggala+Hanwella+Sri+Lanka&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter contrast-105"
                loading="lazy"
              />
              <div className="absolute top-2 left-2 px-3 py-1 bg-[#2d5a27] text-white rounded-lg text-xs font-bold border border-[#23471e]">
                📍 Hanwella / Kaluaggala Mill
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Batch Intake Booking Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-[#e2e2d5]">
            
            <div className="mb-6 pb-4 border-b border-[#e2e2d5]">
              <h3 className="text-2xl font-bold text-[#2d3436]">
                {t.contact.formTitle}
              </h3>
              <p className="text-sm text-stone-600 mt-1">
                {t.contact.formSubtitle}
              </p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-[#e8f5e9] border border-[#2d5a27]/30 text-[#2d5a27] text-sm flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2d5a27] flex-shrink-0" />
                <span>{t.contact.successMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="form-name" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    {t.contact.fieldName} *
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={lang === 'si' ? 'උදා: කේ. පෙරේරා / සිරිමලී වත්ත' : 'e.g. K. Perera / Green Valley Estate'}
                    className="w-full px-4 py-3 rounded-xl border border-[#e2e2d5] focus:border-[#2d5a27] focus:ring-2 focus:ring-[#e8f5e9] text-sm font-medium outline-none transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="form-phone" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    {t.contact.fieldPhone} *
                  </label>
                  <input
                    id="form-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="077xxxxxxx"
                    className="w-full px-4 py-3 rounded-xl border border-[#e2e2d5] focus:border-[#2d5a27] focus:ring-2 focus:ring-[#e8f5e9] text-sm font-medium outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Quantity */}
                <div>
                  <label htmlFor="form-qty" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    {t.contact.fieldQty}
                  </label>
                  <div className="relative">
                    <input
                      id="form-qty"
                      type="number"
                      value={formData.rubberQuantityKg}
                      onChange={(e) => setFormData({ ...formData, rubberQuantityKg: e.target.value })}
                      placeholder="e.g. 500, 1500, 3000"
                      className="w-full pl-4 pr-12 py-3 rounded-xl border border-[#e2e2d5] focus:border-[#2d5a27] focus:ring-2 focus:ring-[#e8f5e9] text-sm font-medium outline-none transition-all"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-stone-400">
                      kg
                    </span>
                  </div>
                </div>

                {/* Rubber Type */}
                <div>
                  <label htmlFor="form-type" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    {t.contact.fieldType}
                  </label>
                  <select
                    id="form-type"
                    value={formData.rubberType}
                    onChange={(e) => setFormData({ ...formData, rubberType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#e2e2d5] focus:border-[#2d5a27] focus:ring-2 focus:ring-[#e8f5e9] text-sm font-medium outline-none transition-all bg-white"
                  >
                    <option value="3X-Brown Crepe">{lang === 'si' ? '3X-දුඹුරු ක්‍රේප් (3X Brown Crepe)' : '3X-Brown Crepe'}</option>
                    <option value="Tree Scrap / Cup Lump">{lang === 'si' ? 'ස්ක්‍රැප් සහ කප්ලම්ප් (Scrap & Cup Lump)' : 'Tree Scrap / Cup Lump'}</option>
                    <option value="Latex Coagulum">{lang === 'si' ? 'කිරි රබර් (Estate Latex Coagulum)' : 'Latex Coagulum'}</option>
                    <option value="Large Estate Contract">{lang === 'si' ? 'මහා පරිමාණ වතු ගිවිසුම (Bulk Contract)' : 'Large Estate Contract'}</option>
                  </select>
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label htmlFor="form-date" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  {t.contact.fieldDate}
                </label>
                <input
                  id="form-date"
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#e2e2d5] focus:border-[#2d5a27] focus:ring-2 focus:ring-[#e8f5e9] text-sm font-medium outline-none transition-all"
                />
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="form-notes" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  {t.contact.fieldNotes}
                </label>
                <textarea
                  id="form-notes"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={lang === 'si' ? 'ප්‍රවාහන අවශ්‍යතා හෝ විශේෂ ඉල්ලීම් මෙහි සඳහන් කරන්න...' : 'Any special requests, transport assistance needed, etc...'}
                  className="w-full px-4 py-3 rounded-xl border border-[#e2e2d5] focus:border-[#2d5a27] focus:ring-2 focus:ring-[#e8f5e9] text-sm font-medium outline-none transition-all resize-none"
                />
              </div>

              {/* Fee Notice */}
              <div className="p-3.5 rounded-xl bg-[#f9f7f2] border border-[#e2e2d5] flex items-center justify-between text-xs text-stone-700">
                <span className="font-semibold">{lang === 'si' ? 'ස්ථාවර මිල් ගාස්තුව:' : 'Standard Milling Rate:'}</span>
                <span className="font-bold text-[#2d5a27] text-sm">Rs. 40.00 / kg</span>
              </div>

              {/* Submit Button */}
              <button
                id="btn-submit-inquiry"
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-[#2d5a27] hover:bg-[#23471e] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all hover:scale-[1.01] active:scale-95 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                <span>{t.contact.submitBtn}</span>
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
