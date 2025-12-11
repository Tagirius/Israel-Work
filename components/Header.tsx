
import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import { useLanguage } from './LanguageContext';
import { Language } from '../types';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'ru', label: 'RU', flag: '🇷🇺' },
    { code: 'ua', label: 'UA', flag: '🇺🇦' },
    { code: 'en', label: 'EN', flag: '🇪🇺' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex flex-col items-center leading-none group">
          <div className="flex items-center gap-2">
             <div className={`relative flex items-center justify-center w-10 h-10 border-2 rounded-lg transition-colors ${isScrolled ? 'border-gray-900' : 'border-white'}`}>
                <span className={`text-xl font-bold font-serif ${isScrolled ? 'text-gray-900' : 'text-white'}`}>W</span>
                <Star className={`absolute -top-2 -right-2 w-4 h-4 text-secondary-500 fill-secondary-500`} />
             </div>
             <div className="flex flex-col">
                <span className={`text-xl font-bold tracking-widest ${isScrolled ? 'text-gray-900' : 'text-white drop-shadow-sm'}`}>
                  ISRAEL
                </span>
                <span className={`text-sm font-bold tracking-[0.2em] ${isScrolled ? 'text-gray-800' : 'text-white/90 drop-shadow-sm'}`}>
                  WORK
                </span>
             </div>
          </div>
        </a>

        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className={`flex items-center bg-white/20 backdrop-blur-sm rounded-full p-1 border ${isScrolled ? 'border-gray-200' : 'border-white/30'}`}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-2 py-1 rounded-full text-xs font-bold transition-all ${
                  language === lang.code 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'
                }`}
                title={lang.label}
              >
                {lang.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <a 
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:inline-block px-5 py-2.5 rounded-full font-semibold shadow-lg transition-transform hover:scale-105 active:scale-95 ${
              isScrolled 
                ? 'bg-green-500 hover:bg-green-600 text-white' 
                : 'bg-green-500/90 hover:bg-green-500 text-white backdrop-blur-sm'
            }`}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
