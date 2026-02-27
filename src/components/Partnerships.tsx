import { HandshakeIcon, Users, Building, Globe, Factory, BarChart3 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Partnerships() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const partnerTypes = [
    {
      icon: Users,
      title: 'Investors',
      description:
        'Expand your portfolio with access to verified investment opportunities and returns.',
    },
    {
      icon: Building,
      title: 'Property Developers',
      description:
        'Collaborate on residential and commercial development projects across markets.',
    },
    {
      icon: Factory,
      title: 'Suppliers & Manufacturers',
      description:
        'Connect with global markets through our export and distribution networks.',
    },
    {
      icon: Globe,
      title: 'International Trade Partners',
      description:
        'Access cross-border trading opportunities with regulatory compliance support.',
    },
    {
      icon: BarChart3,
      title: 'Consultants & Advisors',
      description:
        'Work with our network on strategic projects and client engagements.',
    },
    {
      icon: Building,
      title: 'Government & Institutions',
      description:
        'Partner with us on public projects and institutional development initiatives.',
    },
  ];

  return (
    <section
      id="partnerships"
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-white overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2A266A]/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-[#992828]/10 border border-[#992828]/30 rounded-full px-5 py-2 mb-6">
            <HandshakeIcon className="w-4 h-4 text-[#992828]" />
            <span className="text-[#2A266A] text-sm font-semibold">
              PARTNERSHIP OPPORTUNITIES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#2A266A] mb-4 md:mb-6">
            Let's Build Profitable
            <span className="block text-[#992828]">Ventures Together</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We welcome strategic partnerships with forward-thinking organizations
            committed to growth and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
          {partnerTypes.map((partner, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="group relative h-full">
                <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 rounded-2xl p-8 h-full hover:border-[#992828] hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#992828] to-[#c93030] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <partner.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2A266A] mb-3">
                    {partner.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {partner.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <img
              src="/Expand.avif"
              alt="Global partnership"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>

          <div
            className={`transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <h3 className="text-2xl md:text-4xl font-bold text-[#2A266A] mb-4 md:mb-6">
              Expand Your Horizons
            </h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Whether you're looking to expand your portfolio, enter new markets,
              or develop strategic alliances, we are ready to collaborate and
              build profitable ventures together.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Access to emerging market opportunities',
                'Experienced team with proven track record',
                'Transparent and structured partnerships',
                'Long-term commitment to mutual growth',
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[#992828] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-gradient-to-r from-[#992828] to-[#c93030] text-white px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300">
              Discuss Partnership
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
