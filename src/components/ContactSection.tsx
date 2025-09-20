import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Send,
  Building,
  User,
  Briefcase
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContactSectionProps {
  language: 'en' | 'ar';
}

const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const content = {
    en: {
      badge: 'Get in Touch',
      title: 'Ready to Elevate Your Travel Experience?',
      subtitle: 'Contact our luxury travel specialists for a personalized consultation',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        company: 'Company Name',
        service: 'Service Interest',
        message: 'Message',
        servicePlaceholder: 'Select service type...',
        services: [
          'Inbound Tourism Services',
          'Outbound Tourism Services',
          'Corporate Travel Management',
          'VIP Services',
          'Event Planning',
          'Other'
        ],
        submit: 'Send Message',
        submitting: 'Sending...'
      },
      contact: {
        title: 'Contact Information',
        address: {
          title: 'Office Address',
          text: 'Cayan Building, Tecom (Al Barsha Heights), 12th Floor, Office 12/30, Dubai, UAE'
        },
        phone: {
          title: 'Phone & WhatsApp',
          text: '+971 50 812 4258'
        },
        email: {
          title: 'Email',
          text: 'info@gpt-travel.com'
        },
        hours: {
          title: 'Business Hours',
          text: '24/7 Premium Support Available'
        }
      },
      success: 'Thank you for your message. We will contact you soon!',
      error: 'Error sending message. Please try again.'
    },
    ar: {
      badge: 'تواصل معنا',
      title: 'مستعد لرفع مستوى تجربة السفر الخاصة بك؟',
      subtitle: 'تواصل مع متخصصي السفر الفاخر لدينا للحصول على استشارة شخصية',
      form: {
        name: 'الاسم الكامل',
        email: 'عنوان البريد الإلكتروني',
        phone: 'رقم الهاتف',
        company: 'اسم الشركة',
        service: 'الاهتمام بالخدمة',
        message: 'الرسالة',
        servicePlaceholder: 'اختر نوع الخدمة...',
        services: [
          'خدمات السياحة الواردة',
          'خدمات السياحة الصادرة',
          'إدارة السفر الشركات',
          'خدمات كبار الشخصيات',
          'تخطيط الفعاليات',
          'أخرى'
        ],
        submit: 'إرسال الرسالة',
        submitting: 'جاري الإرسال...'
      },
      contact: {
        title: 'معلومات الاتصال',
        address: {
          title: 'عنوان المكتب',
          text: 'مبنى كايان، تيكوم (مرتفعات البرشاء)، الطابق 12، مكتب 12/30، دبي، الإمارات العربية المتحدة'
        },
        phone: {
          title: 'الهاتف والواتساب',
          text: '+971 50 812 4258'
        },
        email: {
          title: 'البريد الإلكتروني',
          text: 'info@gpt-travel.com'
        },
        hours: {
          title: 'ساعات العمل',
          text: 'الدعم المميز متاح 24/7'
        }
      },
      success: 'شكراً لرسالتك. سنتواصل معك قريباً!',
      error: 'خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.'
    }
  };

  const t = content[language];
  const isRTL = language === 'ar';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Success",
        description: t.success,
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: t.error,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`py-20 bg-gradient-dark ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-luxury-fade-up">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <MessageCircle className="w-6 h-6 text-primary" />
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">
              {t.badge}
            </span>
          </div>
          
          <h2 className="text-5xl font-playfair font-bold text-gradient-gold mb-6">
            {t.title}
          </h2>
          
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-luxury animate-luxury-fade-up">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-gold-light flex items-center">
                  <Send className="w-6 h-6 mr-3 text-primary" />
                  {language === 'en' ? 'Send Us a Message' : 'أرسل لنا رسالة'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-foreground/80 mb-2 block">
                        {t.form.name}
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary/60" />
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="pl-10 bg-background/50 border-border focus:border-primary"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground/80 mb-2 block">
                        {t.form.email}
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary/60" />
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="pl-10 bg-background/50 border-border focus:border-primary"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-foreground/80 mb-2 block">
                        {t.form.phone}
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary/60" />
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="pl-10 bg-background/50 border-border focus:border-primary"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground/80 mb-2 block">
                        {t.form.company}
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary/60" />
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="pl-10 bg-background/50 border-border focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground/80 mb-2 block">
                      {t.form.service}
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary/60" />
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-background/50 border border-border rounded-lg focus:border-primary focus:outline-none text-foreground"
                        required
                      >
                        <option value="">{t.form.servicePlaceholder}</option>
                        {t.form.services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground/80 mb-2 block">
                      {t.form.message}
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="bg-background/50 border-border focus:border-primary resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-luxury w-full"
                  >
                    {isSubmitting ? t.form.submitting : t.form.submit}
                    <Send className={`w-4 h-4 ml-2 ${isSubmitting ? 'animate-spin' : ''}`} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="card-luxury animate-luxury-fade-up delay-300">
              <CardHeader>
                <CardTitle className="text-xl font-playfair text-gold-light">
                  {t.contact.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {t.contact.address.title}
                    </h4>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {t.contact.address.text}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {t.contact.phone.title}
                    </h4>
                    <p className="text-sm text-foreground/70">
                      <a href={`tel:${t.contact.phone.text}`} className="hover:text-primary transition-colors">
                        {t.contact.phone.text}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {t.contact.email.title}
                    </h4>
                    <p className="text-sm text-foreground/70">
                      <a href={`mailto:${t.contact.email.text}`} className="hover:text-primary transition-colors">
                        {t.contact.email.text}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {t.contact.hours.title}
                    </h4>
                    <p className="text-sm text-foreground/70">
                      {t.contact.hours.text}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="card-luxury animate-luxury-fade-up delay-500">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  {language === 'en' ? 'Our Location' : 'موقعنا'}
                </h4>
                <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-foreground/60">
                    <MapPin className="w-12 h-12 mx-auto mb-2 text-primary" />
                    <p className="text-sm">Dubai, UAE</p>
                    <p className="text-xs">Tecom - Al Barsha Heights</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;