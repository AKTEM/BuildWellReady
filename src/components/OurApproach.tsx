import {
  BarChart3,
  AlertCircle,
  MessageSquare,
  Rocket,
  TrendingUp,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function OurApproach() {
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

  const approaches = [
    {
      icon: BarChart3,
      title: 'Strategic Planning',
      description:
        'We develop comprehensive strategies aligned with your goals and market opportunities.',
    },
    {
      icon: AlertCircle,
      title: 'Risk Assessment & Mitigation',
      description:
        'Thorough analysis and proactive measures to protect your investments and ventures.',
    },
    {
      icon: MessageSquare,
      title: 'Transparent Communication',
      description:
        'Open dialogue, regular updates, and clear reporting throughout all engagements.',
    },
    {
      icon: Rocket,
      title: 'Structured Execution',
      description:
        'Disciplined implementation with proper oversight and quality control standards.',
    },
    {
      icon: TrendingUp,
      title: 'Long-term Value Optimization',
      description:
        'Focus on sustainable growth and maximizing returns over time.',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#992828]/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 md:mb-20 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-[#2A266A]/10 border border-[#2A266A]/30 rounded-full px-5 py-2 mb-6">
            <BarChart3 className="w-4 h-4 text-[#992828]" />
            <span className="text-[#2A266A] text-sm font-semibold">
              OUR APPROACH
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#2A266A] mb-4 md:mb-6">
            How We Create
            <span className="block text-[#992828]">Lasting Value</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Our business model is built on proven methodologies designed to
            deliver sustainable growth and measurable success.
          </p>
        </div>

        <div className="relative mb-12 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {approaches.map((approach, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 delay-${
                  index * 100
                } ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="relative h-full">
                  <div className="bg-white border-2 border-gray-100 rounded-xl p-6 h-full hover:border-[#992828] hover:shadow-lg transition-all duration-300 hover:scale-105 group flex flex-col">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#992828] to-[#c93030] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <approach.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-[#2A266A] mb-2 text-sm">
                      {approach.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {approach.description}
                    </p>
                  </div>

                  {index < approaches.length - 1 && (
                    <div className="hidden md:block absolute -right-3 top-1/3 z-10">
                      <div className="w-6 h-1 bg-gradient-to-r from-[#992828] to-transparent"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-20">
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <img
              src="/phi.webp"
              alt="Strategic planning"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>

          <div
            className={`transform transition-all duration-1000 delay-400 flex flex-col justify-center ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <h3 className="text-2xl md:text-4xl font-bold text-[#2A266A] mb-4 md:mb-6">
              Our Business Philosophy
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We believe sustainable business growth comes from the perfect
              balance of strategic vision, disciplined execution, and genuine
              partnership with our clients.
            </p>
            <ul className="space-y-4">
              {[
                'Data-driven decision making',
                'Client-centric solutions',
                'Continuous improvement',
                'Ethical business practices',
                'Long-term relationship building',
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#992828] rounded-full"></div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
