import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    'Free 14-day trial, no credit card required',
    'Cancel anytime, no questions asked',
    '24/7 dedicated support team',
    'Access to all premium features',
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#2A266A] via-[#3d3585] to-[#992828]"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#992828] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c93030] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform
            <span className="block mt-2">Your Business?</span>
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of successful businesses already using Elevate to
            achieve unprecedented growth and success.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="group bg-white text-[#2A266A] px-8 py-4 rounded-full font-bold text-lg flex items-center space-x-2 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/20">
              <span>Start Your Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300">
              Schedule a Demo
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex items-center space-x-3 text-white text-left transform transition-all duration-700 delay-${
                  index * 100
                } ${
                  isVisible
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-10 opacity-0'
                }`}
              >
                <CheckCircle2 className="w-6 h-6 text-[#992828] bg-white rounded-full flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-gray-300">
            <p className="text-sm">
              Trusted by over 50,000+ businesses worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
