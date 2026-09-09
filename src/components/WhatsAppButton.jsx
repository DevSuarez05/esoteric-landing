import { useState } from 'react';
import { Sparkles } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/573218352518?text=Hola%20TarotNauta%20%F0%9F%94%AE%2C%20deseo%20agendar%20una%20consulta%20privada%20de%20Tarot%2FOr%C3%A1culo%20VIP.';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Mystic Tooltip */}
      <div
        className={`absolute right-16 mr-3 px-3.5 py-2 rounded-2xl bg-[#0F0C1E]/95 backdrop-blur-md border border-gold-accent/40 shadow-xl shadow-black/60 text-xs font-cinzel text-white whitespace-nowrap transition-all duration-300 pointer-events-none flex items-center gap-1.5 ${
          isHovered
            ? 'opacity-100 translate-x-0 scale-100'
            : 'opacity-0 translate-x-2 scale-95 pointer-events-none'
        }`}
      >
        <Sparkles className="w-3 h-3 text-gold-accent animate-pulse" />
        <span className="font-semibold text-gold-accent">Hablar con el Oráculo VIP 🔮</span>
      </div>

      {/* Pulsing Aura Rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
      <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-20 blur-md pointer-events-none" />

      {/* WhatsApp Action Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar al Oráculo VIP por WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_25px_rgba(37,211,102,0.55)] hover:shadow-[0_6px_35px_rgba(37,211,102,0.8)] hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#0B0914]"
      >
        {/* Official WhatsApp Vector Logo */}
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>

        {/* Online Status Dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-gold-accent border-2 border-[#0B0914]" />
      </a>
    </div>
  );
}
