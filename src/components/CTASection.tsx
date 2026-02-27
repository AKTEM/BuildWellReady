import { ArrowRight, Zap, Building2, Globe, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden">
      {/* Background image with low opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200)' }}
      ></div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2A266A]/95 via-[#3d3585]/90 to-[#992828]/90"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#992828]/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#c93030]/15 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      {/* Floating icons */}
      <div className="absolute top-[15%] left-[8%] animate-float opacity-10"><Building2 className="w-12 h-12 text-white" /></div>
      <div className="absolute bottom-[20%] right-[10%] animate-float-slow opacity-10"><Globe className="w-14 h-14 text-white" /></div>
      <div className="absolute top-[60%] left-[80%] animate-float-delayed opacity-10"><TrendingUp className="w-10 h-10 text-white" /></div>

      {/* Geometric shapes */}
      <div className="absolute top-10 right-[20%] w-24 h-24 border border-white/10 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-16 left-[15%] w-16 h-16 border border-white/5 rounded-xl animate-float rotate-45"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/30 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-[#ff6b6b]" />
            <span className="text-white text-sm font-semibold">Take Action Today</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight">
            Ready to Invest, Build,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b6b] to-[#ffa8a8]">
              or Expand Your Business?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Partner with a company committed to excellence, transparency, and long-term growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="group bg-white text-[#2A266A] px-10 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <span>Contact Us Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
