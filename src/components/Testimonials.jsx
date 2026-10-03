import { Star, MessageCircle, Quote, Sparkles } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Carolina M.',
    sign: 'Medellín, Colombia',
    role: 'Retorno de Pareja con Magia Blanca',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    quote:
      'Mi pareja se había marchado de la casa por influencia de una persona malintencionada. Con la ayuda del Maestro y su trabajo de atracción con magia blanca, regresó arrepentido, cariñoso y sin discusiones. Nadie se dio cuenta de nada y hoy estamos más unidos que nunca.',
    highlight: 'Regresó a mi lado en 9 días',
    glowColor: 'border-gold-accent shadow-gold-glow',
  },
  {
    id: 2,
    name: 'Roberto G.',
    sign: 'Cali, Colombia',
    role: 'Curación de Salina & Brujería en Negocio',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    quote:
      'Tenía mi negocio completamente salado; las deudas crecían y los clientes desaparecieron sin explicación. En la primera consulta gratuita el Maestro detectó un entierro y envidia fuerte. Hizo la limpieza y destrabe, y en menos de 15 días el negocio volvió a prosperar.',
    highlight: 'Negocio salvado y caminos abiertos',
    glowColor: 'border-astral-cyan shadow-cyan-glow',
  },
  {
    id: 3,
    name: 'Marcela P.',
    sign: 'Bogotá, Colombia',
    role: 'Alejamiento de Persona Indeseable',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    quote:
      'Una amante estaba destruyendo mi hogar de 14 años. El Maestro realizó el retiro de esa mujer de la vida de mi esposo de forma totalmente pacífica y sin hacer daño a nadie. Ella se fue de la ciudad y recuperé la paz de mi familia.',
    highlight: 'Paz familiar recuperada al 100%',
    glowColor: 'border-purple-400 shadow-purple-glow',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-astral-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-accent/40 bg-gold-accent/10 text-gold-accent text-xs font-cinzel tracking-widest uppercase mb-3 shadow-gold-glow">
          <MessageCircle className="w-3.5 h-3.5" />
          Testimonios Reales & Casos Resueltos
        </div>
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
          Vidas Transformadas con <span className="text-gold-accent drop-shadow-gold-glow">Magia Blanca</span>
        </h2>
        <p className="mt-3 text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
          Personas reales que encontraron solución a sus problemas más difíciles de amor, salud y protección espiritual.
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
