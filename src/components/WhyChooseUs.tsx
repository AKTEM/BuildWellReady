import { CheckCircle, Zap, Network, Shield, TrendingUp, Award } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function useCountUp(target: number, isVisible: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!isVisible || hasRun.current) return;
    hasRun.current = true;
    const steps = 60;
    const stepDuration = duration / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += target / steps;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);
    return () => clearInterval(interval);
  }, [isVisible, target, duration]);

  return count;
}

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = useCountUp(1000, statsVisible);
  const satisfaction = useCountUp(98, statsVisible);
  const years = useCountUp(15, statsVisible);

  const reasons = [
    { icon: Shield, title: 'Legally Registered & Compliant', description: 'Operating with full regulatory compliance and legal standing across all jurisdictions.', image: '/compliance.jpg' },
    { icon: TrendingUp, title: 'Multi-Sector Expertise', description: 'Proven track record across real estate, construction, trade, and diverse business verticals.', image: '/multi.jpg' },
    { icon: Zap, title: 'Professional Project Management', description: 'Disciplined execution, transparent timelines, and consistent delivery on all commitments.', image: '/project-management.avif' },
    { icon: Network, title: 'Transparent Transactions', description: 'Clear communication, documented processes, and complete visibility into all operations.', image: '/transparent tran.jpg' },
    { icon: Award, title: 'Strong Business Network', description: 'Connected with leading institutions, investors, and industry partners globally.', image: '/Network main.jpeg' },
    { icon: CheckCircle, title: 'Client Satisfaction Commitment', description: 'Dedicated support, personalized service, and long-term partnership focus.', image: '/Customer satisfaction.webp' },
  ];

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#2A266A]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#992828]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 md:mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-[#992828]/10 border border-[#992828]/30 rounded-full px-5 py-2 mb-6">
            <Award className="w-4 h-4 text-[#992828]" />
            <span className="text-[#2A266A] text-sm font-semibold">WHY CHOOSE US</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#2A266A] mb-4 md:mb-6">
            Choosing the Right Partner
            <span className="block text-[#992828]">Critical to Your Success</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We combine experience, integrity, and strategic execution to deliver measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
          {reasons.map((reason, index) => (
            <div key={index} className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="group relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#992828]/5 to-[#2A266A]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white border-2 border-gray-100 rounded-2xl overflow-hidden h-full hover:border-[#992828] transition-all duration-300 hover:shadow-xl">
                  <div className="h-40 overflow-hidden">
                    <img src={reason.image} alt={reason.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-t from-white/80 to-transparent"></div>
                  </div>
                  <div className="p-6 md:p-8 -mt-8 relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#992828] to-[#c93030] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <reason.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-[#2A266A] mb-3">{reason.title}</h3>
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">{reason.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats with countup - Enhanced */}
        <div ref={statsRef} className="relative bg-gradient-to-r from-[#2A266A] via-[#3d3585] to-[#2A266A] rounded-2xl p-12 md:p-16 overflow-hidden">
          {/* Animated bg elements */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#992828]/20 rounded-full blur-3xl animate-pulse-soft"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#992828]/15 rounded-full blur-3xl animate-pulse-soft animation-delay-2000"></div>
          <div className="absolute top-8 right-12 animate-float opacity-10"><TrendingUp className="w-10 h-10 text-white" /></div>
          <div className="absolute bottom-8 left-12 animate-float-slow opacity-10"><Award className="w-10 h-10 text-white" /></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-white/10 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-1/3 right-1/3 w-12 h-12 border border-white/5 rounded-xl animate-float-delayed rotate-45"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            {[
              { value: projects, suffix: '+', label: 'Successful Projects' },
              { value: satisfaction, suffix: '%', label: 'Client Satisfaction' },
              { value: years, suffix: '+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index} className={`py-8 transform transition-all duration-700 ${statsVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-90'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                <div className="relative inline-block">
                  <div className="text-5xl md:text-6xl font-bold mb-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b6b] to-[#ffa8a8]">{stat.value.toLocaleString()}</span>
                    <span className="text-[#ff6b6b]">{stat.suffix}</span>
                  </div>
                  {/* Glow effect behind number */}
                  <div className="absolute inset-0 bg-[#992828]/20 blur-2xl rounded-full -z-10"></div>
                </div>
                <div className="text-lg text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
