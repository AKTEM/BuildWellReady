import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  const services = [
    { name: 'Real Estate Investment', path: '/services/real-estate' },
    { name: 'Construction', path: '/services/construction' },
    { name: 'Import & Export', path: '/services/import-export' },
    { name: 'Business Solutions', path: '/services/business-solutions' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3' : 'bg-white/90 backdrop-blur-md py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
            <img src="/buildwell-logo.png" alt="BuildWell Africa Logo" className="h-10 md:h-12 w-auto object-contain" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" onClick={() => { setMobileMenuOpen(false); setServicesOpen(false); }} className="relative font-medium transition-all duration-300 group text-[#2A266A] hover:text-[#992828]">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#992828] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <button onClick={() => scrollToSection('about')} className="relative font-medium transition-all duration-300 group text-[#2A266A] hover:text-[#992828]">
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#992828] transition-all duration-300 group-hover:w-full"></span>
            </button>

            {/* Services Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="relative font-medium transition-all duration-300 group text-[#2A266A] hover:text-[#992828] flex items-center space-x-1"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#992828] transition-all duration-300 group-hover:w-full"></span>
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 animate-fadeIn">
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45"></div>
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => { setServicesOpen(false); setMobileMenuOpen(false); }}
                      className="block px-5 py-3 text-[#2A266A] hover:bg-[#992828]/5 hover:text-[#992828] transition-all duration-200 font-medium text-sm"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <button
                      onClick={() => { setServicesOpen(false); scrollToSection('services'); }}
                      className="block w-full text-left px-5 py-3 text-[#992828] hover:bg-[#992828]/5 transition-all duration-200 font-semibold text-sm"
                    >
                      View All Services →
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button onClick={() => scrollToSection('contact')} className="relative font-medium transition-all duration-300 group text-[#2A266A] hover:text-[#992828]">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#992828] transition-all duration-300 group-hover:w-full"></span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-[#992828] to-[#c93030] text-white px-6 py-2.5 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#992828]/50"
            >
              Get Started
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="text-[#2A266A]" /> : <Menu className="text-[#2A266A]" />}
          </button>
        </div>

        {/* Mobile menu overlay */}
        <div
          className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
        </div>
        <div
          className={`md:hidden fixed top-0 right-0 w-[280px] shadow-2xl z-50 transform transition-transform duration-400 ease-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
          style={{ backgroundColor: '#ffffff', height: '100vh' }}
        >
          {/* Close button */}
          <div className="flex justify-end p-5">
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <X className="w-5 h-5 text-[#2A266A]" />
            </button>
          </div>

          <div className="px-6 space-y-1">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block text-[#2A266A] hover:text-[#992828] font-medium py-3 px-4 rounded-xl hover:bg-[#992828]/5 transition-all duration-200">
              Home
            </Link>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-[#2A266A] hover:text-[#992828] font-medium py-3 px-4 rounded-xl hover:bg-[#992828]/5 transition-all duration-200">
              About Us
            </button>

            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full text-[#2A266A] hover:text-[#992828] font-medium py-3 px-4 rounded-xl hover:bg-[#992828]/5 transition-all duration-200"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileServicesOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="ml-3 pl-4 border-l-2 border-[#992828]/20 space-y-1 mt-2 mb-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-[#2A266A]/80 hover:text-[#992828] font-medium py-2.5 px-3 rounded-lg hover:bg-[#992828]/5 transition-all duration-200 text-sm"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-[#2A266A] hover:text-[#992828] font-medium py-3 px-4 rounded-xl hover:bg-[#992828]/5 transition-all duration-200">
              Contact
            </button>

            <div className="pt-4">
              <button onClick={() => scrollToSection('contact')} className="w-full bg-gradient-to-r from-[#992828] to-[#c93030] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
