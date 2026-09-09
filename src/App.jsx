import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OracleIA from './components/OracleIA';
import TarotSection from './components/TarotSection';
import PlanetaryTransits from './components/PlanetaryTransits';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-mystic text-white selection:bg-gold-accent selection:text-black relative">
      {/* Floating Glassmorphism Navigation */}
      <Navbar />

      {/* Main Landing Page Flow */}
      <main>
        {/* 1. Hero with dynamic StarBackground canvas */}
        <Hero />

        {/* 2. Oracle AI Altar */}
        <OracleIA />

        {/* 3. 3-Card Tarot Reading with 3D Flip & Confetti */}
        <TarotSection />

        {/* 4. Active Planetary Transits & Astrogram */}
        <PlanetaryTransits />

        {/* 5. Pricing & Celestial Access Plans */}
        <Pricing />

        {/* 6. Testimonials & Ecos del Cosmos */}
        <Testimonials />

        {/* 7. Community & Global Esoteric Circle */}
        <CommunitySection />
      </main>

      {/* 8. Sanctum Footer with Newsletter & Ethics */}
      <Footer />

      {/* 9. Floating WhatsApp VIP Consultation Button */}
      <WhatsAppButton />
    </div>
  );
}
