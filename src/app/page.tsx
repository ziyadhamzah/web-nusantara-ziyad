import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Marquee from "@/components/Marquee";
import Destinations from "@/components/Destinations";
import FeaturedPackages from "@/components/FeaturedPackages";
import WhyUs from "@/components/WhyUs";
import AboutPreview from "@/components/AboutPreview";
import GalleryPreview from "@/components/GalleryPreview";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <div className="mt-14 sm:mt-20"><Marquee /></div>
      <Destinations />
      <FeaturedPackages />
      <WhyUs />
      <AboutPreview />
      <GalleryPreview />
      <FinalCTA />
    </>
  );
}
