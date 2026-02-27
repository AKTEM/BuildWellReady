import { Briefcase, CheckCircle2, Lightbulb, Handshake, BarChart3 } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function BusinessSolutionsPage() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { setIsVisible(true); window.scrollTo(0, 0); }, []);

  const services = [
    'Investment partnerships',
    'Business consulting',
    'Supply and distribution',
    'Multi-sector project development',
    'Strategic business planning',
    'Market entry and expansion support',
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-[#992828]/10 border border-[#992828]/30 rounded-full px-5 py-2 mb-6">
            <Briefcase className="w-4 h-4 text-[#992828]" />
            <span className="text-[#2A266A] text-sm font-semibold">BUSINESS SOLUTIONS</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#2A266A] mb-6">
            General Business
            <span className="block text-[#992828]">Solutions</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl leading-relaxed">
            Our diversified structure allows us to adapt to emerging opportunities across industries. We collaborate with businesses and investors to create structured, profitable ventures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <img src="/Business.png" alt="Business Solutions" className="rounded-2xl shadow-2xl w-full h-96 object-cover" />
          </div>
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <h2 className="text-3xl font-bold text-[#2A266A] mb-6">We Provide</h2>
            <div className="space-y-4">
              {services.map((s, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#992828] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Lightbulb, title: 'Strategic Insight', desc: 'Data-driven business strategies for sustainable growth.' },
            { icon: Handshake, title: 'Strong Partnerships', desc: 'Collaborative ventures built on trust and shared success.' },
            { icon: BarChart3, title: 'Growth Focus', desc: 'Structured approaches to maximize profitability and scale.' },
          ].map((item, i) => (
            <div key={i} className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#992828] hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#992828] to-[#c93030] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2A266A] mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
