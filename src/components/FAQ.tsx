import { ChevronDown, HelpCircle, Building2, Globe, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const faqs = [
  {
    question: 'What services does BuildWell Africa provide?',
    answer: 'We offer a comprehensive range of services including real estate investment & property sales, construction, import & export services, and general business solutions. Our diversified structure allows us to serve clients across multiple sectors.',
  },
  {
    question: 'How can I invest with BuildWell Africa?',
    answer: 'We welcome investors at all levels. You can start by contacting our team to discuss your investment goals, risk appetite, and preferred sectors. We provide transparent investment structures with clear documentation and regular reporting.',
  },
  {
    question: 'Is BuildWell Africa a legally registered company?',
    answer: 'Yes, BuildWell Africa is a fully registered and legally compliant company. We operate with full regulatory compliance and maintain all necessary licenses and certifications across our areas of operation.',
  },
  {
    question: 'What types of properties do you deal with?',
    answer: 'We handle both residential and commercial properties including land acquisition, property development, sales, and investment advisory. Our portfolio spans emerging and established markets with verified opportunities.',
  },
  {
    question: 'How does your import & export service work?',
    answer: 'We facilitate international trade by connecting buyers and sellers across borders. Our services include product sourcing, procurement, logistics coordination, and ensuring full regulatory compliance for all traded goods.',
  },
  {
    question: 'Can I partner with BuildWell Africa?',
    answer: 'Absolutely! We actively seek strategic partnerships with investors, property developers, suppliers, manufacturers, and international trade partners. Contact us to explore collaboration opportunities tailored to mutual growth.',
  },
  {
    question: 'What makes BuildWell Africa different from competitors?',
    answer: 'Our multi-sector expertise, commitment to transparency, legally compliant operations, and focus on long-term partnerships set us apart. We prioritize sustainable growth and accountability in every engagement.',
  },
];

export default function FAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200)' }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2A266A]/95 via-[#3d3585]/90 to-[#992828]/90" />

      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#992828]/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#c93030]/15 rounded-full blur-3xl animate-blob animation-delay-2000" />

      {/* Floating icons */}
      <div className="hidden sm:block absolute top-[15%] left-[6%] animate-float opacity-[0.06]"><Building2 className="w-12 h-12 text-white" /></div>
      <div className="hidden sm:block absolute bottom-[20%] right-[8%] animate-float-slow opacity-[0.06]"><Globe className="w-14 h-14 text-white" /></div>
      <div className="hidden sm:block absolute top-[60%] left-[85%] animate-float-delayed opacity-[0.06]"><TrendingUp className="w-10 h-10 text-white" /></div>

      {/* Geometric shapes */}
      <div className="hidden sm:block absolute top-10 right-[20%] w-24 h-24 border border-white/10 rounded-full animate-spin-slow" />
      <div className="hidden sm:block absolute bottom-16 left-[15%] w-16 h-16 border border-white/5 rounded-xl animate-float rotate-45" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className={`text-center mb-12 md:mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/30 rounded-full px-5 py-2 mb-6 backdrop-blur-sm">
            <HelpCircle className="w-4 h-4 text-[#ff6b6b]" />
            <span className="text-white text-sm font-semibold">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Frequently Asked
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b6b] to-[#ffa8a8]">Questions</span>
          </h2>
          <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our services, partnerships, and how we can help you grow.
          </p>
        </div>

        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${200 + index * 80}ms` }}
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 md:p-6 text-left"
                >
                  <span className="text-white font-semibold text-sm md:text-lg pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#ff6b6b] flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="px-4 md:px-6 pb-4 md:pb-6 text-white/75 text-sm md:text-base leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
