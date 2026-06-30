import ArtsCarouselContainer from "@/components/homepage/ArtsCarouselContainer";
import HeroSection from "@/components/homepage/HeroSection";
import NewsletterSignup from "@/components/homepage/NewsletterSignup";
import TopArtistsContainer from "@/components/homepage/TopArtistsContainer";

export default function Home() {
  return (
    <div className="space-y-10 max-w-7xl mx-auto">
      <HeroSection />
      <ArtsCarouselContainer />
      <TopArtistsContainer />
      <NewsletterSignup />
    </div>
  );
}
