import ArtsCarouselContainer from "@/components/homepage/ArtsCarouselContainer";
import HeroSection from "@/components/homepage/HeroSection";
import NewsletterSignup from "@/components/homepage/NewsletterSignup";
import TopArtistsContainer from "@/components/homepage/TopArtistsContainer";

export default function Home() {
  return (
    <div className="space-y-10">
      <HeroSection />
      <ArtsCarouselContainer />
      <TopArtistsContainer />
      <NewsletterSignup />
    </div>
  );
}
