import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="min-h-screen">
    <HomeSection />
    <ServicesSection />
    <ContactSection />
    </main>
    </>
  );
}
