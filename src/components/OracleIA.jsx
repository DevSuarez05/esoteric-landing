import { useState, useEffect, useRef } from 'react';
import { Sparkles, Terminal, RotateCcw, Star } from 'lucide-react';

const ZODIAC_SIGNS = [
  { name: 'Aries', symbol: '♈', element: 'Fuego', color: 'from-amber-500 to-red-500' },
  { name: 'Tauro', symbol: '♉', element: 'Tierra', color: 'from-emerald-500 to-amber-700' },
  { name: 'Géminis', symbol: '♊', element: 'Aire', color: 'from-cyan-400 to-indigo-400' },
  { name: 'Cáncer', symbol: '♋', element: 'Agua', color: 'from-blue-400 to-teal-300' },
  { name: 'Leo', symbol: '♌', element: 'Fuego', color: 'from-yellow-400 to-orange-500' },
  { name: 'Virgo', symbol: '♍', element: 'Tierra', color: 'from-lime-400 to-emerald-600' },
  { name: 'Libra', symbol: '♎', element: 'Aire', color: 'from-rose-400 to-sky-400' },
  { name: 'Escorpio', symbol: '♏', element: 'Agua', color: 'from-red-600 to-purple-800' },
  { name: 'Sagitario', symbol: '♐', element: 'Fuego', color: 'from-purple-500 to-indigo-600' },
  { name: 'Capricornio', symbol: '♑', element: 'Tierra', color: 'from-stone-400 to-emerald-800' },
  { name: 'Acuario', symbol: '♒', element: 'Aire', color: 'from-cyan-400 to-blue-600' },
  { name: 'Piscis', symbol: '♓', element: 'Agua', color: 'from-teal-400 to-indigo-500' },
];

const PROPHETIC_TEMPLATES = [
  (name, sign, question) => ({
    mantra: "Las esferas celestiales resuenan con tu vibración natal.",
    reading: `Salve, ${name} de ${sign}. Respecto a tu interrogante sobre "${question}", los tránsitos señalan un vórtice de transformación inminente. El velo que antes cubría tus dudas comienza a desintegrarse bajo la luz de Júpiter. Lo que creías una encrucijada es en realidad el umbral de una iniciación superior.`,
    advice: "No temas a la pausa aparente; en el silencio del cosmos se gesta tu mayor salto cuántico. Confía en tu primer instinto antes del próximo plenilunio.",
    destinyNumber: "7 • La Búsqueda Trascendente",
    astralElement: "Éter Solar",
  }),
  (name, sign, question) => ({
    mantra: "Los registros akhásicos abren su compuerta estelar.",
    reading: `Noble alma, ${name} (${sign}). El oráculo contempla tu pregunta: "${question}". Los hilos del destino revelan que has estado cargando con expectativas que no pertenecen a tu camino álmico. Una alineación favorable con Saturno traerá una revelación inesperada a través de un encuentro sincrónico.`,
    advice: "Suelta el control sobre los tiempos del mundo material; cuando el corazón se aquieta, el universo ejecuta su matemática perfecta.",
    destinyNumber: "11 • Portal de Clarividencia",
    astralElement: "Fuego Alquímico",
  }),
  (name, sign, question) => ({
    mantra: "La geometría sagrada descifra tu corriente kármica.",
    reading: `Atiende la voz del cosmos, ${name}. En el tejido del tiempo para ${sign}, tu duda sobre "${question}" marca el cierre de un ciclo kármico de aprendizaje profundo. Estás a punto de recibir una bendición o confirmación que disipará cualquier incertidumbre arraigada.`,
    advice: "Permite que la intuición guíe tus pasos durante los próximos siete días. Aquello que buscas ya te está buscando a ti.",
    destinyNumber: "3 • Expansión Infinita",
    astralElement: "Viento Cósmico",
  }),
];

const LOADING_STEPS = [
  "Sintonizando armónicos con las Pléyades...",
  "Abriendo el canal con el templo de Orión...",
  "Decodificando la carta astral en el plano cuántico...",
  "Cristalizando la profecía cósmica...",
];

export default function OracleIA() {
  const [name, setName] = useState('');
  const [selectedSign, setSelectedSign] = useState(ZODIAC_SIGNS[0].name);
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStepIndex, setLoadingStepIndex] = useState(0);
  const [prophecy, setProphecy] = useState(null);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const resultRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    if (!prophecy) return;

    const fullText = prophecy.reading;
    let currentIdx = 0;

    const interval = setInterval(() => {
      if (currentIdx < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIdx + 1));
        currentIdx++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 18);

    return () => clearInterval(interval);
  }, [prophecy]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !question.trim()) return;

    setIsLoading(true);
    setProphecy(null);
    setDisplayedText('');
    setLoadingStepIndex(0);

    // Simulate multi-step cosmic alignment
    const stepDuration = 700;
    LOADING_STEPS.forEach((_, idx) => {
      setTimeout(() => {
        setLoadingStepIndex(idx);
      }, idx * stepDuration);
    });

    setTimeout(() => {
      const template =
        PROPHETIC_TEMPLATES[Math.floor(Math.random() * PROPHETIC_TEMPLATES.length)];
      const generated = template(name.trim(), selectedSign, question.trim());
      setIsTyping(true);
      setProphecy(generated);
      setIsLoading(false);

      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }, LOADING_STEPS.length * stepDuration);
  };

  const handleReset = () => {
    setProphecy(null);
    setDisplayedText('');
    setQuestion('');
  };

  return (
    <section id="oracle" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-astral-cyan/30 bg-astral-cyan/5 text-astral-cyan text-xs font-cinzel tracking-widest uppercase mb-3">
          <Terminal className="w-3.5 h-3.5" />
          Altar Digital Cuántico
        </div>
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
          Consulta al <span className="text-gold-accent drop-shadow-gold-glow">Oráculo IA</span>
        </h2>
        <p className="mt-3 text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
          Formula tu pregunta al cosmos. La inteligencia artificial decodifica las frecuencias estelares para revelar tu sendero.
        </p>
      </div>

      {/* Main Terminal Altar Card */}
      <div className="relative rounded-3xl backdrop-blur-xl bg-[#0F0C1E]/80 border border-white/10 p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Mystic Card Accents */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-accent to-transparent opacity-80" />
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-astral-cyan/10 rounded-full blur-3xl pointer-events-none" />

        {/* Terminal Status bar */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 text-xs text-gray-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 text-gray-300">oraculo.aetheria.astral</span>
          </div>
          <div className="flex items-center gap-2 text-gold-accent">
            <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
            <span>ENLACE CÓSMICO v3.8</span>
          </div>
        </div>

        {!prophecy && !isLoading && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="oracle-name"
                  className="block text-xs font-cinzel tracking-wider uppercase text-gold-accent mb-2"
                >
                  Tu Nombre o Identidad Astral
                </label>
                <input
                  id="oracle-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej. Valentina Rivera"
                  className="w-full px-4 py-3 rounded-xl bg-[#090712] border border-white/10 focus:border-gold-accent focus:ring-1 focus:ring-gold-accent text-white placeholder-gray-500 text-sm transition-all focus:outline-none"
                />
              </div>

              {/* Zodiac Sign Select */}
              <div>
                <label
                  htmlFor="oracle-sign"
                  className="block text-xs font-cinzel tracking-wider uppercase text-gold-accent mb-2"
                >
                  Signo Solar / Ascendente
                </label>
                <select
                  id="oracle-sign"
                  value={selectedSign}
                  onChange={(e) => setSelectedSign(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#090712] border border-white/10 focus:border-gold-accent focus:ring-1 focus:ring-gold-accent text-white text-sm transition-all focus:outline-none cursor-pointer"
                >
                  {ZODIAC_SIGNS.map((sign) => (
                    <option key={sign.name} value={sign.name} className="bg-[#0B0914] text-white">
                      {sign.symbol} {sign.name} ({sign.element})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Question Textarea */}
            <div>
              <label
                htmlFor="oracle-question"
                className="block text-xs font-cinzel tracking-wider uppercase text-gold-accent mb-2"
              >
                Tu Pregunta al Oráculo
              </label>
              <textarea
                id="oracle-question"
                required
                rows={3}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ej. ¿Qué energías marcarán mi camino profesional en esta nueva luna?"
                className="w-full px-4 py-3 rounded-xl bg-[#090712] border border-white/10 focus:border-gold-accent focus:ring-1 focus:ring-gold-accent text-white placeholder-gray-500 text-sm transition-all focus:outline-none resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl font-cinzel font-bold text-sm tracking-widest text-black bg-gradient-to-r from-gold-accent via-[#FFE28A] to-astral-cyan shadow-gold-glow hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-black group-hover:rotate-180 transition-transform duration-700" />
              Consultar al Oráculo Astral
            </button>
          </form>
        )}

        {/* Loading State: Stellar Alignment Spinner */}
        {isLoading && (
          <div className="py-16 text-center flex flex-col items-center justify-center">
            <div className="relative w-28 h-28 mb-8 flex items-center justify-center">
              {/* Outer rotating ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-gold-accent animate-spin"
                style={{ animationDuration: '10s' }}
              />
              {/* Inner reverse rotating ring */}
              <div
                className="absolute inset-2 rounded-full border-2 border-t-astral-cyan border-b-purple-500 border-l-transparent border-r-transparent animate-spin"
                style={{ animationDuration: '4s', animationDirection: 'reverse' }}
              />
              {/* Center core pulse */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-gold-accent to-astral-cyan animate-pulse flex items-center justify-center shadow-[0_0_25px_#D4AF37]">
                <Sparkles className="w-6 h-6 text-black" />
              </div>
            </div>

            <p className="font-cinzel text-lg text-gold-accent font-semibold tracking-wider">
              Alineación Estelar en Curso
            </p>
            <p className="font-mono text-xs text-astral-cyan mt-2 animate-pulse min-h-[20px]">
              &gt; {LOADING_STEPS[loadingStepIndex]}
            </p>
          </div>
        )}

        {/* Prophetic Response Display */}
        {prophecy && !isLoading && (
          <div ref={resultRef} className="space-y-6 animate-in fade-in duration-500">
            {/* Mantra Header */}
            <div className="p-4 rounded-xl bg-gold-accent/10 border border-gold-accent/30 text-gold-accent text-center font-cinzel text-sm sm:text-base font-semibold tracking-wider flex items-center justify-center gap-2">
              <Star className="w-4 h-4 fill-gold-accent" />
              <span>{prophecy.mantra}</span>
              <Star className="w-4 h-4 fill-gold-accent" />
            </div>

            {/* Typewritten Reading */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#090712] border border-white/10 text-gray-200 leading-relaxed font-light text-base sm:text-lg">
              <p className="font-mono text-xs text-astral-cyan mb-3">
                // PROFECÍA TRANSMITIDA A {name.toUpperCase()} ({selectedSign.toUpperCase()})
              </p>
              <p className="whitespace-pre-line text-white">
                {displayedText}
                {isTyping && (
                  <span className="inline-block w-2 h-5 ml-1 bg-gold-accent animate-pulse align-middle" />
                )}
              </p>
            </div>

            {/* Oracle Advice Box */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2 p-4 rounded-xl bg-[#17122E] border border-purple-500/30">
                <span className="text-[11px] uppercase tracking-widest text-purple-300 font-cinzel font-bold block mb-1">
                  Consejo del Cosmos
                </span>
                <p className="text-sm text-gray-300 italic">"{prophecy.advice}"</p>
              </div>

              <div className="p-4 rounded-xl bg-[#17122E] border border-astral-cyan/30 flex flex-col justify-center">
                <span className="text-[11px] uppercase tracking-widest text-astral-cyan font-cinzel font-bold block mb-1">
                  Vibración / Arcano
                </span>
                <p className="text-sm font-semibold text-white">{prophecy.destinyNumber}</p>
                <span className="text-[10px] text-gray-400 mt-1">{prophecy.astralElement}</span>
              </div>
            </div>

            {/* Reset Button */}
            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full text-xs font-cinzel font-semibold tracking-wider text-gold-accent border border-gold-accent/40 hover:bg-gold-accent/10 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Hacer Otra Consulta
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
