import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { courses, testimonials } from "@/data/courses";
import {
  ArrowRight, BookOpen, ChevronRight, Code, DollarSign,
  ExternalLink, Flame, FlaskConical, Globe, GraduationCap,
  Heart, Mail, PartyPopper, Quote, Rocket, Sparkles, Trophy, Zap,
} from "lucide-react";
import { courseIconMap } from "@/lib/course-icons";
import { COURSE_MASCOTS } from "@/lib/course-mascots";

// ─── Reveal ───────────────────────────────────────────────────────────────────

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold, rootMargin: "0px 0px -40px 0px" });
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

// ─── Color map ────────────────────────────────────────────────────────────────

const COLOR_MAP = {
  blue:   { icon: "bg-blue-50 text-blue-600",     accent: "hsl(221,83%,53%)",  badge: "bg-blue-50 text-blue-700 border-blue-100",     masGlow: "from-blue-100/60 to-indigo-100/30"   },
  green:  { icon: "bg-emerald-50 text-emerald-600",accent: "hsl(156,64%,38%)",  badge: "bg-emerald-50 text-emerald-700 border-emerald-100", masGlow: "from-emerald-100/60 to-teal-100/30" },
  teal:   { icon: "bg-teal-50 text-teal-600",     accent: "hsl(172,66%,35%)",  badge: "bg-teal-50 text-teal-700 border-teal-100",     masGlow: "from-teal-100/60 to-cyan-100/30"     },
  violet: { icon: "bg-violet-50 text-violet-600", accent: "hsl(262,83%,58%)",  badge: "bg-violet-50 text-violet-700 border-violet-100", masGlow: "from-violet-100/60 to-purple-100/30" },
  amber:  { icon: "bg-amber-50 text-amber-600",   accent: "hsl(38,92%,50%)",   badge: "bg-amber-50 text-amber-700 border-amber-100",   masGlow: "from-amber-100/60 to-orange-100/30"  },
} as const;

const AVATAR_PALETTE = ["bg-blue-500","bg-emerald-500","bg-amber-500","bg-violet-500","bg-rose-500","bg-teal-500","bg-indigo-500","bg-orange-500","bg-cyan-600"];

// ─── HERO ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  const { lang } = useLanguage();
  const t = lang === "es";
  return (
    <section className="hero-root" id="inicio">
      <div className="container-page relative z-10 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/12 bg-white/5 text-white/75 text-xs font-semibold mb-8">
              <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
              {t ? "100% Gratuito · 277+ lecciones · Quiz interactivo" : "100% Free · 277+ lessons · Interactive quiz"}
            </div>
            <h1 className="animate-fade-up delay-75 text-[2.75rem] sm:text-5xl lg:text-[3.5rem] font-extrabold text-white mb-5 leading-[1.06]">
              {t ? "Aprende" : "Learn"}{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
                {t ? "sin límites" : "without limits"}
              </span>
            </h1>
            <p className="animate-fade-up delay-150 text-[17px] text-white/55 leading-relaxed mb-10 max-w-[480px]">
              {t
                ? "Plataforma educativa gratuita con 277+ lecciones en español, finanzas, programación, matemáticas y más. Sin registro, sin costo, para siempre."
                : "Free educational platform with 277+ lessons covering Spanish, finance, programming, math, and more. No sign-up, no cost, forever."}
            </p>
            <div className="animate-fade-up delay-225 flex flex-wrap gap-3 mb-14">
              <a href="#cursos" className="btn-primary">
                {t ? "Explorar cursos" : "Explore courses"} <ArrowRight className="w-4 h-4" />
              </a>
              <Link to="/nosotros" className="btn-ghost-light">
                {t ? "Nuestra historia" : "Our story"}
              </Link>
            </div>
            <div className="animate-fade-up delay-300 flex gap-8 border-t border-white/8 pt-8">
              {[{ v:"277+", l: t?"Lecciones":"Lessons" },{ v:"72+", l: t?"Países":"Countries" },{ v:"12", l: t?"Materias":"Subjects" }].map(({ v, l }) => (
                <div key={l} className="flex flex-col gap-0.5">
                  <span className="text-2xl font-extrabold text-white tabular-nums" style={{ fontFamily:"var(--font-display)", letterSpacing:"-0.04em" }}>{v}</span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/35">{l}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-3xl scale-110 opacity-25" style={{ background:"radial-gradient(circle, hsl(156,64%,44%), hsl(221,83%,60%))" }} />
              <div className="absolute inset-0 rounded-full blur-xl scale-90 opacity-15" style={{ background:"radial-gradient(circle, hsl(38,92%,60%), transparent)" }} />
              <div className="absolute z-30 -top-20 left-1/2 -translate-x-1/2 animate-float">
                <div className="relative flex items-center gap-2 bg-white rounded-2xl px-4 py-2.5 shadow-xl border-2 border-[hsl(156,64%,42%)]">
                  <PartyPopper className="w-4 h-4 text-[hsl(156,64%,42%)] shrink-0" />
                  <p className="text-[hsl(222,47%,12%)] text-sm font-extrabold whitespace-nowrap">{t ? "¡Vamos a aprender!" : "Let's start learning!"}</p>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r-2 border-b-2 border-[hsl(156,64%,42%)] rotate-45" />
                </div>
              </div>
              <img src="/owl-logo.png" alt={t?"Logo oficial de Español Sin Fronteras":"Official Español Sin Fronteras logo"} className="relative z-10 w-[260px] h-[260px] object-contain drop-shadow-2xl animate-float-slow" width={260} height={260} loading="eager" />
              <div className="absolute z-20 -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-amber-400 border-2 border-amber-300 shadow-lg whitespace-nowrap animate-bounce" style={{ animationDuration:"2.5s" }}>
                <Flame className="w-4 h-4 text-[hsl(222,47%,12%)] shrink-0" />
                <span className="text-[hsl(222,47%,12%)] text-xs font-extrabold">{t?"100% gratis":"100% free"}</span>
              </div>
              {[
                { label: t?"Español":"Spanish",     icon: BookOpen,    top:"4px",   left:"-200px",  delay:0    },
                { label: t?"Finanzas":"Finance",    icon: DollarSign,  top:"200px", left:"-210px",  delay:600  },
                { label: t?"Programación":"Coding", icon: Code,        top:"4px",   right:"-200px", delay:1200 },
                { label: t?"Ciencias":"Science",    icon: FlaskConical,top:"200px", right:"-210px", delay:900  },
              ].map(({ label, icon: PillIcon, delay: d, ...pos }) => (
                <div key={label} className="absolute z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/12 backdrop-blur-sm border border-white/18 text-white text-xs font-semibold whitespace-nowrap animate-float" style={{ animationDelay:`${d}ms`, ...pos }}>
                  <PillIcon className="w-3.5 h-3.5 shrink-0" /> {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 72" fill="none" className="w-full block"><path d="M0 72V28C240 0 480 56 720 36C960 16 1200 56 1440 28V72H0Z" fill="white" /></svg>
      </div>
    </section>
  );
}

// ─── COURSES ──────────────────────────────────────────────────────────────────

function CoursesSection() {
  const { lang } = useLanguage();
  const t = lang === "es";
  return (
    <section className="section-padding bg-white" id="cursos">
      <div className="container-page">
        <Reveal>
          <div className="text-center mb-14">
            <p className="section-eyebrow"><BookOpen className="w-3.5 h-3.5" />{t?"Cursos gratuitos":"Free courses"}</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">{t?"Elige tu camino de aprendizaje":"Choose your learning path"}</h2>
            <p className="text-muted-foreground text-base max-w-sm mx-auto mb-5">{t?"12 materias, 277+ capítulos. Todo 100% gratuito.":"12 subjects, 277+ chapters. All 100% free."}</p>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-50 border-2 border-emerald-200 text-emerald-700 text-sm font-bold">
              <Sparkles className="w-4 h-4" />{t?"Haz clic en cualquier curso y empieza ya — sin registro":"Click any course and start now — no sign-up"}
            </div>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-5">
          {courses.map((course, i) => {
            const color = COLOR_MAP[course.colorClass];
            const Icon = courseIconMap[course.icon];
            const mascot = COURSE_MASCOTS[course.slug];
            return (
              <Reveal key={course.slug} delay={i * 55}>
                <Link to={`/curso/${course.slug}`} className="card-course h-full group block no-underline relative overflow-hidden" style={{ "--card-accent": color.accent } as React.CSSProperties}>
                  {mascot && (
                    <div className="absolute -bottom-3 -right-3 w-28 h-28 pointer-events-none">
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-tl ${color.masGlow} blur-lg`} />
                      <img src={mascot} alt="" className="relative w-full h-full object-contain opacity-[0.18] group-hover:opacity-[0.32] transition-opacity duration-300 select-none" loading="lazy" draggable={false} />
                    </div>
                  )}
                  <div className={`w-14 h-14 rounded-2xl ${color.icon} flex items-center justify-center mb-5 transition-transform duration-200 group-hover:scale-110 group-hover:-rotate-3 relative z-10 border-2`} style={{ borderColor: color.accent }}>
                    {Icon && <Icon className="w-6 h-6" strokeWidth={2.25} />}
                  </div>
                  <h3 className="relative z-10 text-base font-extrabold text-foreground mb-1.5 group-hover:text-primary transition-colors">{t?course.titleEs:course.titleEn}</h3>
                  <p className="relative z-10 text-sm text-muted-foreground leading-relaxed mb-5 flex-1 line-clamp-2">{t?course.descriptionEs:course.descriptionEn}</p>
                  <div className="relative z-10 flex items-center justify-between mt-auto pt-4 gap-3">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-lg border ${color.badge} shrink-0`}>{course.chapters.length} {t?"caps.":"chaps."}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-wide px-4 py-2 rounded-xl text-white transition-transform duration-150 group-hover:scale-105 group-active:scale-95" style={{ background: color.accent }}>
                      {t?"Empezar":"Start"} <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── IMPACT ───────────────────────────────────────────────────────────────────

function ImpactSection() {
  const { lang } = useLanguage();
  const t = lang === "es";
  const stats = [
    { value:"72+",  labelEs:"Países",   labelEn:"Countries", descEs:"Estudiantes en todo el mundo",    descEn:"Students all over the world",       icon: Globe,          iconBg:"bg-blue-500"   },
    { value:"277+", labelEs:"Lecciones",labelEn:"Lessons",   descEs:"Capítulos gratuitos y accesibles",descEn:"Free and accessible chapters",       icon: BookOpen,       iconBg:"bg-emerald-500"},
    { value:"12",   labelEs:"Materias", labelEn:"Subjects",  descEs:"Español, finanzas, STEM y más",   descEn:"Spanish, finance, STEM, and more",   icon: GraduationCap,  iconBg:"bg-violet-500" },
    { value:"$0",   labelEs:"Costo",    labelEn:"Cost",      descEs:"Siempre gratis, sin excepciones", descEn:"Always free, no exceptions",         icon: Heart,          iconBg:"bg-rose-500"   },
  ];
  return (
    <section className="bg-[hsl(222,47%,8%)] py-16 px-5">
      <div className="container-page">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ value, labelEs, labelEn, descEs, descEn, icon: Icon, iconBg }, i) => (
            <Reveal key={value} delay={i * 80}>
              <div className="flex flex-col items-center text-center p-7 bg-white/[0.04] rounded-3xl border-2 border-white/10 gap-3 transition-colors hover:border-white/20">
                <div className={`w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center mb-1 shadow-lg`}><Icon className="w-6 h-6 text-white" /></div>
                <span className="text-4xl font-extrabold text-white tabular-nums" style={{ fontFamily:"var(--font-display)", letterSpacing:"-0.02em" }}>{value}</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/50 mb-1">{t?labelEs:labelEn}</p>
                  <p className="text-[13px] text-white/35 leading-snug">{t?descEs:descEn}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── OPPORTUNITIES TEASER ─────────────────────────────────────────────────────

function OpportunitiesTeaser() {
  const { lang } = useLanguage();
  const t = lang === "es";

  const items = [
    { icon: GraduationCap, color: "bg-blue-50 text-blue-600",    label: t?"Becas":"Scholarships",    sub: t?"PRONABEC, Fulbright, OEA":"PRONABEC, Fulbright, OAS" },
    { icon: Trophy,        color: "bg-amber-50 text-amber-600",  label: t?"Olimpiadas":"Olympiads",  sub: t?"Matemáticas, Ciencias":"Math, Science" },
    { icon: Rocket,        color: "bg-violet-50 text-violet-600",label: t?"Liderazgo":"Leadership",  sub: "LALA, Yale YYGS" },
    { icon: Globe,         color: "bg-teal-50 text-teal-600",    label: "MUN",                       sub: "PCIMUN, Lima MUN" },
    { icon: Zap,           color: "bg-rose-50 text-rose-600",    label: t?"Tecnología":"Technology", sub: "Google, Microsoft" },
    { icon: Mail,          color: "bg-emerald-50 text-emerald-600", label: t?"Mentoría":"Mentoring", sub: t?"MTPE, expertos":"MTPE, experts" },
  ];

  return (
    <section className="section-padding bg-[hsl(220,16%,97%)]">
      <div className="container-page">
        <Reveal>
          <div className="text-center mb-12">
            <p className="section-eyebrow"><Rocket className="w-3.5 h-3.5" />{t?"Solo para peruanos":"For Peruvians only"}</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
              {t?"Oportunidades de ":"Opportunities for "}
              <span className="bg-gradient-to-r from-primary to-teal-500 bg-clip-text text-transparent">
                {t?"crecimiento":"growth"}
              </span>
            </h2>
            <p className="text-muted-foreground text-base max-w-md mx-auto">
              {t
                ? "Becas, olimpiadas, MUNs, liderazgo y más — todo verificado con links directos."
                : "Scholarships, olympiads, MUNs, leadership and more — all verified with direct links."}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {items.map(({ icon: Icon, color, label, sub }, i) => (
            <Reveal key={label} delay={i * 60}>
              <div className="bg-white rounded-2xl border border-slate-200/80 p-5 flex flex-col items-center text-center gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className={`w-11 h-11 rounded-xl ${color} flex items-center justify-center`}><Icon className="w-5 h-5" /></div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{label}</p>
                  <p className="text-slate-400 text-[11px] mt-0.5">{sub}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="text-center">
            <Link to="/oportunidades" className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-2xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-blue-500/20">
              {t?"Ver todas las oportunidades":"See all opportunities"} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS (compact) ───────────────────────────────────────────────────

function TestimonialsSection() {
  const { lang } = useLanguage();
  const t = lang === "es";
  const items = testimonials.map((tm, i) => ({ text: tm.text, author: tm.author, colorIndex: i }));
  const col1 = items.filter((_,i) => i % 3 === 0);
  const col2 = items.filter((_,i) => i % 3 === 1);
  const col3 = items.filter((_,i) => i % 3 === 2);

  return (
    <section className="section-padding bg-white" id="comentarios">
      <div className="container-page">
        <Reveal>
          <div className="text-center mb-12 max-w-lg mx-auto">
            <p className="section-eyebrow justify-center"><Quote className="w-3.5 h-3.5" />{t?"Testimonios":"Testimonials"}</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">{t?"Lo que dicen nuestros estudiantes":"What our students say"}</h2>
            <p className="text-muted-foreground text-base">{t?"Historias reales de personas que estudian entre el trabajo, el bus y la casa.":"Real stories from people studying between work, the bus, and home."}</p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[{ items: col1, dur: 24 }, { items: col2, dur: 29 }, { items: col3, dur: 26 }].map(({ items: colItems, dur }, col) => (
              <div key={col} className={col === 2 ? "hidden lg:block" : ""}>
                <div className="overflow-hidden h-[640px] [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]">
                  <div className="flex flex-col gap-5 animate-marquee-y" style={{ "--marquee-duration": `${dur}s` } as React.CSSProperties}>
                    {[0, 1].map(dup => (
                      <div key={dup} className="flex flex-col gap-5" aria-hidden={dup === 1}>
                        {colItems.map((item, i) => (
                          <div key={`${dup}-${i}`} className="p-6 rounded-3xl border-2 border-border bg-white shadow-sm w-full">
                            <p className="text-[14px] text-foreground leading-relaxed mb-4">"{item.text}"</p>
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-full ${AVATAR_PALETTE[item.colorIndex % AVATAR_PALETTE.length]} flex items-center justify-center text-white font-bold text-sm shrink-0`}>{item.author.trim().charAt(0).toUpperCase()}</div>
                              <span className="font-bold text-sm text-foreground leading-tight">{item.author}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── CONTACT CTA ──────────────────────────────────────────────────────────────

function ContactSection() {
  const { lang } = useLanguage();
  const t = lang === "es";
  return (
    <section className="section-padding bg-[hsl(220,16%,97%)]" id="contacto">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl mx-auto rounded-3xl bg-[hsl(222,47%,8%)] px-8 py-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none"><div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl" /><div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-emerald-500/8 blur-3xl" /></div>
            <div className="relative z-10 mx-auto w-16 h-16 mb-6"><img src="/OWL_WITH_THE_EARTH.png" alt="" className="w-full h-full object-contain opacity-60 animate-float-slow" loading="lazy" /></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">{t?"¿Hablamos?":"Let's connect?"}</h2>
              <p className="text-white/45 mb-8 max-w-xs mx-auto text-[15px] leading-relaxed">{t?"¿Tienes preguntas, sugerencias o quieres colaborar? Nos encantaría escucharte.":"Have questions, suggestions, or want to collaborate? We'd love to hear from you."}</p>
              <a href="mailto:espanolsinfronteras1@gmail.com" className="btn-accent"><Mail className="w-4 h-4" />{t?"Escribirnos":"Write to us"}</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

const HomePage = () => (
  <>
    <HeroSection />
    <CoursesSection />
    <ImpactSection />
    <OpportunitiesTeaser />
    <TestimonialsSection />
    <ContactSection />
  </>
);

export default HomePage;
