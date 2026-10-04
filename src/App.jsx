import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import WhatsAppButton from './components/WhatsAppButton';

// Code-split below-the-fold components to accelerate initial paint & TTI
const OracleIA = lazy(() => import('./components/OracleIA'));
const TarotSection = lazy(() => import('./components/TarotSection'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const CommunitySection = lazy(() => import('./components/CommunitySection'));
const Footer = lazy(() => import('./components/Footer'));

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

        {/* 3. Lazy loaded below-the-fold modules */}
        <Suspense fallback={<div className="min-h-[200px]" />}>
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
        </Suspense>
      </main>

      {/* Floating WhatsApp VIP Consultation Button */}
      <WhatsAppButton />
    </div>
  );
}
