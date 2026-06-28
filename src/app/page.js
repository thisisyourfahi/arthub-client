import ArtsCarouselContainer from "@/components/homepage/ArtsCarouselContainer";
import HeroSection from "@/components/homepage/HeroSection";

export default function Home() {
  return (
    <div className="space-y-8">
      <HeroSection />
      <ArtsCarouselContainer></ArtsCarouselContainer>
    </div>
  );
}
