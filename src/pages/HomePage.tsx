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

// ─── Reveal wrapper ───────────────────────────────────────────────────────────

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
  },
  green: {
    icon:     "bg-emerald-50 text-emerald-600",
    accent:   "hsl(156,64%,38%)",
    badge:    "bg-emerald-50 text-emerald-700 border-emerald-100",
  },
  teal: {
    icon:     "bg-teal-50 text-teal-600",
    accent:   "hsl(172,66%,35%)",
    badge:    "bg-teal-50 text-teal-700 border-teal-100",
  },
  violet: {
    icon:     "bg-violet-50 text-violet-600",
    accent:   "hsl(262,83%,58%)",
    badge:    "bg-violet-50 text-violet-700 border-violet-100",
  },
  amber: {
    icon:     "bg-amber-50 text-amber-600",
    accent:   "hsl(38,92%,50%)",
    badge:    "bg-amber-50 text-amber-700 border-amber-100",
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
      <div className="container-page relative z-10 w-full py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: copy ─────────────────────────────────────────────────*/}
          <div>
            {/* Eyebrow badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/12 bg-white/5 text-white/75 text-xs font-semibold mb-8">
              <Sparkles className="w-3 h-3 text-amber-400 shrink-0" aria-hidden="true" />
              {t ? "100% Gratuito · 72+ países" : "100% Free · 72+ countries"}
            </div>

            {/* Headline */}
            <h1 className="animate-fade-up delay-75 text-[2.75rem] sm:text-5xl lg:text-[3.5rem] font-extrabold text-white mb-5 leading-[1.06]">
              {t ? "Aprende" : "Learn"}{" "}
              <span
                className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent"
                aria-label={t ? "sin límites" : "without limits"}
              >
                {t ? "sin límites" : "without limits"}
              </span>
            </h1>

            {/* Sub */}
            <p className="animate-fade-up delay-150 text-[17px] text-white/55 leading-relaxed mb-10 max-w-[480px]">
              {t
                ? "Plataforma educativa gratuita con 89+ lecciones en español, finanzas, programación, matemáticas y más. Sin registro, sin costo, para siempre."
                : "Free educational platform with 89+ lessons covering Spanish, finance, programming, math, and more. No sign-up, no cost, forever."}
            </p>

            {/* CTA group */}
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
                { v: "8",   l: t ? "Materias" : "Subjects"  },
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

          {/* ── Right: visual ───────────────────────────────────────────────*/}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-full blur-3xl scale-110 opacity-20"
                style={{ background: "radial-gradient(circle, hsl(221,83%,60%), hsl(156,64%,44%))" }}
                aria-hidden="true"
              />

              {/* Owl mascot */}
              <img
                src="/owl-logo.png"
                alt={t ? "Mascota ESF — el búho del conocimiento" : "ESF Mascot — the owl of knowledge"}
                className="relative z-10 w-[220px] h-[220px] object-contain drop-shadow-2xl animate-float-slow"
                width={220}
                height={220}
                loading="eager"
              />

              {/* Floating pill: subjects */}
              {[
                { label: t ? "📚 Español"    : "📚 Spanish",     top: "-12%",  left: "-30%",  delay: 0 },
                { label: t ? "💰 Finanzas"   : "💰 Finance",     top: "65%",   left: "-32%",  delay: 600 },
                { label: t ? "💻 Programación" : "💻 Coding",    top: "-8%",   right: "-28%", delay: 1200 },
                { label: t ? "🔢 Matemáticas" : "🔢 Math",       top: "70%",   right: "-30%", delay: 800 },
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
                ? "8 materias, 89+ capítulos. Todo 100% gratuito, sin registro."
                : "8 subjects, 89+ chapters. All 100% free, no sign-up."}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {courses.map((course, i) => {
            const color = COLOR_MAP[course.colorClass];
            const Icon = courseIconMap[course.icon];
            return (
              <Reveal key={course.slug} delay={i * 60}>
                <Link
                  to={`/curso/${course.slug}`}
                  className="card-course h-full group block no-underline"
                  style={{ "--card-accent": color.accent } as React.CSSProperties}
                  aria-label={`${t ? course.titleEs : course.titleEn} — ${course.chapters.length} ${t ? "capítulos" : "chapters"}`}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl ${color.icon} flex items-center justify-center mb-5 transition-transform duration-200 group-hover:scale-110`}>
                    {Icon && <Icon className="w-5 h-5" strokeWidth={2} aria-hidden="true" />}
                  </div>

                  {/* Title */}
                  <h3 className="text-[15px] font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                    {t ? course.titleEs : course.titleEn}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1 line-clamp-2">
                    {t ? course.descriptionEs : course.descriptionEn}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/60">
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
      value: "8",
      labelEs: "Materias",
      labelEn: "Subjects",
      descEs: "Español, finanzas, STEM y más",
      descEn: "Spanish, finance, STEM, and more",
      icon: GraduationCap,
    },
    {
      value: "0$",
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
            <blockquote className="relative text-xl md:text-2xl font-bold text-foreground leading-[1.4] text-center mb-12 px-8">
              <Quote className="absolute top-0 left-0 w-8 h-8 text-primary/20" aria-hidden="true" />
              <span>
                {t
                  ? '"Nadie debería quedarse sin estudiar por falta de tiempo o dinero."'
                  : '"No one should miss out on education due to lack of time or money."'}
              </span>
              <footer className="mt-4 text-base text-muted-foreground font-normal">— Salvador Bocanegra, {t ? "Fundador" : "Founder"}</footer>
            </blockquote>
          </Reveal>

          <Reveal delay={200}>
            <div className="rounded-2xl border border-border bg-secondary/30 p-8 md:p-10 space-y-4 text-[15px] text-muted-foreground leading-[1.85]">
              {t ? (
                <>
                  <p>
                    Salvador conoció a un niño que no podía estudiar porque tenía que trabajar para ayudar en su hogar.
                    Ese momento lo cambió todo. Convencido de que <strong className="text-foreground font-semibold">el conocimiento no debe tener precio</strong>,
                    creó <em>Español Sin Fronteras</em>: una plataforma completamente gratuita para que cualquier persona,
                    sin importar su situación económica, pudiera aprender.
                  </p>
                  <p>
                    Desde su lanzamiento, la plataforma ha sido utilizada en más de{" "}
                    <strong className="text-foreground font-semibold">72 países</strong>, con 89+ lecciones en español,
                    finanzas, programación, matemáticas, ciencias, ciberseguridad e inglés.
                  </p>
                  <p>
                    La misión es simple:{" "}
                    <strong className="text-foreground font-semibold">que aprender sea un derecho, no un privilegio.</strong>
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Salvador met a child who couldn't study because he had to work to help at home.
                    That moment changed everything. Convinced that{" "}
                    <strong className="text-foreground font-semibold">knowledge shouldn't have a price</strong>,
                    he created <em>Español Sin Fronteras</em>: a completely free platform so that anyone,
                    regardless of their economic situation, could learn.
                  </p>
                  <p>
                    Since launch, the platform has been used in{" "}
                    <strong className="text-foreground font-semibold">72+ countries</strong>, with 89+ lessons
                    in Spanish, finance, programming, math, science, cybersecurity, and English.
                  </p>
                  <p>
                    The mission is simple:{" "}
                    <strong className="text-foreground font-semibold">make learning a right, not a privilege.</strong>
                  </p>
                </>
              )}
            </div>
          </Reveal>
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
      className="section-padding bg-[hsl(220,16%,97%)]"
      id="micuento"
      aria-labelledby="cuento-heading"
    >
      <div className="container-page">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
              <div className="h-1.5 w-full bg-gradient-to-r from-primary via-teal-400 to-emerald-400" aria-hidden="true" />
              <div className="p-8 md:p-10">
                <p className="section-eyebrow">
                  <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                  {t ? "Lectura gratuita" : "Free reading"}
                </p>
                <h2 id="cuento-heading" className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">
                  {t ? "El Gran Sueño de Cris" : "Cris's Big Dream"}
                </h2>
                <p className="text-muted-foreground text-[15px] leading-relaxed mb-8">
                  {t
                    ? "Un niño apasionado por el tenis enfrenta desafíos para alcanzar su gran sueño. Una historia de perseverancia, esfuerzo y amor por el deporte. ¡Perfecta para aprender leyendo!"
                    : "A boy passionate about tennis faces challenges to achieve his big dream. A story of perseverance, effort, and love for sport. Perfect for learning through reading!"}
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
          </Reveal>
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
      className="section-padding bg-white"
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
          className="max-w-2xl mx-auto border border-border rounded-2xl overflow-hidden divide-y divide-border"
          role="list"
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
                <div role="listitem" className="faq-item">
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
      className="section-padding bg-[hsl(220,16%,97%)]"
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

              {/* Navigation dots */}
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
      className="section-padding bg-white"
      id="contacto"
      aria-labelledby="contacto-heading"
    >
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl mx-auto rounded-3xl bg-[hsl(222,47%,8%)] px-8 py-16 text-center relative overflow-hidden">
            {/* Subtle radial highlights */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-emerald-500/8 blur-3xl" />
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/8 border border-white/10 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-6 h-6 text-white/70" aria-hidden="true" />
              </div>

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

              {/* Social links */}
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
    <MissionSection />
    <MiCuentoSection />
    <FAQSection />
    <TestimonialsSection />
    <ContactSection />
  </>
);

export default HomePage;
