import React from 'react';
import { MapPin, Phone, Mail, Globe, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gptLogo from '@/assets/gpt-logo.png';

interface FooterProps {
  language: 'en' | 'ar';
  setLanguage: (lang: 'en' | 'ar') => void;
}

const Footer: React.FC<FooterProps> = ({ language, setLanguage }) => {
  const content = {
    en: {
      description: 'Premier Dubai-based luxury travel management company specializing in high-end, bespoke travel solutions for global corporations, VIP guests, and discerning leisure travelers.',
      quickLinks: {
        title: 'Quick Links',
        items: [
          { label: 'Home', href: '#home' },
          { label: 'About Us', href: '#about' },
          { label: 'Inbound Services', href: '#inbound' },
          { label: 'Outbound Services', href: '#outbound' },
          { label: 'Contact', href: '#contact' }
        ]
      },
      services: {
        title: 'Our Services',
        items: [
          'VIP Airport Services',
          'Luxury Transportation',
          'Corporate Travel Management',
          'Hotel & Resort Bookings',
          'UAE Tours & Excursions',
          '24/7 Concierge Support'
        ]
      },
      contact: {
        title: 'Contact Info',
        address: 'Cayan Building, Tecom, Dubai, UAE',
        phone: '+971 50 812 4258',
        email: 'info@gpt-travel.com'
      },
      backToTop: 'Back to Top',
      copyright: '© 2024 GPT Travel. All rights reserved.',
      poweredBy: 'Luxury Travel Management Solutions'
    },
    ar: {
      description: 'شركة إدارة السفر الفاخر الرائدة في دبي والمتخصصة في حلول السفر المخصصة عالية الجودة للشركات العالمية وكبار الشخصيات والمسافرين الذواقة.',
      quickLinks: {
        title: 'روابط سريعة',
        items: [
          { label: 'الرئيسية', href: '#home' },
          { label: 'عنا', href: '#about' },
          { label: 'الخدمات الواردة', href: '#inbound' },
          { label: 'الخدمات الصادرة', href: '#outbound' },
          { label: 'اتصل بنا', href: '#contact' }
        ]
      },
      services: {
        title: 'خدماتنا',
        items: [
          'خدمات المطار كبار الشخصيات',
          'النقل الفاخر',
          'إدارة السفر الشركات',
          'حجوزات الفنادق والمنتجعات',
          'جولات الإمارات والرحلات',
          'دعم الكونسيرج 24/7'
        ]
      },
      contact: {
        title: 'معلومات الاتصال',
        address: 'مبنى كايان، تيكوم، دبي، الإمارات',
        phone: '+971 50 812 4258',
        email: 'info@gpt-travel.com'
      },
      backToTop: 'العودة للأعلى',
      copyright: '© 2024 جي بي تي ترافيل. جميع الحقوق محفوظة.',
      poweredBy: 'حلول إدارة السفر الفاخر'
    }
  };

  const t = content[language];
  const isRTL = language === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`bg-background border-t border-border ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={gptLogo} 
                alt="GPT Travel Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-foreground/70 leading-relaxed mb-8 max-w-md">
              {t.description}
            </p>
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-4 mb-6">
              <Globe className="w-5 h-5 text-primary" />
              <span className="text-sm text-foreground/70">Language:</span>
              <Button
                variant={language === 'en' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('en')}
                className="text-xs"
              >
                English
              </Button>
              <Button
                variant={language === 'ar' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('ar')}
                className="text-xs"
              >
                العربية
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-playfair font-semibold text-gold-light mb-6">
              {t.quickLinks.title}
            </h3>
            <ul className="space-y-3">
              {t.quickLinks.items.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className="text-foreground/70 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-playfair font-semibold text-gold-light mb-6">
              {t.services.title}
            </h3>
            <ul className="space-y-3">
              {t.services.items.map((service, index) => (
                <li key={index} className="text-foreground/70 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm font-medium text-foreground">
                  {t.contact.title}
                </div>
                <div className="text-xs text-foreground/60">
                  {t.contact.address}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm font-medium text-foreground">
                  Phone & WhatsApp
                </div>
                <a 
                  href={`tel:${t.contact.phone}`}
                  className="text-xs text-foreground/60 hover:text-primary transition-colors"
                >
                  {t.contact.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm font-medium text-foreground">
                  Email
                </div>
                <a 
                  href={`mailto:${t.contact.email}`}
                  className="text-xs text-foreground/60 hover:text-primary transition-colors"
                >
                  {t.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-foreground/60 mb-4 md:mb-0">
            {t.copyright}
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-xs text-foreground/50">
              {t.poweredBy}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="btn-luxury-ghost"
            >
              {t.backToTop}
              <ArrowUp className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;