import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { courses } from "@/data/courses";
import type { Chapter } from "@/data/courses";
import { ArrowLeft, BookOpen, ExternalLink, GraduationCap } from "lucide-react";
import { courseIconMap } from "@/lib/course-icons";
import { COURSE_MASCOTS, UNIT_NAMES } from "@/lib/course-mascots";
import { useSEOMeta } from "@/hooks/useSEOMeta";

const COURSE_LANGUAGE: Record<string, string> = {
  ingles: "en",
  "global-finance": "en",
};

const COURSE_TOPICS: Record<string, string[]> = {
  espanol:          ["gramática española", "ortografía", "vocabulario", "morfología", "sintaxis", "comunicación verbal"],
  finanzas:         ["ahorro personal", "presupuesto", "inversión", "impuestos", "sistema financiero", "emprendimiento"],
  programacion:     ["HTML", "CSS", "JavaScript", "Python", "DOM", "programación web"],
  matematicas:      ["aritmética", "geometría", "probabilidad", "medidas y magnitudes", "volúmenes"],
  ciencias:         ["física", "movimiento rectilíneo", "caída libre", "química", "biología celular", "átomos"],
  ciberseguridad:   ["ciberseguridad", "protección digital", "seguridad informática", "respuesta a incidentes"],
  ingles:           ["present perfect", "past simple", "past continuous", "English grammar", "question forms"],
  "herencia-peruana": ["historia del Perú", "cultura inca", "gastronomía peruana", "geografía peruana", "tradiciones peruanas"],
  "global-finance": ["budgeting", "investing", "saving", "credit management", "income generation"],
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getChapterHref(href: string): string {
  if (href.startsWith("http://") || href.startsWith("https://")) return href;
  return encodeURI(href.startsWith("/") ? href : `/${href}`);
}

const isExternal = (href: string) =>
  href.startsWith("http://") || href.startsWith("https://");

function groupIntoUnits(chapters: Chapter[], size = 6): Chapter[][] {
  const groups: Chapter[][] = [];
  for (let i = 0; i < chapters.length; i += size) {
    groups.push(chapters.slice(i, i + size));
  }
  return groups;
}

// ─── Per-colour theme tokens ──────────────────────────────────────────────────
// All class strings must be literal so Tailwind JIT does not purge them.

const PATH_THEME = {
  blue: {
    headerGrad:     "from-blue-600 to-indigo-600",
    headerBg:       "from-blue-50/80 via-indigo-50/40 to-white",
    node:           "border-blue-300 bg-blue-50 text-blue-600",
    nodeHov:        "bg-blue-600 border-blue-600 text-white",
    nodeShadow:     "0 8px 32px rgba(37,99,235,0.42)",
    connectorColor: "rgba(59,130,246,0.38)",
    connector:      "bg-blue-100",
    titleHov:       "text-blue-600",
    unit:           "from-blue-50 to-indigo-50/40 border-blue-100",
    unitNumGrad:    "from-blue-600 to-indigo-600",
    unitText:       "text-blue-800",
    unitLabel:      "text-blue-500",
    badge:          "bg-blue-50 text-blue-700 border-blue-100",
    iconGrad:       "from-blue-500 to-blue-600",
    mascotBg:       "from-blue-50 to-indigo-50",
    mascotBorder:   "border-blue-100",
    progressBg:     "bg-blue-100",
    progressFill:   "bg-blue-600",
  },
  green: {
    headerGrad:     "from-emerald-600 to-teal-600",
    headerBg:       "from-emerald-50/80 via-teal-50/40 to-white",
    node:           "border-emerald-300 bg-emerald-50 text-emerald-600",
    nodeHov:        "bg-emerald-600 border-emerald-600 text-white",
    nodeShadow:     "0 8px 32px rgba(5,150,105,0.42)",
    connectorColor: "rgba(5,150,105,0.38)",
    connector:      "bg-emerald-100",
    titleHov:       "text-emerald-600",
    unit:           "from-emerald-50 to-teal-50/40 border-emerald-100",
    unitNumGrad:    "from-emerald-600 to-teal-600",
    unitText:       "text-emerald-800",
    unitLabel:      "text-emerald-500",
    badge:          "bg-emerald-50 text-emerald-700 border-emerald-100",
    iconGrad:       "from-emerald-500 to-emerald-600",
    mascotBg:       "from-emerald-50 to-teal-50",
    mascotBorder:   "border-emerald-100",
    progressBg:     "bg-emerald-100",
    progressFill:   "bg-emerald-600",
  },
  teal: {
    headerGrad:     "from-teal-600 to-cyan-600",
    headerBg:       "from-teal-50/80 via-cyan-50/40 to-white",
    node:           "border-teal-300 bg-teal-50 text-teal-600",
    nodeHov:        "bg-teal-600 border-teal-600 text-white",
    nodeShadow:     "0 8px 32px rgba(13,148,136,0.42)",
    connectorColor: "rgba(13,148,136,0.38)",
    connector:      "bg-teal-100",
    titleHov:       "text-teal-600",
    unit:           "from-teal-50 to-cyan-50/40 border-teal-100",
    unitNumGrad:    "from-teal-600 to-cyan-600",
    unitText:       "text-teal-800",
    unitLabel:      "text-teal-500",
    badge:          "bg-teal-50 text-teal-700 border-teal-100",
    iconGrad:       "from-teal-500 to-teal-600",
    mascotBg:       "from-teal-50 to-cyan-50",
    mascotBorder:   "border-teal-100",
    progressBg:     "bg-teal-100",
    progressFill:   "bg-teal-600",
  },
  violet: {
    headerGrad:     "from-violet-600 to-purple-600",
    headerBg:       "from-violet-50/80 via-purple-50/40 to-white",
    node:           "border-violet-300 bg-violet-50 text-violet-600",
    nodeHov:        "bg-violet-600 border-violet-600 text-white",
    nodeShadow:     "0 8px 32px rgba(124,58,237,0.42)",
    connectorColor: "rgba(124,58,237,0.38)",
    connector:      "bg-violet-100",
    titleHov:       "text-violet-600",
    unit:           "from-violet-50 to-purple-50/40 border-violet-100",
    unitNumGrad:    "from-violet-600 to-purple-600",
    unitText:       "text-violet-800",
    unitLabel:      "text-violet-500",
    badge:          "bg-violet-50 text-violet-700 border-violet-100",
    iconGrad:       "from-violet-500 to-violet-600",
    mascotBg:       "from-violet-50 to-purple-50",
    mascotBorder:   "border-violet-100",
    progressBg:     "bg-violet-100",
    progressFill:   "bg-violet-600",
  },
  amber: {
    headerGrad:     "from-amber-500 to-orange-500",
    headerBg:       "from-amber-50/80 via-orange-50/40 to-white",
    node:           "border-amber-300 bg-amber-50 text-amber-600",
    nodeHov:        "bg-amber-500 border-amber-500 text-white",
    nodeShadow:     "0 8px 32px rgba(245,158,11,0.42)",
    connectorColor: "rgba(245,158,11,0.38)",
    connector:      "bg-amber-100",
    titleHov:       "text-amber-600",
    unit:           "from-amber-50 to-orange-50/40 border-amber-100",
    unitNumGrad:    "from-amber-500 to-orange-500",
    unitText:       "text-amber-800",
    unitLabel:      "text-amber-500",
    badge:          "bg-amber-50 text-amber-700 border-amber-100",
    iconGrad:       "from-amber-500 to-amber-600",
    mascotBg:       "from-amber-50 to-orange-50",
    mascotBorder:   "border-amber-100",
    progressBg:     "bg-amber-100",
    progressFill:   "bg-amber-500",
  },
} as const;

type ThemeKey = keyof typeof PATH_THEME;

// ─── Chapter Node (zigzag path) ───────────────────────────────────────────────

function ChapterNode({
  chapter,
  theme,
  isLast,
  lang,
  globalIndex,
}: {
  chapter: Chapter;
  theme: (typeof PATH_THEME)[ThemeKey];
  isLast: boolean;
  lang: string;
  globalIndex: number;
}) {
  const [hovered, setHovered] = useState(false);
  const href = getChapterHref(chapter.href);
  const external = isExternal(chapter.href);
  const t = lang === "es";
  const isLeft = globalIndex % 2 === 0;

  return (
    <li
      className="list-none relative"
      style={{ height: isLast ? "88px" : "134px" }}
    >
      {/* Clickable row: node circle + text label */}
      <a
        href={href}
        target={external ? "_blank" : "_self"}
        rel={external ? "noopener noreferrer" : undefined}
        className={`absolute top-0 left-0 right-0 flex items-start gap-4 no-underline outline-none
          focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl
          ${isLeft ? "" : "flex-row-reverse"}`}
        style={{ height: "80px", zIndex: 1 }}
        aria-label={`${t ? "Capítulo" : "Chapter"} ${chapter.id}: ${chapter.title}${
          external ? (t ? " — PDF (nueva pestaña)" : " — PDF (new tab)") : ""
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        {/* Node circle */}
        <div
          className={`w-[76px] h-[76px] flex-shrink-0 rounded-full border-[3px] flex flex-col
            items-center justify-center transition-all duration-200 select-none
            ${hovered ? theme.nodeHov : theme.node}`}
          style={
            hovered
              ? { boxShadow: theme.nodeShadow, transform: "scale(1.12)" }
              : { transform: "scale(1)" }
          }
          aria-hidden="true"
        >
          <span className="text-[8px] font-extrabold uppercase tracking-widest opacity-40 leading-none">
            {t ? "cap" : "ch"}
          </span>
          <span className="text-[22px] font-black tabular-nums leading-none mt-0.5">
            {String(chapter.id).padStart(2, "0")}
          </span>
        </div>

        {/* Text label beside node */}
        <div className="flex-1 min-w-0 overflow-hidden" style={{ height: "76px" }}>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground/50 mb-1 leading-none tabular-nums">
            {t ? `Cap. ${chapter.id}` : `Ch. ${chapter.id}`}
          </p>
          <h3
            className={`text-[13px] font-bold leading-snug line-clamp-3 transition-colors duration-200 ${
              hovered ? theme.titleHov : "text-foreground"
            }`}
          >
            {chapter.title}
          </h3>
          {external && (
            <span className="inline-flex items-center gap-1 text-[9px] text-muted-foreground/40 mt-0.5">
              <ExternalLink className="w-2.5 h-2.5" aria-hidden="true" />
              PDF
            </span>
          )}
        </div>
      </a>

      {/* Bezier S-curve connector to next node.
          SVG is positioned left:38px right:38px so its edges align with node centers.
          viewBox 0-100 × 0-92 with preserveAspectRatio="none" means x=0 → left node center
          and x=100 → right node center at any container width. */}
      {!isLast && (
        <svg
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "80px",
            left: "38px",
            right: "38px",
            height: "92px",
            overflow: "visible",
            zIndex: 0,
          }}
          viewBox="0 0 100 92"
          preserveAspectRatio="none"
        >
          <path
            d={
              isLeft
                ? "M 0 0 C 0 46 100 46 100 92"
                : "M 100 0 C 100 46 0 46 0 92"
            }
            stroke={theme.connectorColor}
            strokeWidth="0.65"
            strokeDasharray="2.2 1.8"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      )}
    </li>
  );
}

// ─── Unit Header ──────────────────────────────────────────────────────────────

function UnitHeader({
  index,
  name,
  chaptersCount,
  theme,
  lang,
}: {
  index: number;
  name: string;
  chaptersCount: number;
  theme: (typeof PATH_THEME)[ThemeKey];
  lang: string;
}) {
  const t = lang === "es";
  return (
    <div
      className="relative my-10 first:mt-0"
      role="separator"
      aria-label={`${t ? "Unidad" : "Unit"} ${index + 1}: ${name}`}
    >
      {/* Full-width rule */}
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className={`w-full h-px ${theme.connector}`} />
      </div>

      {/* Floating badge centred on the rule */}
      <div className="relative flex items-center justify-center">
        <div
          className={`inline-flex items-center gap-2.5 pl-3.5 pr-4 py-2 rounded-2xl bg-white border shadow-sm ${theme.mascotBorder}`}
        >
          <div
            className={`w-7 h-7 rounded-xl flex-shrink-0 bg-gradient-to-br ${theme.unitNumGrad} flex items-center justify-center text-white font-extrabold text-xs shadow-sm`}
            aria-hidden="true"
          >
            {index + 1}
          </div>
          <div className="flex-shrink-0">
            <p className={`text-[9px] font-bold uppercase tracking-[0.16em] ${theme.unitLabel} leading-none mb-0.5`}>
              {t ? `Unidad ${index + 1}` : `Unit ${index + 1}`}
            </p>
            <p className={`text-[13px] font-bold ${theme.unitText} leading-none`}>{name}</p>
          </div>
          <span
            className={`text-[10px] font-semibold px-2 py-1 rounded-lg border flex-shrink-0 ${theme.badge}`}
          >
            {chaptersCount} {t ? "caps." : "chaps."}
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Sticky Mascot Panel (desktop) ────────────────────────────────────────────

function MascotPanel({
  course,
  theme,
  lang,
}: {
  course: ReturnType<typeof courses.find> & object;
  theme: (typeof PATH_THEME)[ThemeKey];
  lang: string;
}) {
  const t = lang === "es";
  const title = t ? course.titleEs : course.titleEn;
  const description = t ? course.descriptionEs : course.descriptionEn;
  const mascot = COURSE_MASCOTS[course.slug] ?? "/owl-logo.png";
  const totalChaps = course.chapters.length;

  return (
    <aside
      className="hidden lg:block"
      aria-label={t ? "Panel del curso" : "Course panel"}
    >
      <div
        className={`sticky top-24 rounded-3xl bg-gradient-to-b ${theme.mascotBg} border ${theme.mascotBorder} p-6 text-center overflow-hidden`}
      >
        {/* Mascot illustration */}
        <div className="relative mx-auto w-44 h-44 mb-4">
          <div
            className="absolute inset-4 rounded-full opacity-20 blur-xl"
            style={{
              background: `radial-gradient(circle, var(--node-accent, #3b82f6), transparent)`,
            }}
            aria-hidden="true"
          />
          <img
            src={mascot}
            alt=""
            aria-hidden="true"
            className="relative z-10 w-full h-full object-contain animate-float-slow select-none"
            loading="lazy"
          />
        </div>

        {/* Course info */}
        <h2 className={`font-extrabold text-base leading-snug mb-1.5 ${theme.unitText}`}>
          {title}
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>

        {/* Stats */}
        <div className={`rounded-xl ${theme.progressBg} p-3 mb-4 text-center`}>
          <p
            className={`text-2xl font-extrabold tabular-nums ${theme.unitText}`}
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}
          >
            {totalChaps}
          </p>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground/70">
            {t ? "capítulos" : "chapters"}
          </p>
        </div>

        {/* Free badge */}
        <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-muted-foreground">
          <GraduationCap className="w-3.5 h-3.5" aria-hidden="true" />
          {t ? "100% gratuito · sin registro" : "100% free · no sign-up"}
        </div>
      </div>
    </aside>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

const CoursePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();
  const t = lang === "es";

  const course = courses.find((c) => c.slug === slug);

  // ── Dynamic SEO meta + Course JSON-LD ─────────────────────────────────────
  const courseJsonLd = useMemo(() => {
    if (!course) return undefined;
    return {
      "@context": "https://schema.org",
      "@type": "Course",
      "@id": `https://espanolsinfronteras.org/curso/${course.slug}`,
      name: course.titleEs,
      alternateName: course.titleEn,
      description: course.descriptionEs,
      url: `https://espanolsinfronteras.org/curso/${course.slug}`,
      provider: {
        "@type": "EducationalOrganization",
        "@id": "https://espanolsinfronteras.org/#organization",
        name: "Español Sin Fronteras",
      },
      isAccessibleForFree: true,
      inLanguage: COURSE_LANGUAGE[course.slug] ?? "es",
      educationalLevel: course.slug === "ingles" ? "intermediate" : "beginner",
      teaches: [
        ...(COURSE_TOPICS[course.slug] ?? []),
        ...course.chapters.map((ch) => ch.title),
      ],
      audience: {
        "@type": "EducationalAudience",
        educationalRole: "student",
        audienceType: "Students and self-learners worldwide",
      },
      numberOfCredits: course.chapters.length,
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        courseWorkload: `PT${course.chapters.length * 30}M`,
        instructor: {
          "@type": "Person",
          "@id": "https://espanolsinfronteras.org/#salvador-b",
          name: "Salvador B.",
        },
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://espanolsinfronteras.org/" },
          { "@type": "ListItem", position: 2, name: "Cursos", item: "https://espanolsinfronteras.org/#cursos" },
          { "@type": "ListItem", position: 3, name: course.titleEs, item: `https://espanolsinfronteras.org/curso/${course.slug}` },
        ],
      },
    };
  }, [course]);

  useSEOMeta(
    course
      ? `${t ? course.titleEs : course.titleEn} | Español Sin Fronteras`
      : "Curso no encontrado | Español Sin Fronteras",
    course
      ? `${t ? course.descriptionEs : course.descriptionEn} ${course.chapters.length} ${t ? "capítulos gratuitos. Sin registro." : "free chapters. No sign-up."}`
      : undefined,
    courseJsonLd,
  );

  if (!course) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-5">
        <div className="text-center max-w-sm">
          <img
            src="/owl-logo.png"
            alt=""
            aria-hidden
            className="w-20 h-20 object-contain mx-auto mb-4 opacity-30"
          />
          <p className="text-6xl font-extrabold text-primary/20 mb-4" aria-hidden="true">
            404
          </p>
          <h1 className="text-xl font-bold text-foreground mb-2">
            {t ? "Curso no encontrado" : "Course not found"}
          </h1>
          <p className="text-muted-foreground text-sm mb-6">
            {t
              ? "El curso que buscas no existe o fue movido."
              : "The course you're looking for doesn't exist or was moved."}
          </p>
          <Link to="/" className="btn-primary">
            {t ? "Volver al inicio" : "Back to home"}
          </Link>
        </div>
      </div>
    );
  }

  const title = t ? course.titleEs : course.titleEn;
  const description = t ? course.descriptionEs : course.descriptionEn;
  const theme = PATH_THEME[course.colorClass as ThemeKey] ?? PATH_THEME.blue;
  const Icon = courseIconMap[course.icon];
  const mascot = COURSE_MASCOTS[course.slug] ?? "/owl-logo.png";

  const unitNames = UNIT_NAMES[course.slug] ?? [];
  const UNIT_SIZE = 6;
  const units = groupIntoUnits(course.chapters, UNIT_SIZE);

  return (
    <article aria-label={title}>
      {/* ── Course header ─────────────────────────────────────────────────── */}
      <header
        className={`bg-gradient-to-b ${theme.headerBg} border-b border-border/60 pt-10 pb-0 px-5 relative overflow-hidden`}
      >
        {/* Decorative gradient blob */}
        <div
          className={`absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-[0.07] blur-3xl bg-gradient-to-br ${theme.headerGrad}`}
          aria-hidden="true"
        />

        <div className="container-page relative z-10">
          {/* Breadcrumb */}
          <nav aria-label={t ? "Navegación de migas" : "Breadcrumb"} className="mb-7">
            <ol className="flex items-center gap-1.5 text-sm flex-wrap">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t ? "Inicio" : "Home"}
                </Link>
              </li>
              <li aria-hidden="true">
                <svg viewBox="0 0 16 16" className="w-3 h-3 text-muted-foreground/40 fill-current mx-0.5">
                  <path d="M5.293 3.293a1 1 0 011.414 0L11.414 8l-4.707 4.707a1 1 0 01-1.414-1.414L8.586 8 5.293 4.707a1 1 0 010-1.414z" />
                </svg>
              </li>
              <li>
                <Link to="/#cursos" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t ? "Cursos" : "Courses"}
                </Link>
              </li>
              <li aria-hidden="true">
                <svg viewBox="0 0 16 16" className="w-3 h-3 text-muted-foreground/40 fill-current mx-0.5">
                  <path d="M5.293 3.293a1 1 0 011.414 0L11.414 8l-4.707 4.707a1 1 0 01-1.414-1.414L8.586 8 5.293 4.707a1 1 0 010-1.414z" />
                </svg>
              </li>
              <li className="text-foreground font-medium" aria-current="page">
                {title}
              </li>
            </ol>
          </nav>

          {/* Course identity row */}
          <div className="flex items-start gap-5 pb-10">
            {/* Icon */}
            <div
              className={`w-16 h-16 bg-gradient-to-br ${theme.iconGrad} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}
              aria-hidden="true"
            >
              {Icon && <Icon className="w-7 h-7 text-white" strokeWidth={2} />}
            </div>

            <div className="flex-1 min-w-0">
              <h1 className="text-2xl md:text-[1.75rem] font-extrabold text-foreground tracking-tight mb-1.5 leading-tight">
                {title}
              </h1>
              <p className="text-muted-foreground text-[15px] max-w-lg mb-4 leading-relaxed">
                {description}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border shrink-0 ${theme.badge}`}>
                  <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                  {course.chapters.length} {t ? "capítulos" : "chapters"}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border border-border bg-secondary text-muted-foreground shrink-0">
                  <GraduationCap className="w-3.5 h-3.5" aria-hidden="true" />
                  {t ? "100% gratis" : "100% free"}
                </span>
              </div>
            </div>

            {/* Mobile mascot (hidden on desktop — desktop gets sticky aside) */}
            <div className="lg:hidden flex-shrink-0 -mt-2">
              <img
                src={mascot}
                alt=""
                aria-hidden="true"
                className="w-20 h-20 object-contain animate-float-slow"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </header>

      {/* ── Learning path + sticky mascot ─────────────────────────────────── */}
      <section className="py-12 px-5 bg-white" aria-labelledby="path-heading">
        <div className="container-page">
          <h2 id="path-heading" className="sr-only">
            {t ? `Ruta de aprendizaje — ${title}` : `Learning path — ${title}`}
          </h2>

          <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-14 items-start">
            {/* ── LEFT: chapter path ─────────────────────────────────────── */}
            <div>
              {units.map((unitChapters, unitIndex) => {
                const unitName =
                  unitNames[unitIndex] ??
                  (t ? `Unidad ${unitIndex + 1}` : `Unit ${unitIndex + 1}`);

                let globalStart = 0;
                for (let u = 0; u < unitIndex; u++) {
                  globalStart += units[u].length;
                }

                return (
                  <div key={unitIndex}>
                    <UnitHeader
                      index={unitIndex}
                      name={unitName}
                      chaptersCount={unitChapters.length}
                      theme={theme}
                      lang={lang}
                    />

                    <ol
                      className="mt-4"
                      aria-label={`${t ? "Capítulos de" : "Chapters of"} ${unitName}`}
                    >
                      {unitChapters.map((ch, chIndex) => {
                        const isLastInUnit = chIndex === unitChapters.length - 1;
                        const globalIdx = globalStart + chIndex;

                        return (
                          <ChapterNode
                            key={ch.id}
                            chapter={ch}
                            theme={theme}
                            isLast={isLastInUnit}
                            lang={lang}
                            globalIndex={globalIdx}
                          />
                        );
                      })}
                    </ol>
                  </div>
                );
              })}

              {/* Back link */}
              <div className="mt-10 pt-8 border-t border-border/60">
                <Link
                  to="/#cursos"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
                >
                  <ArrowLeft
                    className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"
                    aria-hidden="true"
                  />
                  {t ? "Ver todos los cursos" : "See all courses"}
                </Link>
              </div>
            </div>

            {/* ── RIGHT: sticky mascot panel (desktop) ─────────────────── */}
            {course && <MascotPanel course={course} theme={theme} lang={lang} />}
          </div>
        </div>
      </section>
    </article>
  );
};

export default CoursePage;
