import { Heart, UserMinus, ShieldAlert, Sparkles, MessageCircle, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';

const SERVICES = [
  {
    id: 'amarre-amor',
    icon: Heart,
    title: 'Atracción del Ser Amado',
    subtitle: 'Amarres de Amor & Retorno de Pareja con Magia Blanca',
    quote: 'Atraigo al ser amado, rindiéndolo a su voluntad, sin hacerle daño y sin que nadie se dé cuenta.',
    description:
      'Tratamiento espiritual para recuperar el amor perdido, endulzar corazones distanciados y despertar la pasión dormida. Trabajos limpios, sin efectos secundarios ni karmas negativos.',
    badge: 'MÁS SOLICITADO',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    iconBg: 'from-rose-500 to-amber-600',
    waText: 'Hola Maestro 🔮, deseo consultar por el servicio de ATRACCIÓN DEL SER AMADO / RETORNO DE PAREJA. Mi primera pregunta es gratis.',
  },
  {
    id: 'alejamiento-terceros',
    icon: UserMinus,
    title: 'Alejamiento de Intrusos',
    subtitle: 'Alejo al Ser Indeseable, Malos Vecinos & Enemigos',
    quote: 'Alejo al ser indeseable, malos vecinos y enemigos que perturben su vida o su relación.',
    description:
      'Alejo al ser indeseable, malos vecinos, enemigos, rivales, amantes y malas influencias que interfieren en tu tranquilidad personal o relación sentimental. Separación pacífica y definitiva sin dejar rastros.',
    badge: '100% DISCRETO',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    iconBg: 'from-purple-500 to-indigo-600',
    waText: 'Hola Maestro 🔮, deseo consultar por el servicio de ALEJAMIENTO (Ser indeseable, malos vecinos, enemigos). Mi primera pregunta es gratis.',
  },
  {
    id: 'curacion-brujeria',
    icon: ShieldAlert,
    title: 'Curación de Brujería & Salamientos',
    subtitle: 'Despojos Fuertes, Rompimiento de Hechizos & Protección',
    quote: 'Curo maleficios, hechizos, brujería, salamientos y envidias destructivas.',
    description:
      'Destrucción de trabajos oscuros, entierros, maldiciones y malas rachas que bloquean tu dinero, salud y felicidad. Limpieza áurica profunda y blindaje espiritual para tu hogar y negocio.',
    badge: 'EFECTIVIDAD INMEDIATA',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    iconBg: 'from-emerald-500 to-cyan-600',
    waText: 'Hola Maestro 🔮, necesito ayuda urgente con CURACIÓN DE MALEFICIOS / SALAMIENTOS. Deseo mi primera consulta gratis.',
  },
  {
    id: 'casos-dificiles',
    icon: Sparkles,
    title: 'Casos Difíciles en Amor, Salud y Dinero',
    subtitle: 'Trato con Magia Blanca para Situaciones Imposibles',
    quote: 'Trato con magia blanca los más difíciles casos cuando todo lo demás ha fallado.',
    description:
      'Apertura inmediata de caminos financieros, destrabe de deudas, resolución de conflictos familiares y armonización integral de salud energética. La solución donde otros no pudieron.',
    badge: 'MAGIA BLANCA',
    badgeColor: 'bg-gold-accent/20 text-gold-accent border-gold-accent/40',
    iconBg: 'from-gold-accent to-amber-500',
    waText: 'Hola Maestro 🔮, tengo un CASO DIFÍCIL en amor/dinero/salud y deseo aprovechar mi primera consulta gratis.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 overflow-hidden">
      {/* Background mystic lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-950/20 rounded-full blur-[150px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-accent/40 bg-gold-accent/10 text-gold-accent text-xs font-cinzel tracking-widest uppercase mb-3 shadow-gold-glow animate-pulse">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Trabajos Espirituales Garantizados • Magia Blanca</span>
        </div>
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
          Soluciones Espirituales para los <span className="text-gold-accent drop-shadow-gold-glow">Casos Más Difíciles</span>
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Atención personalizada, confidencial y sin intermediarios. No sufras más en silencio: <strong className="text-white">tu primera consulta es 100% gratuita</strong> para diagnosticar tu caso de inmediato.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {SERVICES.map((service) => {
          const ServiceIcon = service.icon;
          const waUrl = `https://wa.me/573218352518?text=${encodeURIComponent(service.waText)}`;

          return (
            <div
              key={service.id}
              className="relative rounded-3xl backdrop-blur-xl bg-gradient-to-b from-[#191133] via-[#100B22] to-[#0A0716] border-2 border-gold-accent/30 hover:border-gold-accent p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.7)] hover:shadow-gold-glow group"
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-cinzel font-extrabold tracking-widest uppercase border ${service.badgeColor}`}
                  >
                    {service.badge}
                  </span>

                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.iconBg} text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 shrink-0`}
                  >
                    <ServiceIcon className="w-6 h-6 stroke-[2.5]" />
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white group-hover:text-gold-accent transition-colors mb-1">
                  {service.title}
                </h3>
                <p className="text-xs text-astral-cyan font-mono mb-4">{service.subtitle}</p>

                {/* Highlighted Quote from Traditional Flyer */}
                <div className="p-3.5 rounded-xl bg-black/50 border border-gold-accent/30 mb-4">
                  <p className="text-xs sm:text-sm text-gold-accent font-medium italic leading-relaxed">
                    "{service.quote}"
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Bottom WhatsApp CTA Button */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-ping" />
                  <span>1ª Consulta Gratis por WhatsApp</span>
                </span>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-full font-cinzel text-xs font-bold tracking-wider uppercase text-black bg-gradient-to-r from-gold-accent via-[#FFE28A] to-[#25D366] hover:brightness-110 shadow-gold-glow active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>Consultar Mi Caso</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* High-Impact Guarantee Banner at bottom of section */}
      <div className="mt-14 rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-[#170E30] via-[#241347] to-[#120B24] border-2 border-gold-accent shadow-[0_0_50px_rgba(212,175,55,0.35)] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-cinzel text-gold-accent font-bold uppercase tracking-wider mb-2">
            <Lock className="w-3.5 h-3.5" />
            <span>Reserva y Confidencialidad Absoluta</span>
          </div>
          <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-2">
            ¿Sientes que nada te sale bien o tu pareja se aleja?
          </h4>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            No dejes pasar más tiempo. Los problemas del alma y la energía crecen si no se atienden a tiempo. Comunícate ahora mismo de forma privada.
          </p>
        </div>

        <div className="shrink-0 w-full md:w-auto text-center">
          <a
            href="https://wa.me/573218352518?text=Hola%20Maestro%20%F0%9F%94%AE%2C%20deseo%20mi%20primera%20consulta%20gratuita%20para%20un%20caso%20especial."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-cinzel font-bold text-sm tracking-wider uppercase text-black bg-[#25D366] hover:bg-[#20ba5a] shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Hablar Directo con el Maestro</span>
          </a>
          <p className="text-[11px] text-gray-400 mt-2">
            ⚡ Respuesta inmediata hoy • 1ª Pregunta Gratis
          </p>
        </div>
      </div>
    </section>
  );
}
