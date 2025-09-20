import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Globe, Menu, X } from 'lucide-react';
import gptLogo from '@/assets/gpt-logo.png';

interface NavigationProps {
  language: 'en' | 'ar';
  setLanguage: (lang: 'en' | 'ar') => void;
}

const Navigation: React.FC<NavigationProps> = ({ language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const content = {
    en: {
      home: 'Home',
      services: 'Services', 
      about: 'About',
      contact: 'Contact',
      inbound: 'Inbound Tourism',
      outbound: 'Outbound Tourism',
      getQuote: 'Get Quote'
    },
    ar: {
      home: 'الرئيسية',
      services: 'الخدمات',
      about: 'عنا', 
      contact: 'اتصل بنا',
      inbound: 'السياحة الواردة',
      outbound: 'السياحة الصادرة',
      getQuote: 'احصل على عرض'
    }
  };

  const t = content[language];
  const isRTL = language === 'ar';

  return (
    <nav className={`fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
            <img 
              src={gptLogo} 
              alt="GPT Travel Logo" 
              className="h-12 w-auto animate-luxury-glow"
            />
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            <a href="#home" className="btn-luxury-ghost">
              {t.home}
            </a>
            <div className="relative group">
              <button className="btn-luxury-ghost">
                {t.services}
              </button>
              <div className={`absolute top-full ${isRTL ? 'right-0' : 'left-0'} mt-2 w-48 bg-card border border-border rounded-lg shadow-luxury opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300`}>
                <a href="#inbound" className="block px-4 py-3 text-sm hover:bg-primary/10 rounded-t-lg">
                  {t.inbound}
                </a>
                <a href="#outbound" className="block px-4 py-3 text-sm hover:bg-primary/10 rounded-b-lg">
                  {t.outbound}
                </a>
              </div>
            </div>
            <a href="#about" className="btn-luxury-ghost">
              {t.about}
            </a>
            <a href="#contact" className="btn-luxury-ghost">
              {t.contact}
            </a>
          </div>

          {/* Language Switcher & CTA */}
          <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
            <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
              <Globe className="w-4 h-4 text-primary" />
              <Button
                variant={language === 'en' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('en')}
                className="text-xs"
              >
                EN
              </Button>
              <Button
                variant={language === 'ar' ? 'default' : 'ghost'}
                size="sm" 
                onClick={() => setLanguage('ar')}
                className="text-xs"
              >
                AR
              </Button>
            </div>
            <a href="#contact">
              <Button className="btn-luxury">
                {t.getQuote}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-3 pt-4">
              <a href="#home" className="btn-luxury-ghost text-left">
                {t.home}
              </a>
              <a href="#inbound" className="btn-luxury-ghost text-left">
                {t.inbound}
              </a>
              <a href="#outbound" className="btn-luxury-ghost text-left">
                {t.outbound}
              </a>
              <a href="#about" className="btn-luxury-ghost text-left">
                {t.about}
              </a>
              <a href="#contact" className="btn-luxury-ghost text-left">
                {t.contact}
              </a>
              <div className={`flex items-center pt-2 ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                <Globe className="w-4 h-4 text-primary" />
                <Button
                  variant={language === 'en' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setLanguage('en')}
                  className="text-xs"
                >
                  EN
                </Button>
                <Button
                  variant={language === 'ar' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setLanguage('ar')}
                  className="text-xs"
                >
                  AR
                </Button>
              </div>
              <a href="#contact">
                <Button className="btn-luxury w-full">
                  {t.getQuote}
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;