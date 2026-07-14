import Hero from "@/components/organisms/Hero/Hero";
import Longevity from "@/components/organisms/Longevity/Longevity";
import PatientCaseVideo from "@/components/organisms/PatientCaseVideo/PatientCaseVideo";
import StaticBanner from "@/components/organisms/StaticBanner/StaticBanner";
import Diseases from "@/components/organisms/Diseases/Diseases";
import ServiceLocations from "@/components/organisms/ServiceLocations/ServiceLocations";
import AboutDoctor from "@/components/organisms/AboutDoctor/AboutDoctor";
import MissionValues from "@/components/organisms/MissionValues/MissionValues";
import Reviews from "@/components/organisms/Reviews/Reviews";
import FAQ from "@/components/organisms/FAQ/FAQ";
import Footer from "@/components/organisms/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Longevity />
      <PatientCaseVideo />
      <StaticBanner />
      <Diseases />
      <ServiceLocations />
      <AboutDoctor />
      <MissionValues />
      <Reviews />
      <FAQ />
      <Footer />
    </main>
  );
}

