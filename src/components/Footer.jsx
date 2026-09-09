import { Moon, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#07050E] py-12 px-4 sm:px-6 lg:px-8 text-center text-xs text-gray-500">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gold-accent/10 border border-gold-accent/40 flex items-center justify-center text-gold-accent">
            <Moon className="w-3.5 h-3.5" />
          </div>
          <span className="font-cinzel text-lg font-bold tracking-widest text-white">
            AETHERIA
          </span>
        </div>

        <p className="flex items-center justify-center gap-1 text-gray-400">
          Diseñado con sabiduría ancestral e inteligencia cósmica
          <Sparkles className="w-3.5 h-3.5 text-gold-accent inline" />
        </p>

        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Aetheria Sanctum. Todos los misterios reservados.
        </p>
      </div>
    </footer>
  );
}
