import { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  RotateCw,
  Eye,
  Sun,
  Moon,
  Compass,
  Flame,
  Award,
  Heart,
  Globe,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Lock,
  CheckCircle2,
} from 'lucide-react';

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
    {
      id: 'past-3',
      name: 'La Rueda de la Fortuna',
      numeral: 'X',
      title: 'El Giro del Destino',
      meaning: 'Atravesaste un giro repentino de circunstancias que cambió tus planes pero te colocó en el sendero correcto.',
      advice: 'Acepta que el cambio fue una intervención cósmica necesaria para tu evolución.',
      icon: RotateCw,
      color: 'from-purple-400 to-amber-500',
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
    {
      id: 'present-3',
      name: 'Los Enamorados',
      numeral: 'VI',
      title: 'La Encrucijada del Alma',
      meaning: 'Te encuentras frente a una decisión que involucra lealtades afectivas o alineación con tus valores más íntimos.',
      advice: 'No elijas por miedo a perder; elige por aquello que encienda tu verdad auténtica.',
      icon: Heart,
      color: 'from-pink-500 to-rose-400',
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
    {
      id: 'future-3',
      name: 'El Mundo',
      numeral: 'XXI',
      title: 'La Consagración Total',
      meaning: 'Cierre triunfal de un ciclo kármico extenso. Se abren puertas en el extranjero, mudanzas o realización plena.',
      advice: 'Prepárate para recibir el fruto maduro de tus esfuerzos sin mirar atrás.',
      icon: Globe,
      color: 'from-emerald-400 to-cyan-500',
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
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const synthesisRef = useRef(null);

  const handleCardClick = (index) => {
    if (cards[index].isFlipped) return;

    const nextCards = cards.map((c, i) =>
      i === index ? { ...c, isFlipped: true } : c
    );
    setCards(nextCards);

    const allRevealed = nextCards.every((c) => c.isFlipped);
    if (allRevealed && !hasCelebrated) {
      setHasCelebrated(true);
      setIsSynthesizing(true);

      // Mystic confetti celebration
      confetti({
        particleCount: 120,
        spread: 85,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#00E5FF', '#9D4EDD', '#FFF5B8', '#FFFFFF'],
        ticks: 240,
      });

      // Synthesis delay for AI effect
      setTimeout(() => {
        setIsSynthesizing(false);
        synthesisRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 900);
    }
  };

  const handleReset = () => {
    const randomPast = DECK.past[Math.floor(Math.random() * DECK.past.length)];
    const randomPresent = DECK.present[Math.floor(Math.random() * DECK.present.length)];
    const randomFuture = DECK.future[Math.floor(Math.random() * DECK.future.length)];

    setCards([
      { position: 'Pasado', card: randomPast, isFlipped: false },
      { position: 'Presente', card: randomPresent, isFlipped: false },
      { position: 'Futuro', card: randomFuture, isFlipped: false },
    ]);
    setHasCelebrated(false);
    setIsSynthesizing(false);
  };

  const pastCard = cards[0].card;
  const presentCard = cards[1].card;
  const futureCard = cards[2].card;
  const allCardsFlipped = cards.every((c) => c.isFlipped);

  // WhatsApp prefilled message containing the 3 drawn cards
  const whatsappTarotUrl = `https://wa.me/573218352518?text=${encodeURIComponent(
    `Hola TarotNauta 🔮, en la web realicé mi tirada de 3 cartas y obtuve:\n• Pasado: ${pastCard.name}\n• Presente: ${presentCard.name}\n• Futuro: ${futureCard.name}\n\nDeseo agendar mi Consulta Personalizada en vivo con un Maestro Tarotista para profundizar en el desenlace, fechas y nombres involucrados.`
  )}`;

  return (
    <section id="tarot" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20 overflow-hidden">
      {/* Mystic Aura Lights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gold-accent/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-accent/30 bg-gold-accent/5 text-gold-accent text-xs font-cinzel tracking-widest uppercase mb-3 shadow-gold-glow">
          <Eye className="w-3.5 h-3.5" />
          Tirada Oracular Interactiva • 100% Gratuita
        </div>
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
          Elige tus 3 Cartas y Descubre tu <span className="text-gold-accent drop-shadow-gold-glow">Destino</span>
        </h2>
        <p className="mt-3 text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Toca cada carta para revelar tu tríptico sagrado. La inteligencia cósmica analizará tu combinación para entregarte un diagnóstico preliminar y guiarte a tu consulta en vivo.
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
                <span className="font-cinzel text-xs uppercase tracking-[0.25em] font-bold text-gold-accent px-3.5 py-1 rounded-full border border-gold-accent/25 bg-[#0B0914] shadow-sm">
                  {item.position}
                </span>
              </div>

              {/* 3D Flippable Card Frame */}
              <div
                onClick={() => handleCardClick(index)}
                className="relative w-full max-w-[280px] h-[440px] cursor-pointer group select-none"
              >
                <div
                  className="w-full h-full transform-style-3d relative transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                  style={{ transform: item.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                >
                  {/* CARD BACK */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-[#1A1230] via-[#0E0B1A] to-[#120B24] border-2 border-gold-accent/40 shadow-[0_15px_35px_rgba(0,0,0,0.8)] p-4 flex flex-col justify-between items-center group-hover:border-gold-accent group-hover:shadow-gold-glow transition-all duration-300">
                    <div className="w-full flex justify-between text-gold-accent/60 text-xs font-cinzel">
                      <span>✦</span>
                      <span>☽</span>
                      <span>✦</span>
                    </div>

                    <div className="relative w-28 h-28 rounded-full border border-gold-accent/30 flex items-center justify-center bg-black/40 group-hover:scale-105 transition-transform duration-500">
                      <div className="absolute inset-1 rounded-full border border-dashed border-gold-accent/20 animate-spin" style={{ animationDuration: '30s' }} />
                      <div className="w-14 h-14 rounded-full bg-gold-accent/10 flex items-center justify-center">
                        <Eye className="w-7 h-7 text-gold-accent animate-pulse" />
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold-accent font-semibold">
                        TarotNauta
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

                  {/* CARD FRONT */}
                  <div
                    className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-b from-[#151026] to-[#0A0714] border-2 border-gold-accent shadow-gold-glow p-5 flex flex-col justify-between text-left"
                    style={{ transform: 'rotateY(180deg)' }}
                  >
                    <div className="border-b border-gold-accent/30 pb-2 flex items-center justify-between">
                      <span className="font-cinzel text-xs tracking-widest text-gold-accent font-bold">
                        ARCANO {item.card.numeral}
                      </span>
                      <span className="text-[10px] uppercase font-cinzel tracking-wider text-astral-cyan">
                        {item.position}
                      </span>
                    </div>

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
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* SYNTHESIS & CONVERSION BLOCK UPON COMPLETING THE 3 CARDS */}
      {isSynthesizing && (
        <div className="mt-12 text-center py-8">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#120B24] border border-gold-accent/40 text-gold-accent font-cinzel text-sm animate-pulse">
            <Sparkles className="w-4 h-4 text-astral-cyan animate-spin" />
            <span>La Inteligencia Cósmica está decodificando tu combinación...</span>
          </div>
        </div>
      )}

      {allCardsFlipped && !isSynthesizing && (
        <div
          ref={synthesisRef}
          className="mt-14 max-w-3xl mx-auto rounded-3xl p-6 sm:p-9 bg-gradient-to-b from-[#1C133B] via-[#120A24] to-[#0A0614] border-2 border-gold-accent shadow-[0_0_50px_rgba(212,175,55,0.4)] relative overflow-hidden animate-in fade-in duration-500"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-gold-accent/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-44 h-44 bg-astral-cyan/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Badge */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-white/10">
            <span className="px-3.5 py-1 rounded-full bg-gold-accent text-black font-cinzel text-[11px] font-black tracking-widest uppercase flex items-center gap-1.5 shadow-md">
              <Sparkles className="w-3.5 h-3.5" />
              Lectura Preliminar de IA
            </span>
            <span className="text-xs text-astral-cyan font-mono">
              Tríptico: {pastCard.name} → {presentCard.name} → {futureCard.name}
            </span>
          </div>

          <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
            Diagnóstico de tu Tirada: Tu Transformación Astral
          </h3>

          <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-light mb-4">
            Tu camino se abrió con la fuerza de <strong className="text-gold-accent font-medium">{pastCard.name}</strong>, atraviesa en este momento la prueba de <strong className="text-gold-accent font-medium">{presentCard.name}</strong> y se proyecta hacia la energía definitoria de <strong className="text-gold-accent font-medium">{futureCard.name}</strong>.
          </p>

          {/* Cliffhanger / Hook */}
          <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-gold-accent/30 mb-6">
            <div className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-gold-accent shrink-0 mt-0.5" />
              <div>
                <span className="text-xs uppercase tracking-wider font-cinzel font-bold text-gold-accent block mb-1">
                  ⚠️ Revelación Inconclusa del Arcano Futuro
                </span>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Las cartas señalan que la bendición de <strong>{futureCard.name}</strong> está condicionada por un bloqueo kármico o persona cercana que no estás considerando. La lectura automática de la web no puede ver los detalles íntimos: <span className="text-white font-medium">para revelar nombres concretos, fechas clave de este mes y recibir tu tirada de 78 cartas en vivo</span>, tu Maestro Tarotista te espera.
                </p>
              </div>
            </div>
          </div>

          {/* Consultation Guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 text-xs text-gray-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold-accent shrink-0" />
              <span>Sesión privada 1 a 1 en vivo</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold-accent shrink-0" />
              <span>Preguntas ilimitadas sobre tu caso</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold-accent shrink-0" />
              <span>Tus 3 cartas ya están registradas</span>
            </div>
          </div>

          {/* Dominant Primary WhatsApp CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={whatsappTarotUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex-1 py-4 px-6 rounded-full font-cinzel font-bold text-sm sm:text-base tracking-wider uppercase text-black bg-gradient-to-r from-gold-accent via-[#FFE28A] to-[#25D366] hover:brightness-110 shadow-gold-glow hover:shadow-[0_0_35px_rgba(37,211,102,0.6)] active:scale-98 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-black fill-black" />
              <span>Profundizar esta Tirada por WhatsApp</span>
              <ArrowRight className="w-4 h-4 text-black ml-1" />
            </a>

            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto py-3.5 px-6 rounded-full text-xs font-cinzel font-semibold tracking-wider text-gray-300 hover:text-white border border-white/20 hover:border-gold-accent/40 bg-white/5 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <RotateCw className="w-3.5 h-3.5" />
              Barajar Otra Vez
            </button>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-gray-400">
            <ShieldCheck className="w-4 h-4 text-gold-accent" />
            <span>El mensaje de WhatsApp enviará automáticamente tus 3 cartas para que el maestro continúe tu lectura sin esperas.</span>
          </div>
        </div>
      )}

      {/* Default barajar button when not all flipped yet */}
      {!allCardsFlipped && (
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={handleReset}
            className="px-7 py-3 rounded-full text-xs font-cinzel font-bold tracking-widest text-white border border-white/20 hover:border-gold-accent hover:text-gold-accent bg-white/5 hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer active:scale-95 shadow-lg"
          >
            <RotateCw className="w-3.5 h-3.5" />
            Barajar Nuevas Cartas
          </button>
        </div>
      )}
    </section>
  );
}
