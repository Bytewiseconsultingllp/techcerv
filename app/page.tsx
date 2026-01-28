import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AICloudSection from '@/components/AICloudSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import PartnersSection from '@/components/PartnersSection';
import FAQSection from '@/components/FAQSection';
import BlogSection from '@/components/BlogSection';
import ScriptInitializer from '@/components/ScriptInitializer';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AICloudSection />
      <ServicesSection />
      <WhyChooseSection />
      <PartnersSection />
      <hr />
      <FAQSection />
      <hr />
      {/* <BlogSection /> */}
      <Footer />
      <ScriptInitializer />
    </>
  );
}
