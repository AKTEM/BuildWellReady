import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import OurApproach from './components/OurApproach';
import Partnerships from './components/Partnerships';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import RealEstatePage from './pages/RealEstatePage';
import ConstructionPage from './pages/ConstructionPage';
import ImportExportPage from './pages/ImportExportPage';
import BusinessSolutionsPage from './pages/BusinessSolutionsPage';
import { seoPages } from './utils/seo';
import { usePageMeta } from './hooks/usePageMeta';

function HomePage() {
  usePageMeta(seoPages.home);

  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <OurApproach />
      <Partnerships />
      <FAQ />
      <Testimonials />
      <CTASection />
      <div id="contact"><Contact /></div>
      <Footer />
    </>
  );
}

function ServicePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="pt-20">{children}</div>
      <CTASection />
      <div id="contact"><Contact /></div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white overflow-hidden">
        <Navbar />
        <WhatsAppButton />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/real-estate" element={<ServicePageLayout><RealEstatePage /></ServicePageLayout>} />
          <Route path="/services/construction" element={<ServicePageLayout><ConstructionPage /></ServicePageLayout>} />
          <Route path="/services/import-export" element={<ServicePageLayout><ImportExportPage /></ServicePageLayout>} />
          <Route path="/services/business-solutions" element={<ServicePageLayout><BusinessSolutionsPage /></ServicePageLayout>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
