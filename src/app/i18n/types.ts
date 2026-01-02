import type { LucideIcon } from 'lucide-react';

export type Locale = 'pt' | 'en';

export interface AlternateLink {
  href: string;
  lang: string;
}

export interface MetaContent {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface LanguageSwitch {
  label: string;
  href: string;
  ariaLabel: string;
  flag: 'br' | 'us';
}

export interface HeaderContent {
  navLinks: NavLink[];
  ctaHref: string;
  ctaLabel: string;
  languageSwitch: LanguageSwitch;
  menuLabel: string;
}

export interface HeroFeature {
  icon: LucideIcon;
  label: string;
}

export interface HeroContent {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  primaryCta: NavLink;
  secondaryCta: NavLink;
  features: HeroFeature[];
}

export interface SolutionItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface SolutionsContent {
  id: string;
  badge: string;
  heading: string;
  subheading: string;
  items: SolutionItem[];
}

export interface ProcessStep {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
}

export interface ProcessContent {
  id: string;
  badge: string;
  heading: string;
  subheading: string;
  steps: ProcessStep[];
}

export interface CTAContent {
  id: string;
  badge: string;
  heading: string;
  description: string;
  email: string;
  emailLabel: string;
  responseTime: string;
}

export interface FooterContent {
  tagline: string;
  location: string;
  contactHeading: string;
  rights: string;
}

export interface HomeTranslations {
  locale: Locale;
  lang: string;
  meta: MetaContent;
  alternates: AlternateLink[];
  header: HeaderContent;
  hero: HeroContent;
  solutions: SolutionsContent;
  process: ProcessContent;
  cta: CTAContent;
  footer: FooterContent;
}
