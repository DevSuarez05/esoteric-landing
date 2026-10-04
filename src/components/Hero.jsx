import { useState, useRef } from 'react';
import { Sparkles, Eye, ArrowDown, Play, Volume2, Heart, UserMinus, ShieldAlert } from 'lucide-react';
import StarBackground from './StarBackground';

export default function Hero() {
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef(null);

  const handleStartVideo = () => {
    if (!videoRef.current) return;

    if (!videoRef.current.src || !videoRef.current.src.includes('video.mp4')) {
      videoRef.current.src = '/video.mp4';
    }
    videoRef.current.muted = false;
    videoRef.current.currentTime = 0;
    const playPromise = videoRef.current.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setHasStarted(true);
        })
        .catch(() => {
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
      className="relative isolate min-h-screen flex flex-col items-center justify-start pt-16 sm:pt-28 pb-8 sm:pb-16 px-3.5 sm:px-6 lg:px-8 overflow-x-hidden bg-[#07050E]"
    >
      {/* Dynamic Star Field Canvas (Optimized for 60/120fps mobile) */}
      <StarBackground />

      {/* Sacred Geometry Celestial Grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.05)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_65%,transparent_100%)] pointer-events-none z-[1]"
      />

      {/* Atmospheric Glowing Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[800px] h-[300px] sm:h-[600px] bg-gradient-to-tr from-purple-900/20 via-gold-accent/10 to-transparent rounded-full blur-[90px] sm:blur-[140px] pointer-events-none z-[1]" />
      <div className="absolute top-1/2 left-1/4 w-[220px] sm:w-[350px] h-[220px] sm:h-[350px] bg-astral-cyan/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center w-full">
        {/* Mystic Status Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gold-accent/40 bg-[#0B0914]/90 backdrop-blur-md mb-2 sm:mb-4 shadow-gold-glow animate-float">
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
        <h1 className="font-cormorant text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.15] max-w-4xl drop-shadow-2xl">
          Trato con{' '}
          <span className="text-gold-accent drop-shadow-[0_0_20px_rgba(212,175,55,0.35)]">
            Magia Blanca
          </span>{' '}
          los Casos Más Difíciles
        </h1>

        {/* 2. Subtítulo persuasivo con alto contraste */}
        <p className="mt-1.5 sm:mt-4 text-xs sm:text-base md:text-lg text-gray-200 max-w-2xl leading-relaxed font-serif font-normal px-2">
          <span className="sm:hidden">
            Atraigo al ser amado, alejo enemigos y curo maleficios con magia blanca pura.{' '}
          </span>
          <span className="hidden sm:inline">
            Atraigo al ser amado rindiéndolo a su voluntad, sin hacerle daño y sin que nadie se dé cuenta. Alejo al ser indeseable, malos vecinos y enemigos. Curo maleficios, hechizos, brujería y salamientos.{' '}
          </span>
          <strong className="text-gold-accent font-semibold block sm:inline mt-0.5 sm:mt-0">
            Tu primera pregunta y diagnóstico son 100% gratuitos.
          </strong>
        </p>

        {/* Quick Flyer Highlights Chips */}
        <div className="mt-2 mb-2 sm:mb-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 max-w-2xl px-1">
          <span className="px-2.5 py-0.5 sm:py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-[9px] sm:text-xs font-cinzel flex items-center gap-1">
            <Heart className="w-2.5 sm:w-3 h-2.5 sm:h-3 shrink-0" />
            <span>Atraigo al Ser Amado</span>
          </span>
          <span className="px-2.5 py-0.5 sm:py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-[9px] sm:text-xs font-cinzel flex items-center gap-1">
            <UserMinus className="w-2.5 sm:w-3 h-2.5 sm:h-3 shrink-0" />
            <span>Alejo al Ser Indeseable & Enemigos</span>
          </span>
          <span className="px-2.5 py-0.5 sm:py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[9px] sm:text-xs font-cinzel flex items-center gap-1">
            <ShieldAlert className="w-2.5 sm:w-3 h-2.5 sm:h-3 shrink-0" />
            <span>Curo Maleficios & Brujería</span>
          </span>
          <span className="px-2.5 py-0.5 sm:py-1 rounded-full bg-gold-accent/15 border border-gold-accent/40 text-gold-accent text-[9px] sm:text-xs font-cinzel font-bold flex items-center gap-1 shadow-sm">
            <Sparkles className="w-2.5 sm:w-3 h-2.5 sm:h-3 shrink-0" />
            <span>1ª Pregunta Gratis</span>
          </span>
        </div>

        {/* 3. REPRODUCTOR DE VIDEO RESPONSIVO (VERTICAL 9:16 VSL / NATIVO 464x832) */}
        <div className="w-full max-w-[200px] xs:max-w-[230px] sm:max-w-[340px] md:max-w-[380px] relative mx-auto group my-1 sm:my-3">
          {/* Subtle Ambient Glow behind card */}
          <div className="absolute -inset-1.5 bg-gradient-to-b from-gold-accent/25 via-purple-600/20 to-astral-cyan/20 rounded-[1.75rem] sm:rounded-[2.5rem] blur-lg opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

          {/* Video Container Card with Complete Frame */}
          <div
            style={{ aspectRatio: '464 / 832' }}
            className="relative w-full max-h-[36vh] xs:max-h-[40vh] sm:max-h-[66vh] rounded-[1.5rem] sm:rounded-[2.25rem] overflow-hidden bg-[#07050E] border-2 border-gold-accent/40 shadow-[0_15px_40px_rgba(0,0,0,0.9),0_0_20px_rgba(212,175,55,0.2)] flex items-center justify-center mx-auto"
          >
            {/* HTML5 Video with High-Res Hook Poster - 0 bytes video downloaded until user taps play */}
            <video
              ref={videoRef}
              playsInline
              webkit-playsinline="true"
              controls={hasStarted}
              preload="none"
              style={{ objectFit: 'contain', width: '100%', height: '100%' }}
              className="w-full h-full object-contain bg-black"
              poster="/video-poster.jpg"
            >
              {hasStarted && <source src="/video.mp4" type="video/mp4" />}
              Tu navegador no soporta la reproducción de video HTML5.
            </video>

            {/* Skool-Style Interactive Overlay (Shown before clicking Play) */}
            {!hasStarted && (
              <div
                onClick={handleStartVideo}
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/50 backdrop-blur-[0.5px] flex flex-col items-center justify-between p-3 sm:p-6 cursor-pointer transition-all duration-300 hover:bg-black/20 select-none z-10"
              >
                {/* Top Badge */}
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#0B0914]/90 border border-gold-accent/50 text-gold-accent text-[9px] sm:text-[11px] font-montserrat font-semibold tracking-wider shadow-lg backdrop-blur-md">
                  <Sparkles className="w-3 h-3 text-astral-cyan shrink-0" />
                  <span>Mensaje del Oráculo</span>
                </div>

                {/* Center Pulsating Play Button */}
                <div className="relative flex items-center justify-center my-auto">
                  <span className="absolute w-14 h-14 sm:w-24 sm:h-24 rounded-full bg-gold-accent/30 animate-ping pointer-events-none" />
                  <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full backdrop-blur-xl bg-gradient-to-br from-white/30 to-white/10 hover:from-white/40 hover:to-white/20 border-2 border-gold-accent shadow-[0_0_25px_rgba(212,175,55,0.7)] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 active:scale-95">
                    <Play className="w-5 h-5 sm:w-8 sm:h-8 text-white fill-gold-accent ml-0.5 drop-shadow-lg" />
                  </div>
                </div>

                {/* Floating Sound Prompt Badge */}
                <div className="inline-flex items-center gap-1 px-3 py-1 sm:py-1.5 rounded-full bg-[#0B0914]/95 border border-gold-accent/60 text-gold-accent text-[10px] sm:text-xs font-montserrat font-bold tracking-wider shadow-xl hover:border-gold-accent transition-all animate-bounce">
                  <Volume2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-astral-cyan shrink-0" />
                  <span>Toca para ver con audio</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 4. Action Buttons (Debajo del video) */}
        <div className="mt-3.5 sm:mt-6 flex flex-col sm:flex-row items-center gap-2.5 sm:gap-4 w-full sm:w-auto px-2">
          <a
            href="#oracle"
            className="w-full sm:w-auto px-6 py-3 sm:py-3.5 rounded-full font-cinzel text-xs sm:text-base font-bold tracking-widest text-black bg-gradient-to-r from-gold-accent via-[#FFDF73] to-gold-accent hover:brightness-110 shadow-gold-glow hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-black group-hover:rotate-12 transition-transform shrink-0" />
            Hacer mi 1ª Pregunta Gratis
          </a>

          <a
            href="https://wa.me/573218352518?text=Hola%20TarotNauta%20%F0%9F%94%AE%2C%20deseo%20agendar%20una%20consulta%20personalizada%20de%20Tarot%20en%20vivo%201%20a%201."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 sm:py-3.5 rounded-full font-cinzel text-xs sm:text-base font-semibold tracking-widest text-white backdrop-blur-md bg-white/5 border border-astral-cyan/40 hover:border-astral-cyan hover:bg-astral-cyan/10 shadow-cyan-glow transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95"
          >
            <Eye className="w-4 h-4 text-astral-cyan group-hover:scale-110 transition-transform shrink-0" />
            Consulta Personalizada en Vivo
          </a>
        </div>

        {/* Reassurance text */}
        <p className="mt-2 text-[10px] sm:text-xs text-gray-400 font-sans flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
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
          className="mt-3 sm:mt-6 text-gray-400 hover:text-gold-accent transition-colors flex flex-col items-center gap-0.5 animate-bounce"
        >
          <span className="text-[9px] tracking-[0.25em] uppercase font-cinzel text-gray-400">
            Ver Servicios Espirituales
          </span>
          <ArrowDown className="w-3 h-3 text-gold-accent" />
        </a>
      </div>
    </section>
  );
}
