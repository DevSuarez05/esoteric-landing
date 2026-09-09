import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OracleIA from './components/OracleIA';
import TarotSection from './components/TarotSection';
import PlanetaryTransits from './components/PlanetaryTransits';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-mystic text-white selection:bg-gold-accent selection:text-black relative">
      {/* Floating Navigation */}
      <Navbar />

      {/* Main Landing Page Flow */}
      <main>
        {/* Hero with dynamic StarBackground */}
        <Hero />

        {/* Oracle AI Altar */}
        <OracleIA />

        {/* 3-Card Tarot Reading */}
        <TarotSection />

        {/* Real-time Planetary Transits */}
        <PlanetaryTransits />

        {/* Community & Soul Circle */}
        <CommunitySection />
      </main>

      {/* Sanctum Footer */}
      <Footer />
    </div>
  );
}
