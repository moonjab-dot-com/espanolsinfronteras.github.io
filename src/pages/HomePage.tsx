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
      {/* Lets-Start illustration — faint, bottom-left energizer */}
      <img src="/Lets-Start-1--Streamline-Barcelona.png" alt="" aria-hidden="true"
        draggable={false} onContextMenu={e => e.preventDefault()} onDragStart={e => e.preventDefault()}
        style={{ position: "absolute", left: "2%", top: "15%", height: "180px", width: "auto", opacity: 0.07, pointerEvents: "none", userSelect: "none", filter: "brightness(3) saturate(0)" }} />

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
      {/* Ride illustration — bottom right energizer */}
      <img src="/Ride-E-Scooter-1--Streamline-Barcelona.png" alt="" aria-hidden="true"
        draggable={false} onContextMenu={e => e.preventDefault()} onDragStart={e => e.preventDefault()}
        style={{ position: "absolute", right: "0", bottom: "0", height: "220px", width: "auto", opacity: 0.1, pointerEvents: "none", userSelect: "none", filter: "saturate(0.3)" }} />
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
          <div className="mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="section-eyebrow"><BookOpen className="w-3.5 h-3.5" />{t ? "Cursos gratuitos" : "Free courses"}</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">
                {t ? "Elige tu camino" : "Choose your path"}
              </h2>
              <p className="text-muted-foreground text-base max-w-xs">
                {t ? "12 materias · 277+ capítulos · Sin registro" : "12 subjects · 277+ chapters · No sign-up"}
              </p>
            </div>
            <div className="hidden md:flex items-center gap-5">
              <img
                src="/Online-Learning-1--Streamline-Barcelona.png"
                alt=""
                aria-hidden="true"
                draggable={false}
                onContextMenu={e => e.preventDefault()}
                onDragStart={e => e.preventDefault()}
                style={{ height: "120px", width: "auto", objectFit: "contain", opacity: 0.92, filter: "drop-shadow(0 8px 20px rgba(34,87,122,0.18))", userSelect: "none" }}
                loading="lazy"
              />
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

function ImpactSection() {
  const { lang } = useLanguage();
  const t = lang === "es";
  const stats = [
    { value: "72+",  Icon: Globe,         color: "#3B82F6", label: t ? "Países"    : "Countries",  desc: t ? "en todo el mundo"   : "worldwide"              },
    { value: "277+", Icon: BookOpen,      color: "#22C55E", label: t ? "Lecciones" : "Lessons",    desc: t ? "capítulos gratuitos": "free chapters"           },
    { value: "12",   Icon: GraduationCap, color: "#8B5CF6", label: t ? "Materias"  : "Subjects",   desc: t ? "STEM, idiomas y más": "STEM, languages & more"  },
    { value: "$0",   Icon: Heart,         color: "#F43F5E", label: t ? "Costo"     : "Cost",       desc: t ? "siempre gratis"     : "always free"             },
  ];
  return (
    <section style={{ background: "#080D1C", padding: "48px 0 0" }}>
      {/* ESF logo header — "Todo lo que encuentras en ESF" */}
      <div className="container-page" style={{ paddingBottom: "32px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.16em", color: "rgba(255,255,255,0.3)" }}>
              {t ? "Todo lo que encuentras en" : "Everything you find in"}
            </span>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>Español Sin Fronteras</span>
          </div>
        </Reveal>
      </div>
      <div className="container-page" style={{ padding: "0 20px" }}>
        <div className="grid-impact" style={{ gap: "0" }}>
          {stats.map(({ value, Icon, color, label, desc }, i) => (
            <Reveal key={value} delay={i * 60}>
              <div style={{
                display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px",
                padding: "28px 24px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                  <Icon style={{ width: "14px", height: "14px", color }} />
                  <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", color: "rgba(255,255,255,0.3)" }}>{label}</span>
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
      {/* Floating illustration — Get Job Promotion */}
      <img src="/Get-Job-Promotion-1--Streamline-Barcelona.png" alt="" aria-hidden="true"
        draggable={false}
        onContextMenu={e => e.preventDefault()}
        onDragStart={e => e.preventDefault()}
        style={{ position: "absolute", right: "5%", bottom: "120px", height: "200px", width: "auto", opacity: 0.12, pointerEvents: "none", userSelect: "none", filter: "brightness(2) saturate(0)" }} />

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
                ? "131 oportunidades verificadas para jóvenes peruanos. Becas internacionales, olimpiadas, liderazgo, MUN, tech y más."
                : "131 verified opportunities for Peruvian students. International scholarships, olympiads, leadership, MUN, tech and more."}
            </p>
          </div>
        </Reveal>

        {/* ── 3 Feature cards — Neo-brutalist ── */}
        <div className="grid-opp-cards" style={{ marginBottom: "0" }}>
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

      </div>

      {/* ── Stats + CTA bar — full width outside container ── */}
      <Reveal delay={300}>
        <div style={{
          marginTop: "32px",
          padding: "20px 40px",
          background: "#84cc16",
          display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px",
        }}>
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
            {[
              { v: "131", l: t ? "oportunidades" : "opportunities" },
              { v: "20+",l: t ? "gratuitas"     : "free" },
              { v: "6",  l: t ? "categorías"    : "categories" },
              { v: "100%", l: t ? "verificadas" : "verified" },
            ].map(({ v, l }) => (
              <div key={l} style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700, color: "#080D1C", lineHeight: 1, letterSpacing: "-0.03em" }}>{v}</span>
                <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.1em", color: "rgba(8,13,28,0.55)" }}>{l}</span>
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

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────

function TestimonialsSection() {
  const { lang } = useLanguage();
  const t = lang === "es";
  const items = testimonials.map((tm, i) => ({ text: tm.text, author: tm.author, colorIndex: i }));

  return (
    <section style={{ background: "#EEF1F9", padding: "80px 0", position: "relative", overflow: "hidden" }} id="comentarios">
      <img src="/FacetimeMeeting-Streamline.svg" alt="" aria-hidden="true"
        style={{ position: "absolute", right: "-20px", top: "30px", width: "240px", opacity: 0.05, pointerEvents: "none", userSelect: "none" }} />
      <img src="/Team-Success-1--Streamline-Barcelona.png" alt="" aria-hidden="true"
        draggable={false} onContextMenu={e => e.preventDefault()} onDragStart={e => e.preventDefault()}
        style={{ position: "absolute", right: "2%", bottom: 0, height: "55%", width: "auto", opacity: 0.08, pointerEvents: "none", userSelect: "none", filter: "saturate(0)" }} />
      <img src="/Digital-Nomad-Working-In-Airport-2--Streamline-Barcelona.png" alt="" aria-hidden="true"
        draggable={false} onContextMenu={e => e.preventDefault()} onDragStart={e => e.preventDefault()}
        style={{ position: "absolute", left: "0", bottom: "0", height: "55%", width: "auto", opacity: 0.07, pointerEvents: "none", userSelect: "none", filter: "saturate(0)" }} />
      <div className="container-page" style={{ position: "relative", zIndex: 1 }}>
        <Reveal>
          <div style={{ marginBottom: "48px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "99px", background: "rgba(132,204,22,0.1)", border: "1px solid rgba(132,204,22,0.25)", marginBottom: "20px" }}>
              <Quote style={{ width: "13px", height: "13px", color: "#84cc16" }} />
              <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.14em", color: "#84cc16" }}>{t ? "Testimonios" : "Testimonials"}</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#0f172a", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "8px" }}>
              {t ? "Lo que dicen nuestros estudiantes" : "What our students say"}
            </h2>
            <p style={{ fontSize: "15px", color: "#6b7280", maxWidth: "420px" }}>
              {t ? "Historias reales de personas que estudian entre el trabajo, el bus y la casa." : "Real stories from people studying between work, the bus, and home."}
            </p>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
            {[0, 1, 2].map(col => {
              const colItems = items.filter((_, i) => i % 3 === col);
              const dur = [24, 29, 26][col];
              return (
                <div key={col} className={col === 2 ? "hidden lg:block" : ""}>
                  <div className="overflow-hidden h-[600px] [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]">
                    <div className="flex flex-col gap-4 animate-marquee-y" style={{ "--marquee-duration": `${dur}s` } as React.CSSProperties}>
                      {[0, 1].map(dup => (
                        <div key={dup} className="flex flex-col gap-4" aria-hidden={dup === 1}>
                          {colItems.map((item, i) => (
                            <div key={`${dup}-${i}`} style={{ padding: "20px 22px", borderRadius: "16px", border: "2px solid #e5e7eb", background: "#fff", boxShadow: "2px 2px 0 #e5e7eb" }}>
                              <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.6, marginBottom: "14px" }}>"{item.text}"</p>
                              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <div className={`w-9 h-9 rounded-full ${AVATAR_PALETTE[item.colorIndex % AVATAR_PALETTE.length]} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                                  {item.author.trim().charAt(0).toUpperCase()}
                                </div>
                                <span style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a" }}>{item.author}</span>
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
  );
}

// ─── CONTACT CTA ──────────────────────────────────────────────────────────────

function ContactSection() {
  const { lang } = useLanguage();
  const t = lang === "es";
  const socialLinks = [
    {
      name: "Instagram", url: "https://www.instagram.com/espanol_sin_fronteras_org",
      color: "#E1306C",
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
    },
    {
      name: "TikTok", url: "https://www.tiktok.com/@espanolsinfronteras.org",
      color: "#fff",
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z"/></svg>,
    },
    {
      name: "Facebook", url: "https://www.facebook.com/people/Espa%C3%B1ol-Sin-Fronteras/pfbid04dD4Hdgp7QjQ5q3L2ydkDx9CqPvcTE2TKZqZuqkmSnmwRqYXtESSnqZ6CCSwnnVLl/",
      color: "#1877F2",
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
    },
    {
      name: "LinkedIn", url: "https://www.linkedin.com/company/espa%C3%B1ol-sin-fronteras",
      color: "#0A66C2",
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
    },
    {
      name: "Spotify", url: "https://open.spotify.com/show/02sYDMUgYDPOZg2ypgDnhd",
      color: "#1DB954",
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>,
    },
  ];
  return (
    <section style={{ background: "#080D1C", padding: "80px 0", position: "relative", overflow: "hidden" }} id="contacto">
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(132,204,22,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
      <img src="/OnlineLearning-Streamline.svg" alt="" aria-hidden="true"
        style={{ position: "absolute", right: "-20px", bottom: "-20px", width: "280px", opacity: 0.04, pointerEvents: "none", userSelect: "none" }} />
      <img src="/Becoming-Rich-1--Streamline-Barcelona.png" alt="" aria-hidden="true"
        draggable={false} onContextMenu={e => e.preventDefault()} onDragStart={e => e.preventDefault()}
        style={{ position: "absolute", left: "3%", bottom: 0, height: "70%", width: "auto", opacity: 0.09, pointerEvents: "none", userSelect: "none", filter: "brightness(2) saturate(0)" }} />
      <div className="container-page" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <Reveal>
          <div style={{ maxWidth: "560px", margin: "0 auto" }}>
            <div style={{ width: "72px", height: "72px", margin: "0 auto 24px" }}>
              <img src="/owl-logo.png" alt="" aria-hidden="true" className="animate-float-slow"
                style={{ width: "100%", height: "100%", objectFit: "contain", opacity: 0.75 }} loading="lazy" />
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "99px", background: "rgba(132,204,22,0.1)", border: "1px solid rgba(132,204,22,0.25)", marginBottom: "20px" }}>
              <Sparkles style={{ width: "13px", height: "13px", color: "#84cc16" }} />
              <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.14em", color: "#84cc16" }}>{t ? "¿Hablamos?" : "Let's connect"}</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#fff", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "16px" }}>
              {t ? <>¿Tienes algo<br /><span style={{ color: "#84cc16" }}>que decirnos?</span></> : <>Something<br /><span style={{ color: "#84cc16" }}>to tell us?</span></>}
            </h2>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: "380px", margin: "0 auto 36px" }}>
              {t ? "¿Tienes preguntas, sugerencias o quieres colaborar? Nos encantaría escucharte." : "Have questions, suggestions, or want to collaborate? We'd love to hear from you."}
            </p>
            {/* Email capture form */}
            <form
              action="https://formsubmit.co/espanolsinfronteras1@gmail.com"
              method="POST"
              style={{ marginBottom: "24px" }}
            >
              <input type="hidden" name="_subject" value="Nueva suscripción ESF — avísame de oportunidades" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", marginBottom: "12px" }}>
                {t ? "Recibe nuevas oportunidades directamente en tu correo:" : "Get new opportunities directly in your inbox:"}
              </p>
              <div style={{ display: "flex", gap: "8px", maxWidth: "400px", margin: "0 auto" }}>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t ? "Tu correo electrónico" : "Your email address"}
                  style={{
                    flex: 1, padding: "12px 16px", borderRadius: "10px",
                    border: "1.5px solid rgba(132,204,22,0.3)", background: "rgba(255,255,255,0.06)",
                    color: "#fff", fontSize: "14px", outline: "none",
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = "#84cc16")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(132,204,22,0.3)")}
                />
                <button
                  type="submit"
                  style={{ padding: "12px 20px", background: "#84cc16", color: "#080D1C", fontSize: "13px", fontWeight: 800, borderRadius: "10px", border: "none", cursor: "pointer", whiteSpace: "nowrap" as const, transition: "opacity 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >
                  {t ? "Suscribirme" : "Subscribe"}
                </button>
              </div>
            </form>

            <a href="mailto:espanolsinfronteras1@gmail.com"
              style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "16px 36px", background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.7)", fontSize: "15px", fontWeight: 700, borderRadius: "12px", textDecoration: "none", letterSpacing: "0.03em", transition: "opacity 0.15s", border: "1.5px solid rgba(255,255,255,0.1)" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
              <Mail style={{ width: "16px", height: "16px" }} />
              {t ? "Escribirnos" : "Write to us"}
            </a>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "12px", marginTop: "40px", paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              {socialLinks.map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 18px", borderRadius: "10px", border: "1.5px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", fontSize: "13px", fontWeight: 700, color: "rgba(255,255,255,0.55)", textDecoration: "none", transition: "all 0.18s" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = link.color; el.style.color = "#fff"; el.style.background = `${link.color}18`; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.1)"; el.style.color = "rgba(255,255,255,0.55)"; el.style.background = "rgba(255,255,255,0.04)"; }}>
                  <span style={{ color: link.color, display: "flex", alignItems: "center" }}>{link.icon}</span>
                  {link.name}
                </a>
              ))}
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
