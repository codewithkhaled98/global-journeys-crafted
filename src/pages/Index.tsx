import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  useEffect(() => {
    // Set document direction and lang attribute based on language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  return (
    <>
      {/* Navigation */}
      <Navigation language={language} setLanguage={setLanguage} />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection language={language} />
        
        {/* Services Section */}
        <ServicesSection language={language} />
        
        {/* About Section */}
        <AboutSection language={language} />
        
        {/* Contact Section */}
        <ContactSection language={language} />
      </main>
      
      {/* Footer */}
      <Footer language={language} setLanguage={setLanguage} />
    </>
  );
};

export default Index;
