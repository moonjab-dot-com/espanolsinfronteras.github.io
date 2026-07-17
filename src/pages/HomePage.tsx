import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { courses, testimonials } from "@/data/courses";
import {
  ArrowRight, Backpack, BookOpen, ChevronRight, Code, DollarSign,
  ExternalLink, Flame, FlaskConical, Globe, GraduationCap,
  Heart, Lightbulb, Mail, PartyPopper, Quote, Rocket, Sparkles, Trophy, Users, Zap,
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

      {/* SVG illustration — Translate / language — faint behind hero text */}
      <img src="/Translate-Streamline.svg" alt="" aria-hidden="true"
        style={{ position: "absolute", left: "0px", bottom: "0px", width: "280px", opacity: 0.035, pointerEvents: "none", userSelect: "none" }} />

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
                  <div
                    className={`w-14 h-14 rounded-2xl ${color.icon} flex items-center justify-center mb-5 relative z-10 border-2`}
                    style={{ borderColor: color.accent, transition: "transform 0.35s cubic-bezier(0.175,0.885,0.32,1.275)", transformStyle: "preserve-3d" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "perspective(300px) rotateX(-12deg) rotateY(14deg) scale(1.18)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "perspective(300px) rotateX(0deg) rotateY(0deg) scale(1)"; }}
                  >
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
// Neo-brutalist: thick borders, offset shadows, bold Fredoka type, high contrast

const FEATURED_OPPS = [
  {
    id: "yygs",
    nameEs: "YYGS — Yale Young Global Scholars",
    nameEn: "YYGS — Yale Young Global Scholars",
    orgEs: "Universidad de Yale",
    orgEn: "Yale University",
    deadlineEs: "Oct / Nov",
    deadlineEn: "Oct / Nov",
    ageRange: "15–18",
    catColor: "#5b21b6",
    catLabelEs: "Liderazgo",
    catLabelEn: "Leadership",
    isFree: false,
    svgIcon: "/Startup-Streamline.svg",
  },
  {
    id: "fulbright",
    nameEs: "Fulbright Perú",
    nameEn: "Fulbright Peru",
    orgEs: "Comisión Fulbright",
    orgEn: "Fulbright Commission",
    deadlineEs: "Ago / Sep",
    deadlineEn: "Aug / Sep",
    ageRange: "22+",
    catColor: "#0f766e",
    catLabelEs: "Becas",
    catLabelEn: "Scholarships",
    isFree: true,
    svgIcon: "/WalkTogether-Streamline.svg",
  },
  {
    id: "google-gen",
    nameEs: "Generation Google Scholars",
    nameEn: "Generation Google Scholars",
    orgEs: "Google LATAM",
    orgEn: "Google LATAM",
    deadlineEs: "Dic / Ene",
    deadlineEn: "Dec / Jan",
    ageRange: "18+",
    catColor: "#84cc16",
    catLabelEs: "Tecnología",
    catLabelEn: "Technology",
    isFree: true,
    svgIcon: "/OnlineLearning-Streamline.svg",
  },
];

function OpportunitiesTeaser() {
  const { lang } = useLanguage();
  const t = lang === "es";

  return (
    <section style={{ background: "#080D1C", padding: "80px 0 0", position: "relative", overflow: "hidden" }}>

      {/* Background SVG illustration — faint */}
      <img src="/Advertising-Streamline.svg" alt="" aria-hidden="true"
        style={{ position: "absolute", right: "-40px", top: "20px", width: "340px", opacity: 0.04, pointerEvents: "none", userSelect: "none" }} />

      <div className="container-page" style={{ position: "relative", zIndex: 1 }}>

        {/* ── Header ── */}
        <Reveal>
          <div style={{ marginBottom: "48px" }}>
            {/* Eyebrow pill */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "99px", background: "rgba(132,204,22,0.1)", border: "1px solid rgba(132,204,22,0.25)", marginBottom: "20px" }}>
              <Rocket style={{ width: "13px", height: "13px", color: "#84cc16" }} />
              <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#84cc16" }}>
                {t ? "Solo para peruanos · Links verificados" : "For Peruvians · Verified links"}
              </span>
            </div>

            {/* Headline — massive, stacked, Fredoka */}
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 1.0, letterSpacing: "-0.03em", color: "#ffffff",
              marginBottom: "16px",
            }}>
              {t ? (
                <>Tu siguiente<br /><span style={{ color: "#84cc16" }}>gran oportunidad</span><br />existe. ¿La tomas?</>
              ) : (
                <>Your next<br /><span style={{ color: "#84cc16" }}>great opportunity</span><br />exists. Take it?</>
              )}
            </h2>

            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "16px", maxWidth: "420px", lineHeight: 1.6 }}>
              {t
                ? "11 oportunidades verificadas para jóvenes peruanos. Becas, olimpiadas, liderazgo, MUN y más."
                : "11 verified opportunities for Peruvian students. Scholarships, olympiads, leadership, MUN and more."}
            </p>
          </div>
        </Reveal>

        {/* ── 4 Feature cards — Neo-brutalist ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "0" }}>
          {FEATURED_OPPS.map((opp, i) => (
            <Reveal key={opp.id} delay={i * 80}>
              <Link
                to={`/oportunidades/${opp.id}`}
                style={{
                  display: "flex", flexDirection: "column",
                  background: "#111827",
                  border: `2px solid ${opp.catColor}`,
                  borderRadius: "16px",
                  overflow: "hidden",
                  textDecoration: "none",
                  boxShadow: `4px 4px 0 ${opp.catColor}`,
                  transition: "transform 0.15s ease, box-shadow 0.15s ease",
                  position: "relative",
                }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translate(-2px,-2px)"; el.style.boxShadow = `6px 6px 0 ${opp.catColor}`; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translate(0,0)"; el.style.boxShadow = `4px 4px 0 ${opp.catColor}`; }}
              >
                {/* Top accent bar */}
                <div style={{ height: "4px", background: opp.catColor, flexShrink: 0 }} />

                <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column", gap: "12px" }}>
                  {/* Category + Free badge */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: opp.catColor }}>
                      {t ? opp.catLabelEs : opp.catLabelEn}
                    </span>
                    {opp.isFree && (
                      <span style={{ fontSize: "10px", fontWeight: 800, padding: "2px 8px", borderRadius: "6px", background: "rgba(132,204,22,0.15)", color: "#84cc16", border: "1px solid rgba(132,204,22,0.3)" }}>
                        {t ? "GRATIS" : "FREE"}
                      </span>
                    )}
                  </div>

                  {/* Name */}
                  <div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "17px", fontWeight: 700, color: "#ffffff", lineHeight: 1.2, marginBottom: "4px", letterSpacing: "-0.01em" }}>
                      {t ? opp.nameEs : opp.nameEn}
                    </h3>
                    <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>
                      {t ? opp.orgEs : opp.orgEn}
                    </p>
                  </div>

                  {/* Meta chips */}
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "11px", fontWeight: 600, padding: "3px 10px", borderRadius: "6px", background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.55)", display: "flex", alignItems: "center", gap: "4px" }}>
                      <Trophy style={{ width: "10px", height: "10px" }} />
                      {t ? opp.deadlineEs : opp.deadlineEn}
                    </span>
                    <span style={{ fontSize: "11px", fontWeight: 600, padding: "3px 10px", borderRadius: "6px", background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.55)", display: "flex", alignItems: "center", gap: "4px" }}>
                      <Globe style={{ width: "10px", height: "10px" }} />
                      {opp.ageRange} {t ? "años" : "yrs"}
                    </span>
                  </div>

                  {/* CTA */}
                  <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "6px", color: opp.catColor, fontSize: "13px", fontWeight: 700 }}>
                    {t ? "Ver detalles" : "See details"}
                    <ArrowRight style={{ width: "14px", height: "14px" }} />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* ── Stats + CTA bar ── */}
        <Reveal delay={300}>
          <div style={{
            marginTop: "32px",
            padding: "20px 32px",
            background: "#84cc16",
            display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px",
          }}>
            <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
              {[
                { v: "11", l: t ? "oportunidades" : "opportunities" },
                { v: "8",  l: t ? "gratuitas"     : "free" },
                { v: "6",  l: t ? "categorías"    : "categories" },
                { v: "100%", l: t ? "verificadas"  : "verified" },
              ].map(({ v, l }) => (
                <div key={l} style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700, color: "#0A1628", lineHeight: 1, letterSpacing: "-0.03em" }}>{v}</span>
                  <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(10,22,40,0.55)" }}>{l}</span>
                </div>
              ))}
            </div>
            <Link
              to="/oportunidades"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: "#080D1C", color: "#84cc16", fontSize: "14px", fontWeight: 800, borderRadius: "10px", textDecoration: "none", letterSpacing: "0.02em", transition: "opacity 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              {t ? "Ver todas las oportunidades" : "See all opportunities"} <ArrowRight style={{ width: "16px", height: "16px" }} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── NOSOTROS TEASER ──────────────────────────────────────────────────────────

function NosotrosTeaser() {
  const { lang } = useLanguage();
  const t = lang === "es";

  const cards = [
    { icon: Lightbulb, accent: "#3b82f6", textEs: <>Aprender no debería depender del <strong>dinero</strong> ni de las circunstancias.</>, textEn: <>Learning shouldn't depend on <strong>money</strong> or circumstances.</> },
    { icon: Rocket,    accent: "#10b981", textEs: <>277+ capítulos gratuitos creados desde <strong>cero en 2024</strong>.</>,              textEn: <>277+ free chapters built from <strong>scratch in 2024</strong>.</>              },
    { icon: Globe,     accent: "#8b5cf6", textEs: <>Estudiantes en más de <strong>72 países</strong> sin registro y sin barreras.</>,        textEn: <>Students in over <strong>72 countries</strong>, no sign-up, no barriers.</>   },
    { icon: Backpack,  accent: "#f59e0b", textEs: <>Más de <strong>1,471 libros</strong> donados en Lima fuera de la plataforma.</>,         textEn: <>Over <strong>1,471 books</strong> donated in Lima beyond the platform.</>    },
  ];

  return (
    <section style={{ background: "#EEF1F9", padding: "80px 0", position: "relative", overflow: "hidden" }}>
      {/* Faint "GRATIS" watermark */}
      <div aria-hidden="true" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%) rotate(-10deg)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(100px,16vw,200px)", color: "rgba(132,204,22,0.03)", whiteSpace: "nowrap", userSelect: "none", pointerEvents: "none" }}>
        ESF
      </div>
      <div className="container-page" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: "0", marginBottom: "48px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "99px", background: "rgba(132,204,22,0.1)", border: "1px solid rgba(132,204,22,0.25)", marginBottom: "20px", width: "fit-content" }}>
              <Heart style={{ width: "13px", height: "13px", color: "#84cc16" }} />
              <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.14em", color: "#84cc16" }}>{t ? "Sobre nosotros" : "About us"}</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "20px", flexWrap: "wrap" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#0f172a", lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: "480px" }}>
                {t ? <>Un futuro más justo <span style={{ color: "#84cc16" }}>comienza con acceso</span></> : <>A fairer future <span style={{ color: "#84cc16" }}>starts with access</span></>}
              </h2>
              <Link to="/nosotros"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "11px 22px", background: "#080D1C", color: "#84cc16", fontSize: "13px", fontWeight: 800, borderRadius: "10px", textDecoration: "none", letterSpacing: "0.03em", flexShrink: 0, transition: "opacity 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
                {t ? "Conoce la historia" : "Our story"} <ArrowRight style={{ width: "14px", height: "14px" }} />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Founder quote */}
        <Reveal delay={80}>
          <div style={{ padding: "28px 32px", background: "#fff", border: "2px solid #f59e0b", borderRadius: "18px", boxShadow: "5px 5px 0 #f59e0b", marginBottom: "24px", maxWidth: "640px", position: "relative" }}>
            <Quote style={{ position: "absolute", top: "18px", left: "22px", width: "22px", height: "22px", color: "#f59e0b", opacity: 0.4 }} />
            <blockquote style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", fontWeight: 700, color: "#0f172a", lineHeight: 1.4 }}>
              {t ? '"Nadie debería quedarse sin estudiar por falta de tiempo o dinero."' : '"No one should miss out on education due to lack of time or money."'}
            </blockquote>
            <p style={{ marginTop: "12px", fontSize: "12px", fontWeight: 700, color: "#92400e" }}>— Salvador B., {t ? "Fundador" : "Founder"}</p>
          </div>
        </Reveal>

        {/* 4 story cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px", maxWidth: "760px" }}>
          {cards.map((card, i) => (
            <Reveal key={i} delay={i * 70}>
              <div
                style={{ padding: "20px 22px", background: "#fff", border: `2px solid ${card.accent}`, borderRadius: "14px", boxShadow: `4px 4px 0 ${card.accent}`, display: "flex", alignItems: "flex-start", gap: "12px", transition: "transform 0.15s, box-shadow 0.15s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translate(-2px,-2px)"; el.style.boxShadow = `6px 6px 0 ${card.accent}`; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "none"; el.style.boxShadow = `4px 4px 0 ${card.accent}`; }}>
                <card.icon style={{ width: "20px", height: "20px", color: card.accent, flexShrink: 0, marginTop: "2px" }} />
                <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.65, fontWeight: 500 }}>{t ? card.textEs : card.textEn}</p>
              </div>
            </Reveal>
          ))}
        </div>
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
    <section className="section-padding bg-white" id="comentarios" style={{ position: "relative", overflow: "hidden" }}>
      {/* SVG watermark illustration */}
      <img src="/FacetimeMeeting-Streamline.svg" alt="" aria-hidden="true"
        style={{ position: "absolute", right: "-20px", top: "40px", width: "260px", opacity: 0.05, pointerEvents: "none", userSelect: "none" }} />
      <div className="container-page" style={{ position: "relative", zIndex: 1 }}>
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
    <NosotrosTeaser />
    <TestimonialsSection />
    <ContactSection />
  </>
);

export default HomePage;
