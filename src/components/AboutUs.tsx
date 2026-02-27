import { Heart, Eye, Shield, Award, Users, Target, TrendingUp, Zap, Building2, Globe, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function AboutUs() {
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

  const coreValues = [
    { icon: Shield, title: 'Integrity', description: 'We operate with honesty and transparency in all dealings.' },
    { icon: Award, title: 'Professionalism', description: 'We uphold high standards in every project and commitment.' },
    { icon: TrendingUp, title: 'Excellence', description: 'We strive for superior quality and outstanding performance.' },
    { icon: Users, title: 'Accountability', description: 'We take full responsibility for our commitments and results.' },
    { icon: Zap, title: 'Long-term Partnerships', description: 'We focus on building lasting, mutually beneficial relationships.' },
    { icon: Target, title: 'Sustainable Growth', description: 'We create value that endures and benefits all stakeholders.' },
  ];

  return (
    <section id="about" ref={sectionRef} className="relative py-12 md:py-20 bg-white overflow-hidden -mt-16">
      {/* Floating background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#992828]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2A266A]/5 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-[10%] animate-float opacity-[0.06]"><Building2 className="w-16 h-16 text-[#2A266A]" /></div>
      <div className="absolute bottom-40 left-[5%] animate-float-slow opacity-[0.06]"><Globe className="w-20 h-20 text-[#992828]" /></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Highlights bar */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {[
            { icon: TrendingUp, label: 'Multi-Sector', sublabel: 'Expertise' },
            { icon: Target, label: '100%', sublabel: 'Transparency' },
            { icon: Zap, label: 'Proven', sublabel: 'Track Record' },
          ].map((stat, index) => (
            <div key={index} className="flex items-center space-x-4 bg-gradient-to-br from-[#2A266A]/5 to-[#992828]/5 border border-[#2A266A]/10 rounded-xl p-5 md:p-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#992828] to-[#c93030] rounded-lg flex items-center justify-center flex-shrink-0 animate-pulse-soft">
                <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <div className="font-bold text-[#2A266A] text-base md:text-lg">{stat.label}</div>
                <div className="text-sm md:text-sm text-gray-500">{stat.sublabel}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center space-x-2 bg-[#2A266A]/10 border border-[#2A266A]/30 rounded-full px-5 py-2 mb-6">
              <Heart className="w-4 h-4 text-[#992828]" />
              <span className="text-[#2A266A] text-sm font-semibold">ABOUT US</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#2A266A] mb-4 md:mb-6">
              For individuals, businesses
              <span className="block text-[#992828]">and investors</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl">
              Our strength lies in our diversified expertise, professional integrity, and commitment to long-term value creation. Our Mission
              To create sustainable value through strategic investments, quality construction, and efficient global trade operations.

            </p>
          </div>
        </div>

        {/* Vision & Mission - Enhanced */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24">
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative group bg-gradient-to-br from-[#2A266A] to-[#3d3585] rounded-2xl text-white shadow-2xl overflow-hidden h-full">
              {/* Background image */}
              <div className="absolute inset-0">
                <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-full h-full object-cover opacity-20" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#2A266A]/90 to-[#3d3585]/90"></div>
              {/* Animated bg pattern */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-white/10 rounded-full animate-spin-slow"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#992828]/20 rounded-full blur-3xl"></div>

              <div className="relative z-10 p-8 md:p-10">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Eye className="w-8 h-8 text-[#ff6b6b]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-base md:text-lg leading-relaxed text-white/85">
                  To become a leading multi-sector company recognized for reliability, transparency, and innovation. We aspire to be the trusted partner of choice for investors, businesses, and stakeholders seeking sustainable and profitable growth.
                </p>
              </div>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative group bg-gradient-to-br from-[#992828] to-[#c93030] rounded-2xl text-white shadow-2xl overflow-hidden h-full">
              {/* Background image */}
              <div className="absolute inset-0">
                <img src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-full h-full object-cover opacity-20" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#992828]/90 to-[#c93030]/90"></div>
              {/* Animated bg pattern */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-white/10 rounded-full animate-spin-reverse"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#2A266A]/20 rounded-full blur-3xl"></div>

              <div className="relative z-10 p-8 md:p-10">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-base md:text-lg leading-relaxed text-white/85">
                  To create sustainable value through strategic investments, quality construction, and efficient global trade operations. We are committed to delivering reliable, profitable solutions tailored to individuals, businesses, and investors.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className={`mb-16 md:mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
          <h3 className="text-2xl md:text-4xl font-bold text-[#2A266A] mb-8 md:mb-12 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${500 + index * 100}ms` }}>
                <div className="group bg-white border-2 border-gray-100 rounded-xl p-8 h-full hover:border-[#992828] hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#992828] to-[#c93030] rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#2A266A] mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Multi-Sector Expertise - Enhanced with image */}
        <div className="relative bg-gradient-to-r from-[#2A266A] via-[#3d3585] to-[#2A266A] rounded-2xl overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" className="w-full h-full object-cover opacity-15" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#2A266A]/90 via-[#3d3585]/85 to-[#2A266A]/90"></div>
          {/* Animated bg elements */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#992828]/20 rounded-full blur-3xl animate-pulse-soft"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#992828]/15 rounded-full blur-3xl animate-pulse-soft animation-delay-2000"></div>
          <div className="hidden sm:block absolute top-6 right-10 animate-float opacity-[0.06]"><Globe className="w-12 h-12 text-white" /></div>
          <div className="hidden sm:block absolute bottom-6 left-10 animate-float-slow opacity-[0.06]"><Building2 className="w-10 h-10 text-white" /></div>

          <div className="relative z-10 text-center p-8 md:p-12">
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-[#ff6b6b]" />
              <span className="text-white text-sm font-semibold">OUR EXPERTISE</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold mb-4 text-white">Multi-Sector Expertise</h3>
            <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-white/80">
              With a diversified structure and multi-sector expertise, we are positioned to adapt to emerging opportunities across industries while maintaining transparency, efficiency, and accountability in all our operations. Our collaborative approach ensures we deliver measurable, sustainable results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
