import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Plane, 
  Car, 
  MapPin, 
  Star, 
  Shield, 
  Clock, 
  Users, 
  Globe2,
  ArrowRight,
  Hotel,
  Headphones,
  Calendar
} from 'lucide-react';
import vipServicesImage from '@/assets/vip-services.jpg';
import corporateTravelImage from '@/assets/corporate-travel.jpg';
import dubaiToursImage from '@/assets/dubai-tours.jpg';

interface ServicesSectionProps {
  language: 'en' | 'ar';
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Our Premium Services',
      subtitle: 'Comprehensive travel solutions tailored to your needs',
      inbound: {
        title: 'Inbound Tourism Services',
        subtitle: 'Welcoming Guests to the UAE',
        description: 'Complete end-to-end tourism facilities for international visitors arriving in the United Arab Emirates.',
        services: [
          { icon: Plane, title: 'VIP Airport Services', desc: 'Meet & greet and fast-track immigration assistance' },
          { icon: Car, title: 'Luxury Transfers', desc: 'Limousines, executive cars, helicopters, and yachts' },
          { icon: Hotel, title: 'Five-Star Accommodations', desc: 'Premium hotel and resort reservations with exclusive rates' },
          { icon: MapPin, title: 'UAE Tours & Excursions', desc: 'Private city tours, desert safaris, and cultural experiences' },
          { icon: Calendar, title: 'Corporate Events', desc: 'Conference arrangements and incentive travel programs' },
          { icon: Headphones, title: '24/7 Concierge Support', desc: 'Round-the-clock assistance for all guest needs' }
        ],
        cta: 'Explore Inbound Services'
      },
      outbound: {
        title: 'Outbound Tourism Services', 
        subtitle: 'Taking UAE Clients to the World',
        description: 'Personalized luxury travel planning for UAE-based individuals, families, and corporate teams traveling internationally.',
        services: [
          { icon: Globe2, title: 'Global Flight Bookings', desc: 'Commercial and private jet charter arrangements' },
          { icon: Star, title: 'Luxury Holiday Planning', desc: 'Personalized itineraries across Europe, Asia, Americas, and beyond' },
          { icon: Users, title: 'Corporate Travel Management', desc: 'Executive business trips and incentive programs' },
          { icon: Shield, title: 'Visa & Documentation', desc: 'Visa facilitation, travel insurance, and destination support' },
          { icon: MapPin, title: 'Tailor-Made Itineraries', desc: 'Private guides, exclusive experiences, and top-tier accommodations' },
          { icon: Clock, title: 'White-Glove Service', desc: 'Discretion, precision, and premium attention to detail' }
        ],
        cta: 'Explore Outbound Services'
      }
    },
    ar: {
      title: 'خدماتنا المميزة',
      subtitle: 'حلول سفر شاملة مصممة لتلبية احتياجاتك',
      inbound: {
        title: 'خدمات السياحة الواردة',
        subtitle: 'نرحب بالضيوف في دولة الإمارات',
        description: 'تسهيلات سياحية شاملة من البداية إلى النهاية للزوار الدوليين القادمين إلى دولة الإمارات العربية المتحدة.',
        services: [
          { icon: Plane, title: 'خدمات المطار كبار الشخصيات', desc: 'الاستقبال والترحيب والمساعدة السريعة في الهجرة' },
          { icon: Car, title: 'النقل الفاخر', desc: 'ليموزين وسيارات تنفيذية وطائرات مروحية ويخوت' },
          { icon: Hotel, title: 'إقامة خمس نجوم', desc: 'حجوزات فنادق ومنتجعات فاخرة بأسعار حصرية' },
          { icon: MapPin, title: 'جولات الإمارات والرحلات', desc: 'جولات خاصة في المدينة ورحلات صحراوية وتجارب ثقافية' },
          { icon: Calendar, title: 'الفعاليات الشركات', desc: 'ترتيبات المؤتمرات وبرامج السفر التحفيزية' },
          { icon: Headphones, title: 'خدمة الكونسيرج 24/7', desc: 'المساعدة على مدار الساعة لجميع احتياجات الضيوف' }
        ],
        cta: 'استكشف الخدمات الواردة'
      },
      outbound: {
        title: 'خدمات السياحة الصادرة',
        subtitle: 'نأخذ عملاء الإمارات إلى العالم',
        description: 'تخطيط سفر فاخر مخصص للأفراد والعائلات وفرق الشركات المقيمة في الإمارات والمسافرة دولياً.',
        services: [
          { icon: Globe2, title: 'حجوزات الطيران العالمية', desc: 'ترتيبات الطيران التجاري واستئجار الطائرات الخاصة' },
          { icon: Star, title: 'تخطيط العطلات الفاخرة', desc: 'برامج مخصصة عبر أوروبا وآسيا والأمريكتين وما بعدها' },
          { icon: Users, title: 'إدارة السفر الشركات', desc: 'رحلات الأعمال التنفيذية والبرامج التحفيزية' },
          { icon: Shield, title: 'التأشيرات والوثائق', desc: 'تسهيل التأشيرات وتأمين السفر ودعم الوجهات' },
          { icon: MapPin, title: 'برامج مصممة خصيصاً', desc: 'مرشدين خاصين وتجارب حصرية وإقامة من الدرجة الأولى' },
          { icon: Clock, title: 'خدمة القفازات البيضاء', desc: 'تكتم ودقة واهتمام مميز بالتفاصيل' }
        ],
        cta: 'استكشف الخدمات الصادرة'
      }
    }
  };

  const t = content[language];
  const isRTL = language === 'ar';

  return (
    <section id="services" className={`section-padding bg-gradient-dark ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-gradient-gold mb-6 text-balance">
            {t.title}
          </h2>
          <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto text-balance">
            {t.subtitle}
          </p>
        </div>

        {/* Inbound Services */}
        <div id="inbound" className="mb-24 lg:mb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className={`${isRTL ? 'lg:order-2' : 'lg:order-1'} space-y-8`}>
              <div className={`inline-flex items-center gap-3 bg-primary/10 backdrop-blur-sm rounded-full px-6 py-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold text-sm tracking-wide">
                  {t.inbound.subtitle}
                </span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-gradient-gold text-balance">
                {t.inbound.title}
              </h3>
              
              <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                {t.inbound.description}
              </p>

              <div className="grid gap-6">
                {t.inbound.services.slice(0, 4).map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div 
                      key={index} 
                      className={`flex items-start gap-4 p-6 card-modern ${isRTL ? 'flex-row-reverse text-right' : ''}`}
                    >
                      <div className="flex-shrink-0 w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 text-lg">
                          {service.title}
                        </h4>
                        <p className="text-foreground/70 leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <a href="#contact">
                <Button className="btn-modern group w-full sm:w-auto">
                  {t.inbound.cta}
                  <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-3' : 'ml-3'} transition-transform group-hover:${isRTL ? '-translate-x-1' : 'translate-x-1'} ${isRTL ? 'rotate-180' : ''}`} />
                </Button>
              </a>
            </div>

            <div className={`${isRTL ? 'lg:order-1' : 'lg:order-2'} relative`}>
              <img 
                src={vipServicesImage} 
                alt="VIP Services Dubai"
                className="w-full h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-luxury"
              />
            </div>
          </div>
        </div>

        {/* Outbound Services */}
        <div id="outbound">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className={`${isRTL ? 'lg:order-2' : 'lg:order-1'} relative`}>
              <img 
                src={corporateTravelImage} 
                alt="Corporate Travel Management"
                className="w-full h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-luxury"
              />
            </div>

            <div className={`${isRTL ? 'lg:order-1' : 'lg:order-2'} space-y-8`}>
              <div className={`inline-flex items-center gap-3 bg-primary/10 backdrop-blur-sm rounded-full px-6 py-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Globe2 className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold text-sm tracking-wide">
                  {t.outbound.subtitle}
                </span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-gradient-gold text-balance">
                {t.outbound.title}
              </h3>
              
              <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                {t.outbound.description}
              </p>

              <div className="grid gap-6">
                {t.outbound.services.slice(0, 4).map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div 
                      key={index} 
                      className={`flex items-start gap-4 p-6 card-modern ${isRTL ? 'flex-row-reverse text-right' : ''}`}
                    >
                      <div className="flex-shrink-0 w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 text-lg">
                          {service.title}
                        </h4>
                        <p className="text-foreground/70 leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <a href="#contact">
                <Button className="btn-modern group w-full sm:w-auto">
                  {t.outbound.cta}
                  <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-3' : 'ml-3'} transition-transform group-hover:${isRTL ? '-translate-x-1' : 'translate-x-1'} ${isRTL ? 'rotate-180' : ''}`} />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;