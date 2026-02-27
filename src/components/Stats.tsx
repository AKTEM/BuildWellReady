import { useEffect, useRef, useState } from 'react';
import { Users, TrendingUp, Award, Globe } from 'lucide-react';

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    users: 0,
    growth: 0,
    awards: 0,
    countries: 0,
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: Users,
      target: 50000,
      suffix: '+',
      label: 'Active Users',
      description: 'Trust our platform daily',
    },
    {
      icon: TrendingUp,
      target: 300,
      suffix: '%',
      label: 'Growth Rate',
      description: 'Year over year',
    },
    {
      icon: Award,
      target: 15,
      suffix: '+',
      label: 'Industry Awards',
      description: 'Recognition for excellence',
    },
    {
      icon: Globe,
      target: 120,
      suffix: '+',
      label: 'Countries',
      description: 'Global reach',
    },
  ];

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

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = [
      { key: 'users', target: 50000 },
      { key: 'growth', target: 300 },
      { key: 'awards', target: 15 },
      { key: 'countries', target: 120 },
    ].map(({ key, target }) => {
      let current = 0;
      return setInterval(() => {
        current += target / steps;
        if (current >= target) {
          setCounts((prev) => ({ ...prev, [key]: target }));
          clearInterval(intervals[0]);
        } else {
          setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, stepDuration);
    });

    return () => intervals.forEach(clearInterval);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-[#2A266A] via-[#3d3585] to-[#2A266A] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of successful businesses transforming their operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
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
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105 group">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#992828] to-[#c93030] rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">
                    {index === 0 && counts.users.toLocaleString()}
                    {index === 1 && counts.growth}
                    {index === 2 && counts.awards}
                    {index === 3 && counts.countries}
                    <span className="text-[#992828]">{stat.suffix}</span>
                  </div>
                  <div className="text-xl font-semibold text-white mb-2">
                    {stat.label}
                  </div>
                  <div className="text-gray-300 text-sm">{stat.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
