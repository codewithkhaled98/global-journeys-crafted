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
    <nav className={`fixed top-0 w-full z-50 bg-background/98 backdrop-blur-lg border-b border-border/50 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container-wide py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
            <img 
              src={gptLogo} 
              alt="GPT Travel Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden lg:flex items-center ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            <a href="#home" className="btn-modern-ghost">
              {t.home}
            </a>
            <div className="relative group">
              <button className="btn-modern-ghost">
                {t.services}
              </button>
              <div className={`absolute top-full ${isRTL ? 'right-0' : 'left-0'} mt-2 w-56 bg-card/95 backdrop-blur-lg border border-border/50 rounded-xl shadow-luxury opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300`}>
                <a href="#inbound" className="block px-6 py-4 text-sm hover:bg-primary/10 rounded-t-xl border-b border-border/30">
                  {t.inbound}
                </a>
                <a href="#outbound" className="block px-6 py-4 text-sm hover:bg-primary/10 rounded-b-xl">
                  {t.outbound}
                </a>
              </div>
            </div>
            <a href="#about" className="btn-modern-ghost">
              {t.about}
            </a>
            <a href="#contact" className="btn-modern-ghost">
              {t.contact}
            </a>
          </div>

          {/* Language Switcher & CTA */}
          <div className={`hidden lg:flex items-center ${isRTL ? 'space-x-reverse space-x-6' : 'space-x-6'}`}>
            <div className={`flex items-center bg-card/50 backdrop-blur-sm rounded-full p-1 ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'}`}>
              <Button
                variant={language === 'en' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('en')}
                className="text-xs rounded-full min-h-[32px] px-4"
              >
                EN
              </Button>
              <Button
                variant={language === 'ar' ? 'default' : 'ghost'}
                size="sm" 
                onClick={() => setLanguage('ar')}
                className="text-xs rounded-full min-h-[32px] px-4"
              >
                AR
              </Button>
            </div>
            <a href="#contact">
              <Button className="btn-modern">
                {t.getQuote}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-border/50">
            <div className="flex flex-col space-y-4 pt-6">
              <a href="#home" className={`btn-modern-ghost ${isRTL ? 'text-right' : 'text-left'} justify-start`} onClick={() => setIsMenuOpen(false)}>
                {t.home}
              </a>
              <a href="#inbound" className={`btn-modern-ghost ${isRTL ? 'text-right' : 'text-left'} justify-start`} onClick={() => setIsMenuOpen(false)}>
                {t.inbound}
              </a>
              <a href="#outbound" className={`btn-modern-ghost ${isRTL ? 'text-right' : 'text-left'} justify-start`} onClick={() => setIsMenuOpen(false)}>
                {t.outbound}
              </a>
              <a href="#about" className={`btn-modern-ghost ${isRTL ? 'text-right' : 'text-left'} justify-start`} onClick={() => setIsMenuOpen(false)}>
                {t.about}
              </a>
              <a href="#contact" className={`btn-modern-ghost ${isRTL ? 'text-right' : 'text-left'} justify-start`} onClick={() => setIsMenuOpen(false)}>
                {t.contact}
              </a>
              
              <div className="pt-4 border-t border-border/30">
                <div className={`flex items-center justify-center bg-card/50 backdrop-blur-sm rounded-full p-1 w-fit mx-auto ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'} mb-4`}>
                  <Button
                    variant={language === 'en' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setLanguage('en')}
                    className="text-xs rounded-full min-h-[32px] px-4"
                  >
                    EN
                  </Button>
                  <Button
                    variant={language === 'ar' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setLanguage('ar')}
                    className="text-xs rounded-full min-h-[32px] px-4"
                  >
                    AR
                  </Button>
                </div>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="btn-modern w-full">
                    {t.getQuote}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;