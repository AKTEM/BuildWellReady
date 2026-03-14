import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#992828]/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#992828]/10 border border-[#992828]/30 rounded-full px-5 py-2 mb-6">
            <Mail className="w-4 h-4 text-[#992828]" />
            <span className="text-[#2A266A] text-sm font-semibold">GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#2A266A] mb-4 md:mb-6">
            Ready to Work
            <span className="block text-[#992828]">With Us?</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Contact us today to discuss how we can support your goals and help
            you achieve sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: MapPin,
              label: 'Office Address',
              value: '14 Ogunkoya Street, Ikosi Ketu, Lagos',
            },
            {
              icon: Phone,
              label: 'Phone',
              value: '0816 900 5556',
            },
            {
              icon: Mail,
              label: 'Email',
              value: 'info@buildwellafrica.com',
            },
            {
              icon: Clock,
              label: 'Business Hours',
              value: 'Monday – Friday | 8:00 AM – 5:00 PM',
            },
          ].map((contact, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#992828] hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#992828] to-[#c93030] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <contact.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-[#2A266A] mb-2">{contact.label}</h3>
              <p className="text-gray-700">{contact.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img
              src="/footer.avif"
              alt="Contact us"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#2A266A] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#992828] focus:outline-none transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#2A266A] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#992828] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#2A266A] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#992828] focus:outline-none transition-colors"
                  placeholder="+2348000000000"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#2A266A] mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#992828] focus:outline-none transition-colors"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="real-estate">Real Estate Inquiry</option>
                  <option value="construction">Construction Services</option>
                  <option value="trade">Import & Export</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#2A266A] mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#992828] focus:outline-none transition-colors resize-none h-32"
                placeholder="Tell us about your inquiry..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#992828] to-[#c93030] text-white py-4 rounded-full font-semibold flex items-center justify-center space-x-2 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#992828]/50"
            >
              <span>Send Message</span>
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
