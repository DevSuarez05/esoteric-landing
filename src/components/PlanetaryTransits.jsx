import { Orbit, Sparkles } from 'lucide-react';

const TRANSITS = [
  {
    planet: 'Júpiter en Géminis',
    type: 'Expansión Intelectual',
    degree: '18° 42\'',
    status: 'Directo',
    energy: 'Alta resonancia con nuevos proyectos, conexiones telepáticas y aprendizaje cuántico.',
    accent: 'text-amber-300',
    border: 'border-amber-400/30',
  },
  {
    planet: 'Saturno en Piscis',
    type: 'Estructuración Espiritual',
    degree: '14° 09\'',
    status: 'Estacionario',
    energy: 'Materialización de visiones místicas; disciplina interior y sanación de linajes ancestrales.',
    accent: 'text-astral-cyan',
    border: 'border-astral-cyan/30',
  },
  {
    planet: 'Plutón en Acuario',
    type: 'Renacimiento Colectivo',
    degree: '02° 15\'',
    status: 'Directo',
    energy: 'Trascendencia de viejos paradigmas a través de la síntesis entre tecnología sagrada y conciencia.',
    accent: 'text-purple-300',
    border: 'border-purple-400/30',
  },
  {
    planet: 'Luna en Cuarto Creciente',
    type: 'Fase de Manifestación',
    degree: 'Fase 68%',
    status: 'Creciente',
    energy: 'Momento supremo para consagrar rituales, firmar acuerdos de destino y consultar el oráculo.',
    accent: 'text-gold-accent',
    border: 'border-gold-accent/30',
  },
];

export default function PlanetaryTransits() {
  return (
    <section id="transits" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-cinzel tracking-widest uppercase mb-3">
          <Orbit className="w-3.5 h-3.5" />
          Astrografía en Tiempo Real
        </div>
        <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-wide">
          Planetas & <span className="text-gold-accent drop-shadow-gold-glow">Tránsitos Activos</span>
        </h2>
        <p className="mt-3 text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
          Monitoreo orbital sincrónico con las efemérides celestiales del día de hoy.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TRANSITS.map((transit) => (
          <div
            key={transit.planet}
            className={`rounded-2xl bg-[#0F0B1E]/70 backdrop-blur-md p-6 border ${transit.border} shadow-lg hover:border-gold-accent hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group`}
          >
            <div>
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="font-mono text-gray-400">{transit.degree}</span>
                <span className="px-2 py-0.5 rounded-full bg-white/5 text-[10px] uppercase font-cinzel text-gold-accent font-semibold">
                  {transit.status}
                </span>
              </div>
              <h3 className={`font-cinzel font-bold text-base ${transit.accent} group-hover:text-gold-accent transition-colors`}>
                {transit.planet}
              </h3>
              <p className="text-xs text-gray-300 font-semibold mt-1">
                {transit.type}
              </p>
              <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                {transit.energy}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-gray-400">
              <Sparkles className="w-3 h-3 text-gold-accent" />
              <span>Influencia Armónica</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
