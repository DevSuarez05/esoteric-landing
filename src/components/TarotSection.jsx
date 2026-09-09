import { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, RotateCw, Eye, Sun, Moon, Compass, Flame, Award } from 'lucide-react';

const DECK = {
  past: [
    {
      id: 'past-1',
      name: 'El Loco',
      numeral: '0',
      title: 'El Salto de Fe',
      meaning: 'Tu pasado estuvo marcado por la osadía de comenzar de nuevo sin ataduras. Un riesgo necesario sembró las semillas del presente.',
      advice: 'Honra las decisiones audaces que te trajeron hasta aquí; su frescura sigue nutriendo tu alma.',
      icon: Sparkles,
      color: 'from-amber-400 to-yellow-600',
    },
    {
      id: 'past-2',
      name: 'El Mago',
      numeral: 'I',
      title: 'El Dominio Elemental',
      meaning: 'Manifestaste con tus propias manos recursos insospechados. Tu pasado fue un taller de alquimia personal.',
      advice: 'Recuerda que posees todas las herramientas elementales para transformar cualquier desafío.',
      icon: Compass,
      color: 'from-cyan-400 to-blue-600',
    },
  ],
  present: [
    {
      id: 'present-1',
      name: 'La Sacerdotisa',
      numeral: 'II',
      title: 'El Templo Secreto',
      meaning: 'En este instante, el velo entre tu mente consciente e inconsciente es mínimo. Las respuestas que buscas no están afuera, sino en tu introspección.',
      advice: 'Silencia el ruido exterior. Escucha tus sueños y las sincronías que se repiten con insistencia.',
      icon: Moon,
      color: 'from-purple-400 to-indigo-600',
    },
    {
      id: 'present-2',
      name: 'La Fuerza',
      numeral: 'VIII',
      title: 'El Poder Sereno',
      meaning: 'Atraviesas una fase de resiliencia dulce pero inquebrantable. Domar tus temores no requiere violencia, sino presencia compasiva.',
      advice: 'El dominio propio es tu mayor magnetismo; mantén tu centro ante la marea.',
      icon: Flame,
      color: 'from-rose-400 to-amber-600',
    },
  ],
  future: [
    {
      id: 'future-1',
      name: 'El Sol',
      numeral: 'XIX',
      title: 'La Victoria Radiante',
      meaning: 'Una época de lucidez plena, bendición y éxito fecundo aguarda en tu horizonte. Todo lo velado saldrá a la luz con esplendor benéfico.',
      advice: 'Acepta los laureles sin culpa. Tu luz servirá de faro y protección para quienes te rodean.',
      icon: Sun,
      color: 'from-yellow-400 via-amber-300 to-gold-accent',
    },
    {
      id: 'future-2',
      name: 'La Estrella',
      numeral: 'XVII',
      title: 'La Guía Providencial',
      meaning: 'Sanación profunda de tus heridas cósmicas y renovación de la fe. Tus proyectos alcanzarán una armonía que parecerá un regalo divino.',
      advice: 'Sigue la estrella que palpita en tu corazón; estás en el camino exacto hacia tu plenitud.',
      icon: Award,
      color: 'from-astral-cyan to-teal-400',
    },
  ],
};

export default function TarotSection() {
  const [cards, setCards] = useState([
    { position: 'Pasado', card: DECK.past[0], isFlipped: false },
    { position: 'Presente', card: DECK.present[0], isFlipped: false },
    { position: 'Futuro', card: DECK.future[0], isFlipped: false },
  ]);

  const [hasCelebrated, setHasCelebrated] = useState(false);

  const handleCardClick = (index) => {
    if (cards[index].isFlipped) return;

    const nextCards = cards.map((c, i) =>
      i === index ? { ...c, isFlipped: true } : c
    );
    setCards(nextCards);

    const allRevealed = nextCards.every((c) => c.isFlipped);
    if (allRevealed && !hasCelebrated) {
      setHasCelebrated(true);

      // Mystic firework & star confetti effect
      confetti({
        particleCount: 140,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#00E5FF', '#9D4EDD', '#FFF5B8', '#FFFFFF'],
        ticks: 250,
      });

      // Second celebratory wave
      setTimeout(() => {
        confetti({
          particleCount: 80,
          angle: 60,
          spread: 60,
          origin: { x: 0.1, y: 0.65 },
          colors: ['#D4AF37', '#00E5FF'],
        });
        confetti({
          particleCount: 80,
          angle: 120,
          spread: 60,
          origin: { x: 0.9, y: 0.65 },
          colors: ['#9D4EDD', '#D4AF37'],
        });
      }, 350);
    }
  };

  const handleReset = () => {
    // Pick random cards for fresh reading
    const randomPast = DECK.past[Math.floor(Math.random() * DECK.past.length)];
    const randomPresent = DECK.present[Math.floor(Math.random() * DECK.present.length)];
    const randomFuture = DECK.future[Math.floor(Math.random() * DECK.future.length)];

    setCards([
      { position: 'Pasado', card: randomPast, isFlipped: false },
      { position: 'Presente', card: randomPresent, isFlipped: false },
      { position: 'Futuro', card: randomFuture, isFlipped: false },
    ]);
    setHasCelebrated(false);
  };

  return (
    <section id="tarot" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Mystic Aura Lights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gold-accent/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-accent/30 bg-gold-accent/5 text-gold-accent text-xs font-cinzel tracking-widest uppercase mb-3">
          <Eye className="w-3.5 h-3.5" />
          Arcanos Mayores del Destino
        </div>
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
          Lectura del Tarot de las{' '}
          <span className="text-gold-accent drop-shadow-gold-glow">3 Cartas</span>
        </h2>
        <p className="mt-3 text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
          Toca cada carta para revelar el tríptico sagrado: lo que te forjó en el
          Pasado, la corriente secreta del Presente y la consagración de tu Futuro.
        </p>
      </div>

      {/* 3 Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 perspective-1000">
        {cards.map((item, index) => {
          const CardIcon = item.card.icon;

          return (
            <div key={item.position} className="flex flex-col items-center">
              {/* Position Tag */}
              <div className="mb-4 text-center">
                <span className="font-cinzel text-xs uppercase tracking-[0.25em] font-bold text-gold-accent px-3 py-1 rounded-full border border-gold-accent/20 bg-[#0B0914]">
                  {item.position}
                </span>
              </div>

              {/* 3D Flippable Card Frame */}
              <div
                onClick={() => handleCardClick(index)}
                className="relative w-full max-w-[280px] h-[440px] cursor-pointer group select-none"
              >
                <motion.div
                  className="w-full h-full transform-style-3d relative"
                  animate={{ rotateY: item.isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                >
                  {/* CARD BACK (Mystic Sacred Geometry) */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-[#1A1230] via-[#0E0B1A] to-[#120B24] border-2 border-gold-accent/40 shadow-[0_15px_35px_rgba(0,0,0,0.8)] p-4 flex flex-col justify-between items-center group-hover:border-gold-accent group-hover:shadow-gold-glow transition-all duration-300">
                    {/* Ornate corner glyphs */}
                    <div className="w-full flex justify-between text-gold-accent/60 text-xs font-cinzel">
                      <span>✦</span>
                      <span>☽</span>
                      <span>✦</span>
                    </div>

                    {/* Central Mystic Eye & Sigil */}
                    <div className="relative w-28 h-28 rounded-full border border-gold-accent/30 flex items-center justify-center bg-black/40 group-hover:scale-105 transition-transform duration-500">
                      <div className="absolute inset-1 rounded-full border border-dashed border-gold-accent/20 animate-spin" style={{ animationDuration: '30s' }} />
                      <div className="w-14 h-14 rounded-full bg-gold-accent/10 flex items-center justify-center">
                        <Eye className="w-7 h-7 text-gold-accent animate-pulse" />
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold-accent font-semibold">
                        Aetheria Tarot
                      </p>
                      <p className="text-[11px] text-gray-400 mt-1 font-sans">
                        Toca para revelar
                      </p>
                    </div>

                    <div className="w-full flex justify-between text-gold-accent/60 text-xs font-cinzel">
                      <span>✦</span>
                      <span>☾</span>
                      <span>✦</span>
                    </div>
                  </div>

                  {/* CARD FRONT (Revealed Arcanum) */}
                  <div
                    className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-b from-[#151026] to-[#0A0714] border-2 border-gold-accent shadow-gold-glow p-5 flex flex-col justify-between text-left"
                    style={{ transform: 'rotateY(180deg)' }}
                  >
                    {/* Top numeral & title */}
                    <div className="border-b border-gold-accent/30 pb-2 flex items-center justify-between">
                      <span className="font-cinzel text-xs tracking-widest text-gold-accent font-bold">
                        ARCANO {item.card.numeral}
                      </span>
                      <span className="text-[10px] uppercase font-cinzel tracking-wider text-astral-cyan">
                        {item.position}
                      </span>
                    </div>

                    {/* Card Hero Illustration Icon */}
                    <div className="my-2 flex flex-col items-center justify-center py-4 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 relative overflow-hidden">
                      <div className={`p-4 rounded-full bg-gradient-to-br ${item.card.color} text-black shadow-lg mb-2`}>
                        <CardIcon className="w-8 h-8" />
                      </div>
                      <h3 className="font-cinzel text-lg font-bold text-white tracking-wide mt-1">
                        {item.card.name}
                      </h3>
                      <p className="text-[11px] text-gold-accent font-cinzel tracking-wider">
                        {item.card.title}
                      </p>
                    </div>

                    {/* Card Meaning */}
                    <div className="space-y-2 flex-grow flex flex-col justify-end text-xs leading-relaxed text-gray-300">
                      <p className="text-gray-200">
                        {item.card.meaning}
                      </p>
                      <div className="p-2.5 rounded-lg bg-black/40 border border-gold-accent/20">
                        <span className="text-[10px] font-cinzel text-gold-accent font-bold block uppercase tracking-wider mb-0.5">
                          Consejo:
                        </span>
                        <p className="text-[11px] text-gray-300 italic">
                          "{item.card.advice}"
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Reset reading / shuffle action */}
      <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          type="button"
          onClick={handleReset}
          className="px-7 py-3 rounded-full text-xs font-cinzel font-bold tracking-widest text-white border border-white/20 hover:border-gold-accent hover:text-gold-accent bg-white/5 hover:bg-white/10 transition-all duration-300 flex items-center gap-2 cursor-pointer active:scale-95 shadow-lg"
        >
          <RotateCw className="w-3.5 h-3.5" />
          Barajar y Nueva Tirada
        </button>

        {hasCelebrated && (
          <div className="inline-flex items-center gap-2 text-xs text-gold-accent font-cinzel tracking-wider animate-in fade-in duration-300">
            <Sparkles className="w-4 h-4 text-gold-accent animate-spin" />
            <span>¡Tríptico Astral Completo! Las estrellas bendicen tu camino.</span>
          </div>
        )}
      </div>
    </section>
  );
}
