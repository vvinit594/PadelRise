import { LandingHero } from "@/components/landing/LandingHero";
import { FeatureCards } from "@/components/landing/FeatureCards";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-200px)] flex-col">
      <LandingHero />
      <FeatureCards />
    </div>
  );
}
