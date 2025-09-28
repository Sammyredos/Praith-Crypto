import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if ((dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) &&
          (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target as Node))) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' }
  ];

  const handleLanguageChange = (languageCode: string) => {
    setLanguage(languageCode as any);
    setIsLanguageDropdownOpen(false);
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/logo.png" 
              alt="Praith Logo" 
              className="h-5 xs:h-6 sm:h-7 md:h-8 lg:h-8 w-auto object-contain lg:object-none"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <Link 
              to={`/${language}`} 
              className={`font-bold text-sm lg:text-base hover:text-brand-green/80 transition-colors ${
                location.pathname === `/${language}` ? 'text-brand-green' : 'text-gray-300 hover:text-white'
              }`}
            >
              {t('header.nav.home')}
            </Link>
            <Link 
              to={`/product/${language}`} 
              className={`font-medium text-sm lg:text-base hover:text-white transition-colors ${
                location.pathname === `/product/${language}` ? 'text-brand-green font-bold' : 'text-gray-300'
              }`}
            >
              {t('header.nav.product')}
            </Link>
            <a href="#contact" className="text-gray-300 font-medium text-sm lg:text-base hover:text-white transition-colors">
              {t('header.nav.contact')}
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <button className="bg-brand-green text-black font-bold px-4 lg:px-6 py-2 lg:py-3 rounded text-sm lg:text-base hover:bg-brand-green/90 transition-all">
              {t('header.cta.getStarted')}
            </button>
            <div className="relative" ref={dropdownRef}>
              <div 
                className="flex items-center space-x-1 text-white cursor-pointer hover:text-brand-green transition-colors"
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              >
                <span className="font-bold text-xs lg:text-sm">{language.toUpperCase()}</span>
                <ChevronDown className={`w-3 h-3 lg:w-4 lg:h-4 transition-transform ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} />
              </div>
              
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full px-4 py-2 text-left flex items-center space-x-2 hover:bg-gray-800 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                        language === lang.code ? 'bg-gray-800 text-brand-green' : 'text-white'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="text-sm font-medium">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-brand-green transition-colors p-1"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-3 sm:px-4 pt-3 pb-4 space-y-2 bg-black border-t border-gray-800/50">
              <Link 
                to={`/${language}`} 
                onClick={handleMobileLinkClick} 
                className={`block px-3 py-2 font-bold text-sm sm:text-base rounded hover:bg-gray-800/50 transition-colors ${
                  location.pathname === `/${language}` ? 'text-brand-green' : 'text-gray-300 hover:text-white'
                }`}
              >
                {t('header.nav.home')}
              </Link>
              <Link 
                to={`/${language}/product`} 
                onClick={handleMobileLinkClick} 
                className={`block px-3 py-2 font-medium text-sm sm:text-base rounded hover:text-white hover:bg-gray-800/50 transition-colors ${
                  location.pathname === `/${language}/product` ? 'text-brand-green font-bold' : 'text-gray-300'
                }`}
              >
                {t('header.nav.product')}
              </Link>
              <a href="#contact" onClick={handleMobileLinkClick} className="block px-3 py-2 text-gray-300 font-medium text-sm sm:text-base rounded hover:text-white hover:bg-gray-800/50 transition-colors">
                {t('header.nav.contact')}
              </a>
              <div className="pt-3 pb-2 space-y-3 border-t border-gray-800/30 mt-3">
                <button className="w-full bg-brand-green text-black font-bold px-4 py-3 rounded text-sm sm:text-base hover:bg-brand-green/90 transition-all">
                  {t('header.cta.getStarted')}
                </button>
                <div className="relative" ref={mobileDropdownRef}>
                  <div 
                    className="flex items-center justify-center space-x-1 text-white py-2 cursor-pointer hover:text-brand-green transition-colors"
                    onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                  >
                    <span className="font-bold text-xs sm:text-sm">{language.toUpperCase()}</span>
                    <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {isLanguageDropdownOpen && (
                    <div className="mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-lg">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`w-full px-4 py-3 text-center flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                            language === lang.code ? 'bg-gray-800 text-brand-green' : 'text-white'
                          }`}
                        >
                          <span className="text-lg">{lang.flag}</span>
                          <span className="text-sm font-medium">{lang.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
