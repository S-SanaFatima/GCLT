import HeroSlider from '@/components/home/HeroSlider';
import StatsBar from '@/components/home/StatsBar';
import AboutSnippet from '@/components/home/AboutSnippet';
import ProgramHighlights from '@/components/home/ProgramHighlights';
import LatestNews from '@/components/home/LatestNews';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import AffiliationsBar from '@/components/home/AffiliationsBar';
import CTABanner from '@/components/home/CTABanner';
import AnnouncementPopup from '@/components/shared/AnnouncementPopup';

export default function HomePage() {
  return (
    <>
      <AnnouncementPopup />
      <HeroSlider />
      <StatsBar />
      <AboutSnippet />
      <ProgramHighlights />
      <LatestNews />
      <TestimonialsSection />
      <AffiliationsBar />
      <CTABanner />
    </>
  );
}
