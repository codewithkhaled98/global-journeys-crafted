import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Globe, Users } from 'lucide-react';
import heroImage from '@/assets/hero-luxury-travel.jpg';

interface HeroSectionProps {
  language: 'en' | 'ar';
}

const HeroSection: React.FC<HeroSectionProps> = ({ language }) => {
  const content = {
    en: {
      headline: 'Luxury Travel Management',
      subheadline: 'Tailored for Excellence',
      description: 'Premier Dubai-based travel management company specializing in high-end, bespoke travel solutions for global corporations, VIP guests, and discerning leisure travelers.',
      cta1: 'Explore Services',
      cta2: 'Get Consultation',
      stats: {
        experience: '10+ Years Experience',
        clients: '500+ Corporate Clients', 
        destinations: 'Global Destinations',
        rating: '5-Star Service'
      }
    },
    ar: {
      headline: 'إدارة السفر الفاخرة',
      subheadline: 'مصممة للتميز',
      description: 'شركة إدارة السفر الرائدة في دبي والمتخصصة في حلول السفر المخصصة عالية الجودة للشركات العالمية والضيوف كبار الشخصيات والمسافرين الذواقة.',
      cta1: 'استكشف الخدمات',
      cta2: 'احصل على استشارة',
      stats: {
        experience: 'خبرة 10+ سنوات',
        clients: '500+ عميل شركات',
        destinations: 'وجهات عالمية',
        rating: 'خدمة 5 نجوم'
      }
    }
  };

  const t = content[language];
  const isRTL = language === 'ar';

  return (
    <section id="home" className={`relative min-h-screen flex items-center overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxury Travel Dubai"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/20 rounded-full animate-luxury-float blur-xl"></div>
      <div className="absolute bottom-32 left-10 w-24 h-24 bg-primary-glow/30 rounded-full animate-luxury-float delay-1000 blur-xl"></div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl">
          {/* Main Content */}
          <div className="animate-luxury-fade-up">
            <div className="flex items-center space-x-2 mb-6">
              <Star className="w-5 h-5 text-primary fill-current" />
              <span className="text-primary font-medium tracking-wider uppercase text-sm">
                Premium Travel Solutions
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-playfair font-bold text-gradient-gold leading-tight mb-6">
              {t.headline}
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-playfair font-medium text-gold-light mb-8">
              {t.subheadline}
            </h2>
            
            <p className="text-xl text-foreground/90 leading-relaxed mb-12 max-w-2xl">
              {t.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a href="#services">
                <Button className="btn-luxury group">
                  {t.cta1}
                  <ArrowRight className={`w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180' : ''}`} />
                </Button>
              </a>
              <a href="#contact">
                <Button className="btn-luxury-outline">
                  {t.cta2}
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(t.stats).map(([key, value], index) => (
                <div key={key} className="text-center animate-luxury-fade-up" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="flex justify-center mb-2">
                    {key === 'experience' && <Globe className="w-6 h-6 text-primary" />}
                    {key === 'clients' && <Users className="w-6 h-6 text-primary" />}
                    {key === 'destinations' && <Globe className="w-6 h-6 text-primary" />}
                    {key === 'rating' && <Star className="w-6 h-6 text-primary fill-current" />}
                  </div>
                  <div className="text-sm text-foreground/80 font-medium">
                    {value}
                  </div>
                </div>
              ))}
            </div>
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