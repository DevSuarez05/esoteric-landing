import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import OracleIA from './components/OracleIA';
import TarotSection from './components/TarotSection';
import Testimonials from './components/Testimonials';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#07050E] text-white selection:bg-gold-accent selection:text-black relative w-full max-w-full overflow-x-hidden">
      {/* Floating Glassmorphism Navigation */}
      <Navbar />

      {/* Main Landing Page Flow */}
      <main>
        {/* 1. Hero with dynamic StarBackground canvas */}
        <Hero />

        {/* 2. Servicios Espirituales del Volante (Magia Blanca, Amor, Alejamientos, Maleficios) */}
        <ServicesSection />

        {/* Oracle AI Altar - 1ª Pregunta Gratis Lead Magnet */}
        <OracleIA />

        {/* 3-Card Tarot Reading with 3D Flip & Confetti */}
        <TarotSection />

        {/* Testimonials & Ecos del Cosmos */}
        <Testimonials />

        {/* Community & Global Esoteric Circle */}
        <CommunitySection />

        {/* Sanctum Footer with Newsletter & Ethics */}
        <Footer />
      </main>

      {/* Floating WhatsApp VIP Consultation Button */}
      <WhatsAppButton />
    </div>
  );
}
