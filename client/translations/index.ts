import { en } from './en';
import { es } from './es';
import { fr } from './fr';
import { de } from './de';
import { zh } from './zh';
import { pt } from './pt';

export const translations = {
  en,
  es,
  fr,
  de,
  zh,
  pt
};

export type TranslationKey = keyof typeof en;