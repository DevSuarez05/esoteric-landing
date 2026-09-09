import { useState, useEffect } from 'react';
import { Sparkles, Moon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Oráculo IA', href: '#oracle' },
    { name: 'Lectura de Tarot', href: '#tarot' },
    { name: 'Planetas & Tránsitos', href: '#transits' },
    { name: 'Comunidad', href: '#community' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-4 transition-all duration-300">
      <nav
        aria-label="Navegación principal"
        className={`max-w-7xl mx-auto rounded-full px-5 sm:px-7 py-3 flex items-center justify-between transition-all duration-300 backdrop-blur-md bg-[#0B0914]/40 border border-white/10 ${
          scrolled
            ? 'shadow-[0_8px_32px_rgba(0,0,0,0.6)] border-gold-accent/30 bg-[#0B0914]/70'
            : 'shadow-lg shadow-black/20'
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-accent rounded-lg py-1"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-[#1E1035] to-[#0B0914] border border-gold-accent/40 shadow-gold-glow group-hover:border-gold-accent group-hover:scale-105 transition-all duration-300">
            <Moon className="w-4 h-4 text-gold-accent absolute group-hover:rotate-45 transition-transform duration-500" />
            <Sparkles className="w-3.5 h-3.5 text-astral-cyan absolute -top-1 -right-1 animate-pulse" />
          </div>
          <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.22em] text-white group-hover:text-gold-accent transition-colors duration-300 drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]">
            AETHERIA
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-gold-accent transition-colors duration-200 relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-accent to-astral-cyan group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#oracle"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold rounded-full group bg-gradient-to-r from-gold-accent via-amber-200 to-astral-cyan shadow-gold-glow hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] active:scale-95 transition-all duration-300"
          >
            <span className="px-5 py-2 transition-all ease-in duration-200 bg-[#0B0914] rounded-full group-hover:bg-opacity-0 text-white group-hover:text-black font-cinzel tracking-wider flex items-center gap-1.5 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-gold-accent group-hover:text-black transition-colors" />
              Revelar mi Destino
            </span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          className="md:hidden p-2 text-gray-300 hover:text-gold-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-accent"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-lg rounded-2xl p-5 backdrop-blur-xl bg-[#0B0914]/90 border border-gold-accent/30 shadow-2xl shadow-black flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-200 hover:text-gold-accent font-medium py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#oracle"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-2.5 rounded-full bg-gradient-to-r from-gold-accent to-astral-cyan text-black font-cinzel font-bold text-xs tracking-wider shadow-gold-glow flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-black" />
            Revelar mi Destino
          </a>
        </div>
      )}
    </header>
  );
}
