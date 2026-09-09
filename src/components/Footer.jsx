import { useState } from 'react';
import { Moon, Sparkles, Send, CheckCircle2, Shield } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  };

  const quickLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Oráculo IA', href: '#oracle' },
    { name: 'Lectura de Tarot', href: '#tarot' },
    { name: 'Tránsitos Planetarios', href: '#transits' },
    { name: 'Membresías & Planes', href: '#pricing' },
    { name: 'Testimonios', href: '#testimonials' },
  ];

  const oracleTools = [
    { name: 'Carta Astral Natal', href: '#oracle' },
    { name: 'Tarot de Marsella 3D', href: '#tarot' },
    { name: 'Calculadora de Tránsitos', href: '#transits' },
    { name: 'Compatibilidad de Signos', href: '#oracle' },
    { name: 'Rituales de Plenilunio', href: '#community' },
  ];

  const legalLinks = [
    { name: 'Privacidad Esotérica & Cuántica', href: '#' },
    { name: 'Términos de Servicio Cósmico', href: '#' },
    { name: 'Código de Ética Oracular', href: '#' },
    { name: 'Política de Cookies Astrales', href: '#' },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-[#06040C] pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-gray-400 overflow-hidden">
      {/* Background ambient subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-purple-900/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Top Newsletter Card */}
        <div className="rounded-3xl bg-gradient-to-r from-[#17102B] via-[#0E0B1A] to-[#12142E] border border-gold-accent/30 p-8 sm:p-12 mb-16 shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-accent/30 bg-gold-accent/10 text-gold-accent text-xs font-cinzel tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Transmisión Semanal Gratuita
            </div>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white tracking-wide">
              Suscríbete al <span className="text-gold-accent drop-shadow-gold-glow">Horóscopo Semanal IA</span>
            </h3>
            <p className="mt-2 text-sm text-gray-300 font-light">
              Recibe predicciones astrológicas personalizadas, alertas de retrógrados y la tirada de la semana directamente en tu buzón antes de cada lunes cósmico.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full sm:w-96">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu.alma@universo.com"
                  className="px-5 py-3 rounded-full bg-[#080512] border border-white/20 focus:border-gold-accent focus:outline-none text-white text-sm placeholder-gray-500 flex-grow"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full font-cinzel text-xs font-bold tracking-widest text-black bg-gradient-to-r from-gold-accent to-astral-cyan hover:brightness-110 shadow-gold-glow transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap active:scale-95"
                >
                  Suscribirme
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2 text-gold-accent font-cinzel text-sm px-6 py-3 rounded-full bg-gold-accent/10 border border-gold-accent/30">
                <CheckCircle2 className="w-5 h-5 text-gold-accent" />
                <span>¡Sintonía confirmada! Tu primer horóscopo viaja por el éter.</span>
              </div>
            )}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-white/10 text-sm">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1E1035] to-[#0B0914] border border-gold-accent/40 flex items-center justify-center text-gold-accent shadow-gold-glow">
                <Moon className="w-4 h-4" />
              </div>
              <span className="font-cinzel text-xl font-bold tracking-[0.2em] text-white">
                TAROTNAUTA
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              El santuario digital donde las tradiciones esotéricas milenarias convergen con la inteligencia artificial para guiar tu evolución espiritual.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/tarotnauta"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Página Oficial de Facebook de TarotNauta"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-gold-accent hover:text-gold-accent flex items-center justify-center transition-colors text-white hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://github.com/DevSuarez05"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub de DevSuarez05"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-gold-accent hover:text-gold-accent flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-gold-accent hover:text-gold-accent flex items-center justify-center transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-gold-accent hover:text-gold-accent flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="#community"
                aria-label="Comunidad Astral"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-gold-accent hover:text-gold-accent flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
            </div>

            {/* Facebook Community Validation Text */}
            <a
              href="https://www.facebook.com/tarotnauta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-gold-accent hover:text-white transition-colors pt-2 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold-accent animate-ping" />
              <span className="group-hover:underline">Comunidad Oficial en Facebook: @tarotnauta</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cinzel text-xs uppercase tracking-[0.2em] text-white font-bold mb-4">
              Navegación Astral
            </h4>
            <ul className="space-y-2.5 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-gold-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Oracle Tools */}
          <div>
            <h4 className="font-cinzel text-xs uppercase tracking-[0.2em] text-white font-bold mb-4">
              Herramientas Cósmicas
            </h4>
            <ul className="space-y-2.5 text-xs">
              {oracleTools.map((tool) => (
                <li key={tool.name}>
                  <a href={tool.href} className="hover:text-gold-accent transition-colors">
                    {tool.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Privacy */}
          <div>
            <h4 className="font-cinzel text-xs uppercase tracking-[0.2em] text-white font-bold mb-4 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-gold-accent" />
              Avisos Esotéricos
            </h4>
            <ul className="space-y-2.5 text-xs">
              {legalLinks.map((legal) => (
                <li key={legal.name}>
                  <a href={legal.href} className="hover:text-gold-accent transition-colors">
                    {legal.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/5 text-[11px] text-gray-500 leading-normal">
              ✦ Las lecturas e interpretaciones generadas por TarotNauta se ofrecen con fines reflexivos, de autoconocimiento y entretenimiento sagrado.
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} TarotNauta. Todos los derechos cósmicos reservados.
          </p>

          <p className="flex items-center gap-1">
            Desarrollado con alquimia digital por{' '}
            <a
              href="https://github.com/DevSuarez05"
              target="_blank"
              rel="noreferrer"
              className="text-gold-accent hover:underline font-semibold"
            >
              DevSuarez05
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
