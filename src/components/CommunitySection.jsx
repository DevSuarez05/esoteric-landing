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
