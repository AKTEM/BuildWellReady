import { Globe, CheckCircle2, Ship, FileCheck, Truck } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ImportExportPage() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { setIsVisible(true); window.scrollTo(0, 0); }, []);

  const services = [
    'International trade facilitation',
    'Product sourcing and procurement',
    'Export of approved goods',
    'Logistics coordination',
    'Customs compliance and documentation',
    'Supply chain optimization',
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-[#992828]/10 border border-[#992828]/30 rounded-full px-5 py-2 mb-6">
            <Globe className="w-4 h-4 text-[#992828]" />
            <span className="text-[#2A266A] text-sm font-semibold">IMPORT & EXPORT</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#2A266A] mb-6">
            Global Trade
            <span className="block text-[#992828]">Made Efficient</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl leading-relaxed">
            We connect markets globally with efficiency and compliance. We ensure smooth cross-border transactions while maintaining regulatory compliance and operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <img src="/Import.jpg" alt="Import Export" className="rounded-2xl shadow-2xl w-full h-96 object-cover" />
          </div>
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <h2 className="text-3xl font-bold text-[#2A266A] mb-6">Our Services Include</h2>
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
            { icon: Ship, title: 'Global Reach', desc: 'Access to international markets with established trade routes.' },
            { icon: FileCheck, title: 'Full Compliance', desc: 'All transactions meet regulatory and legal requirements.' },
            { icon: Truck, title: 'Logistics Excellence', desc: 'Efficient coordination from sourcing to final delivery.' },
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
