import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { courses, testimonials, faqItems, socialLinks } from "@/data/courses";
import {
  ArrowRight, BookOpen, ChevronDown, ChevronRight,
  ExternalLink, GraduationCap, Globe, Heart,
  Mail, MessageCircle, Quote, Sparkles,
} from "lucide-react";
import { courseIconMap } from "@/lib/course-icons";
import { COURSE_MASCOTS } from "@/lib/course-mascots";
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import ScrollCardStack from "@/components/ui/scroll-card";
import ScrollFAQAccordion from "@/components/ui/scroll-faqaccordion";

// ─── Scroll-reveal hook ───────────────────────────────────────────────────────

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, inView]);

  return { ref, inView };
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(20px)",
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Color map for course cards ───────────────────────────────────────────────

const COLOR_MAP = {
  blue: {
    icon:     "bg-blue-50 text-blue-600",
    accent:   "hsl(221,83%,53%)",
    badge:    "bg-blue-50 text-blue-700 border-blue-100",
    masGlow:  "from-blue-100/60 to-indigo-100/30",
  },
  green: {
    icon:     "bg-emerald-50 text-emerald-600",
    accent:   "hsl(156,64%,38%)",
    badge:    "bg-emerald-50 text-emerald-700 border-emerald-100",
    masGlow:  "from-emerald-100/60 to-teal-100/30",
  },
  teal: {
    icon:     "bg-teal-50 text-teal-600",
    accent:   "hsl(172,66%,35%)",
    badge:    "bg-teal-50 text-teal-700 border-teal-100",
    masGlow:  "from-teal-100/60 to-cyan-100/30",
  },
  violet: {
    icon:     "bg-violet-50 text-violet-600",
    accent:   "hsl(262,83%,58%)",
    badge:    "bg-violet-50 text-violet-700 border-violet-100",
    masGlow:  "from-violet-100/60 to-purple-100/30",
  },
  amber: {
    icon:     "bg-amber-50 text-amber-600",
    accent:   "hsl(38,92%,50%)",
    badge:    "bg-amber-50 text-amber-700 border-amber-100",
    masGlow:  "from-amber-100/60 to-orange-100/30",
  },
} as const;

// ─── Alliance marquee data ────────────────────────────────────────────────────

const ALLIANCE_ROW1 = [
  "UNAM", "PUCP", "UBA", "Universidad de Chile", "U. de Los Andes",
  "UCR", "ESPOL", "USP", "U. Complutense", "UTN", "UDLAP", "UNMSM",
];

const ALLIANCE_ROW2 = [
  "🇲🇽 México", "🇵🇪 Perú", "🇦🇷 Argentina", "🇨🇱 Chile", "🇨🇴 Colombia",
  "🇧🇷 Brasil", "🇪🇸 España", "🇺🇸 EE.UU.", "🇨🇷 Costa Rica", "🇪🇨 Ecuador",
  "🇻🇪 Venezuela", "🇬🇹 Guatemala", "🇩🇴 R. Dominicana", "🇧🇴 Bolivia",
];


// ─────────────────────────────────────────────────────────────────────────────
// HERO SECTION
// ─────────────────────────────────────────────────────────────────────────────

function HeroSection() {
  const { lang } = useLanguage();
  const t = lang === "es";

  return (
    <section
      className="hero-root"
      id="inicio"
      aria-label={t ? "Sección principal" : "Main section"}
    >
      <div className="container-page relative z-10 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: copy ─────────────────────────────────────────────────*/}
          <div>
            <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/12 bg-white/5 text-white/75 text-xs font-semibold mb-8">
              <Sparkles className="w-3 h-3 text-amber-400 shrink-0" aria-hidden="true" />
              {t ? "100% Gratuito · 72+ países · Sin registro" : "100% Free · 72+ countries · No sign-up"}
            </div>

            <h1 className="animate-fade-up delay-75 text-[2.75rem] sm:text-5xl lg:text-[3.5rem] font-extrabold text-white mb-5 leading-[1.06]">
              {t ? "Aprende" : "Learn"}{" "}
              <span
                className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent"
                aria-label={t ? "sin límites" : "without limits"}
              >
                {t ? "sin límites" : "without limits"}
              </span>
            </h1>

            <p className="animate-fade-up delay-150 text-[17px] text-white/55 leading-relaxed mb-10 max-w-[480px]">
              {t
                ? "Plataforma educativa gratuita con 89+ lecciones en español, finanzas, programación, matemáticas y más. Sin registro, sin costo, para siempre."
                : "Free educational platform with 89+ lessons covering Spanish, finance, programming, math, and more. No sign-up, no cost, forever."}
            </p>

            <div className="animate-fade-up delay-225 flex flex-wrap gap-3 mb-14">
              <a href="#cursos" className="btn-primary">
                {t ? "Explorar cursos" : "Explore courses"}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a href="#historia" className="btn-ghost-light">
                {t ? "Nuestra historia" : "Our story"}
              </a>
            </div>

            {/* Stats */}
            <div className="animate-fade-up delay-300 flex gap-8 border-t border-white/8 pt-8">
              {[
                { v: "89+", l: t ? "Lecciones" : "Lessons" },
                { v: "72+", l: t ? "Países" : "Countries" },
                { v: "9",   l: t ? "Materias" : "Subjects"  },
              ].map(({ v, l }) => (
                <div key={l} className="flex flex-col gap-0.5">
                  <span className="text-2xl font-extrabold text-white tabular-nums" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}>
                    {v}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/35">
                    {l}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: owl mascot ───────────────────────────────────────────*/}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* Multi-layer glow */}
              <div
                className="absolute inset-0 rounded-full blur-3xl scale-110 opacity-25"
                style={{ background: "radial-gradient(circle, hsl(156,64%,44%), hsl(221,83%,60%))" }}
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 rounded-full blur-xl scale-90 opacity-15"
                style={{ background: "radial-gradient(circle, hsl(38,92%,60%), transparent)" }}
                aria-hidden="true"
              />

              <img
                src="/owl-logo.png"
                alt={t ? "Logo oficial de Español Sin Fronteras" : "Official Español Sin Fronteras logo"}
                className="relative z-10 w-[260px] h-[260px] object-contain drop-shadow-2xl animate-float-slow"
                width={260}
                height={260}
                loading="eager"
                fetchPriority="high"
              />

              {/* Floating subject pills */}
              {[
                { label: t ? "📚 Español"    : "📚 Spanish",       top: "-10%",  left: "-32%",  delay: 0    },
                { label: t ? "💰 Finanzas"   : "💰 Finance",       top: "68%",   left: "-30%",  delay: 600  },
                { label: t ? "💻 Programación" : "💻 Coding",      top: "-8%",   right: "-26%", delay: 1200 },
                { label: t ? "🔬 Ciencias"   : "🔬 Science",       top: "72%",   right: "-28%", delay: 900  },
              ].map(({ label, delay: d, ...pos }) => (
                <div
                  key={label}
                  className="absolute z-20 px-3 py-1.5 rounded-full bg-white/12 backdrop-blur-sm border border-white/18 text-white text-xs font-semibold whitespace-nowrap animate-float"
                  style={{ animationDelay: `${d}ms`, ...pos }}
                  aria-hidden="true"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 72" fill="none" className="w-full block">
          <path d="M0 72V28C240 0 480 56 720 36C960 16 1200 56 1440 28V72H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// COURSES SECTION
// ─────────────────────────────────────────────────────────────────────────────

function CoursesSection() {
  const { lang } = useLanguage();
  const t = lang === "es";

  return (
    <section className="section-padding bg-white" id="cursos" aria-labelledby="cursos-heading">
      <div className="container-page">
        <Reveal>
          <div className="text-center mb-14">
            <p className="section-eyebrow">
              <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
              {t ? "Cursos gratuitos" : "Free courses"}
            </p>
            <h2 id="cursos-heading" className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
              {t ? "Elige tu camino de aprendizaje" : "Choose your learning path"}
            </h2>
            <p className="text-muted-foreground text-base max-w-sm mx-auto">
              {t
                ? "9 materias, 89+ capítulos. Todo 100% gratuito, sin registro."
                : "9 subjects, 89+ chapters. All 100% free, no sign-up."}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-5">
          {courses.map((course, i) => {
            const color = COLOR_MAP[course.colorClass];
            const Icon = courseIconMap[course.icon];
            const mascot = COURSE_MASCOTS[course.slug];

            return (
              <Reveal key={course.slug} delay={i * 55}>
                <Link
                  to={`/curso/${course.slug}`}
                  className="card-course h-full group block no-underline relative overflow-hidden"
                  style={{ "--card-accent": color.accent } as React.CSSProperties}
                  aria-label={`${t ? course.titleEs : course.titleEn} — ${course.chapters.length} ${t ? "capítulos" : "chapters"}`}
                >
                  {/* Owl mascot — decorative background illustration */}
                  {mascot && (
                    <div
                      className={`absolute -bottom-3 -right-3 w-28 h-28 pointer-events-none`}
                      aria-hidden="true"
                    >
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-tl ${color.masGlow} blur-lg`} />
                      <img
                        src={mascot}
                        alt=""
                        className="relative w-full h-full object-contain opacity-[0.18] group-hover:opacity-[0.32] transition-opacity duration-300 select-none"
                        loading="lazy"
                        draggable={false}
                      />
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl ${color.icon} flex items-center justify-center mb-5 transition-transform duration-200 group-hover:scale-110 relative z-10`}>
                    {Icon && <Icon className="w-5 h-5" strokeWidth={2} aria-hidden="true" />}
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 text-[15px] font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                    {t ? course.titleEs : course.titleEn}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 text-sm text-muted-foreground leading-relaxed mb-5 flex-1 line-clamp-2">
                    {t ? course.descriptionEs : course.descriptionEn}
                  </p>

                  {/* Footer */}
                  <div className="relative z-10 flex items-center justify-between mt-auto pt-4 border-t border-border/60">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg border ${color.badge}`}>
                      {course.chapters.length} {t ? "caps." : "chaps."}
                    </span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
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

// ─────────────────────────────────────────────────────────────────────────────
// IMPACT STATS
// ─────────────────────────────────────────────────────────────────────────────

function ImpactSection() {
  const { lang } = useLanguage();
  const t = lang === "es";

  const stats = [
    {
      value: "72+",
      labelEs: "Países",
      labelEn: "Countries",
      descEs: "Estudiantes en todo el mundo",
      descEn: "Students all over the world",
      icon: Globe,
    },
    {
      value: "89+",
      labelEs: "Lecciones",
      labelEn: "Lessons",
      descEs: "Capítulos gratuitos y accesibles",
      descEn: "Free and accessible chapters",
      icon: BookOpen,
    },
    {
      value: "9",
      labelEs: "Materias",
      labelEn: "Subjects",
      descEs: "Español, finanzas, STEM y más",
      descEn: "Spanish, finance, STEM, and more",
      icon: GraduationCap,
    },
    {
      value: "$0",
      labelEs: "Costo",
      labelEn: "Cost",
      descEs: "Siempre gratis, sin excepciones",
      descEn: "Always free, no exceptions",
      icon: Heart,
    },
  ];

  return (
    <section
      className="bg-[hsl(222,47%,8%)] py-16 px-5"
      aria-label={t ? "Impacto de la plataforma" : "Platform impact"}
    >
      <div className="container-page">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/6 rounded-2xl overflow-hidden border border-white/6">
          {stats.map(({ value, labelEs, labelEn, descEs, descEn, icon: Icon }, i) => (
            <Reveal key={value} delay={i * 80}>
              <div className="flex flex-col items-center text-center p-8 bg-[hsl(222,47%,8%)] gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/6 flex items-center justify-center mb-1">
                  <Icon className="w-5 h-5 text-white/50" aria-hidden="true" />
                </div>
                <span
                  className="text-4xl font-extrabold text-white tabular-nums"
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}
                  aria-label={value}
                >
                  {value}
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/40 mb-1">
                    {t ? labelEs : labelEn}
                  </p>
                  <p className="text-[13px] text-white/30 leading-snug">
                    {t ? descEs : descEn}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ALLIANCES / GLOBAL COMMUNITY
// ─────────────────────────────────────────────────────────────────────────────

function AlliancesSection() {
  const { lang } = useLanguage();
  const t = lang === "es";

  // Duplicate each row for seamless infinite loop
  const row1 = [...ALLIANCE_ROW1, ...ALLIANCE_ROW1];
  const row2 = [...ALLIANCE_ROW2, ...ALLIANCE_ROW2];

  return (
    <section
      className="bg-[hsl(222,47%,8%)] py-16 overflow-hidden"
      aria-labelledby="alliances-heading"
    >
      <div className="container-page mb-10">
        <Reveal>
          <div className="text-center">
            <p className="section-eyebrow">
              <Globe className="w-3.5 h-3.5" aria-hidden="true" />
              {t ? "Comunidad educativa global" : "Global educational community"}
            </p>
            <h2
              id="alliances-heading"
              className="text-2xl sm:text-3xl font-extrabold text-white mb-3"
            >
              {t
                ? "Aprendices de todo el mundo"
                : "Learners from around the world"}
            </h2>
            <p className="text-white/40 text-sm max-w-sm mx-auto leading-relaxed">
              {t
                ? "Estudiantes de universidades e instituciones en más de 72 países."
                : "Students from universities and institutions in over 72 countries."}
            </p>
          </div>
        </Reveal>
      </div>

      {/* Row 1 — universities, scrolling left */}
      <div
        className="marquee-wrapper marquee-mask overflow-hidden py-2.5"
        aria-hidden="true"
      >
        <div
          className="flex animate-marquee"
          style={{ width: "max-content", gap: "1rem" }}
        >
          {row1.map((name, i) => (
            <span
              key={i}
              className="flex-shrink-0 px-5 py-2.5 rounded-xl whitespace-nowrap text-sm font-semibold border border-white/8 bg-white/[0.04] text-white/55"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — countries with flags, scrolling right */}
      <div
        className="marquee-wrapper marquee-mask overflow-hidden py-2.5 mt-3"
        aria-hidden="true"
      >
        <div
          className="flex animate-marquee-reverse"
          style={{ width: "max-content", gap: "1rem" }}
        >
          {row2.map((name, i) => (
            <span
              key={i}
              className="flex-shrink-0 px-5 py-2.5 rounded-xl whitespace-nowrap text-sm font-semibold border border-white/8 bg-white/[0.04] text-white/65"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STORY SCROLL SECTION — immersive 3-panel narrative (replaces MissionSection)
// ─────────────────────────────────────────────────────────────────────────────

function StoryScrollSection() {
  const { lang } = useLanguage();
  const t = lang === "es";

  return (
    <div id="historia" aria-label={t ? "Nuestra historia" : "Our story"}>
      <FlowArt aria-label={t ? "La historia de Español Sin Fronteras" : "The story of Español Sin Fronteras"}>

        {/* Panel 1 — The challenge */}
        <FlowSection
          aria-label={t ? "El desafío" : "The challenge"}
          style={{ background: "hsl(222,47%,8%)" }}
        >
          <div className="flex flex-col justify-between h-full min-h-screen pt-[clamp(4rem,10vw,6vw)] pb-[4vw] px-[4vw]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/35 mb-4">
                {t ? "El desafío" : "The challenge"}
              </p>
              <h2
                className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold text-white leading-[1.05] max-w-2xl"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
              >
                {t
                  ? "Millones quieren aprender. Pocos pueden pagarlo."
                  : "Millions want to learn. Few can afford it."}
              </h2>
            </div>
            <div className="max-w-lg">
              <p className="text-white/50 text-[17px] leading-relaxed">
                {t
                  ? "En América Latina, el acceso a educación de calidad sigue siendo un privilegio. Salvador lo vivió de cerca — y decidió cambiar eso."
                  : "In Latin America, access to quality education remains a privilege. Salvador saw it firsthand — and decided to change that."}
              </p>
            </div>
            <div className="flex items-end justify-between">
              <blockquote className="text-white/30 text-sm italic max-w-xs">
                {t
                  ? '"Nadie debería quedarse sin estudiar por falta de tiempo o dinero."'
                  : '"No one should miss out on education due to lack of time or money."'}
                <footer className="mt-1 not-italic text-white/20">— Salvador B., {t ? "Fundador" : "Founder"}</footer>
              </blockquote>
              <img src="/OWL_INVESTIGADOR.png" alt="" aria-hidden="true"
                className="w-24 h-24 object-contain opacity-20" loading="lazy" />
            </div>
          </div>
        </FlowSection>

        {/* Panel 2 — The solution */}
        <FlowSection
          aria-label={t ? "La solución" : "The solution"}
          style={{ background: "hsl(221,83%,53%)" }}
        >
          <div className="flex flex-col justify-between h-full min-h-screen pt-[clamp(4rem,10vw,6vw)] pb-[4vw] px-[4vw]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-4">
                {t ? "La solución" : "The solution"}
              </p>
              <h2
                className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold text-white leading-[1.05] max-w-2xl"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
              >
                {t
                  ? "Una plataforma 100% gratuita. Para siempre."
                  : "A 100% free platform. Forever."}
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl">
              {[
                { v: "89+", l: t ? "Capítulos" : "Chapters" },
                { v: "9",   l: t ? "Materias" : "Subjects"  },
                { v: "$0",  l: t ? "Costo siempre" : "Cost always" },
              ].map(({ v, l }) => (
                <div key={l} className="rounded-2xl bg-white/10 px-6 py-5">
                  <span
                    className="block text-4xl font-extrabold text-white"
                    style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}
                  >{v}</span>
                  <span className="text-white/60 text-sm font-semibold uppercase tracking-[0.12em]">{l}</span>
                </div>
              ))}
            </div>
            <div className="flex items-end justify-between">
              <p className="text-white/50 text-[15px] leading-relaxed max-w-sm">
                {t
                  ? "Sin registro. Sin suscripción. Sin excepciones. El conocimiento debería ser un derecho, no un producto."
                  : "No sign-up. No subscription. No exceptions. Knowledge should be a right, not a product."}
              </p>
              <img src="/OWL_WITH_SPAIN_FLAG.png" alt="" aria-hidden="true"
                className="w-24 h-24 object-contain opacity-20" loading="lazy" />
            </div>
          </div>
        </FlowSection>

        {/* Panel 3 — The impact */}
        <FlowSection
          aria-label={t ? "El impacto" : "The impact"}
          style={{ background: "hsl(156,64%,28%)" }}
        >
          <div className="flex flex-col justify-between h-full min-h-screen pt-[clamp(4rem,10vw,6vw)] pb-[4vw] px-[4vw]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-4">
                {t ? "El impacto" : "The impact"}
              </p>
              <h2
                className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold text-white leading-[1.05] max-w-2xl"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
              >
                {t
                  ? "72 países. 1,471 libros. Un movimiento."
                  : "72 countries. 1,471 books. A movement."}
              </h2>
            </div>
            <div className="max-w-lg">
              <p className="text-white/60 text-[17px] leading-relaxed">
                {t
                  ? "La plataforma llegó a usuarios en más de 72 países. Y fuera de la pantalla, se han donado más de 1,471 libros y útiles escolares a niños en Lima."
                  : "The platform reached users in over 72 countries. And beyond the screen, over 1,471 books and school supplies have been donated to children in Lima."}
              </p>
            </div>
            <div className="flex items-end justify-between">
              <a href="#cursos" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-emerald-800 font-bold text-sm hover:bg-white/90 transition-colors">
                {t ? "Explorar cursos" : "Explore courses"}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <img src="/OWL_WITH_THE_EARTH.png" alt="" aria-hidden="true"
                className="w-24 h-24 object-contain opacity-20" loading="lazy" />
            </div>
          </div>
        </FlowSection>

      </FlowArt>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STACKING CARDS — subject showcase (replaces PrinciplesSection)
// ─────────────────────────────────────────────────────────────────────────────

function StackingCardsSection() {
  const { lang } = useLanguage();
  const t = lang === "es";

  const cards = [
    {
      id: "card-espanol",
      meta: t ? "Nivel básico → avanzado" : "Basic → Advanced level",
      title: t ? "Español" : "Spanish",
      description: t
        ? "Domina el español desde cero. Gramática, vocabulario y comunicación en la vida real. 100% gratuito, sin registro."
        : "Master Spanish from scratch. Grammar, vocabulary, and real-life communication. 100% free, no sign-up.",
      color: "hsl(221,83%,53%)",
      owl: "/OWL_WITH_SPAIN_FLAG.png",
    },
    {
      id: "card-finanzas",
      meta: t ? "Finanzas personales" : "Personal finance",
      title: t ? "Finanzas" : "Finance",
      description: t
        ? "Aprende a manejar tu dinero, ahorrar, invertir y construir libertad financiera. Conceptos claros, sin jerga."
        : "Learn to manage your money, save, invest, and build financial freedom. Clear concepts, no jargon.",
      color: "hsl(156,64%,32%)",
      owl: "/OWL_INVESTIGADOR_WITH_BOOK.png",
    },
    {
      id: "card-programacion",
      meta: t ? "Python, JS, HTML & más" : "Python, JS, HTML & more",
      title: t ? "Programación" : "Coding",
      description: t
        ? "Desde HTML hasta Python. Aprende a programar con proyectos reales y ejemplos prácticos paso a paso."
        : "From HTML to Python. Learn to code with real projects and practical step-by-step examples.",
      color: "hsl(262,83%,52%)",
      owl: "/OWL_CODING.png",
    },
    {
      id: "card-ciencias",
      meta: t ? "Física, Química, Biología" : "Physics, Chemistry, Biology",
      title: t ? "Ciencias" : "Science",
      description: t
        ? "Explora el universo desde los átomos hasta las estrellas. Ciencia clara, apasionante y accesible para todos."
        : "Explore the universe from atoms to stars. Clear, exciting, and accessible science for everyone.",
      color: "hsl(172,66%,30%)",
      owl: "/OWL_SCIENCE.png",
    },
    {
      id: "card-matematicas",
      meta: t ? "Aritmética → Cálculo" : "Arithmetic → Calculus",
      title: t ? "Matemáticas" : "Math",
      description: t
        ? "Las matemáticas no son difíciles — solo necesitas el enfoque correcto. Aprende con ejemplos de la vida real."
        : "Math isn't hard — you just need the right approach. Learn with real-life examples.",
      color: "hsl(38,92%,46%)",
      owl: "/OWL_NUMBER_ONE.png",
    },
  ];

  const sideContent = (
    <div className="text-center px-6">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">
        {t ? "Nuestros principios" : "Our principles"}
      </p>
      <h2
        className="text-2xl font-extrabold text-foreground mb-4 leading-tight"
        style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
      >
        {t ? "Por qué ESF funciona" : "Why ESF works"}
      </h2>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {t
          ? "Cinco materias. Un compromiso: educación gratuita, práctica y sin barreras para todos."
          : "Five subjects. One commitment: free, practical, barrier-free education for everyone."}
      </p>
      <div className="mt-8" aria-hidden="true">
        <img src="/OWL_INVESTIGADOR.png" alt=""
          className="w-24 h-24 object-contain mx-auto opacity-50 animate-float-slow" loading="lazy" />
      </div>
    </div>
  );

  return (
    <section
      className="bg-[hsl(220,16%,97%)] py-16"
      aria-labelledby="principles-heading"
    >
      <div className="text-center mb-12 px-4">
        <Reveal>
          <p className="section-eyebrow">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            {t ? "Nuestras materias" : "Our subjects"}
          </p>
          <h2
            id="principles-heading"
            className="text-3xl md:text-4xl font-extrabold text-foreground"
          >
            {t ? "Todo lo que puedes aprender" : "Everything you can learn"}
          </h2>
        </Reveal>
      </div>
      <ScrollCardStack cards={cards} sideContent={sideContent} />
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MASCOT SHOWCASE — "Meet the Owls"
// ─────────────────────────────────────────────────────────────────────────────

function MascotShowcaseSection() {
  const { lang } = useLanguage();
  const t = lang === "es";

  const owls = [
    { src: "/OWL_INVESTIGADOR.png",              labelEs: "Educador",      labelEn: "Educator"      },
    { src: "/OWL_WITH_SPAIN_FLAG.png",           labelEs: "Comunicación",  labelEn: "Communication" },
    { src: "/OWL_SCIENCE.png",                   labelEs: "Ciencias",      labelEn: "Science"       },
    { src: "/OWL_CODING.png",                    labelEs: "Programación",  labelEn: "Coding"        },
    { src: "/OWL_NUMBER_ONE.png",                labelEs: "Matemáticas",   labelEn: "Math"          },
    { src: "/OWL_INVESTIGATOR_WITH_COMPUTER.png",labelEs: "Tecnología",    labelEn: "Technology"    },
  ];

  return (
    <section
      className="section-padding bg-[hsl(220,16%,97%)] overflow-hidden"
      aria-labelledby="owls-heading"
    >
      <div className="container-page">
        <Reveal>
          <div className="text-center mb-12">
            <p className="section-eyebrow">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              {t ? "Nuestros tutores" : "Our tutors"}
            </p>
            <h2 id="owls-heading" className="text-3xl md:text-4xl font-extrabold text-foreground">
              {t ? "Un búho para " : "An owl for "}
              <span className="bg-gradient-to-r from-primary to-teal-500 bg-clip-text text-transparent">
                {t ? "cada materia" : "every subject"}
              </span>
            </h2>
            <p className="text-muted-foreground text-base max-w-xs mx-auto mt-3">
              {t
                ? "Cada curso tiene su propio guía — listo para acompañarte en tu camino."
                : "Every course has its own guide — ready to accompany you on your journey."}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 md:gap-6 max-w-2xl mx-auto">
          {owls.map(({ src, labelEs, labelEn }, i) => (
            <Reveal key={src} delay={i * 80}>
              <div className="flex flex-col items-center gap-2 group cursor-default">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-border/70 shadow-sm flex items-center justify-center overflow-hidden group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
                  <img
                    src={src}
                    alt={t ? labelEs : labelEn}
                    className="w-14 h-14 sm:w-[72px] sm:h-[72px] object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="text-[11px] font-semibold text-muted-foreground text-center leading-tight">
                  {t ? labelEs : labelEn}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MI CUENTO
// ─────────────────────────────────────────────────────────────────────────────

function MiCuentoSection() {
  const { lang } = useLanguage();
  const t = lang === "es";

  return (
    <section
      className="section-padding bg-white"
      id="micuento"
      aria-labelledby="cuento-heading"
    >
      <div className="container-page">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
              <div className="h-1.5 w-full bg-gradient-to-r from-primary via-teal-400 to-emerald-400" aria-hidden="true" />
              <div className="p-8 md:p-10 flex items-start gap-6">
                {/* Owl reading — illustrates the story context */}
                <div className="hidden sm:block flex-shrink-0">
                  <img
                    src="/OWL_INVESTIGADOR_WITH_BOOK.png"
                    alt=""
                    aria-hidden="true"
                    className="w-24 h-24 object-contain animate-float-slow"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="section-eyebrow">
                    <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                    {t ? "Lectura gratuita" : "Free reading"}
                  </p>
                  <h2 id="cuento-heading" className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">
                    {t ? "El Gran Sueño de Cris" : "Cris's Big Dream"}
                  </h2>
                  <p className="text-muted-foreground text-[15px] leading-relaxed mb-6">
                    {t
                      ? "Un niño apasionado por el tenis enfrenta desafíos para alcanzar su gran sueño. Una historia de perseverancia, esfuerzo y amor por el deporte."
                      : "A boy passionate about tennis faces challenges to achieve his big dream. A story of perseverance, effort, and love for sport."}
                  </p>
                  <a
                    href="https://drive.google.com/file/d/1om4ew8uDccRSxu-CHqDueuWVKJPk-dX_/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    aria-label={t ? "Descargar cuento El Gran Sueño de Cris (PDF)" : "Download story Cris's Big Dream (PDF)"}
                  >
                    {t ? "Descargar cuento" : "Download story"}
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// GALLERY
// ─────────────────────────────────────────────────────────────────────────────

const GALLERY_ITEMS = [
  { src: "/media1.png", captionEs: "Educación en acción", captionEn: "Education in action" },
  { src: "/media2.png", captionEs: "Nuestro impacto",     captionEn: "Our impact"           },
  { src: "/media3.png", captionEs: "Comunidad",           captionEn: "Community"            },
];

function GallerySection() {
  const { lang } = useLanguage();
  const t = lang === "es";

  return (
    <section
      className="section-padding bg-white"
      id="galeria"
      aria-labelledby="gallery-heading"
    >
      <div className="container-page">
        <Reveal>
          <div className="text-center mb-12">
            <p className="section-eyebrow">
              <Globe className="w-3.5 h-3.5" aria-hidden="true" />
              {t ? "Galería de actividades" : "Activity Gallery"}
            </p>
            <h2 id="gallery-heading" className="text-3xl md:text-4xl font-extrabold text-foreground">
              {t ? "Educación en " : "Education "}
              <span className="bg-gradient-to-r from-primary to-teal-500 bg-clip-text text-transparent">
                {t ? "acción" : "in action"}
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map(({ src, captionEs, captionEn }, i) => (
            <Reveal key={src} delay={i * 120}>
              <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="overflow-hidden aspect-[4/3]">
                  <img
                    src={src}
                    alt={t ? captionEs : captionEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="px-5 py-4 border-t border-border">
                  <p className="text-sm font-semibold text-foreground/80">
                    {t ? captionEs : captionEn}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQ — GSAP-pinned scroll accordion (replaces FAQSection)
// ─────────────────────────────────────────────────────────────────────────────

function ScrollFAQSection() {
  const { lang } = useLanguage();
  const t = lang === "es";

  const items = faqItems.map((item, i) => ({
    id: `faq-${i}`,
    question: t ? item.questionEs : item.questionEn,
    answer: t ? item.answerEs : item.answerEn,
  }));

  return (
    <section
      className="bg-[hsl(220,16%,97%)]"
      id="faq"
      aria-labelledby="faq-heading"
    >
      <ScrollFAQAccordion
        items={items}
        heading={t ? "¿Tienes dudas?" : "Have questions?"}
        subheading={
          t
            ? "Todo lo que necesitas saber sobre Español Sin Fronteras."
            : "Everything you need to know about Español Sin Fronteras."
        }
      />
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────────────────────────────────────

function TestimonialsSection() {
  const { lang } = useLanguage();
  const t = lang === "es";
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const advance = useCallback(() => {
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  useEffect(() => {
    timerRef.current = setTimeout(advance, 5000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, advance]);

  return (
    <section
      className="section-padding bg-white"
      id="comentarios"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-page">
        <Reveal>
          <div className="text-center mb-12">
            <p className="section-eyebrow">
              <Quote className="w-3.5 h-3.5" aria-hidden="true" />
              {t ? "Testimonios" : "Testimonials"}
            </p>
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-extrabold text-foreground">
              {t ? "Lo que dicen nuestros estudiantes" : "What our students say"}
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="max-w-lg mx-auto">
            <div
              className="testimonial-card text-center"
              role="region"
              aria-live="polite"
              aria-atomic="true"
              aria-label={t ? "Testimonio actual" : "Current testimonial"}
            >
              <Quote className="w-8 h-8 text-primary/25 mx-auto" aria-hidden="true" />
              <p className="text-foreground text-lg leading-[1.75] font-medium min-h-[90px]">
                "{testimonials[current].text}"
              </p>
              <p className="text-sm font-semibold text-muted-foreground">
                — {testimonials[current].author}
              </p>

              <div className="flex justify-center gap-2 mt-2" role="tablist" aria-label={t ? "Navegación de testimonios" : "Testimonial navigation"}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    role="tab"
                    aria-selected={i === current}
                    aria-label={`${t ? "Testimonio" : "Testimonial"} ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-400 ${
                      i === current
                        ? "bg-primary w-8"
                        : "bg-border w-2 hover:bg-primary/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT / CTA
// ─────────────────────────────────────────────────────────────────────────────

function ContactSection() {
  const { lang } = useLanguage();
  const t = lang === "es";

  return (
    <section
      className="section-padding bg-[hsl(220,16%,97%)]"
      id="contacto"
      aria-labelledby="contacto-heading"
    >
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl mx-auto rounded-3xl bg-[hsl(222,47%,8%)] px-8 py-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-emerald-500/8 blur-3xl" />
            </div>

            {/* Decorative owl */}
            <div className="relative z-10 mx-auto w-16 h-16 mb-6" aria-hidden="true">
              <img
                src="/OWL_WITH_THE_EARTH.png"
                alt=""
                className="w-full h-full object-contain opacity-60 animate-float-slow"
                loading="lazy"
              />
            </div>

            <div className="relative z-10">
              <h2 id="contacto-heading" className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                {t ? "¿Hablamos?" : "Let's connect?"}
              </h2>
              <p className="text-white/45 mb-8 max-w-xs mx-auto text-[15px] leading-relaxed">
                {t
                  ? "¿Tienes preguntas, sugerencias o quieres colaborar? Nos encantaría escucharte."
                  : "Have questions, suggestions, or want to collaborate? We'd love to hear from you."}
              </p>

              <a
                href="mailto:espanolsinfronteras1@gmail.com"
                className="btn-accent"
                aria-label={t ? "Enviar correo a Español Sin Fronteras" : "Send email to Español Sin Fronteras"}
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                {t ? "Escribirnos" : "Write to us"}
              </a>

              <div
                className="flex justify-center flex-wrap gap-5 mt-10 pt-8 border-t border-white/8"
                role="list"
                aria-label={t ? "Redes sociales" : "Social media"}
              >
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="listitem"
                    className="text-white/30 hover:text-white/75 text-sm font-medium transition-colors"
                    aria-label={`${link.name} — ${link.handle}`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE COMPOSITION
// ─────────────────────────────────────────────────────────────────────────────

const HomePage = () => (
  <>
    <HeroSection />
    <CoursesSection />
    <ImpactSection />
    <AlliancesSection />
    <StoryScrollSection />
    <MascotShowcaseSection />
    <StackingCardsSection />
    <GallerySection />
    <MiCuentoSection />
    <ScrollFAQSection />
    <TestimonialsSection />
    <ContactSection />
  </>
);

export default HomePage;
