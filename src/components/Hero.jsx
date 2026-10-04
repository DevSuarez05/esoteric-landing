import { useState, useRef } from 'react';
import { Sparkles, Eye, ArrowDown, Play, Volume2, Heart, UserMinus, ShieldAlert } from 'lucide-react';
import StarBackground from './StarBackground';

export default function Hero() {
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef(null);

  const handleStartVideo = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = false;
    videoRef.current.currentTime = 0;
    const playPromise = videoRef.current.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setHasStarted(true);
        })
        .catch(() => {
          // If iOS browser blocks unmuted playback on initial gesture, mute and retry
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play();
          }
          setHasStarted(true);
        });
    } else {
      setHasStarted(true);
    }
  };

  return (
    <section
      id="hero"
      className="relative isolate min-h-screen flex flex-col items-center justify-start pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden bg-[#07050E]"
    >
      {/* Dynamic Star Field Canvas (Optimized for 60/120fps mobile) */}
      <StarBackground />

      {/* Sacred Geometry Celestial Grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.05)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_65%,transparent_100%)] pointer-events-none z-[1]"
      />

      {/* Atmospheric Glowing Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[800px] h-[340px] sm:h-[600px] bg-gradient-to-tr from-purple-900/20 via-gold-accent/10 to-transparent rounded-full blur-[100px] sm:blur-[140px] pointer-events-none z-[1]" />
      <div className="absolute top-1/2 left-1/4 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-astral-cyan/5 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center w-full">
        {/* Mystic Status Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-gold-accent/40 bg-[#0B0914]/90 backdrop-blur-md mb-3 sm:mb-5 shadow-gold-glow animate-float">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-accent"></span>
          </span>
          <span className="font-montserrat text-[10px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.2em] text-gold-accent font-semibold">
            🌿 TRATO CON MAGIA BLANCA • CASOS DIFÍCILES • 1ª CONSULTA GRATIS
          </span>
          <Sparkles className="w-3.5 h-3.5 text-astral-cyan shrink-0" />
        </div>

        {/* 1. Main Headline */}
        <h1 className="font-cormorant text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.15] max-w-4xl drop-shadow-2xl">
          Trato con{' '}
          <span className="text-gold-accent drop-shadow-[0_0_20px_rgba(212,175,55,0.35)]">
            Magia Blanca
          </span>{' '}
          los Casos Más Difíciles
        </h1>

        {/* 2. Subtítulo persuasivo con alto contraste */}
        <p className="mt-3 sm:mt-5 text-xs sm:text-base md:text-lg text-gray-200 max-w-3xl leading-relaxed font-serif font-normal px-2">
          Atraigo al ser amado rindiéndolo a su voluntad, sin hacerle daño y sin que nadie se dé cuenta. Alejo al ser indeseable, malos vecinos y enemigos. Curo maleficios, hechizos, brujería y salamientos.{' '}
          <strong className="text-gold-accent font-semibold block sm:inline mt-1 sm:mt-0">
            Tu primera pregunta y diagnóstico son 100% gratuitos.
          </strong>
        </p>

        {/* Quick Flyer Highlights Chips */}
        <div className="mt-3 mb-5 sm:mb-8 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 max-w-3xl px-1">
          <span className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-[11px] sm:text-xs font-cinzel flex items-center gap-1.5">
            <Heart className="w-3 sm:w-3.5 h-3 sm:h-3.5 shrink-0" />
            <span>Atraigo al Ser Amado</span>
          </span>
          <span className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-[11px] sm:text-xs font-cinzel flex items-center gap-1.5">
            <UserMinus className="w-3 sm:w-3.5 h-3 sm:h-3.5 shrink-0" />
            <span>Alejo al Ser Indeseable & Enemigos</span>
          </span>
          <span className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] sm:text-xs font-cinzel flex items-center gap-1.5">
            <ShieldAlert className="w-3 sm:w-3.5 h-3 sm:h-3.5 shrink-0" />
            <span>Curo Maleficios & Brujería</span>
          </span>
          <span className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-gold-accent/15 border border-gold-accent/40 text-gold-accent text-[11px] sm:text-xs font-cinzel font-bold flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 shrink-0" />
            <span>1ª Pregunta Gratis</span>
          </span>
        </div>

        {/* 3. REPRODUCTOR DE VIDEO RESPONSIVO (VERTICAL 9:16 VSL / NATIVO 464x832) */}
        <div className="w-full max-w-[270px] xs:max-w-[310px] sm:max-w-[370px] md:max-w-[400px] relative mx-auto group my-2 sm:my-4">
          {/* Subtle Ambient Glow behind card */}
          <div className="absolute -inset-2 bg-gradient-to-b from-gold-accent/25 via-purple-600/20 to-astral-cyan/20 rounded-[2rem] sm:rounded-[2.5rem] blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

          {/* Video Container Card with Complete Frame */}
          <div
            style={{ aspectRatio: '464 / 832' }}
            className="relative w-full max-h-[52vh] sm:max-h-[68vh] md:max-h-[76vh] rounded-[1.75rem] sm:rounded-[2.25rem] overflow-hidden bg-[#07050E] border-2 border-gold-accent/40 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_25px_rgba(212,175,55,0.2)] flex items-center justify-center mx-auto"
          >
            {/* HTML5 Video with High-Res Hook Poster */}
            <video
              ref={videoRef}
              playsInline
              webkit-playsinline="true"
              controls={hasStarted}
              preload={hasStarted ? 'auto' : 'none'}
              style={{ objectFit: 'contain', width: '100%', height: '100%' }}
              className="w-full h-full object-contain bg-black"
              poster="/video-poster.jpg"
            >
              <source src="/video.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de video HTML5.
            </video>

            {/* Skool-Style Interactive Overlay (Shown before clicking Play) */}
            {!hasStarted && (
              <div
                onClick={handleStartVideo}
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/50 backdrop-blur-[0.5px] flex flex-col items-center justify-between p-4 sm:p-7 cursor-pointer transition-all duration-300 hover:bg-black/20 select-none z-10"
              >
                {/* Top Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B0914]/90 border border-gold-accent/50 text-gold-accent text-[10px] sm:text-[11px] font-montserrat font-semibold tracking-wider shadow-lg backdrop-blur-md">
                  <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-astral-cyan shrink-0" />
                  <span>Mensaje Revelador del Oráculo</span>
                </div>

                {/* Center Pulsating Play Button */}
                <div className="relative flex items-center justify-center my-auto">
                  <span className="absolute w-20 h-20 sm:w-26 sm:h-26 rounded-full bg-gold-accent/30 animate-ping pointer-events-none" />
                  <div className="w-16 h-16 sm:w-22 sm:h-22 rounded-full backdrop-blur-xl bg-gradient-to-br from-white/30 to-white/10 hover:from-white/40 hover:to-white/20 border-2 border-gold-accent shadow-[0_0_30px_rgba(212,175,55,0.7)] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 active:scale-95">
                    <Play className="w-7 h-7 sm:w-9 sm:h-9 text-white fill-gold-accent ml-1 drop-shadow-lg" />
                  </div>
                </div>

                {/* Floating Sound Prompt Badge */}
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:py-2 rounded-full bg-[#0B0914]/95 border border-gold-accent/60 text-gold-accent text-[11px] sm:text-xs font-montserrat font-bold tracking-wider shadow-xl hover:border-gold-accent transition-all animate-bounce">
                  <Volume2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-astral-cyan shrink-0" />
                  <span>Toca para reproducir con audio</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 4. Action Buttons (Debajo del video) */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-5 w-full sm:w-auto px-2">
          <a
            href="#oracle"
            className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-full font-cinzel text-xs sm:text-base font-bold tracking-widest text-black bg-gradient-to-r from-gold-accent via-[#FFDF73] to-gold-accent hover:brightness-110 shadow-gold-glow hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-black group-hover:rotate-12 transition-transform shrink-0" />
            Hacer mi 1ª Pregunta Gratis
          </a>

          <a
            href="https://wa.me/573218352518?text=Hola%20TarotNauta%20%F0%9F%94%AE%2C%20deseo%20agendar%20una%20consulta%20personalizada%20de%20Tarot%20en%20vivo%201%20a%201."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-full font-cinzel text-xs sm:text-base font-semibold tracking-widest text-white backdrop-blur-md bg-white/5 border border-astral-cyan/40 hover:border-astral-cyan hover:bg-astral-cyan/10 shadow-cyan-glow transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95"
          >
            <Eye className="w-4 h-4 text-astral-cyan group-hover:scale-110 transition-transform shrink-0" />
            Consulta Personalizada en Vivo
          </a>
        </div>

        {/* Reassurance text */}
        <p className="mt-3 text-[11px] sm:text-xs text-gray-400 font-sans flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <span>✨ Sin registros complejos</span>
          <span>•</span>
          <span>🔒 100% Confidencial</span>
          <span>•</span>
          <span>💬 Atención directa por WhatsApp</span>
        </p>

        {/* Subtle scroll down indicator */}
        <a
          href="#services"
          aria-label="Ir a los servicios"
          className="mt-6 sm:mt-10 text-gray-400 hover:text-gold-accent transition-colors flex flex-col items-center gap-1 animate-bounce"
        >
          <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-cinzel text-gray-400">
            Ver Servicios Espirituales
          </span>
          <ArrowDown className="w-3.5 h-3.5 text-gold-accent" />
        </a>
      </div>
    </section>
  );
}
