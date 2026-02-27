import { Twitter, Linkedin, Mail, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    navigate('/#' + id);
  };

  const servicePages: { [key: string]: string } = {
    'Real Estate': '/services/real-estate',
    'Construction': '/services/construction',
    'Import & Export': '/services/import-export',
    'Business Solutions': '/services/business-solutions',
  };

  const footerLinks = {
    Services: ['Real Estate', 'Construction', 'Import & Export', 'Business Solutions'],
    Company: ['About Us', 'Our Approach', 'Why Choose Us', 'Partnerships'],
  };

  return (
    <footer className="bg-[#2A266A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-4">
            <div className="mb-4">
              <img
                src="/BUILD-LOGO.png"
                alt="BuildWell Africa Logo"
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering businesses worldwide with innovative solutions that
              drive growth and success.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: '#', label: 'Email' },
                { icon: Phone, href: '#', label: 'Phone' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#992828] transition-all duration-300 hover:scale-110"
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 lg:pl-12">
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.Services.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => navigate(servicePages[link])}
                    className="text-gray-300 hover:text-[#992828] transition-colors duration-300 text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 lg:pl-12">
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.Company.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase().replace(' ', '-'))}
                    className="text-gray-300 hover:text-[#992828] transition-colors duration-300 text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-gray-400 text-sm">
            © 2026 BuildWell Africa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
