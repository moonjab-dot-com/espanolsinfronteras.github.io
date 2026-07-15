import { useState, useCallback, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { testimonials, faqItems, socialLinks, partners } from "@/data/courses";
import { COURSE_MASCOTS } from "@/lib/course-mascots";
import { BrandScroller } from "@/components/ui/brand-scroller";
import {
  Backpack, BookOpen, ChevronDown, ExternalLink, Globe, GraduationCap,
  Handshake, Heart, Lightbulb, MessageCircle, Quote, Rocket, Sparkles, Trophy, Users,
} from "lucide-react";

// ─── Reveal ───────────────────────────────────────────────────────────────────

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, inView]);
  return { ref, inView };
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={className} style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)", transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms` }}>
      {children}
    </div>
  );
}

// ─── Avatar palette ───────────────────────────────────────────────────────────

const AVATAR_PALETTE = [
  "bg-blue-500", "bg-emerald-500", "bg-amber-500", "bg-violet-500",
  "bg-rose-500", "bg-teal-500", "bg-indigo-500", "bg-orange-500", "bg-cyan-600",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function NosotrosPage() {
  const { lang } = useLanguage();
  const t = lang === "es";
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggle = useCallback((i: number) => setOpenFaq(p => p === i ? null : i), []);

  const items = testimonials.map((tm, i) => ({ text: tm.text, author: tm.author, colorIndex: i }));

  const owls = [
    { src: "/OWL_INVESTIGADOR.png",               labelEs: "Educador",      labelEn: "Educator"      },
    { src: "/OWL_WITH_SPAIN_FLAG.png",            labelEs: "Comunicación",  labelEn: "Communication" },
    { src: "/OWL_SCIENCE.png",                    labelEs: "Ciencias",      labelEn: "Science"       },
    { src: "/OWL_CODING.png",                     labelEs: "Programación",  labelEn: "Coding"        },
    { src: "/OWL_NUMBER_ONE.png",                 labelEs: "Matemáticas",   labelEn: "Math"          },
    { src: "/OWL_INVESTIGATOR_WITH_COMPUTER.png", labelEs: "Tecnología",    labelEn: "Technology"    },
  ];

  return (
    <div className="min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section
        className="py-20 px-5 text-center"
        style={{ background: "linear-gradient(160deg, #0c0c14 0%, #111827 60%, #0c1425 100%)" }}
      >
        <div className="container-page max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6" style={{ background: "rgba(132,204,22,0.12)", color: "#84cc16", border: "1px solid rgba(132,204,22,0.2)" }}>
            <Heart className="w-3.5 h-3.5" />
            {t ? "Nuestra misión" : "Our mission"}
          </div>
          <h1 className="text-white mb-5" style={{ fontFamily: "'Fredoka', sans-serif", fontSize: "clamp(2.5rem,6vw,4rem)", fontWeight: 700, lineHeight: 1.1 }}>
            {t ? <>Un futuro más justo<br /><span style={{ color: "#84cc16" }}>comienza con acceso</span></> : <>A fairer future<br /><span style={{ color: "#84cc16" }}>starts with access</span></>}
          </h1>
          <p className="max-w-xl mx-auto mb-8 text-lg" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
            {t
              ? "Español Sin Fronteras es una plataforma educativa 100% gratuita que nació del sueño de que nadie se quede sin estudiar."
              : "Español Sin Fronteras is a 100% free educational platform born from the dream that no one should miss out on education."}
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-white/70 text-sm">
            {[
              { n: "277+", l: t ? "Lecciones" : "Lessons" },
              { n: "72+",  l: t ? "Países"    : "Countries" },
              { n: "12",   l: t ? "Materias"  : "Subjects" },
              { n: "$0",   l: t ? "Costo"     : "Cost" },
            ].map(s => (
              <div key={s.l} className="text-center">
                <p className="text-3xl font-bold text-white" style={{ fontFamily: "'Fredoka', sans-serif" }}>{s.n}</p>
                <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Historia ─────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-white" id="historia" aria-labelledby="historia-heading">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <div className="text-center mb-12">
                <p className="section-eyebrow"><Heart className="w-3.5 h-3.5" />{t ? "La historia" : "The story"}</p>
                <h2 id="historia-heading" className="text-3xl md:text-4xl font-extrabold text-foreground">
                  {t ? "La historia detrás de ESF" : "The story behind ESF"}
                </h2>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative rounded-[28px] border-2 border-[hsl(38,92%,55%)] bg-amber-50 px-8 py-10 mb-10 text-center shadow-sm">
                <Quote className="absolute top-5 left-6 w-7 h-7 text-amber-400" />
                <blockquote className="text-xl md:text-2xl font-extrabold text-foreground leading-[1.4]">
                  {t ? '"Nadie debería quedarse sin estudiar por falta de tiempo o dinero."' : '"No one should miss out on education due to lack of time or money."'}
                </blockquote>
                <p className="mt-4 text-sm text-muted-foreground font-bold">— Salvador B., {t ? "Fundador" : "Founder"}</p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { icon: Lightbulb, color: "border-blue-300 bg-blue-50",    ic: "text-blue-500",   textEs: <>Nació con una idea clara: aprender no debería depender del <strong>dinero</strong> ni de las circunstancias.</>, textEn: <>Born from one clear idea: learning shouldn't depend on <strong>money</strong> or circumstances.</> },
                  { icon: Rocket,    color: "border-emerald-300 bg-emerald-50", ic: "text-emerald-500", textEs: <>En 2024, Salvador convirtió esa idea en una plataforma 100% gratuita con más de <strong>277 capítulos</strong> prácticos.</>, textEn: <>In 2024, Salvador turned that idea into a 100% free platform with over <strong>277 practical chapters</strong>.</> },
                  { icon: Globe,     color: "border-violet-300 bg-violet-50",  ic: "text-violet-500", textEs: <>Hoy llega a estudiantes en más de <strong>72 países</strong>, demostrando que las ganas de aprender no tienen fronteras.</>, textEn: <>Today it reaches students in over <strong>72 countries</strong>, proving that the will to learn has no borders.</> },
                  { icon: Backpack,  color: "border-amber-300 bg-amber-50",   ic: "text-amber-500",  textEs: <>Fuera de la pantalla, se han donado más de <strong>1,471 libros</strong> y útiles escolares en Lima.</>, textEn: <>Beyond the screen, more than <strong>1,471 books</strong> and school supplies donated in Lima.</> },
                ].map((card, i) => (
                  <div key={i} className={`rounded-3xl border-2 p-6 flex items-start gap-4 ${card.color}`}>
                    <card.icon className={`w-7 h-7 shrink-0 ${card.ic}`} />
                    <p className="text-[15px] text-foreground/80 leading-relaxed font-medium">{t ? card.textEs : card.textEn}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Owls / Tutores ───────────────────────────────────────────────────── */}
      <section className="section-padding bg-[hsl(220,16%,97%)] overflow-hidden" aria-labelledby="owls-heading">
        <div className="container-page">
          <Reveal>
            <div className="text-center mb-12">
              <p className="section-eyebrow"><Sparkles className="w-3.5 h-3.5" />{t ? "Nuestros tutores" : "Our tutors"}</p>
              <h2 id="owls-heading" className="text-3xl md:text-4xl font-extrabold text-foreground">
                {t ? "Un búho para " : "An owl for "}
                <span className="bg-gradient-to-r from-primary to-teal-500 bg-clip-text text-transparent">
                  {t ? "cada materia" : "every subject"}
                </span>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 md:gap-6 max-w-2xl mx-auto">
            {owls.map(({ src, labelEs, labelEn }, i) => {
              const rings = ["border-blue-300","border-emerald-300","border-amber-300","border-violet-300","border-rose-300","border-teal-300"];
              return (
                <Reveal key={src} delay={i * 80}>
                  <div className="flex flex-col items-center gap-2 group cursor-default">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-white border-2 ${rings[i % rings.length]} flex items-center justify-center overflow-hidden group-hover:-translate-y-1.5 group-hover:rotate-3 transition-all duration-300`}>
                      <img src={src} alt={t ? labelEs : labelEn} className="w-14 h-14 sm:w-[72px] sm:h-[72px] object-contain" loading="lazy" />
                    </div>
                    <span className="text-[11px] font-bold text-muted-foreground text-center leading-tight">{t ? labelEs : labelEn}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Partners ─────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-white overflow-hidden" id="alianzas" aria-labelledby="alianzas-heading">
        <div className="container-page">
          <Reveal>
            <div className="text-center mb-12">
              <p className="section-eyebrow"><Handshake className="w-3.5 h-3.5" />{t ? "Alianzas estratégicas" : "Strategic partnerships"}</p>
              <h2 id="alianzas-heading" className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
                {t ? "Organizaciones que " : "Organizations that "}
                <span className="bg-gradient-to-r from-primary to-teal-500 bg-clip-text text-transparent">
                  {t ? "creen en la misión" : "believe in the mission"}
                </span>
              </h2>
              <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-bold">
                <Handshake className="w-3 h-3" />{partners.length} {t ? "alianzas activas" : "active alliances"}
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={80}><BrandScroller items={partners} lang={lang} direction="forward" duration={40} className="mb-3" label={t ? "Organizaciones aliadas" : "Partner organizations"} /></Reveal>
        <Reveal delay={140}><BrandScroller items={[...partners].reverse()} lang={lang} direction="reverse" duration={34} /></Reveal>
        <Reveal delay={200}>
          <p className="flex items-center justify-center gap-1.5 text-center text-[12px] text-muted-foreground/50 mt-10 font-medium">
            {t ? "Hecho con" : "Made with"} <Heart className="w-3 h-3 text-rose-400 fill-rose-400" /> {t ? "desde Perú para el mundo" : "from Peru for the world"}
          </p>
        </Reveal>
      </section>

      {/* ── Galería ──────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-[hsl(220,16%,97%)]" id="galeria" aria-labelledby="gallery-heading">
        <div className="container-page">
          <Reveal>
            <div className="text-center mb-12">
              <p className="section-eyebrow"><Globe className="w-3.5 h-3.5" />{t ? "Galería" : "Gallery"}</p>
              <h2 id="gallery-heading" className="text-3xl md:text-4xl font-extrabold text-foreground">
                {t ? "Educación en " : "Education "}
                <span className="bg-gradient-to-r from-primary to-teal-500 bg-clip-text text-transparent">{t ? "acción" : "in action"}</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { src: "/media1.png", icon: BookOpen,  captionEs: "Educación en acción", captionEn: "Education in action", border: "border-blue-300",    ic: "text-blue-500" },
              { src: "/media2.png", icon: Heart,     captionEs: "Nuestro impacto",     captionEn: "Our impact",          border: "border-emerald-300", ic: "text-emerald-500" },
              { src: "/media3.png", icon: Handshake, captionEs: "Comunidad",           captionEn: "Community",           border: "border-violet-300",  ic: "text-violet-500" },
            ].map(({ src, icon: Icon, captionEs, captionEn, border, ic }, i) => (
              <Reveal key={src} delay={i * 120}>
                <div className={`group overflow-hidden rounded-[28px] border-2 ${border} bg-card transition-transform duration-300 hover:-translate-y-1`}>
                  <div className="overflow-hidden aspect-[4/3]">
                    <img src={src} alt={t ? captionEs : captionEn} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={800} height={600} />
                  </div>
                  <div className="px-5 py-4 flex items-center gap-2">
                    <Icon className={`w-[18px] h-[18px] shrink-0 ${ic}`} />
                    <p className="text-sm font-bold text-foreground/80">{t ? captionEs : captionEn}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mi Cuento ────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-white" id="micuento">
        <div className="container-page">
          <div className="max-w-2xl mx-auto">
            <Reveal>
              <div className="relative rounded-[28px] border-2 border-emerald-400 bg-emerald-50 overflow-hidden">
                <div className="p-8 md:p-10 flex items-start gap-6">
                  <div className="hidden sm:block flex-shrink-0">
                    <img src="/OWL_INVESTIGADOR_WITH_BOOK.png" alt="" aria-hidden="true" className="w-24 h-24 object-contain animate-float-slow" loading="lazy" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="section-eyebrow"><BookOpen className="w-3.5 h-3.5" />{t ? "Lectura gratuita" : "Free reading"}</p>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3 flex items-center gap-2.5">
                      <Trophy className="w-6 h-6 text-emerald-500 shrink-0" />
                      {t ? "El Gran Sueño de Cris" : "Cris's Big Dream"}
                    </h2>
                    <p className="text-muted-foreground text-[15px] leading-relaxed mb-6">
                      {t ? "Un niño apasionado por el tenis enfrenta desafíos para alcanzar su gran sueño. Una historia de perseverancia, esfuerzo y amor por el deporte." : "A boy passionate about tennis faces challenges to achieve his big dream. A story of perseverance, effort, and love for sport."}
                    </p>
                    <a href="https://drive.google.com/file/d/1om4ew8uDccRSxu-CHqDueuWVKJPk-dX_/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-primary">
                      {t ? "Descargar cuento" : "Download story"} <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-[hsl(220,16%,97%)]" id="faq">
        <div className="container-page">
          <Reveal>
            <div className="text-center mb-12">
              <p className="section-eyebrow"><MessageCircle className="w-3.5 h-3.5" />{t ? "Preguntas frecuentes" : "FAQ"}</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">{t ? "¿Tienes dudas?" : "Have questions?"}</h2>
            </div>
          </Reveal>
          <div className="max-w-2xl mx-auto flex flex-col gap-3">
            {faqItems.map((item, i) => {
              const isOpen = openFaq === i;
              const q = t ? item.questionEs : item.questionEn;
              const a = t ? item.answerEs : item.answerEn;
              return (
                <Reveal key={i} delay={i * 50}>
                  <div className="faq-item">
                    <button className="faq-trigger px-6" onClick={() => toggle(i)} aria-expanded={isOpen}>
                      <span>{q}</span>
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-primary text-white rotate-180" : "bg-secondary text-muted-foreground"}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>
                    <div className={`faq-content px-6 transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 !pb-0"}`}>{a}</div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonios ──────────────────────────────────────────────────────── */}
      <section className="section-padding bg-white" id="testimonios">
        <div className="container-page">
          <Reveal>
            <div className="text-center mb-12 max-w-lg mx-auto">
              <p className="section-eyebrow justify-center"><Quote className="w-3.5 h-3.5" />{t ? "Testimonios" : "Testimonials"}</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">{t ? "Lo que dicen nuestros estudiantes" : "What our students say"}</h2>
              <p className="text-muted-foreground text-base">{t ? "Historias reales de personas que estudian entre el trabajo, el bus y la casa." : "Real stories from people studying between work, the bus, and home."}</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {[0,1,2].map(col => {
                const colItems = items.filter((_, i) => i % 3 === col);
                const dur = [24, 29, 26][col];
                return (
                  <div key={col} className={col === 2 ? "hidden lg:block" : ""}>
                    <div className="overflow-hidden h-[640px] [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]">
                      <div className="flex flex-col gap-5 animate-marquee-y" style={{ "--marquee-duration": `${dur}s` } as React.CSSProperties}>
                        {[0,1].map(dup => (
                          <div key={dup} className="flex flex-col gap-5" aria-hidden={dup === 1}>
                            {colItems.map((item, i) => (
                              <div key={`${dup}-${i}`} className="p-6 rounded-3xl border-2 border-border bg-white shadow-sm w-full">
                                <p className="text-[14px] text-foreground leading-relaxed mb-4">"{item.text}"</p>
                                <div className="flex items-center gap-3">
                                  <div className={`w-10 h-10 rounded-full ${AVATAR_PALETTE[item.colorIndex % AVATAR_PALETTE.length]} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                                    {item.author.trim().charAt(0).toUpperCase()}
                                  </div>
                                  <span className="font-bold text-sm text-foreground leading-tight">{item.author}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto ─────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-[hsl(220,16%,97%)]" id="contacto">
        <div className="container-page">
          <Reveal>
            <div className="max-w-2xl mx-auto rounded-3xl bg-[hsl(222,47%,8%)] px-8 py-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none"><div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl" /><div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-emerald-500/8 blur-3xl" /></div>
              <div className="relative z-10 mx-auto w-16 h-16 mb-6"><img src="/OWL_WITH_THE_EARTH.png" alt="" className="w-full h-full object-contain opacity-60 animate-float-slow" loading="lazy" /></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">{t ? "¿Hablamos?" : "Let's connect?"}</h2>
                <p className="text-white/45 mb-8 max-w-xs mx-auto text-[15px] leading-relaxed">{t ? "¿Tienes preguntas, sugerencias o quieres colaborar? Nos encantaría escucharte." : "Have questions, suggestions, or want to collaborate? We'd love to hear from you."}</p>
                <a href="mailto:espanolsinfronteras1@gmail.com" className="btn-accent"><Users className="w-4 h-4" />{t ? "Escribirnos" : "Write to us"}</a>
                <div className="flex justify-center flex-wrap gap-5 mt-10 pt-8 border-t border-white/8">
                  {socialLinks.map(link => (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/75 text-sm font-medium transition-colors">{link.name}</a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
