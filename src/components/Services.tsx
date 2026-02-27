import { Building2, Home, Globe, Briefcase, ArrowRight, CheckCircle2, Sparkles, TrendingUp, Target } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    { icon: Home, title: 'Real Estate Investment & Property Sales', description: 'We help clients secure profitable property opportunities with confidence.', path: '/services/real-estate', image: '/Real estate.webp', features: ['Residential and commercial property transactions', 'Land acquisition and development', 'Property marketing and brokerage', 'Investment advisory services'] },
    { icon: Building2, title: 'Construction', description: 'We deliver high-quality construction projects on time and within budget.', path: '/services/construction', image: '/Constructio.jpg', features: ['Residential construction', 'Commercial building projects', 'Renovations and remodeling', 'Project management and infrastructure'] },
    { icon: Globe, title: 'Import & Export Services', description: 'We connect markets globally with efficiency and regulatory compliance.', path: '/services/import-export', image: '/Import.jpg', features: ['International trade facilitation', 'Product sourcing and procurement', 'Export of approved goods', 'Logistics coordination'] },
    { icon: Briefcase, title: 'General Business Solutions', description: 'Our diversified structure allows us to adapt to emerging opportunities.', path: '/services/business-solutions', image: '/Business.png', features: ['Investment partnerships', 'Business consulting', 'Supply and distribution', 'Multi-sector project development'] },
  ];

  return (
    <section id="services" ref={sectionRef} className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#992828]/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-[#992828]/10 border border-[#992828]/30 rounded-full px-5 py-2 mb-6">
            <Briefcase className="w-4 h-4 text-[#992828]" />
            <span className="text-[#2A266A] text-sm font-semibold">OUR SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#2A266A] mb-4 md:mb-6">
            Comprehensive Solutions Across
            <span className="block text-[#992828]">Multiple Sectors</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            From real estate to global trade, we provide integrated business solutions designed to drive growth and profitability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-20">
          {services.map((service, index) => (
            <div key={index} className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${index * 150}ms` }}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] h-full flex flex-col group">
                <div className="relative h-64 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A266A]/50 to-transparent"></div>
                  <div className="absolute top-6 right-6 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <service.icon className="w-8 h-8 text-[#992828]" />
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-[#2A266A] mb-3">{service.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-3 mb-8 flex-1">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-[#992828] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to={service.path} className="inline-flex items-center space-x-2 bg-[#992828] hover:bg-[#c93030] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 group/btn self-start">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tailored Solutions - Enhanced */}
        <div className="relative bg-gradient-to-br from-[#2A266A] via-[#3d3585] to-[#2A266A] rounded-2xl p-12 md:p-16 text-white overflow-hidden">
          {/* Animated bg */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute -top-10 -right-10 w-52 h-52 bg-[#992828]/20 rounded-full blur-3xl animate-pulse-soft"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#992828]/15 rounded-full blur-3xl animate-pulse-soft animation-delay-2000"></div>
          <div className="absolute top-8 left-10 animate-float opacity-10"><Target className="w-10 h-10 text-white" /></div>
          <div className="absolute bottom-8 right-10 animate-float-slow opacity-10"><TrendingUp className="w-12 h-12 text-white" /></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 border border-white/10 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-1/4 left-1/4 w-16 h-16 border border-white/5 rounded-xl animate-float-delayed rotate-45"></div>

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-[#ff6b6b]" />
              <span className="text-white text-sm font-semibold">CUSTOMIZED FOR YOU</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Tailored Solutions for Your Success</h3>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-8 text-white/80">
              Whether you're a first-time investor, established business, or international trader, we provide expert guidance and strategic support customized to your unique goals.
            </p>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-[#2A266A] px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
