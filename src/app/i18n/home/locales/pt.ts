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

export const homePt: HomeTranslations = {
  locale: 'pt',
  lang: 'pt-BR',
  meta: {
    title:
      'Roichman Tech | Software House - Desenvolvimento de Software Sob Medida',
    description:
      'Desenvolvemos software sob medida com foco em qualidade, prazos e resultados de longo prazo. Sistemas web, apps mobile, integrações e mais.',
  },
  alternates: [
    { lang: 'pt-BR', href: '/' },
    { lang: 'en', href: '/en' },
  ],
  header: {
    navLinks: [
      { href: '#solucoes', label: 'Soluções' },
      { href: '#processo', label: 'Processo' },
      { href: '#contato', label: 'Contato' },
    ],
    ctaHref: '#contato',
    ctaLabel: 'Fale Conosco',
    languageSwitch: {
      label: 'EN',
      href: '/en',
      ariaLabel: 'Mudar para inglês',
      flag: 'us',
    },
    menuLabel: 'Alternar menu',
  },
  hero: {
    badge: 'Engenharia de software com excelência',
    title: 'Software que funciona.',
    highlight: 'Parceiro que entrega.',
    description:
      'Desenvolvemos soluções sob medida para o seu negócio, com foco em qualidade, prazos e resultados de longo prazo.',
    primaryCta: { href: '#contato', label: 'Iniciar Projeto' },
    secondaryCta: { href: '#solucoes', label: 'Ver Soluções' },
    features: [
      { icon: Code2, label: 'Código Limpo' },
      { icon: Zap, label: 'Entrega Rápida' },
      { icon: Shield, label: 'Suporte Contínuo' },
    ],
  },
  solutions: {
    id: 'solucoes',
    badge: 'Soluções',
    heading: 'Tecnologia sob medida para cada desafio',
    subheading:
      'Desenvolvemos soluções que se adaptam à sua realidade, não o contrário.',
    items: [
      {
        icon: Globe,
        title: 'Sistemas Web',
        description:
          'Aplicações web robustas e escaláveis para digitalizar processos e aumentar a eficiência do seu negócio.',
      },
      {
        icon: Smartphone,
        title: 'Apps Mobile',
        description:
          'Aplicativos nativos e híbridos para iOS e Android, com foco em usabilidade e performance.',
      },
      {
        icon: Database,
        title: 'Integrações & APIs',
        description:
          'Conectamos seus sistemas existentes, automatizando fluxos e eliminando trabalho manual repetitivo.',
      },
      {
        icon: BarChart3,
        title: 'Dashboards & BI',
        description:
          'Painéis analíticos que transformam dados em insights acionáveis para tomada de decisão.',
      },
      {
        icon: ShoppingCart,
        title: 'E-commerce',
        description:
          'Lojas virtuais completas e personalizadas, integradas a meios de pagamento e logística.',
      },
      {
        icon: Cloud,
        title: 'Infraestrutura Cloud',
        description:
          'Migração e gestão de ambientes em nuvem com foco em segurança, disponibilidade e custo-benefício.',
      },
    ],
  },
  process: {
    id: 'processo',
    badge: 'Nosso Processo',
    heading: 'Previsibilidade em cada etapa',
    subheading:
      'Um processo estruturado que garante resultados consistentes e elimina surpresas.',
    steps: [
      {
        icon: MessageSquare,
        number: '01',
        title: 'Entendimento',
        description:
          'Ouvimos suas necessidades, mapeamos desafios e definimos objetivos claros para o projeto.',
      },
      {
        icon: Lightbulb,
        number: '02',
        title: 'Planejamento',
        description:
          'Criamos um roadmap detalhado com entregas incrementais, prazos realistas e comunicação transparente.',
      },
      {
        icon: Code,
        number: '03',
        title: 'Desenvolvimento',
        description:
          'Construímos o software com código limpo, testes automatizados e revisões constantes de qualidade.',
      },
      {
        icon: Rocket,
        number: '04',
        title: 'Lançamento & Suporte',
        description:
          'Entregamos o produto final e permanecemos ao seu lado para evoluções e manutenção contínua.',
      },
    ],
  },
  cta: {
    id: 'contato',
    badge: 'Pronto para Começar?',
    heading: 'Transforme sua ideia em software de qualidade',
    description:
      'Entre em contato para uma conversa inicial sem compromisso. Queremos entender seu desafio e mostrar como podemos ajudar.',
    email: 'contact@roichman.tech',
    emailLabel: 'contact@roichman.tech',
    responseTime: 'Respondemos em até 24 horas',
  },
  footer: {
    tagline: 'Engenharia de software com excelência.',
    location: 'Nova Russas, Ceará · Clientes no mundo todo.',
    contactHeading: 'Contato',
    rights: 'Roichman Tech. Todos os direitos reservados.',
  },
};
