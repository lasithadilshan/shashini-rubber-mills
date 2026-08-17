export type Language = 'en' | 'si';

export interface ServiceFeature {
  id: string;
  icon: string;
  label: {
    en: string;
    si: string;
  };
  value: {
    en: string;
    si: string;
  };
  detail?: {
    en: string;
    si: string;
  };
}

export interface ProductGrade {
  id: string;
  name: {
    en: string;
    si: string;
  };
  grade: string;
  tagline: {
    en: string;
    si: string;
  };
  description: {
    en: string;
    si: string;
  };
  specifications: {
    en: string[];
    si: string[];
  };
  applications: {
    en: string[];
    si: string[];
  };
  pricingText: {
    en: string;
    si: string;
  };
}

export interface ValuePillar {
  id: string;
  title: {
    en: string;
    si: string;
  };
  description: {
    en: string;
    si: string;
  };
  icon: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: {
    en: string;
    si: string;
  };
  description: {
    en: string;
    si: string;
  };
  highlight: {
    en: string;
    si: string;
  };
}

export interface InquiryFormData {
  name: string;
  phone: string;
  rubberQuantityKg: string;
  rubberType: string;
  preferredDate: string;
  location: string;
  notes: string;
}
