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
    const firstSegment = pathSegments[0];
    
    // Check if first segment is a valid language
    const validLanguages = availableLanguages.map(l => l.code);
    if (firstSegment && validLanguages.includes(firstSegment as Language)) {
      setLanguageState(firstSegment as Language);
    } else {
      // Default to English if no valid language found
      setLanguageState('en');
    }
  }, [location.pathname]);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    const pathSegments = location.pathname.split('/').filter(Boolean);
    
    // Replace the first segment (current language) with new language
    if (pathSegments.length > 0 && availableLanguages.map(l => l.code).includes(pathSegments[0] as Language)) {
      pathSegments[0] = newLang;
    } else {
      // If no language in current path, prepend the new language
      pathSegments.unshift(newLang);
    }
    
    const newPath = '/' + pathSegments.join('/');
    navigate(newPath);
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