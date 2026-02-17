import {
  BarChart3,
  Cloud,
  Code,
  Code2,
  Database,
  Globe,
  Lightbulb,
  MessageSquare,
  Rocket,
  Shield,
  ShoppingCart,
  Smartphone,
  Zap,
} from 'lucide-react';

import type { HomeTranslations } from '../../types';

export const homeEn: HomeTranslations = {
  locale: 'en',
  lang: 'en',
  meta: {
    title: 'Roichman Tech | Custom Software Development Partner',
    description:
      'We build reliable software with clean code, predictable delivery, and long-term support. Web systems, mobile apps, integrations, and more.',
  },
  header: {
    navLinks: [
      { href: '#solutions', label: 'Solutions' },
      { href: '#process', label: 'Process' },
      { href: '#contact', label: 'Contact' },
    ],
    ctaHref: '#contact',
    ctaLabel: 'Contact Us',
    languageSwitch: {
      label: 'PT',
      href: '/',
      ariaLabel: 'Switch to Portuguese',
      flag: 'br',
    },
    menuLabel: 'Toggle menu',
  },
  hero: {
    badge: 'Software engineering with excellence',
    title: 'Software that works.',
    highlight: 'A partner that delivers.',
    description:
      'We build tailored solutions for your business with an eye on quality, timelines, and long-term results.',
    primaryCta: { href: '#contact', label: 'Start a Project' },
    secondaryCta: { href: '#solutions', label: 'View Solutions' },
    features: [
      { icon: Code2, label: 'Clean Code' },
      { icon: Zap, label: 'Fast Delivery' },
      { icon: Shield, label: 'Ongoing Support' },
    ],
  },
  solutions: {
    id: 'solutions',
    badge: 'Solutions',
    heading: 'Technology tailored to every challenge',
    subheading:
      'We build solutions that adapt to your reality, not the other way around.',
    items: [
      {
        icon: Globe,
        title: 'Web Systems',
        description:
          'Robust, scalable web applications that digitize processes and boost efficiency.',
      },
      {
        icon: Smartphone,
        title: 'Mobile Apps',
        description:
          'Native and hybrid apps for iOS and Android focused on usability and performance.',
      },
      {
        icon: Database,
        title: 'Integrations & APIs',
        description:
          'We connect your existing systems, automating flows and removing repetitive manual work.',
      },
      {
        icon: BarChart3,
        title: 'Dashboards & BI',
        description:
          'Analytics dashboards that turn data into actionable insights for decision-making.',
      },
      {
        icon: ShoppingCart,
        title: 'E-commerce',
        description:
          'Complete, custom storefronts integrated with payment and logistics providers.',
      },
      {
        icon: Cloud,
        title: 'Cloud Infrastructure',
        description:
          'Cloud migrations and management focused on security, availability, and cost efficiency.',
      },
    ],
  },
  process: {
    id: 'process',
    badge: 'Our Process',
    heading: 'Predictability at every step',
    subheading:
      'A structured process that delivers consistent results and avoids surprises.',
    steps: [
      {
        icon: MessageSquare,
        number: '01',
        title: 'Discovery',
        description:
          'We listen to your needs, map challenges, and define clear goals for the project.',
      },
      {
        icon: Lightbulb,
        number: '02',
        title: 'Planning',
        description:
          'We build a detailed roadmap with incremental deliveries, realistic timelines, and transparent communication.',
      },
      {
        icon: Code,
        number: '03',
        title: 'Development',
        description:
          'We craft the software with clean code, automated tests, and continuous quality reviews.',
      },
      {
        icon: Rocket,
        number: '04',
        title: 'Launch & Support',
        description:
          'We deliver the final product and stay close for evolutions and ongoing maintenance.',
      },
    ],
  },
  cta: {
    id: 'contact',
    badge: 'Ready to start?',
    heading: 'Turn your idea into quality software',
    description:
      'Get in touch for an initial conversation. We want to understand your challenge and show how we can help.',
    email: 'contact@roichman.tech',
    emailLabel: 'contact@roichman.tech',
    responseTime: 'We respond within 24 hours',
  },
  footer: {
    tagline: 'Software engineering with excellence.',
    location: 'Nova Russas, Ceará · Clients worldwide.',
    contactHeading: 'Contact',
    rights: 'Roichman Tech. All rights reserved.',
  },
};
