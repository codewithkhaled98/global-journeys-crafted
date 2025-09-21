import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Globe, Users } from 'lucide-react';
import heroImage from '@/assets/hero-business-travel.jpg';

interface HeroSectionProps {
  language: 'en' | 'ar';
}

const HeroSection: React.FC<HeroSectionProps> = ({ language }) => {
  const content = {
    en: {
      headline: 'Professional Travel Management',
      subheadline: 'Reliable Transport Solutions',
      description: 'Dubai-based travel management company providing efficient bus transport solutions for corporations and travelers.',
      cta1: 'Our Services',
      cta2: 'Contact Us',
      stats: {
        experience: '10+ Years Experience',
        clients: '500+ Corporate Clients', 
        destinations: 'UAE Coverage',
        rating: 'Trusted Service'
      }
    },
    ar: {
      headline: 'إدارة السفر المهنية',
      subheadline: 'حلول نقل موثوقة',
      description: 'شركة إدارة السفر في دبي تقدم حلول النقل بالحافلات للشركات والمسافرين.',
      cta1: 'خدماتنا',
      cta2: 'اتصل بنا',
      stats: {
        experience: 'خبرة 10+ سنوات',
        clients: '500+ عميل شركات',
        destinations: 'تغطية الإمارات',
        rating: 'خدمة موثوقة'
      }
    }
  };

  const t = content[language];
  const isRTL = language === 'ar';

  return (
    <section id="home" className={`relative min-h-screen flex items-center ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional Bus Travel Dubai"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>

      <div className="container-wide relative z-10">
        <div className={`max-w-5xl ${isRTL ? 'mr-0 text-right' : 'ml-0'} py-32`}>
          {/* Badge */}
          <div className={`inline-flex items-center gap-3 bg-primary/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Star className="w-5 h-5 text-primary fill-current" />
            <span className="text-primary font-semibold text-sm tracking-wide">
              Professional Travel Solutions
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-playfair font-bold text-gradient-gold leading-[1.1] mb-8 text-balance">
            {t.headline}
          </h1>
          
          {/* Subheadline */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-playfair font-medium text-gold-light mb-8 text-balance">
            {t.subheadline}
          </h2>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed mb-12 max-w-2xl text-balance">
            {t.description}
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 mb-16 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <a href="#services">
              <Button className="btn-modern group w-full sm:w-auto">
                {t.cta1}
                <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-3' : 'ml-3'} transition-transform group-hover:${isRTL ? '-translate-x-1' : 'translate-x-1'} ${isRTL ? 'rotate-180' : ''}`} />
              </Button>
            </a>
            <a href="#contact">
              <Button className="btn-modern-outline w-full sm:w-auto">
                {t.cta2}
              </Button>
            </a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {Object.entries(t.stats).map(([key, value], index) => (
              <div key={key} className="text-center lg:text-left" style={{ animationDelay: `${index * 150}ms` }}>
                <div className={`flex ${isRTL ? 'justify-center lg:justify-end' : 'justify-center lg:justify-start'} mb-3`}>
                  {key === 'experience' && <Globe className="w-7 h-7 text-primary" />}
                  {key === 'clients' && <Users className="w-7 h-7 text-primary" />}
                  {key === 'destinations' && <Globe className="w-7 h-7 text-primary" />}
                  {key === 'rating' && <Star className="w-7 h-7 text-primary fill-current" />}
                </div>
                <div className="font-semibold text-foreground text-base leading-tight">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;