import ClinicaSection from "@/components/ClinicaSection";
import ContactSection from "@/components/ContactSection";
import EsteticaSection from "@/components/EsteticaSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import WhatsAppFloating from "@/components/WhatsAppFloating";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <HeroSection />
        <ClinicaSection />
        <EsteticaSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloating />
    </>
  );
}
