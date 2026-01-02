import type { HomeTranslations, Locale } from '../types';
import { homeEn } from './locales/en';
import { homePt } from './locales/pt';

export type {
  AlternateLink,
  CTAContent,
  FooterContent,
  HeaderContent,
  HeroContent,
  HeroFeature,
  HomeTranslations,
  LanguageSwitch,
  Locale,
  MetaContent,
  NavLink,
  ProcessContent,
  ProcessStep,
  SolutionItem,
  SolutionsContent,
} from '../types';

export { homeEn, homePt };

export const homeTranslations: Record<Locale, HomeTranslations> = {
  pt: homePt,
  en: homeEn,
};
