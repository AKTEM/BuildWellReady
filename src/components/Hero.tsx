import { ArrowRight, Play, Sparkles, Briefcase, HardHat, Ship, Home, Landmark, Truck, Warehouse } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const heroImages = ['/HERO.png'];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2A266A] via-[#1e1b52] to-[#2A266A] pt-20 md:pt-0">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute -top-1/3 -left-1/4 w-[600px] h-[600px] bg-[#992828] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-blob"></div>
        <div className="absolute -bottom-1/3 -right-1/4 w-[500px] h-[500px] bg-[#992828] rounded-full mix-blend-screen filter blur-[100px] opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3d3585] rounded-full filter blur-[150px] opacity-30"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-[10%] w-20 h-20 border-2 border-white/10 rounded-xl animate-float rotate-12"></div>
        <div className="absolute top-40 right-[15%] w-16 h-16 border-2 border-[#992828]/20 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-32 left-[20%] w-12 h-12 bg-[#992828]/10 rounded-lg animate-float-delayed rotate-45"></div>
        <div className="absolute top-1/3 right-[8%] w-24 h-24 border border-white/5 rounded-2xl animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-[30%] w-8 h-8 bg-white/5 rounded-full animate-bounce-gentle"></div>

        {/* Service-related floating icons */}
        <div className="hidden sm:block absolute top-[20%] left-[6%] animate-float opacity-[0.06]">
          <HardHat className="w-10 h-10 text-white" />
        </div>
        <div className="hidden sm:block absolute top-[12%] right-[10%] animate-float-slow opacity-[0.06]">
          <Ship className="w-12 h-12 text-white" />
        </div>
        <div className="hidden sm:block absolute bottom-[25%] left-[12%] animate-float-delayed opacity-[0.06]">
          <Home className="w-9 h-9 text-white" />
        </div>
        <div className="hidden sm:block absolute bottom-[40%] right-[8%] animate-float opacity-[0.06]">
          <Landmark className="w-10 h-10 text-white" />
        </div>
        <div className="hidden sm:block absolute top-[55%] left-[4%] animate-float-slow opacity-[0.06]">
          <Truck className="w-8 h-8 text-white" />
        </div>
        <div className="hidden sm:block absolute top-[35%] right-[18%] animate-float-delayed opacity-[0.06]">
          <Warehouse className="w-9 h-9 text-white" />
        </div>
        <div className="hidden sm:block absolute bottom-[15%] right-[22%] animate-float opacity-[0.06]">
          <Briefcase className="w-8 h-8 text-white" />
        </div>

        {/* Decorative lines */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="30%" x2="100%" y2="70%" stroke="white" strokeWidth="1" />
          <line x1="100%" y1="20%" x2="0" y2="80%" stroke="white" strokeWidth="0.5" />
          <circle cx="50%" cy="50%" r="200" stroke="white" strokeWidth="0.5" fill="none" className="animate-spin-slow" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-[#ff6b6b]" />
              <span className="text-white/90 text-sm font-semibold">Trusted Investment Partner</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
              <span className={`inline-block transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Building value, creating
              </span>
              <span className={`block text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b6b] to-[#ffa8a8] transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                opportunities
              </span>
            </h1>

            <p className={`text-base md:text-xl text-white/70 mb-6 md:mb-8 leading-relaxed max-w-lg transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              and delivering excellence across every venture. We are a diversified investment and development company providing real estate, construction, global trade, and business solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
              <button onClick={() => document.getElementById('partnerships')?.scrollIntoView({ behavior: 'smooth' })} className="group bg-gradient-to-r from-[#992828] to-[#c93030] text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-[#992828]/30 hover:shadow-xl hover:shadow-[#992828]/50">
                <span>Start Partnership</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 hover:bg-white/20 transition-all duration-300">
                <Play className="w-5 h-5" />
                <span>Learn More</span>
              </button>
            </div>
          </div>

          {/* Image carousel with crossfade */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              {/* Glowing ring behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#992828]/30 to-[#2A266A]/30 rounded-3xl blur-2xl animate-pulse-soft"></div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-[500px]">
                {heroImages.map((src, index) => (
                  <img
                    key={src}
                    src={src}
                    alt={`BuildWell Africa - ${index === 0 ? 'Professional business solutions' : 'Construction and services'}`}
                    className={`absolute inset-0 w-full h-full object-contain bg-white/5 backdrop-blur-sm transition-opacity duration-1000 ease-in-out ${currentImage === index ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A266A]/20 to-transparent"></div>
              </div>
              {/* Floating accent cards */}
              <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm font-medium">Tested & Trusted</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 animate-float-delayed">
                <div className="text-center">
                  <div className="text-[#ff6b6b] font-bold text-lg">15+</div>
                  <div className="text-white/70 text-xs">Years</div>
                </div>
              </div>
              {/* Image indicator dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentImage === index ? 'bg-white scale-125' : 'bg-white/40'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}
