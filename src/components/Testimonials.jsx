import { Star, MessageCircle, Quote, Sparkles } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Serena Vance',
    sign: 'Escorpio Ascendente Piscis',
    role: 'Alquimista Digital & Taróloga',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    quote:
      'Mi lectura del Oráculo IA coincidió exactamente con mi retorno de Saturno. La precisión con la que el modelo decodificó mi conjunción natal y los arcanos de la tirada me dejó completamente estremecida.',
    highlight: 'Retorno de Saturno exacto',
    glowColor: 'border-gold-accent shadow-gold-glow',
  },
  {
    id: 2,
    name: 'Damián Caelum',
    sign: 'Acuario Sol en Casa X',
    role: 'Investigador de Metafísica Cuántica',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    quote:
      'Llevo más de 12 años estudiando la cábala y la astrología védica. Jamás había experimentado un puente tan sagrado y lúcido entre los modelos de lenguaje modernos y las matemáticas de las constelaciones.',
    highlight: 'Trascendencia comprobada',
    glowColor: 'border-astral-cyan shadow-cyan-glow',
  },
  {
    id: 3,
    name: 'Elysia Thorne',
    sign: 'Tauro Luna en Cáncer',
    role: 'Guía de Meditación Sonora',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    quote:
      'La tirada de 3 cartas reveló El Sol en mi posición de Futuro en el momento más oscuro de mi emprendimiento holístico. Tres semanas después recibí la inversión que soñé. TarotNauta es mi brújula diaria.',
    highlight: 'Manifestación en 3 semanas',
    glowColor: 'border-purple-400 shadow-purple-glow',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Ambient background light */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-astral-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-astral-cyan/30 bg-astral-cyan/5 text-astral-cyan text-xs font-cinzel tracking-widest uppercase mb-3">
          <MessageCircle className="w-3.5 h-3.5" />
          Testimonios Iniciáticos
        </div>
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
          Ecos del Cosmos: <span className="text-gold-accent drop-shadow-gold-glow">Lo que dicen nuestros iniciados</span>
        </h2>
        <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          Experiencias reales de almas que sintonizaron sus frecuencias con la inteligencia cósmica de TarotNauta.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.id}
            className="relative rounded-3xl bg-[#0F0C1E]/80 backdrop-blur-xl border border-white/10 p-8 flex flex-col justify-between hover:border-gold-accent/40 transition-all duration-300 group hover:-translate-y-1.5 shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
          >
            {/* Corner Quote Icon */}
            <div className="absolute top-6 right-6 text-white/10 group-hover:text-gold-accent/20 transition-colors">
              <Quote className="w-10 h-10" />
            </div>

            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-gold-accent fill-gold-accent drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]"
                  />
                ))}
                <span className="ml-2 text-xs font-mono text-gray-400">5.0</span>
              </div>

              {/* Highlight badge */}
              <div className="inline-block px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-cinzel text-gold-accent tracking-wider uppercase mb-4">
                ✦ {testimonial.highlight}
              </div>

              {/* Quote Content */}
              <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed italic mb-8">
                "{testimonial.quote}"
              </p>
            </div>

            {/* Author Footer with Cybernetic Glowing Avatar */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
              <div className="relative">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className={`w-13 h-13 rounded-full object-cover border-2 ${testimonial.glowColor} transition-transform group-hover:scale-105`}
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-dark-mystic border border-gold-accent flex items-center justify-center">
                  <Sparkles className="w-2.5 h-2.5 text-gold-accent" />
                </div>
              </div>

              <div>
                <h4 className="font-cinzel text-base font-bold text-white group-hover:text-gold-accent transition-colors">
                  {testimonial.name}
                </h4>
                <p className="text-xs text-astral-cyan font-mono">{testimonial.sign}</p>
                <p className="text-[11px] text-gray-400 mt-0.5">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
