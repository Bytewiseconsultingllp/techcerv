import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TrainingHero from '@/components/training/TrainingHero';
import LogoCarousel from '@/components/training/LogoCarousel';
import CourseFilter from '@/components/training/CourseFilter';
import ScriptInitializer from '@/components/ScriptInitializer';

export default function Training() {
  return (
    <>
      <Header />
      <TrainingHero />
      <LogoCarousel />
      <CourseFilter />
      <Footer />
      <ScriptInitializer />
    </>
  );
}
