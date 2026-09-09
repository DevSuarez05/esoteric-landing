import { Sparkles, Eye, ArrowDown } from 'lucide-react';
import StarBackground from './StarBackground';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Dynamic Star Field Canvas */}
      <StarBackground />

      {/* Atmospheric Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] bg-gradient-to-tr from-purple-glow via-[#3b1263]/25 to-transparent rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-10 left-1/4 w-[350px] h-[350px] bg-astral-cyan/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[380px] h-[380px] bg-gold-accent/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      {/* Sacred Geometry Ambient Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[560px] md:w-[720px] h-[340px] sm:h-[560px] md:h-[720px] border border-gold-accent/15 rounded-full pointer-events-none -z-10 animate-spin" style={{ animationDuration: '60s' }}>
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold-accent/60 shadow-[0_0_12px_#D4AF37]" />
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-astral-cyan/60 shadow-[0_0_12px_#00E5FF]" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] sm:w-[420px] md:w-[540px] h-[260px] sm:h-[420px] md:h-[540px] border border-dashed border-astral-cyan/15 rounded-full pointer-events-none -z-10 animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Mystic Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-accent/30 bg-[#0B0914]/80 backdrop-blur-md mb-8 shadow-gold-glow animate-float">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-accent"></span>
          </span>
          <span className="font-cinzel text-xs uppercase tracking-[0.25em] text-gold-accent font-semibold">
            Conexión Astral Activa • Portal 2026
          </span>
          <Sparkles className="w-3.5 h-3.5 text-astral-cyan ml-1" />
        </div>

        {/* Main Headline */}
        <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15] max-w-4xl drop-shadow-2xl">
          Descifra tu Futuro con el{' '}
          <span className="bg-gradient-to-r from-gold-accent via-[#FFE28A] to-astral-cyan bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(212,175,55,0.45)]">
            Oráculo Astral
          </span>{' '}
          e Inteligencia Cósmica
        </h1>

        {/* Subtitle */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
          Donde las revelaciones milenarias de la astrología caldea convergen con
          los modelos neuronales de vanguardia. Desbloquea respuestas cuánticas,
          sincronías universales y tu carta del destino en tiempo real.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <a
            href="#oracle"
            className="w-full sm:w-auto px-8 py-4 rounded-full font-cinzel text-sm sm:text-base font-bold tracking-widest text-black bg-gradient-to-r from-gold-accent via-[#FFDF73] to-gold-accent hover:brightness-110 shadow-gold-glow hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] transition-all duration-300 flex items-center justify-center gap-2.5 group active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" />
            Consultar Oráculo
          </a>

          <a
            href="#tarot"
            className="w-full sm:w-auto px-8 py-4 rounded-full font-cinzel text-sm sm:text-base font-semibold tracking-widest text-white backdrop-blur-md bg-white/5 border border-astral-cyan/40 hover:border-astral-cyan hover:bg-astral-cyan/10 shadow-cyan-glow transition-all duration-300 flex items-center justify-center gap-2.5 group active:scale-95"
          >
            <Eye className="w-4 h-4 text-astral-cyan group-hover:scale-110 transition-transform" />
            Tirar Cartas
          </a>
        </div>

        {/* Celestial Stats Ribbon */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-12 pt-8 border-t border-white/10 w-full max-w-3xl">
          <div className="text-center">
            <p className="font-cinzel text-2xl sm:text-3xl font-bold text-gold-accent">
              +144,000
            </p>
            <p className="text-xs sm:text-sm text-gray-400 mt-1 uppercase tracking-wider">
              Lecturas Cósmicas
            </p>
          </div>
          <div className="text-center">
            <p className="font-cinzel text-2xl sm:text-3xl font-bold text-astral-cyan">
              88
            </p>
            <p className="text-xs sm:text-sm text-gray-400 mt-1 uppercase tracking-wider">
              Constelaciones Alineadas
            </p>
          </div>
          <div className="text-center col-span-2 sm:col-span-1">
            <p className="font-cinzel text-2xl sm:text-3xl font-bold text-purple-300">
              99.4%
            </p>
            <p className="text-xs sm:text-sm text-gray-400 mt-1 uppercase tracking-wider">
              Resonancia Espiritual
            </p>
          </div>
        </div>

        {/* Subtle scroll down indicator */}
        <a
          href="#oracle"
          aria-label="Ir a la siguiente sección"
          className="mt-12 text-gray-400 hover:text-gold-accent transition-colors flex flex-col items-center gap-1.5 animate-bounce"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase font-cinzel text-gray-400">
            Explorar Misterios
          </span>
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
