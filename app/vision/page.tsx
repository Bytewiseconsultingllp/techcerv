import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/vision/PageHeader';
import AboutSection from '@/components/vision/AboutSection';
import TimelineSection from '@/components/vision/TimelineSection';
import LeadershipSection from '@/components/vision/LeadershipSection';
import CulturalValues from '@/components/vision/CulturalValues';
import PartnerNetwork from '@/components/vision/PartnerNetwork';
import ScriptInitializer from '@/components/ScriptInitializer';

export default function Vision() {
  return (
    <>
      <Header />
      <PageHeader />
      <AboutSection />
      <TimelineSection />
      <LeadershipSection />
      <CulturalValues />
      <PartnerNetwork />
      <Footer />
      <ScriptInitializer />
    </>
  );
}
