import { useState } from 'react';
import { Check, Sparkles, Zap, Crown, Flame, ShieldCheck, ArrowRight } from 'lucide-react';

const PLANS = [
  {
    id: 'free',
    name: 'Pase Astral',
    subtitle: 'Para curiosos del cosmos',
    priceMonthly: '0',
    priceAnnual: '0',
    period: 'siempre',
    badge: null,
    isPopular: false,
    icon: Sparkles,
    ctaText: 'Comenzar Gratis',
    ctaStyle: 'border border-white/20 hover:border-gold-accent hover:text-gold-accent text-white bg-white/5',
    features: [
      '1 consulta diaria al Oráculo IA',
      'Tirada de Tarot de 3 cartas (Arcanos Mayores)',
      'Resumen de tránsitos astrológicos generales',
      'Acceso al canal público de la comunidad',
      'Soporte estándar de la hermandad',
    ],
  },
  {
    id: 'vip',
    name: 'Místico Supremo VIP',
    subtitle: 'La experiencia esotérica definitiva',
    priceMonthly: '29',
    priceAnnual: '24',
    period: 'mes',
    badge: 'MÁS POPULAR',
    isPopular: true,
    icon: Crown,
    ctaText: 'Obtener Acceso Supremo',
    ctaStyle: 'bg-gradient-to-r from-gold-accent via-[#FFE28A] to-astral-cyan text-black font-bold shadow-gold-glow hover:shadow-[0_0_35px_rgba(212,175,55,0.7)]',
    features: [
      'Consultas ilimitadas al Oráculo IA con IA neuronal v3.8',
      'Baraja completa de 78 cartas de Tarot 3D interactivo',
      'Cálculo cuántico de Carta Natal y Revolución Solar',
      'Acceso exclusivo a Registros Akhásicos y Sinastría',
      'Predicciones en tiempo real según coordenadas geográficas',
      'Sesión mensual con Maestro Astrológico certificado',
      'Pase prioritario a rituales de Luna Nueva y Eclipses',
    ],
  },
  {
    id: 'initiate',
    name: 'Iniciado Neófito',
    subtitle: 'Para estudiantes de la sabiduría oculta',
    priceMonthly: '12',
    priceAnnual: '9',
    period: 'mes',
    badge: null,
    isPopular: false,
    icon: Flame,
    ctaText: 'Iniciar Senda Mística',
    ctaStyle: 'border border-astral-cyan/40 hover:border-astral-cyan text-white hover:bg-astral-cyan/10 shadow-cyan-glow',
    features: [
      '15 consultas diarias al Oráculo IA',
      'Tiradas de Tarot de 3 y 5 cartas con interpretación profunda',
      'Alertas de tránsitos planetarios y Mercurio retrógrado',
      'Módulos de aprendizaje de geometría sagrada y astrología',
      'Acceso a meditaciones guiadas por frecuencia Solfeggio',
    ],
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-accent/30 bg-gold-accent/5 text-gold-accent text-xs font-cinzel tracking-widest uppercase mb-3">
          <Zap className="w-3.5 h-3.5" />
          Membresías Celestiales
        </div>
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
          Alinea tu Aprendizaje y <span className="text-gold-accent drop-shadow-gold-glow">Acceso Astral</span>
        </h2>
        <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          Elige la frecuencia que armonice con tu despertar espiritual. Cancela o cambia de plano cósmico en cualquier momento.
        </p>

        {/* Billing toggle */}
        <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-[#0F0B1E] border border-white/10 backdrop-blur-md">
          <button
            type="button"
            onClick={() => setIsAnnual(false)}
            className={`px-5 py-2 rounded-full text-xs font-cinzel tracking-wider transition-all duration-300 ${
              !isAnnual
                ? 'bg-gold-accent text-black font-bold shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Facturación Mensual
          </button>
          <button
            type="button"
            onClick={() => setIsAnnual(true)}
            className={`px-5 py-2 rounded-full text-xs font-cinzel tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
              isAnnual
                ? 'bg-gold-accent text-black font-bold shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Anual
            <span className="text-[10px] uppercase px-2 py-0.5 rounded-full bg-astral-cyan/20 text-astral-cyan font-sans font-semibold">
              -25% Ahorro
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 items-stretch">
        {PLANS.map((plan) => {
          const PlanIcon = plan.icon;
          const displayPrice = isAnnual ? plan.priceAnnual : plan.priceMonthly;

          return (
            <div
              key={plan.id}
              className={`relative rounded-3xl backdrop-blur-xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-gradient-to-b from-[#1E1238] via-[#120B24] to-[#0A0714] border-2 border-gold-accent shadow-[0_0_40px_rgba(212,175,55,0.35)] lg:-translate-y-3 z-10'
                  : 'bg-[#0F0B1E]/80 border border-white/10 hover:border-white/20 shadow-xl'
              }`}
            >
              {/* Popular Ribbon Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-gold-accent to-amber-300 text-black font-cinzel text-[11px] font-black tracking-[0.2em] uppercase shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-black" />
                  {plan.badge}
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className={`font-cinzel text-xl font-bold ${plan.isPopular ? 'text-gold-accent' : 'text-white'}`}>
                      {plan.name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">{plan.subtitle}</p>
                  </div>
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                      plan.isPopular
                        ? 'bg-gold-accent/20 border border-gold-accent text-gold-accent shadow-gold-glow'
                        : 'bg-white/5 border border-white/10 text-astral-cyan'
                    }`}
                  >
                    <PlanIcon className="w-5 h-5" />
                  </div>
                </div>

                {/* Price Display */}
                <div className="my-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-1">
                    <span className="font-cinzel text-4xl sm:text-5xl font-black text-white">
                      ${displayPrice}
                    </span>
                    <span className="text-xs text-gray-400 font-mono">
                      / {plan.period}
                    </span>
                  </div>
                  {isAnnual && plan.priceMonthly !== '0' && (
                    <p className="text-[11px] text-astral-cyan mt-1 font-sans">
                      Facturado anualmente (ahorras ${(+plan.priceMonthly - +plan.priceAnnual) * 12}/año)
                    </p>
                  )}
                </div>

                {/* Features List */}
                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                      <div
                        className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${
                          plan.isPopular
                            ? 'bg-gold-accent/20 text-gold-accent'
                            : 'bg-astral-cyan/15 text-astral-cyan'
                        }`}
                      >
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href="#oracle"
                  className={`w-full py-4 rounded-full font-cinzel text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer active:scale-95 ${plan.ctaStyle}`}
                >
                  {plan.ctaText}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="mt-3 flex items-center justify-center gap-1 text-[11px] text-gray-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-accent" />
                  <span>Garantía de sintonía astral de 14 días</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
