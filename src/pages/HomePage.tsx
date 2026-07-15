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
    <section id="inicio" style={{ background: "#080D1C", minHeight: "100svh", paddingTop: "60px", position: "relative", overflow: "hidden", display: "flex", alignItems: "center" }}>

      {/* Subtle dot-grid texture */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />

      {/* Warm glow behind owl */}
      <div style={{ position: "absolute", right: "-80px", top: "50%", transform: "translateY(-50%)", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(132,204,22,0.12) 0%, rgba(132,204,22,0.04) 40%, transparent 70%)", pointerEvents: "none" }} />

      <div className="container-page relative z-10 w-full py-16 lg:py-20">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-0 items-center">

          {/* ── Left: headline stack ────────────────────────────────────── */}
          <div className="max-w-[620px]">

            {/* Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
              style={{ background: "rgba(132,204,22,0.1)", border: "1px solid rgba(132,204,22,0.2)" }}>
              <Sparkles className="w-3.5 h-3.5" style={{ color: "#84CC16" }} />
              <span className="text-[12px] font-bold uppercase tracking-widest" style={{ color: "#84CC16" }}>
                {t ? "Plataforma educativa · 100% gratuita" : "Educational platform · 100% free"}
              </span>
            </div>

            {/* Stacked headline — Fredoka working hard */}
            <h1 className="animate-fade-up delay-75 text-white" style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              marginBottom: "1.5rem",
            }}>
              {t ? (
                <>
                  Aprende.<br />
                  <span style={{ color: "#84CC16" }}>Sin fronteras.</span><br />
                  Sin costo.
                </>
              ) : (
                <>
                  Learn.<br />
                  <span style={{ color: "#84CC16" }}>No borders.</span><br />
                  No cost.
                </>
              )}
            </h1>

            <p className="animate-fade-up delay-150 mb-10" style={{ fontSize: "17px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: "460px" }}>
              {t
                ? "277+ lecciones en español, finanzas, programación, matemáticas y más. Sin registro, para siempre."
                : "277+ lessons in Spanish, finance, coding, math, and more. No sign-up, forever free."}
            </p>

            <div className="animate-fade-up delay-225 flex flex-wrap gap-3 mb-12">
              <a href="#cursos" className="btn-primary">
                {t ? "Explorar cursos" : "Explore courses"} <ArrowRight className="w-4 h-4" />
              </a>
              <Link to="/nosotros" className="btn-ghost-light">
                {t ? "Nuestra historia" : "Our story"}
              </Link>
            </div>

            {/* Stats inline */}
            <div className="animate-fade-up delay-300 flex gap-8 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              {[
                { v: "277+", l: t ? "Lecciones" : "Lessons" },
                { v: "72+",  l: t ? "Países"    : "Countries" },
                { v: "12",   l: t ? "Materias"  : "Subjects" },
                { v: "$0",   l: t ? "Costo"     : "Cost" },
              ].map(({ v, l }) => (
                <div key={l} className="flex flex-col gap-0.5">
                  <span className="font-extrabold text-white tabular-nums" style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", letterSpacing: "-0.04em" }}>{v}</span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: "rgba(255,255,255,0.3)" }}>{l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: owl bleeding off-edge ─────────────────────────── */}
          <div className="hidden lg:block relative" style={{ width: "420px", height: "520px", marginRight: "-80px" }}>
            {/* Amber glow under owl */}
            <div style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(251,191,36,0.18) 0%, transparent 70%)", filter: "blur(20px)" }} />
            <img
              src="/owl-logo.png"
              alt={t ? "Mascota de Español Sin Fronteras" : "Español Sin Fronteras mascot"}
              className="animate-float-slow"
              style={{ position: "relative", zIndex: 10, width: "100%", height: "100%", objectFit: "contain", filter: "drop-shadow(0 30px 60px rgba(132,204,22,0.25)) drop-shadow(0 0 80px rgba(0,0,0,0.5))" }}
              width={420} height={520} loading="eager"
            />
            {/* "GRATIS" amber badge floating */}
            <div className="animate-bounce" style={{ position: "absolute", zIndex: 20, bottom: "60px", left: "20px", animationDuration: "2.8s" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "8px 16px", borderRadius: "14px", background: "#FBBF24", border: "2px solid rgba(251,191,36,0.6)", boxShadow: "0 8px 24px rgba(251,191,36,0.3)" }}>
                <Flame className="w-4 h-4" style={{ color: "#0F172A" }} />
                <span style={{ fontSize: "13px", fontWeight: 800, color: "#0F172A", fontFamily: "var(--font-display)" }}>
                  {t ? "100% GRATIS" : "100% FREE"}
                </span>
              </div>
            </div>
            {/* Subject pills */}
            {[
              { label: t ? "Español"      : "Spanish",  icon: BookOpen,     top: "10%",  left: "-140px", delay: 0    },
              { label: t ? "Finanzas"     : "Finance",  icon: DollarSign,   top: "40%",  left: "-150px", delay: 700  },
              { label: t ? "Programación" : "Coding",   icon: Code,         top: "10%",  right: "0px",   delay: 1400 },
              { label: t ? "Ciencias"     : "Science",  icon: FlaskConical, top: "40%",  right: "0px",   delay: 1000 },
            ].map(({ label, icon: Ic, delay: d, ...pos }) => (
              <div key={label} className="animate-float" style={{ position: "absolute", zIndex: 20, display: "flex", alignItems: "center", gap: "6px", padding: "6px 12px", borderRadius: "99px", background: "rgba(255,255,255,0.09)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.8)", fontSize: "12px", fontWeight: 600, whiteSpace: "nowrap", animationDelay: `${d}ms`, ...pos }}>
                <Ic className="w-3.5 h-3.5 shrink-0" /> {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sharp bottom edge with lime accent stripe */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, transparent 0%, #84CC16 30%, #22C55E 70%, transparent 100%)", opacity: 0.6 }} />
    </section>
  );
}

// ─── COURSES ──────────────────────────────────────────────────────────────────

function CoursesSection() {
  const { lang } = useLanguage();
  const t = lang === "es";
  return (
    <section id="cursos" style={{ background: "#EEF1F9", paddingTop: "80px", paddingBottom: "80px", position: "relative", overflow: "hidden" }}>
      {/* Watermark — "GRATIS" typographic flourish */}
      <div aria-hidden="true" style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%) rotate(-12deg)",
        fontFamily: "var(--font-display)", fontWeight: 700,
        fontSize: "clamp(120px, 20vw, 240px)",
        color: "rgba(132,204,22,0.04)",
        whiteSpace: "nowrap", userSelect: "none", letterSpacing: "-0.02em",
        pointerEvents: "none", zIndex: 0,
      }}>
        {t ? "GRATIS" : "FREE"}
      </div>

      <div className="container-page" style={{ position: "relative", zIndex: 1 }}>
        <Reveal>
          {/* Left-aligned header — breaks the "everything centered" pattern */}
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="section-eyebrow"><BookOpen className="w-3.5 h-3.5" />{t ? "Cursos gratuitos" : "Free courses"}</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">
                {t ? "Elige tu camino" : "Choose your path"}
              </h2>
              <p className="text-muted-foreground text-base max-w-xs">
                {t ? "12 materias · 277+ capítulos · Sin registro" : "12 subjects · 277+ chapters · No sign-up"}
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-50 border-2 border-emerald-200 text-emerald-700 text-sm font-bold shrink-0 self-start sm:self-auto">
              <Sparkles className="w-4 h-4" />{t ? "Empieza ya" : "Start now"}
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
// Slim horizontal strip — no longer a heavy separate section

function ImpactSection() {
  const { lang } = useLanguage();
  const t = lang === "es";
  const stats = [
    { value: "72+",  Icon: Globe,          color: "#3B82F6", label: t ? "Países"    : "Countries",  desc: t ? "en todo el mundo"          : "worldwide"             },
    { value: "277+", Icon: BookOpen,       color: "#22C55E", label: t ? "Lecciones" : "Lessons",    desc: t ? "capítulos gratuitos"        : "free chapters"         },
    { value: "12",   Icon: GraduationCap,  color: "#8B5CF6", label: t ? "Materias"  : "Subjects",   desc: t ? "STEM, idiomas y más"        : "STEM, languages & more" },
    { value: "$0",   Icon: Heart,          color: "#F43F5E", label: t ? "Costo"     : "Cost",       desc: t ? "siempre gratis"             : "always free"           },
  ];
  return (
    <section style={{ background: "#080D1C", padding: "0" }}>
      <div className="container-page" style={{ padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          {stats.map(({ value, Icon, color, label, desc }, i) => (
            <Reveal key={value} delay={i * 60}>
              <div style={{
                display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px",
                padding: "28px 24px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                  <Icon style={{ width: "14px", height: "14px", color }} />
                  <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.3)" }}>{label}</span>
                </div>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.04em", color: "#fff", lineHeight: 1 }}>{value}</span>
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.28)", lineHeight: 1.4 }}>{desc}</span>
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
    { icon: Rocket,        color: "bg-violet-50 text-violet-600",label: t?"Liderazgo":"Leadership",  sub: t?"Yale YYGS, Santander":"Yale YYGS, Santander" },
    { icon: Globe,         color: "bg-teal-50 text-teal-600",    label: "MUN",                       sub: "PCIMUN, Lima MUN" },
    { icon: Zap,           color: "bg-rose-50 text-rose-600",    label: t?"Tecnología":"Technology", sub: "Google, Microsoft" },
    { icon: Mail,          color: "bg-emerald-50 text-emerald-600", label: t?"Mentoría":"Mentoring", sub: t?"MTPE, expertos":"MTPE, experts" },
  ];

  return (
    <section className="section-padding" style={{ background: "#ffffff" }}>
      <div className="container-page">
        <Reveal>
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="section-eyebrow"><Rocket className="w-3.5 h-3.5" />{t ? "Solo para peruanos" : "For Peruvians"}</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">
                {t ? "Oportunidades reales" : "Real opportunities"}
              </h2>
              <p className="text-muted-foreground text-base max-w-xs">
                {t
                  ? "Becas, olimpiadas y más — links verificados."
                  : "Scholarships, olympiads & more — verified links."}
              </p>
            </div>
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
