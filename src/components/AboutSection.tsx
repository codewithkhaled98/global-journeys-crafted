import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Building2, 
  Car, 
  Shield, 
  Globe, 
  Award,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import dubaiToursImage from '@/assets/dubai-tours.jpg';

interface AboutSectionProps {
  language: 'en' | 'ar';
}

const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const content = {
    en: {
      badge: 'About GPT Travel',
      title: 'Premier Travel Management Excellence',
      subtitle: 'Dubai-based luxury travel specialists',
      description: 'GPT Travel is a premier Dubai-based travel management company holding a full UAE Inbound & Outbound tourism license. We specialize in high-end, tailor-made travel solutions for global corporations, VIP guests, and discerning leisure travelers.',
      mission: 'Our mission is to deliver exceptional, seamless travel experiences—whether welcoming international visitors to the UAE or planning world-class journeys abroad for UAE-based clients.',
      advantages: {
        title: 'Our Competitive Advantages',
        subtitle: 'What sets us apart in the luxury travel industry',
        items: [
          {
            icon: Car,
            title: 'Largest Transportation Network',
            desc: 'One of the UAE\'s largest premium fleets of luxury vehicles—limousines, executive coaches, and private transfers ensuring world-class comfort and reliability.'
          },
          {
            icon: Shield,
            title: 'VIP & Corporate Expertise',
            desc: 'Discretion, precision, and white-glove service specialized for senior executives and high-profile guests requiring the highest level of privacy and service.'
          },
          {
            icon: CheckCircle,
            title: 'End-to-End Management',
            desc: 'From visa assistance and flight reservations to luxury accommodation and on-ground event execution—every detail is handled by our experienced team.'
          },
          {
            icon: Globe,
            title: 'Global Partnerships',
            desc: 'Our extensive network of international partners allows us to deliver consistent five-star experiences worldwide across all major destinations.'
          }
        ]
      },
      stats: [
        { number: '10+', label: 'Years Experience' },
        { number: '500+', label: 'Corporate Clients' },
        { number: '50+', label: 'Global Destinations' },
        { number: '24/7', label: 'Concierge Support' }
      ]
    },
    ar: {
      badge: 'عن جي بي تي ترافيل',
      title: 'تميز إدارة السفر الرائدة',
      subtitle: 'متخصصون في السفر الفاخر مقرهم دبي',
      description: 'جي بي تي ترافيل هي شركة إدارة سفر رائدة مقرها دبي وتحمل ترخيص سياحي كامل للسياحة الواردة والصادرة في دولة الإمارات. نتخصص في حلول السفر المخصصة عالية الجودة للشركات العالمية وكبار الشخصيات والمسافرين الذواقة.',
      mission: 'مهمتنا هي تقديم تجارب سفر استثنائية وسلسة - سواء كان ذلك ترحيبًا بالزوار الدوليين في دولة الإمارات أو التخطيط لرحلات عالمية لعملائنا المقيمين في الإمارات.',
      advantages: {
        title: 'مزايانا التنافسية',
        subtitle: 'ما يميزنا في صناعة السفر الفاخر',
        items: [
          {
            icon: Car,
            title: 'أكبر شبكة نقل',
            desc: 'واحدة من أكبر أساطيل المركبات الفاخرة في دولة الإمارات - ليموزين وحافلات تنفيذية ونقل خاص يضمن الراحة والموثوقية على مستوى عالمي.'
          },
          {
            icon: Shield,
            title: 'خبرة كبار الشخصيات والشركات',
            desc: 'تكتم ودقة وخدمة القفازات البيضاء المتخصصة لكبار المديرين التنفيذيين وكبار الشخصيات الذين يتطلبون أعلى مستوى من الخصوصية والخدمة.'
          },
          {
            icon: CheckCircle,
            title: 'الإدارة الشاملة',
            desc: 'من مساعدة التأشيرات وحجوزات الطيران إلى الإقامة الفاخرة وتنفيذ الفعاليات الأرضية - كل تفصيلة يتعامل معها فريقنا ذو الخبرة.'
          },
          {
            icon: Globe,
            title: 'شراكات عالمية',
            desc: 'شبكتنا الواسعة من الشركاء الدوليين تمكننا من تقديم تجارب خمس نجوم متسقة في جميع أنحاء العالم عبر جميع الوجهات الرئيسية.'
          }
        ]
      },
      stats: [
        { number: '10+', label: 'سنوات خبرة' },
        { number: '500+', label: 'عميل شركات' },
        { number: '50+', label: 'وجهة عالمية' },
        { number: '24/7', label: 'دعم الكونسيرج' }
      ]
    }
  };

  const t = content[language];
  const isRTL = language === 'ar';

  return (
    <section id="about" className={`py-20 bg-background ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-luxury-slide-in">
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                {t.badge}
              </span>
            </div>
            
            <h2 className="text-5xl font-playfair font-bold text-gradient-gold mb-6">
              {t.title}
            </h2>
            
            <h3 className="text-2xl font-playfair text-gold-light mb-8">
              {t.subtitle}
            </h3>
            
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              {t.description}
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t.mission}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              {t.stats.map((stat, index) => (
                <div key={index} className="text-center animate-luxury-fade-up" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-foreground/70 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-luxury-fade-up delay-300">
            <img 
              src={dubaiToursImage} 
              alt="Dubai Tours and Experiences"
              className="w-full h-[500px] object-cover rounded-2xl shadow-luxury hover-glow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent rounded-2xl"></div>
            
            {/* Floating Card */}
            <Card className="absolute -bottom-6 -left-6 w-48 card-luxury animate-luxury-float">
              <CardContent className="p-6 text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-lg font-bold text-foreground">Licensed</div>
                <div className="text-sm text-foreground/70">UAE Tourism Authority</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Advantages Section */}
        <div>
          <div className="text-center mb-16 animate-luxury-fade-up">
            <h3 className="text-4xl font-playfair font-bold text-gradient-gold mb-6">
              {t.advantages.title}
            </h3>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              {t.advantages.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.advantages.items.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <Card 
                  key={index} 
                  className="card-luxury hover-lift animate-luxury-fade-up" 
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-4">
                          {advantage.title}
                        </h4>
                        <p className="text-foreground/70 leading-relaxed">
                          {advantage.desc}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;