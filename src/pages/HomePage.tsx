import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { courses, testimonials, faqItems, socialLinks, partners } from "@/data/courses";
import {
  ArrowRight, Backpack, BookOpen, ChevronDown, ChevronRight, Code,
  DollarSign, ExternalLink, Flame, FlaskConical, GraduationCap, Globe,
  Handshake, Heart, Lightbulb, Mail, MessageCircle, PartyPopper, Quote,
  Rocket, Sparkles, Trophy,
} from "lucide-react";
import { courseIconMap } from "@/lib/course-icons";
import { COURSE_MASCOTS } from "@/lib/course-mascots";
import { BrandScroller } from "@/components/ui/brand-scroller";

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
              {t ? "100% Gratuito · 277+ lecciones · Quiz interactivo" : "100% Free · 277+ lessons · Interactive quiz"}
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
                ? "Plataforma educativa gratuita con 277+ lecciones en español, finanzas, programación, matemáticas y más. Sin registro, sin costo, para siempre."
                : "Free educational platform with 277+ lessons covering Spanish, finance, programming, math, and more. No sign-up, no cost, forever."}
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
                { v: "277+", l: t ? "Lecciones" : "Lessons" },
                { v: "72+",  l: t ? "Países" : "Countries" },
                { v: "12",   l: t ? "Materias" : "Subjects"  },
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

              {/* Speech bubble — centered directly above the mascot's head */}
              <div
                className="absolute z-30 -top-20 left-1/2 -translate-x-1/2 animate-float"
                aria-hidden="true"
              >
                <div className="relative flex items-center gap-2 bg-white rounded-2xl px-4 py-2.5 shadow-xl border-2 border-[hsl(156,64%,42%)]">
                  <PartyPopper className="w-4 h-4 text-[hsl(156,64%,42%)] shrink-0" aria-hidden="true" />
                  <p className="text-[hsl(222,47%,12%)] text-sm font-extrabold whitespace-nowrap">
                    {t ? "¡Vamos a aprender!" : "Let's start learning!"}
                  </p>
                  <div
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r-2 border-b-2 border-[hsl(156,64%,42%)] rotate-45"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <img
                src="/owl-logo.png"
                alt={t ? "Logo oficial de Español Sin Fronteras" : "Official Español Sin Fronteras logo"}
                className="relative z-10 w-[260px] h-[260px] object-contain drop-shadow-2xl animate-float-slow"
                width={260}
                height={260}
                loading="eager"
                fetchPriority="high"
              />

              {/* Streak badge — centered directly below the mascot */}
              <div
                className="absolute z-20 -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-amber-400 border-2 border-amber-300 shadow-lg whitespace-nowrap animate-bounce"
                style={{ animationDuration: "2.5s" }}
                aria-hidden="true"
              >
                <Flame className="w-4 h-4 text-[hsl(222,47%,12%)] shrink-0" aria-hidden="true" />
                <span className="text-[hsl(222,47%,12%)] text-xs font-extrabold">
                  {t ? "100% gratis" : "100% free"}
                </span>
              </div>

              {/* Floating subject pills — pushed well clear of the bubble/owl/badge column */}
              {[
                { label: t ? "Español"    : "Spanish",       icon: BookOpen,      top: "4px",    left: "-200px", delay: 0    },
                { label: t ? "Finanzas"   : "Finance",       icon: DollarSign,    top: "200px",  left: "-210px", delay: 600  },
                { label: t ? "Programación" : "Coding",      icon: Code,          top: "4px",    right: "-200px", delay: 1200 },
                { label: t ? "Ciencias"   : "Science",       icon: FlaskConical,  top: "200px",  right: "-210px", delay: 900  },
              ].map(({ label, icon: PillIcon, delay: d, ...pos }) => (
                <div
                  key={label}
                  className="absolute z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/12 backdrop-blur-sm border border-white/18 text-white text-xs font-semibold whitespace-nowrap animate-float"
                  style={{ animationDelay: `${d}ms`, ...pos }}
                  aria-hidden="true"
                >
                  <PillIcon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
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
            <p className="text-muted-foreground text-base max-w-sm mx-auto mb-5">
              {t
                ? "12 materias, 277+ capítulos. Todo 100% gratuito."
                : "12 subjects, 277+ chapters. All 100% free."}
            </p>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-50 border-2 border-emerald-200 text-emerald-700 text-sm font-bold">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              {t ? "Haz clic en cualquier curso y empieza ya — sin registro, sin cuenta, sin tarjeta" : "Click any course and start now — no sign-up, no account, no card"}
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
                  <div
                    className={`w-14 h-14 rounded-2xl ${color.icon} flex items-center justify-center mb-5 transition-transform duration-200 group-hover:scale-110 group-hover:-rotate-3 relative z-10 border-2`}
                    style={{ borderColor: color.accent }}
                  >
                    {Icon && <Icon className="w-6 h-6" strokeWidth={2.25} aria-hidden="true" />}
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 text-base font-extrabold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                    {t ? course.titleEs : course.titleEn}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 text-sm text-muted-foreground leading-relaxed mb-5 flex-1 line-clamp-2">
                    {t ? course.descriptionEs : course.descriptionEn}
                  </p>

                  {/* Footer */}
                  <div className="relative z-10 flex items-center justify-between mt-auto pt-4 gap-3">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-lg border ${color.badge} shrink-0`}>
                      {course.chapters.length} {t ? "caps." : "chaps."}
                    </span>
                    <span
                      className="inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-wide px-4 py-2 rounded-xl text-white transition-transform duration-150 group-hover:scale-105 group-active:scale-95"
                      style={{ background: color.accent }}
                    >
                      {t ? "Empezar" : "Start"}
                      <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
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
      iconBg: "bg-blue-500",
    },
    {
      value: "277+",
      labelEs: "Lecciones",
      labelEn: "Lessons",
      descEs: "Capítulos gratuitos y accesibles",
      descEn: "Free and accessible chapters",
      icon: BookOpen,
      iconBg: "bg-emerald-500",
    },
    {
      value: "12",
      labelEs: "Materias",
      labelEn: "Subjects",
      descEs: "Español, finanzas, STEM y más",
      descEn: "Spanish, finance, STEM, and more",
      icon: GraduationCap,
      iconBg: "bg-violet-500",
    },
    {
      value: "$0",
      labelEs: "Costo",
      labelEn: "Cost",
      descEs: "Siempre gratis, sin excepciones",
      descEn: "Always free, no exceptions",
      icon: Heart,
      iconBg: "bg-rose-500",
    },
  ];

  return (
    <section
      className="bg-[hsl(222,47%,8%)] py-16 px-5"
      aria-label={t ? "Impacto de la plataforma" : "Platform impact"}
    >
      <div className="container-page">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ value, labelEs, labelEn, descEs, descEn, icon: Icon, iconBg }, i) => (
            <Reveal key={value} delay={i * 80}>
              <div className="flex flex-col items-center text-center p-7 bg-white/[0.04] rounded-3xl border-2 border-white/10 gap-3 transition-colors hover:border-white/20">
                <div className={`w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center mb-1 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <span
                  className="text-4xl font-extrabold text-white tabular-nums"
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
                  aria-label={value}
                >
                  {value}
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/50 mb-1">
                    {t ? labelEs : labelEn}
                  </p>
                  <p className="text-[13px] text-white/35 leading-snug">
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
// MISSION / STORY SECTION
// ─────────────────────────────────────────────────────────────────────────────

function MissionSection() {
  const { lang } = useLanguage();
  const t = lang === "es";

  return (
    <section
      className="section-padding bg-white"
      id="historia"
      aria-labelledby="historia-heading"
    >
      <div className="container-page">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="section-eyebrow">
                <Heart className="w-3.5 h-3.5" aria-hidden="true" />
                {t ? "Nuestra misión" : "Our mission"}
              </p>
              <h2 id="historia-heading" className="text-3xl md:text-4xl font-extrabold text-foreground">
                {t ? "La historia detrás de ESF" : "The story behind ESF"}
              </h2>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative rounded-[28px] border-2 border-[hsl(38,92%,55%)] bg-amber-50 px-8 py-10 mb-10 text-center shadow-sm">
              <Quote className="absolute top-5 left-6 w-7 h-7 text-amber-400" aria-hidden="true" />
              <blockquote className="text-xl md:text-2xl font-extrabold text-foreground leading-[1.4]">
                {t
                  ? '"Nadie debería quedarse sin estudiar por falta de tiempo o dinero."'
                  : '"No one should miss out on education due to lack of time or money."'}
              </blockquote>
              <p className="mt-4 text-sm text-muted-foreground font-bold">— Salvador B., {t ? "Fundador" : "Founder"}</p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  icon: Lightbulb,
                  color: "border-blue-300 bg-blue-50",
                  iconColor: "text-blue-500",
                  textEs: <>Nació con una idea clara: aprender no debería depender del <strong className="font-extrabold">dinero</strong> ni de las circunstancias.</>,
                  textEn: <>Born from one clear idea: learning shouldn't depend on <strong className="font-extrabold">money</strong> or circumstances.</>,
                },
                {
                  icon: Rocket,
                  color: "border-emerald-300 bg-emerald-50",
                  iconColor: "text-emerald-500",
                  textEs: <>En 2024, Salvador convirtió esa idea en una plataforma 100% gratuita con más de <strong className="font-extrabold">277 capítulos</strong> prácticos y accesibles.</>,
                  textEn: <>In 2024, Salvador turned that idea into a 100% free platform with over <strong className="font-extrabold">277 practical, accessible chapters</strong>.</>,
                },
                {
                  icon: Globe,
                  color: "border-violet-300 bg-violet-50",
                  iconColor: "text-violet-500",
                  textEs: <>Hoy llega a estudiantes en más de <strong className="font-extrabold">72 países</strong>, demostrando que las ganas de aprender no tienen fronteras.</>,
                  textEn: <>Today it reaches students in over <strong className="font-extrabold">72 countries</strong>, proving that the will to learn has no borders.</>,
                },
                {
                  icon: Backpack,
                  color: "border-amber-300 bg-amber-50",
                  iconColor: "text-amber-500",
                  textEs: <>Fuera de la pantalla, se han donado más de <strong className="font-extrabold">1,471 libros</strong> y útiles escolares en Lima.</>,
                  textEn: <>Beyond the screen, more than <strong className="font-extrabold">1,471 books</strong> and school supplies have been donated in Lima.</>,
                },
              ].map((card, i) => (
                <div key={i} className={`rounded-3xl border-2 p-6 flex items-start gap-4 ${card.color}`}>
                  <card.icon className={`w-7 h-7 shrink-0 ${card.iconColor}`} aria-hidden="true" />
                  <p className="text-[15px] text-foreground/80 leading-relaxed font-medium">
                    {t ? card.textEs : card.textEn}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
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
          {owls.map(({ src, labelEs, labelEn }, i) => {
            const ringColors = ["border-blue-300", "border-emerald-300", "border-amber-300", "border-violet-300", "border-rose-300", "border-teal-300"];
            return (
              <Reveal key={src} delay={i * 80}>
                <div className="flex flex-col items-center gap-2 group cursor-default">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-white border-2 ${ringColors[i % ringColors.length]} flex items-center justify-center overflow-hidden group-hover:-translate-y-1.5 group-hover:rotate-3 transition-all duration-300`}>
                    <img
                      src={src}
                      alt={t ? labelEs : labelEn}
                      className="w-14 h-14 sm:w-[72px] sm:h-[72px] object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[11px] font-bold text-muted-foreground text-center leading-tight">
                    {t ? labelEs : labelEn}
                  </span>
                </div>
              </Reveal>
            );
          })}
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
            <div className="relative rounded-[28px] border-2 border-emerald-400 bg-emerald-50 overflow-hidden">
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
                  <h2 id="cuento-heading" className="text-2xl md:text-3xl font-extrabold text-foreground mb-3 flex items-center gap-2.5">
                    <Trophy className="w-6 h-6 text-emerald-500 shrink-0" aria-hidden="true" />
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
  { src: "/media1.png", icon: BookOpen,  captionEs: "Educación en acción", captionEn: "Education in action", border: "border-blue-300",    iconColor: "text-blue-500"    },
  { src: "/media2.png", icon: Heart,     captionEs: "Nuestro impacto",     captionEn: "Our impact",           border: "border-emerald-300", iconColor: "text-emerald-500" },
  { src: "/media3.png", icon: Handshake, captionEs: "Comunidad",           captionEn: "Community",            border: "border-violet-300",  iconColor: "text-violet-500"  },
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
          {GALLERY_ITEMS.map(({ src, icon: ItemIcon, captionEs, captionEn, border, iconColor }, i) => (
            <Reveal key={src} delay={i * 120}>
              <div className={`group overflow-hidden rounded-[28px] border-2 ${border} bg-card transition-transform duration-300 hover:-translate-y-1`}>
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
                <div className="px-5 py-4 flex items-center gap-2">
                  <ItemIcon className={`w-[18px] h-[18px] shrink-0 ${iconColor}`} aria-hidden="true" />
                  <p className="text-sm font-bold text-foreground/80">
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
// FAQ
// ─────────────────────────────────────────────────────────────────────────────

function FAQSection() {
  const { lang } = useLanguage();
  const t = lang === "es";
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = useCallback((i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  }, []);

  return (
    <section
      className="section-padding bg-[hsl(220,16%,97%)]"
      id="faq"
      aria-labelledby="faq-heading"
    >
      <div className="container-page">
        <Reveal>
          <div className="text-center mb-12">
            <p className="section-eyebrow">
              <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
              {t ? "Preguntas frecuentes" : "FAQ"}
            </p>
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-extrabold text-foreground">
              {t ? "¿Tienes dudas?" : "Have questions?"}
            </h2>
          </div>
        </Reveal>

        <div
          className="max-w-2xl mx-auto flex flex-col gap-3"
          aria-label={t ? "Preguntas frecuentes" : "Frequently asked questions"}
        >
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            const question = t ? item.questionEs : item.questionEn;
            const answer = t ? item.answerEs : item.answerEn;
            const id = `faq-answer-${i}`;
            const triggerId = `faq-trigger-${i}`;

            return (
              <Reveal key={i} delay={i * 50}>
                <div className="faq-item">
                  <button
                    id={triggerId}
                    className="faq-trigger px-6"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={id}
                  >
                    <span>{question}</span>
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-primary text-white rotate-180"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </button>

                  <div
                    id={id}
                    role="region"
                    aria-labelledby={triggerId}
                    className={`faq-content px-6 transition-all duration-300 ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 !pb-0"
                    }`}
                  >
                    {answer}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────────────────────────────────────

const AVATAR_PALETTE = [
  "bg-blue-500", "bg-emerald-500", "bg-amber-500", "bg-violet-500",
  "bg-rose-500", "bg-teal-500", "bg-indigo-500", "bg-orange-500", "bg-cyan-600",
];

function TestimonialCard({
  text,
  author,
  colorIndex,
}: {
  text: string;
  author: string;
  colorIndex: number;
}) {
  const initial = author.trim().charAt(0).toUpperCase();
  return (
    <div className="p-6 rounded-3xl border-2 border-border bg-white shadow-sm w-full">
      <p className="text-[14px] text-foreground leading-relaxed mb-4">"{text}"</p>
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full ${AVATAR_PALETTE[colorIndex % AVATAR_PALETTE.length]} flex items-center justify-center text-white font-bold text-sm shrink-0`}
          aria-hidden="true"
        >
          {initial}
        </div>
        <span className="font-bold text-sm text-foreground leading-tight">{author}</span>
      </div>
    </div>
  );
}

function TestimonialsColumn({
  items,
  duration,
}: {
  items: { text: string; author: string; colorIndex: number }[];
  duration: number;
}) {
  return (
    <div className="overflow-hidden h-[640px] [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]">
      <div
        className="flex flex-col gap-5 animate-marquee-y"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {[0, 1].map((dup) => (
          <div key={dup} className="flex flex-col gap-5" aria-hidden={dup === 1}>
            {items.map((item, i) => (
              <TestimonialCard
                key={`${dup}-${i}`}
                text={item.text}
                author={item.author}
                colorIndex={item.colorIndex}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function TestimonialsSection() {
  const { lang } = useLanguage();
  const t = lang === "es";

  const items = testimonials.map((tm, i) => ({
    text: tm.text,
    author: tm.author,
    colorIndex: i,
  }));

  const col1 = items.filter((_, i) => i % 3 === 0);
  const col2 = items.filter((_, i) => i % 3 === 1);
  const col3 = items.filter((_, i) => i % 3 === 2);

  return (
    <section
      className="section-padding bg-[hsl(220,16%,97%)]"
      id="comentarios"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-page">
        <Reveal>
          <div className="text-center mb-12 max-w-lg mx-auto">
            <p className="section-eyebrow justify-center">
              <Quote className="w-3.5 h-3.5" aria-hidden="true" />
              {t ? "Testimonios" : "Testimonials"}
            </p>
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
              {t ? "Lo que dicen nuestros estudiantes" : "What our students say"}
            </h2>
            <p className="text-muted-foreground text-base">
              {t
                ? "Historias reales de personas que estudian entre el trabajo, el bus y la casa."
                : "Real stories from people studying between work, the bus, and home."}
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            <TestimonialsColumn items={col1} duration={24} />
            <TestimonialsColumn items={col2} duration={29} />
            <div className="hidden lg:block">
              <TestimonialsColumn items={col3} duration={26} />
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
// PARTNERS / ALIANZAS
// ─────────────────────────────────────────────────────────────────────────────

function PartnersSection() {
  const { lang } = useLanguage();
  const t = lang === "es";

  // Split partners into two rows for the dual-direction scroller effect
  const row1 = partners;
  const row2 = [...partners].reverse();

  return (
    <section
      className="section-padding bg-[hsl(220,16%,97%)] overflow-hidden"
      id="alianzas"
      aria-labelledby="alianzas-heading"
    >
      <div className="container-page">
        <Reveal>
          <div className="text-center mb-12">
            <p className="section-eyebrow">
              <Handshake className="w-3.5 h-3.5" aria-hidden="true" />
              {t ? "Alianzas estratégicas" : "Strategic partnerships"}
            </p>
            <h2 id="alianzas-heading" className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
              {t ? "Organizaciones que " : "Organizations that "}
              <span className="bg-gradient-to-r from-primary to-teal-500 bg-clip-text text-transparent">
                {t ? "creen en la misión" : "believe in the mission"}
              </span>
            </h2>
            <p className="text-muted-foreground text-base max-w-[420px] mx-auto leading-relaxed">
              {t
                ? "Trabajamos junto a organizaciones líderes que comparten nuestra visión: educación de calidad, accesible para todos, sin importar el lugar."
                : "We work alongside leading organizations that share our vision: quality education, accessible to everyone, regardless of where they are."}
            </p>

            {/* Alliance count badge */}
            <div className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-bold">
              <Handshake className="w-3 h-3" aria-hidden="true" />
              {partners.length}{" "}
              {t ? "alianzas activas" : "active alliances"}
            </div>
          </div>
        </Reveal>
      </div>

      {/* ── Row 1: forward ───────────────────────────────────────────────────── */}
      <Reveal delay={80}>
        <BrandScroller
          items={row1}
          lang={lang}
          direction="forward"
          duration={40}
          className="mb-3"
          label={t ? "Organizaciones aliadas" : "Partner organizations"}
        />
      </Reveal>

      {/* ── Row 2: reverse ───────────────────────────────────────────────────── */}
      <Reveal delay={140}>
        <BrandScroller
          items={row2}
          lang={lang}
          direction="reverse"
          duration={34}
        />
      </Reveal>

      {/* Bottom attribution */}
      <Reveal delay={200}>
        <p className="flex items-center justify-center gap-1.5 text-center text-[12px] text-muted-foreground/50 mt-10 font-medium">
          {t ? "Hecho con" : "Made with"}
          <Heart className="w-3 h-3 text-rose-400 fill-rose-400" aria-hidden="true" />
          {t ? "desde Perú para el mundo" : "from Peru for the world"}
        </p>
      </Reveal>
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
    <MissionSection />
    <PartnersSection />
    <MascotShowcaseSection />
    <GallerySection />
    <MiCuentoSection />
    <FAQSection />
    <TestimonialsSection />
    <ContactSection />
  </>
);

export default HomePage;





