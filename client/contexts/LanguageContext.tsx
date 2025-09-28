import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { translations } from '../translations';

type Language = 'en' | 'es' | 'fr' | 'de' | 'zh' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  translations: any;
  availableLanguages: { code: Language; name: string; flag: string }[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [language, setLanguageState] = useState<Language>('en');

  const availableLanguages = [
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
    { code: 'fr' as Language, name: 'Français', flag: '🇫🇷' },
    { code: 'de' as Language, name: 'Deutsch', flag: '🇩🇪' },
    { code: 'zh' as Language, name: '中文', flag: '🇨🇳' },
    { code: 'pt' as Language, name: 'Português', flag: '🇵🇹' }
  ];

  // Detect language from current pathname
  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    
    // Handle /product/lang routes
    if (pathSegments[0] === 'product' && pathSegments[1]) {
      const langFromPath = pathSegments[1];
      const validLanguages = availableLanguages.map(l => l.code);
      if (validLanguages.includes(langFromPath as Language)) {
        setLanguageState(langFromPath as Language);
      }
    } else {
      // Handle regular /lang routes
      const firstSegment = pathSegments[0];
      const validLanguages = availableLanguages.map(l => l.code);
      if (firstSegment && validLanguages.includes(firstSegment as Language)) {
        setLanguageState(firstSegment as Language);
      }
    }
  }, [location.pathname]);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    const currentPath = window.location.pathname;
    
    // Handle the new routing structure /product/lang
    if (currentPath.startsWith('/product/')) {
      const newPath = `/product/${newLang}`;
      navigate(newPath);
    } else {
      // Handle regular language routes /lang
      const pathWithoutLang = currentPath.replace(/^\/(en|es|fr|de|zh|pt)/, '');
      const newPath = `/${newLang}${pathWithoutLang}`;
      navigate(newPath);
    }
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English if translation not found
        value = translations.en;
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // Return key if no translation found
          }
        }
        break;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translations: translations[language], availableLanguages }}>
      {children}
    </LanguageContext.Provider>
  );
};