import Hero from "@/components/organisms/Hero/Hero";
import AboutDoctor from "@/components/organisms/AboutDoctor/AboutDoctor";
import DoctorBio from "@/components/organisms/DoctorBio/DoctorBio";
import MissionValues from "@/components/organisms/MissionValues/MissionValues";
import ProvideSection from "@/components/organisms/ProvideSection/ProvideSection";
import TransformLife from "@/components/organisms/TransformLife/TransformLife";
import Reviews from "@/components/organisms/Reviews/Reviews";
import Footer from "@/components/organisms/Footer/Footer";

export default function SobreMedicoPage() {
  return (
    <main>
      <Hero
        subtitle={
          <>
            DR. ADILSON SILVESTRE
            <br />
            CRM 31.470 PR
            <br />
            RQE 31.963
            <br />
            GERIATRA EM MARINGÁ E PARANAVAÍ - PR
          </>
        }
        title={
          <>
            Dedicação à
            <br />
            saúde e
            <br />
            longevidade
          </>
        }
        description="Conheça a trajetória profissional e a filosofia de atendimento do Dr. Adilson Silvestre, focada no envelhecimento ativo, na autonomia e na qualidade de vida."
        imageSrc="/images/dr-adilson-sobre.jpeg"
        showScrollytelling={false}
      />
      <DoctorBio />
      <AboutDoctor />
      <MissionValues />
      <ProvideSection />
      <TransformLife />
      <Reviews />
      <Footer />
    </main>
  );
}
