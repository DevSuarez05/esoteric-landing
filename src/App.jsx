import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OracleIA from './components/OracleIA';
import TarotSection from './components/TarotSection';
import ServicesSection from './components/ServicesSection';
import Testimonials from './components/Testimonials';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-mystic text-white selection:bg-gold-accent selection:text-black relative w-full max-w-full overflow-x-clip">
      {/* Floating Glassmorphism Navigation */}
      <Navbar />

      {/* Main Landing Page Flow */}
      <main>
        {/* 1. Hero with dynamic StarBackground canvas */}
        <Hero />

        {/* 2. Servicios Espirituales del Volante (Magia Blanca, Amor, Alejamientos, Maleficios) */}
        <ServicesSection />

        {/* 3. Oracle AI Altar - 1ª Pregunta Gratis Lead Magnet */}
        <OracleIA />

        {/* 4. 3-Card Tarot Reading with 3D Flip & Confetti */}
        <TarotSection />

        {/* 5. Testimonials & Ecos del Cosmos */}
        <Testimonials />

        {/* 6. Community & Global Esoteric Circle */}
        <CommunitySection />
      </main>

      {/* 8. Sanctum Footer with Newsletter & Ethics */}
      <Footer />

      {/* 9. Floating WhatsApp VIP Consultation Button */}
      <WhatsAppButton />
    </div>
  );
}
