import { Users, ArrowRight, ShieldCheck, Moon } from 'lucide-react';

export default function CommunitySection() {
  return (
    <section id="community" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-b from-[#18112C] to-[#0D0A18] border border-gold-accent/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-center">
        {/* Background celestial ring */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-astral-cyan/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-accent/30 bg-gold-accent/10 text-gold-accent text-xs font-cinzel tracking-widest uppercase mb-4">
            <Users className="w-3.5 h-3.5" />
            Círculo Esotérico Global
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-wide">
            Únete a la Cofradía de las <span className="text-gold-accent drop-shadow-gold-glow">Almas Despiertas</span>
          </h2>

          <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed">
            Más de 50,000 buscadores comparten lecturas en tiempo real, rituales de luna nueva y descifran profecías oraculares en nuestra comunidad privada.
          </p>

          {/* Facebook Social Validation Banner */}
          <div className="mt-8 w-full p-4 sm:p-5 rounded-2xl bg-[#1877F2]/10 border border-[#1877F2]/30 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(24,119,242,0.5)]">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-white">
                  Únete a nuestra comunidad de más de miles de iniciados en Facebook
                </p>
                <p className="text-[11px] text-blue-300 font-mono mt-0.5">
                  ✦ Publicaciones diarias, tránsitos y tiradas en vivo en @tarotnauta
                </p>
              </div>
            </div>

            <a
              href="https://www.facebook.com/tarotnauta"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-[#1877F2] hover:bg-[#166fe5] text-white font-cinzel text-xs font-bold tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(24,119,242,0.4)] hover:shadow-[0_0_30px_rgba(24,119,242,0.7)] flex items-center gap-2 hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <span>Seguir a @tarotnauta en Facebook</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <input
              type="email"
              placeholder="Ingresa tu correo astral..."
              className="w-full sm:w-72 px-4 py-3 rounded-full bg-[#090712] border border-white/20 focus:border-gold-accent text-white placeholder-gray-500 text-sm focus:outline-none"
            />
            <button
              type="button"
              className="w-full sm:w-auto px-7 py-3 rounded-full font-cinzel text-xs font-bold tracking-widest text-black bg-gradient-to-r from-gold-accent to-astral-cyan hover:brightness-110 shadow-gold-glow transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              Unirme al Círculo
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="mt-6 flex items-center gap-6 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-gold-accent" />
              Acceso 100% Gratuito
            </span>
            <span className="flex items-center gap-1.5">
              <Moon className="w-4 h-4 text-astral-cyan" />
              Rituales de Plenilunio
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
