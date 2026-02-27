import {
  Rocket,
  Shield,
  Sparkles,
  Zap,
  BarChart3,
  Lock,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Rocket,
      title: 'Rapid Deployment',
      description:
        'Launch your projects in record time with our streamlined workflow and cutting-edge infrastructure.',
      color: 'from-[#992828] to-[#c93030]',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description:
        'Bank-grade security protocols protect your data with end-to-end encryption and compliance standards.',
      color: 'from-[#2A266A] to-[#3d3585]',
    },
    {
      icon: Sparkles,
      title: 'AI-Powered Insights',
      description:
        'Leverage artificial intelligence to unlock actionable insights and make data-driven decisions.',
      color: 'from-[#992828] to-[#c93030]',
    },
    {
      icon: Zap,
      title: 'Lightning Performance',
      description:
        'Experience blazing-fast performance with optimized infrastructure built for scale.',
      color: 'from-[#2A266A] to-[#3d3585]',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description:
        'Comprehensive analytics dashboard with real-time metrics and customizable reporting.',
      color: 'from-[#992828] to-[#c93030]',
    },
    {
      icon: Lock,
      title: 'Complete Control',
      description:
        'Maintain full control over your data and operations with granular permission settings.',
      color: 'from-[#2A266A] to-[#3d3585]',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white via-gray-50 to-white"
      id="features"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-[#992828]/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-[#992828]" />
            <span className="text-[#992828] text-sm font-semibold">
              POWERFUL FEATURES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2A266A] mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive tools and features designed to propel your business
            forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-700 delay-${
                index * 100
              } ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#992828]/20 to-[#2A266A]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#992828]/20 h-full">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2A266A] mb-3 group-hover:text-[#992828] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-6 flex items-center text-[#992828] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm">Learn more</span>
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
